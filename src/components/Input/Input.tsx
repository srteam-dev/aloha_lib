import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { colors } from '../../colors';
import { P } from '../Typography';
import { Eye, EyeOff } from 'lucide-react';
import { FormError } from '../FormError';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string | boolean | null;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, helperText, required, id, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    // Determine if type was explicitly set to text by parent but it's meant to be a password
    // Wait, the parent might already be doing `type={showPassword ? 'text' : 'password'}`
    // If we handle it internally, we check if `type === 'password'`. If the parent does that, our internal toggle wouldn't work when parent overrides.
    // However, since we now handle it internally, parents won't need to control the toggle.

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
        <div className="relative">
          <input
            type={inputType}
            id={inputId}
            className={cn(
              'flex h-10 w-full rounded-lg border-2 px-3 py-2 text-sm transition-all',
              'placeholder:text-gray-500',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              isPassword ? 'pr-10' : '', // make room for the eye icon
              error ? 'border-coral/50' : '', // simple error indication on border
              className
            )}
            style={{
              borderColor: error ? colors.coral : colors.piedra,
              backgroundColor: colors.koala,
            }}
            ref={ref}
            required={required}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
        {error && typeof error === 'string' && (
          <FormError error={error} />
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
