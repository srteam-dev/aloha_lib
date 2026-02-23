import React from 'react';
import { cn } from '../lib/utils';
import { H1, H2, H3, H4, P, Small, Muted, type FontFamily, type FontWeight, type ColorOption } from './Typography';
import { Avatar } from './Avatar';
import type { FriendAvatar } from './FriendListItem';

export type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'muted';

// ── Color de la línea (herencia del original) ─────────────────────
const getLineColorClass = (color?: ColorOption): string => {
  if (!color || color === 'default') return 'bg-gray-300';
  const colorMap: Record<string, string> = {
    olivo: 'bg-[#383517]',
    lima: 'bg-[#B4DE6E]',
    bosque: 'bg-[#648C2C]',
    hueso: 'bg-[#F5F5DC]',
    piedra: 'bg-[#4A443F]',
    corteza: 'bg-[#6B5B3E]',
    girasol: 'bg-[#FFD400]',
    coral: 'bg-[#FF6F61]',
    aqua: 'bg-[#66FFCC]',
    lavanda: 'bg-[#B388D3]',
    electrico: 'bg-[#0084FF]',
    marmol: 'bg-[#D8D8C1]',
    ice: 'bg-[#FEFEFC]',
    koala: 'bg-[#A69C8A]',
  };
  return colorMap[color] || 'bg-gray-300';
};

// ── Props ──────────────────────────────────────────────────────────

export interface TextDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  component?: TypographyComponent;
  font?: FontFamily;
  weight?: FontWeight;
  textColor?: ColorOption;
  /** Color de la línea divisora */
  lineColor?: ColorOption;
  /** Grosor de la línea en px */
  lineThickness?: number;

  /**
   * Avatares opcionales que aparecen a la IZQUIERDA del texto.
   * Layout: [avatares] texto ─── [botón]
   */
  avatars?: FriendAvatar[];
  /** Color del ring/borde de los avatares */
  avatarRingColor?: string;

  /**
   * Slot opcional a la DERECHA de la línea (botón, etc.)
   * Layout: [avatares] texto ─── [rightSlot]
   */
  rightSlot?: React.ReactNode;
}

// ── Componente ─────────────────────────────────────────────────────

const TextDivider = React.forwardRef<HTMLDivElement, TextDividerProps>(
  ({
    className,
    text,
    component = 'p',
    font,
    weight,
    textColor = 'default',
    lineColor = 'piedra',
    lineThickness = 1,
    avatars,
    avatarRingColor,
    rightSlot,
    ...props
  }, ref) => {

    const renderText = () => {
      const commonProps = { font, weight, color: textColor, className: 'whitespace-nowrap' };
      switch (component) {
        case 'h1': return <H1 {...commonProps}>{text}</H1>;
        case 'h2': return <H2 {...commonProps}>{text}</H2>;
        case 'h3': return <H3 {...commonProps}>{text}</H3>;
        case 'h4': return <H4 {...commonProps}>{text}</H4>;
        case 'small': return <Small {...commonProps}>{text}</Small>;
        case 'muted': return <Muted {...commonProps}>{text}</Muted>;
        case 'p':
        default: return <P {...commonProps}>{text}</P>;
      }
    };

    const hasAvatars = avatars && avatars.length > 0;

    return (
      <div
        ref={ref}
        className={cn('text-divider', className)}
        {...props}
      >
        {/* ── Avatares (opcional, izquierda del todo) ── */}
        {hasAvatars && (
          <span
            className="text-divider__avatar-stack"
            style={{ '--td-ring': avatarRingColor } as React.CSSProperties}
          >
            {avatars!.map((av, i) => (
              <Avatar
                key={i}
                src={av.src}
                fallback={av.fallback}
                size="sm"
                className="text-divider__stack-avatar"
                style={{ zIndex: avatars!.length - i }}
              />
            ))}
          </span>
        )}

        {/* ── Texto ── */}
        {renderText()}

        {/* ── Línea (siempre presente, ocupa el espacio libre) ── */}
        <div
          className={cn('text-divider__line', getLineColorClass(lineColor))}
          style={{ height: `${lineThickness}px` }}
        />

        {/* ── Botón / slot derecho (opcional) ── */}
        {rightSlot && (
          <span className="text-divider__right">
            {rightSlot}
          </span>
        )}
      </div>
    );
  }
);

TextDivider.displayName = 'TextDivider';

export { TextDivider };
