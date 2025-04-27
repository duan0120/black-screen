const schemaData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BlackScreenNow - Black Screen",
  "operatingSystem": "Web",
  "applicationCategory": "Utility",
  "description": "Full black screen tool for focus, eye relaxation, OLED power saving, or dead pixel testing. Double-click for full screen, switch colors with arrow keys." 
};

export const metadata = {
  title: "Full Black Screen: Focus & OLED Power Saving",
  description: "Free full black screen for focus, eye relaxation, or OLED power saving. Test dead pixels or enjoy a distraction-free display.",
  openGraph: {
    title: "Full Black Screen: Focus & OLED Power Saving",
    description: "Free full black screen for focus, eye relaxation, or OLED power saving. Test dead pixels or enjoy a distraction-free display.",
    url: "https://www.blackscreennow.space/black-screen",
    siteName: "Black Screen",
    images: "/imgs/black-logo.png",
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
  