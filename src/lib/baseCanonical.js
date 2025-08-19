export default function baseCanonical(locale) {
  if (locale === 'en' || locale === '' || locale === null) {
    return `/`;
  }

  return `/${locale}`;
}
