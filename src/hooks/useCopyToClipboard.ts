import { useEffect, useRef, useState } from 'react';

export type CopyStatus = 'idle' | 'copied' | 'error';

/** Quanto tempo o feedback (`[COPIADO!]` ou `[ERRO]`) fica visível. */
const FEEDBACK_MS = 2000;

/** Copia texto para a área de transferência e expõe o status para feedback visual temporário. */
export function useCopyToClipboard(): [CopyStatus, (text: string) => Promise<void>] {
  const [status, setStatus] = useState<CopyStatus>('idle');
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('copied');
    } catch {
      // Ex.: permissão negada ou página fora de HTTPS.
      setStatus('error');
    }

    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus('idle'), FEEDBACK_MS);
  }

  return [status, copy];
}
