import { portfolioData } from './data/portfolioData';
import { Header } from './components/layout/Header';
import { Section } from './components/layout/Section';
import { SectionTitle } from './components/layout/SectionTitle';
import { AboutSection } from './components/sections/AboutSection';
import { HeroSection } from './components/sections/HeroSection';
import { StatusTag } from './components/terminal/StatusTag';
import { TerminalPrompt } from './components/terminal/TerminalPrompt';
import { useInitialHashScroll } from './hooks/useInitialHashScroll';
import type { SectionId } from './types/portfolio';

/** TEMPORÁRIO: seções já implementadas; as demais aparecem como esqueleto. */
const IMPLEMENTED: ReadonlySet<SectionId> = new Set(['inicio', 'sobre']);

export function App() {
  useInitialHashScroll();

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />

        {/* TEMPORÁRIO: esqueletos das seções das Tasks 4 a 6, para validar a navegação. */}
        {portfolioData.sections
          .filter((section) => !IMPLEMENTED.has(section.id))
          .map((section) => (
            <Section key={section.id} id={section.id} className="min-h-[60vh] border-t border-term-border">
              <SectionTitle section={section} />
              <TerminalPrompt command={section.command} />
              <p className="text-sm text-term-dim">
                <StatusTag status="info" /> em construção
              </p>
            </Section>
          ))}
      </main>
    </>
  );
}
