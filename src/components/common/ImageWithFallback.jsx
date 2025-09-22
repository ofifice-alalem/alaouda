import React, { useState, memo } from 'react';

const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc = '/img/placeholder.png',
  className = '',
  loading = 'lazy',
  width, // optional width in px or %
  height, // optional height in px
  aspectRatio, // optional aspect ratio as number (width/height)
  style = {},
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  // Compute wrapper styles to reserve space (reduce CLS)
  const wrapperStyle = { position: 'relative', overflow: 'hidden', width: width || '100%', ...style };
  if (height) {
    wrapperStyle.height = typeof height === 'number' ? `${height}px` : height;
  } else if (aspectRatio) {
    // Use padding-top trick to reserve aspect ratio space
    wrapperStyle.paddingTop = `${(1 / aspectRatio) * 100}%`;
    wrapperStyle.height = 0;
  }

  const imgStyle = {
    position: height || aspectRatio ? 'absolute' : 'static',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: loaded ? 1 : 0,
    transition: 'opacity 200ms ease-in',
  };

  return (
    <div className={`image-container ${className}`} style={wrapperStyle}>
      {!loaded && (
        <div className="image-skeleton" aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
          <div className="skeleton-shimmer"></div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
        style={imgStyle}
        {...props}
      />
    </div>
  );
};

export default memo(ImageWithFallback);