import type { ReactNode } from 'react';
import TemplateProbe from './TemplateProbe';

interface BlogTemplateProps {
  children: ReactNode;
}

export default function BlogTemplate({ children }: BlogTemplateProps) {
  return (
    <>
      <TemplateProbe />
      {children}
    </>
  );
}
