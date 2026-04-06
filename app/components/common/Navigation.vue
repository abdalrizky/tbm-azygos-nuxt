<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';

const isOpen = ref(false);
const route = useRoute();
const isNavSolid = ref(true);
const isHomepage = computed(() => route.path === '/');

const updateNavState = () => {
  if (isHomepage.value) {
    isNavSolid.value = typeof window !== 'undefined' ? window.scrollY > 10 : false;
  } else {
    isNavSolid.value = true;
  }
};

const linkClasses = computed(() => [
  'transition-colors duration-300',
  {
    'text-white hover:text-gray-300': !isNavSolid.value,
    'text-gray-700 hover:text-blue-600': isNavSolid.value
  }
]);

watch(route, updateNavState, { immediate: true, deep: true });

onMounted(() => {
  window.addEventListener('scroll', updateNavState);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateNavState);
});
</script>

<template>
  <nav
      :class="[
      'fixed w-full top-0 z-50 transition-colors duration-300',
      { 'bg-white shadow-lg': isNavSolid, 'bg-transparent': !isNavSolid }
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <NuxtLink to="/" class="flex items-center">
          <img
              src="/azygos-logo.png"
              alt="Tim Bantuan Medis Azygos"
              class="h-10 w-auto"
          />
          <span
              :class="[
              'ml-3 text-xl font-bold transition-colors duration-300',
              { 'text-white': !isNavSolid, 'text-gray-800': isNavSolid }
            ]"
          >
            TBM Azygos
          </span>
        </NuxtLink>

        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" :class="linkClasses">Beranda</NuxtLink>
          <NuxtLink to="/struktur-organisasi" :class="linkClasses">Struktur Organisasi</NuxtLink>
          <NuxtLink to="/daftar-anggota" :class="linkClasses">Daftar Anggota</NuxtLink>
          <NuxtLink to="/program-kerja" :class="linkClasses">Program Kerja</NuxtLink>
          <NuxtLink to="/layanan" :class="linkClasses">Layanan</NuxtLink>
          <NuxtLink to="/berita" :class="linkClasses">Berita</NuxtLink>
        </div>

        <div class="md:hidden flex items-center">
          <button
              @click="isOpen = !isOpen"
              :class="[
              'focus:outline-none transition-colors duration-300',
              { 'text-white hover:text-gray-300': !isNavSolid, 'text-gray-700 hover:text-blue-600': isNavSolid }
            ]"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor">
              <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="isOpen" class="md:hidden bg-white border-t">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink to="/" class="block px-3 py-2 text-gray-700 hover:text-blue-600" @click="isOpen = false">Beranda</NuxtLink>
          <NuxtLink to="/struktur-organisasi" class="block px-3 py-2 text-gray-700 hover:text-blue-600" @click="isOpen = false">Struktur Organisasi</NuxtLink>
          <NuxtLink to="/daftar-anggota" class="block px-3 py-2 text-gray-700 hover:text-blue-600" @click="isOpen = false">Daftar Anggota</NuxtLink>
          <NuxtLink to="/program-kerja" class="block px-3 py-2 text-gray-700 hover:text-blue-600" @click="isOpen = false">Program Kerja</NuxtLink>
          <NuxtLink to="/layanan" class="block px-3 py-2 text-gray-700 hover:text-blue-600" @click="isOpen = false">Layanan</NuxtLink>
          <NuxtLink to="/berita" class="block px-3 py-2 text-gray-700 hover:text-blue-600" @click="isOpen = false">Berita</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>