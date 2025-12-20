import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

export interface LoadingFullScreenProps {
  message?: string;
  className?: string;
  spinnerSize?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'dark' | 'transparent';
}

export const LoadingFullScreen: React.FC<LoadingFullScreenProps> = ({
  message = 'Cargando...',
  className,
  spinnerSize = 'lg',
  background = 'white',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    transparent: 'bg-transparent',
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex flex-col items-center justify-center',
        backgroundClasses[background],
        className
      )}
    >
      <Loader2 className={cn('animate-spin text-primary', sizeClasses[spinnerSize])} />
      {message && (
        <p className="mt-4 text-lg font-medium">{message}</p>
      )}
    </div>
  );
};
