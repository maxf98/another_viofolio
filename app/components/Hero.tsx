"use client";

import { motion } from "framer-motion";
import LetterSwitcher from "./LetterSwitcher";
import { useLoadState } from "@/app/context/LoadContext";

export default function Hero() {
  const { state } = useLoadState();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8 px-8 p-16">
      {/* Text above letter switcher - appears first */}
      <motion.span
        className="text-white text-xl md:text-2xl mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        Hey I&apos;m
      </motion.span>

      {/* Letter Switcher */}
      <div className="w-full flex-1 min-h-0 h-full">
        <LetterSwitcher />
      </div>

      {/* Text below letter switcher - appears with background */}
      <motion.span
        className="text-white text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: state.allLettersReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Graphic Designer and Illustrator
      </motion.span>
    </div>
  );
}
