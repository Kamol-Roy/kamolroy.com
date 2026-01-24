import Container from '@/components/Container';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Contact',
  description: 'Get in touch with Kamol Roy for collaborations, questions, or opportunities.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Have a question, collaboration idea, or just want to say hello?
        I&apos;d love to hear from you.
      </p>

      <div className="max-w-xl">
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Email</h2>
          <p className="text-gray-600 mb-4">
            The best way to reach me is via email. I typically respond within a few days.
          </p>
          <a
            href="mailto:kamol.roy08@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            kamol.roy08@gmail.com
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Connect</h2>
          <p className="text-gray-600 mb-4">
            You can also find me on these platforms:
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/kcroy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Kamol-Roy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://scholar.google.com/citations?user=9ZVV4UgAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Google Scholar
            </a>
          </div>
        </div>

        <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Interested in GeoTasker.ai?
          </h2>
          <p className="text-gray-600 mb-4">
            For inquiries about GeoTasker.ai, including partnerships, enterprise features,
            or feedback, please reach out directly.
          </p>
          <a
            href="https://geotasker.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Visit GeoTasker.ai &rarr;
          </a>
        </div>
      </div>
    </Container>
  );
}
