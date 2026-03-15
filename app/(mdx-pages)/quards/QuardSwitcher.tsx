"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import InteractionHint from "@/app/components/InteractionHint";
import { useQuardsText } from "@/app/translations/quards";

export default function QuardSwitcher() {
  const t = useQuardsText();
  const [showFront, setShowFront] = useState(true);

  const toggleImage = () => {
    setShowFront(!showFront);
  };

  return (
    <div className="my-8 flex flex-col items-center">
      <InteractionHint text={t.tapToSwitch} className="mb-2" />

      <div className="relative inline-block">
        <Image
          src="/projects/quards/sample_quard_front.jpg"
          alt="Quard front side"
          width={800}
          height={1200}
          className="w-full max-w-xs sm:max-w-md ipad-border cursor-pointer"
          onClick={toggleImage}
        />

        <AnimatePresence>
          {!showFront && (
            <Image
              src="/projects/quards/sample_quard_back.jpg"
              alt="Quard back side"
              className="absolute inset-0 w-full max-w-xs sm:max-w-md ipad-border cursor-pointer"
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
    </div>
  );
}
