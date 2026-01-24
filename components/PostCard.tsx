import Link from 'next/link';

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags?: string[];
}

export default function PostCard({ title, description, date, slug, tags }: PostCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${slug}`} className="block">
        <div className="py-6 border-b border-gray-100 group-hover:border-gray-200 transition-colors">
          <time className="text-sm text-gray-500">{date}</time>
          <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-gray-600 line-clamp-2">{description}</p>
          {tags && tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
