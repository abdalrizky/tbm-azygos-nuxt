<script setup>
import { ref } from 'vue';

const { data: workPrograms } = await useApiFetch('/programs', {
  key: 'program-list',
  transform: (res) => res.data || []
});
</script>

<template>
  <section class="py-12 relative z-10" id="program-kerja">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Program Kerja</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Berbagai inisiatif dan kegiatan unggulan yang kami jalankan untuk melayani masyarakat dan mengembangkan keterampilan anggota.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div v-for="program in workPrograms" :key="program.id || program.name" class="bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col transform hover:-translate-y-2 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-300">

          <img :src="program.header_image" :alt="program.name" class="w-full h-48 object-cover">

          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ program.name }}</h3>
            <p class="text-gray-600 leading-relaxed flex-grow">{{ program.description }}</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>