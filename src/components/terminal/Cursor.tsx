/** Cursor piscante de terminal. Decorativo: oculto para leitores de tela. */
export function Cursor() {
  return (
    <span aria-hidden="true" className="animate-blink text-term-bright">
      _
    </span>
  );
}
