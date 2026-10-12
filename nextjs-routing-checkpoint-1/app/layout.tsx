import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import NavBar from './components/NavBar';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Маршрутизация в Next.js',
    template: '%s | Маршрутизация в Next.js',
  },
  description: 'Учебный проект по App Router, динамическим маршрутам, layouts и templates.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>
        <NavBar />
        <main className="container">{children}</main>
        <footer className="site-footer">
          Контрольная точка № 1 · Next.js App Router · TypeScript
        </footer>
      </body>
    </html>
  );
}
