import { portfolioData } from '../../data/portfolioData';
import { getSectionMeta } from '../../lib/sections';
import { Section } from '../layout/Section';
import { SectionTitle } from '../layout/SectionTitle';
import { TerminalContainer } from '../terminal/TerminalContainer';
import { TerminalPrompt } from '../terminal/TerminalPrompt';

const SECTION = getSectionMeta('sobre');

/**
 * Seção SOBRE MIM: saída do comando `type` com introdução e blocos temáticos.
 * A introdução segue centralizada como o resto do site; já os blocos são
 * alinhados à esquerda, como a saída real de um terminal, para facilitar a leitura.
 */
export function AboutSection() {
  const { terminal, about } = portfolioData;

  return (
    <Section id={SECTION.id}>
      <SectionTitle section={SECTION} />

      <TerminalContainer title={terminal.windowTitle}>
        <div className="flex flex-col gap-8 text-left">
          <div className="flex flex-col items-center gap-4 text-center">
            <TerminalPrompt command={SECTION.command} />
            <p className="max-w-2xl leading-relaxed text-pretty">{about.intro}</p>
          </div>

          <div className="grid gap-8 border-t border-term-border pt-8 md:grid-cols-3 md:gap-6">
            {about.blocks.map((block) => (
              <div key={block.id} className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold tracking-widest text-term-bright">
                  <span aria-hidden="true" className="text-term-dim">
                    ##{' '}
                  </span>
                  {block.title}
                </h3>
                <ul className="flex flex-col gap-2 text-sm leading-snug text-term-muted">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="shrink-0 text-term-dim">
                        -
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </TerminalContainer>
    </Section>
  );
}
