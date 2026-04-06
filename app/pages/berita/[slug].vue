<script setup lang="ts">
import { ref } from 'vue'
import { getNewsBySlug } from '~/services/newsService'

const route = useRoute()
const newsData = ref(getNewsBySlug(route.params.slug as string))

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
