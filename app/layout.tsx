import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BlackScreen.space",
  "operatingSystem": "Web",
  "applicationCategory": "Utility",
  "description": "Full screen color tool with black, white, red, green, blue, yellow screens. Double-click for full screen, switch colors with arrow keys for focus, testing, or creative uses."
};

export const metadata: Metadata = {
  title: {
    default: "Blackscreen.space: Switch Black, White, Red, Green, Blue, Yellow",
    template: "%s | Blackscreen.space",  
  },
  description: "Free full screen color tool: black, white, red, green, blue, yellow screens. Double-click for full screen, use arrow keys to switch colors for focus, testing, or creative uses.",
  openGraph: {
    title: "Blackscreen.space: Switch Black, White, Red, Green, Blue, Yellow",
    description: "Free full screen color tool: black, white, red, green, blue, yellow screens. Double-click for full screen, use arrow keys to switch colors for focus, testing, or creative uses.",
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
