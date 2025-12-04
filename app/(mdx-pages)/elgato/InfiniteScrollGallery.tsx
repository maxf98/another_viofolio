"use client";

import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { StaticImageData } from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface InfiniteScrollGalleryProps {
  images: StaticImageData[];
  height?: number;
  altPrefix?: string;
  direction?: "forward" | "backward";
  speed?: number;
}

export default function InfiniteScrollGallery({
  images,
  height = 250,
  altPrefix = "Image",
  direction = "forward",
  speed = 1,
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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="w-full">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4" style={{ height: `${height}px` }}>
          {duplicatedImages.map((image, index) => (
            <div key={index} className="flex-[0_0_auto] h-full">
              <Image
                src={image}
                alt={`${altPrefix} ${(index % images.length) + 1}`}
                height={height}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows underneath */}
      {/* <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={scrollPrev}
          className="bg-black/20 hover:bg-black/40 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-full p-1 transition-colors"
        >
          <MdChevronLeft size={28} />
        </button>
        <button
          onClick={scrollNext}
          className="bg-black/20 hover:bg-black/40 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-full p-1 transition-colors"
        >
          <MdChevronRight size={28} />
        </button>
      </div> */}
    </div>
  );
}
