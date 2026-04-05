import { MetadataRoute } from 'next';
import { mockArticles } from '@/lib/cms';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africasicklecell.org';

  // Core static routes
  const routes = [
    '',
    '/about',
    '/what-we-do',
    '/donate',
    '/news',
    '/policies-and-guidelines',
    '/contact',
    '/privacy-policy',
    '/terms-of-use',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic news routes
  const newsRoutes = mockArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date).toISOString(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...routes, ...newsRoutes];
}
