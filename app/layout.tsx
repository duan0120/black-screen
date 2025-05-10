import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Black Screen Tool",
  "operatingSystem": "Web",
  "applicationCategory": "Utility",
  "description": "Free black screen tool for focus, testing, or OLED power saving. Explore full screen colors: black, white, red, green, blue, yellow. Double-click to switch."
};

export const metadata: Metadata = {
  title: "Black Screen Tool & Full Screen Colors",
  description: "Free black screen tool for focus, testing, or OLED power saving. Explore full screen colors: black, white, red, green, blue, yellow. Double-click to switch.",
  openGraph: {
    title: "Black Screen Tool & Full Screen Colors",
    description: "Free black screen tool for focus, testing, or OLED power saving. Explore full screen colors: black, white, red, green, blue, yellow. Double-click to switch.",
    url: "https://www.blackscreennow.space",
    siteName: "Blackscreen.space",
    images: "/imgs/black-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5237135188377569" crossOrigin="anonymous"></script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-03MH0BST7J" strategy="afterInteractive"></Script>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-03MH0BST7J');
          `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <meta name="google-adsense-account" content="ca-pub-5237135188377569"></meta>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
