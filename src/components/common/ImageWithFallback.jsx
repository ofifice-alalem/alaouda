import React, { useState, memo } from 'react';

const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc = '/img/placeholder.png',
  className = '',
  loading = 'lazy',
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`image-container ${className}`}>
      {isLoading && !hasError && (
        <div className="image-skeleton" aria-hidden="true">
          <div className="skeleton-shimmer"></div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
        style={{ display: isLoading ? 'none' : 'block' }}
        {...props}
      />
    </div>
  );
};

export default memo(ImageWithFallback);