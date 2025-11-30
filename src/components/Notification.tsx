import React from 'react';
import { cn } from '../lib/utils';
import { Bell, X } from 'lucide-react';
import { Avatar } from './Avatar';

export interface NotificationProps {
  id?: string;
  type: 'like' | 'comment' | 'follow' | 'mention' | 'info';
  title: string;
  message: string;
  timestamp: string;
  avatar?: string;
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
    const typeColors = {
      like: 'text-red-500',
      comment: 'text-blue-500',
      follow: 'text-green-500',
      mention: 'text-purple-500',
      info: 'text-gray-500',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-start gap-3 rounded-lg border p-4 transition-colors',
          !read && 'bg-blue-50/50 dark:bg-blue-950/20',
          onClick && 'cursor-pointer hover:bg-accent',
          className
        )}
        onClick={onClick}
        {...props}
      >
        {avatar ? (
          <Avatar src={avatar} alt={title} size="sm" />
        ) : (
          <div className={cn('rounded-full p-2 bg-muted', typeColors[type])}>
            <Bell className="h-4 w-4" />
          </div>
        )}
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">{title}</p>
          <p className="text-sm text-muted-foreground">{message}</p>
          <p className="text-xs text-muted-foreground">{timestamp}</p>
        </div>
        {onClose && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    );
  }
);

Notification.displayName = 'Notification';

export { Notification };
