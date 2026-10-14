import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Superfície moderna (cantos arredondados e relevo sutil) usada para
 * tecnologias e projetos. Contrasta de propósito com as janelas CLI.
 */
export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-term-border bg-linear-to-b from-term-surface-raised to-term-surface p-4 ${className}`}
    >
      {children}
    </div>
  );
}
