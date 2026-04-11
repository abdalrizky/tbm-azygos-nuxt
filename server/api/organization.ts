import { createError } from 'h3'
import type { OrganizationApiItem } from '~/types/organization'

function isOrganizationApiItem(value: unknown): value is OrganizationApiItem {
  if (!value || typeof value !== 'object') {
    return false
  }

  const item = value as Record<string, unknown>

  return (
    typeof item.id === 'string' &&
    (typeof item.parent_id === 'string' || item.parent_id === null) &&
    typeof item.name === 'string' &&
    typeof item.position === 'string' &&
    (typeof item.display_photo_url === 'string' || item.display_photo_url === null)
  )
}

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const endpoint = `${config.organizationApiBase}/api/v1/organization`

  try {
    const response = await $fetch<unknown>(endpoint, {
      timeout: 15000,
      retry: 1,
    })

    if (!Array.isArray(response) || !response.every(isOrganizationApiItem)) {
      throw createError({
        statusCode: 502,
        statusMessage: 'Invalid organization response payload',
      })
    }

    return response
  } catch (error) {
    if (error && typeof error === 'object' && 'statusCode' in error) {
      throw error
    }

    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to fetch organization data',
    })
  }
})
