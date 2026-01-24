interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  year?: string;
  link?: string;
  category?: string;
}

export default function ProjectCard({ title, description, tags, year, link, category }: ProjectCardProps) {
  const content = (
    <div className="h-full p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {year && <span className="text-sm text-gray-500 whitespace-nowrap">{year}</span>}
      </div>
      {category && (
        <span className="inline-block mt-2 px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded">
          {category}
        </span>
      )}
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      {link && (
        <div className="mt-4">
          <span className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View Project &rarr;
          </span>
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}
