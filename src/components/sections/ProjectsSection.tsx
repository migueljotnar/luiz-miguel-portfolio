import { portfolioData } from '../../data/portfolioData';
import { getSectionMeta } from '../../lib/sections';
import { getProjectsByTechnology, getTechnology } from '../../lib/technologies';
import type { TechnologyId } from '../../types/portfolio';
import { Section } from '../layout/Section';
import { SectionTitle } from '../layout/SectionTitle';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectFilter } from '../projects/ProjectFilter';
import { StatusTag } from '../terminal/StatusTag';
import { TerminalPrompt } from '../terminal/TerminalPrompt';

const SECTION = getSectionMeta('projetos');

interface ProjectsSectionProps {
  /** Tecnologia filtrada; `null` = todos. Fica no `App` para a seção TECNOLOGIAS também poder filtrar. */
  filter: TechnologyId | null;
  onFilterChange: (filter: TechnologyId | null) => void;
}

/** Seção PROJETOS: projetos como "repositórios", com filtro por tecnologia. */
export function ProjectsSection({ filter, onFilterChange }: ProjectsSectionProps) {
  const { projects } = portfolioData;
  const visible = filter ? getProjectsByTechnology(filter) : projects;
  // O prompt reflete o filtro, como no CMD: `dir projetos | findstr react`.
  const command = filter ? `${SECTION.command} | findstr ${getTechnology(filter).packageName}` : SECTION.command;

  return (
    <Section id={SECTION.id}>
      <SectionTitle section={SECTION} />
      <TerminalPrompt command={command} />

      {projects.length === 0 ? (
        <p className="text-sm text-term-muted">
          <StatusTag status="info" /> nenhum projeto publicado ainda
        </p>
      ) : (
        <>
          <ProjectFilter value={filter} onChange={onFilterChange} />

          {/* `aria-live` anuncia a troca de filtro para leitores de tela. */}
          <ul aria-live="polite" className="flex w-full flex-wrap justify-center gap-4">
            {visible.map((project) => (
              <li key={project.id} className="w-full md:w-[calc((100%-1rem)/2)]">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>

          <p className="text-xs text-term-dim">
            {visible.length} projeto(s) encontrado(s)
          </p>
        </>
      )}
    </Section>
  );
}
