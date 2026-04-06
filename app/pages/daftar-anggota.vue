<script setup lang="ts">
const { data: members, pending: loading } = await useFetch('https://portal.tbmazygos.fk.unmul.ac.id/api/v1/members', {
  transform: (res: any) => res.data || res
})

useSeoMeta({
  title: 'Daftar Anggota',
  description: 'Daftar Anggota Tim Bantuan Medis Azygos.'
})
</script>

<template>
  <div class="py-24 bg-white min-h-screen">
    <TablesMemberTable :members="members" :loading="loading" />
  </div>
</template>
