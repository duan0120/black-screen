export const metadata = {
    title: "Full White Screen: Display Test & Screen Cleaning",
    description: "Free full white screen for display testing or screen cleaning. Perfect for designers and tech users to check monitors.",
    openGraph: {
        title: "Full White Screen: Display Test & Screen Cleaning",
        description: "Free full white screen for display testing or screen cleaning. Perfect for designers and tech users to check monitors.",
        url: "https://www.blackscreennow.space/white-screen",
        siteName: "Black Screen",
        images: "/imgs/white-logo.png",
    },
}
  
const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BlackScreenNow - White Screen",
    "operatingSystem": "Web",
    "applicationCategory": "Utility",
    "description": "Full white screen tool for display testing or screen cleaning. Double-click for full screen, switch colors with arrow keys."
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