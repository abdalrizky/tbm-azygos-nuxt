<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  news: {
    type: Object,
    default: null
  }
});

const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>

<template>
  <section class="py-16 bg-white min-h-screen">
    <div v-if="news" class="max-w-4xl mx-auto px-4 sm-px-6 lg:px-8">
      <article>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          {{ news.title }}
        </h1>

        <div class="lg:flex items-center text-gray-500 mb-8">
          <span>Oleh {{ news.author }}</span>
          <span class="mx-2">&bull;</span>
          <span>{{ formatDate(news.date) }}</span>
        </div>

        <img :src="news.image" :alt="news.title" class="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8">

        <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p v-html="news.body"></p>
        </div>

        <div class="mt-12">
          <RouterLink to="/berita" class="text-blue-600 hover:text-blue-800 font-semibold">
            &larr; Kembali ke semua berita
          </RouterLink>
        </div>
      </article>
    </div>

    <div v-else class="text-center py-20">
      <h2 class="text-2xl font-semibold text-gray-700">Berita tidak ditemukan.</h2>
      <RouterLink to="/berita" class="text-blue-600 hover:text-blue-800 mt-4 inline-block">
        Kembali ke daftar berita
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>

:deep(ol) {
  list-style-type: decimal;
  padding-left: 40px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

</style>