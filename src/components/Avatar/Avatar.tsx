import React from 'react';
import { cn } from '../../lib/utils';
import { getAvatarPartImage } from './avatarParts';
import './Avatar.css';

export interface AvatarAttributes {
  skinId?: number;
  eyebrowId?: number;
  eyesId?: number;
  facialHairId?: number;
  hairId?: number;
  mouthId?: number;
}

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  emoji: AvatarAttributes;
  size?: number;
}

const DEFAULT_AVATAR: AvatarAttributes = {
  skinId: 1,
  eyebrowId: 1,
  eyesId: 1,
  facialHairId: 1,
  hairId: 1,
  mouthId: 1,
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ 
    className, 
    emoji,
    size = 100,
    style,
    ...props 
  }, ref) => {
    const currentEmoji = emoji || DEFAULT_AVATAR;

    const currentSkin = getAvatarPartImage(currentEmoji.skinId, 'skin');
    const currentEyes = getAvatarPartImage(currentEmoji.eyesId, 'eyes');
    const currentMouth = getAvatarPartImage(currentEmoji.mouthId, 'mouth');
    const currentEyebrow = getAvatarPartImage(currentEmoji.eyebrowId, 'eyebrow');
    const currentHair = getAvatarPartImage(currentEmoji.hairId, 'hair');
    const currentFacialHair = getAvatarPartImage(currentEmoji.facialHairId, 'facialHair');

    return (
      <div
        ref={ref}
        className={cn('avatar-container', className)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          ...style
        }}
        {...props}
      >
        {/* Base/Skin */}
        {currentSkin && (
          <img
            src={currentSkin}
            alt="Base"
            className="avatar-layer"
          />
        )}

        {/* Eyes */}
        {currentEyes && (
          <img
            src={currentEyes}
            alt="Eyes"
            className="avatar-layer"
          />
        )}

        {/* Eyebrows */}
        {currentEyebrow && (
          <img
            src={currentEyebrow}
            alt="Eyebrows"
            className="avatar-layer"
          />
        )}

        {/* Mouth */}
        {currentMouth && (
          <img
            src={currentMouth}
            alt="Mouth"
            className="avatar-layer"
          />
        )}

        {/* Hair */}
        {currentHair && (
          <img
            src={currentHair}
            alt="Hair"
            className="avatar-layer"
          />
        )}

        {/* Facial Hair */}
        {currentFacialHair && (
          <img
            src={currentFacialHair}
            alt="Facial Hair"
            className="avatar-layer"
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };
