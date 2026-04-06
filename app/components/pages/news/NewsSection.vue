<script setup>
import { ref, onMounted, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';


const props = defineProps({
  limit: {
    type: Number,
    default: 0
  },
  showViewAllButton: {
    type: Boolean,
    default: false
  }
});



const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const route = useRoute();
const backgroundClass = computed(() => {
  return route.path === '/' ? 'bg-blue-50' : 'bg-white';
});

// Fetch data using useFetch from the Nitro API endpoint
const { data: allNews } = await useFetch('/api/news');

const displayedNews = computed(() => {
  if (props.limit > 0 && allNews.value) {
    return allNews.value.slice(0, props.limit);
  }
  return allNews.value || [];
});
</script>

<template>
  <section class="py-12" :class="backgroundClass" id="berita">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Berita</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Informasi terkini mengenai kegiatan, program, dan layanan dari<br>Tim Bantuan Medis Azygos.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink
            v-for="news in displayedNews"
            :key="news.id"
            :to="`/berita/${news.slug}`"
            class="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
        >
          <article>
            <div class="relative h-48">
              <img :src="news.image" :alt="news.title" class="w-full h-full object-cover"/>
            </div>
            <div class="p-6">
              <div class="text-sm text-blue-600 font-medium mb-2">
                {{ formatDate(news.date) }}
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {{ news.title }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                {{ news.excerpt }}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-xs text-gray-500">oleh {{ news.author }}</span>
                <span class="text-blue-600 group-hover:text-blue-800 text-sm font-medium transition-colors">
                  &rarr;
                </span>
              </div>
            </div>
          </article>
        </RouterLink>
      </div>

      <div v-if="showViewAllButton" class="text-center mt-12">
        <RouterLink to="/berita" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
          Lihat Semua Berita
        </RouterLink>
      </div>
    </div>
  </section>
</template>