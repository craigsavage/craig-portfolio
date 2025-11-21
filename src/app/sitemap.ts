import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/constants';

/** Sitemap Generation */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
