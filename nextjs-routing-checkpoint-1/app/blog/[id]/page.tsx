import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../posts';

interface PostPageProps {
  params: Promise<{ id: string }>;
}

type GenerateMetadataProps = PostPageProps;

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find((item) => item.id === id);

  return {
    title: post ? post.title : 'Пост не найден',
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = posts.find((item) => item.id === id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="breadcrumb"><Link href="/blog">Блог</Link> / Пост {post.id}</div>
      <span className="eyebrow">Динамический маршрут · [id]</span>
      <h1>{post.title}</h1>
      <p className="lead">{post.excerpt}</p>
      <article className="card">
        <p>{post.content}</p>
        <p><strong>ID поста:</strong> <code>{id}</code></p>
      </article>

      <div className="info-box">
        <strong>Как это работает?</strong>
        <p>
          Значение сегмента берётся из <code>params.id</code>. В Next.js 15+ параметр
          асинхронный, поэтому компонент объявлен как <code>async</code> и использует <code>await params</code>.
        </p>
      </div>

      <div className="button-row">
        <Link className="button" href={`/blog/${id}/comments/5`}>Открыть комментарий № 5</Link>
        <Link className="button button-secondary" href="/blog">Назад к блогу</Link>
      </div>
    </>
  );
}
