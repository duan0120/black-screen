import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
