import { MetadataRoute } from 'next';

const BASE_URL = 'https://house-blog.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date('2026-06-24'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/process`,
      lastModified: new Date('2026-06-24'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/house`,
      lastModified: new Date('2026-06-24'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date('2026-06-24'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
