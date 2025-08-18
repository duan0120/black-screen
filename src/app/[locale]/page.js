import { getTranslation } from '@/lib/i18n';
import FAQ from '@/app/components/ui/FAQ';
import Hero from '@/app/components/ui/Hero';
import KeyFeatures from '@/app/components/ui/KeyFeatures';
import UserFeedback from '@/app/components/ui/UserFeedback';
import FeaturedOn from '@/app/components/ui/FeaturedOn';

export default async function Home({ params: { locale } }) {
  const t = function (key) {
    return getTranslation(locale, key);
  }

  const keyFeatures = [
    {
      title: t("Dynamic Fullscreen Mode Options"),
      description: t("Experience the Black Screen in fullscreen mode with black, white, red, green, and custom colors, optimizing focus or pixel checks."),
    },
    {
      title: t("Versatile Image Download Capabilities"),
      description: t("Grab Black Screen images in resolutions from 480p to 8K, including custom sizes, ideal for professional calibration or creative use."),
    },
    {
      title: t("Flexible Timer Customization"),
      description: t("Adjust switch intervals and exit times with the Black Screen timer, perfect for structured productivity or screen testing cycles."),
    },
    {
      title: t("Advanced OLED Burn-In Prevention"),
      description: t("Enable OLED Protection with a dynamic 10x10 white block to prevent burn-in, extending the life of OLED screens."),
    },
    {
      title: t("Completely Free Access"),
      description: t("Enjoy the Black Screen without registration, offering instant, barrier-free functionality for all users."),
    },
    {
      title: t("Intuitive Control System"),
      description: t("Navigate fullscreen mode effortlessly with 'F', 'Esc', or mouse clicks, ensuring a user-friendly Black Screen experience."),
    },
  ]

  return (
    <>
      <div className="page-container">
        <div className="section">
          <Hero locale={locale} color='black' />
        </div>
        <div className="section bg-gray-100 dark:bg-gray-800 rounded mt-20">
          <h2 className="text-2xl font-bold px-2 py-4">{t('Discover the Power of Black Screen Tool')}</h2>
          <div className="px-2">
            <p>
              {t('The Black Screen Tool stands out as a free, innovative utility crafted to boost productivity, safeguard display health, and simplify screen testing. At its heart, the Black Screen delivers a sleek fullscreen experience, ideal for deep focus, OLED Protection, and pixel diagnostics. With an array of colors—black, white, red, green, blue, yellow, orange, pink, purple, and custom options—it meets diverse user needs without requiring registration. This tool blends practicality with user-friendliness, serving as an essential resource for anyone seeking a distraction-free workspace or reliable screen maintenance. Whether you’re a professional, gamer, or casual user, the Black Screen enhances your digital experience with its versatile features.')}
            </p>
          </div>
        </div>
        <div id="how-to-use" className="section bg-gray-100 dark:bg-gray-800 rounded mt-20">
          <h2 className="text-2xl font-bold px-2 py-4">{t('How to Use Black Screen Tool')}</h2>
          <div className="px-2">
            <p className='mb-4'>
              {t('Unlock the full potential of the Black Screen Tool with these step-by-step instructions, tailored to each feature for a seamless experience—all free, no registration needed.')}
            </p>
            <h3 className='text-xl font-bold mb-4'>{t("Getting Started")}</h3>
            <p className='pl-4 mb-2'>{t("Access the Black Screen online instantly by visiting the website—no account creation required to begin exploring its capabilities.")}</p>
            <h3 className='text-xl font-bold mb-4'>{t("Activating Fullscreen Mode")}</h3>
            <p className='pl-4 mb-2'>{t("Choose a color from the palette (black, white, red, green, blue, yellow, orange, pink, purple, or custom). Hit 'F' to enter fullscreen mode, exit with 'Esc', or toggle using the spacebar or a mouse click for quick adjustments.")}</p>
            <h3 className='text-xl font-bold mb-4'>{t("Downloading High-Resolution Images")}</h3>
            <p className='pl-4 mb-2'>{t("Select a resolution (480p, 720p, 1080p, 1440p, 4K, 8K) or define a custom size. Click 'Download Image' to save Black Screen images, perfect for display testing, presentations, or creative projects.")}</p>
            <h3 className='text-xl font-bold mb-4'>{t("Configuring Timer Settings")}</h3>
            <p className='pl-4 mb-2'>{t("Open the timer panel, switch to 'Timer Setting', and set a switch interval (in seconds) and exit fullscreen time (in minutes). Press 'Start Timer' to enable Black Screen timing for productivity breaks or screen cycling.")}</p>
            <h3 className='text-xl font-bold mb-4'>{t("Activating OLED Protection")}</h3>
            <p className='pl-4 mb-2'>{t("Navigate to the OLED panel, toggle 'Enable Dynamic Pattern' for a moving 10x10 white block to prevent burn-in. Click 'Start OLED Protection' to launch; exit by clicking the mouse.")}</p>
            <h3 className='text-xl font-bold mb-4'>{t("Customizing Color Options")}</h3>
            <p className='pl-4'>{t("Pick from preset colors or use the custom color picker to tailor your Black Screen. Apply to fullscreen mode or downloads for a personalized touch.")}</p>
          </div>
        </div>
        <div id="key-features" className="section mt-10">
          <KeyFeatures locale={locale} title={t("Explore the Standout Features of Black Screen")} keyFeatures={keyFeatures} />
        </div>
        <div id="use-case" className='section bg-gray-100 dark:bg-gray-800 rounded mt-20'>
          <h2 className="text-2xl font-bold px-2 py-4">{t('Diverse Use Cases for Black Screen Tool')}</h2>
          <div className="px-2">
            <p className='mb-4'>{t("Unlock the potential of the Black Screen across six unique scenarios, inspired by competitor applications and user needs, to showcase its versatility.")}</p>
            <ul className='list-disc pl-6 space-y-2 mb-4'>
              <li><strong>{t("Enhance Productivity")}</strong>: {t("Utilize the Black Screen in fullscreen mode with white to create a distraction-free zone for work or study sessions.")}</li>
              <li><strong>{t("Conduct Display Diagnostics")}</strong>: {t("Test for dead pixels and backlight issues using Black Screen colors like red, green, and blue, mimicking tools like blacktestscreen.com.")}</li>
              <li><strong>{t("Protect OLED Displays")}</strong>: {t("Activate OLED Protection on the Black Screen to prevent burn-in during extended use, similar to ASUS OLED Care recommendations.")}</li>
              <li><strong>{t("Support Creative Endeavors")}</strong>: {t("Download 4K Black Screen images with custom colors for video editing or design backgrounds, rivaling whitescreen.online’s offerings.")}</li>
              <li><strong>{t("Promote Eye Comfort")}</strong>: {t("Set a timer on the Black Screen to cycle colors, reducing eye strain during long hours, a feature absent in static competitors.")}</li>
              <li><strong>{t("Resolve Tech Issues")}</strong>: {t("Use fullscreen mode on the Black Screen to troubleshoot monitor problems with a range of color options, outpacing basic black screen tools.")}</li>
            </ul>
          </div>
        </div>
        <div id="feedback" className="section mt-10">
          <UserFeedback locale={locale} />
        </div>
        <div id="faq" className="section">
          <FAQ locale={locale} />
        </div>
        <div className="section">
          <FeaturedOn />
        </div>
      </div>
    </>
  );
}
