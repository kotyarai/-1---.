import type { Metadata } from 'next';
import Link from 'next/link';

interface CommentPageProps {
  params: Promise<{ id: string; commentId: string }>;
}

export const metadata: Metadata = {
  title: 'Комментарий к посту',
};

export default async function CommentPage({ params }: CommentPageProps) {
  const { id, commentId } = await params;

  return (
    <>
      <div className="breadcrumb">
        <Link href="/blog">Блог</Link> / <Link href={`/blog/${id}`}>Пост {id}</Link> / Комментарий {commentId}
      </div>
      <span className="eyebrow">Вложенный динамический маршрут</span>
      <h1>Комментарий № {commentId}</h1>
      <div className="card">
        <p>Этот комментарий относится к посту № {id}.</p>
        <p><strong>ID поста:</strong> <code>{id}</code></p>
        <p><strong>ID комментария:</strong> <code>{commentId}</code></p>
      </div>
      <div className="info-box">
        Оба значения получены из одного объекта: <code>params.id</code> и <code>params.commentId</code>.
      </div>
      <div className="button-row">
        <Link className="button" href={`/blog/${id}`}>Вернуться к посту</Link>
        <Link className="button button-secondary" href="/blog">К списку постов</Link>
      </div>
    </>
  );
}
