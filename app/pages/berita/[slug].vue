<script setup lang="ts">
const route = useRoute()
const { data: newsData, error } = await useFetch(`/api/news/${route.params.slug}`)

if (error.value || !newsData.value) {
  throw createError({ statusCode: 404, statusMessage: 'Berita tidak ditemukan', fatal: true })
}

useSeoMeta({
  title: () => `${newsData.value?.title} - TBM Azygos`,
  description: () => newsData.value?.excerpt,
  ogImage: () => newsData.value?.image
})
</script>

<template>
  <div class="pt-16">
    <PagesNewsDetailSection v-if="newsData" :news="newsData" />
  </div>
</template>
