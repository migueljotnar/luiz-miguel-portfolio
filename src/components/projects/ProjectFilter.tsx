import type { ReactNode } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { getProjectsByTechnology } from '../../lib/technologies';
import type { TechnologyId } from '../../types/portfolio';
import { PILL_BASE, PILL_FILLED } from '../ui/pill';
import { TechIcon } from '../ui/TechIcon';

interface ProjectFilterProps {
  /** Tecnologia filtrada; `null` = todos os projetos. */
  value: TechnologyId | null;
  onChange: (value: TechnologyId | null) => void;
}

/** Filtro por tecnologia. Só lista tecnologias usadas em pelo menos um projeto. */
export function ProjectFilter({ value, onChange }: ProjectFilterProps) {
  const { technologies, projects } = portfolioData;
  const options = technologies
    .map((technology) => ({ technology, count: getProjectsByTechnology(technology.id).length }))
    .filter(({ count }) => count > 0);

  return (
    <div role="group" aria-label="Filtrar projetos por tecnologia" className="flex flex-wrap justify-center gap-2">
      <FilterPill selected={value === null} onClick={() => onChange(null)}>
        Todos <Count value={projects.length} />
      </FilterPill>
      {options.map(({ technology, count }) => (
        <FilterPill key={technology.id} selected={value === technology.id} onClick={() => onChange(technology.id)}>
          <TechIcon id={technology.id} className="size-3.5" />
          {technology.name} <Count value={count} />
        </FilterPill>
      ))}
    </div>
  );
}

interface FilterPillProps {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}

function FilterPill({ selected, onClick, children }: FilterPillProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`${PILL_BASE} ${selected ? PILL_FILLED : 'border-term-border-strong text-term-muted hover:text-term-bright'}`}
    >
      {children}
    </button>
  );
}

function Count({ value }: { value: number }) {
  return <span className="font-normal opacity-70">({value})</span>;
}
