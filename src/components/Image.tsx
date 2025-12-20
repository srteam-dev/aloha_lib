import React from 'react';
import { cn } from '../lib/utils';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Image source URL */
  src: string;
  /** Alternative text for accessibility */
  alt: string;
  /** Width of the image */
  width?: number | string;
  /** Height of the image */
  height?: number | string;
  /** Object fit style */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** Image loading strategy */
  loading?: 'lazy' | 'eager';
  /** Fallback image URL if main image fails to load */
  fallbackSrc?: string;
  /** Callback when image fails to load */
  onError?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      objectFit = 'cover',
      loading = 'lazy',
      fallbackSrc,
      onError,
      className,
      ...props
    },
    ref
  ) => {
    const [imgSrc, setImgSrc] = React.useState(src);
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);

    React.useEffect(() => {
      setImgSrc(src);
      setIsLoading(true);
      setHasError(false);
    }, [src]);

    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
      if (fallbackSrc && imgSrc !== fallbackSrc) {
        setImgSrc(fallbackSrc);
      }
      onError?.();
    };

    const handleLoad = () => {
      setIsLoading(false);
    };

    const objectFitClasses = {
      contain: 'object-contain',
      cover: 'object-cover',
      fill: 'object-fill',
      none: 'object-none',
      'scale-down': 'object-scale-down',
    };

    return (
      <div className={cn('relative overflow-hidden', className)}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        )}
        <img
          ref={ref}
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onError={handleError}
          onLoad={handleLoad}
          className={cn(
            'transition-opacity duration-300',
            objectFitClasses[objectFit],
            isLoading ? 'opacity-0' : 'opacity-100',
            hasError && !fallbackSrc && 'hidden'
          )}
          {...props}
        />
        {hasError && !fallbackSrc && (
          <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
            <span className="text-sm">Failed to load image</span>
          </div>
        )}
      </div>
    );
  }
);

Image.displayName = 'Image';
