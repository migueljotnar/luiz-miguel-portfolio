import { sectionTitleId } from '../../lib/sections';
import type { SectionMeta } from '../../types/portfolio';

interface SectionTitleProps {
  section: SectionMeta;
}

/** Título (h2) da seção, ligado ao `aria-labelledby` de `Section`. */
export function SectionTitle({ section }: SectionTitleProps) {
  return (
    <h2 id={sectionTitleId(section.id)} className="text-lg font-bold tracking-widest text-term-bright sm:text-xl">
      {section.label}
    </h2>
  );
}
