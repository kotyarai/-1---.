import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './posts';

export const metadata: Metadata = {
  title: 'Блог',
  description: 'Посты о маршрутизации Next.js.',
};

export default function BlogPage() {
  return (
    <>
      <span className="eyebrow">Статический маршрут</span>
      <h1 className="page-title">Блог</h1>
      <p className="lead">Выберите запись, чтобы открыть динамическую страницу поста.</p>

      <ul className="list-clean">
        {posts.map((post) => (
          <li key={post.id}>
            <span className="pill">Пост {post.id}</span>
            <h2 style={{ margin: '8px 0 4px' }}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p style={{ margin: 0 }}>{post.excerpt}</p>
          </li>
        ))}
      </ul>
      <div className="info-box">
        Путь <code>/blog</code> соответствует <code>app/blog/page.tsx</code>.
        Ссылки на посты формируют URL вида <code>/blog/1</code>.
      </div>
    </>
  );
}
