"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "./CTAButton";

interface AboutMeSectionProps {
  isOpen?: boolean;
  onClose?: () => void;
}

// Reusable spacing value for section gaps - adjust this to change all spacing at once
const SECTION_SPACING = "mb-32"; // ~8rem / 128px
const SECTION_PADDING = "py-16 px-6 md:px-12"; // Padding around the entire section

export default function AboutMeSection({
  isOpen = true,
}: AboutMeSectionProps) {
  if (!isOpen) return null;

  return (
    <div className="relative w-full">
      {/* Scattered background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[40%] right-[10%] w-48 h-48 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[15%] w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <div className={`relative ${SECTION_PADDING}`}>
        <motion.div
          className="w-full max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          {/* Roles */}
          <div className={`flex flex-col items-center gap-4 ${SECTION_SPACING}`}>
            <motion.div
              className="w-full max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/IDA2.png"
                alt="Illustrator Designer Artist"
                width={1600}
                height={320}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Description */}
          <p className={`text-white/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed ${SECTION_SPACING}`}>
            Hi, I&apos;m Vio, based in Munich, Germany. I create colorful, expressive illustrations and designs with a playful, character-driven style. From brand illustration and visual identities to editorial and personal projects—I love bringing ideas to life with bold colors and storytelling. Working freelance since graduating from NABA Milan, and currently training in art therapy at Campus Naturalis.
          </p>

          {/* Let's Create Together */}
          <div className="flex flex-col items-center gap-4 pb-16">
            <Image
              src="/lets.png"
              alt="Let's create together"
              width={800}
              height={200}
              className="w-full max-w-3xl h-auto object-contain"
              priority
            />
            <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              Open for freelance projects, collaborations, and creative adventures.
            </p>
            <CTAButton href="mailto:hello@vio.art">
              Say Hello
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
