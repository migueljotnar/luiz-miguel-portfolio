import { portfolioData } from '../data/portfolioData';
import type { Project, TechnologyId } from '../types/portfolio';

/** Projetos que usam a tecnologia (vínculo por `Project.technologyIds`). */
export function getProjectsByTechnology(id: TechnologyId): Project[] {
  return portfolioData.projects.filter((project) => project.technologyIds.includes(id));
}
