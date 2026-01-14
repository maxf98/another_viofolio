"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LetterSwitcher from "./LetterSwitcher";

export default function Hero() {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center gap-4 p-16`}
    >
      {/* Hello image */}
      <motion.div
        className="relative w-56 h-20 md:w-72 md:h-28"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Image
          src="/heyi.png"
          alt="Heyi"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Letter Switcher */}
      <div className="w-full flex-1 min-h-0 h-full flex items-center justify-center">
        <LetterSwitcher />
      </div>
    </div>
  );
}
