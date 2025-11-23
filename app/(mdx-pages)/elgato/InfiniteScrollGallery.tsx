"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { StaticImageData } from "next/image";

interface InfiniteScrollGalleryProps {
  images: StaticImageData[];
  height?: number;
  imageWidth?: number;
  speed?: number;
  altPrefix?: string;
  direction?: "left" | "right";
}

export default function InfiniteScrollGallery({
  images,
  height = 250,
  imageWidth = 400,
  speed = 0.1,
  altPrefix = "Image",
  direction = "left",
}: InfiniteScrollGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseX = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform vertical scroll to add to the horizontal movement
  const scrollX = useTransform(scrollYProgress, [0, 1], [0, -800]);

  // Auto-scroll animation
  useAnimationFrame((time) => {
    // Move at a constant speed (adjust speed prop for speed)
    const totalWidth = images.length * imageWidth;
    const autoScrollOffset = (time * speed) % totalWidth;

    if (direction === "left") {
      baseX.set(-autoScrollOffset + scrollX.get());
    } else {
      // For right direction, start from negative position and scroll right
      baseX.set(-totalWidth + autoScrollOffset + scrollX.get());
    }
  });

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
      style={{ height: `${height}px` }}
    >
      <motion.div style={{ x: baseX }} className="flex space-x-4 p-4 h-full">
        {/* Render images 4 times for seamless infinite loop */}
        {[...images, ...images, ...images, ...images].map((image, index) => (
          <div key={index} className="flex-shrink-0 h-full">
            <Image
              src={image}
              alt={`${altPrefix} ${(index % images.length) + 1}`}
              width={imageWidth}
              height={height}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
