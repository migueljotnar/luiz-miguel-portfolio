import type { ReactNode } from 'react';
import type { Emphasis } from '../../types/portfolio';

const EMPHASIS_STYLES: Record<Emphasis, string> = {
  primary: 'border-term-bright bg-term-bright text-term-bg hover:bg-term-text',
  secondary: 'border-term-border-strong text-term-bright hover:bg-term-surface-raised',
};

interface ButtonLinkProps {
  href: string;
  emphasis: Emphasis;
  /** Abre em nova aba com `rel="noopener noreferrer"` (links para fora do site). */
  external?: boolean;
  children: ReactNode;
}

/** Link com aparência de botão: preenchido (`primary`) ou com contorno (`secondary`). */
export function ButtonLink({ href, emphasis, external = false, children }: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={`inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${EMPHASIS_STYLES[emphasis]}`}
    >
      {children}
    </a>
  );
}
