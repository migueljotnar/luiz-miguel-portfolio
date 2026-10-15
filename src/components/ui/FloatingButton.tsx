import type { ReactNode } from 'react';

interface FloatingButtonProps {
  /** Quando falso, o balão some com animação e sai da navegação por teclado (`inert`). */
  visible: boolean;
  onClick: () => void;
  children: ReactNode;
}

/** Balão arredondado fixo na parte de baixo da tela, centralizado. */
export function FloatingButton({ visible, onClick, children }: FloatingButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      inert={!visible}
      className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 cursor-pointer rounded-full border border-term-border-strong bg-term-surface-raised/90 px-5 py-2.5 text-xs font-semibold text-term-bright shadow-lg shadow-black/60 backdrop-blur-sm transition-[opacity,translate,background-color] duration-300 hover:bg-term-border ${
        visible ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      {children}
    </button>
  );
}
