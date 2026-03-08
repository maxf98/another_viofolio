"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { letters } from "@/app/data/graph";
import { LetterItem } from "@/app/data/model";
import { useLoadState } from "@/app/context/LoadContext";

// Image cache to track loaded images
const imageCache = new Map<string, boolean>();

function preloadImage(
  src: string,
  fetchPriority: "high" | "low" | "auto" = "auto"
): Promise<void> {
  if (imageCache.has(src)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    if ("fetchPriority" in img) {
      img.fetchPriority = fetchPriority;
    }
    img.decoding = "async";
    img.onload = () => {
      imageCache.set(src, true);
      resolve();
    };
    img.onerror = reject;
    img.src = src;
  });
}

// Get letter arrays from the dictionary
const vs = letters.V;
const is = letters.I;
const os = letters.O;

export default function LetterSwitcher() {
  const [selectedLetters, setSelectedLetters] = useState([0, 0, 0]);
  const selectedLettersRef = useRef<[number, number, number]>([0, 0, 0]);
  const lastChangedLetterRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [layout, setLayout] = useState<{
    direction: "horizontal" | "vertical";
    size: number;
  }>({
    direction: "horizontal",
    size: 0,
  });
  const { state, setLetterLoaded } = useLoadState();

  // Track visibility with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-shuffle a random letter every second (only when visible and ready)
  useEffect(() => {
    if (!state.allLettersReady || !isVisible) return;

    const getNextIndex = (currentIndex: number, letterArray: LetterItem[]) =>
      (currentIndex + 1) % letterArray.length;

    let cancelled = false;

    const tick = async () => {
      let randomPosition = lastChangedLetterRef.current;
      do {
        randomPosition = Math.floor(Math.random() * 3);
      } while (randomPosition === lastChangedLetterRef.current);
      lastChangedLetterRef.current = randomPosition;

      const prev = selectedLettersRef.current;
      const newLetters = [...prev] as [number, number, number];
      const letterArray =
        randomPosition === 0 ? vs : randomPosition === 1 ? is : os;
      const currentIndex = prev[randomPosition];
      const newIndex = getNextIndex(currentIndex, letterArray);
      newLetters[randomPosition] = newIndex;

      try {
        // Fetch the upcoming letter with high priority before switching.
        await preloadImage(letterArray[newIndex].image, "high");
      } catch {
        // Continue transition even if preload fails.
      }

      if (cancelled) return;
      selectedLettersRef.current = newLetters;
      setSelectedLetters(newLetters);

      window.setTimeout(tick, 1000);
    };

    const timer = window.setTimeout(tick, 1000);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [state.allLettersReady, isVisible]);

  useEffect(() => {
    selectedLettersRef.current = selectedLetters as [number, number, number];
  }, [selectedLetters]);

  // Decide layout orientation and item size based on container space
  useEffect(() => {
    const computeLayout = (width: number, height: number) => {
      if (width <= 0 || height <= 0) {
        return { direction: "horizontal" as const, size: 0 };
      }

      // Calculate how big letters can be in each orientation
      const horizontalSize = Math.min(width / 3, height);  // 3 letters side by side
      const verticalSize = Math.min(width, height / 3);    // 3 letters stacked

      // Choose the orientation that gives us bigger letters
      if (verticalSize > horizontalSize) {
        return { direction: "vertical" as const, size: verticalSize };
      }
      return { direction: "horizontal" as const, size: horizontalSize };
    };

    const updateLayout = () => {
      const el = containerRef.current;
      if (!el) return;
      const { width, height } = el.getBoundingClientRect();
      setLayout(computeLayout(width, height));
    };

    updateLayout();
    const observer = new ResizeObserver(updateLayout);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    window.addEventListener("resize", updateLayout);
    window.addEventListener("orientationchange", updateLayout);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("orientationchange", updateLayout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex ${
        layout.direction === "horizontal"
          ? "flex-row items-center gap-0"
          : "flex-col items-center gap-0"
      } justify-center h-full w-full`}
    >
      <LetterStack
        letters={vs}
        selectedLetter={selectedLetters[0]}
        position={0}
        canStart={true}
        onLoad={() => setLetterLoaded(0)}
        size={layout.size}
      />
      <LetterStack
        letters={is}
        selectedLetter={selectedLetters[1]}
        position={1}
        canStart={state.lettersLoaded[0]}
        onLoad={() => setLetterLoaded(1)}
        size={layout.size}
      />
      <LetterStack
        letters={os}
        selectedLetter={selectedLetters[2]}
        position={2}
        canStart={state.lettersLoaded[1]}
        onLoad={() => setLetterLoaded(2)}
        size={layout.size}
      />
    </div>
  );
}

interface LetterStackProps {
  letters: LetterItem[];
  selectedLetter: number;
  position: 0 | 1 | 2;
  canStart: boolean;
  onLoad: () => void;
  size: number;
}

// Delay before first letter appears after "Hey I'm"
const INITIAL_DELAY = 100;
// Stagger delay between each letter appearing
const STAGGER_DELAY = 150;

function LetterStack({
  letters,
  selectedLetter,
  position,
  canStart,
  onLoad,
  size,
}: LetterStackProps) {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const hasStartedLoading = useRef(false);

  // Load first image sequentially: wait for previous letter to load
  useEffect(() => {
    if (!canStart || hasStartedLoading.current) return;
    hasStartedLoading.current = true;

    // Load the first image
    preloadImage(letters[0].image, "high").then(() => {
      setLoaded(true);
      onLoad();
    }).catch((error) => {
      console.error(`Failed to load letter at position ${position}:`, error);
      // Show anyway on error to avoid blocking the UI
      setLoaded(true);
      onLoad();
    });
  }, [canStart, letters, onLoad, position]);

  // Show letter after stagger delay once it's loaded
  useEffect(() => {
    if (!loaded) return;

    const delay = INITIAL_DELAY + position * STAGGER_DELAY;
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [loaded, position]);

  // Empty placeholder while loading
  if (!visible) {
    return (
      <div
        className="relative"
        style={{
          width: size || undefined,
          height: size || undefined,
          flex: "0 0 auto",
        }}
      />
    );
  }

  return (
    <div
      className="relative"
      style={{
        width: size || undefined,
        height: size || undefined,
        flex: "0 0 auto",
        perspective: 1000,
        transformStyle: "preserve-3d",
        isolation: "isolate",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={letters[selectedLetter].index}
          src={letters[selectedLetter].image}
          alt={letters[selectedLetter].alt}
          fetchPriority="high"
          initial={{ rotateY: -90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 90 }}
          transition={{ duration: 0.4 }}
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            WebkitTransform: "translate3d(0, 0, 0)",
          }}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </AnimatePresence>
    </div>
  );
}
