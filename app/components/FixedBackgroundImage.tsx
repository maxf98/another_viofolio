"use client";

import Image, { StaticImageData } from "next/image";
import type { ComponentProps, ReactNode } from "react";

interface FixedBackgroundImageProps {
  src: string | StaticImageData;
  alt?: string;
  opacity?: number;
  objectPosition?: string;
  containerClassName?: string;
  imageClassName?: string;
  height?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  quality?: number;
  priority?: boolean;
  onLoad?: ComponentProps<typeof Image>["onLoad"];
  children?: ReactNode;
}

export default function FixedBackgroundImage({
  src,
  alt = "",
  opacity = 1,
  objectPosition = "center",
  containerClassName = "-z-10 pointer-events-none",
  imageClassName = "object-cover",
  height = "110lvh",
  loading = "lazy",
  fetchPriority,
  quality,
  priority = false,
  onLoad,
  children,
}: FixedBackgroundImageProps) {
  const resolvedLoading = priority ? undefined : loading;
  const resolvedFetchPriority = priority ? undefined : fetchPriority;

  return (
    <div
      className={`fixed ${containerClassName}`}
      style={{
        left: 0,
        right: 0,
        top: 0,
        width: "100vw",
        height,
        transform: "translate3d(0, 0, 0)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={imageClassName}
        style={{ objectPosition, opacity }}
        loading={resolvedLoading}
        fetchPriority={resolvedFetchPriority}
        quality={quality}
        priority={priority}
        onLoad={onLoad}
      />
      {children}
    </div>
  );
}
