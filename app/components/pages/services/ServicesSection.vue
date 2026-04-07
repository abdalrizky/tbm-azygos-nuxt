<script setup>
</script>

<template>
  <section class="py-12 relative z-10" id="layanan">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Layanan</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Informasi mengenai alur kerja sama, peminjaman alat, dan layanan lain dari<br>Tim Bantuan Medis Azygos.
        </p>
      </div>

      <div class="max-w-xl mx-auto">
        <div class="mb-20">
          <h3 class="text-3xl font-bold text-gray-900 text-center mb-6">
            Alur Kerja Sama
          </h3>
          <div class="bg-white/70 backdrop-blur-md border border-white/40 p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <img
                src="~/assets/images/alur-kerja-sama.png"
                alt="Diagram alur kerja sama"
                class="w-full h-auto rounded-lg"
            >
          </div>
        </div>

        <div>
          <h3 class="text-3xl font-bold text-gray-900 text-center mb-6">
            Peminjaman Alat Kesehatan
          </h3>

          <div class="mb-12">
            <h4 class="text-2xl font-semibold text-gray-800 text-center mb-6">
              Biaya
            </h4>
            <div class="bg-white/70 backdrop-blur-md border border-white/40 p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <img
                  src="~/assets/images/daftar-harga-peminjaman-alat-kesehatan.png"
                  alt="Daftar harga peminjaman alat kesehatan"
                  class="w-full h-auto rounded-lg"
              >
            </div>
          </div>

          <div>
            <h4 class="text-2xl font-semibold text-gray-800 text-center mb-6">
              Syarat dan Ketentuan
            </h4>
            <div class="bg-white/70 backdrop-blur-md border border-white/40 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-gray-800">
              <ol class="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  Menyerahkan surat permohonan peminjaman yang ditandatangani oleh pihak peminjam paling lambat 1 minggu sebelumnya.
                </li>
                <li>
                  Biaya perawatan yang tercantum berlaku per-peminjaman.
                </li>
                <li>
                  Batas peminjaman maksimal 1 minggu, jika lebih akan dikenakan biaya tambahan dari biaya perawatan barang.
                </li>
                <li>
                  Kehilangan dan kerusakan ditanggung oleh pihak peminjam dan di luar dari biaya perawatan peminjaman normal.
                </li>
                <li>
                  Batas pengembalian alat maksimal 3 hari setelah hari peminjaman berakhir, jika lewat dari 3 hari maka akan dihitung 2x periode peminjaman.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<style scoped>

</style>