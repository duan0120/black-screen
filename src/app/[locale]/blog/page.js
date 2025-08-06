import { getSortedPostsData } from '@/lib/blog';
import { getTranslation } from '@/lib/i18n';
import Link from 'next/link';
import { Card, CardBody, CardHeader } from '@heroui/react';


export async function generateMetadata({ params }) {
  const title = 'Blog';

  return {
    title: title,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    }
  }
}


export default function BlogPage({ params }) {
  const locale = params.locale || 'en';
  const allPostsData = getSortedPostsData();

  const t = function (key) {
    return getTranslation(locale, key);
  };

  return (
    <div className="page-container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {t('Blog')}
        </h1>

        {allPostsData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              {t('No blog posts found')}
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {allPostsData.map(({ id, date, title, excerpt }) => (
              <Card key={id} className="hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold">
                      <Link
                        href={`/${locale}/blog/${id}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {title}
                      </Link>
                    </h2>
                    <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">
                      {date}
                    </span>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  {excerpt && (
                    <p className="text-gray-600 mb-4">
                      {excerpt}
                    </p>
                  )}
                  <Link
                    href={`/${locale}/blog/${id}`}
                    className="text-primary hover:underline"
                  >
                    {t('Read more')} →
                  </Link>
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}