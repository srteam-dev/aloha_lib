import React, { useEffect } from 'react';
import { cn } from '../../lib/utils';
import { X } from 'lucide-react';
import { H3 } from '../Typography';
import './Modal.css';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** If true, the modal is displayed */
  isOpen: boolean;
  /** Callback triggered when the modal is requested to close */
  onClose: () => void;
  /** Title shown in the header */
  title?: string;
  /** Width size preset of the modal dialog */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Optional slot for footer actions */
  footer?: React.ReactNode;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ className, isOpen, onClose, title, size = 'md', children, footer, ...props }, ref) => {
    // Lock body scrolling when modal is open
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <div className="aloha-modal-overlay" onClick={onClose}>
        <div
          ref={ref}
          className={cn(
            'aloha-modal-dialog',
            `aloha-modal-dialog--${size}`,
            className
          )}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          {...props}
        >
          {/* Header */}
          <div className="aloha-modal-header">
            {title ? (
              <H3 className="m-0 [&:not(:first-child)]:mt-0 aloha-modal-title">{title}</H3>
            ) : (
              <div />
            )}
            <button
              type="button"
              className="aloha-modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="aloha-modal-body">{children}</div>

          {/* Footer */}
          {footer && <div className="aloha-modal-footer">{footer}</div>}
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';

export { Modal };
