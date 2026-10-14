import { useEffect, useState } from 'react';
import type { SectionId } from '../types/portfolio';

/** Fração da altura da tela que define qual seção está "ativa". */
const ACTIVATION_LINE = 0.35;

/**
 * Retorna a seção visível no momento (scroll-spy).
 * Ativa a última seção cujo topo passou da linha de ativação e, no fim da
 * página, a última seção, mesmo que ela seja curta.
 */
export function useActiveSection(ids: readonly SectionId[]): SectionId | undefined {
  const [activeId, setActiveId] = useState<SectionId | undefined>(ids[0]);

  useEffect(() => {
    // O navegador já limita `scroll` a um evento por quadro; o cálculo é barato (5 seções).
    const update = () => {
      const { scrollY, innerHeight } = window;
      const atBottom = scrollY + innerHeight >= document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActiveId(ids.at(-1));
        return;
      }

      let current = ids[0];
      for (const id of ids) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= innerHeight * ACTIVATION_LINE) current = id;
      }
      setActiveId(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids]);

  return activeId;
}
