import { getTranslation } from '@/lib/i18n';
import Hero from '@/app/components/ui/Hero';
import { generateAlternates } from "@/lib/hreflang";


export async function generateMetadata({ params }) {
  const title = 'Purple Screen for Fullscreen Creative & Color Testing';
  const description = 'Free purple screen for creative projects and color testing in fullscreen mode. Ensure vibrant purple display and download high-resolution images.';
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/purple-og.png`;
  const currentLocale = params.locale || 'en';

  return {
    title: title,
    description: description,
    alternates: generateAlternates('/purple-screen', currentLocale),
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
        <Hero locale={locale} color='purple' />
      </div>
      <div className="section bg-gray-100 dark:bg-gray-800 rounded mt-20">
        <h2 className="text-2xl font-bold px-2 py-4">{t("Unleashing the Elegance of Purple Screen Tool")}</h2>
        <div className="px-2">
          <p>
            {t("The purple screen is a captivating feature of the purple screen tool, providing a free, striking fullscreen display designed for creative projects and color testing. As a standout element of the Purple Screen suite, this tool utilizes a rich purple backdrop to inspire artistic innovation, assess color accuracy, and maintain display vibrancy. Unlike standard colors, the purple screen excels in evaluating warm and cool tone blends, monitor calibration, and screen health checks, making it ideal for designers and tech enthusiasts. Accessible online without registration, the purple screen tool also offers high-resolution image downloads, appealing to creatives, professionals, and casual users. Its full screen mode delivers an immersive experience, positioning it as a premier choice for color exploration and visual enhancement.")}
          </p>
        </div>
      </div>
      <div id="use-case" className='section bg-gray-100 dark:bg-gray-800 rounded mt-20'>
        <h2 className="text-2xl font-bold px-2 py-4">{t("Dynamic Use Cases for Purple Screen Tool")}</h2>
        <div className="px-2">
          <p className='mb-4'>{t("Delve into the wide-ranging applications of the purple screen through ten creative use cases, showcasing the purple screen tool's versatility in full screen mode. Inspired by practical needs and insights from competitors, these scenarios highlight its appeal across various fields.")}</p>
          <ul className='list-disc pl-6 space-y-2 mb-4'>
            <li><strong>{t("Creative Project Inspiration")}</strong>: {t("Use the purple screen in full screen mode as a unique backdrop for designing logos or digital art, perfect for graphic designers.")}</li>
            <li><strong>{t("Color Testing Precision")}</strong>: {t("Employ the purple screen tool's purple screen to verify purple tones and detect color imbalances, essential for display calibration experts.")}</li>
            <li><strong>{t("Screen Cleaning Visibility")}</strong>: {t("Illuminate smudges and dust with the purple screen's vibrant full screen display, ideal for maintaining studio monitors or personal devices.")}</li>
            <li><strong>{t("Video Editing Effects")}</strong>: {t("Content creators can leverage the purple screen in full screen to craft striking video transitions or thematic overlays.")}</li>
            <li><strong>{t("Photography Color Checks")}</strong>: {t("Photographers can use the purple screen tool's purple screen as a creative lighting test or portrait background for unique shots.")}</li>
            <li><strong>{t("Gaming Atmosphere Enhancement")}</strong>: {t("Gamers can activate the purple screen in full screen to customize monitor settings, adding a regal purple vibe to gameplay.")}</li>
            <li><strong>{t("Presentation Design Elevation")}</strong>: {t("Download purple screen images from the purple screen tool for elegant, eye-catching slide backgrounds in professional or educational settings.")}</li>
            <li><strong>{t("Eye Comfort During Breaks")}</strong>: {t("Switch to the purple screen in full screen mode to reduce eye strain, offering a soothing contrast for extended screen time.")}</li>
            <li><strong>{t("Device Color Diagnostics")}</strong>: {t("Tech enthusiasts can use the purple screen tool's full screen purple display to diagnose screen burn-in or color accuracy issues.")}</li>
            <li><strong>{t("Educational Art Exploration")}</strong>: {t("Teachers can project the purple screen in full screen mode to teach color theory or inspire art projects, supported by free access.")}</li>
          </ul>
          <p className='mt-4'>{t("These use cases underscore the purple screen's adaptability, establishing the purple screen tool as a valuable resource for creative, technical, and educational pursuits, enhanced by its full screen capabilities.")}</p>
        </div>
      </div>
    </div>
  );
}
