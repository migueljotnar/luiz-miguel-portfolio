import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import type { CopyStatus } from '../../hooks/useCopyToClipboard';
import type { Contact } from '../../types/portfolio';
import { Card } from '../ui/Card';
import { ContactIcon } from '../ui/ContactIcon';
import { PILL_BASE, PILL_FILLED, PILL_OUTLINE } from '../ui/pill';

/** Rótulo do botão de copiar em cada estado, no estilo de log do terminal. */
const COPY_LABELS: Record<CopyStatus, string> = {
  idle: 'copiar link',
  copied: '[COPIADO!]',
  error: '[ERRO] copie manualmente',
};

interface ContactCardProps {
  contact: Contact;
}

/** Contato como "conexão de rede": plataforma, usuário, link e cópia do endereço. */
export function ContactCard({ contact }: ContactCardProps) {
  const [copyStatus, copy] = useCopyToClipboard();

  return (
    <Card className="flex h-full flex-col items-center gap-4">
      <ContactIcon platform={contact.platform} className="size-9 text-term-bright" />

      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold text-term-bright">{contact.label}</h3>
        <p className="text-xs break-all text-term-muted">{contact.handle}</p>
      </div>

      <div className="mt-auto flex flex-wrap justify-center gap-2">
        <a
          href={contact.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir ${contact.label} em nova aba`}
          className={`${PILL_BASE} ${PILL_FILLED} hover:bg-term-text`}
        >
          abrir ↗
        </a>
        <button
          type="button"
          onClick={() => copy(contact.url)}
          aria-label={`Copiar link do ${contact.label}`}
          className={`${PILL_BASE} ${PILL_OUTLINE}`}
        >
          {COPY_LABELS[copyStatus]}
        </button>
      </div>

      {/* Anuncia o resultado da cópia para leitores de tela (o rótulo visual muda sozinho). */}
      <span role="status" className="sr-only">
        {copyStatus === 'copied' && `Link do ${contact.label} copiado`}
        {copyStatus === 'error' && 'Não foi possível copiar o link'}
      </span>
    </Card>
  );
}
