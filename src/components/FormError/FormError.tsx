import React from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { P } from '../Typography';
import { colors } from '../../colors';

export interface FormErrorProps extends React.HTMLAttributes<HTMLDivElement> {
    error?: string | boolean | null;
}

const FormError = React.forwardRef<HTMLDivElement, FormErrorProps>(
    ({ className, error, ...props }, ref) => {
        if (!error) return null;

        return (
            <div
                ref={ref}
                className={cn('flex items-center gap-1.5 mt-1.5', className)}
                {...props}
            >
                <AlertCircle className="w-4 h-4" style={{ color: colors.coral }} />
                <P className="text-sm m-0 font-medium" style={{ color: colors.coral }}>
                    {error}
                </P>
            </div>
        );
    }
);

FormError.displayName = 'FormError';

export { FormError };
