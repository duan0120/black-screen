import { generateAlternates } from "@/lib/hreflang";

export async function generateMetadata({ params }) {
  const title = 'Terms of Service';
  const description = 'Terms of Service for Black Screen.';
  const currentLocale = params.locale || 'en';

  return {
    title: title,
    description: description,
    alternates: generateAlternates('/terms-of-service', currentLocale),
  }
}

export default function CurrentPage() {
  return (
    <div className="page-container">
      <div className="mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Please read these terms carefully before using <strong>Black Screen</strong>’s free <strong>Black Screen Tool</strong> for testing, calibration, and <strong>OLED Protection</strong>.
          </p>

          <p className="text-sm text-gray-500 mb-8">
            Last Updated: Aug 19, 2025
          </p>

          <div className="space-y-8">
            <section>
              <p className="mb-4">
                Welcome to <strong>Black Screen</strong>, an independent tool for display testing, calibration, and <strong>OLED Protection</strong> with a <strong>fullscreen mode</strong> experience. By accessing or using our <strong>Black Screen Tool</strong>, you agree to be bound by these Terms of Service.
              </p>
              <p className="mb-6">
                If you disagree with any part of these terms, you may not use the <strong>Black Screen Tool</strong>. <strong>Black Screen</strong> is an independent tool, not affiliated with any hardware brands.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By using <strong>Black Screen</strong>’s <strong>Black Screen Tool</strong>, you agree to comply with these Terms of Service and all applicable laws. If you do not agree, you are prohibited from accessing or using the <strong>Black Screen Tool</strong> for testing or calibration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="mb-4">
                <strong>Black Screen</strong> grants you a limited, non-exclusive license to use the <strong>Black Screen Tool</strong> to create and download one high-resolution image for personal, non-commercial use only. This license does not permit:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Modifying or copying the <strong>Black Screen Tool</strong>’s materials or software</li>
                <li>Using images for commercial purposes or public display</li>
                <li>Attempting to decompile or reverse engineer the <strong>Black Screen Tool</strong></li>
                <li>Removing any proprietary notices from downloaded images</li>
                <li>Transferring or mirroring <strong>Black Screen Tool</strong> materials on other servers</li>
              </ul>
              <p className="mb-4">
                This license terminates automatically if you violate these terms. Upon termination, you must destroy any downloaded images created with the <strong>Black Screen Tool</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
              <p className="mb-4">
                <strong>Black Screen</strong>’s <strong>Black Screen Tool</strong> is provided “as is” with no warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property related to screen testing.
              </p>
              <p className="mb-4">
                <strong>Black Screen</strong> does not guarantee the accuracy, reliability, or results of using the <strong>Black Screen Tool</strong> for calibration or any linked content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
              <p className="mb-4">
                <strong>Black Screen</strong> is not liable for any damages (e.g., data loss, loss of profits) arising from the use or inability to use the <strong>Black Screen Tool</strong>, even if notified of potential damages, when testing displays or using <strong>fullscreen mode</strong>.
              </p>
              <p className="mb-4">
                Some jurisdictions may not allow limitations on implied warranties or liability for consequential damages, so these limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Accuracy of Materials</h2>
              <p className="mb-4">
                The <strong>Black Screen Tool</strong>’s materials may contain technical or typographical errors. <strong>Black Screen</strong> does not warrant that images or other content are accurate, complete, or current, and may update materials without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
              <p className="mb-4">
                <strong>Black Screen</strong> has not reviewed all sites linked from black-screen.com and is not responsible for their content. Linking does not imply endorsement, and use of linked sites is at your own risk when using the <strong>Black Screen Tool</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
              <p className="mb-4">
                <strong>Black Screen</strong> may revise these Terms of Service at any time without notice. By using the <strong>Black Screen Tool</strong>, you agree to the current terms, ensuring compliance while testing or calibrating with <strong>fullscreen mode</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
              <p className="mb-4">
                These Terms of Service are governed by the laws of the United States, and you submit to the exclusive jurisdiction of its courts when using <strong>Black Screen</strong>’s <strong>Black Screen Tool</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
              <p className="mb-4">
                <strong>Black Screen</strong> respects intellectual property rights and expects users to do the same when using the <strong>Black Screen Tool</strong>. As an independent tool inspired by display care, <strong>Black Screen</strong> is not affiliated with any hardware brands.
              </p>
              <p className="mb-4">If you believe your work has been infringed via the <strong>Black Screen Tool</strong>, please provide:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>A signature of the copyright owner or authorized representative</li>
                <li>Identification of the copyrighted work claimed to be infringed</li>
                <li>Details of the allegedly infringing image</li>
                <li>Your contact information</li>
                <li>A good faith statement that the material’s use is unauthorized</li>
                <li>A statement verifying the accuracy of your notification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. User Responsibilities</h2>
              <p className="mb-4">When using <strong>Black Screen</strong>’s <strong>Black Screen Tool</strong>, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Use the <strong>Black Screen Tool</strong> only for lawful purposes</li>
                <li>Respect intellectual property rights related to display testing</li>
                <li>Not create images that infringe on copyrights</li>
                <li>Not use the <strong>Black Screen Tool</strong> for illegal or unauthorized purposes</li>
                <li>Not disrupt the <strong>Black Screen Tool</strong>’s functionality or servers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Service Availability</h2>
              <p className="mb-4">
                <strong>Black Screen</strong> strives to keep the <strong>Black Screen Tool</strong> available, but we do not guarantee uninterrupted access. We may modify, suspend, or discontinue the <strong>Black Screen Tool</strong> at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
              <p className="mb-4">Have questions about these Terms of Service or the <strong>Black Screen Tool</strong>? Contact us:</p>
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
