export const metadata = {
    title: "Full Green Screen: Video Background & Testing",
    description: "Free full green screen for video backgrounds or display testing. Perfect for content creators and tech enthusiasts.",
    openGraph: {
        title: "Full Green Screen: Video Background & Testing",
        description: "Free full green screen for video backgrounds or display testing. Perfect for content creators and tech enthusiasts.",
        url: "https://www.blackscreennow.space/green-screen",
        siteName: "Black Screen",
        images: "/imgs/green-logo.png",
    },
}
  
const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BlackScreenNow - Green Screen",
    "operatingSystem": "Web",
    "applicationCategory": "Utility",
    "description": "Full green screen tool for video backgrounds or display testing. Double-click for full screen, switch colors with arrow keys."
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