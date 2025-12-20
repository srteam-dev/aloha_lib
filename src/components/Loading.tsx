import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

export interface LoadingProps {
  message?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  centered?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  message,
  className,
  size = 'md',
  centered = false,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const wrapper = centered ? 'flex flex-col items-center justify-center' : 'inline-flex flex-col items-center';

  return (
    <div className={cn(wrapper, className)}>
      <Loader2 className={cn('animate-spin text-primary', sizeClasses[size])} />
      {message && (
        <p className="mt-2 text-sm text-gray-600">{message}</p>
      )}
    </div>
  );
};
