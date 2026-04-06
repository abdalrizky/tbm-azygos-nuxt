<script setup lang="ts">
import { getNewsBySlug } from '~/services/newsService'

const route = useRoute()
const slug = route.params.slug as string

// Use useAsyncData with a stable key and direct service call to prevent any hydration mismatch
const { data: newsData, error } = await useAsyncData(
  `news-detail-${slug}`,
  () => {
    return Promise.resolve(getNewsBySlug(slug))
  }
)

if (error.value || !newsData.value) {
  throw createError({ statusCode: 404, statusMessage: 'Berita tidak ditemukan', fatal: true })
}

useSeoMeta({
  title: () => `${newsData.value?.title}`,
  description: () => newsData.value?.excerpt,
  ogImage: () => newsData.value?.image
})
</script>

<template>
  <div class="pt-16">
    <PagesNewsDetailSection v-if="newsData" :news="newsData" />
  </div>
</template>
