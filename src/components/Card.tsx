import React from 'react';
import { cn } from '../lib/utils';
import { H1, H2, H3, H4, P, Small, FontFamily, FontWeight, ColorOption } from './Typography';

export type CardSize = 'full' | 'constrained' | 'auto';
export type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type TitleComponent = 'h1' | 'h2' | 'h3' | 'h4';

const sizeClasses: Record<CardSize, string> = {
  full: 'w-full',
  constrained: 'max-w-md',
  auto: 'w-auto',
};

const borderRadiusClasses: Record<BorderRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
};

const getBackgroundColor = (color?: ColorOption): string => {
  if (!color || color === 'default') return 'bg-card';

  if (color.startsWith('theme-')) {
    return '';
  }

  const colorMap: Record<string, string> = {
    olivo: 'bg-[#383517]',
    lima: 'bg-[#B4DE6E]',
    bosque: 'bg-[#648C2C]',
    hueso: 'bg-[#F5F5DC]',
    piedra: 'bg-[#4A443F]',
    corteza: 'bg-[#6B5B3E]',
    girasol: 'bg-[#FFD400]',
    coral: 'bg-[#FF6F61]',
    aqua: 'bg-[#66FFCC]',
    lavanda: 'bg-[#B388D3]',
    electrico: 'bg-[#0084FF]',
    marmol: 'bg-[#D8D8C1]',
    ice: 'bg-[#FEFEFC]',
    koala: 'bg-[#A69C8A]',
  };

  return colorMap[color] || 'bg-card';
};

const getBorderColor = (color?: ColorOption): string => {
  if (!color || color === 'default') return 'border-border';

  const colorMap: Record<string, string> = {
    olivo: 'border-[#383517]',
    lima: 'border-[#B4DE6E]',
    bosque: 'border-[#648C2C]',
    hueso: 'border-[#F5F5DC]',
    piedra: 'border-[#4A443F]',
    corteza: 'border-[#6B5B3E]',
    girasol: 'border-[#FFD400]',
    coral: 'border-[#FF6F61]',
    aqua: 'border-[#66FFCC]',
    lavanda: 'border-[#B388D3]',
    electrico: 'border-[#0084FF]',
    marmol: 'border-[#D8D8C1]',
    ice: 'border-[#FEFEFC]',
    koala: 'border-[#A69C8A]',
  };

  return colorMap[color] || 'border-border';
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: CardSize;
  borderRadius?: BorderRadius;
  showBorder?: boolean;
  backgroundColor?: ColorOption;
  borderColor?: ColorOption;
  shadow?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    size = 'auto',
    borderRadius = 'lg',
    showBorder = true,
    backgroundColor = 'default',
    borderColor = 'default',
    shadow = true,
    ...props
  }, ref) => (
    <div
      ref={ref}
      className={cn(
        'text-card-foreground',
        sizeClasses[size],
        borderRadiusClasses[borderRadius],
        showBorder ? 'border' : '',
        showBorder ? getBorderColor(borderColor) : '',
        getBackgroundColor(backgroundColor),
        shadow ? 'shadow-sm' : '',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

// Subcomponentes flexibles
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  component?: TitleComponent;
  font?: FontFamily;
  weight?: FontWeight;
  titleColor?: ColorOption;
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, component = 'h3', font, weight, titleColor, children }, ref) => {
    const commonProps = {
      font,
      weight,
      color: titleColor,
      className: cn('leading-none tracking-tight', className),
    };

    const renderTitle = () => {
      switch (component) {
        case 'h1':
          return <H1 {...commonProps}>{children}</H1>;
        case 'h2':
          return <H2 {...commonProps}>{children}</H2>;
        case 'h4':
          return <H4 {...commonProps}>{children}</H4>;
        case 'h3':
        default:
          return <H3 {...commonProps}>{children}</H3>;
      }
    };

    return <div ref={ref as React.Ref<HTMLDivElement>}>{renderTitle()}</div>;
  }
);
CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  font?: FontFamily;
  weight?: FontWeight;
  descriptionColor?: ColorOption;
  small?: boolean;
}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, font, weight, descriptionColor, small = false, children, ...props }, ref) => {
    const Component = small ? Small : P;

    return (
      <Component
        ref={ref as React.Ref<HTMLParagraphElement>}
        font={font}
        weight={weight}
        color={descriptionColor}
        className={cn('text-muted-foreground', className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
