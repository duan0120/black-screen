import { generateAlternates } from "@/lib/hreflang";

export async function generateMetadata({ params }) {
  const title = 'Privacy Policy';
  const description = 'Learn how we collect, use, and protect your data.';
  const currentLocale = params.locale || 'en';

  return {
    title: title,
    description: description,
    alternates: generateAlternates('/privacy-policy', currentLocale),
  }
}

export default function CurrentPage() {
  return (
    <div className="page-container">
      <div className="mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Your privacy is our priority at <strong>Black Screen</strong>. Learn how we protect your data while you use our free <strong>Black Screen Tool</strong> for testing, calibration, and <strong>OLED Protection</strong>.
          </p>

          <p className="text-sm text-gray-500 mb-8">
            Last Updated: Aug 19, 2025
          </p>

          <div className="space-y-8">
            <section>
              <p className="mb-4">
                At <strong>Black Screen</strong>, we value your privacy and are committed to safeguarding your information while you use our free <strong>Black Screen Tool</strong> to test displays, calibrate colors, and ensure <strong>OLED Protection</strong> with a <strong>fullscreen mode</strong> experience. This Privacy Policy explains how we collect, use, disclose, and protect your data.
              </p>
              <p className="mb-6">
                By using <strong>Black Screen</strong>’s <strong>Black Screen Tool</strong>, you agree to the collection and use of information as outlined in this policy. <strong>Black Screen</strong> is an independent tool, not affiliated with any hardware brands.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="mb-4">We collect minimal data to provide and enhance our <strong>Black Screen Tool</strong> service:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Usage Data:</strong> We collect details about your use of the <strong>Black Screen Tool</strong>, such as selected colors (e.g., black, white, red), resolution settings for image downloads, and sharing actions to X or Facebook.</li>
                <li><strong>Device Information:</strong> We may collect data about your device, including browser type, operating system, and screen resolution, to optimize the <strong>Black Screen Tool</strong> experience.</li>
                <li><strong>Cookies:</strong> We use cookies to improve your <strong>fullscreen mode</strong> testing and analyze how our <strong>Black Screen Tool</strong> is used.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use collected data to support your screen health and productivity with the <strong>Black Screen Tool</strong>:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>To provide and maintain the <strong>Black Screen Tool</strong> for display testing and calibration</li>
                <li>To troubleshoot and resolve technical issues with the <strong>Black Screen Tool</strong></li>
                <li>To enhance the user experience of using <strong>fullscreen mode</strong> and <strong>OLED Protection</strong></li>
                <li>To monitor usage patterns and improve the <strong>Black Screen Tool</strong>’s performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
              <p className="mb-4">
                We use robust security measures to protect your data while using the <strong>Black Screen Tool</strong>. However, no internet transmission or storage is fully secure, and while we strive to safeguard your information, we cannot guarantee absolute security.
              </p>
              <p className="mb-4">
                <strong>Black Screen</strong> does not store your test settings or downloaded images. All processing for high-resolution downloads and sharing is done in real-time, ensuring no copies are retained.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="mb-4">
                We may use third-party services to support the <strong>Black Screen Tool</strong>, such as analytics or hosting providers. These parties access only the data necessary to perform their tasks and are obligated to protect it, ensuring your testing experience remains private.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p className="mb-4">
                We retain your data only as long as needed to provide the <strong>Black Screen Tool</strong> and comply with legal obligations. Usage data is kept temporarily to improve the testing and calibration experience and then deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Data Protection Rights</h2>
              <p className="mb-4">Depending on your location, you may have rights regarding your data while using the <strong>Black Screen Tool</strong>, including:</p>
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
                The <strong>Black Screen Tool</strong> is not intended for children under 13. We do not knowingly collect personal data from children under 13, and if we learn such data has been provided, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy to reflect changes in the <strong>Black Screen Tool</strong> or legal requirements. Updates will be posted here with a revised “Last Updated” date, effective immediately upon posting.
              </p>
              <p className="mb-4">
                We encourage users to review this policy periodically to stay informed about how we protect your data while using the <strong>Black Screen Tool</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">Have questions about this Privacy Policy or the <strong>Black Screen Tool</strong>? Contact us:</p>
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
