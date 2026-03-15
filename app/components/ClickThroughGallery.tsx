"use client";

import Image, { StaticImageData } from "next/image";

interface ClickThroughGalleryProps {
  images: (string | StaticImageData)[];
  altPrefix: string;
  onImageClick?: (index: number) => void;
  height?: number;
  imageClassName?: string;
}

export default function ClickThroughGallery({
  images,
  altPrefix,
  onImageClick,
  height = 220,
  imageClassName = "",
}: ClickThroughGalleryProps) {
  if (!images.length) return null;
  const tileHeight = Math.max(180, Math.round(height * 0.72));

  return (
    <div className="relative w-full">
      <div className="mb-2 text-[11px] uppercase tracking-[0.12em] text-white/58">
        Scroll sideways
      </div>
      <div className="overflow-x-auto overflow-y-hidden pb-2">
        <div className="flex items-stretch gap-3 md:gap-4 min-w-max pr-4 mx-auto w-fit">
          {images.map((image, index) => {
            const isStatic = typeof image !== "string";
            const ratio = isStatic ? image.width / image.height : 4 / 3;
            const tileWidth = Math.round(tileHeight * ratio);

            return (
              <button
                key={index}
                type="button"
                onClick={() => onImageClick?.(index)}
                className={`group relative overflow-hidden rounded-[12px] border border-white/15 bg-[#0f1218] shadow-[0_12px_26px_rgba(0,0,0,0.28)] ${
                  onImageClick ? "cursor-pointer" : "cursor-default"
                }`}
                style={{
                  width: `${Math.max(180, Math.min(tileWidth, 520))}px`,
                  height: `${tileHeight}px`,
                }}
              >
                <Image
                  src={image}
                  alt={`${altPrefix} ${index + 1}`}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${imageClassName}`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
