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
          <h2 className="text-2xl font-bold px-2 py-4">{t('')}</h2>
          <div className="px-2">
            <p>
              {t('')}
            </p>
          </div>
        </div>
        <div className="section bg-gray-100 dark:bg-gray-800 rounded mt-20">
          <h2 className="text-2xl font-bold px-2 py-4">{t('')}</h2>
          <div className="px-2">
            <p className='mb-4'>
              {t('')}
            </p>
            {/* <ol className="list-decimal list-inside">
              <li className="mb-4">
                <span className="font-bold">{t('Enter Your Text:')}</span> {t('Type up to 50 characters in the text box to create your Brat-style message, instantly previewed on the canvas. Use bold fonts inspired by Charli XCX’s Brat album for that rebellious look.')}
              </li>
            </ol> */}
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
