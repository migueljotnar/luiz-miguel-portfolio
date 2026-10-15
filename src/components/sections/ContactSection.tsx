import { portfolioData } from '../../data/portfolioData';
import { getSectionMeta } from '../../lib/sections';
import { ContactCard } from '../contact/ContactCard';
import { Section } from '../layout/Section';
import { SectionTitle } from '../layout/SectionTitle';
import { StatusTag } from '../terminal/StatusTag';
import { TerminalPrompt } from '../terminal/TerminalPrompt';

const SECTION = getSectionMeta('contato');

/** Seção CONTATO: saída do `ping` com uma "conexão" por rede social; encerra a página com o prompt livre. */
export function ContactSection() {
  const { contacts } = portfolioData;

  return (
    <Section id={SECTION.id}>
      <SectionTitle section={SECTION} />
      <TerminalPrompt command={SECTION.command} />
      <p className="text-xs text-term-muted">
        <StatusTag status="ok" /> {contacts.length} destino(s) respondendo
      </p>

      <ul className="flex w-full flex-wrap justify-center gap-4">
        {contacts.map((contact) => (
          <li key={contact.platform} className="w-full sm:w-[calc((100%-2rem)/3)]">
            <ContactCard contact={contact} />
          </li>
        ))}
      </ul>

      {/* Fim da "sessão": prompt vazio com cursor, como um terminal aguardando comando. */}
      <div className="mt-8">
        <TerminalPrompt showCursor />
      </div>
    </Section>
  );
}
