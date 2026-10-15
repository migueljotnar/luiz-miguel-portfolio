import type { ReactNode } from 'react';

/**
 * Superfície moderna (cantos arredondados e relevo sutil) usada para
 * tecnologias e projetos. Contrasta de propósito com as janelas CLI.
 * Sem cor de borda: quem usa define (ex.: estado selecionado).
 * Exportada para elementos que não podem ser `div`, como botões.
 */
export const CARD_SURFACE = 'rounded-xl border bg-linear-to-b from-term-surface-raised to-term-surface p-4';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return <div className={`${CARD_SURFACE} border-term-border ${className}`}>{children}</div>;
}
