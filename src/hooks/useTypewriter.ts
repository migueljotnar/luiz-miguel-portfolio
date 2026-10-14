import { useEffect, useState } from 'react';

interface TypewriterOptions {
  /** Intervalo entre caracteres, em ms. */
  speed?: number;
  /** Espera antes do primeiro caractere, em ms. */
  startDelay?: number;
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Digita `text` caractere a caractere. Com "reduzir movimento" ativado no
 * sistema, o texto aparece completo imediatamente.
 */
export function useTypewriter(text: string, { speed = 60, startDelay = 500 }: TypewriterOptions = {}) {
  const [skipAnimation] = useState(prefersReducedMotion);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (skipAnimation || count >= text.length) return;

    const timeout = window.setTimeout(() => setCount(count + 1), count === 0 ? startDelay : speed);
    return () => window.clearTimeout(timeout);
  }, [count, text, speed, startDelay, skipAnimation]);

  const length = skipAnimation ? text.length : count;

  return { typed: text.slice(0, length), done: length >= text.length };
}
