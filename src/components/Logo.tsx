import React from 'react';
import { cn } from '../lib/utils';
import { ColorOption } from './Typography';

// Importar los logos como URLs
import horizontalLogo from '../resources/logo/Horizontal.svg?url';
import verticalLogo from '../resources/logo/Vertical.svg?url';
import onlyIconLogo from '../resources/logo/OnlyIcon.svg?url';

export type LogoVariant = 'horizontal' | 'vertical' | 'icon';
export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const logoMap: Record<LogoVariant, string> = {
    horizontal: horizontalLogo,
    vertical: verticalLogo,
    icon: onlyIconLogo,
};

const sizeClasses: Record<LogoSize, string> = {
    xs: 'h-6',
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24',
    '2xl': 'h-32',
};

// Anchos específicos para cada variante según el tamaño
const widthClasses: Record<LogoVariant, Record<LogoSize, string>> = {
    horizontal: {
        xs: 'w-24',    // horizontal (más ancho que alto)
        sm: 'w-32',
        md: 'w-48',
        lg: 'w-64',
        xl: 'w-96',
        '2xl': 'w-[512px]',
    },
    vertical: {
        xs: 'w-12',    // vertical (más alto que ancho)
        sm: 'w-16',
        md: 'w-24',
        lg: 'w-32',
        xl: 'w-48',
        '2xl': 'w-64',
    },
    icon: {
        xs: 'w-6',     // cuadrado
        sm: 'w-8',
        md: 'w-12',
        lg: 'w-16',
        xl: 'w-24',
        '2xl': 'w-32',
    },
};

const getColorValue = (color?: ColorOption): string => {
    if (!color || color === 'default') return '#383517'; // olivo por defecto

    if (color.startsWith('theme-')) {
        return `var(--${color})`;
    }

    const colorMap: Record<string, string> = {
        olivo: '#383517',
        lima: '#B4DE6E',
        bosque: '#648C2C',
        hueso: '#F5F5DC',
        piedra: '#4A443F',
        corteza: '#6B5B3E',
        girasol: '#FFD400',
        coral: '#FF6F61',
        aqua: '#66FFCC',
        lavanda: '#B388D3',
        electrico: '#0084FF',
        marmol: '#D8D8C1',
        ice: '#FEFEFC',
        koala: '#A69C8A',
    };

    return colorMap[color] || '#383517';
};

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: LogoVariant;
    size?: LogoSize;
    color?: ColorOption;
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
    ({ variant = 'horizontal', size = 'md', color = 'default', className, ...props }, ref) => {
        const logoSrc = logoMap[variant];
        const colorValue = getColorValue(color);

        return (
            <div
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center flex-shrink-0',
                    sizeClasses[size],
                    widthClasses[variant][size],
                    className
                )}
                {...props}
            >
                <div
                    className="w-full h-full"
                    style={{
                        mask: `url(${logoSrc}) no-repeat center`,
                        maskSize: 'contain',
                        WebkitMask: `url(${logoSrc}) no-repeat center`,
                        WebkitMaskSize: 'contain',
                        backgroundColor: colorValue,
                    }}
                />
            </div>
        );
    }
);

Logo.displayName = 'Logo';

export { Logo };
