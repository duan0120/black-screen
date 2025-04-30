export const metadata = {
  title: "White Screen Test Tool",
  description: "Free white screen test tool for display testing or screen cleaning. Double-click for full screen, switch colors with arrow keys.",
  openGraph: {
    title: "White Screen Test Tool",
    description: "Free white screen test tool for display testing or screen cleaning. Double-click for full screen, switch colors with arrow keys.",
    url: "https://www.blackscreennow.space/white-screen",
    siteName: "Black Screen Tool",
    images: "/imgs/white-logo.png",
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "White Screen Test Tool",
  "operatingSystem": "Web",
  "applicationCategory": "Utility",
  "description": "Free white screen test tool for display testing or screen cleaning. Double-click for full screen, switch colors with arrow keys."
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