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
  return 'bg-transparent';
});

const { data: newsResponse } = await useApiFetch('/news', {
  key: 'news-list',
  transform: (res) => res.data || []
});

const displayedNews = computed(() => {
  if (props.limit > 0 && newsResponse.value) {
    return newsResponse.value.slice(0, props.limit);
  }
  return newsResponse.value || [];
});
</script>

<template>
  <section class="py-12 relative z-10" :class="backgroundClass" id="berita">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 relative z-10">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Berita & Kegiatan</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Informasi terkini mengenai kegiatan, program, dan layanan dari tim kami.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        <RouterLink
            v-for="news in displayedNews"
            :key="news.id"
            :to="`/berita/${news.slug}`"
            class="group block bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transform hover:-translate-y-2 transition-all duration-300"
        >
          <article class="h-full flex flex-col">
            <div class="relative h-56 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
              <img :src="news.header_image" :alt="news.title" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute bottom-4 left-4 z-20">
                <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold rounded-full shadow-sm">
                  {{ formatDate(news.date) }}
                </span>
              </div>
            </div>
            <div class="p-8 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {{ news.title }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {{ news.excerpt }}
              </p>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100/60">
                <span class="text-xs font-medium text-gray-500 tracking-wider">oleh {{ news.author }}</span>
                <span class="bg-blue-50 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  &rarr;
                </span>
              </div>
            </div>
          </article>
        </RouterLink>
      </div>

      <div v-if="showViewAllButton" class="text-center mt-12 relative z-10">
        <RouterLink to="/berita" class="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-sm hover:bg-blue-700 hover:shadow transition-all duration-200">
          Lihat Semua Berita
        </RouterLink>
      </div>
    </div>
  </section>
</template>