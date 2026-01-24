import type { Metadata } from 'next';

const siteUrl = 'https://kamolroy.com';
const siteName = 'Kamol Roy';
const defaultDescription = 'Principal AI Solutions Architect building GeoTasker.ai - an AI platform for creating narrated video stories with maps and data visualizations. Writing about AI, geospatial tech, and building products.';

interface SEOParams {
  title?: string;
  description?: string;
  path?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  tags?: string[];
  image?: string;
}

export function generateSEO({
  title,
  description = defaultDescription,
  path = '',
  type = 'website',
  publishedTime,
  tags,
  image,
}: SEOParams = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const url = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/images/og-default.png`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName,
      type: type === 'article' ? 'article' : 'website',
      ...(publishedTime && { publishedTime }),
      ...(tags && { tags }),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateBlogPostSchema(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Kamol Roy',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: 'Kamol Roy',
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kamol Roy',
    url: siteUrl,
    jobTitle: 'Principal AI Solutions Architect',
    description: defaultDescription,
    sameAs: [
      'https://www.linkedin.com/in/kcroy/',
      'https://github.com/Kamol-Roy',
      'https://scholar.google.com/citations?user=9ZVV4UgAAAAJ&hl=en',
    ],
  };
}
