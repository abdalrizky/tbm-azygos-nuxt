// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
    '@nuxtjs/sitemap'
  ],
  site: {
    url: 'https://tbmazygos.fk.unmul.ac.id',
    name: 'TBM Azygos'
  },
  sitemap: {
    sources: [
      '/api/_sitemap-urls'
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  gtag: {
    id: 'G-MYLEGGGH92'
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://portal.tbmazygos.fk.unmul.ac.id/api/v1',
    }
  },
  app: {
    head: {
      titleTemplate: '%s - TBM Azygos',
      title: 'TBM Azygos',
      meta: [
        { name: 'description', content: 'Tim Bantuan Medis (TBM) Azygos - Fakultas Kedokteran Universitas Mulawarman' },
        { name: 'author', content: 'Muhammad Abdal Rizky' },
      ]
    }
  }
})
