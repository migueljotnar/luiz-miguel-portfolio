/** Iniciais das duas primeiras palavras, ex.: "Luiz Miguel" -> "LM". */
export function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
}
