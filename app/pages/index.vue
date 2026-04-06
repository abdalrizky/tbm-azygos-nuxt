<script setup lang="ts">
useSeoMeta({
  title: 'Beranda',
  description: 'Beranda Tim Bantuan Medis (TBM) Azygos Fakultas Kedokteran Universitas Mulawarman.'
})
</script>

<template>
  <div>
    <PagesHomeHeroSection />
    <PagesHomeAboutSection />
    <PagesHomeVideoSection />
    <PagesNewsSection :limit="3" :show-view-all-button="true" />
  </div>
</template>
