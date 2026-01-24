import Container from '@/components/Container';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Blog',
  description: 'Articles about AI, machine learning, geospatial analysis, and building products.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Thoughts on AI, machine learning, geospatial engineering, and building products.
        I write about what I&apos;m learning and building.
      </p>

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
        <div className="py-16 text-center">
          <p className="text-gray-500 mb-6">
            Blog posts coming soon. Check back later!
          </p>
          <a
            href="https://geotasker.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore GeoTasker.ai in the meantime &rarr;
          </a>
        </div>
      )}
    </Container>
  );
}
