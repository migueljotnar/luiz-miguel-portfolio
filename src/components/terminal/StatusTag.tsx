type Status = 'ok' | 'info';

const STATUS_STYLES: Record<Status, { label: string; className: string }> = {
  ok: { label: 'OK', className: 'text-term-bright' },
  info: { label: 'INFO', className: 'text-term-muted' },
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
