import React from 'react';
import { cn } from '../lib/utils';
import { ColorOption } from './Typography';

// Importar los SVGs como URLs
import chatIcon from '../resources/icons/chat.svg?url';
import friendsIcon from '../resources/icons/friends.svg?url';
import homeIcon from '../resources/icons/home.svg?url';
import langIcon from '../resources/icons/lang.svg?url';
import locationIcon from '../resources/icons/location.svg?url';
import mailIcon from '../resources/icons/mail.svg?url';
import musicIcon from '../resources/icons/music.svg?url';
import notifyIcon from '../resources/icons/notify.svg?url';
import settingsIcon from '../resources/icons/settings.svg?url';

export type IconName =
    | 'chat'
    | 'friends'
    | 'home'
    | 'lang'
    | 'location'
    | 'mail'
    | 'music'
    | 'notify'
    | 'settings';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const iconMap: Record<IconName, string> = {
    chat: chatIcon,
    friends: friendsIcon,
    home: homeIcon,
    lang: langIcon,
    location: locationIcon,
    mail: mailIcon,
    music: musicIcon,
    notify: notifyIcon,
    settings: settingsIcon,
};

const sizeClasses: Record<IconSize, string> = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24',
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

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    name: IconName;
    size?: IconSize;
    color?: ColorOption;
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
    ({ name, size = 'md', color = 'default', className, ...props }, ref) => {
        const iconSrc = iconMap[name];
        const colorValue = getColorValue(color);

        return (
            <div
                ref={ref}
                className={cn('inline-flex items-center justify-center flex-shrink-0', sizeClasses[size], className)}
                {...props}
            >
                <div
                    className="w-full h-full"
                    style={{
                        mask: `url(${iconSrc}) no-repeat center`,
                        maskSize: 'contain',
                        WebkitMask: `url(${iconSrc}) no-repeat center`,
                        WebkitMaskSize: 'contain',
                        backgroundColor: colorValue,
                    }}
                />
            </div>
        );
    }
);

Icon.displayName = 'Icon';

export { Icon };
