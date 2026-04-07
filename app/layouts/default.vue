<template>
  <div class="min-h-screen flex flex-col relative bg-grid-pattern overflow-hidden">
    <!-- Ambient Background Blobs -->
    <div class="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-400/20 mix-blend-multiply filter blur-3xl opacity-70 animate-blob z-[-1] pointer-events-none"></div>
    <div class="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-teal-300/20 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 z-[-1] pointer-events-none"></div>
    <div class="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-indigo-300/20 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 z-[-1] pointer-events-none"></div>

    <CommonNavigation />
    <main class="flex-grow z-0">
      <slot />
    </main>
    <CommonFooter class="z-10 relative" />
  </div>
</template>

<script setup>
// Layout for all pages. Nuxt auto-imports CommonNavigation and CommonFooter.
</script>
