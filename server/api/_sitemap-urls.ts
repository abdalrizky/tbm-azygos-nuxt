import { getAllNews } from '../../app/services/newsService'

export default defineSitemapEventHandler(() => {
  const news = getAllNews()
  return news.map((item) => {
    return {
      loc: `/berita/${item.slug}`,
      lastmod: item.date,
      _sitemap: 'sitemap'
    }
  })
})
