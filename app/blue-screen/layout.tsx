const schemaData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BlackScreen.space - Blue Screen",
  "operatingSystem": "Web",
  "applicationCategory": "Utility",
  "description": "Full blue screen tool for focused work or eye comfort. Double-click for full screen, switch colors with arrow keys."
};

export const metadata = {
  title: "Full Blue Screen: Focus & Eye Comfort",
  description: "Free full blue screen for focused work or eye comfort. Ideal for coding, studying, or calming display testing.",
  openGraph: {
    title: "Full Blue Screen: Focus & Eye Comfort",
    description: "Free full blue screen for focused work or eye comfort. Ideal for coding, studying, or calming display testing.",
    url: "https://www.blackscreennow.space/blue-screen",
    siteName: "Black Screen",
    images: "/imgs/blue-logo.png",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <script  type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>
      </head>
      {children}
    </>
  )
}
  