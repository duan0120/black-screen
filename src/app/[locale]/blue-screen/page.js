import { getTranslation } from '@/lib/i18n';
import Hero from '@/app/components/ui/Hero';


export async function generateMetadata({ params }) {
  const title = 'Blue Screen for Fullscreen Calibration & Testing';
  const description = 'Free blue screen for display calibration and RGB testing in fullscreen mode. Check blue channel accuracy and download high-resolution images.';
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/blue-og.png`;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blue-screen`,
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
        <Hero locale={locale} color='blue' />
      </div>
      <div className="section bg-gray-100 dark:bg-gray-800 rounded mt-20">
        <h2 className="text-2xl font-bold px-2 py-4">{t("Exploring the Excellence of Blue Screen Tool")}</h2>
        <div className="px-2">
          <p>
            {t("The blue screen serves as a pivotal feature within the blue screen tool, providing a free, vibrant fullscreen display optimized for display calibration and RGB testing. As an integral part of the Blue Screen suite, this tool utilizes a pure blue backdrop to assess blue channel accuracy, detect color imbalances, and ensure display precision. Distinct from other colors, the blue screen is ideal for troubleshooting RGB issues, monitor alignment, and screen health checks. Available online without registration, the blue screen tool also enables high-resolution image downloads, appealing to tech aficionados, designers, and professionals. Its full screen mode delivers an immersive experience, positioning it as a top choice for color calibration and visual diagnostics.")}
          </p>
        </div>
      </div>
      <div id="use-case" className='section bg-gray-100 dark:bg-gray-800 rounded mt-20'>
        <h2 className="text-2xl font-bold px-2 py-4">{t("Versatile Use Cases for Blue Screen Tool")}</h2>
        <div className="px-2">
          <p className='mb-4'>{t("Discover the wide-ranging applications of the blue screen through ten diverse use cases, highlighting the blue screen tool's adaptability in full screen mode. Drawing inspiration from practical needs and competitor insights like blacktestscreen.com, these scenarios showcase its utility across various contexts.")}</p>
          <ul className='list-disc pl-6 space-y-2 mb-4'>
            <li><strong>{t("RGB Channel Calibration")}</strong>: {t("Use the blue screen in full screen mode to fine-tune the blue channel, essential for photographers and video editors calibrating monitors.")}</li>
            <li><strong>{t("Display Color Testing")}</strong>: {t("Employ the blue screen tool's blue screen to identify color inaccuracies or dead pixels, a key task for IT specialists and display technicians.")}</li>
            <li><strong>{t("Screen Cleaning Precision")}</strong>: {t("Illuminate dust and smudges with the blue screen's bright full screen display, perfect for cleaning laptops or large screens effectively.")}</li>
            <li><strong>{t("Graphic Design Validation")}</strong>: {t("Designers can leverage the blue screen in full screen to verify blue tones in artwork, ensuring consistency across projects.")}</li>
            <li><strong>{t("Gaming Visual Optimization")}</strong>: {t("Gamers can activate the blue screen tool's blue screen to adjust monitor settings, enhancing blue hues for immersive gameplay.")}</li>
            <li><strong>{t("Presentation Slide Prep")}</strong>: {t("Download blue screen images from the blue screen tool for stylish, professional presentation backgrounds with a modern blue theme.")}</li>
            <li><strong>{t("Eye Comfort During Breaks")}</strong>: {t("Switch to the blue screen in full screen mode to reduce eye strain, offering a calming contrast for prolonged screen time.")}</li>
            <li><strong>{t("Device Diagnostic Checks")}</strong>: {t("Tech enthusiasts can use the blue screen tool's full screen blue display to diagnose screen burn-in or hardware color faults.")}</li>
            <li><strong>{t("Educational Color Lessons")}</strong>: {t("Teachers can project the blue screen in full screen mode to demonstrate color theory, supported by the tool's free access.")}</li>
            <li><strong>{t("Retail Display Tuning")}</strong>: {t("Retailers can apply the blue screen tool to test and align large display screens, ensuring vibrant blue outputs for product demos.")}</li>
          </ul>
          <p className='mt-4'>{t("These use cases underscore the blue screen's flexibility, making the blue screen tool an indispensable resource for both personal and professional tasks, amplified by its full screen functionality.")}</p>
        </div>
      </div>
    </div>
  );
}
