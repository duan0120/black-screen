import { getTranslation } from '@/lib/i18n';
import Hero from '@/app/components/ui/Hero';


export async function generateMetadata({ params }) {
  const title = 'White Screen for Fullscreen Testing & Cleaning';
  const description = 'Free white screen for display testing and screen cleaning in fullscreen mode. Detect dead pixels and smudges with a bright white display. Download images.';
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/white-og.png`;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/white-screen`,
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
      <div className="section">
        <Hero locale={locale} color='white' />
      </div>
    </div>
  );
}
