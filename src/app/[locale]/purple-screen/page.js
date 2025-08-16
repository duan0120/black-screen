import { getTranslation } from '@/lib/i18n';


export async function generateMetadata({ params }) {
  const title = 'Purple Screen for Fullscreen Creative & Color Testing';
  const description = 'Free purple screen for creative projects and color testing in fullscreen mode. Ensure vibrant purple display and download high-resolution images.';
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/purple-og.png`;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/purple-screen`,
    },
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      siteName: 'Black Screen',
      images: [{
        url: image
      }]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Black Screen',
      title: title,
      description: description,
      images: [image]
    }
  }
}


export default function BlueScreenPage({ params }) {
  const locale = params.locale || 'en';

  const t = function (key) {
    return getTranslation(locale, key);
  };

  return (
    <div className="page-container py-8">

    </div>
  );
}
