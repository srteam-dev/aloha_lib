import React from 'react';
import { cn } from '../lib/utils';
import { P, FontFamily, FontWeight, ColorOption } from './Typography';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  font?: FontFamily;
  weight?: FontWeight;
  labelColor?: ColorOption;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, font, weight, labelColor, id, ...props }, ref) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex items-center space-x-3">
        <label
          htmlFor={switchId}
          className="relative inline-flex cursor-pointer items-center"
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
          <P
            font={font}
            weight={weight}
            color={labelColor}
            className="leading-none m-0 flex items-center"
          >
            {label}
          </P>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch };
