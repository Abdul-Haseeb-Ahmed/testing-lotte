"use client";
import Image from 'next/image';

const UniversalImage = ({ 
  src, 
  alt = "Image", 
  loading = "lazy",
  className = "",
  style = {},
  width,
  height,
  fill = false,
  priority = false,
  quality = 85,
  sizes,
  ...rest 
}) => {

  const defaultSizes = fill 
    ? "100vw" 
    : "(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw";

  // Common props
  const commonProps = {
    src,
    alt,
    priority,
    quality,
    className,
    loading: priority ? "eager" : "lazy",
    ...rest
  };

  if (fill) {
    return (
      <Image
        {...commonProps}
        fill
        style={{ objectFit: 'cover', ...style }}
        sizes={sizes || "100vw"}
      />
    );
  }

  if (width && height) {
    return (
      <Image
        {...commonProps}
        width={width}
        height={height}
        style={style}
        sizes={sizes || defaultSizes}
      />
    );
  }

  // Default: responsive image
  return (
    <Image
      {...commonProps}
      width={1200}
      height={800}
      style={style}
      sizes={sizes || defaultSizes}
    />
  );
};

export default UniversalImage;