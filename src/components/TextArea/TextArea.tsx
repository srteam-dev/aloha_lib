import React from 'react';
import { cn } from '../../lib/utils';
import { colors } from '../../colors';
import { P } from '../Typography';
import { FormError } from '../FormError';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string | boolean | null;
  /** Controls resize behavior of the textarea */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, helperText, required, id, error, resize = 'vertical', ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

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
          <textarea
            id={textareaId}
            className={cn(
              'flex w-full rounded-lg border-2 px-3 py-2 text-sm transition-all',
              'placeholder:text-gray-500',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error ? 'border-coral/50' : '',
              className
            )}
            style={{
              borderColor: error ? colors.coral : colors.piedra,
              backgroundColor: colors.koala,
              resize: resize,
            }}
            ref={ref}
            required={required}
            {...props}
          />
        </div>
        {error && typeof error === 'string' && (
          <FormError error={error} />
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea };
