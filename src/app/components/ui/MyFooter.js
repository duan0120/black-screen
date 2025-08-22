import { getTranslation } from '@/lib/i18n';
import { Link, Chip, Divider } from '@heroui/react';

export default function MyFooter({ locale = 'en' }) {
  const t = function (key) {
    return getTranslation(locale, key);
  }

  const quickLinks = [
    {
      name: t('Black Screen'),
      url: '/',
    },
    {
      name: t('White Screen'),
      url: '/white-screen',
    },
    {
      name: t('Red Screen'),
      url: '/red-screen',
    },
    {
      name: t('Green Screen'),
      url: '/green-screen',
    },
    {
      name: t('Blue Screen'),
      url: '/blue-screen',
    },
    {
      name: t('Yellow Screen'),
      url: '/yellow-screen',
    },
    {
      name: t('Orange Screen'),
      url: '/orange-screen',
    },
    {
      name: t('Pink Screen'),
      url: '/pink-screen',
    },
    {
      name: t('Purple Screen'),
      url: '/purple-screen',
    },
  ];

  const title = 'Black Screen - Fullscreen Focus, OLED & Pixel Testing';

  const socialLinks = [
    {
      url: `https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}`,
      icon: "/images/facebook.svg",
      iconAlt: "facebook"
    },
    {
      url: `https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}&text=${title}`,
      icon: "/images/twitter.svg",
      iconAlt: "twitter"
    },
    {
      url: `https://pinterest.com/pin/create/button/?url=${process.env.NEXT_PUBLIC_SITE_URL}&media=&description=${title}`,
      icon: "/images/pinterest.svg",
      iconAlt: "pinterest"
    },
    {
      url: `https://www.tumblr.com/share/link?url=${process.env.NEXT_PUBLIC_SITE_URL}&name=${title}`,
      icon: "/images/tumblr.svg",
      iconAlt: "tumblr"
    },
    {
      url: `https://wa.me/?text=${title} ${process.env.NEXT_PUBLIC_SITE_URL}`,
      icon: "/images/whatsapp.svg",
      iconAlt: "whatsapp"
    },
  ]

  const friendsLink = [
    {
      name: "Download Twitter Video",
      url: "https://twittervideoindir.com",
    },
    {
      name: "Unix TimeStamp Converter Online",
      url: "https://timestamps.top",
    },
    {
      name: "Brat Generator",
      url: "https://brat-gen.com",
    },
    {
      name: "String Art Generator",
      url: "https://stringartgenerator.cc"
    }
  ]

  return (
    <>
      <Divider className="my-4" />
      <div className="nav-container flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <div className="flex items-center gap-1">
            <p className="text-xl font-bold mb-2 w-fit">{t('Black Screen')}</p>
            <Link href="/" target="_blank"><Chip color="danger" size="sm" variant="flat" className="ml-2 -mt-1.5">v{process.env.APP_VERSION}</Chip></Link>
          </div>
          <p className="text-sm text-gray-500 mb-7">{t('Explore Black Screen for fullscreen mode, OLED Protection, and high-quality image downloads – your free solution for testing and calibration.')}</p>
          <div className='flex gap-4'>
            {socialLinks.map((item, index) => (
              <Link href={item.url} target="_blank" key={index}
                className='border w-9 h-9 flex items-center justify-center rounded-full text-black'
              >
                <img src={item.icon} alt={item.iconAlt} className='dark:invert' />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-bold mb-2">{t('Quick Links')}</p>
            <ul className="flex flex-col gap-1">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} className="text-sm hover:text-primary">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-bold mb-2">{t('Other Links')}</p>
            <ul className="flex flex-col gap-1">
              <li><Link href="/about-us" className="text-sm hover:text-primary">{t('About Us')}</Link></li>
              <li><Link href="/privacy-policy" className="text-sm hover:text-primary">{t('Privacy Policy')}</Link></li>
              <li><Link href="/terms-of-service" className="text-sm hover:text-primary">{t('Terms of Service')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-bold mb-2">{t('Friends Link')}</p>
            <ul className="flex flex-col gap-1">
              {friendsLink.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} target="_blank" className="text-sm hover:text-primary">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-bold mb-2">{t('Contact Us')}</p>
            <Link href="mailto:support@crazykids.tech" className="text-sm hover:text-primary mb-4">support@crazykids.tech</Link>
          </div>
        </div>
      </div>
      <div className="nav-container">
        <Divider className="my-4" />
        <p className="text-sm text-gray-500">© 2025 <a href="https://black-screen.cc" target="_blank">Black Screen</a> {t('All rights reserved.')}</p>
      </div>
    </>
  )
}
