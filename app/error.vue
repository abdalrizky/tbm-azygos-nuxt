<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })

useSeoMeta({
  title: 'Halaman Tidak Ditemukan'
})
</script>

<template>
  <NuxtLayout>
    <div class="pt-16 min-h-screen flex flex-col justify-center items-center">
      <PagesNotFoundSection />
      <button @click="handleError" class="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Kembali ke Beranda
      </button>
    </div>
  </NuxtLayout>
</template>
