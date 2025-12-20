import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './Button';

export interface ErrorProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  retryText?: string;
  className?: string;
  variant?: 'inline' | 'card';
  showIcon?: boolean;
}

export const Error: React.FC<ErrorProps> = ({
  title = 'Error',
  message = 'Algo salió mal.',
  onRetry,
  retryText = 'Reintentar',
  className,
  variant = 'inline',
  showIcon = true,
}) => {
  const variantClasses = {
    inline: 'inline-flex flex-col items-center',
    card: 'border border-red-200 bg-red-50 rounded-lg p-6',
  };

  return (
    <div className={cn(variantClasses[variant], className)}>
      <div className="flex flex-col items-center text-center">
        {showIcon && (
          <AlertCircle className="h-10 w-10 text-red-500 mb-3" />
        )}
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{message}</p>
        {onRetry && (
          <Button 
            onClick={onRetry} 
            size="sm"
            className="inline-flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            {retryText}
          </Button>
        )}
      </div>
    </div>
  );
};
