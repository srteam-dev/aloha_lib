import React from 'react';
import { cn } from '../lib/utils';

// Importar los SVGs de emojis como URLs
import crazyEmoji from '../resources/emojis/crazy.svg';
import explosionEmoji from '../resources/emojis/explosion.svg';
import happyEmoji from '../resources/emojis/happy.svg';
import hiEmoji from '../resources/emojis/hi.svg';
import impactEmoji from '../resources/emojis/impact.svg';
import interestingEmoji from '../resources/emojis/interesting.svg';
import meltEmoji from '../resources/emojis/melt.svg';
import mewingEmoji from '../resources/emojis/mewing.svg';

// Mapeo de nombres a URLs de emojis
const emojiMap = {
    crazy: crazyEmoji,
    explosion: explosionEmoji,
    happy: happyEmoji,
    hi: hiEmoji,
    impact: impactEmoji,
    interesting: interestingEmoji,
    melt: meltEmoji,
    mewing: mewingEmoji,
} as const;

export type EmojiName = keyof typeof emojiMap;

export type EmojiSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

const emojiSizes: Record<EmojiSize, string> = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12',
    '2xl': 'w-16 h-16',
    '3xl': 'w-20 h-20',
};

export interface EmojiProps extends React.HTMLAttributes<HTMLImageElement> {
    /** Name of the emoji */
    name: EmojiName;
    /** Size of the emoji */
    size?: EmojiSize;
    /** Alt text for accessibility */
    alt?: string;
}

const Emoji = React.forwardRef<HTMLImageElement, EmojiProps>(
    ({ className, name, size = 'md', alt, ...props }, ref) => {
        const emojiSrc = emojiMap[name];

        if (!emojiSrc) {
            console.warn(`Emoji "${name}" not found`);
            return null;
        }

        return (
            <img
                ref={ref}
                src={emojiSrc}
                alt={alt || name}
                className={cn(
                    'inline-block select-none',
                    emojiSizes[size],
                    className
                )}
                draggable={false}
                {...props}
            />
        );
    }
);

Emoji.displayName = 'Emoji';

export { Emoji, emojiMap };
