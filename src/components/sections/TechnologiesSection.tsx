import { useRef, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useInView } from '../../hooks/useInView';
import { getHeaderHeight } from '../../lib/layout';
import { getSectionMeta, SECTION_IDS } from '../../lib/sections';
import type { TechnologyId } from '../../types/portfolio';
import { Section } from '../layout/Section';
import { SectionTitle } from '../layout/SectionTitle';
import { TechCard } from '../technologies/TechCard';
import { TechInspector } from '../technologies/TechInspector';
import { TerminalPrompt } from '../terminal/TerminalPrompt';
import { FloatingButton } from '../ui/FloatingButton';

const SECTION = getSectionMeta('tecnologias');
const INSPECTOR_ID = 'tecnologias-inspecao';

/**
 * Leva o painel para a tela só quando o topo dele estiver fora da área visível
 * (comum no celular, onde ele fica abaixo da grade). No desktop nada se move.
 * O deslocamento segue o `scroll-behavior` e o `scroll-padding-top` do CSS
 * (rolagem suave, sem ficar atrás do menu fixo e sem animação com movimento reduzido).
 */
function revealIfHidden(element: HTMLElement | null) {
  if (!element) return;

  const { top } = element.getBoundingClientRect();

  if (top < getHeaderHeight() || top > window.innerHeight) {
    element.scrollIntoView({ block: 'start' });
  }
}

/** Seção TECNOLOGIAS: grade de "módulos instalados" e painel de inspeção do módulo selecionado. */
export function TechnologiesSection() {
  const { technologies } = portfolioData;
  const [selectedId, setSelectedId] = useState<TechnologyId | undefined>(technologies[0]?.id);
  const gridRef = useRef<HTMLDivElement>(null);
  const inspectorRef = useRef<HTMLDivElement>(null);
  const selected = technologies.find((technology) => technology.id === selectedId);

  // O balão "voltar" só aparece com a grade fora da tela (no celular, na prática) e enquanto
  // TECNOLOGIAS for a seção ativa no menu: ao passar para PROJETOS, ele some junto com o destaque.
  const gridInView = useInView(gridRef);
  const isActiveSection = useActiveSection(SECTION_IDS) === SECTION.id;
  const showBackButton = isActiveSection && !gridInView;

  function handleSelect(id: TechnologyId) {
    setSelectedId(id);
    revealIfHidden(inspectorRef.current);
  }

  /** Volta para a grade e devolve o foco ao card selecionado (teclado e leitores de tela). */
  function handleBack() {
    const grid = gridRef.current;
    if (!grid) return;

    grid.scrollIntoView({ block: 'start' });
    grid.querySelector<HTMLButtonElement>('[aria-pressed="true"]')?.focus({ preventScroll: true });
  }

  return (
    <Section id={SECTION.id}>
      <SectionTitle section={SECTION} />
      <TerminalPrompt command={SECTION.command} />

      {/* Flex com quebra (e não grid) para centralizar a última linha quando ela não estiver cheia. */}
      <div ref={gridRef} className="flex w-full scroll-mt-4 flex-wrap justify-center gap-4">
        {technologies.map((technology) => (
          <div key={technology.id} className="flex w-[calc((100%-1rem)/2)] sm:w-[calc((100%-2rem)/3)]">
            <TechCard
              technology={technology}
              selected={technology.id === selectedId}
              controlsId={INSPECTOR_ID}
              onSelect={() => handleSelect(technology.id)}
            />
          </div>
        ))}
      </div>

      <p className="text-xs text-term-dim">
        {technologies.length} módulo(s) instalado(s) · selecione um para inspecionar
      </p>

      {selected && <TechInspector ref={inspectorRef} id={INSPECTOR_ID} technology={selected} />}

      <FloatingButton visible={showBackButton} onClick={handleBack}>
        <span aria-hidden="true">↑ </span>voltar aos módulos
      </FloatingButton>
    </Section>
  );
}
