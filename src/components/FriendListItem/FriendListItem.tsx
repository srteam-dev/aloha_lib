import React from 'react';
import './FriendListItem.css';
import { cn } from '../../lib/utils';
import { Avatar, type AvatarAttributes } from '../Avatar';
import { colors, type ColorName } from '../../colors';

// ── Tipos ────────────────────────────────────────────────────────

export type FriendItemVariant = 'user' | 'group';



export interface FriendAvatar {
    emoji?: AvatarAttributes;
}

export interface FriendListItemProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * 'user'  → avatar + nombre de usuario
     * 'group' → stack de avatares + nombre del grupo
     */
    variant?: FriendItemVariant;

    /** Nombre del usuario o del grupo */
    name?: string;

    // ── Variante user ─────────────────────────────────────────────
    emoji?: AvatarAttributes;

    // ── Variante group ────────────────────────────────────────────
    /** Array de avatares para el stack (variant='group') */
    avatars?: FriendAvatar[];

    // ── Colores ───────────────────────────────────────────────────
    bgColor?: ColorName;
    nameColor?: ColorName;
    chevronColor?: ColorName;
    /** Color del borde/ring de cada avatar en el stack */
    avatarRingColor?: ColorName;
    // ── Opciones de UI ────────────────────────────────────────────
    showChevron?: boolean;
    isSelected?: boolean;
}

// ── Componente ────────────────────────────────────────────────────

const FriendListItem = React.forwardRef<HTMLButtonElement, FriendListItemProps>(
    (
        {
            variant = 'user',
            name,
            emoji,
            avatars = [],
            showChevron = true,
            isSelected = false,
            bgColor,
            nameColor,
            chevronColor,
            avatarRingColor,
            className,
            style,
            onClick,
            ...props
        },
        ref
    ) => {
        const resolved = {
            bg: colors[bgColor ?? 'marmol'],
            name: colors[nameColor ?? 'olivo'],
            chevron: colors[chevronColor ?? 'olivo'],
            ring: colors[avatarRingColor ?? 'hueso'],
            selectedBorder: colors['piedra'],
        };

        return (
            <button
                ref={ref}
                type="button"
                className={cn(
                    'friend-list-item', 
                    `friend-list-item--${variant}`, 
                    isSelected && 'friend-list-item--selected',
                    className
                )}
                style={{
                    '--fi-bg': resolved.bg,
                    '--fi-name': resolved.name,
                    '--fi-chevron': resolved.chevron,
                    '--fi-ring': resolved.ring,
                    '--fi-selected-border': resolved.selectedBorder,
                    ...style,
                } as React.CSSProperties}
                onClick={onClick}
                {...props}
            >
                {/* ── Contenido izquierdo ────────────────────────── */}
                <span className="friend-list-item__left">
                    {variant === 'user' ? (
                        <>
                            <Avatar
                                emoji={emoji as AvatarAttributes}
                                size={40}
                                className="friend-list-item__avatar"
                            />
                            <span className="friend-list-item__name">{name}</span>
                        </>
                    ) : (
                        <>
                            {/* Stack de avatares superpuestos */}
                            <span className="friend-list-item__avatar-stack">
                                {avatars.slice(0, 4).map((av, i) => (
                                    <Avatar
                                        key={i}
                                        emoji={av.emoji as AvatarAttributes}
                                        size={40}
                                        className="friend-list-item__stack-avatar"
                                        style={{ zIndex: avatars.length - i }}
                                    />
                                ))}
                            </span>
                            {/* Nombre personalizado del grupo */}
                            {name && (
                                <span className="friend-list-item__name">{name}</span>
                            )}
                        </>
                    )}
                </span>

                {/* ── Chevron derecho ────────────────────────────── */}
                {showChevron && (
                    <svg
                        className="friend-list-item__chevron"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                    >
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                )}
            </button>
        );
    }
);

FriendListItem.displayName = 'FriendListItem';

export { FriendListItem };
