import React from 'react';
import { cn } from '../lib/utils';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const H1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
          className
        )}
        {...props}
      >
        {children}
      </h1>
    );
  }
);
H1.displayName = 'H1';

export const H2 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
          className
        )}
        {...props}
      >
        {children}
      </h2>
    );
  }
);
H2.displayName = 'H2';

export const H3 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          'scroll-m-20 text-2xl font-semibold tracking-tight',
          className
        )}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
H3.displayName = 'H3';

export const H4 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        className={cn(
          'scroll-m-20 text-xl font-semibold tracking-tight',
          className
        )}
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
}

export const P = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
P.displayName = 'P';

export const Subtitle = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-xl text-muted-foreground', className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Subtitle.displayName = 'Subtitle';

export const Lead = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-xl text-muted-foreground', className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Lead.displayName = 'Lead';

export const Small = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <small
        ref={ref}
        className={cn('text-sm font-medium leading-none', className)}
        {...props}
      >
        {children}
      </small>
    );
  }
);
Small.displayName = 'Small';

export const Muted = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Muted.displayName = 'Muted';
