"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { createPortal } from "react-dom";
import CTAButton from "./CTAButton";
import vBackground from "../../public/gallery/painting.png";
import { useHomeText } from "@/app/translations/home";

interface AboutMeSectionProps {
  isOpen?: boolean;
  onClose?: () => void;
}

// Reusable spacing value for section gaps - adjust this to change all spacing at once
const SECTION_SPACING = "mb-32"; // ~8rem / 128px
const SECTION_PADDING = "py-16 px-6 md:px-12"; // Padding around the entire section

export default function AboutMeSection({ isOpen = true }: AboutMeSectionProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const t = useHomeText();

  // Ensure portal target is available in browser
  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (showOverlay) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [showOverlay]);

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
          <div
              className={`flex flex-col items-center gap-4 ${SECTION_SPACING}`}
            >
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
                className="w-4/5 md:w-full h-auto object-contain mx-auto"
                priority
              />
              <div className="mt-6 flex justify-center">
                <CTAButton onClick={() => setShowOverlay(true)}>
                  {t.aboutButton}
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {portalTarget
          ? createPortal(
              <AnimatePresence>
                {showOverlay && (
                  <motion.div
                    className="fixed inset-0 z-[20000] flex items-stretch justify-center px-0 md:px-6"
                    onClick={() => setShowOverlay(false)}
                    role="presentation"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="fixed inset-0 -z-10">
                      <Image
                        src={vBackground}
                        alt="About me background"
                        fill
                        className="object-cover object-[center_40%]"
                        placeholder="blur"
                      />
                      <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div
                      className="relative w-full max-w-3xl h-full md:h-auto my-16 md:my-16 p-5 md:p-10 overflow-y-auto flex items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="fixed top-4 right-4 z-[30000]">
                        <CTAButton
                          onClick={() => setShowOverlay(false)}
                          size="sm"
                          bgColor="#7a9b76"
                          className="!p-3"
                        >
                          <MdClose size={24} />
                        </CTAButton>
                      </div>
                      <div className="flex flex-col items-center text-center gap-8 relative z-10 justify-start md:justify-center pt-6 md:pt-0">
                        <div className="text-white/90 text-lg md:text-xl leading-relaxed space-y-4 max-w-3xl font-normal">
                          {t.aboutParagraphs.map((para: string, idx: number) => (
                            <p key={idx}>{para}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>,
              portalTarget
            )
          : null}
      </div>
    </div>
  );
}
