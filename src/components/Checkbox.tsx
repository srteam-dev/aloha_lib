import React from 'react';
import { cn } from '../lib/utils';
import { colors } from '../colors';
import { P } from './Typography';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const [isChecked, setIsChecked] = React.useState(false);

    return (
      <div className="flex items-center space-x-2">
        <div className="relative inline-flex items-center justify-center">
          <input
            type="checkbox"
            id={checkboxId}
            ref={ref}
            className={cn(
              'peer h-5 w-5 cursor-pointer appearance-none rounded-lg border-2 transition-all',
              'focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className
            )}
            style={{
              borderColor: colors.piedra,
              backgroundColor: colors.koala,
            }}
            onChange={(e) => {
              setIsChecked(e.target.checked);
              props.onChange?.(e);
            }}
            {...props}
          />
          <div 
            className="absolute pointer-events-none"
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: colors.koala,
              borderRadius: '6px',
            }}
          >
            {isChecked && (
              <svg
                className="absolute inset-0 m-auto"
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5L4.5 8.5L11 1.5"
                  stroke={colors.piedra}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        {label && (
          <P 
            className="text-sm leading-none cursor-pointer m-0 [&:not(:first-child)]:mt-0"
            onClick={() => document.getElementById(checkboxId)?.click()}
          >
            {label}
          </P>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
