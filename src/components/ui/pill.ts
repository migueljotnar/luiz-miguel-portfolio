/**
 * Botões e links em formato de pílula (cantos totalmente arredondados).
 * Usados no filtro de projetos, no painel de tecnologias e nos contatos.
 */
export const PILL_BASE =
  'inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors';

/** Pílula com contorno; texto claro e fundo sutil ao passar o mouse. */
export const PILL_OUTLINE = 'border-term-border-strong text-term-bright hover:bg-term-surface-raised';

/** Pílula preenchida, para o estado selecionado. */
export const PILL_FILLED = 'border-term-bright bg-term-bright text-term-bg';
