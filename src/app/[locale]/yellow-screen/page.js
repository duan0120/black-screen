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
        <h2 className="text-2xl font-bold px-2 py-4">{t("Harnessing the Brightness of Yellow Screen Tool")}</h2>
        <div className="px-2">
          <p>
            {t("The yellow screen is a standout feature of the yellow screen tool, offering a free, radiant fullscreen display tailored for display testing and color calibration. As a vital part of the Yellow Screen suite, this tool utilizes a vivid yellow backdrop to assess yellow channel accuracy, detect display inconsistencies, and ensure vibrant screen performance. Distinct from other colors, the yellow screen excels in evaluating warm tones, monitor alignment, and screen health maintenance. Available online without registration, the yellow screen tool also provides high-resolution image downloads, appealing to designers, tech users, and creative professionals. Its full screen mode delivers an immersive experience, establishing it as a top solution for color calibration and visual enhancement.")}
          </p>
        </div>
      </div>
      <div id="use-case" className='section bg-gray-100 dark:bg-gray-800 rounded mt-20'>
        <h2 className="text-2xl font-bold px-2 py-4">{t("Versatile Use Cases for Yellow Screen Tool")}</h2>
        <div className="px-2">
          <p className='mb-4'>{t("Unveil the extensive applications of the yellow screen through ten diverse use cases, showcasing the yellow screen tool's adaptability in full screen mode. Inspired by practical needs and insights from competitors like whitescreen.online, these scenarios highlight its utility across various domains.")}</p>
          <ul className='list-disc pl-6 space-y-2 mb-4'>
            <li><strong>{t("Color Calibration Accuracy")}</strong>: {t("Use the yellow screen in full screen mode to fine-tune yellow tones, essential for photographers and graphic designers calibrating displays.")}</li>
            <li><strong>{t("Display Quality Evaluation")}</strong>: {t("Employ the yellow screen tool's yellow screen to spot color inaccuracies or dead pixels, a key task for IT specialists and display technicians.")}</li>
            <li><strong>{t("Screen Cleaning Enhancement")}</strong>: {t("Illuminate dust and smudges with the yellow screen's bright full screen display, ideal for maintaining monitors or large screens effectively.")}</li>
            <li><strong>{t("Creative Design Validation")}</strong>: {t("Designers can leverage the yellow screen in full screen to verify yellow hues in artwork, ensuring consistency across projects.")}</li>
            <li><strong>{t("Gaming Visual Optimization")}</strong>: {t("Gamers can activate the yellow screen tool's yellow screen to adjust monitor settings, enhancing warm tones for an engaging gameplay experience.")}</li>
            <li><strong>{t("Presentation Style Boost")}</strong>: {t("Download yellow screen images from the yellow screen tool for vibrant, attention-grabbing slide backgrounds in professional or educational settings.")}</li>
            <li><strong>{t("Eye Comfort During Breaks")}</strong>: {t("Switch to the yellow screen in full screen mode to reduce eye strain, offering a cheerful contrast for extended screen time.")}</li>
            <li><strong>{t("Device Color Diagnostics")}</strong>: {t("Tech enthusiasts can use the yellow screen tool's full screen yellow display to diagnose screen burn-in or color balance issues.")}</li>
            <li><strong>{t("Educational Color Lessons")}</strong>: {t("Teachers can project the yellow screen in full screen mode to teach color theory, supported by the tool's free access.")}</li>
            <li><strong>{t("Retail Display Tuning")}</strong>: {t("Retailers can apply the yellow screen tool to test and align large display screens, ensuring striking yellow outputs for product showcases.")}</li>
          </ul>
          <p className='mt-4'>{t("These use cases emphasize the yellow screen's versatility, positioning the yellow screen tool as a valuable resource for creative, technical, and educational pursuits, enhanced by its full screen capabilities.")}</p>
        </div>
      </div>
    </div>
  );
}
