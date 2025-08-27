import { getAllPostIds, getPostData } from '@/lib/blog';
import { getTranslation } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { RiArrowLeftLine } from '@remixicon/react';
import { generateAlternates } from "@/lib/hreflang";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const currentLocale = params.locale || 'en';

  const postData = await getPostData(slug);

  const title = postData.title;
  const description = postData.description;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`,
    }
  }
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.id,
  }));
}

export default async function BlogPost({ params }) {
  const locale = params.locale || 'en';
  const slug = params.slug;

  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  const t = function (key) {
    return getTranslation(locale, key);
  };

  return (
    <div className="page-container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href={`/${locale}/blog`}>
            <Button
              variant="light"
              startContent={<RiArrowLeftLine className="w-4 h-4" />}
              className="mb-4"
            >
              Back to Blog
            </Button>
          </Link>

          <h1 className="text-4xl font-bold mb-4">
            {postData.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-600 mb-8">
            {postData.date && (
              <span>{postData.date}</span>
            )}
            {postData.author && (
              <>
                <span>•</span>
                <span>{postData.author}</span>
              </>
            )}
            {postData.tags && (
              <>
                <span>•</span>
                <div className="flex gap-2">
                  {postData.tags.map((tag, index) => (
                    <span key={index} className="text-primary">
                      #{tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            className="blog-content"
          />
        </article>
      </div>
    </div>
  );
}
