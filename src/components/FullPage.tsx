import React from 'react';
import { cn } from '../lib/utils';

export interface FullPageProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  background?: 'white' | 'gray' | 'dark' | 'transparent';
}

export const FullPage: React.FC<FullPageProps> = ({
  children,
  className,
  centered = false,
  background = 'white',
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
    transparent: 'bg-transparent',
  };

  return (
    <div
      className={cn(
        'min-h-screen w-full',
        centered && 'flex items-center justify-center',
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </div>
  );
};
