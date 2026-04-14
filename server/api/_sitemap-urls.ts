export default defineSitemapEventHandler(async () => {
  const config = useRuntimeConfig()
  const endpoint = `${config.public.apiBase}/news`

  try {
    const response = await $fetch<{ data: any[] }>(endpoint, {
      timeout: 10000,
      retry: 1
    })

    const news = response?.data || []

    return news.map((item: any) => {
      return {
        loc: `/berita/${item.slug}`,
        lastmod: item.date,
        _sitemap: 'sitemap'
      }
    })
  } catch (error) {
    console.error('Failed to fetch news for sitemap:', error)
    return []
  }
})
