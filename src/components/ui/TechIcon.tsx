import {
  siDocker,
  siGit,
  siJavascript,
  siNextdotjs,
  siReact,
  siReactrouter,
  siTailwindcss,
  siTypescript,
  siVite,
} from 'simple-icons';
import type { TechnologyId } from '../../types/portfolio';
import { SvgIcon } from './SvgIcon';
import type { IconShape } from './SvgIcon';

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
  'react-router': siReactrouter,
  nextjs: siNextdotjs,
  vite: siVite,
  sql: DATABASE_ICON,
  docker: siDocker,
  git: siGit,
};

interface TechIconProps {
  id: TechnologyId;
  className?: string;
}

export function TechIcon({ id, className }: TechIconProps) {
  return <SvgIcon icon={TECH_ICONS[id]} className={className} />;
}
