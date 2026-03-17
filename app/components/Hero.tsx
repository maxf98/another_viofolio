"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
    const img = document.createElement('img');
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

const vs = letters.V;
const is = letters.I;
const os = letters.O;

export default function Hero() {
  const [selectedLetters, setSelectedLetters] = useState([0, 0, 0]);
  const selectedLettersRef = useRef<[number, number, number]>([0, 0, 0]);
  const lastChangedLetterRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const heyoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [layout, setLayout] = useState<{
    direction: "horizontal" | "vertical";
    letterSize: number;
    heyoWidth: number;
    heyoHeight: number;
    totalWidth: number;
    totalHeight: number;
  }>({
    direction: "horizontal",
    letterSize: 0,
    heyoWidth: 0,
    heyoHeight: 0,
    totalWidth: 0,
    totalHeight: 0,
  });
  const { state, setLetterLoaded } = useLoadState();

  // Track visibility
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

  // Auto-shuffle letters
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
        await preloadImage(letterArray[newIndex].image, "high");
      } catch {
        // Continue transition even if preload fails
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

  // Unified layout calculation
  useEffect(() => {
    const computeLayout = (
      containerWidth: number,
      containerHeight: number,
      heyoWidth: number,
      heyoHeight: number
    ) => {
      if (containerWidth <= 0 || containerHeight <= 0) {
        return {
          direction: "horizontal" as const,
          letterSize: 0,
          heyoWidth,
          heyoHeight,
          totalWidth: 0,
          totalHeight: 0,
        };
      }

      const gap = 20;
      const availableHeight = containerHeight - heyoHeight - gap;
      const isMobile = containerWidth < 768;
      const isCompactLandscape = containerWidth > containerHeight && containerHeight < 700;
      const maxLetterSize = isCompactLandscape ? 320 : isMobile ? 112 : 340;

      // Try horizontal letters: 3 letters side by side
      const horizontalLetterSize = Math.min(containerWidth / 3, availableHeight, maxLetterSize);

      // Try vertical letters: 3 letters stacked
      const verticalLetterSize = Math.min(containerWidth, availableHeight / 3, maxLetterSize);

      // Choose orientation that gives bigger letters
      if (verticalLetterSize > horizontalLetterSize) {
        return {
          direction: "vertical" as const,
          letterSize: verticalLetterSize,
          heyoWidth,
          heyoHeight,
          totalWidth: verticalLetterSize,
          totalHeight: heyoHeight + gap + verticalLetterSize * 3,
        };
      }

      return {
        direction: "horizontal" as const,
        letterSize: horizontalLetterSize,
        heyoWidth,
        heyoHeight,
        totalWidth: horizontalLetterSize * 3,
        totalHeight: heyoHeight + gap + horizontalLetterSize,
      };
    };

    const updateLayout = () => {
      const container = containerRef.current;
      const heyo = heyoRef.current;
      if (!container || !heyo) return;

      const containerRect = container.getBoundingClientRect();
      const heyoRect = heyo.getBoundingClientRect();

      setLayout(
        computeLayout(
          containerRect.width,
          containerRect.height,
          heyoRect.width,
          heyoRect.height
        )
      );
    };

    // Delay initial layout calculation to ensure heyo has rendered
    const timeoutId = setTimeout(updateLayout, 100);

    const observer = new ResizeObserver(updateLayout);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    if (heyoRef.current) {
      observer.observe(heyoRef.current);
    }
    window.addEventListener("resize", updateLayout);
    window.addEventListener("orientationchange", updateLayout);
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("orientationchange", updateLayout);
    };
  }, []);

  return (
    <div className="w-full h-[110lvh] relative">
      <div className="absolute inset-x-0 top-0 h-screen flex items-center justify-center p-32 max-md:portrait:p-14 md:p-40 max-lg:landscape:p-14">
        <div
          ref={containerRef}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-4">
          {/* Hey I'm image - always on top */}
          <motion.div
            ref={heyoRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex-shrink-0"
          >
            <Image
              src="/heyo.webp"
              alt="Heyo"
              width={288}
              height={112}
              className="w-32 max-md:portrait:w-40 h-auto md:w-64 md:h-24 object-contain"
              priority
            />
          </motion.div>

          {/* Letters - horizontal or vertical based on layout */}
          <div
            className={`flex ${
              layout.direction === "horizontal"
                ? "flex-row"
                : "flex-col"
            } gap-0`}
            style={{
              width: layout.direction === "horizontal"
                ? layout.letterSize * 3
                : layout.letterSize,
              height: layout.direction === "horizontal"
                ? layout.letterSize
                : layout.letterSize * 3,
            }}
          >
            <LetterStack
              letters={vs}
              selectedLetter={selectedLetters[0]}
              position={0}
              canStart={true}
              onLoad={() => setLetterLoaded(0)}
              size={layout.letterSize}
            />
            <LetterStack
              letters={is}
              selectedLetter={selectedLetters[1]}
              position={1}
              canStart={state.lettersLoaded[0]}
              onLoad={() => setLetterLoaded(1)}
              size={layout.letterSize}
            />
            <LetterStack
              letters={os}
              selectedLetter={selectedLetters[2]}
              position={2}
              canStart={state.lettersLoaded[1]}
              onLoad={() => setLetterLoaded(2)}
              size={layout.letterSize}
            />
          </div>
          </div>
        </div>
      </div>
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

const INITIAL_DELAY = 100;
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

  useEffect(() => {
    if (!canStart || hasStartedLoading.current) return;
    hasStartedLoading.current = true;

    preloadImage(letters[0].image, "high")
      .then(() => {
        setLoaded(true);
        onLoad();
      })
      .catch((error) => {
        console.error(`Failed to load letter at position ${position}:`, error);
        setLoaded(true);
        onLoad();
      });
  }, [canStart, letters, onLoad, position]);

  useEffect(() => {
    if (!loaded) return;

    const delay = INITIAL_DELAY + position * STAGGER_DELAY;
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [loaded, position]);

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

  const activeLetter = letters[selectedLetter] ?? letters[0];
  if (!activeLetter) {
    return null;
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
          key={activeLetter.index}
          src={activeLetter.image}
          alt={activeLetter.alt}
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
