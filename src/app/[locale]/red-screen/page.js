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
      <div className="section bg-gray-100 dark:bg-gray-800 rounded mt-20">
        <h2 className="text-2xl font-bold px-2 py-4">{t("Unveiling the Brilliance of Red Screen Tool")}</h2>
        <div className="px-2">
          <p>
            {t("The red screen is a core component of the red screen tool, delivering a free, striking fullscreen display optimized for display calibration and RGB testing. As an essential part of the Red Screen collection, this tool employs a vivid red backdrop to evaluate red channel accuracy, detect color discrepancies, and maintain display integrity. Distinct from other hues, the red screen excels in troubleshooting RGB imbalances, monitor alignment, and screen health monitoring. Available online without registration, the red screen tool also offers high-resolution image downloads, appealing to tech enthusiasts, designers, and professionals. Its full screen mode provides an immersive experience, establishing it as a premier choice for color calibration and visual diagnostics.")}
          </p>
        </div>
      </div>
      <div id="use-case" className='section bg-gray-100 dark:bg-gray-800 rounded mt-20'>
        <h2 className="text-2xl font-bold px-2 py-4">{t("Extensive Use Cases for Red Screen Tool")}</h2>
        <div className="px-2">
          <p className='mb-4'>{t("Explore the wide-ranging applications of the red screen through ten diverse use cases, showcasing the red screen tool's versatility in full screen mode. Inspired by practical needs and insights from competitors, these scenarios highlight its utility across various fields.")}</p>
          <ul className='list-disc pl-6 space-y-2 mb-4'>
            <li><strong>{t("RGB Channel Calibration")}</strong>: {t("Utilize the red screen in full screen mode to fine-tune the red channel, crucial for photographers and video editors calibrating displays.")}</li>
            <li><strong>{t("Display Color Testing")}</strong>: {t("Employ the red screen tool's red screen to pinpoint color inaccuracies or dead pixels, a vital task for IT specialists and display technicians.")}</li>
            <li><strong>{t("Screen Cleaning Clarity")}</strong>: {t("Illuminate dust and smudges with the red screen's vibrant full screen display, ideal for cleaning monitors or large screens effectively.")}</li>
            <li><strong>{t("Graphic Design Precision")}</strong>: {t("Designers can leverage the red screen in full screen to verify red tones in designs, ensuring consistency across projects.")}</li>
            <li><strong>{t("Gaming Color Enhancement")}</strong>: {t("Gamers can activate the red screen tool's red screen to adjust monitor settings, boosting red hues for dynamic gameplay.")}</li>
            <li><strong>{t("Presentation Visual Appeal")}</strong>: {t("Download red screen images from the red screen tool for bold, professional slide backgrounds in corporate or educational settings.")}</li>
            <li><strong>{t("Eye Comfort During Pauses")}</strong>: {t("Switch to the red screen in full screen mode during breaks to alleviate eye strain, offering a unique contrast for extended use.")}</li>
            <li><strong>{t("Device Color Diagnostics")}</strong>: {t("Tech enthusiasts can use the red screen tool's full screen red display to diagnose screen burn-in or hardware color faults.")}</li>
            <li><strong>{t("Educational Color Studies")}</strong>: {t("Teachers can project the red screen in full screen mode to illustrate color theory, supported by the tool's free access.")}</li>
            <li><strong>{t("Retail Display Optimization")}</strong>: {t("Retailers can apply the red screen tool to test and align large display screens, ensuring vibrant red outputs for product showcases.")}</li>
          </ul>
          <p className='mt-4'>{t("These use cases underscore the red screen's adaptability, positioning the red screen tool as a valuable resource for creative, technical, and educational endeavors, enhanced by its full screen capabilities.")}</p>
        </div>
      </div>
    </div>
  );
}
