import React from 'react';
import { cn } from '../../lib/utils';
import { colors } from '../../colors';
import { P } from '../Typography';
import { ChevronDown } from 'lucide-react';
import { FormError } from '../FormError';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string | boolean | null;
  options?: SelectOption[];
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      helperText,
      required,
      id,
      error,
      options,
      placeholder,
      children,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

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
          <select
            id={selectId}
            className={cn(
              'flex h-10 w-full rounded-lg border-2 px-3 py-2 text-sm transition-all appearance-none pr-9',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              className
            )}
            style={{
              borderColor: error ? colors.coral : colors.piedra,
              backgroundColor: colors.koala,
            }}
            ref={ref}
            required={required}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options
              ? options.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.disabled}
                  >
                    {opt.label}
                  </option>
                ))
              : children}
          </select>
          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
        {error && typeof error === 'string' && (
          <FormError error={error} />
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select };
