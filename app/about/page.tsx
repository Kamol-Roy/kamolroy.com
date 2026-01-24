import Container from '@/components/Container';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'About',
  description: 'Principal AI Solutions Architect with expertise in machine learning, data science, and transportation systems. PhD in Civil Engineering from UCF.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>

      <div className="prose max-w-none">
        <section className="mb-12">
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            I&apos;m Kamol Roy, a Principal AI Solutions Architect passionate about building intelligent systems
            that understand and process location data. My work sits at the intersection of machine learning,
            data science, and geospatial analysis.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Currently, I&apos;m building{' '}
            <a
              href="https://geotasker.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              GeoTasker.ai
            </a>
            , an AI-powered geospatial storytelling platform that transforms any topic into
            narrated video stories with maps, animations, and data visualizations.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            I&apos;m also developing{' '}
            <a
              href="https://github.com/Kamol-Roy/geomanim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              GeoManim
            </a>
            , an open-source Python library for creating animated geospatial visualizations
            using the Manim engine. One-line API for animated maps, choropleths, and route animations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Background</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I hold a PhD in Civil Engineering (Transportation Systems Engineering) from the University
            of Central Florida, along with a Graduate Certificate in SAS Data Mining. My academic work
            focused on understanding human mobility patterns during disasters using social media data,
            machine learning, and agent-based simulation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            My research has been funded by the National Science Foundation (NSF), the Florida Department
            of Transportation (FDOT), and the Southeast Transportation Center. I&apos;ve published in leading
            journals including the International Journal of Information Management and EPJ Data Science.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Technical Skills</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Python, R, SQL, Java</li>
                <li>Machine Learning (Sklearn, Keras, PyTorch)</li>
                <li>Geospatial Analysis (ArcGIS, GeoPandas, ArcPy)</li>
                <li>Data Visualization (Matplotlib, Folium, Bokeh)</li>
                <li>Web Development (Django, Flask, Next.js)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Domain Knowledge</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Natural Language Processing</li>
                <li>Deep Learning & Neural Networks</li>
                <li>Agent-Based Modeling & Simulation</li>
                <li>Transportation Systems</li>
                <li>Disaster Analytics</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Connect</h2>
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
            <a
              href="https://geotasker.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              GeoTasker.ai
            </a>
          </div>
        </section>
      </div>
    </Container>
  );
}
