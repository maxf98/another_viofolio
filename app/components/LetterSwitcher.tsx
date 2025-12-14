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
  const { state, setLetterLoaded } = useLoadState();

  // Strategy functions for selecting the next index
  const getNextIndexIncrement = (
    currentIndex: number,
    letterArray: LetterItem[]
  ): number => {
    return (currentIndex + 1) % letterArray.length;
  };

  const getNextIndex = getNextIndexIncrement;

  // Auto-shuffle a random letter every second (only after all letters are loaded)
  useEffect(() => {
    if (!state.allLettersReady) return;

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
  }, [state.allLettersReady]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full w-full max-w-4xl md:max-w-5xl mx-auto gap-4 md:gap-0">
      <LetterStack
        letters={vs}
        selectedLetter={selectedLetters[0]}
        position={0}
        canStart={true}
        onLoad={() => setLetterLoaded(0)}
      />
      <LetterStack
        letters={is}
        selectedLetter={selectedLetters[1]}
        position={1}
        canStart={true}
        onLoad={() => setLetterLoaded(1)}
      />
      <LetterStack
        letters={os}
        selectedLetter={selectedLetters[2]}
        position={2}
        canStart={true}
        onLoad={() => setLetterLoaded(2)}
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
      <div className="relative flex-1 aspect-square max-w-[90%] max-h-[65%] md:max-h-full md:max-w-[40%]" />
    );
  }

  return (
    <div className="relative flex-1 aspect-square max-w-[90%] max-h-[65%] md:max-h-full md:max-w-[40%]">
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
