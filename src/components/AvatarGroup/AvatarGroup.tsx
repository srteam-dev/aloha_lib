import React from 'react';
import { cn } from '../../lib/utils';
import { Avatar, type AvatarProps } from '../Avatar';
import { colors, type ColorName } from '../../colors';
import { type FriendAvatar } from '../FriendListItem';
import './AvatarGroup.css';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of avatars to display in the stack */
  avatars: FriendAvatar[];
  /** Maximum number of avatars to render before showing a "+N" count */
  max?: number;
  /** Size of each avatar (number or string variant) */
  size?: AvatarProps['size'];
  /** Color of the overlap ring border */
  ringColor?: ColorName | string;
}

const sizeMap: Record<string, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 80,
  xl: 120,
  '2xl': 160,
};

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, avatars = [], max = 4, size = 'sm', ringColor, style, ...props }, ref) => {
    const visibleAvatars = avatars.slice(0, max);
    const extraCount = avatars.length - max;

    const resolvedSize = typeof size === 'number' ? size : (sizeMap[size] || 32);

    // Get color value from name or pass directly
    const ringColorValue = ringColor 
      ? (colors[ringColor as ColorName] || ringColor) 
      : '#fff';

    return (
      <div
        ref={ref}
        className={cn('avatar-group-stack', className)}
        style={{
          '--ag-ring-color': ringColorValue,
          ...style,
        } as React.CSSProperties}
        {...props}
      >
        {/* Render extra count first because of flex row-reverse stacking order */}
        {extraCount > 0 && (
          <div
            className="avatar-group-extra"
            style={{
              width: `${resolvedSize}px`,
              height: `${resolvedSize}px`,
              fontSize: `${resolvedSize * 0.35}px`,
              zIndex: 0,
            }}
          >
            +{extraCount}
          </div>
        )}

        {/* Render visible avatars in reverse order so the first one appears on top */}
        {[...visibleAvatars].reverse().map((av, index) => {
          const zIndex = index + 1;
          return (
            <Avatar
              key={index}
              emoji={av.emoji}
              src={av.src}
              fallback={av.fallback}
              size={size}
              className="avatar-group-item"
              style={{ zIndex }}
            />
          );
        })}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

export { AvatarGroup };
