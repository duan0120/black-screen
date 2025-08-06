import "../globals.css";

import GoogleAnalytics from '../components/google/GoogleAnalytics';
import GoogleAdsense from '../components/google/GoogleAdsense';
import UmamiAnalytics from '../components/common/UmamiAnalytics';

import { Providers } from "../providers";

import MyNavbar from '../components/ui/MyNavbar';
import MyFooter from '../components/ui/MyFooter';
import baseCanonical from "@/lib/baseCanonical";


export async function generateMetadata({ params }) {
  const title = 'Brat-Gen - Free Brat Generator for Custom Covers';
  const description = 'Brat-Gen is a free Brat Generator! Create custom Brat-style covers with vibrant colors like Brat Green. Share bold designs on social media!';
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/og.png`;

  return {
    title: {
      default: title,
      template: '%s | Brat-Gen'
    },
    description: description,
    authors: [{ name: 'Brat-Gen' }],
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    alternates: {
      canonical: baseCanonical(params.locale),
    },
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      siteName: 'Brat-Gen',
      images: [{
        url: image
      }]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Brat-Gen',
      title: title,
      description: description,
      images: [image]
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
        { url: '/images/logo.png', sizes: '16x16', type: 'image/png' }
      ],
      apple: [
        { url: '/images/logo.png', sizes: '180x180' }
      ]
    }
  }
}

export default function RootLayout({ children, params }) {
  const locale = params?.locale || 'en';

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <GoogleAdsense />
        <GoogleAnalytics />
        <UmamiAnalytics />
      </head>
      <body className="bg-background text-foreground">
        <Providers>
          <MyNavbar locale={locale} />
          {children}
          <MyFooter locale={locale} />
        </Providers>
      </body>
    </html>
  );
}
