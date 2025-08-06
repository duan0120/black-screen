'use client';
import { getTranslation } from '@/lib/i18n';

export default function Hero({ locale = 'en' }) {
  const t = function (key) {
    return getTranslation(locale, key);
  }


  return (
    <div className="text-center pt-16 pb-2">
      <h1 className="text-5xl font-bold text-primary mb-2">
        {t('Brat Generator')}
      </h1>
      <p className="text-3xl text-subtext mb-8">
        {t('Unleash Your Brat Vibe')}
      </p>
    </div>
  );
}
