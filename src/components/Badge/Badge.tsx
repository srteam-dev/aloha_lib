import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { colors, type ColorName } from '../../colors';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /** Background color from Aloha palette */
  backgroundColor?: ColorName;
  /** Text color from Aloha palette */
  textColor?: ColorName;
}

function Badge({ className, variant, backgroundColor, textColor, style, ...props }: BadgeProps) {
  const customStyle: React.CSSProperties = {};

  // Aplicar color de fondo si se especifica
  if (backgroundColor) {
    customStyle.backgroundColor = colors[backgroundColor];
    customStyle.borderColor = colors[backgroundColor];
  }

  // Aplicar color de texto si se especifica
  if (textColor) {
    customStyle.color = colors[textColor];
  }

  const finalStyle = { ...customStyle, ...style };

  return (
    <div 
      className={cn(badgeVariants({ variant }), className)} 
      style={finalStyle}
      {...props} 
    />
  );
}

export { Badge, badgeVariants };
