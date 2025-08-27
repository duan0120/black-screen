import { getTranslation } from '@/lib/i18n';
import Hero from '@/app/components/ui/Hero';
import { generateAlternates } from "@/lib/hreflang";


export async function generateMetadata({ params }) {
  const title = 'White Screen for Fullscreen Testing & Cleaning';
  const description = 'Free white screen for display testing and screen cleaning in fullscreen mode. Detect dead pixels and smudges with a bright white display. Download images.';
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/white-og.png`;
  const currentLocale = params.locale || 'en';

  return {
    title: title,
    description: description,
    alternates: generateAlternates('/white-screen', currentLocale),
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
      <div className="section bg-gray-100 dark:bg-gray-800 rounded mt-20">
        <h2 className="text-2xl font-bold px-2 py-4">{t("Unveiling the Power of White Screen Tool")}</h2>
        <div className="px-2">
          <p>
            {t("The white screen is a cornerstone of the white screen tool, delivering a free, brilliantly lit fullscreen display tailored for display testing and screen cleaning. As part of the versatile White Screen ecosystem, this tool harnesses a pure white backdrop to reveal dead pixels, smudges, and display flaws with exceptional clarity. Unlike darker screens, the white screen's bright illumination makes it perfect for monitor calibration, device diagnostics, and maintaining screen hygiene. Accessible online without registration, the white screen tool also offers image downloads, catering to tech enthusiasts, professionals, and casual users alike. Its full screen mode creates an immersive environment, distinguishing it as a premier solution for screen health and visual precision, enhancing productivity and device longevity.")}
          </p>
        </div>
      </div>
      <div id="use-case" className='section bg-gray-100 dark:bg-gray-800 rounded mt-20'>
        <h2 className="text-2xl font-bold px-2 py-4">{t("Diverse Use Cases for White Screen Tool")}</h2>
        <div className="px-2">
          <p className='mb-4'>{t("Unlock the extensive potential of the white screen through ten unique use cases, showcasing the white screen tool's adaptability in the full screen environment. Inspired by practical needs and insights from competitors, these scenarios highlight its broad appeal.")}</p>
          <ul className='list-disc pl-6 space-y-2 mb-4'>
            <li><strong>{t("Display Quality Testing")}</strong>: {t("Leverage the white screen in full screen mode to detect dead pixels and backlight inconsistencies, a must-have for IT professionals and display technicians calibrating monitors.")}</li>
            <li><strong>{t("Screen Cleaning Efficiency")}</strong>: {t("Use the white screen tool's bright white screen to spotlight smudges, dust, and fingerprints, making it ideal for cleaning laptops, TVs, or office displays with ease.")}</li>
            <li><strong>{t("Photography Lighting Check")}</strong>: {t("Photographers can utilize the white screen in full screen as a consistent light source or to evaluate lighting setups, ensuring perfect exposure during indoor shoots.")}</li>
            <li><strong>{t("Presentation Backgrounds")}</strong>: {t("Download high-quality white screen images from the white screen tool for pristine, professional slideshow backgrounds, enhancing corporate or educational presentations.")}</li>
            <li><strong>{t("Eye Strain Relief")}</strong>: {t("Switch to the white screen in full screen mode during work breaks to reduce eye fatigue, offering a refreshing contrast to dark screens for prolonged users.")}</li>
            <li><strong>{t("Device Troubleshooting")}</strong>: {t("Tech hobbyists can employ the white screen tool's full screen white display to diagnose screen burn-in, color accuracy issues, or hardware malfunctions on various devices.")}</li>
            <li><strong>{t("Video Editing Support")}</strong>: {t("Video editors can use the white screen in full screen as a neutral background to check for color balance or as a placeholder in editing software, streamlining workflows.")}</li>
            <li><strong>{t("Gaming Monitor Calibration")}</strong>: {t("Gamers can activate the white screen tool's white screen to fine-tune monitor settings, ensuring vibrant visuals and optimal performance during gameplay.")}</li>
            <li><strong>{t("Educational Tool for Students")}</strong>: {t("Students can project the white screen in full screen mode for note-taking or as a blank canvas for brainstorming, supported by the tool's free access.")}</li>
            <li><strong>{t("Retail Display Setup")}</strong>: {t("Retailers can use the white screen tool to test and clean large display screens, ensuring product showcases are flawless with the white screen's bright output.")}</li>
          </ul>
          <p className='mt-4'>{t("These use cases demonstrate the white screen's versatility, making the white screen tool a valuable asset across industries and personal tasks, all enhanced by its full screen capabilities.")}</p>
        </div>
      </div>
    </div>
  );
}
