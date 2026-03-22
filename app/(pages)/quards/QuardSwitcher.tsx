"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
        <button
          type="button"
          onClick={toggleImage}
          className="relative block w-full max-w-xs overflow-hidden ipad-border cursor-pointer sm:max-w-md"
          aria-label={
            showFront ? "Show quard back side" : "Show quard front side"
          }
        >
          <motion.div
            className="relative"
            animate={{ opacity: showFront ? 1 : 0 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <Image
              src="/projects/quards/sample_quard_front.jpg"
              alt="Quard front side"
              width={800}
              height={1200}
              className="h-auto w-full object-cover"
              priority
              loading="eager"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            animate={{ opacity: showFront ? 0 : 1 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <Image
              src="/projects/quards/sample_quard_back.jpg"
              alt="Quard back side"
              fill
              className="object-cover"
              priority
              loading="eager"
            />
          </motion.div>
        </button>

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
