<script setup lang="ts">
import { ref } from 'vue'
import { getNewsBySlug } from '~/services/newsService'

const route = useRoute()
const slug = route.params.slug as string

// Use useAsyncData to ensure state is serialized for hydration
const { data: newsData } = await useAsyncData(`news-${slug}`, () => {
  return getNewsBySlug(slug)
})

if (!newsData.value) {
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
