import { getTranslation } from '@/lib/i18n';
import Hero from '@/app/components/ui/Hero';


export async function generateMetadata({ params }) {
  const title = 'Green Screen for Fullscreen Chroma Key & Testing';
  const description = 'Free green screen for chroma key video production and pixel testing in fullscreen mode. Ensure vibrant green display and download high-resolution images.';
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/green-og.png`;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/green-screen`,
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
        <Hero locale={locale} color='green' />
      </div>
      <div className="section bg-gray-100 dark:bg-gray-800 rounded mt-20">
        <h2 className="text-2xl font-bold px-2 py-4">{t("Unlocking the Potential of Green Screen Tool")}</h2>
        <div className="px-2">
          <p>
            {t("The green screen is a standout feature of the green screen tool, offering a free, vivid fullscreen display tailored for chroma key video production and pixel testing. As a key component of the Green Screen suite, this tool harnesses a rich green backdrop to enable seamless background removal in video editing, detect pixel imperfections, and ensure display vibrancy. Unlike other colors, the green screen's bright hue is perfect for chroma key setups, monitor calibration, and screen health assessments. Accessible online without registration, the green screen tool also provides high-resolution image downloads, catering to videographers, content creators, and tech users. Its full screen mode delivers an immersive experience, making it an essential tool for creative and technical applications.")}
          </p>
        </div>
      </div>
      <div id="use-case" className='section bg-gray-100 dark:bg-gray-800 rounded mt-20'>
        <h2 className="text-2xl font-bold px-2 py-4">{t("Expansive Use Cases for Green Screen Tool")}</h2>
        <div className="px-2">
          <p className='mb-4'>{t("Dive into the broad applications of the green screen with ten diverse use cases, showcasing the green screen tool's versatility in full screen mode. Inspired by practical needs and competitor insights, these scenarios highlight its value across multiple domains.")}</p>
          <ul className='list-disc pl-6 space-y-2 mb-4'>
            <li><strong>{t("Chroma Key Video Production")}</strong>: {t("Utilize the green screen in full screen mode for flawless background removal in videos, a go-to for YouTubers and filmmakers.")}</li>
            <li><strong>{t("Pixel Accuracy Testing")}</strong>: {t("Employ the green screen tool's green screen to identify dead pixels or color distortions, ideal for display technicians and quality control.")}</li>
            <li><strong>{t("Screen Cleaning Visibility")}</strong>: {t("Highlight smudges and dust with the green screen's bright full screen display, perfect for maintaining studio monitors or TVs.")}</li>
            <li><strong>{t("Virtual Set Design")}</strong>: {t("Content creators can use the green screen in full screen to build virtual environments, enhancing live streams or virtual meetings.")}</li>
            <li><strong>{t("Photography Background Setup")}</strong>: {t("Photographers can leverage the green screen tool's green screen as a portable backdrop for product shots or portraits.")}</li>
            <li><strong>{t("Gaming Stream Enhancement")}</strong>: {t("Gamers can activate the green screen in full screen to create dynamic streaming backgrounds, boosting visual appeal.")}</li>
            <li><strong>{t("Presentation Visuals")}</strong>: {t("Download green screen images from the green screen tool for vibrant, professional slide backgrounds in educational or corporate settings.")}</li>
            <li><strong>{t("Eye Comfort Adjustment")}</strong>: {t("Switch to the green screen in full screen mode during breaks to ease eye strain, offering a refreshing contrast for long sessions.")}</li>
            <li><strong>{t("Device Color Calibration")}</strong>: {t("Tech enthusiasts can use the green screen tool's full screen green display to calibrate monitor green channels or troubleshoot color issues.")}</li>
            <li><strong>{t("Educational Video Lessons")}</strong>: {t("Teachers can project the green screen in full screen mode for interactive lessons, supported by the tool's free accessibility.")}</li>
          </ul>
          <p className='mt-4'>{t("These use cases emphasize the green screen's adaptability, positioning the green screen tool as a vital resource for creative, technical, and educational pursuits, enhanced by its full screen capabilities.")}</p>
        </div>
      </div>
    </div>
  );
}
