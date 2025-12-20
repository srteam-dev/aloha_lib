import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './Button';

export interface ErrorFullScreenProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  retryText?: string;
  className?: string;
  background?: 'white' | 'gray' | 'dark' | 'transparent';
  showIcon?: boolean;
}

export const ErrorFullScreen: React.FC<ErrorFullScreenProps> = ({
  title = 'Error',
  message = 'Algo salió mal. Por favor, intenta de nuevo.',
  onRetry,
  retryText = 'Reintentar',
  className,
  background = 'white',
  showIcon = true,
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    transparent: 'bg-transparent',
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex flex-col items-center justify-center p-4',
        backgroundClasses[background],
        className
      )}
    >
      <div className="max-w-md text-center">
        {showIcon && (
          <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
        )}
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>
        {onRetry && (
          <Button onClick={onRetry} className="inline-flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            {retryText}
          </Button>
        )}
      </div>
    </div>
  );
};
