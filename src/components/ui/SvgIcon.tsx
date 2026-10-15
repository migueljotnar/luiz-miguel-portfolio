/** Só o desenho importa: cobre os ícones do `simple-icons` e os desenhados no projeto. */
export interface IconShape {
  /** Caminho SVG em uma área de 24x24. */
  path: string;
}

interface SvgIconProps {
  icon: IconShape;
  className?: string;
}

/** Ícone monocromático: herda a cor do texto (`currentColor`). Decorativo. */
export function SvgIcon({ icon, className = '' }: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={icon.path} />
    </svg>
  );
}
