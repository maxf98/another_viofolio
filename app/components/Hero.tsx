"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LetterSwitcher from "./LetterSwitcher";

export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 px-8 pt-28 md:pt-24 pb-8">
      {/* Hey, I'm image */}
      <motion.div
        className="relative w-40 h-14 md:w-56 md:h-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Image
          src="/covers/about me/hey.png"
          alt="Hey, I'm"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Letter Switcher */}
      <div className="w-full flex-1 min-h-0 h-full">
        <LetterSwitcher />
      </div>
    </div>
  );
}
