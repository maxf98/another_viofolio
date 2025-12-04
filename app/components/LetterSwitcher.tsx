"use client";

import { useState, useEffect, useRef } from "react";
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
  const lastChangedLetterRef = useRef(0);

  function getRandomIndex<T>(list: T[]): number {
    return Math.floor(Math.random() * list.length);
  }

  // Strategy functions for selecting the next index
  const getNextIndexRandom = (
    currentIndex: number,
    letterArray: LetterItem[]
  ): number => {
    // Keep generating until we get a different index
    let newIndex;
    do {
      newIndex = getRandomIndex(letterArray);
    } while (newIndex === currentIndex);
    return newIndex;
  };

  const getNextIndexIncrement = (
    currentIndex: number,
    letterArray: LetterItem[]
  ): number => {
    // Increment by 1, wrapping around using modulo
    return (currentIndex + 1) % letterArray.length;
  };

  // Choose which strategy to use here
  const getNextIndex = getNextIndexIncrement;

  // Auto-shuffle a random letter every second
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random letter position (0, 1, or 2)
      let randomPosition = lastChangedLetterRef.current;
      do {
        randomPosition = Math.floor(Math.random() * 3);
      } while (randomPosition === lastChangedLetterRef.current);
      lastChangedLetterRef.current = randomPosition;

      setSelectedLetters((prev) => {
        const newLetters = [...prev];
        // Get the appropriate letter array based on position
        const letterArray =
          randomPosition === 0 ? vs : randomPosition === 1 ? is : os;

        // Get the next index using the selected strategy
        const currentIndex = prev[randomPosition];
        const newIndex = getNextIndex(currentIndex, letterArray);

        newLetters[randomPosition] = newIndex;
        return newLetters;
      });
    }, 1000); // Every 1 second

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-row items-center justify-center h-full -space-x-6 md:space-x-0">
      <LetterStack letters={vs} selectedLetter={selectedLetters[0]} />
      <LetterStack letters={is} selectedLetter={selectedLetters[1]} />
      <LetterStack letters={os} selectedLetter={selectedLetters[2]} />
    </div>
  );
}

interface LetterStackProps {
  letters: LetterItem[];
  selectedLetter: number;
}

function LetterStack({ letters, selectedLetter }: LetterStackProps) {
  useEffect(() => {
    preloadImages(letters.map((letter) => letter.image.src));
  });

  return (
    // Mobile: width-based sizing, Desktop: height-based sizing with max constraint
    <div className={`relative w-full max-w-[250px] aspect-square`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={letters[selectedLetter].index}
          src={letters[selectedLetter].image.src}
          alt={letters[selectedLetter].alt}
          initial={{ rotateY: -90 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 90 }}
          transition={{ duration: 0.4 }}
          style={{ transformPerspective: 1000 }}
          // .letter: absolute inset-0 w-full h-full
          className="absolute inset-0 w-full h-full object-contain"
        />
      </AnimatePresence>
    </div>
  );
}
