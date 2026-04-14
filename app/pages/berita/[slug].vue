<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// Use useApiFetch with a stable key and proper transform
const { data: newsData, error } = await useApiFetch(
  `/news/${slug}`,
  {
    key: `news-detail-${slug}`,
    transform: (res: any) => res.data
  }
)

if (error.value || !newsData.value) {
  throw createError({ statusCode: 404, statusMessage: 'Berita tidak ditemukan', fatal: true })
}

useSeoMeta({
  title: () => `${newsData.value?.title}`,
  description: () => newsData.value?.excerpt,
  ogImage: () => newsData.value?.header_image
})
</script>

<template>
  <div class="pt-16">
    <PagesNewsDetailSection v-if="newsData" :news="newsData" />
  </div>
</template>
