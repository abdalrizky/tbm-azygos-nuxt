<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <section class="relative py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center mb-16 relative z-10">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Profil TBM Azygos</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Simak cuplikan video perkenalan kami untuk mendapatkan gambaran lebih dekat mengenai keseharian dan aksi nyata TBM Azygos.
        </p>
      </div>

      <!-- Glassmorphism Video Wrapper -->
      <div class="relative group mx-auto max-w-5xl z-10">
        <!-- Glow effect behind the video -->
        <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
        
        <div class="relative bg-white/40 backdrop-blur-xl border border-white/50 p-3 md:p-4 rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.01]">
          <div class="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
            <iframe 
              class="w-full h-full object-cover" 
              src="https://www.youtube.com/embed/MHSI-3_vbXA?autoplay=1&mute=1" 
              title="YouTube video player" 
              allow="autoplay" 
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>