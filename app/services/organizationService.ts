import type { OrganizationApiItem, OrganizationChartNode } from '~/types/organization'

export function mapOrganizationItemToChartNode(item: OrganizationApiItem): OrganizationChartNode {
  return {
    id: item.id,
    parentId: item.parent_id ?? '',
    nama: item.name,
    jabatan: item.position,
    imageUrl: item.display_photo_url ?? '',
  }
}

export async function getOrganizationStructure(): Promise<OrganizationChartNode[]> {
  const data = await $fetch<OrganizationApiItem[]>('/api/organization')

  return data.map(mapOrganizationItemToChartNode)
}


