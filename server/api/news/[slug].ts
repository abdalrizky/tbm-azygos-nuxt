import { getNewsBySlug } from '../../utils/data';

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug');
  const news = getNewsBySlug(slug);

  if (!news) {
    throw createError({
      statusCode: 404,
      statusMessage: 'News not found',
    })
  }

  return news;
});
