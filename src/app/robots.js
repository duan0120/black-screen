export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/'
      ],
      disallow: [
        '/api/',
        '/_next/',
      ],
      crawlDelay: 1
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  }
}
