import React, { useEffect, useState, useRef } from 'react';
import { cn } from '../lib/utils';
import { Pattern, type PatternName } from './Pattern';
import { type ColorName } from '../colors';

export interface PatternFillProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Width of the container (px or '100%') */
    width?: number | string;
    /** Height of the container (px or '100%') */
    height?: number | string;
    /** Size of each pattern (px) */
    patternSize?: number;
    /** Gap between patterns (px) */
    gap?: number;
    /** Array of patterns to use (if empty, uses all patterns randomly) */
    patterns?: PatternName[];
    /** Array of colors to use (if empty, uses random colors) */
    colors?: ColorName[];
    /** If true, patterns will be randomly rotated (only 0°, 90°, 180°, 270°) */
    randomRotation?: boolean;
    /** If true, patterns will have random scales */
    randomScale?: boolean;
    /** If true, patterns will have random opacity */
    randomOpacity?: boolean;
    /** Background color of the container */
    backgroundColor?: ColorName | 'transparent';
    /** Border radius */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    /** Padding around the container */
    padding?: number;
}

const allPatterns: PatternName[] = ['face1', 'face2', 'face3', 'face4', 'face5', 'face6'];
const defaultColors: ColorName[] = ['bosque', 'lima', 'coral', 'aqua', 'lavanda', 'electrico'];

const PatternFill = React.forwardRef<HTMLDivElement, PatternFillProps>(
    (
        {
            className,
            width = '100%',
            height = 400,
            patternSize = 80,
            gap = 8,
            patterns = allPatterns,
            colors = defaultColors,
            randomRotation = false,
            randomScale = false,
            randomOpacity = false,
            backgroundColor = 'transparent',
            rounded = 'none',
            padding = 0,
            style,
            ...props
        },
        ref
    ) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const [gridItems, setGridItems] = useState<Array<{
            pattern: PatternName;
            color: ColorName;
            rotation: number;
            scale: number;
            opacity: number;
        }>>([]);

        const roundedClasses = {
            none: '',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            '2xl': 'rounded-2xl',
            full: 'rounded-full',
        };

        useEffect(() => {
            // Calcular cuántos items caben
            const containerWidth = typeof width === 'number' ? width : containerRef.current?.offsetWidth || 800;
            const containerHeight = typeof height === 'number' ? height : containerRef.current?.offsetHeight || 400;

            const effectiveWidth = containerWidth - (padding * 2);
            const effectiveHeight = containerHeight - (padding * 2);

            const itemsPerRow = Math.floor(effectiveWidth / (patternSize + gap));
            const rows = Math.floor(effectiveHeight / (patternSize + gap));
            const totalItems = itemsPerRow * rows;

            // Rotaciones permitidas: solo 0, 90, 180, 270
            const allowedRotations = [0, 90, 180, 270];

            // Generar items aleatorios
            const items = Array.from({ length: totalItems }, () => {
                const pattern = patterns[Math.floor(Math.random() * patterns.length)];
                const color = colors[Math.floor(Math.random() * colors.length)];
                const rotation = randomRotation
                    ? allowedRotations[Math.floor(Math.random() * allowedRotations.length)]
                    : 0;
                const scale = randomScale ? 0.7 + Math.random() * 0.6 : 1; // 0.7 - 1.3
                const opacity = randomOpacity ? 0.5 + Math.random() * 0.5 : 1; // 0.5 - 1

                return { pattern, color, rotation, scale, opacity };
            });

            setGridItems(items);
        }, [width, height, patternSize, gap, patterns, colors, randomRotation, randomScale, randomOpacity, padding]);

        return (
            <div
                ref={ref || containerRef}
                className={cn('overflow-hidden', roundedClasses[rounded], className)}
                style={{
                    width: typeof width === 'number' ? `${width}px` : width,
                    height: typeof height === 'number' ? `${height}px` : height,
                    padding: padding ? `${padding}px` : undefined,
                    backgroundColor: backgroundColor !== 'transparent' ? backgroundColor : undefined,
                    ...style,
                }}
                {...props}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(auto-fill, ${patternSize}px)`,
                        gap: `${gap}px`,
                        justifyContent: 'start',
                    }}
                >
                    {gridItems.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                width: `${patternSize}px`,
                                height: `${patternSize}px`,
                                transform: `rotate(${item.rotation}deg) scale(${item.scale})`,
                                opacity: item.opacity,
                                transition: 'transform 0.3s ease, opacity 0.3s ease',
                            }}
                        >
                            <Pattern
                                name={item.pattern}
                                color={item.color}
                                width={patternSize}
                                height={patternSize}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
);

PatternFill.displayName = 'PatternFill';

export { PatternFill };
