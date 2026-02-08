import React from 'react';
import { cn } from '../lib/utils';
import { colors } from '../colors';
import { P } from './Typography';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, helperText, required, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {(label || helperText) && (
          <div className="mb-2">
            {label && (
              <P className="text-sm font-medium m-0 [&:not(:first-child)]:mt-0 inline">
                {label}
                {required && (
                  <span style={{ color: colors.coral }}> *</span>
                )}
              </P>
            )}
            {helperText && (
              <P className="text-xs text-gray-500 m-0 mt-1 [&:not(:first-child)]:mt-1">
                {helperText}
              </P>
            )}
          </div>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            'flex h-10 w-full rounded-lg border-2 px-3 py-2 text-sm transition-all',
            'placeholder:text-gray-500',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          style={{
            borderColor: colors.piedra,
            backgroundColor: colors.koala,
          }}
          ref={ref}
          required={required}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
