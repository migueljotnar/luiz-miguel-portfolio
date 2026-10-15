import { portfolioData } from '../data/portfolioData';
import type { Project, Technology, TechnologyId } from '../types/portfolio';

/** Busca uma tecnologia pelo id; falha cedo se ela não estiver cadastrada. */
export function getTechnology(id: TechnologyId): Technology {
  const technology = portfolioData.technologies.find((item) => item.id === id);

  if (!technology) {
    throw new Error(`Tecnologia "${id}" não cadastrada em portfolioData.technologies.`);
  }

  return technology;
}

/** Projetos que usam a tecnologia (vínculo por `Project.technologyIds`). */
export function getProjectsByTechnology(id: TechnologyId): Project[] {
  return portfolioData.projects.filter((project) => project.technologyIds.includes(id));
}
