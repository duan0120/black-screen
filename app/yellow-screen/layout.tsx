export const metadata = {
    title: "Full Yellow Screen: Focus & Eye Relaxation",
    description: "Free full yellow screen for focus or eye relaxation. Perfect for warm lighting and distraction-free work.",
    openGraph: {
        title: "Full Yellow Screen: Focus & Eye Relaxation",
        description: "Free full yellow screen for focus or eye relaxation. Perfect for warm lighting and distraction-free work.",
        url: "https://www.blackscreennow.space/yellow-screen",
        siteName: "Black Screen",
        images: "/imgs/yellow-logo.png",
    },
}
  
const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BlackScreenNow - Yellow Screen",
    "operatingSystem": "Web",
    "applicationCategory": "Utility",
    "description": "Full yellow screen tool for focus or eye relaxation. Double-click for full screen, switch colors with arrow keys."
};

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