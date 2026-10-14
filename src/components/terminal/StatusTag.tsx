type Status = 'ok' | 'info' | 'error';

const STATUS_STYLES: Record<Status, { label: string; className: string }> = {
  ok: { label: 'OK', className: 'text-term-bright' },
  info: { label: 'INFO', className: 'text-term-muted' },
  // Sem cores no tema: o erro usa vídeo invertido, como alertas de console.
  error: { label: 'ERRO', className: 'bg-term-bright px-1 text-term-bg' },
};

interface StatusTagProps {
  status: Status;
}

/** Indicador de status no estilo de log de sistema, ex.: `[OK]`. */
export function StatusTag({ status }: StatusTagProps) {
  const { label, className } = STATUS_STYLES[status];

  return (
    <span className="font-semibold">
      <span className="text-term-dim">[</span>
      <span className={className}>{label}</span>
      <span className="text-term-dim">]</span>
    </span>
  );
}
