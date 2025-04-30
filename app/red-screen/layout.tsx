export const metadata = {
  title: "Red Screen Lighting Tool",
  description: "Free red screen lighting tool for creative lighting or focus. Double-click for full screen, switch colors with arrow keys.",
  openGraph: {
    title: "Red Screen Lighting Tool",
    description: "Free red screen lighting tool for creative lighting or focus. Double-click for full screen, switch colors with arrow keys.",
    url: "https://www.blackscreennow.space/red-screen",
    siteName: "Black Screen Tool",
    images: "/imgs/red-logo.png",
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Red Screen Lighting Tool",
  "operatingSystem": "Web",
  "applicationCategory": "Utility",
  "description": "Free red screen lighting tool for creative lighting or focus. Double-click for full screen, switch colors with arrow keys."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </head>
      {children}
    </>
  )
}