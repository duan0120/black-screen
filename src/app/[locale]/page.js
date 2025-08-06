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

  return (
    <>
      <div className="page-container">
        <div className="section">
          <Hero locale={locale} />
        </div>
        <div className="section bg-gray-100 dark:bg-gray-800 rounded mt-20">
          <h2 className="text-2xl font-bold px-2 py-4">{t('Brat-Gen: Free Brat Generator for Custom Brat-Style Covers')}</h2>
          <div className="px-2">
            <p>
              {t('Brat-Gen is your ultimate free Brat Generator for creating custom Brat-style covers! Inspired by Charli XCX’s iconic Brat album, this easy-to-use tool lets you design vibrant covers with bold fonts and colors like Brat Green (#8ACE00), Cyan, or Hot Pink. Add your text, choose from nine stunning backgrounds, and align it your way—left, right, center, or justified. Download high-quality PNGs or share your creations instantly on X, Facebook, LinkedIn, or Telegram. On mobile, use your browser’s sharing to spread the Brat Summer vibe. Make your mark with Brat-Gen’s Brat Generator and join the global Brat craze today!')}
            </p>
          </div>
        </div>
        <div className="section bg-gray-100 dark:bg-gray-800 rounded mt-20">
          <h2 className="text-2xl font-bold px-2 py-4">{t('How to Use Brat-Gen: Your Free Brat Generator Guide')}</h2>
          <div className="px-2">
            <p className='mb-4'>
              {t('Get started with Brat-Gen, your free Brat Generator, to create custom Brat-style covers in minutes! Follow these simple steps to unleash your Brat Summer vibe:')}
            </p>
            <ol className="list-decimal list-inside">
              <li className="mb-4">
                <span className="font-bold">{t('Enter Your Text:')}</span> {t('Type up to 50 characters in the text box to create your Brat-style message, instantly previewed on the canvas. Use bold fonts inspired by Charli XCX’s Brat album for that rebellious look.')}
              </li>
            </ol>
          </div>
        </div>
        <div className="section mt-10">
          <KeyFeatures locale={locale} />
        </div>
        <div className="section mt-10">
          <UserFeedback locale={locale} />
        </div>
        <div className="section">
          <FAQ locale={locale} />
        </div>
        <div className="section">
          <FeaturedOn />
        </div>
      </div>
    </>
  );
}
