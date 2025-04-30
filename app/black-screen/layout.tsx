const schemaData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Black Screen Tool for Focus & OLED",
  "operatingSystem": "Web",
  "applicationCategory": "Utility",
  "description": "Free black screen tool for focus, eye relaxation, or OLED power saving. Double-click for full screen, switch colors with arrow keys."
};

export const metadata = {
  title: "Black Screen Tool for Focus & OLED",
  description: "Free black screen tool for focus, eye relaxation, or OLED power saving. Double-click for full screen, switch colors with arrow keys.",
  openGraph: {
    title: "Black Screen Tool for Focus & OLED",
    description: "Free black screen tool for focus, eye relaxation, or OLED power saving. Double-click for full screen, switch colors with arrow keys.",
    url: "https://www.blackscreennow.space/black-screen",
    siteName: "Black Screen Tool",
    images: "/imgs/black-logo.png",
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
