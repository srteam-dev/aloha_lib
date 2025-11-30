import React from 'react';
import { cn } from '../lib/utils';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  /** Gap between grid items */
  gap?: string;
  /** Children components */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ columns = 2, gap = '1rem', children, className, ...props }, ref) => {
    const gridCols = {
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    };

    return (
      <div
        ref={ref}
        className={cn('grid', gridCols[columns], className)}
        style={{ gap }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Grid.displayName = 'Grid';

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Children components */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('', className)} {...props}>
        {children}
      </div>
    );
  }
);
GridItem.displayName = 'GridItem';
