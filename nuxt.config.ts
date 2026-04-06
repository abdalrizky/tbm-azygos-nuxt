// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gtag'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  gtag: {
    id: 'G-XXXXXXXXXX' // Placeholder, will be updated if known
  },
  app: {
    head: {
      titleTemplate: '%s - TBM Azygos',
      title: 'TBM Azygos',
      meta: [
        { name: 'description', content: 'Tim Bantuan Medis (TBM) Azygos - Fakultas Kedokteran Universitas Mulawarman' }
      ]
    }
  }
})
