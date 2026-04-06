import { getAllNews } from '../../utils/data';

export default defineEventHandler((event) => {
  return getAllNews();
});
