import type { ReactNode } from 'react';
import { sectionTitleId } from '../../lib/sections';
import type { SectionId } from '../../types/portfolio';

interface SectionProps {
  id: SectionId;
  children: ReactNode;
  className?: string;
}

/**
 * Contêiner padrão de seção: centralizado e rotulado pelo título da seção.
 * O elemento de título deve usar `id={sectionTitleId(id)}`.
 */
export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={sectionTitleId(id)}
      className={`mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 py-20 text-center ${className}`}
    >
      {children}
    </section>
  );
}
