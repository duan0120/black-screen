import { getTranslation } from '@/lib/i18n';
import Hero from '@/app/components/ui/Hero';
import { generateAlternates } from "@/lib/hreflang";


export async function generateMetadata({ params }) {
  const title = 'Pink Screen for Fullscreen Creative & Color Testing';
  const description = 'Free pink screen for creative projects and color testing in fullscreen mode. Ensure vibrant pink display and download high-resolution images.';
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/pink-og.png`;
  const currentLocale = params.locale || 'en';

  return {
    title: title,
    description: description,
    alternates: generateAlternates('/pink-screen', currentLocale),
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
        <Hero locale={locale} color='pink' />
      </div>
      <div className="section bg-gray-100 dark:bg-gray-800 rounded mt-20">
        <h2 className="text-2xl font-bold px-2 py-4">{t("Embracing the Charm of Pink Screen Tool")}</h2>
        <div className="px-2">
          <p>
            {t("The pink screen is a distinctive feature of the pink screen tool, offering a free, lively fullscreen display tailored for creative projects and color testing. As a vibrant addition to the Pink Screen suite, this tool harnesses a bright pink backdrop to inspire artistic endeavors, evaluate color accuracy, and maintain display vibrancy. Unlike neutral tones, the pink screen excels in assessing warm hues, monitor calibration, and screen health checks, making it ideal for designers and tech enthusiasts. Accessible online without registration, the pink screen tool also provides high-resolution image downloads, appealing to creatives, professionals, and casual users. Its full screen mode delivers an immersive experience, positioning it as a unique solution for color exploration and visual enhancement.")}
          </p>
        </div>
      </div>
      <div id="use-case" className='section bg-gray-100 dark:bg-gray-800 rounded mt-20'>
        <h2 className="text-2xl font-bold px-2 py-4">{t("Innovative Use Cases for Pink Screen Tool")}</h2>
        <div className="px-2">
          <p className='mb-4'>{t("Explore the diverse applications of the pink screen through ten creative use cases, showcasing the pink screen tool's versatility in full screen mode. Inspired by practical needs and insights from competitors, these scenarios highlight its appeal across various domains.")}</p>
          <ul className='list-disc pl-6 space-y-2 mb-4'>
            <li><strong>{t("Creative Project Inspiration")}</strong>: {t("Use the pink screen in full screen mode as a bold backdrop for designing posters or digital art, perfect for graphic designers.")}</li>
            <li><strong>{t("Color Testing Accuracy")}</strong>: {t("Employ the pink screen tool's pink screen to verify pink tones and detect color imbalances, essential for display calibration experts.")}</li>
            <li><strong>{t("Screen Cleaning Visibility")}</strong>: {t("Illuminate smudges and dust with the pink screen's vibrant full screen display, ideal for maintaining studio monitors or personal devices.")}</li>
            <li><strong>{t("Video Editing Backgrounds")}</strong>: {t("Content creators can leverage the pink screen in full screen to create eye-catching video overlays or transition effects.")}</li>
            <li><strong>{t("Photography Color Checks")}</strong>: {t("Photographers can use the pink screen tool's pink screen as a unique lighting test or portrait background for creative shoots.")}</li>
            <li><strong>{t("Gaming Aesthetic Enhancement")}</strong>: {t("Gamers can activate the pink screen in full screen to customize monitor settings, adding a playful pink vibe to gameplay.")}</li>
            <li><strong>{t("Presentation Design Boost")}</strong>: {t("Download pink screen images from the pink screen tool for vibrant, trendy slide backgrounds in marketing or educational presentations.")}</li>
            <li><strong>{t("Eye Comfort During Breaks")}</strong>: {t("Switch to the pink screen in full screen mode to reduce eye strain, offering a soothing contrast for long screen sessions.")}</li>
            <li><strong>{t("Device Color Diagnostics")}</strong>: {t("Tech enthusiasts can use the pink screen tool's full screen pink display to diagnose screen burn-in or color accuracy issues.")}</li>
            <li><strong>{t("Educational Art Lessons")}</strong>: {t("Teachers can project the pink screen in full screen mode to teach color theory or inspire art projects, supported by free access.")}</li>
          </ul>
          <p className='mt-4'>{t("These use cases emphasize the pink screen's adaptability, establishing the pink screen tool as a valuable resource for creative, technical, and educational pursuits, enhanced by its full screen capabilities.")}</p>
        </div>
      </div>
    </div>
  );
}
