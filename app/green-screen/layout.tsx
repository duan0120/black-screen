export const metadata = {
  title: "Green Screen Background Tool",
  description: "Free green screen background tool for video backgrounds or testing. Double-click for full screen, switch colors with arrow keys.",
  openGraph: {
    title: "Green Screen Background Tool",
    description: "Free green screen background tool for video backgrounds or testing. Double-click for full screen, switch colors with arrow keys.",
    url: "https://www.blackscreennow.space/green-screen",
    siteName: "Black Screen Tool",
    images: "/imgs/green-logo.png",
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Green Screen Background Tool",
  "operatingSystem": "Web",
  "applicationCategory": "Utility",
  "description": "Free green screen background tool for video backgrounds or testing. Double-click for full screen, switch colors with arrow keys."
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