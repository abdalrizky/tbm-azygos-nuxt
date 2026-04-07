<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';

const isOpen = ref(false);
const isMembershipOpen = ref(false);
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

const isMembershipActive = computed(() =>
  route.path.startsWith('/struktur-organisasi') || route.path.startsWith('/daftar-anggota')
);

const navLinkClasses = computed(() => (path) => {
  const isActive = path === '/'
    ? route.path === '/'
    : route.path.startsWith(path);

  if (isNavSolid.value) {
    return [
      'transition-colors duration-300 font-medium relative group',
      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
    ];
  } else {
    return [
      'transition-colors duration-300 font-medium relative group',
      isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white'
    ];
  }
});

const activeDotClasses = computed(() => (path) => {
  const isActive = path === '/'
    ? route.path === '/'
    : route.path.startsWith(path);
  return isActive
    ? 'absolute -bottom-1 left-0 w-full h-0.5 bg-current rounded-full'
    : 'absolute -bottom-1 left-0 w-0 h-0.5 bg-current rounded-full transition-all duration-300 group-hover:w-full';
});

watch(route, () => {
  updateNavState();
  isMembershipOpen.value = false;
  isOpen.value = false;
}, { immediate: true, deep: true });

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
      { 'bg-white/70 backdrop-blur-lg border-b border-gray-100/30 shadow-sm': isNavSolid, 'bg-transparent': !isNavSolid }
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <!-- Logo -->
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

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" :class="navLinkClasses('/')">
            Beranda
            <span :class="activeDotClasses('/')"></span>
          </NuxtLink>

          <!-- Dropdown Keanggotaan -->
          <div class="relative">
            <button
              @click="isMembershipOpen = !isMembershipOpen"
              :class="[
                'flex items-center gap-1 transition-colors duration-300 font-medium group',
                isNavSolid
                  ? (isMembershipActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600')
                  : (isMembershipActive ? 'text-white font-bold' : 'text-white/80 hover:text-white')
              ]"
            >
              Keanggotaan
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': isMembershipOpen }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <!-- Active indicator -->
              <span
                :class="[
                  'absolute -bottom-1 left-0 h-0.5 bg-current rounded-full transition-all duration-300',
                  isMembershipActive ? 'w-full' : 'w-0 group-hover:w-full'
                ]"
              ></span>
            </button>

            <!-- Dropdown Panel -->
            <Transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="isMembershipOpen"
                class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <NuxtLink
                  to="/struktur-organisasi"
                  :class="[
                    'flex items-center px-4 py-3 text-sm font-medium transition-colors duration-150',
                    route.path === '/struktur-organisasi'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  ]"
                >
                  <svg class="w-4 h-4 mr-2 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                  Struktur Organisasi
                </NuxtLink>
                <NuxtLink
                  to="/daftar-anggota"
                  :class="[
                    'flex items-center px-4 py-3 text-sm font-medium transition-colors duration-150 border-t border-gray-100',
                    route.path === '/daftar-anggota'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  ]"
                >
                  <svg class="w-4 h-4 mr-2 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Daftar Anggota
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <NuxtLink to="/program-kerja" :class="navLinkClasses('/program-kerja')">
            Program Kerja
            <span :class="activeDotClasses('/program-kerja')"></span>
          </NuxtLink>
          <NuxtLink to="/layanan" :class="navLinkClasses('/layanan')">
            Layanan
            <span :class="activeDotClasses('/layanan')"></span>
          </NuxtLink>
          <NuxtLink to="/berita" :class="navLinkClasses('/berita')">
            Berita
            <span :class="activeDotClasses('/berita')"></span>
          </NuxtLink>
        </div>

        <!-- Mobile Hamburger -->
        <div class="md:hidden flex items-center">
          <button
            @click="isOpen = !isOpen"
            :class="[
              'focus:outline-none transition-colors duration-300',
              { 'text-white hover:text-gray-300': !isNavSolid, 'text-gray-700 hover:text-blue-600': isNavSolid }
            ]"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isOpen" class="md:hidden bg-white border-t shadow-lg">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <NuxtLink
              to="/"
              :class="[
                'block px-3 py-2 rounded-lg font-medium transition-colors duration-150',
                route.path === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              ]"
            >Beranda</NuxtLink>

            <!-- Mobile: Keanggotaan sub-section -->
            <div>
              <button
                @click="isMembershipOpen = !isMembershipOpen"
                :class="[
                  'w-full text-left flex items-center justify-between px-3 py-2 rounded-lg font-medium transition-colors duration-150',
                  isMembershipActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                ]"
              >
                Keanggotaan
                <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': isMembershipOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-if="isMembershipOpen" class="ml-4 mt-1 space-y-1 border-l-2 border-blue-100 pl-3">
                <NuxtLink
                  to="/struktur-organisasi"
                  :class="[
                    'block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                    route.path === '/struktur-organisasi' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  ]"
                >Struktur Organisasi</NuxtLink>
                <NuxtLink
                  to="/daftar-anggota"
                  :class="[
                    'block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                    route.path === '/daftar-anggota' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  ]"
                >Daftar Anggota</NuxtLink>
              </div>
            </div>

            <NuxtLink
              to="/program-kerja"
              :class="[
                'block px-3 py-2 rounded-lg font-medium transition-colors duration-150',
                route.path === '/program-kerja' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              ]"
            >Program Kerja</NuxtLink>
            <NuxtLink
              to="/layanan"
              :class="[
                'block px-3 py-2 rounded-lg font-medium transition-colors duration-150',
                route.path === '/layanan' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              ]"
            >Layanan</NuxtLink>
            <NuxtLink
              to="/berita"
              :class="[
                'block px-3 py-2 rounded-lg font-medium transition-colors duration-150',
                route.path.startsWith('/berita') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              ]"
            >Berita</NuxtLink>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Click outside to close dropdown -->
    <div v-if="isMembershipOpen" class="fixed inset-0 z-[-1]" @click="isMembershipOpen = false"></div>
  </nav>
</template>