"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { letters } from "@/app/data/graph";
import { LetterItem } from "@/app/data/model";

function preloadImages(images: string[]) {
  images.forEach((imagePath) => {
    const img = new Image();
    img.src = imagePath;
  });
}

// Get letter arrays from the dictionary
const vs = letters.V;
const is = letters.I;
const os = letters.O;

export default function LetterSwitcher() {
  const [selectedLetters, setSelectedLetters] = useState([0, 0, 0]);

  function getRandomIndex<T>(list: T[]): number {
    return Math.floor(Math.random() * list.length);
  }

  // Auto-shuffle a random letter every second
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random letter position (0, 1, or 2)
      const randomPosition = Math.floor(Math.random() * 3);

      setSelectedLetters((prev) => {
        const newLetters = [...prev];
        // Get the appropriate letter array based on position
        const letterArray =
          randomPosition === 0 ? vs : randomPosition === 1 ? is : os;

        // Get a new index that's different from the current one
        const currentIndex = prev[randomPosition];
        let newIndex;

        // Keep generating until we get a different index
        do {
          newIndex = getRandomIndex(letterArray);
        } while (newIndex === currentIndex);

        newLetters[randomPosition] = newIndex;
        return newLetters;
      });
    }, 1000); // Every 1 second

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-row items-center justify-center w-full h-full">
      <LetterStack letters={vs} selectedLetter={selectedLetters[0]} />
      <LetterStack letters={is} selectedLetter={selectedLetters[1]} />
      <LetterStack letters={os} selectedLetter={selectedLetters[2]} />
    </div>
  );
}

interface LetterStackProps {
  letters: LetterItem[];
  selectedLetter: number;
  isMiddle?: boolean; // For the "I" which is narrower (20% vs 40%)
}

function LetterStack({ letters, selectedLetter }: LetterStackProps) {
  useEffect(() => {
    preloadImages(letters.map((letter) => letter.image));
  });

  return (
    // .letterstack: relative h-full with aspect-ratio to maintain proportions
    <div className={`relative h-full aspect-[1]`}>
      <AnimatePresence>
        <motion.img
          key={letters[selectedLetter].index}
          src={letters[selectedLetter].image}
          alt={letters[selectedLetter].alt}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring" }}
          // .letter: absolute inset-0 w-full h-full
          className="absolute inset-0 w-full h-full object-contain"
        />
      </AnimatePresence>
    </div>
  );
}
