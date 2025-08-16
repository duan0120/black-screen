import { getTranslation } from '@/lib/i18n';
import Hero from '@/app/components/ui/Hero';


export async function generateMetadata({ params }) {
  const title = 'Red Screen for Fullscreen Calibration & Testing';
  const description = 'Free red screen for display calibration and RGB testing in fullscreen mode. Ensure accurate red channel display and download high-resolution images.';
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/red-og.png`;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/red-screen`,
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
        <Hero locale={locale} color='red' />
      </div>
    </div>
  );
}
