import React from 'react';
import { cn } from '../../lib/utils';
import './Tabs.css';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Array of tab items containing label, id and optional icon */
  items: TabItem[];
  /** Id of the currently active tab */
  activeId: string;
  /** Triggered when tab selection changes */
  onChange: (id: string) => void;
  /** Visual variant of the tabs layout */
  variant?: 'default' | 'outline' | 'pills';
  /** Expand tabs to fill parent container width */
  fullWidth?: boolean;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, items = [], activeId, onChange, variant = 'default', fullWidth = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'aloha-tabs',
          `aloha-tabs--${variant}`,
          fullWidth && 'aloha-tabs--full-width',
          className
        )}
        {...props}
      >
        <div className="aloha-tabs__list" role="tablist">
          {items.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(tab.id)}
                className={cn(
                  'aloha-tabs__trigger',
                  isActive && 'aloha-tabs__trigger--active'
                )}
              >
                {tab.icon && <span className="aloha-tabs__icon">{tab.icon}</span>}
                <span className="aloha-tabs__label">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';

export { Tabs };
