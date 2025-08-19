export async function generateMetadata({ params }) {
  const title = 'Terms of Service';
  const description = 'Terms of Service for Brat-Gen.';

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/terms-of-service`,
    }
  }
}

export default function CurrentPage() {
  return (
    <div className="page-container">
      <div className="mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Please read these terms carefully before using Brat-Gen’s free Brat Generator to create <span className="font-bold">Brat-style</span> covers.
          </p>

          <p className="text-sm text-gray-500 mb-8">
            Last Updated: Aug 19, 2025
          </p>

          <div className="space-y-8">
            <section>
              <p className="mb-4">
                Welcome to Brat-Gen, a fan-made tool for creating <span className="font-bold">Brat-style</span> covers inspired by the <span className="font-bold">Brat Summer</span> aesthetic. By accessing or using our Brat Generator, you agree to be bound by these Terms of Service.
              </p>
              <p className="mb-6">
                If you disagree with any part of these terms, you may not use the Brat Generator. Brat-Gen is a non-official fan tool, not affiliated with Charli XCX.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By using Brat-Gen’s Brat Generator, you agree to comply with these Terms of Service and all applicable laws. If you do not agree, you are prohibited from accessing or using the Brat Generator to create <span className="font-bold">Brat-style</span> covers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="mb-4">
                Brat-Gen grants you a limited, non-exclusive license to use the Brat Generator to create and download one 500x500 PNG <span className="font-bold">Brat-style</span> cover for personal, non-commercial use only. This license does not permit:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Modifying or copying the Brat Generator’s materials or software</li>
                <li>Using <span className="font-bold">Brat-style</span> covers for commercial purposes or public display</li>
                <li>Attempting to decompile or reverse engineer the Brat Generator</li>
                <li>Removing any proprietary notices from <span className="font-bold">Brat-style</span> covers</li>
                <li>Transferring or mirroring Brat Generator materials on other servers</li>
              </ul>
              <p className="mb-4">
                This license terminates automatically if you violate these terms. Upon termination, you must destroy any downloaded <span className="font-bold">Brat-style</span> covers created with the Brat Generator.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
              <p className="mb-4">
                Brat-Gen’s Brat Generator is provided “as is” with no warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property related to <span className="font-bold">Brat Summer</span> creations.
              </p>
              <p className="mb-4">
                Brat-Gen does not guarantee the accuracy, reliability, or results of using the Brat Generator to create <span className="font-bold">Brat-style</span> covers or any linked content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
              <p className="mb-4">
                Brat-Gen is not liable for any damages (e.g., data loss, loss of profits) arising from the use or inability to use the Brat Generator, even if notified of potential damages, when creating <span className="font-bold">Brat-style</span> covers for <span className="font-bold">Brat Summer</span>.
              </p>
              <p className="mb-4">
                Some jurisdictions may not allow limitations on implied warranties or liability for consequential damages, so these limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Accuracy of Materials</h2>
              <p className="mb-4">
                The Brat Generator’s materials may contain technical or typographical errors. Brat-Gen does not warrant that <span className="font-bold">Brat-style</span> covers or other content are accurate, complete, or current, and may update materials without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
              <p className="mb-4">
                Brat-Gen has not reviewed all sites linked from brat-gen.com and is not responsible for their content. Linking does not imply endorsement, and use of linked sites is at your own risk when using the Brat Generator.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
              <p className="mb-4">
                Brat-Gen may revise these Terms of Service at any time without notice. By using the Brat Generator, you agree to the current terms, ensuring compliance while creating <span className="font-bold">Brat-style</span> covers for <span className="font-bold">Brat Summer</span>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
              <p className="mb-4">
                These Terms of Service are governed by the laws of the United States, and you submit to the exclusive jurisdiction of its courts when using Brat-Gen’s Brat Generator.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
              <p className="mb-4">
                Brat-Gen respects intellectual property rights and expects users to do the same when creating <span className="font-bold">Brat-style</span> covers with the Brat Generator. As a fan-made tool inspired by the <span className="font-bold">Brat Summer</span> aesthetic, Brat-Gen is not affiliated with Charli XCX.
              </p>
              <p className="mb-4">If you believe your work has been infringed via the Brat Generator, please provide:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>A signature of the copyright owner or authorized representative</li>
                <li>Identification of the copyrighted work claimed to be infringed</li>
                <li>Details of the allegedly infringing <span className="font-bold">Brat-style</span> cover</li>
                <li>Your contact information</li>
                <li>A good faith statement that the material’s use is unauthorized</li>
                <li>A statement verifying the accuracy of your notification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. User Responsibilities</h2>
              <p className="mb-4">When using Brat-Gen’s Brat Generator, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Use the Brat Generator only for lawful purposes</li>
                <li>Respect intellectual property rights related to the <span className="font-bold">Brat</span> aesthetic</li>
                <li>Not create <span className="font-bold">Brat-style</span> covers that infringe on copyrights</li>
                <li>Not use the Brat Generator for illegal or unauthorized purposes</li>
                <li>Not disrupt the Brat Generator’s functionality or servers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Service Availability</h2>
              <p className="mb-4">
                Brat-Gen strives to keep the Brat Generator available, but we do not guarantee uninterrupted access. We may modify, suspend, or discontinue the Brat Generator at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
              <p className="mb-4">Have questions about these Terms of Service or the Brat Generator? Contact us:</p>
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
