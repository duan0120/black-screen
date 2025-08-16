import "../globals.css";

import GoogleAnalytics from '../components/google/GoogleAnalytics';
import GoogleAdsense from '../components/google/GoogleAdsense';
import UmamiAnalytics from '../components/common/UmamiAnalytics';

import { Providers } from "../providers";

import MyNavbar from '../components/ui/MyNavbar';
import MyFooter from '../components/ui/MyFooter';
import baseCanonical from "@/lib/baseCanonical";


export async function generateMetadata({ params }) {
  const title = 'Black Screen - Fullscreen Focus, OLED & Pixel Testing';
  const description = 'FFree Black Screen for fullscreen focus, OLED power saving, and display testing. Use black, white, red, green, and more for pixel checks and downloads.';
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/og.png`;

  return {
    title: {
      default: title,
      template: '%s | Black Screen'
    },
    description: description,
    authors: [{ name: 'Black Screen' }],
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    alternates: {
      canonical: baseCanonical(params.locale),
    },
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
