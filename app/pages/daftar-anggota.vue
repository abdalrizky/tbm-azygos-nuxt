<script setup lang="ts">
// Use useAsyncData with a stable key to prevent flickering during hydration
const { data: members, pending: loading } = await useAsyncData('members-list', () => {
    return $fetch('https://portal.tbmazygos.fk.unmul.ac.id/api/v1/members')
}, {
  transform: (res: any) => res.data || res
})

useSeoMeta({
  title: 'Daftar Anggota',
  description: 'Daftar Anggota Tim Bantuan Medis Azygos.'
})
</script>

<template>
  <div class="py-24 bg-transparent min-h-screen">
    <TablesMemberTable :members="members" :loading="loading" />
  </div>
</template>
