<template>
  <div class="min-h-screen flex flex-col">
    <CommonNavigation />
    <main class="flex-grow">
      <slot />
    </main>
    <CommonFooter />
  </div>
</template>

<script setup>
// Layout for all pages. Nuxt auto-imports CommonNavigation and CommonFooter.
</script>
