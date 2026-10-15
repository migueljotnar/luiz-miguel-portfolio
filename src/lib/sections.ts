import { portfolioData } from '../data/portfolioData';
import type { SectionId, SectionMeta } from '../types/portfolio';

/** Ids de todas as seções, na ordem do menu. */
export const SECTION_IDS: readonly SectionId[] = portfolioData.sections.map((section) => section.id);

/** Busca os metadados de uma seção; falha cedo se ela não estiver cadastrada. */
export function getSectionMeta(id: SectionId): SectionMeta {
  const section = portfolioData.sections.find((item) => item.id === id);

  if (!section) {
    throw new Error(`Seção "${id}" não cadastrada em portfolioData.sections.`);
  }

  return section;
}

/** Id do título de uma seção, usado em `aria-labelledby`. */
export function sectionTitleId(id: SectionId): string {
  return `${id}-titulo`;
}
