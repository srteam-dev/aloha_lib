import React from 'react';
import { cn } from '../../lib/utils';
import { FontFamily, FontWeight, ColorOption } from '../Typography';
import { colors } from '../../colors';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  font?: FontFamily;
  weight?: FontWeight;
  labelColor?: ColorOption;
}

const fontFamilyClasses: Record<FontFamily, string> = {
  jetbrains: 'font-jetbrains',
  nunito: 'font-nunito',
  default: '',
};

const fontWeightClasses: Record<FontWeight, string> = {
  light: 'font-light',
  medium: 'font-medium',
  bold: 'font-bold',
  black: 'font-black',
};

const getColorStyle = (color?: ColorOption): React.CSSProperties => {
  if (!color || color === 'default') return {};

  if (color.startsWith('theme-')) {
    return { color: `var(--${color})` };
  }

  if (color in colors) {
    return { color: colors[color as keyof typeof colors] };
  }

  return {};
};

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, font = 'default', weight, labelColor, id, ...props }, ref) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex items-center gap-3">
        <label
          htmlFor={switchId}
          className="relative inline-flex cursor-pointer items-center flex-shrink-0"
        >
          <input
            type="checkbox"
            id={switchId}
            ref={ref}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              'peer h-8 w-14 rounded-[0.6rem] border-2 border-[#A69C8A] bg-[#D8D8C1] after:absolute after:left-[3px] after:top-[3px] after:h-[26px] after:w-[26px] after:rounded-md after:bg-white after:shadow-md after:transition-all after:content-[""] peer-checked:border-[#4A443F] peer-checked:bg-[#4A443F] peer-checked:after:translate-x-[24px] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4A443F]/30 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
              className
            )}
          />
        </label>
        {label && (
          <span
            className={cn(
              'text-sm',
              fontFamilyClasses[font],
              weight && fontWeightClasses[weight]
            )}
            style={getColorStyle(labelColor)}
          >
            {label}
          </span>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch };
