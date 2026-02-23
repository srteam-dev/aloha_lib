import React from 'react';
import { cn } from '../lib/utils';
import { Icon, type IconSize } from './Icon';
import { type ColorOption } from './Typography';

export type StreakSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const textSizeClasses: Record<StreakSize, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
};

// Map StreakSize to IconSize (they share the same values)
const iconSizeMap: Record<StreakSize, IconSize> = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
};

export interface StreakProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Número de días de racha */
    count: number;
    /** Tamaño del componente */
    size?: StreakSize;
    /** Color del icono y del número */
    color?: ColorOption;
}

const Streak = React.forwardRef<HTMLDivElement, StreakProps>(
    ({ count, size = 'md', color = 'girasol', className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn('inline-flex items-center gap-1', className)}
                {...props}
            >
                <Icon name="streak" size={iconSizeMap[size]} color={color} />
                <span
                    className={cn(
                        'font-bold leading-none tabular-nums',
                        textSizeClasses[size]
                    )}
                >
                    {count}
                </span>
            </div>
        );
    }
);

Streak.displayName = 'Streak';

export { Streak };
