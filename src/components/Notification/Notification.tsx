import React from 'react';
import { cn } from '../../lib/utils';
import { Bell, X } from 'lucide-react';
import { Avatar, type AvatarProps } from '../Avatar';
import './Notification.css';

export interface NotificationProps {
  id?: string;
  type: 'like' | 'comment' | 'follow' | 'mention' | 'info';
  title: string;
  message: string;
  timestamp: string;
  /** Full AvatarProps object configuration to support emojis, images, and fallbacks */
  avatar?: AvatarProps;
  read?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  className?: string;
}

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      type,
      title,
      message,
      timestamp,
      avatar,
      read = false,
      onClose,
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    const iconColors = {
      like: '#FF6F61',      // coral
      comment: '#0084FF',   // electrico
      follow: '#648C2C',    // bosque
      mention: '#B388D3',   // lavanda
      info: '#4A443F',      // piedra
    };

    return (
      <div
        ref={ref}
        className={cn(
          'aloha-notification',
          !read && 'aloha-notification--unread',
          onClick && 'aloha-notification--clickable',
          className
        )}
        onClick={onClick}
        {...props}
      >
        {avatar ? (
          <Avatar 
            alt={title} 
            size="sm" 
            className="aloha-notification__avatar"
            {...avatar} 
          />
        ) : (
          <div 
            className="aloha-notification__icon-container"
            style={{ color: iconColors[type] }}
          >
            <Bell className="h-4 w-4" />
          </div>
        )}
        <div className="aloha-notification__content">
          <p className="aloha-notification__title">{title}</p>
          <p className="aloha-notification__message">{message}</p>
          <p className="aloha-notification__timestamp">{timestamp}</p>
        </div>
        {onClose && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="aloha-notification__close-btn"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);

Notification.displayName = 'Notification';

export { Notification };
