import { siDocker, siGit, siJavascript, siNextdotjs, siReact, siTailwindcss, siTypescript } from 'simple-icons';
import type { TechnologyId } from '../../types/portfolio';

/** Só o desenho importa: cobre os ícones do `simple-icons` e os desenhados aqui. */
interface IconShape {
  /** Caminho SVG em uma área de 24x24. */
  path: string;
}

/** Banco de dados genérico (cilindro em 3 faixas): o `simple-icons` não tem um ícone de "SQL". */
const DATABASE_ICON: IconShape = {
  path: 'M4 5a8 3 0 1 0 16 0a8 3 0 1 0-16 0zM4 7.5V11c0 1.66 3.58 3 8 3s8-1.34 8-3V7.5c-1.6 1.3-4.6 2-8 2s-6.4-.7-8-2zM4 13.5V19c0 1.66 3.58 3 8 3s8-1.34 8-3v-5.5c-1.6 1.3-4.6 2-8 2s-6.4-.7-8-2z',
};

/**
 * Ícone de cada tecnologia (pacote `simple-icons`, licença CC0).
 * Nova tecnologia: importe o `si<Nome>` correspondente e registre aqui;
 * o `Record` faz o compilador acusar qualquer id sem ícone.
 * Catálogo de nomes: https://simpleicons.org
 */
const TECH_ICONS: Record<TechnologyId, IconShape> = {
  javascript: siJavascript,
  typescript: siTypescript,
  tailwind: siTailwindcss,
  react: siReact,
  nextjs: siNextdotjs,
  sql: DATABASE_ICON,
  docker: siDocker,
  git: siGit,
};

interface TechIconProps {
  id: TechnologyId;
  className?: string;
}

/** Ícone monocromático: herda a cor do texto (`currentColor`). Decorativo. */
export function TechIcon({ id, className = '' }: TechIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={TECH_ICONS[id].path} />
    </svg>
  );
}
