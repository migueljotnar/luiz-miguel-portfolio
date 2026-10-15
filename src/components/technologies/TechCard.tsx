import type { Technology } from '../../types/portfolio';
import { StatusTag } from '../terminal/StatusTag';
import { CARD_SURFACE } from '../ui/Card';
import { TechIcon } from '../ui/TechIcon';

interface TechCardProps {
  technology: Technology;
  selected: boolean;
  /** Id do painel de inspeção controlado por este botão. */
  controlsId: string;
  onSelect: () => void;
}

/** Tecnologia exibida como "módulo instalado", ex.: `[OK] typescript`. */
export function TechCard({ technology, selected, controlsId, onSelect }: TechCardProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-controls={controlsId}
      onClick={onSelect}
      className={`${CARD_SURFACE} group flex w-full cursor-pointer flex-col items-center gap-3 transition-colors ${
        selected ? 'border-term-bright' : 'border-term-border hover:border-term-border-strong'
      }`}
    >
      <TechIcon
        id={technology.id}
        className={`size-10 transition-colors ${
          selected ? 'text-term-bright' : 'text-term-dim group-hover:text-term-text'
        }`}
      />
      <span className="text-sm font-semibold text-term-bright">{technology.name}</span>
      <span className="text-xs text-term-muted">
        <StatusTag status="ok" /> {technology.packageName}
      </span>
    </button>
  );
}
