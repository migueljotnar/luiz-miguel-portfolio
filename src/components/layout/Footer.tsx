import { portfolioData } from '../../data/portfolioData';

/** Rodapé no estilo barra de status do terminal: nome e título profissional. */
export function Footer() {
  const { profile, footer } = portfolioData;

  return (
    <footer className="border-t border-term-border bg-term-surface">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-1 px-4 py-8 text-center text-xs">
        <p className="font-semibold text-term-text">{profile.fullName}</p>
        <p className="text-term-dim">{footer.title}</p>
      </div>
    </footer>
  );
}
