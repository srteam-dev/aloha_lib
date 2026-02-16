import React from 'react';
import { cn } from '../lib/utils';
import { Pattern, type PatternName } from './Pattern';
import { type ColorName } from '../colors';

export interface PatternGroupItem {
    /** Pattern name */
    pattern: PatternName;
    /** Color for this pattern */
    color?: ColorName;
    /** Rotation angle in degrees */
    rotation?: number;
    /** Scale factor (1 = normal size) */
    scale?: number;
    /** Opacity (0-1) */
    opacity?: number;
}

export interface PatternGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Array of patterns to display */
    patterns: PatternGroupItem[];
    /** Background color for the entire group */
    backgroundColor?: ColorName | 'transparent';
    /** Gap between patterns (in pixels) */
    gap?: number;
    /** Layout direction */
    direction?: 'row' | 'column' | 'grid';
    /** Number of columns (only for grid layout) */
    columns?: number;
    /** Size for all patterns */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    /** Padding around the group */
    padding?: number;
    /** Border radius */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const PatternGroup = React.forwardRef<HTMLDivElement, PatternGroupProps>(
    (
        {
            className,
            patterns = [],
            backgroundColor = 'transparent',
            gap = 4,
            direction = 'row',
            columns = 3,
            size = 'md',
            padding = 0,
            rounded = 'none',
            style,
            ...props
        },
        ref
    ) => {
        const roundedClasses = {
            none: '',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            full: 'rounded-full',
        };

        const directionClasses = {
            row: 'flex flex-row',
            column: 'flex flex-col',
            grid: 'grid',
        };

        return (
            <div
                ref={ref}
                className={cn(
                    directionClasses[direction],
                    roundedClasses[rounded],
                    className
                )}
                style={{
                    gap: `${gap}px`,
                    padding: padding ? `${padding}px` : undefined,
                    gridTemplateColumns: direction === 'grid' ? `repeat(${columns}, 1fr)` : undefined,
                    ...style,
                }}
                {...props}
            >
                {patterns.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            transform: `rotate(${item.rotation || 0}deg) scale(${item.scale || 1})`,
                            opacity: item.opacity !== undefined ? item.opacity : 1,
                            transition: 'transform 0.3s ease, opacity 0.3s ease',
                        }}
                    >
                        <Pattern
                            name={item.pattern}
                            size={size}
                            color={item.color}
                            backgroundColor={backgroundColor}
                        />
                    </div>
                ))}
            </div>
        );
    }
);

PatternGroup.displayName = 'PatternGroup';

export { PatternGroup };
