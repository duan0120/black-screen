const schemaData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Blue Screen Focus Tool",
  "operatingSystem": "Web",
  "applicationCategory": "Utility",
  "description": "Free blue screen focus tool for focus or eye comfort. Double-click for full screen, switch colors with arrow keys."
};

export const metadata = {
  title: "Blue Screen Focus Tool",
  description: "Free blue screen focus tool for focus or eye comfort. Double-click for full screen, switch colors with arrow keys.",
  openGraph: {
    title: "Blue Screen Focus Tool",
    description: "Free blue screen focus tool for focus or eye comfort. Double-click for full screen, switch colors with arrow keys.",
    url: "https://www.blackscreennow.space/blue-screen",
    siteName: "Black Screen Tool",
    images: "/imgs/blue-logo.png",
  },
}

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
