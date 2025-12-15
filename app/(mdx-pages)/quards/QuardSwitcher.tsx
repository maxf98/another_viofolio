"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function QuardSwitcher() {
  const [showFront, setShowFront] = useState(true);

  const toggleImage = () => {
    setShowFront(!showFront);
  };

  return (
    <div className="my-8 flex justify-center items-start gap-4">
      <div className="relative inline-block">
        <Image
          src="/projects/quards/sample_quard_front.jpg"
          alt="Quard front side"
          width={800}
          height={1200}
          className="w-full max-w-md ipad-border"
          onClick={toggleImage}
        />

        <AnimatePresence>
          {!showFront && (
            <Image
              src="/projects/quards/sample_quard_back.jpg"
              alt="Quard back side"
              className="absolute inset-0 w-full max-w-md ipad-border"
              width={800}
              height={1200}
              onClick={toggleImage}
            />
          )}
        </AnimatePresence>

        <div className="absolute top-10 right-[70px] drop-shadow-lg">
          <motion.div
            className="cursor-pointer"
            onClick={toggleImage}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute p-2 rounded-lg bg-white border border-black w-16 h-22 flex items-center justify-center"
              animate={{
                zIndex: showFront ? 10 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/projects/quards/QuestionIcon.png"
                alt="Question side"
                className="object-contain h-full"
                width={400}
                height={500}
              />
            </motion.div>
            <motion.div
              className="absolute p-2 rounded-lg bg-gray-300 border border-black top-2.5 left-2.5 w-16 h-22 flex items-center justify-center"
              animate={{
                zIndex: showFront ? 1 : 10,
              }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/projects/quards/AnswerIcon.png"
                alt="Answer side"
                className="object-contain h-full"
                width={400}
                height={500}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hint arrow on the right */}
      <motion.div
        className="flex items-center gap-2 text-white/60 text-sm mt-12 whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
          className="text-white/60 scale-x-[-1]"
        >
          <path
            d="M2 25 C 10 25, 15 20, 20 12 C 25 4, 30 2, 38 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M32 2 L38 5 L34 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <span className="italic">tap to switch layers</span>
      </motion.div>
    </div>
  );
}
