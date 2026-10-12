import Link from 'next/link';

export default function PostNotFound() {
  return (
    <div className="card">
      <h1>Пост не найден</h1>
      <p>Записи с таким идентификатором нет в учебном списке.</p>
      <Link className="button" href="/blog">Вернуться в блог</Link>
    </div>
  );
}
