import { getSortedPostsData } from '@/lib/blog';
import { locales } from "@/lib/i18n";

export default async function sitemap() {
  const baseUrl = `${process.env.NEXT_PUBLIC_SITE_URL}`;

  const staticLocalePages = Object.entries(locales).map(([key, locale]) => {
    const lang = key == "en" ? "" : `/${key}`;

    return [
      {
        url: `${baseUrl}${lang}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
    ];
  }).flat();

  const staticPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  const posts = getSortedPostsData();
  const postPages = posts.map(post => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date || Date.now()),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticLocalePages, ...staticPages, ...postPages];
}

// 导出 sitemap 生成器配置
export const dynamic = 'force-dynamic';
export const revalidate = 86400; // 每天重新生成一次
