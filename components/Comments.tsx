'use client';

import { useEffect, useRef } from 'react';

interface CommentsProps {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
}

export default function Comments({ repo, repoId, category, categoryId }: CommentsProps) {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!commentsRef.current) return;

    // Check if script already exists
    const existingScript = commentsRef.current.querySelector('script');
    if (existingScript) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    commentsRef.current.appendChild(script);
  }, [repo, repoId, category, categoryId]);

  return (
    <div className="mt-16 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Comments</h3>
      <div ref={commentsRef} />
    </div>
  );
}
