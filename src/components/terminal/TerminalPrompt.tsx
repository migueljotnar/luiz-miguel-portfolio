import { portfolioData } from '../../data/portfolioData';
import { Cursor } from './Cursor';

interface TerminalPromptProps {
  /** Comando exibido após o `>`. Omita para um prompt vazio. */
  command?: string;
  /** Subpasta anexada ao diretório base, ex.: "projetos" -> `C:\Users\luiz\projetos>`. */
  path?: string;
  showCursor?: boolean;
}

/** Linha de prompt no formato do CMD: `C:\Users\luiz>comando`. */
export function TerminalPrompt({ command, path, showCursor = false }: TerminalPromptProps) {
  const { promptPath } = portfolioData.terminal;
  const fullPath = path ? `${promptPath}\\${path}` : promptPath;

  return (
    <p className="text-sm">
      <span className="text-term-muted">{fullPath}&gt;</span>
      {command && <span className="text-term-bright">{command}</span>}
      {showCursor && <Cursor />}
    </p>
  );
}
