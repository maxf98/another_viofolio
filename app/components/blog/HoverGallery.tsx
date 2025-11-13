"use client";

import Image from "next/image";

export interface HoverGalleryItem {
  src: string;
  alt?: string;
}

interface HoverGalleryProps {
  items: HoverGalleryItem[];
  className?: string;
}

export default function HoverGallery({
  items,
  className = "",
}: HoverGalleryProps) {
  if (!items?.length) return null;

  return (
    <figure className={`hover-gallery ${className}`}>
      {items.map((item) => (
        <Image
          key={item.src}
          src={item.src}
          alt={item.alt ?? "Hover gallery item"}
          width={1920}
          height={1080}
        />
      ))}
    </figure>
  );
}
