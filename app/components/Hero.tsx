"use client";

import { motion } from "framer-motion";
import LetterSwitcher from "./LetterSwitcher";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center gap-4 p-16`}
    >
      {/* Hello image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Image
          src="/heyo.png"
          alt="Heyo"
          width={288}
          height={112}
          className="w-36 h-14 md:w-72 md:h-28 -translate-y-4 md:translate-y-0 object-contain"
        />
      </motion.div>

      {/* Letter Switcher */}
      <div className="w-full flex-1 min-h-0 h-full flex items-center justify-center">
        <LetterSwitcher />
      </div>
    </div>
  );
}
