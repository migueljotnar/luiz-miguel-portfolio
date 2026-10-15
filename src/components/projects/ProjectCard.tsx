import { getTechnology } from '../../lib/technologies';
import type { Project } from '../../types/portfolio';
import { ButtonLink } from '../ui/ButtonLink';
import { Card } from '../ui/Card';
import { TechIcon } from '../ui/TechIcon';

interface ProjectCardProps {
  project: Project;
}

/** Projeto exibido como "repositório": problema resolvido, stack e links. */
export function ProjectCard({ project }: ProjectCardProps) {
  const { repository, deploy } = project.links;

  return (
    <Card className="flex h-full flex-col gap-4 text-left">
      <div className="flex flex-col gap-1.5">
        <p className="text-xs text-term-dim">
          <span aria-hidden="true">&gt; </span>
          {project.id}
        </p>
        <h3 className="font-semibold text-term-bright">{project.title}</h3>
      </div>

      <p className="text-sm leading-relaxed text-pretty text-term-muted">{project.description}</p>

      <ul aria-label="Tecnologias usadas" className="flex flex-wrap gap-2">
        {project.technologyIds.map((id) => (
          <li
            key={id}
            className="inline-flex items-center gap-1.5 rounded-full border border-term-border px-2.5 py-1 text-xs text-term-text"
          >
            <TechIcon id={id} className="size-3.5" />
            {getTechnology(id).name}
          </li>
        ))}
      </ul>

      {(deploy || repository) && (
        // `mt-auto` alinha os botões no rodapé mesmo com descrições de tamanhos diferentes.
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {deploy && (
            <ButtonLink href={deploy} emphasis="primary" external>
              ver online ↗
            </ButtonLink>
          )}
          {repository && (
            <ButtonLink href={repository} emphasis="secondary" external>
              código ↗
            </ButtonLink>
          )}
        </div>
      )}
    </Card>
  );
}
