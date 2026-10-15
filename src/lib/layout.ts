/** Altura atual do menu fixo, lida do `scroll-padding-top` definido em `index.css`. */
export function getHeaderHeight(): number {
  return parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
}
