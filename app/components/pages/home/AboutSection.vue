<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <section class="relative py-12">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt" id="tentang-kami">
      
      <!-- Main Intro Card -->
      <div class="bg-white/70 backdrop-blur-md border border-white/40 p-8 md:p-12 lg:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-12 transform transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
        <div class="flex flex-col md:flex-row items-center gap-10">
          <div class="flex-shrink-0">
            <img src="/azygos-logo.png" width="300" alt="Logo TBM Azygos" class="w-48 md:w-64 h-auto drop-shadow-xl" draggable="false" />
          </div>
          <div class="text-center md:text-left flex-grow">
            <h3 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Apa itu <span class="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">TBM Azygos?</span>
            </h3>
            <p class="text-gray-800 font-semibold text-lg mb-3">
              Tim Bantuan Medis Azygos <br class="hidden md:block"> Fakultas Kedokteran Universitas Mulawarman
            </p>
            <p class="text-gray-600 leading-relaxed text-md">
              Dideklarasikan pada 28 September 2005, TBM Azygos merupakan unit kegiatan mahasiswa yang bergerak di garda terdepan dalam bidang kegawatdaruratan medis.
            </p>
          </div>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="group bg-white/70 backdrop-blur-md border border-white/40 p-8 lg:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:bg-blue-200 transition-colors duration-500 z-0"></div>
          <div class="relative z-10">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-3 transition-transform duration-300">
              <Icon icon="solar:card-2-linear" style="font-size: 32px;" />
            </div>
            <h3 class="text-2xl font-bold border-b-2 border-blue-100 pb-3 mb-4 text-gray-900">
              Makna Nama Azygos
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Diambil dari vena Azygos yang berarti <span class="font-semibold text-blue-700">tidak berpasangan</span>, yang bermakna mandiri dan berdikari serta menjunjung tinggi semata-mata untuk kemanusiaan.
            </p>
          </div>
        </div>
        
        <div class="group bg-white/70 backdrop-blur-md border border-white/40 p-8 lg:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] relative overflow-hidden">
          <div class="absolute top-0 left-0 w-32 h-32 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:bg-teal-200 transition-colors duration-500 z-0"></div>
           <div class="relative z-10">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-3 transition-transform duration-300">
              <Icon icon="tdesign:member" style="font-size: 32px;" />
            </div>
            <h3 class="text-2xl font-bold border-b-2 border-teal-100 pb-3 mb-4 text-gray-900">
              Keanggotaan
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Anggota TBM Azygos adalah keluarga mahasiswa FK Unmul yang telah memenuhi syarat-syarat teknis keanggotaan dengan masa kerja dan bakti <span class="font-semibold text-teal-700">seumur hidup</span>.
            </p>
          </div>
        </div>
      </div>

      <!-- Vision & Mission -->
      <div class="bg-white/70 backdrop-blur-md border border-white/40 p-8 md:p-12 lg:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform transition-default hover:shadow-[0_8px_40px_rgb(0,0,0,0.06)] relative overflow-hidden">
        
        <!-- Decorative bg arc for Visi Misi -->
        <div class="absolute -top-[20%] -right-[10%] w-96 h-96 bg-blue-50/50 rounded-full filter blur-3xl pointer-events-none"></div>

        <div class="text-center mb-10 relative z-10">
          <div class="inline-block p-4 rounded-full bg-blue-50 text-blue-600 mb-4 shadow-sm border border-blue-100/50">
             <Icon icon="octicon:rocket-24" style="font-size: 40px;" />
          </div>
          <h2 class="text-4xl font-extrabold text-gray-900 tracking-tight">
            Visi & Misi
          </h2>
        </div>

        <div class="space-y-12 relative z-10">
          <!-- Visi -->
          <div class="bg-blue-50 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <Icon icon="mdi:eye-outline" class="mr-3 text-blue-600" /> Visi
            </h3>
            <p class="text-gray-700 text-lg font-medium leading-relaxed">
              "Peningkatan derajat kesehatan masyarakat Indonesia khususnya di Kalimantan Timur, terutama dalam bidang kegawatdaruratan medis."
            </p>
          </div>

          <!-- Misi -->
          <div class="bg-blue-50 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center px-2">
              <Icon icon="mdi:target-arrow" class="mr-3 text-blue-500" /> Misi Kami
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex items-start bg-white/60 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <Icon icon="heroicons:check-badge-solid" class="text-blue-500 text-3xl flex-shrink-0 mt-1 mr-4" />
                <p class="text-gray-700 leading-relaxed text-sm">Memberikan bantuan medis kepada masyarakat dalam penanggulangan bencana kemanusiaan dan kecelakaan pra rumah sakit serta bantuan kesehatan kegawatdaruratan.</p>
              </div>
              <div class="flex items-start bg-white/60 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <Icon icon="heroicons:check-badge-solid" class="text-blue-500 text-3xl flex-shrink-0 mt-1 mr-4" />
                <p class="text-gray-700 leading-relaxed text-sm">Meningkatkan pengetahuan dan kemampuan literasi masyarakat awam tentang prosedur dasar kegawatdaruratan medis.</p>
              </div>
              <div class="flex items-start bg-white/60 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <Icon icon="heroicons:check-badge-solid" class="text-blue-500 text-3xl flex-shrink-0 mt-1 mr-4" />
                <p class="text-gray-700 leading-relaxed text-sm">Mengembangkan serta mewadahi minat dan bakat mahasiswa kedokteran dalam bidang keilmuan kegawatdaruratan medis.</p>
              </div>
              <div class="flex items-start bg-white/60 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <Icon icon="heroicons:check-badge-solid" class="text-blue-500 text-3xl flex-shrink-0 mt-1 mr-4" />
                <p class="text-gray-700 leading-relaxed text-sm">Mewujudkan arti penting peranan TBM Azygos FK Unmul dalam optimalisasi sinergi penanggulangan bencana di tingkat lokal maupun nasional.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scroll-mt {
  scroll-margin-top: 100px;
}
</style>