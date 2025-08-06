export async function generateMetadata({ params }) {
    const title = 'About Us';
    const description = 'We are a dynamic team of developers driven by a passion to make social media content accessible to all.';

    return {
        title: title,
        description: description,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
        },
    }
}

export default function CurrentPage() {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <div className="section py-16">
                <h1 className="text-4xl font-bold mb-6">About Brat-Gen</h1>
                <p className="text-xl w-full mx-auto leading-relaxed">
                    We’re a passionate team of creators behind Brat-Gen’s free Brat Generator, dedicated to empowering <span className="font-bold">Brat Summer</span> fans with vibrant <span className="font-bold">Brat-style</span> cover creation.
                </p>
            </div>

            {/* Brat-Gen Story */}
            <div className="section">
                <div className="w-full mx-auto">
                    <p className="text-lg leading-relaxed mb-6">
                        Brat-Gen was launched in 2025 by a group of <span className="font-bold">Brat</span> fans inspired by the album’s bold, rebellious aesthetic. Starting as a creative passion project, our free Brat Generator has grown into a global tool loved by millions for crafting <span className="font-bold">Brat-style</span> covers.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        Our goal is to deliver a seamless, intuitive experience with the Brat Generator, allowing users to create <span className="font-bold">Brat-style</span> covers with colors like Brat Green (#8ACE00) and bold fonts, then share them on X, Facebook, or Telegram. We’re committed to fueling <span className="font-bold">Brat Summer</span> creativity without barriers.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        What sets Brat-Gen apart is our focus on user freedom and privacy. The Brat Generator is completely free, requires no registration, and avoids intrusive data collection, ensuring a pure <span className="font-bold">Brat Summer</span> creative experience.
                    </p>
                    <p className="text-lg leading-relaxed">
                        As <span className="font-bold">Brat Summer</span> evolves, we stay dedicated to enhancing the Brat Generator, keeping it aligned with the vibrant <span className="font-bold">Brat</span> aesthetic. Our team works tirelessly to refine features, ensuring fans can create and share <span className="font-bold">Brat-style</span> covers effortlessly. Brat-Gen is a non-official fan tool, inspired by <span className="font-bold">Brat</span> but not affiliated with Charli XCX.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="section mb-12">
                <div className="w-full mx-auto flex justify-between gap-8">
                    <div className="bg-foreground/5 rounded-lg p-8">
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-lg leading-relaxed">
                            To empower <span className="font-bold">Brat Summer</span> fans with a free Brat Generator for creating <span className="font-bold">Brat-style</span> covers, prioritizing ease, privacy, and the bold <span className="font-bold">Brat</span> aesthetic.
                        </p>
                    </div>
                    <div className="bg-foreground/5 rounded-lg p-8">
                        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                        <p className="text-lg leading-relaxed">
                            To inspire a global wave of <span className="font-bold">Brat Summer</span> creativity with the Brat Generator, enabling fans to craft and share <span className="font-bold">Brat-style</span> covers that capture <span className="font-bold">Brat</span>’s rebellious spirit.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Impact */}
            <div className="section mb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
                        <div className="text-lg text-gray-600">Creations</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                        <div className="text-lg text-gray-600">Countries</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                        <div className="text-lg text-gray-600">Uptime</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                        <div className="text-lg text-gray-600">Support</div>
                    </div>
                </div>
            </div>

            {/* Contact Us */}
            <div className="section">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                </div>
                <p className="text-lg leading-relaxed">
                    Have questions about Brat-Gen’s Brat Generator? Reach out at <a href="mailto:support@crazykids.tech" className="text-blue-600">support@crazykids.tech</a>.
                </p>
            </div>
        </div>
    );
}