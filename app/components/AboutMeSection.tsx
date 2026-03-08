"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "./CTAButton";
import { useHomeText } from "@/app/translations/home";
import { useGlobalNav } from "./navigation/GlobalNavContext";

export default function AboutMeSection() {
  const { openAboutMe } = useGlobalNav();
  const t = useHomeText();

  return (
    <>
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

        <div className="relative flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="/IDA2.png"
              alt="Illustrator Designer Artist"
              width={1600}
              height={320}
              className="w-56 md:w-72 h-auto object-contain mx-auto"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <CTAButton onClick={openAboutMe}>
              {t.aboutButton}
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </>
  );
}
