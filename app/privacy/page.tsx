import Container from '@/components/Container';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Privacy Policy',
  description: 'Privacy policy for KamolRoy.com',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="prose max-w-none text-gray-600">
        <p className="text-sm text-gray-500 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="mb-4">
            This Privacy Policy describes how KamolRoy.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
            and shares information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <strong>Usage Data:</strong> Information about how you access and use the website,
              including your IP address, browser type, pages visited, and time spent on pages.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar
              technologies to enhance your experience and collect analytics data.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Provide, maintain, and improve our website</li>
            <li>Understand how visitors use our website</li>
            <li>Communicate with you when you contact us</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
          <p className="mb-4">
            We may use third-party services for analytics and advertising:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              <strong>Google Analytics:</strong> We use Google Analytics to understand website
              traffic and usage patterns. Google Analytics uses cookies to collect anonymized data.
            </li>
            <li>
              <strong>Google AdSense:</strong> We may display advertisements through Google AdSense,
              which uses cookies to serve ads based on your interests.
            </li>
          </ul>
          <p>
            You can opt out of personalized advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              Google Ads Settings
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal data,
            including the right to access, correct, or delete your information. To exercise these
            rights, please contact us using the information below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:{' '}
            <a
              href="mailto:kamol.roy08@gmail.com"
              className="text-blue-600 hover:text-blue-700"
            >
              kamol.roy08@gmail.com
            </a>
          </p>
        </section>
      </div>
    </Container>
  );
}
