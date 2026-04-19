"use client";

import { useMemo } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

export type MediaItem =
  | { type: "image"; src: StaticImageData }
  | { type: "video"; src: string; width: number; height: number }
  | { type: "label"; text: string };

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export function ScatteredImages({
  items,
  title,
  description,
  seed = 17,
  variant = "analogue",
  onImageClick,
}: {
  items: MediaItem[];
  title: string;
  description?: string;
  seed?: number;
  variant?: "analogue" | "digital" | "animation";
  onImageClick: (index: number) => void;
}) {
  const props = useMemo(() =>
    items.map((item, i) => {
      const r = (n: number) => seededRandom(i * seed + n);
      if (item.type === "label") {
        return { rotate: (r(2) - 0.5) * 12, translateX: 0, translateY: 0, aspectRatio: 0, zIndex: 20 };
      }
      const aspectRatio = item.type === "image"
        ? item.src.height / item.src.width
        : item.height / item.width;
      return {
        rotate: (r(2) - 0.5) * 12,
        translateX: (r(3) - 0.5) * 20,
        translateY: (r(4) - 0.5) * 14,
        aspectRatio,
        zIndex: Math.floor(r(5) * 10),
      };
    }), [items, seed]);

  const label = items[0]?.type === "label" ? { item: items[0], p: props[0] } : null;

  const itemClass =
    variant === "digital"
      ? "si-digital"
      : variant === "animation"
      ? "si-animation"
      : "si-analogue";

  const galleryClass =
    variant === "digital"
      ? "flex flex-wrap justify-center items-start gap-6 md:gap-8"
      : "flex flex-wrap justify-center items-start gap-4";

  return (
    <div
      className="relative w-full py-12"
      style={{ paddingLeft: "clamp(5px, 7vw, 100px)", paddingRight: "clamp(5px, 7vw, 100px)" }}
    >
      {label && (
        <div className="mb-6 flex flex-col items-center text-center">
          <div
            className="text-white font-semibold text-base md:text-2xl tracking-wide inline-block"
            style={{ transform: `rotate(${label.p.rotate.toFixed(2)}deg)` }}
          >
            {label.item.text}
          </div>
          {description && (
            <p className="mt-2 max-w-2xl text-sm md:text-base opacity-70">{description}</p>
          )}
        </div>
      )}
      <div className={galleryClass}>
        {items.map((item, i) => {
          if (item.type === "label") return null;
          return (
            <div
              key={i}
              className={`${itemClass} min-w-0`}
              style={{ position: "relative", zIndex: props[i].zIndex }}
            >
              <div
                className="cursor-pointer transition-all duration-300 hover:scale-105 hover:!z-50 w-full"
                style={{ transform: `rotate(${props[i].rotate.toFixed(2)}deg) translate(${props[i].translateX.toFixed(2)}px, ${props[i].translateY.toFixed(2)}px)` }}
                onClick={() => onImageClick(i)}
              >
                <div className={item.type === "video" ? "flex justify-center items-center w-full" : "shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10"}>
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      muted loop playsInline autoPlay
                      className="block w-full h-auto object-cover"
                      style={{ aspectRatio: `${item.width}/${item.height}`, maxWidth: "100%" }}
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={`${title} ${i + 1}`}
                      width={800}
                      height={Math.round(800 * props[i].aspectRatio)}
                      sizes={
                        variant === "digital"
                          ? "(max-width: 767px) and (orientation: portrait) 38vw, (max-width: 767px) and (orientation: landscape) 27vw, 19vw"
                          : variant === "analogue"
                          ? "(max-width: 767px) and (orientation: portrait) 46vw, (max-width: 767px) and (orientation: landscape) 31vw, 31vw"
                          : "(max-width: 767px) and (orientation: portrait) 50vw, (max-width: 767px) and (orientation: landscape) 33vw, 33vw"
                      }
                      className="block w-full h-auto"
                      placeholder="blur"
                      quality={80}
                      style={{ width: "100%", height: "auto" }}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
