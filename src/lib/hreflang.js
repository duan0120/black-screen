import { locales } from './i18n';

/**
 * 生成 hreflang 语言链接，包含 x-default
 * @param {string} path - 页面路径，例如 '/blog' 或 '/about-us'
 * @param {string} currentLocale - 当前语言代码（保留参数以保持接口一致性）
 * @returns {Object} 包含所有语言版本链接的对象，包括 x-default
 */
export function generateHreflangLinks(path = '', currentLocale = 'en') {
  const languages = {};

  Object.keys(locales).forEach(locale => {
    let url;
    if (locale === 'en') {
      // 英文版本不包含语言前缀
      url = `${process.env.NEXT_PUBLIC_SITE_URL}${path}`;
    } else {
      // 其他语言包含语言前缀
      url = `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}${path}`;
    }
    languages[locale] = url;
  });

  // 添加 x-default 指向英文版本（默认语言）
  languages['x-default'] = `${process.env.NEXT_PUBLIC_SITE_URL}${path}`;

  return languages;
}

/**
 * 生成规范链接
 * @param {string} path - 页面路径，例如 '/blog' 或 '/about-us'
 * @param {string} currentLocale - 当前语言代码
 * @returns {string} 规范链接URL
 */
export function generateCanonicalUrl(path = '', currentLocale = 'en') {
  if (currentLocale === 'en') {
    return `${process.env.NEXT_PUBLIC_SITE_URL}${path}`;
  } else {
    return `${process.env.NEXT_PUBLIC_SITE_URL}/${currentLocale}${path}`;
  }
}

/**
 * 生成完整的 alternates 对象，包含 canonical 和 languages
 * @param {string} path - 页面路径，例如 '/blog' 或 '/about-us'
 * @param {string} currentLocale - 当前语言代码
 * @returns {Object} 包含 canonical 和 languages 的对象
 */
export function generateAlternates(path = '', currentLocale = 'en') {
  return {
    canonical: generateCanonicalUrl(path, currentLocale),
    languages: generateHreflangLinks(path, currentLocale),
  };
}
