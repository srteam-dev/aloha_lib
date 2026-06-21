import React from 'react';
import { cn } from '../../lib/utils';
import { getAvatarPartImage, type SkinId, type EyesId, type EyebrowId, type FacialHairId, type HairId, type MouthId } from './avatarParts';
import './Avatar.css';

export interface AvatarAttributes {
  skinId?: SkinId;
  eyebrowId?: EyebrowId;
  eyesId?: EyesId;
  facialHairId?: FacialHairId;
  hairId?: HairId;
  mouthId?: MouthId;
}

/**
 * Flexible avatar structure - acepta cualquier objeto parecido a AvatarAttributes
 * Útil para pasar estructuras similares desde otras fuentes sin validación estricta
 * @example
 * // Válido - estructura exacta
 * { skinId: 1, eyesId: 2, hairId: 3 }
 * // También válido - estructura parcial o similar
 * { skin: 1, eyes: 2 } (fields similares serán ignorados)
 */
export type AvatarAttributesInput = Partial<AvatarAttributes> & Record<string, any>;

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Avatar attributes - puede ser cualquier objeto con estructura similar */
  emoji?: AvatarAttributesInput;
  size?: number;
  src?: string;
  alt?: string;
  fallback?: string;
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
    src,
    alt = 'Avatar',
    fallback,
    ...props 
  }, ref) => {
    // Si tiene src, mostrar como imagen directa
    if (src) {
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
          <img
            src={src}
            alt={alt}
            className="avatar-image"
          />
        </div>
      );
    }

    // Si tiene fallback sin emoji, mostrar como texto
    if (fallback && !emoji) {
      return (
        <div
          ref={ref}
          className={cn('avatar-container avatar-fallback', className)}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            ...style
          }}
          {...props}
        >
          {fallback}
        </div>
      );
    }

    // Si no, usar emoji composable
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
