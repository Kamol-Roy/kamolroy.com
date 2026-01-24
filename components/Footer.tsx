import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/kcroy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Kamol-Roy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://scholar.google.com/citations?user=9ZVV4UgAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Google Scholar
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-gray-700 transition-colors">
              Sitemap
            </Link>
            <Link href="/rss.xml" className="hover:text-gray-700 transition-colors">
              RSS
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Kamol Roy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
