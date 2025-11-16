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

// Web shots images
const webShotsImages = [
  "/projects/elgato/web-shots/1.png",
  "/projects/elgato/web-shots/2.png",
  "/projects/elgato/web-shots/3.png",
  "/projects/elgato/web-shots/4.png",
  "/projects/elgato/web-shots/5.png",
  "/projects/elgato/web-shots/6.png",
  "/projects/elgato/web-shots/7.png",
  "/projects/elgato/web-shots/8.png",
];

export default function CustomsWebShots() {
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
    // Move at a constant speed (adjust 0.05 for speed)
    const autoScrollOffset = (time * 0.1) % 3200; // 3200 is roughly half the total width
    baseX.set(-autoScrollOffset + scrollX.get());
  });

  return (
    <div ref={containerRef} className="w-full h-[250px] overflow-hidden my-32">
      <motion.div style={{ x: baseX }} className="flex space-x-4 p-4 h-full">
        {/* Render images 4 times for seamless infinite loop */}
        {[
          ...webShotsImages,
          ...webShotsImages,
          ...webShotsImages,
          ...webShotsImages,
        ].map((image, index) => (
          <div key={index} className="flex-shrink-0 h-full">
            <Image
              src={image}
              alt={`Web shot ${(index % webShotsImages.length) + 1}`}
              width={400}
              height={250}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
