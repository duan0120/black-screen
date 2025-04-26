export const metadata = {
    title: "Full Red Screen: Creative Lighting & Focus",
    description: "Free full red screen for creative lighting or focused work. Ideal for video calls, photography, or warm ambiance.",
    openGraph: {
        title: "Full Red Screen: Creative Lighting & Focus",
        description: "Free full red screen for creative lighting or focused work. Ideal for video calls, photography, or warm ambiance.",
        url: "https://www.blackscreennow.space/red-screen",
        siteName: "Black Screen",
        images: "/imgs/red-logo.png",
    },
}
  
const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BlackScreenNow - Red Screen",
    "operatingSystem": "Web",
    "applicationCategory": "Utility",
    "description": "Full red screen tool for creative lighting or focused work. Double-click for full screen, switch colors with arrow keys."
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