import React from 'react';
import { cn } from '../lib/utils';
import { Avatar } from './Avatar';
import { colors, type ColorName } from '../colors';

export type ChatMessageVariant = 'sent' | 'received';

export interface ChatMessageProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Texto del mensaje */
    message: string;
    /** Nombre del usuario */
    name: string;
    /** Hora del mensaje, ej: "16:34" */
    time: string;
    /** URL del avatar del usuario (se muestra dentro de la burbuja) */
    avatarSrc?: string;
    /** Fallback del avatar si no hay imagen (iniciales) */
    avatarFallback?: string;
    /**
     * 'received' = izquierda, verde lima  |  'sent' = derecha, verde bosque
     * @default 'received'
     */
    variant?: ChatMessageVariant;
    /** Color de fondo de la burbuja (nombre del color Aloha) */
    bgColor?: ColorName;
    /** Color del texto del mensaje */
    messageColor?: ColorName;
    /** Color del texto del header (nombre + hora) */
    headerColor?: ColorName;
}

const ChatMessage = React.forwardRef<HTMLDivElement, ChatMessageProps>(
    (
        {
            message,
            name,
            time,
            avatarSrc,
            avatarFallback,
            variant = 'received',
            bgColor,
            messageColor,
            headerColor,
            className,
            style,
            ...props
        },
        ref
    ) => {
        const isSent = variant === 'sent';

        // Colores por defecto según variante, sobreescribibles via props
        const defaultBg: ColorName = isSent ? 'bosque' : 'lima';
        const defaultMsg: ColorName = isSent ? 'hueso' : 'olivo';
        const defaultHdr: ColorName = isSent ? 'lima' : 'olivo';

        const resolvedBg = colors[bgColor ?? defaultBg];
        const resolvedMsg = colors[messageColor ?? defaultMsg];
        const resolvedHdr = colors[headerColor ?? defaultHdr];

        return (
            <div
                ref={ref}
                className={cn(
                    'chat-message',
                    isSent ? 'chat-message--sent' : 'chat-message--received',
                    className
                )}
                style={{
                    '--chat-bg': resolvedBg,
                    '--chat-msg': resolvedMsg,
                    '--chat-hdr': resolvedHdr,
                    ...style,
                } as React.CSSProperties}
                {...props}
            >
                {/* Header: avatar + nombre + separador + hora */}
                <div className="chat-message__header">
                    <Avatar
                        src={avatarSrc}
                        alt={name}
                        fallback={avatarFallback || name.charAt(0).toUpperCase()}
                        size="sm"
                        className="chat-message__avatar"
                    />
                    <span className="chat-message__name">{name}</span>
                    <span className="chat-message__separator">-</span>
                    <span className="chat-message__time">{time}</span>
                </div>

                {/* Cuerpo del mensaje */}
                <p className="chat-message__body">{message}</p>
            </div>
        );
    }
);

ChatMessage.displayName = 'ChatMessage';

export { ChatMessage };
