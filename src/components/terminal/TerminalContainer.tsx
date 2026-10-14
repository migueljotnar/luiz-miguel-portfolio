import type { ReactNode } from 'react';

interface TerminalContainerProps {
  /** Texto da barra de título, ex.: "C:\WINDOWS\system32\cmd.exe". */
  title: string;
  children: ReactNode;
  className?: string;
}

const WINDOW_CONTROLS = ['─', '□', '✕'] as const;

/** Janela no estilo CMD: barra de título com ícone e controles e área de conteúdo. */
export function TerminalContainer({ title, children, className = '' }: TerminalContainerProps) {
  return (
    <div className={`w-full overflow-hidden rounded-md border border-term-border bg-term-bg ${className}`}>
      <div className="flex items-center gap-3 border-b border-term-border bg-term-surface pl-3 text-xs">
        <span
          aria-hidden="true"
          className="grid size-4 shrink-0 place-items-center border border-term-muted text-[8px] leading-none text-term-bright"
        >
          &gt;_
        </span>
        <span className="min-w-0 flex-1 truncate py-2 text-left text-term-muted">{title}</span>
        <div aria-hidden="true" className="flex text-term-dim">
          {WINDOW_CONTROLS.map((symbol) => (
            <span key={symbol} className="grid w-10 place-items-center py-2">
              {symbol}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
