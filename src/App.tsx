import { useState } from 'react';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TechnologiesSection } from './components/sections/TechnologiesSection';
import { useInitialHashScroll } from './hooks/useInitialHashScroll';
import type { TechnologyId } from './types/portfolio';

export function App() {
  useInitialHashScroll();
  // Filtro de projetos compartilhado: TECNOLOGIAS pode abrir PROJETOS já filtrado.
  const [projectFilter, setProjectFilter] = useState<TechnologyId | null>(null);

  function showProjectsWith(id: TechnologyId) {
    setProjectFilter(id);
    document.getElementById('projetos')?.scrollIntoView();
  }

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TechnologiesSection onShowProjects={showProjectsWith} />
        <ProjectsSection filter={projectFilter} onFilterChange={setProjectFilter} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
