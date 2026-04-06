<script setup>
import {ref} from "vue";
import D3OrgChart from "~/components/chart/D3OrgChart.client.vue";
const organizationData = ref([
  { id: "1", parentId: "", nama: "Atoluan Joshua Nosa", jabatan: "Ketua Umum" },
  { id: "4", parentId: "1", nama: "Cecilia Florentina Sihotang", jabatan: "Kepala Divisi Diklat" },
  { id: "5", parentId: "1", nama: "Meilia Dwi Utami", jabatan: "Kepala Divisi Logistik" },
  { id: "6", parentId: "1", nama: "Emir Muhammad Hajid Kaharuddin", jabatan: "Kepala Divisi Banmed" },
  { id: "2", parentId: "1", nama: "Rugaia Revianti", jabatan: "Sekretaris Umum" },
  { id: "3", parentId: "1", nama: "Alya Dewi Lestari", jabatan: "Bendahara Umum" },
  { id: "7", parentId: "1", nama: "Elsa Aulia Rahmawati", jabatan: "Kepala Divisi Humas" },
  { id: "8", parentId: "1", nama: "Muhammad Ari Ramadhani", jabatan: "Kepala Divisi Kaderisasi" },
  { id: "9", parentId: "1", nama: "Sri Adiningsih", jabatan: "Kepala Divisi Medikraf" },
  { id: "10", parentId: "5", nama: "Ajeng Ayu Natasya", jabatan: "Anggota Divisi Logistik" },
  { id: "11", parentId: "4", nama: "Aling Dwi Putra", jabatan: "Anggota Divisi Diklat" },
  { id: "12", parentId: "7", nama: "Annur Selvia", jabatan: "Anggota Divisi Humas" },
  { id: "13", parentId: "5", nama: "Ardhana Nila Zada Nabila", jabatan: "Anggota Divisi Logistik" },
  { id: "14", parentId: "7", nama: "Arif Fadlil Asykuri", jabatan: "Anggota Divisi Humas" },
  { id: "15", parentId: "6", nama: "Denis Tia Ifo", jabatan: "Anggota Divisi Banmed" },
  { id: "16", parentId: "8", nama: "Hani Khairunnisa Nasution", jabatan: "Anggota Divisi Kaderisasi" },
  { id: "17", parentId: "6", nama: "Insyatul Fitri", jabatan: "Anggota Divisi Banmed" },
  { id: "18", parentId: "4", nama: "Joycelyn Isoka Sondang Eldora", jabatan: "Anggota Divisi Diklat" },
  { id: "19", parentId: "7", nama: "Lisa Ismayani", jabatan: "Anggota Divisi Humas" },
  { id: "20", parentId: "7", nama: "Maria Laula Januarika", jabatan: "Anggota Divisi Humas" },
  { id: "21", parentId: "4", nama: "Meisyafirna Deviarlani", jabatan: "Anggota Divisi Diklat" },
  { id: "22", parentId: "6", nama: "Miftahul Jannah", jabatan: "Anggota Divisi Banmed" },
  { id: "23", parentId: "9", nama: "Muhammad Raihan Saputra", jabatan: "Anggota Divisi Medikraf" },
  { id: "24", parentId: "8", nama: "Muhammad Zaky Fauzan Ardiansyah", jabatan: "Anggota Divisi Kaderisasi" },
  { id: "25", parentId: "6", nama: "Naiara Dameris Putri Nugroho", jabatan: "Anggota Divisi Banmed" },
  { id: "26", parentId: "5", nama: "Natasha Alexandra Himawan", jabatan: "Anggota Divisi Logistik" },
  { id: "27", parentId: "4", nama: "Nayna Dwi Patira Putri", jabatan: "Anggota Divisi Diklat" },
  { id: "28", parentId: "5", nama: "Nur Azizah Marwah", jabatan: "Anggota Divisi Logistik" },
  { id: "29", parentId: "8", nama: "Riwanda Nurqolbi", jabatan: "Anggota Divisi Kaderisasi" },
  { id: "30", parentId: "8", nama: "Rizky Cahya Sethyorini", jabatan: "Anggota Divisi Kaderisasi" },
  { id: "31", parentId: "7", nama: "Shafa Aqila Rachman", jabatan: "Anggota Divisi Humas" },
  { id: "32", parentId: "4", nama: "Ummu Aulia Muthmainnah", jabatan: "Anggota Divisi Diklat" },
  { id: "33", parentId: "7", nama: "Azhar Zuhairy Azmi", jabatan: "Anggota Divisi Humas" },
  { id: "34", parentId: "6", nama: "Eri Valentino Hosea", jabatan: "Anggota Divisi Banmed" },
  { id: "35", parentId: "4", nama: "Fahrul Rozy Amin", jabatan: "Anggota Divisi Diklat" },
  { id: "36", parentId: "9", nama: "Adhe Aryani Haniifah", jabatan: "Anggota Divisi Medikraf" },
  { id: "37", parentId: "6", nama: "Agnes Graciela Oktavia", jabatan: "Anggota Divisi Banmed" },
  { id: "38", parentId: "7", nama: "Ahmad Ramadhan", jabatan: "Anggota Divisi Humas" },
  { id: "39", parentId: "9", nama: "Alizya Shofiyantinur", jabatan: "Anggota Divisi Medikraf" },
  { id: "40", parentId: "7", nama: "Annisa Nur Nabila Budi", jabatan: "Anggota Divisi Humas" },
  { id: "41", parentId: "8", nama: "Arroyyani Shofiatun Nisa’", jabatan: "Anggota Divisi Kaderisasi" },
  { id: "42", parentId: "9", nama: "Audiana Yunita", jabatan: "Anggota Divisi Medikraf" },
  { id: "43", parentId: "8", nama: "Dinda Ghaniyy Mirzanie Suwardi", jabatan: "Anggota Divisi Kaderisasi" },
  { id: "44", parentId: "9", nama: "Elvia Lena Nathalie Manalu", jabatan: "Anggota Divisi Medikraf" },
  { id: "45", parentId: "9", nama: "Fayza Qanita Izzety", jabatan: "Anggota Divisi Medikraf" },
  { id: "46", parentId: "5", nama: "Jordan Pindo", jabatan: "Anggota Divisi Logistik" },
  { id: "47", parentId: "9", nama: "Maryam Shabrina", jabatan: "Anggota Divisi Medikraf" },
  { id: "48", parentId: "4", nama: "Maulana Ayub", jabatan: "Anggota Divisi Diklat" },
  { id: "49", parentId: "4", nama: "Muhammad Irfan", jabatan: "Anggota Divisi Diklat" },
  { id: "50", parentId: "7", nama: "Naufal Sulthan Al Yazid", jabatan: "Anggota Divisi Humas" },
  { id: "51", parentId: "9", nama: "Zalva Fitri Hawwidah", jabatan: "Anggota Divisi Medikraf" },
  { id: "52", parentId: "5", nama: "Fayyadh Ghifari Tarihoran", jabatan: "Anggota Divisi Logistik" },
  { id: "53", parentId: "6", nama: "Fikri Nazhmi", jabatan: "Anggota Divisi Banmed" },
  { id: "54", parentId: "8", nama: "Gregory Wilter Emmanuel Nathan", jabatan: "Anggota Divisi Kaderisasi" },
  { id: "55", parentId: "8", nama: "Rigyna Anatta Salsabila", jabatan: "Anggota Divisi Kaderisasi" },
  { id: "56", parentId: "4", nama: "Shalvira Purnama", jabatan: "Anggota Divisi Diklat" },
  { id: "57", parentId: "6", nama: "Yahya Ar Rayyaan Wahid", jabatan: "Anggota Divisi Banmed" },
  { id: "58", parentId: "5", nama: "Adelia Rezky Rahma", jabatan: "Anggota Divisi Logistik" },
  { id: "59", parentId: "4", nama: "Alzena Agripina", jabatan: "Anggota Divisi Diklat" },
  { id: "60", parentId: "5", nama: "Desyita Aulia Sari", jabatan: "Anggota Divisi Logistik" },
  { id: "61", parentId: "8", nama: "Faiz Abdullah Nurtyo", jabatan: "Anggota Divisi Kaderisasi" },
  { id: "62", parentId: "9", nama: "Faiz Ibnu Pajri", jabatan: "Anggota Divisi Medikraf" },
  { id: "63", parentId: "4", nama: "Fajar Yoga Pratama", jabatan: "Anggota Divisi Diklat" },
  { id: "64", parentId: "7", nama: "Misyaela July Gracia", jabatan: "Anggota Divisi Humas" },
  { id: "65", parentId: "4", nama: "Muhammad Aidil Saputra", jabatan: "Anggota Divisi Diklat" },
  { id: "66", parentId: "6", nama: "Muhammad Ibnu Wafa Arifiyandi", jabatan: "Anggota Divisi Banmed" },
  { id: "67", parentId: "9", nama: "Nia Syernicova Natalie Sinaga", jabatan: "Anggota Divisi Medikraf" },
  { id: "68", parentId: "6", nama: "Nur Nabila Al Rasyid", jabatan: "Anggota Divisi Banmed" },
  { id: "69", parentId: "7", nama: "Razzan Fawwaz Ali Fi Raihan", jabatan: "Anggota Divisi Humas" },
  { id: "70", parentId: "4", nama: "Sabrina Prima Cahyana Putri", jabatan: "Anggota Divisi Diklat" },
  { id: "71", parentId: "6", nama: "Safira Najwa", jabatan: "Anggota Divisi Banmed" },
  { id: "72", parentId: "9", nama: "Selma Maura", jabatan: "Anggota Divisi Medikraf" },
  { id: "73", parentId: "8", nama: "Syaila Dwi Az-Zahra", jabatan: "Anggota Divisi Kaderisasi" }
])
</script>

<template>
  <section class="pt-12 bg-white" id="tentang">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center w-full">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Struktur Organisasi</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Mengenal lebih dekat dengan pengurus inti TBM Azygos 2026.
        </p>
      </div>
    </div>
    <D3OrgChart :data="organizationData" class="mt-12" />
  </section>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>