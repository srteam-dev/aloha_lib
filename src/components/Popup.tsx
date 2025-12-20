import React from 'react';
import { cn } from '../lib/utils';
import { X } from 'lucide-react';

export interface PopupProps {
  /** Whether the popup is open */
  open: boolean;
  /** Callback when the popup should close */
  onClose: () => void;
  /** Popup title */
  title?: string;
  /** Popup content */
  children: React.ReactNode;
  /** Size of the popup */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Whether to show close button */
  showCloseButton?: boolean;
  /** Whether clicking overlay closes the popup */
  closeOnOverlayClick?: boolean;
  /** Additional CSS classes for the content */
  className?: string;
  /** Footer content */
  footer?: React.ReactNode;
}

export const Popup = React.forwardRef<HTMLDivElement, PopupProps>(
  (
    {
      open,
      onClose,
      title,
      children,
      size = 'md',
      showCloseButton = true,
      closeOnOverlayClick = true,
      className,
      footer,
    },
    ref
  ) => {
    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [open]);

    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && open) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [open, onClose]);

    if (!open) return null;

    const sizeClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      full: 'max-w-full mx-4',
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget && closeOnOverlayClick) {
        onClose();
      }
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={handleOverlayClick}
      >
        <div
          ref={ref}
          className={cn(
            'relative w-full animate-in fade-in-0 zoom-in-95 rounded-lg bg-background shadow-lg',
            sizeClasses[size],
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between border-b p-4">
              {title && <h2 className="text-lg font-semibold">{title}</h2>}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="border-t p-4">
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Popup.displayName = 'Popup';
