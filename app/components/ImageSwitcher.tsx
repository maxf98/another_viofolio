"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { ImageItem } from "../data/model";

interface ImageSwitcherProps {
  items: ImageItem[];
  duration?: number; // Duration in milliseconds (default: 3000ms = 3s)
  transitionDuration?: number; // Transition duration in milliseconds (default: 500ms)
  className?: string;
}

export default function ImageSwitcher({
  items,
  duration = 3000,
  transitionDuration = 500,
  className = "",
}: ImageSwitcherProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (items.length <= 1) return; // No need to switch if only one item

    const interval = setInterval(() => {
      setIsTransitioning(true);

      // After fade out, change the image
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setIsTransitioning(false);
      }, transitionDuration);
    }, duration);

    return () => clearInterval(interval);
  }, [items.length, duration, transitionDuration]);

  if (items.length === 0) {
    return <div className={className}>No images to display</div>;
  }

  const currentItem = items[currentIndex];

  return (
    <div className={`relative ${className}`}>
      <Image
        src={currentItem.image}
        alt={currentItem.alt || `Image ${currentItem.index}`}
        fill
        className={`object-cover transition-opacity duration-${transitionDuration} ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        priority={currentIndex === 0}
      />
    </div>
  );
}
