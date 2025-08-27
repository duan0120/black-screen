import { generateAlternates } from "@/lib/hreflang";

export async function generateMetadata({ params }) {
  const title = 'About Us';
  const description = 'We are a dynamic team of developers driven by a passion to make social media content accessible to all.';
  const currentLocale = params.locale || 'en';

  return {
    title: title,
    description: description,
    alternates: generateAlternates('/about-us', currentLocale),
  }
}

export default function CurrentPage() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="section py-16">
        <h1 className="text-4xl font-bold mb-6">About Black Screen</h1>
        <p className="text-xl w-full mx-auto leading-relaxed">
          We’re a dedicated team of innovators behind <strong>Black Screen</strong>’s free <strong>Black Screen Tool</strong>, committed to empowering users with seamless screen testing, calibration, and <strong>OLED Protection</strong>. Our mission is to enhance digital experiences with versatile fullscreen solutions.
        </p>
      </div>

      {/* Brat-Gen Story */}
      <div className="section">
        <div className="w-full mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Black Screen</strong> was launched in 2025 by a group of tech enthusiasts inspired by the need for effective display maintenance and productivity tools. Starting as a passion project, our free <strong>Black Screen Tool</strong> has evolved into a globally loved resource, trusted by millions for pixel testing, color calibration, and image downloads.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our goal is to provide an intuitive, hassle-free experience with the <strong>Black Screen Tool</strong>, enabling users to test displays with colors like black, white, red, green, blue, yellow, orange, pink, purple, and custom options, all in <strong>fullscreen mode</strong>. Users can share results on X, Facebook, or Telegram. We’re devoted to supporting screen health and creativity without barriers.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            What sets <strong>Black Screen</strong> apart is our focus on user freedom and privacy. The <strong>Black Screen Tool</strong> is completely free, requires no registration, and avoids intrusive data collection, ensuring a pure and secure testing experience.
          </p>
          <p className="text-lg leading-relaxed">
            As display technology advances, we remain committed to enhancing the <strong>Black Screen Tool</strong>, keeping it aligned with modern needs for <strong>OLED Protection</strong>, <strong>fullscreen mode</strong>, and high-quality downloads. Our team works tirelessly to refine features, ensuring users can test, calibrate, and protect screens effortlessly. <strong>Black Screen</strong> is an independent tool, inspired by display care but not affiliated with any hardware brands.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="section mb-12">
        <div className="w-full mx-auto flex justify-between gap-8">
          <div className="bg-foreground/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To empower users with a free <strong>Black Screen Tool</strong> for display testing, calibration, and <strong>OLED Protection</strong>, prioritizing ease, privacy, and versatile <strong>fullscreen mode</strong> solutions.
            </p>
          </div>
          <div className="bg-foreground/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To inspire a global movement of screen health and productivity with the <strong>Black Screen Tool</strong>, enabling users to test, calibrate, and share vibrant displays that enhance their digital lives.
            </p>
          </div>
        </div>
      </div>

      {/* Our Impact */}
      <div className="section mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
            <div className="text-lg text-gray-600">Tests & Downloads</div>
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
          Have questions about <strong>Black Screen</strong>’s <strong>Black Screen Tool</strong>? Reach out at <a href="mailto:support@crazykids.tech" className="text-blue-600">support@crazykids.tech</a>.
        </p>
        <p className="text-lg leading-relaxed mt-2">
          You can also find me on other platforms where I share projects and ideas.
          <a href="/external-links" className="text-blue-600">See all my profiles here.</a>
        </p>
      </div>
    </div>
  );
}
