import React from 'react';
import { cn } from '../../lib/utils';
import { X } from 'lucide-react';
import { H3, H4, FontFamily, FontWeight, ColorOption } from '../Typography';
import { ColorName, colors } from '../../colors';
import { SpacingSize } from '../Card';

// ─── helpers ────────────────────────────────────────────────────────────────

const spacingValues: Record<SpacingSize, string> = {
  none: '0',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
};

const resolveSpacing = (val: SpacingSize | string): string =>
  spacingValues[val as SpacingSize] ?? val;

// ─── types ───────────────────────────────────────────────────────────────────

export type PopupSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

/** Width cap for non-fullscreen variants */
const panelMaxWidth: Record<PopupSize, string> = {
  sm: '24rem',   // 384px
  md: '32rem',   // 512px
  lg: '48rem',   // 768px
  xl: '64rem',   // 1024px
  full: '100%',
};

export interface PopupProps {
  /** Whether the popup is open */
  open: boolean;
  /** Callback when the popup should close */
  onClose: () => void;

  // ── Visual ──────────────────────────────────────────────────────────────
  /** Width preset. 'full' → panel fills whole screen edge-to-edge */
  size?: PopupSize;
  /** Background color of the popup panel */
  backgroundColor?: ColorName;
  /** Overlay background (default: rgba(0,0,0,.45)) */
  overlayColor?: string;
  /** Panel border radius. Ignored when size='full' */
  borderRadius?: string;
  /** Additional CSS classes for the popup panel */
  className?: string;

  // ── Header ──────────────────────────────────────────────────────────────
  /** Title text shown in the header */
  title?: string;
  /** Heading element used for the title */
  titleComponent?: 'h3' | 'h4';
  titleFont?: FontFamily;
  titleWeight?: FontWeight;
  titleColor?: ColorOption;
  /** Show the divider line below the header */
  showHeaderDivider?: boolean;
  /** Show the (X) close button */
  showCloseButton?: boolean;
  /** Close when clicking the overlay */
  closeOnOverlayClick?: boolean;

  // ── Content ─────────────────────────────────────────────────────────────
  /** Inner padding of the scrollable content area */
  contentPadding?: SpacingSize | string;
  /** Children — fully custom, anything goes */
  children: React.ReactNode;

  // ── Footer ──────────────────────────────────────────────────────────────
  /** Optional footer rendered below the content (fixed, outside scroll) */
  footer?: React.ReactNode;
  /** Show the divider line above the footer */
  showFooterDivider?: boolean;
}

// ─── component ───────────────────────────────────────────────────────────────

export const Popup = React.forwardRef<HTMLDivElement, PopupProps>(
  (
    {
      open,
      onClose,

      size = 'md',
      backgroundColor = 'ice',
      overlayColor,
      borderRadius,
      className,

      title,
      titleComponent = 'h3',
      titleFont,
      titleWeight = 'bold',
      titleColor = 'corteza',
      showHeaderDivider = true,
      showCloseButton = true,
      closeOnOverlayClick = true,

      contentPadding = 'lg',
      children,

      footer,
      showFooterDivider = true,
    },
    ref
  ) => {
    // ── side effects ──────────────────────────────────────────────────────
    React.useEffect(() => {
      document.body.style.overflow = open ? 'hidden' : 'unset';
      return () => { document.body.style.overflow = 'unset'; };
    }, [open]);

    React.useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && open) onClose();
      };
      document.addEventListener('keydown', handler);
      return () => document.removeEventListener('keydown', handler);
    }, [open, onClose]);

    if (!open) return null;

    // ── derived values ────────────────────────────────────────────────────
    const isFull = size === 'full';
    const maxW = panelMaxWidth[size];
    const padding = resolveSpacing(contentPadding);
    const TitleTag = titleComponent === 'h4' ? H4 : H3;

    const handleOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget && closeOnOverlayClick) onClose();
    };

    // ── render ────────────────────────────────────────────────────────────
    return (
      /* ── Overlay ── */
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: overlayColor ?? 'rgba(0,0,0,0.45)' }}
        onClick={handleOverlay}
      >
        {/* ── Panel ── */}
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          className={cn(
            /* always fills the full height so the content can scroll inside */
            'relative flex flex-col w-full overflow-hidden shadow-2xl',
            /* full-screen: no margin, no rounding; others: centered with padding */
            isFull
              ? 'inset-0 rounded-none h-screen'
              : 'max-h-[90vh] mx-4 my-auto',
            className
          )}
          style={{
            maxWidth: isFull ? '100vw' : maxW,
            backgroundColor: colors[backgroundColor],
            borderRadius: isFull ? 0 : (borderRadius ?? '0.75rem'),
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── Header (fixed) ── */}
          {(title || showCloseButton) && (
            <div
              className={cn(
                'flex-shrink-0 flex items-center justify-between px-5 py-4',
                showHeaderDivider ? 'border-b border-black/10' : ''
              )}
            >
              {title ? (
                <TitleTag
                  font={titleFont}
                  weight={titleWeight}
                  color={titleColor}
                  className="leading-none m-0 p-0"
                >
                  {title}
                </TitleTag>
              ) : (
                <span /> /* spacer so X stays right */
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  aria-label="Cerrar"
                  className={cn(
                    'ml-auto rounded-lg p-1.5 transition-all',
                    'opacity-60 hover:opacity-100 hover:bg-black/8',
                    'focus:outline-none focus:ring-2 focus:ring-black/20'
                  )}
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          )}

          {/* ── Scrollable content ── */}
          <div
            className="flex-1 overflow-y-auto"
            style={{ padding }}
          >
            {children}
          </div>

          {/* ── Footer (fixed) ── */}
          {footer && (
            <div
              className={cn(
                'flex-shrink-0 px-5 py-4',
                showFooterDivider ? 'border-t border-black/10' : ''
              )}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Popup.displayName = 'Popup';
