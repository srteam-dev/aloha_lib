import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';
import { colors, type ColorName } from '../colors';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /** Click handler function */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Background color from Aloha palette */
  color?: ColorName;
  /** Text color from Aloha palette */
  textColor?: ColorName;
  /** Border color from Aloha palette */
  borderColor?: ColorName;
  /** Icon or image element to show on the left */
  icon?: React.ReactNode;
  /** Border width (1-4px) */
  borderWidth?: 1 | 2 | 3 | 4;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, disabled, color, textColor, borderColor, icon, children, style, borderWidth = 1, ...props }, ref) => {
    const customStyle: React.CSSProperties = {};

    // Aplicar color de fondo si se especifica
    if (color) {
      customStyle.backgroundColor = colors[color];
    }

    // Aplicar color de texto si se especifica
    if (textColor) {
      customStyle.color = colors[textColor];
    } else if (color && !textColor && variant !== 'outline') {
      // Si hay color de fondo pero no de texto (excepto outline), usar blanco por defecto
      customStyle.color = '#fff';
    }

    // Aplicar color de borde si se especifica
    if (borderColor) {
      customStyle.borderColor = colors[borderColor];
      customStyle.borderWidth = `${borderWidth}px`;
      customStyle.borderStyle = 'solid';
    }
    // Para variant outline sin borderColor especificado pero con color
    else if (variant === 'outline' && color) {
      customStyle.borderColor = colors[color];
      customStyle.borderWidth = `${borderWidth}px`;
      if (!textColor) {
        customStyle.color = colors[color];
      }
      if (!color) {
        customStyle.backgroundColor = 'transparent';
      }
    }
    // Para variant outline sin colores personalizados
    else if (variant === 'outline' && borderWidth > 1) {
      customStyle.borderWidth = `${borderWidth}px`;
    }

    const finalStyle = { ...customStyle, ...style };

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        style={finalStyle}
        {...props}
      >
        {loading ? (
          <>
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            {children}
          </>
        ) : (
          <>
            {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
            {children}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
