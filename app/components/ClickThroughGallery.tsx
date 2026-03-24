"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import InteractionHint from "@/app/components/InteractionHint";

interface ClickThroughGalleryProps {
  images: (string | StaticImageData)[];
  altPrefix: string;
  onImageClick?: (index: number) => void;
  height?: number;
  imageClassName?: string;
  showScrollHint?: boolean;
}

export default function ClickThroughGallery({
  images,
  altPrefix,
  onImageClick,
  height = 220,
  imageClassName = "",
  showScrollHint = false,
}: ClickThroughGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => setIsScrollable(el.scrollWidth > el.clientWidth);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [images]);

  if (!images.length) return null;
  const tileHeight = Math.max(180, Math.round(height * 0.72));

  return (
    <div className="relative w-full">
      {showScrollHint && isScrollable && (
        <div className="flex justify-end mb-2 pr-1">
          <InteractionHint text="scroll" direction="right" delay={0.5} />
        </div>
      )}
      <div ref={scrollRef} className="overflow-x-auto overflow-y-hidden pb-2">
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
                  sizes="(max-width: 768px) 80vw, 520px"
                  className={`transition-transform duration-500 group-hover:scale-[1.03] ${imageClassName}`}
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
