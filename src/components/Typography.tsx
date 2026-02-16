import React from 'react';
import { cn } from '../lib/utils';

export type FontFamily = 'jetbrains' | 'nunito' | 'default';
export type FontWeight = 'light' | 'medium' | 'bold' | 'black';
export type ColorOption =
  | 'olivo' | 'lima' | 'bosque' | 'hueso' | 'piedra' | 'corteza'
  | 'girasol' | 'coral' | 'aqua' | 'lavanda' | 'electrico'
  | 'marmol' | 'ice' | 'koala'
  | 'theme-background' | 'theme-text' | 'theme-highlight' | 'theme-primary'
  | 'default';

const fontFamilyClasses: Record<FontFamily, string> = {
  jetbrains: 'font-jetbrains',
  nunito: 'font-nunito',
  default: '',
};

const fontWeightClasses: Record<FontWeight, string> = {
  light: 'font-light',
  medium: 'font-medium',
  bold: 'font-bold',
  black: 'font-black',
};

const getColorStyle = (color?: ColorOption): React.CSSProperties => {
  if (!color || color === 'default') return {};

  if (color.startsWith('theme-')) {
    return { color: `var(--${color})` };
  }

  return { color: `var(--colors-${color})` };
};

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  font?: FontFamily;
  weight?: FontWeight;
  color?: ColorOption;
}

export const H1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, font = 'nunito', weight, color, style, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
          fontFamilyClasses[font],
          weight && fontWeightClasses[weight],
          className
        )}
        style={{ ...getColorStyle(color), ...style }}
        {...props}
      >
        {children}
      </h1>
    );
  }
);
H1.displayName = 'H1';

export const H2 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, font = 'nunito', weight, color, style, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
          fontFamilyClasses[font],
          weight && fontWeightClasses[weight],
          className
        )}
        style={{ ...getColorStyle(color), ...style }}
        {...props}
      >
        {children}
      </h2>
    );
  }
);
H2.displayName = 'H2';

export const H3 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, font = 'nunito', weight, color, style, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          'scroll-m-20 text-2xl font-semibold tracking-tight',
          fontFamilyClasses[font],
          weight && fontWeightClasses[weight],
          className
        )}
        style={{ ...getColorStyle(color), ...style }}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
H3.displayName = 'H3';

export const H4 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, font = 'nunito', weight, color, style, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        className={cn(
          'scroll-m-20 text-xl font-semibold tracking-tight',
          fontFamilyClasses[font],
          weight && fontWeightClasses[weight],
          className
        )}
        style={{ ...getColorStyle(color), ...style }}
        {...props}
      >
        {children}
      </h4>
    );
  }
);
H4.displayName = 'H4';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  font?: FontFamily;
  weight?: FontWeight;
  color?: ColorOption;
}

export const P = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, font = 'nunito', weight, color, style, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'leading-7 [&:not(:first-child)]:mt-6',
          fontFamilyClasses[font],
          weight && fontWeightClasses[weight],
          className
        )}
        style={{ ...getColorStyle(color), ...style }}
        {...props}
      >
        {children}
      </p>
    );
  }
);
P.displayName = 'P';

export const Subtitle = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, font = 'nunito', weight, color, style, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-xl text-muted-foreground',
          fontFamilyClasses[font],
          weight && fontWeightClasses[weight],
          className
        )}
        style={{ ...getColorStyle(color), ...style }}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Subtitle.displayName = 'Subtitle';

export const Lead = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, font = 'nunito', weight, color, style, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-xl text-muted-foreground',
          fontFamilyClasses[font],
          weight && fontWeightClasses[weight],
          className
        )}
        style={{ ...getColorStyle(color), ...style }}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Lead.displayName = 'Lead';

export interface SmallProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  font?: FontFamily;
  weight?: FontWeight;
  color?: ColorOption;
}

export const Small = React.forwardRef<HTMLElement, SmallProps>(
  ({ className, children, font = 'nunito', weight, color, style, ...props }, ref) => {
    return (
      <small
        ref={ref}
        className={cn(
          'text-sm font-medium leading-none',
          fontFamilyClasses[font],
          weight && fontWeightClasses[weight],
          className
        )}
        style={{ ...getColorStyle(color), ...style }}
        {...props}
      >
        {children}
      </small>
    );
  }
);
Small.displayName = 'Small';

export const Muted = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, font = 'nunito', weight, color, style, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-sm text-muted-foreground',
          fontFamilyClasses[font],
          weight && fontWeightClasses[weight],
          className
        )}
        style={{ ...getColorStyle(color), ...style }}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Muted.displayName = 'Muted';
