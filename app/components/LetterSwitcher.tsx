"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";
import { letters } from "@/app/data/graph";
import { LetterItem } from "@/app/data/model";
import { useLoadState } from "@/app/context/LoadContext";

function getImageSrc(image: StaticImageData | string): string {
  return typeof image === "string" ? image : image.src;
}

function preloadImages(images: (StaticImageData | string)[]) {
  images.forEach((image) => {
    const img = new Image();
    img.src = getImageSrc(image);
  });
}

// Get letter arrays from the dictionary
const vs = letters.V;
const is = letters.I;
const os = letters.O;

export default function LetterSwitcher() {
  const [selectedLetters, setSelectedLetters] = useState([0, 0, 0]);
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

    const interval = setInterval(() => {
      let randomPosition = lastChangedLetterRef.current;
      do {
        randomPosition = Math.floor(Math.random() * 3);
      } while (randomPosition === lastChangedLetterRef.current);
      lastChangedLetterRef.current = randomPosition;

      setSelectedLetters((prev) => {
        const newLetters = [...prev];
        const letterArray =
          randomPosition === 0 ? vs : randomPosition === 1 ? is : os;
        const currentIndex = prev[randomPosition];
        const newIndex = getNextIndex(currentIndex, letterArray);
        newLetters[randomPosition] = newIndex;
        return newLetters;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.allLettersReady, isVisible]);

  // Decide layout orientation and item size based on container space
  useEffect(() => {
    const computeLayout = (width: number, height: number) => {
      if (width <= 0 || height <= 0) {
        return { direction: "horizontal" as const, size: 0 };
      }
      // If taller than wide, stack vertically; size limited by min(width, height/3)
      if (height > width) {
        const dim = Math.min(width, height / 3);
        return { direction: "vertical" as const, size: dim };
      }
      // Horizontal: three squares side by side. Width constrains if narrower than height*3.
      const widthConstrains = width < height * 3;
      const dim = widthConstrains ? width / 3 : height;
      return { direction: "horizontal" as const, size: dim };
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
      className={`flex md:pt-16 ${
        layout.direction === "horizontal"
          ? "flex-row items-start gap-0"
          : "flex-col items-center gap-0"
      } justify-center h-full w-full max-w-4xl md:max-w-5xl mx-auto`}
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
        canStart={true}
        onLoad={() => setLetterLoaded(1)}
        size={layout.size}
      />
      <LetterStack
        letters={os}
        selectedLetter={selectedLetters[2]}
        position={2}
        canStart={true}
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

// Initial delay before letters start appearing (after "Hey I'm" appears)
const INITIAL_DELAY = 1200;
// Stagger delay between each letter appearing (in ms)
const STAGGER_DELAY = 450;

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

  // Load first image when canStart becomes true
  useEffect(() => {
    if (!canStart || hasStartedLoading.current) return;
    hasStartedLoading.current = true;

    const img = new Image();
    img.onload = () => {
      setLoaded(true);
      // Add stagger delay before showing the letter
      setTimeout(() => {
        setVisible(true);
        onLoad();
      }, INITIAL_DELAY + position * STAGGER_DELAY);
    };
    img.src = getImageSrc(letters[0].image);
  }, [canStart, letters, onLoad, position]);

  // Preload remaining images after first is loaded
  useEffect(() => {
    if (loaded) {
      preloadImages(letters.slice(1).map((letter) => letter.image));
    }
  }, [loaded, letters]);

  // Empty placeholder while loading or waiting for stagger
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
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={letters[selectedLetter].index}
          src={getImageSrc(letters[selectedLetter].image)}
          alt={letters[selectedLetter].alt}
          initial={{ rotateY: -90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 90 }}
          transition={{ duration: 0.4 }}
          style={{ transformPerspective: 1000 }}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </AnimatePresence>
    </div>
  );
}
