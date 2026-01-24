import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Container from '@/components/Container';
import MDXComponents from '@/components/MDXComponents';
import ShareButtons from '@/components/ShareButtons';
import Comments from '@/components/Comments';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import { generateSEO, generateBlogPostSchema } from '@/lib/seo';

const SITE_URL = 'https://kamolroy.com';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return generateSEO({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    type: 'article',
    publishedTime: post.date,
    tags: post.tags,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogPostSchema(post)),
        }}
      />
      <Container className="py-16">
        <article>
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <time>{formattedDate}</time>
              <span>&middot;</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600">{post.description}</p>
            {post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-6">
              <ShareButtons url={`${SITE_URL}/blog/${slug}`} title={post.title} />
            </div>
          </header>

          <div className="prose max-w-none">
            <MDXRemote source={post.content} components={MDXComponents} />
          </div>

          {/* GeoTasker CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Interested in Geospatial Storytelling?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out GeoTasker.ai, my AI-powered platform for creating narrated video stories
              with maps, animations, and data visualizations. Just describe your topic.
            </p>
            <a
              href="https://geotasker.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore GeoTasker.ai &rarr;
            </a>
          </div>

          {/* Comments */}
          <Comments
            repo="Kamol-Roy/kamolroy.com"
            repoId="R_kgDORAR-yA"
            category="General"
            categoryId="DIC_kwDORAR-yM4C1XWK"
          />
        </article>
      </Container>
    </>
  );
}
