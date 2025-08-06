export async function generateMetadata({ params }) {
    const title = 'Privacy Policy';
    const description = 'Learn how we collect, use, and protect your data.';

    return {
        title: title,
        description: description,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/privay-policy`,
        }
    }
}

export default function CurrentPage() {
    return (
        <div className="page-container">
            <div className="mx-auto py-8">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-6">
                        Your privacy is our priority at Brat-Gen. Learn how we protect your data while you create <span className="font-bold">Brat-style</span> covers with our free Brat Generator.
                    </p>

                    <p className="text-sm text-gray-500 mb-8">
                        Last Updated: July 27, 2025
                    </p>

                    <div className="space-y-8">
                        <section>
                            <p className="mb-4">
                                At Brat-Gen, we value your privacy and are committed to safeguarding your information while you use our free Brat Generator to create <span className="font-bold">Brat-style</span> covers inspired by the <span className="font-bold">Brat Summer</span> aesthetic. This Privacy Policy explains how we collect, use, disclose, and protect your data.
                            </p>
                            <p className="mb-6">
                                By using Brat-Gen’s Brat Generator, you agree to the collection and use of information as outlined in this policy. Brat-Gen is a non-official fan tool, not affiliated with Charli XCX.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                            <p className="mb-4">We collect minimal data to provide and enhance our Brat Generator service:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Usage Data:</strong> We collect details about your use of the Brat Generator, such as text inputs (up to 50 characters), selected colors (e.g., Brat Green #8ACE00), and sharing actions to X or Facebook.</li>
                                <li><strong>Device Information:</strong> We may collect data about your device, including browser type, operating system, and screen resolution, to optimize the Brat Generator experience.</li>
                                <li><strong>Cookies:</strong> We use cookies to improve your <span className="font-bold">Brat-style</span> cover creation and analyze how our Brat Generator is used.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                            <p className="mb-4">We use collected data to support your <span className="font-bold">Brat Summer</span> creativity with the Brat Generator:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>To provide and maintain the Brat Generator for creating <span className="font-bold">Brat-style</span> covers</li>
                                <li>To troubleshoot and resolve technical issues with the Brat Generator</li>
                                <li>To enhance the user experience of crafting <span className="font-bold">Brat-style</span> covers</li>
                                <li>To monitor usage patterns and improve the Brat Generator’s performance</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
                            <p className="mb-4">
                                We use robust security measures to protect your data while using the Brat Generator. However, no internet transmission or storage is fully secure, and while we strive to safeguard your information, we cannot guarantee absolute security.
                            </p>
                            <p className="mb-4">
                                Brat-Gen does not store your <span className="font-bold">Brat-style</span> covers or text inputs. All processing for 500x500 PNG downloads and sharing is done in real-time, ensuring no copies are retained.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                            <p className="mb-4">
                                We may use third-party services to support the Brat Generator, such as analytics or hosting providers. These parties access only the data necessary to perform their tasks and are obligated to protect it, ensuring your <span className="font-bold">Brat Summer</span> creations remain private.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
                            <p className="mb-4">
                                We retain your data only as long as needed to provide the Brat Generator and comply with legal obligations. Usage data is kept temporarily to improve the <span className="font-bold">Brat-style</span> cover creation experience and then deleted.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Your Data Protection Rights</h2>
                            <p className="mb-4">Depending on your location, you may have rights regarding your data while using the Brat Generator, including:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>The right to access, update, or delete your data</li>
                                <li>The right to correct inaccurate information</li>
                                <li>The right to object to data processing</li>
                                <li>The right to restrict data use</li>
                                <li>The right to data portability</li>
                                <li>The right to withdraw consent</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Children’s Privacy</h2>
                            <p className="mb-4">
                                The Brat Generator is not intended for children under 13. We do not knowingly collect personal data from children under 13, and if we learn such data has been provided, we will delete it promptly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                            <p className="mb-4">
                                We may update this Privacy Policy to reflect changes in the Brat Generator or legal requirements. Updates will be posted here with a revised “Last Updated” date, effective immediately upon posting.
                            </p>
                            <p className="mb-4">
                                We encourage <span className="font-bold">Brat Summer</span> fans to review this policy periodically to stay informed about how we protect your data while using the Brat Generator.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                            <p className="mb-4">Have questions about this Privacy Policy or the Brat Generator? Contact us:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>By email: <a href="mailto:support@crazykids.tech" className="text-blue-600">support@crazykids.tech</a></li>
                                <li>By visiting the contact section on our website</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}