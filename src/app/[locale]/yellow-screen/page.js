import { getTranslation } from '@/lib/i18n';
import Hero from '@/app/components/ui/Hero';


export async function generateMetadata({ params }) {
  const title = 'Yellow Screen for Fullscreen Testing & Calibration';
  const description = 'Free yellow screen for display testing and color calibration in fullscreen mode. Check yellow channel accuracy and download high-resolution images.';
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/yellow-og.png`;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/yellow-screen`,
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
        <Hero locale={locale} color='yellow' />
      </div>
      <div className="section bg-gray-100 dark:bg-gray-800 rounded mt-20">
        <h2 className="text-2xl font-bold px-2 py-4">{t("")}</h2>
        <div className="px-2">
          <p>
            {t("")}
          </p>
        </div>
      </div>
      <div id="use-case" className='section bg-gray-100 dark:bg-gray-800 rounded mt-20'>
        <h2 className="text-2xl font-bold px-2 py-4">{t("")}</h2>
        <div className="px-2">
          <p className='mb-4'>{t("")}</p>
          <ul className='list-disc pl-6 space-y-2 mb-4'>
            <li><strong>{t("")}</strong>: {t("")}</li>
            <li><strong>{t("")}</strong>: {t("")}</li>
            <li><strong>{t("")}</strong>: {t("")}</li>
            <li><strong>{t("")}</strong>: {t("")}</li>
            <li><strong>{t("")}</strong>: {t("")}</li>
            <li><strong>{t("")}</strong>: {t("")}</li>
            <li><strong>{t("")}</strong>: {t("")}</li>
            <li><strong>{t("")}</strong>: {t("")}</li>
            <li><strong>{t("")}</strong>: {t("")}</li>
            <li><strong>{t("")}</strong>: {t("")}</li>
          </ul>
          <p className='mt-4'>{t("")}</p>
        </div>
      </div>
    </div>
  );
}
