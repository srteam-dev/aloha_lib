import React from 'react';
import { cn } from '../lib/utils';
import { ColorName, colors } from '../colors';

// Importar los SVGs de patrones
import face1 from '../resources/patrons/face1.svg';
import face2 from '../resources/patrons/face2.svg';
import face3 from '../resources/patrons/face3.svg';
import face4 from '../resources/patrons/face4.svg';
import face5 from '../resources/patrons/face5.svg';
import face6 from '../resources/patrons/face6.svg';

// Mapeo de nombres a URLs de patrones
const patternMap = {
    face1: face1,
    face2: face2,
    face3: face3,
    face4: face4,
    face5: face5,
    face6: face6,
} as const;

export type PatternName = keyof typeof patternMap;

export type PatternSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

const patternSizes: Record<PatternSize, string> = {
    xs: 'w-8 h-8',
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24',
    '2xl': 'w-32 h-32',
    '3xl': 'w-40 h-40',
};

export interface PatternProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Name of the pattern */
    name: PatternName;
    /** Size of the pattern */
    size?: PatternSize;
    /** Primary color (will replace the pattern's main color) */
    color?: ColorName;
    /** Background color */
    backgroundColor?: ColorName | 'transparent';
    /** If true, the pattern will be used as a repeating background */
    repeat?: boolean;
    /** Custom width (only used when repeat is false) */
    width?: number;
    /** Custom height (only used when repeat is false) */
    height?: number;
    /** Padding around the pattern (in pixels) */
    padding?: number;
    /** Border radius (rounded corners) */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Pattern = React.forwardRef<HTMLDivElement, PatternProps>(
    (
        {
            className,
            name,
            size = 'md',
            color,
            backgroundColor = 'transparent',
            repeat = false,
            width,
            height,
            padding = 0,
            rounded = 'none',
            style,
            ...props
        },
        ref
    ) => {
        const patternSrc = patternMap[name];

        if (!patternSrc) {
            console.warn(`Pattern "${name}" not found`);
            return null;
        }

        const roundedClasses = {
            none: '',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            full: 'rounded-full',
        };

        if (repeat) {
            // Modo repetitivo - como fondo de mosaico
            return (
                <div
                    ref={ref}
                    className={cn('w-full h-full', roundedClasses[rounded], className)}
                    style={{
                        backgroundColor: backgroundColor !== 'transparent' && backgroundColor in colors ? colors[backgroundColor as ColorName] : 'transparent',
                        backgroundImage: `url(${patternSrc})`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: width && height ? `${width}px ${height}px` : '80px 80px',
                        padding: padding ? `${padding}px` : undefined,
                        ...style,
                    }}
                    {...props}
                />
            );
        }

        // Modo individual
        return (
            <div
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center flex-shrink-0',
                    !width && !height && patternSizes[size],
                    roundedClasses[rounded],
                    className
                )}
                style={{
                    backgroundColor: backgroundColor !== 'transparent' && backgroundColor in colors ? colors[backgroundColor as ColorName] : 'transparent',
                    width: width ? `${width}px` : undefined,
                    height: height ? `${height}px` : undefined,
                    padding: padding ? `${padding}px` : undefined,
                    ...style,
                }}
                {...props}
            >
                <img
                    src={patternSrc}
                    alt={`Pattern ${name}`}
                    className="w-full h-full object-contain"
                    draggable={false}
                    style={{
                        filter: color ? `hue-rotate(${getHueRotation(color)}deg)` : undefined,
                    }}
                />
            </div>
        );
    }
);

Pattern.displayName = 'Pattern';

// Función helper para rotar el hue según el color
function getHueRotation(color: ColorName): number {
    // Mapeo aproximado de colores a rotaciones de hue
    const hueMap: Record<ColorName, number> = {
        bosque: 120,
        olivo: 80,
        lima: 90,
        aqua: 180,
        electrico: 200,
        ice: 190,
        koala: 0,
        piedra: 0,
        hueso: 30,
        coral: 350,
        lavanda: 270,
        corteza: 40,
        girasol: 50,
        marmol: 0,
    };
    return hueMap[color] || 0;
}

export { Pattern, patternMap };
