'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TemplateProbe() {
  const pathname = usePathname();

  useEffect(() => {
    console.info(`[Blog template] Компонент смонтирован для маршрута: ${pathname}`);
    return () => {
      console.info(`[Blog template] Компонент размонтирован: ${pathname}`);
    };
  }, [pathname]);

  return null;
}
