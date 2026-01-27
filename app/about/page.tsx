import Container from '@/components/Container';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'About',
  description: 'AI Solutions Architect & Principal Consultant at CPCS. Building AI and data solutions for infrastructure analytics, transportation, and geospatial systems.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>

      <div className="prose max-w-none">
        <section className="mb-12">
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            I&apos;m Kamol Roy, an AI Solutions Architect & Principal Consultant at{' '}
            <a
              href="https://cpcs.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              CPCS
            </a>
            . I build AI and data solutions for infrastructure analytics, transportation, and large-scale geospatial systems.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            At CPCS, I help infrastructure clients apply data science, machine learning, and visualization to real-world planning and operations problems.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Outside of consulting, I build tools for geospatial storytelling and visualization, including{' '}
            <a
              href="https://geotasker.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              GeoTasker
            </a>{' '}
            (AI-generated map videos) and{' '}
            <a
              href="https://github.com/Kamol-Roy/geomanim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              GeoManim
            </a>{' '}
            (animated map visualizations).
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
                <li>Python, SQL, TypeScript</li>
                <li>AI/LLMs (Claude, OpenAI APIs)</li>
                <li>Machine Learning (Sklearn, PyTorch, Keras)</li>
                <li>Geospatial (GeoPandas, Mapbox, ArcGIS)</li>
                <li>Data Visualization (Plotly Dash, Folium, Matplotlib)</li>
                <li>Web Development (Next.js, FastAPI, Django)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Domain Knowledge</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Infrastructure Analytics</li>
                <li>Transportation & Freight Systems</li>
                <li>AI Automation & Workflows</li>
                <li>Geospatial Storytelling</li>
                <li>Large-scale GPS Data (NPMRDS, INRIX)</li>
                <li>Agent-Based Modeling & Simulation</li>
                <li>Disaster Analytics & Crisis Informatics</li>
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
