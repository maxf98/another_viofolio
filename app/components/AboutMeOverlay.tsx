"use client";

import { motion } from "framer-motion";
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
          <div className={`flex flex-col items-center gap-3 ${SECTION_SPACING}`}>
            <motion.span
              className="text-[#F5E6A3] font-black text-5xl md:text-6xl"
              style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.5), 8px 8px 16px rgba(0,0,0,0.3)' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Illustrator
            </motion.span>
            <motion.span
              className="text-[#D4B8E0] font-black text-5xl md:text-6xl"
              style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.5), 8px 8px 16px rgba(0,0,0,0.3)' }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Designer
            </motion.span>
            <motion.span
              className="text-[#B8E0C8] font-black text-5xl md:text-6xl"
              style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.5), 8px 8px 16px rgba(0,0,0,0.3)' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Artist
            </motion.span>
          </div>

          {/* Description */}
          <p className={`text-white/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed ${SECTION_SPACING}`}>
            Hi, I&apos;m Vio, based in Munich, Germany. I create colorful, expressive illustrations and designs with a playful, character-driven style. From brand illustration and visual identities to editorial and personal projects—I love bringing ideas to life with bold colors and storytelling. Working freelance since graduating from NABA Milan, and currently training in art therapy at Campus Naturalis.
          </p>

          {/* Let's Create Together */}
          <div className="flex flex-col items-center gap-4 pb-16">
            <h2
              className="text-3xl md:text-5xl font-black mb-1 leading-tight text-white"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}
            >
              Let&apos;s Create Together!
            </h2>
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
