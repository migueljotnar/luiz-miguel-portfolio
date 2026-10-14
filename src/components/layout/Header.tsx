import { portfolioData } from '../../data/portfolioData';
import { useActiveSection } from '../../hooks/useActiveSection';

const { sections } = portfolioData;
const SECTION_IDS = sections.map((section) => section.id);

/** Menu superior centralizado, fixo no topo, com destaque da seção atual. */
export function Header() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <header className="sticky top-0 z-50 flex h-(--header-height) items-center border-b border-term-border bg-term-bg/85 backdrop-blur-sm">
      <nav className="mx-auto w-full max-w-4xl px-4">
        <ul className="flex flex-wrap justify-center text-xs sm:gap-2 sm:text-sm">
          {sections.map(({ id, label }) => {
            const isActive = id === activeId;

            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`block px-2 py-1.5 transition-colors ${
                    isActive ? 'text-term-bright' : 'text-term-dim hover:text-term-text'
                  }`}
                >
                  <span aria-hidden="true" className={isActive ? undefined : 'invisible'}>
                    &gt;
                  </span>{' '}
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
