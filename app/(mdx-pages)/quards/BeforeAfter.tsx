"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Picker from "@/app/components/Picker";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const BEFORE_AFTER_COUNT = 7;

const descriptions = [
  "Description 1",
  "Description 2",
  "Description 3",
  "Description 4",
  "Description 5",
  "Description 6",
  "Description 7",
];

export default function BeforeAfter() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [beforeOnTop, setBeforeOnTop] = useState(false);

  const handleSelectIndex = (index: number) => {
    setSelectedIndex(index);
    setBeforeOnTop(false); // Reset to After on top when switching
  };

  const oldImages = Array.from(
    { length: BEFORE_AFTER_COUNT },
    (_, i) => `/projects/quards/beforeAfter/old/${i + 1}.png`
  );

  const newImages = Array.from(
    { length: BEFORE_AFTER_COUNT },
    (_, i) => `/projects/quards/beforeAfter/new/${i + 1}.png`
  );

  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-center sm:items-stretch gap-12 sm:gap-4 my-18">
      {/* Side-by-side Preview */}
      <div className="relative">
        <AnimatePresence initial={false}>
          <motion.div
            key={selectedIndex}
            className="flex justify-center items-end gap-0 sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Old (Before) */}
            <motion.div
              className="flex flex-col items-center justify-end cursor-pointer"
              style={{ zIndex: beforeOnTop ? 10 : 1 }}
              onTap={() => setBeforeOnTop(true)}
            >
              <motion.span
                className="text-white !text-2xl font-semibold mb-2 pointer-events-none"
                initial={{
                  opacity: 0.3,
                }}
                animate={{
                  opacity: beforeOnTop ? 1 : 0.3,
                }}
              >
                Before
              </motion.span>
              <Image
                src={oldImages[selectedIndex]}
                alt="Before"
                width={300}
                height={400}
                className="h-auto w-full max-w-[240px] sm:max-w-none sm:h-[540px] sm:w-auto ipad-border"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAJpAN4pokyXwAAAABJRU5ErkJggg=="
              />
            </motion.div>

            {/* New (After) */}
            <motion.div
              className="flex flex-col items-center justify-end -ml-32 cursor-pointer"
              style={{ zIndex: beforeOnTop ? 1 : 10 }}
              onTap={() => setBeforeOnTop(false)}
            >
              <motion.span
                className="text-white !text-2xl font-semibold mb-2 pointer-events-none"
                animate={{
                  opacity: beforeOnTop ? 0.3 : 1,
                }}
              >
                After
              </motion.span>
              <Image
                src={newImages[selectedIndex]}
                alt="After"
                width={300}
                height={400}
                className="h-auto w-full max-w-[240px] sm:max-w-none sm:h-[540px] sm:w-auto ipad-border"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAJpAN4pokyXwAAAABJRU5ErkJggg=="
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Hint to tap the other image */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-4 text-white/50 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {beforeOnTop ? (
            <>
              <span>Tap to see after</span>
              <MdArrowForward size={16} />
            </>
          ) : (
            <>
              <MdArrowBack size={16} />
              <span>Tap to see before</span>
            </>
          )}
        </motion.div>
      </div>

      {/* Picker - row on mobile, column on desktop */}
      <div className="flex flex-row sm:flex-col justify-between sm:justify-end gap-1 w-[352px] sm:w-auto">
        {newImages.map((image, index) => (
          <Picker
            key={index}
            src={image}
            alt={`Before/After comparison ${index + 1}`}
            isSelected={selectedIndex === index}
            onClick={() => handleSelectIndex(index)}
            animatesScale={false}
            className="h-20 w-14 sm:h-20 sm:w-15 ipad-border-thin"
          />
        ))}
      </div>
    </div>
  );
}
