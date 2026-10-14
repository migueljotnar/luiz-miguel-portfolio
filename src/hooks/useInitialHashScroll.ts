import { useEffect } from 'react';

/**
 * Rola até a âncora da URL (ex.: `/#projetos`) após a primeira renderização.
 * Necessário porque o navegador tenta rolar antes de o React criar as seções.
 */
export function useInitialHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
  }, []);
}
