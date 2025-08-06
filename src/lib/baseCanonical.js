export default function baseCanonical(locale) {
    if (locale === 'en' || locale === '' || locale === null) {
        return `${process.env.NEXT_PUBLIC_SITE_URL}`;
    }

    return `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}`;
}