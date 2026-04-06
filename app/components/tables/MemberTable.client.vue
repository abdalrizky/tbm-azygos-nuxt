<script setup>
import {ref, onMounted} from 'vue';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net-responsive';
import 'datatables.net-responsive-dt';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';

DataTable.use(DataTablesCore);

const members = ref([]);
const loading = ref(true);

const columns = [
  {data: 'name'},
  {data: 'nia', render: (data) => {
      if (!data) return '-';
      const str = data.toString();

      if (str.length === 9) {
        return `${str.slice(0, 2)}.${str.slice(2, 5)}.${str.slice(5)}`;
      }
      return str;
    },},
  {data: 'batch'},
  {data: 'academic_year', render: function (data) {return data ? data : '-';},},
];

const options = {
  responsive: true,
  autoWidth: false,
  select: true,
  order: [[2, 'desc'], [1, 'asc']],
  language: {
    search: "Cari:",
    lengthMenu: "Tampilkan _MENU_ data per halaman",
    zeroRecords: "Data tidak ditemukan",
    info: "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
    infoEmpty: "Menampilkan 0 sampai 0 dari 0 data",
    infoFiltered: "(disaring dari _MAX_ total data)",
    loadingRecords: "Memuat data...",
    processing: "Memproses...",
    paginate: {
      first: "Ke Awal",
      last: "Ke Akhir",
      next: "Selanjutnya",
      previous: "Sebelumnya"
    },
  }
};

const fetchData = async () => {
  try {
    const response = await $fetch('https://portal.tbmazygos.fk.unmul.ac.id/api/v1/members');
    members.value = response.data ? response.data : response;
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center w-full mb-10">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">Daftar Anggota</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Keanggotaan Tim Bantuan Medis Azygos dari angkatan pertama hingga kini.
      </p>
    </div>

    <div v-if="loading">Mengambil data...</div>
    <DataTable
        v-else
        :data="members"
        :columns="columns"
        class="display text-nowrap w-full"
        :options="options"
    >
      <thead>
      <tr>
        <th>Nama</th>
        <th>NIA</th>
        <th>Angkatan</th>
        <th>Tahun Masuk Kuliah</th>
      </tr>
      </thead>
    </DataTable>
  </div>
</template>

<style scoped>
</style>