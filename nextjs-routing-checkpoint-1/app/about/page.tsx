import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О нас',
  description: 'Информация об учебном проекте по маршрутизации Next.js.',
};

export default function AboutPage() {
  return (
    <>
      <span className="eyebrow">Статический маршрут</span>
      <h1 className="page-title">О проекте</h1>
      <p className="lead">
        Этот сайт создан для изучения файловой маршрутизации в Next.js с использованием App Router.
      </p>

      <div className="card-grid">
        <article className="card">
          <h2>Цель</h2>
          <p>Научиться создавать страницы и организовывать навигацию с помощью структуры папок.</p>
        </article>
        <article className="card">
          <h2>Технологии</h2>
          <p>Next.js 15+, React, TypeScript, компонент Link и хуки next/navigation.</p>
        </article>
        <article className="card">
          <h2>Что изучено</h2>
          <p>Статические и динамические маршруты, вложенные layout.tsx и template.tsx.</p>
        </article>
      </div>

      <div className="info-box">
        Адрес этой страницы — <code>/about</code>. Он соответствует файлу <code>app/about/page.tsx</code>.
      </div>
    </>
  );
}
