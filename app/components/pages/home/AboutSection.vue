<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <section class="bg-gray-50">
    <div class="max-w-4xl mx-auto py-6 mb-6 scroll-mt" id="tentang-kami">
      <div class="bg-white p-8 lg:rounded-2xl shadow-md mb-8 text-center">
        <img src="/azygos-logo.png" width="550" alt="Logo TBM Azygos" class="w-auto h-24 mx-auto mb-4" draggable="false" />
        <h3 class="text-2xl font-bold text-blue-600 mb-4 tracking-wider">
          Apa itu TBM Azygos?
        </h3>
        <p class="text-gray-800 font-semibold">
          Tim Bantuan Medis Azygos
          <br>Fakultas Kedokteran Universitas Mulawarman
        </p>
        <p class="text-gray-600 mt-2 leading-relaxed">
          dideklarasikan pada 28 September 2005. TBM Azygos merupakan unit kegiatan mahasiswa yang bergerak di bidang kegawatdaruratan medis.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-white p-8 lg:rounded-2xl shadow-md">
          <Icon icon="solar:card-2-linear" class="text-blue-600" style="font-size: 64px;" />
          <h3 class="text-xl font-bold text-blue-600 mb-3 tracking-wider">
            Makna Nama Azygos
          </h3>
          <p class="text-gray-600">
            Nama Azygos diambil dari vena Azygos yang berarti tidak berpasangan, yang bermakna mandiri dan berdikari yang menjunjung tinggi semata-mata untuk kemanusiaan.
          </p>
        </div>
        <div class="bg-white p-8 lg:rounded-2xl shadow-md">
          <Icon icon="tdesign:member" class="text-blue-600" style="font-size: 64px;" />
          <h3 class="text-xl font-bold text-blue-600 mb-3 tracking-wider">
            Keanggotaan TBM Azygos
          </h3>
          <p class="text-gray-600">
            Anggota TBM Azygos adalah keluarga mahasiswa FK Unmul yang telah memenuhi syarat-syarat keanggotaan dengan masa keanggotaan seumur hidup.
          </p>
        </div>
      </div>

      <div class="bg-white p-8 lg:rounded-2xl shadow-md">
        <div class="text-center mb-8">
          <Icon icon="octicon:rocket-24" class="text-center mx-auto text-blue-600" style="font-size: 64px;" />
          <h2 class="text-3xl font-bold text-blue-600 mt-6">
            Visi & Misi
          </h2>
        </div>

        <div class="mb-8">
          <h3 class="text-xl font-bold text-blue-600 mb-3">
            Visi
          </h3>
          <p class="text-gray-700">
            Peningkatan derajat kesehatan masyarakat Indonesia khususnya di Kalimantan Timur terutama dalam bidang kegawatdaruratan medis.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-blue-600 mb-3">
            Misi
          </h3>
          <ol class="list-decimal list-inside space-y-3 text-gray-700">
            <li>Memberikan bantuan medis kepada masyarakat dalam penanggulangan bencana kemanusiaan dan kecelakaan pra rumah sakit serta bantuan kesehatan kepada masyarakat terutama yang berkaitan dengan kegawatdaruratan medis.</li>
            <li>Meningkatkan pengetahuan dan kemampuan masyarakat tentang kegawatdaruratan medis.</li>
            <li>Mengembangkan minat dan bakat mahasiswa kedokteran dalam bidang ilmu kegawatdaruratan medis.</li>
            <li>Mewujudkan arti penting TBM Azygos FK Unmul dalam optimalisasi penanggulangan bencana di tingkat lokal dan tingkat nasional.</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scroll-mt {
  scroll-margin-top: 80px;
}
</style>