'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { CSSProperties } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  const linkStyle = (href: string): CSSProperties => {
    const isActive = href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(`${href}/`);

    return {
      fontWeight: isActive ? 700 : 500,
      textDecoration: isActive ? 'underline' : 'none',
      textUnderlineOffset: '5px',
    };
  };

  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Основная навигация">
        <Link className="brand" href="/">Next.js · Практика № 1</Link>
        <div className="nav-links">
          <Link className="nav-link" style={linkStyle('/')} href="/">Главная</Link>
          <Link className="nav-link" style={linkStyle('/about')} href="/about">О нас</Link>
          <Link className="nav-link" style={linkStyle('/blog')} href="/blog">Блог</Link>
          <button className="button" type="button" onClick={() => router.push('/about')}>
            Перейти к «О нас»
          </button>
        </div>
      </nav>
    </header>
  );
}
