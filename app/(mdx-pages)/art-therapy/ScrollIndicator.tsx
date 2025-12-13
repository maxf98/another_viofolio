"use client";

import { useState, useEffect } from "react";

interface ScrollIndicatorProps {
  count: number;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollIndicator({
  count,
  scrollContainerRef,
}: ScrollIndicatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.scrollWidth / count;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(newIndex, count - 1));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [count, scrollContainerRef]);

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const itemWidth = container.scrollWidth / count;
    container.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const scrollNext = () => {
    if (activeIndex < count - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      {/* Left Arrow */}
      <button
        onClick={scrollPrev}
        disabled={activeIndex === 0}
        className={`p-2 transition-opacity ${
          activeIndex === 0 ? "opacity-20 cursor-not-allowed" : "opacity-70 hover:opacity-100"
        }`}
        aria-label="Previous section"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-white w-6"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollNext}
        disabled={activeIndex === count - 1}
        className={`p-2 transition-opacity ${
          activeIndex === count - 1 ? "opacity-20 cursor-not-allowed" : "opacity-70 hover:opacity-100"
        }`}
        aria-label="Next section"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
