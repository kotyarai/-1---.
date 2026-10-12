import type { ReactNode } from 'react';
import Link from 'next/link';

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <section className="blog-shell">
      <header className="blog-shell-header">
        <h2>Раздел «Блог»</h2>
        <p>Эта оболочка общая для списка постов, постов и комментариев.</p>
        <p>
          <Link href="/blog">← Все записи блога</Link>
        </p>
      </header>
      {children}
    </section>
  );
}
