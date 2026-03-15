"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { StaticImageData } from "next/image";

interface InfiniteScrollGalleryProps {
  images: StaticImageData[];
  height?: number;
  altPrefix?: string;
  direction?: "forward" | "backward";
  speed?: number;
  onImageClick?: (index: number) => void;
  cropLeftHalf?: number[]; // indices of images to crop left half
  imageClassName?: string;
  className?: string;
  viewportClassName?: string;
  trackClassName?: string;
  slideClassName?: string;
}

export default function InfiniteScrollGallery({
  images,
  height = 250,
  altPrefix = "Image",
  direction = "forward",
  speed = 1,
  onImageClick,
  cropLeftHalf = [],
  imageClassName = "",
  className = "",
  viewportClassName = "",
  trackClassName = "",
  slideClassName = "",
}: InfiniteScrollGalleryProps) {
  // Duplicate images to ensure enough for looping
  const duplicatedImages = [...images, ...images, ...images];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        speed,
        direction,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playOnInit: true,
      }),
    ]
  );

  return (
    <div className={`w-full ${className}`}>
      {/* Carousel */}
      <div className={`overflow-hidden ${viewportClassName}`} ref={emblaRef}>
        <div className={`flex gap-4 md:gap-8 ${trackClassName}`} style={{ height }}>
          {duplicatedImages.map((image, index) => {
            const originalIndex = index % images.length;
            const shouldCrop = cropLeftHalf.includes(originalIndex);
            return (
              <div
                key={index}
                className={`flex-[0_0_auto] h-full ${
                  onImageClick ? "cursor-pointer" : ""
                } ${shouldCrop ? "overflow-hidden" : ""} ${slideClassName}`}
                onClick={() => onImageClick?.(originalIndex)}
              >
                <Image
                  src={image}
                  alt={`${altPrefix} ${originalIndex + 1}`}
                  height={height}
                  className={`h-full w-auto object-contain ${
                    shouldCrop
                      ? "object-right [clip-path:inset(0_0_0_50%)]"
                      : ""
                  } ${imageClassName}`}
                  quality={75}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
