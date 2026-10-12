import Link from 'next/link';

const features = [
  {
    title: 'Файловая маршрутизация',
    description: 'Папки и файлы page.tsx задают адреса страниц.',
  },
  {
    title: 'Динамические сегменты',
    description: 'Параметры [id] и [commentId] позволяют создавать страницы по шаблону.',
  },
  {
    title: 'Layouts и Templates',
    description: 'Сравним сохраняющуюся оболочку и компонент, который перемонтируется при навигации.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <span className="eyebrow">Учебный проект · Next.js 15+</span>
        <h1>Маршрутизация и навигация</h1>
        <p className="lead">
          Демонстрационный многостраничный сайт на Next.js App Router и TypeScript.
          Изучайте структуру маршрутов, переходы между страницами и вложенные оболочки.
        </p>
        <div className="button-row">
          <Link className="button" href="/blog">Открыть блог</Link>
          <Link className="button button-secondary" href="/about">О проекте</Link>
        </div>
      </section>

      <section className="card-grid" aria-label="Темы работы">
        {features.map((feature) => (
          <article className="card" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <h2>Быстрая проверка маршрутов</h2>
        <p>Откройте готовые страницы, включая вложенный динамический маршрут комментария.</p>
        <div className="button-row">
          <Link className="button button-secondary" href="/blog/1">Пост № 1</Link>
          <Link className="button button-secondary" href="/blog/1/comments/5">Комментарий № 5</Link>
        </div>
      </section>
    </>
  );
}
