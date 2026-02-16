import React from 'react';
import { cn } from '../lib/utils';
import { H1, H2, H3, H4, P, Small, Muted, FontFamily, FontWeight, ColorOption } from './Typography';

export type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'muted';

const getLineColorClass = (color?: ColorOption): string => {
  if (!color || color === 'default') return 'bg-gray-300';

  if (color.startsWith('theme-')) {
    return '';
  }

  // Mapeo de colores a clases Tailwind
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

export interface TextDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  component?: TypographyComponent;
  font?: FontFamily;
  weight?: FontWeight;
  textColor?: ColorOption;
  lineColor?: ColorOption;
  lineThickness?: number;
}

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
    ...props
  }, ref) => {
    const renderText = () => {
      const commonProps = {
        font,
        weight,
        color: textColor,
        className: 'whitespace-nowrap',
      };

      switch (component) {
        case 'h1':
          return <H1 {...commonProps}>{text}</H1>;
        case 'h2':
          return <H2 {...commonProps}>{text}</H2>;
        case 'h3':
          return <H3 {...commonProps}>{text}</H3>;
        case 'h4':
          return <H4 {...commonProps}>{text}</H4>;
        case 'small':
          return <Small {...commonProps}>{text}</Small>;
        case 'muted':
          return <Muted {...commonProps}>{text}</Muted>;
        case 'p':
        default:
          return <P {...commonProps}>{text}</P>;
      }
    };

    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-4 w-full', className)}
        {...props}
      >
        {renderText()}
        <div
          className={cn('flex-1', getLineColorClass(lineColor))}
          style={{ height: `${lineThickness}px` }}
        />
      </div>
    );
  }
);

TextDivider.displayName = 'TextDivider';

export { TextDivider };
