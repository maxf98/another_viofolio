"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { NavSection } from "./Navigation";

interface ScrollNavProps {
  sections: NavSection[];
}

export default function ScrollNav({ sections }: ScrollNavProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Find which section is currently in view
    let foundSection = false;
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const absoluteTop = top + window.scrollY;
        const absoluteBottom = bottom + window.scrollY;

        if (
          scrollPosition >= absoluteTop &&
          scrollPosition <= absoluteBottom
        ) {
          setActiveSection(section.id);
          foundSection = true;
          return;
        }
      }
    }

    // If no section is in view, clear the active section
    if (!foundSection) {
      setActiveSection(null);
    }
  }, [sections]);

  useEffect(() => {
    // Use requestAnimationFrame to defer the initial check
    const frameId = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="fixed z-[9998] top-0 left-0 bottom-0 h-screen ml-6 w-[60px] flex items-center justify-center pointer-events-auto">
      <nav className="flex flex-col gap-14 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const baseSize = section.size ?? 56;
          return (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className="group relative flex items-center justify-center cursor-pointer force-pointer"
              aria-label={`Navigate to ${section.label}`}
            >
              <motion.div
                className="relative overflow-hidden"
                style={{ backgroundColor: section.bgColor }}
                initial={{
                  width: baseSize,
                  height: baseSize,
                  scale: 1,
                }}
                animate={{
                  width: baseSize,
                  height: baseSize,
                  scale: isActive ? 1.4 : 1,
                }}
                whileHover={{
                  scale: isActive ? 1.4 : 1.3,
                  opacity: 1,
                }}
                whileTap={{
                  scale: isActive ? 0.95 : 0.65,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {section.src ? (
                  <Image
                    src={section.src}
                    alt={section.label ?? section.id}
                    width={96}
                    height={96}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <motion.div className="w-16 h-16 bg-white/40" />
                )}
              </motion.div>

              {/* Tooltip on hover */}
              {section.label && (
                <span className="absolute left-full ml-4 px-4 py-2 bg-white/10 backdrop-blur-md text-white text-base font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap border border-white/20">
                  {section.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
