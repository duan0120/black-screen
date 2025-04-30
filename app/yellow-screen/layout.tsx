export const metadata = {
  title: "Yellow Screen Relaxation Tool",
  description: "Free yellow screen relaxation tool for focus or eye relaxation. Double-click for full screen, switch colors with arrow keys.",
  openGraph: {
    title: "Yellow Screen Relaxation Tool",
    description: "Free yellow screen relaxation tool for focus or eye relaxation. Double-click for full screen, switch colors with arrow keys.",
    url: "https://www.blackscreennow.space/yellow-screen",
    siteName: "Black Screen Tool",
    images: "/imgs/yellow-logo.png",
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Yellow Screen Relaxation Tool",
  "operatingSystem": "Web",
  "applicationCategory": "Utility",
  "description": "Free yellow screen relaxation tool for focus or eye relaxation. Double-click for full screen, switch colors with arrow keys."
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