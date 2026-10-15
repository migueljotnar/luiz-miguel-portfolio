import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import { getHeaderHeight } from '../lib/layout';

/**
 * Indica se alguma parte do elemento está visível na tela (IntersectionObserver).
 * A faixa coberta pelo menu fixo não conta como visível.
 */
export function useInView(ref: RefObject<Element | null>): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry?.isIntersecting ?? false), {
      rootMargin: `-${getHeaderHeight()}px 0px 0px 0px`,
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return inView;
}
