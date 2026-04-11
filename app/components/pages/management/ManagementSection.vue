<script setup lang="ts">
import D3OrgChart from '~/components/chart/D3OrgChart.client.vue'
import { getOrganizationStructure } from '~/services/organizationService'

const {
  data: organizationData,
  pending,
  error,
  refresh,
} = await useAsyncData('organization-structure', () => getOrganizationStructure(), {
  default: () => [],
})
</script>

<template>
  <section class="pt-12 relative z-10" id="tentang">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center w-full">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Struktur Organisasi</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Mengenal lebih dekat dengan pengurus inti TBM Azygos 2026.
        </p>
      </div>
    </div>
    <div v-if="pending" class="mt-12 text-center text-gray-500">Memuat struktur organisasi...</div>
    <div v-else-if="error" class="mt-12 text-center">
      <p class="text-red-600">Gagal memuat struktur organisasi. Silakan coba lagi.</p>
      <button
        type="button"
        class="mt-4 inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
        @click="refresh"
      >
        Muat ulang
      </button>
    </div>
    <div v-else-if="organizationData.length === 0" class="mt-12 text-center text-gray-500">
      Data struktur organisasi belum tersedia.
    </div>
    <D3OrgChart v-else :data="organizationData" class="mt-12" />
  </section>
</template>

<style scoped>
</style>