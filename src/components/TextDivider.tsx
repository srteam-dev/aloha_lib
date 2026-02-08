import React from 'react';
import { cn } from '../lib/utils';

export type ColorOption = 
  | 'olivo' | 'lima' | 'bosque' | 'hueso' | 'piedra' | 'corteza' 
  | 'girasol' | 'coral' | 'aqua' | 'lavanda' | 'electrico'
  | 'marmol' | 'ice' | 'koala'
  | 'theme-background' | 'theme-text' | 'theme-highlight' | 'theme-primary'
  | 'default';

const getColorStyle = (color?: ColorOption): React.CSSProperties => {
  if (!color || color === 'default') return {};
  
  if (color.startsWith('theme-')) {
    return { color: `var(--${color})` };
  }
  
  return { color: `var(--colors-${color})` };
};

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
  textColor?: ColorOption;
  lineColor?: ColorOption;
  lineThickness?: number;
}

const TextDivider = React.forwardRef<HTMLDivElement, TextDividerProps>(
  ({ className, text, textColor = 'default', lineColor = 'piedra', lineThickness = 1, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-4 w-full', className)}
        {...props}
      >
        <span 
          className="text-base font-normal whitespace-nowrap"
          style={getColorStyle(textColor)}
        >
          {text}
        </span>
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
