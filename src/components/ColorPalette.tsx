import React from 'react';
import { colors, ColorName, colorEntries } from '../colors';
import { cn } from '../lib/utils';

export interface ColorSwatchProps {
  name: ColorName;
  value: string;
  size?: 'sm' | 'md' | 'lg';
  showHex?: boolean;
  className?: string;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
  name,
  value,
  size = 'md',
  showHex = true,
  className,
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <div
        className={cn(
          'rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer',
          sizeClasses[size]
        )}
        style={{ backgroundColor: value }}
        title={`${name}: ${value}`}
      />
      <div className="text-center">
        <p className="font-semibold capitalize text-sm">{name}</p>
        {showHex && (
          <p className="text-xs text-gray-500 font-mono">{value}</p>
        )}
      </div>
    </div>
  );
};

export interface ColorPaletteProps {
  size?: 'sm' | 'md' | 'lg';
  showHex?: boolean;
  columns?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({
  size = 'md',
  showHex = true,
  columns = 4,
  className,
}) => {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  return (
    <div className={cn('grid gap-6', gridCols[columns], className)}>
      {colorEntries.map(([name, value]) => (
        <ColorSwatch
          key={name}
          name={name}
          value={value}
          size={size}
          showHex={showHex}
        />
      ))}
    </div>
  );
};

// Export colors for convenience
export { colors };
