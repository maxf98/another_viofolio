"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Picker from "@/app/components/Picker";

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

  const oldImages = Array.from(
    { length: BEFORE_AFTER_COUNT },
    (_, i) => `/projects/quards/beforeAfter/old/${i + 1}.png`
  );

  const newImages = Array.from(
    { length: BEFORE_AFTER_COUNT },
    (_, i) => `/projects/quards/beforeAfter/new/${i + 1}.png`
  );

  return (
    <div className="flex flex-col gap-4 my-18">
      {/* Title */}
      <h3 className="text-white text-lg">Before & After</h3>

      {/* Picker Row - small side-by-side previews */}
      <div className="flex justify-between w-full">
        {newImages.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <Picker
              src={image}
              alt={`Before/After comparison ${index + 1}`}
              isSelected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
              animatesScale={false}
              className="h-24 w-18 ipad-border-thin"
            />
            {selectedIndex === index && (
              <p className="text-white text-sm mt-2 text-center max-w-18">
                {descriptions[index]}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Side-by-side Preview */}
      <div className="relative h-128 w-full -mt-2">
        <AnimatePresence>
          <motion.div
            key={selectedIndex}
            className="absolute inset-0 flex justify-center gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Old (Before) */}
            <div className="flex-1 flex justify-center items-center">
              <Image
                src={oldImages[selectedIndex]}
                alt="Before"
                width={400}
                height={533}
                className="h-[55%] w-auto ipad-border"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAJpAN4pokyXwAAAABJRU5ErkJggg=="
              />
            </div>

            {/* New (After) */}
            <div className="flex-1 flex justify-center items-end">
              <Image
                src={newImages[selectedIndex]}
                alt="After"
                width={400}
                height={533}
                className="h-full w-auto ipad-border"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAJpAN4pokyXwAAAABJRU5ErkJggg=="
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Labels */}
      <div className="flex justify-center text-sm text-gray-500">
        <span className="flex-1 text-center max-w-[50%]">Before</span>
        <span className="flex-1 text-center max-w-[50%]">After</span>
      </div>
    </div>
  );
}
