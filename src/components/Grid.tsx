import React from 'react';
import { cn } from '../lib/utils';
import { type ColorName, colors } from '../colors';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns (1-12 for full control) */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** Number of rows (auto by default) */
  rows?: 'auto' | number;
  /** Gap between grid items (in pixels or tailwind spacing) */
  gap?: number | string;
  /** Children components */
  children: React.ReactNode;
  /** Make grid responsive (auto-adjusts columns on mobile) */
  responsive?: boolean;
  /** Minimum column width for auto-fit (e.g., '250px') */
  autoFit?: string;
  /** Background color */
  backgroundColor?: ColorName | 'transparent';
  /** Padding */
  padding?: number | string;
  /** Border radius */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      columns = 2,
      rows = 'auto',
      gap = 4,
      children,
      className,
      responsive = true,
      autoFit,
      backgroundColor = 'transparent',
      padding,
      rounded = 'none',
      style,
      ...props
    },
    ref
  ) => {
    // Responsive grid columns
    const responsiveGridCols = responsive
      ? {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
        6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
        7: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7',
        8: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8',
        9: 'grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-9',
        10: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-10',
        11: 'grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-11',
        12: 'grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-12',
      }
      : {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
        9: 'grid-cols-9',
        10: 'grid-cols-10',
        11: 'grid-cols-11',
        12: 'grid-cols-12',
      };

    const roundedClasses = {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      full: 'rounded-full',
    };

    const gapValue = typeof gap === 'number' ? `${gap * 4}px` : gap; // 4px per unit (Tailwind spacing)
    const paddingValue = typeof padding === 'number' ? `${padding * 4}px` : padding;

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          !autoFit && responsiveGridCols[columns],
          roundedClasses[rounded],
          className
        )}
        style={{
          gap: gapValue,
          padding: paddingValue,
          backgroundColor:
            backgroundColor !== 'transparent' && backgroundColor in colors
              ? colors[backgroundColor as ColorName]
              : backgroundColor === 'transparent'
                ? undefined
                : backgroundColor,
          gridTemplateColumns: autoFit ? `repeat(auto-fit, minmax(${autoFit}, 1fr))` : undefined,
          gridTemplateRows: rows !== 'auto' ? `repeat(${rows}, 1fr)` : undefined,
          ...style,
        }}
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
  /** Number of columns to span (1-12) */
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full';
  /** Number of rows to span (1-12) */
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full';
  /** Column start position (1-12) */
  colStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** Row start position (1-12) */
  rowStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** Background color */
  backgroundColor?: ColorName | 'transparent' | string;
  /** Padding */
  padding?: number | string;
  /** Border radius */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  /** Display flex content */
  flex?: boolean;
  /** Flex direction */
  flexDirection?: 'row' | 'col';
  /** Align items */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Justify content */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
}

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      children,
      className,
      colSpan,
      rowSpan,
      colStart,
      rowStart,
      backgroundColor = 'transparent',
      padding,
      rounded = 'none',
      flex = false,
      flexDirection = 'col',
      align,
      justify,
      style,
      ...props
    },
    ref
  ) => {
    const colSpanClasses = {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      7: 'col-span-7',
      8: 'col-span-8',
      9: 'col-span-9',
      10: 'col-span-10',
      11: 'col-span-11',
      12: 'col-span-12',
      full: 'col-span-full',
    };

    const rowSpanClasses = {
      1: 'row-span-1',
      2: 'row-span-2',
      3: 'row-span-3',
      4: 'row-span-4',
      5: 'row-span-5',
      6: 'row-span-6',
      7: 'row-span-7',
      8: 'row-span-8',
      9: 'row-span-9',
      10: 'row-span-10',
      11: 'row-span-11',
      12: 'row-span-12',
      full: 'row-span-full',
    };

    const colStartClasses = {
      1: 'col-start-1',
      2: 'col-start-2',
      3: 'col-start-3',
      4: 'col-start-4',
      5: 'col-start-5',
      6: 'col-start-6',
      7: 'col-start-7',
      8: 'col-start-8',
      9: 'col-start-9',
      10: 'col-start-10',
      11: 'col-start-11',
      12: 'col-start-12',
    };

    const rowStartClasses = {
      1: 'row-start-1',
      2: 'row-start-2',
      3: 'row-start-3',
      4: 'row-start-4',
      5: 'row-start-5',
      6: 'row-start-6',
      7: 'row-start-7',
      8: 'row-start-8',
      9: 'row-start-9',
      10: 'row-start-10',
      11: 'row-start-11',
      12: 'row-start-12',
    };

    const roundedClasses = {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      full: 'rounded-full',
    };

    const alignClasses = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    };

    const justifyClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
    };

    const paddingValue = typeof padding === 'number' ? `${padding * 4}px` : padding;

    return (
      <div
        ref={ref}
        className={cn(
          colSpan && colSpanClasses[colSpan],
          rowSpan && rowSpanClasses[rowSpan],
          colStart && colStartClasses[colStart],
          rowStart && rowStartClasses[rowStart],
          roundedClasses[rounded],
          flex && 'flex',
          flex && flexDirection === 'col' && 'flex-col',
          flex && flexDirection === 'row' && 'flex-row',
          flex && align && alignClasses[align],
          flex && justify && justifyClasses[justify],
          className
        )}
        style={{
          padding: paddingValue,
          backgroundColor:
            backgroundColor !== 'transparent' && backgroundColor in colors
              ? colors[backgroundColor as ColorName]
              : backgroundColor === 'transparent'
                ? undefined
                : backgroundColor,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GridItem.displayName = 'GridItem';
