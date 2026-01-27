import Link from 'next/link';
import Container from '@/components/Container';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Container className="py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          AI Solutions Architect & Principal Consultant
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-6">
          Building AI and data solutions for infrastructure analytics, transportation, and large-scale geospatial systems.
        </p>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          I work at{' '}
          <a
            href="https://cpcs.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            CPCS
          </a>{' '}
          as a Principal Consultant, helping infrastructure clients apply data science, machine learning, and visualization to real-world planning and operations problems.
        </p>
        <p className="text-gray-600 max-w-2xl leading-relaxed mt-4">
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
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Read the Blog
          </Link>
          <a
            href="https://geotasker.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
          >
            Explore GeoTasker.ai &rarr;
          </a>
        </div>
      </section>

      {/* GeoTasker Feature Card */}
      <section className="mb-16">
        <a
          href="https://geotasker.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
                Featured Project
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">GeoTasker.ai</h2>
              <p className="text-gray-600 max-w-xl">
                AI-powered geospatial storytelling platform. Describe any topic and get a
                narrated video with maps, animations, data visualizations, and background music.
              </p>
            </div>
            <span className="text-blue-600 text-2xl">&rarr;</span>
          </div>
        </a>
      </section>

      {/* Latest Posts */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Latest Posts</h2>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            View all &rarr;
          </Link>
        </div>
        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                description={post.description}
                date={new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                slug={post.slug}
                tags={post.tags}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 py-8 text-center border border-dashed border-gray-200 rounded-lg">
            Blog posts coming soon. Check back later!
          </p>
        )}
      </section>
    </Container>
  );
}
