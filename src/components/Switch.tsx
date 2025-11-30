import React from 'react';
import { cn } from '../lib/utils';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id, ...props }, ref) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex items-center space-x-2">
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
              'peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[""] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
              className
            )}
          />
        </label>
        {label && (
          <span className="text-sm font-medium leading-none">{label}</span>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch };
