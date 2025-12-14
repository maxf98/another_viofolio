"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NavSection } from "./Navigation";

interface ScrollNavProps {
  sections: NavSection[];
}

export default function ScrollNav({ sections }: ScrollNavProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
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
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="fixed z-[9998] top-0 left-0 bottom-0 h-screen ml-6 w-[45px] flex items-center justify-center pointer-events-auto">
      <nav className="flex flex-col gap-10">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className="group relative flex items-center justify-center cursor-pointer force-pointer"
              aria-label={`Navigate to ${section.label}`}
            >
              <motion.div
                className="relative rounded-full overflow-hidden"
                initial={{
                  width: 36,
                  height: 36,
                  scale: 1,
                }}
                animate={{
                  width: 36,
                  height: 36,
                  scale: isActive ? 1.8 : 1,
                }}
                whileHover={{
                  scale: isActive ? 1.7 : 1.6,
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
                    width={36}
                    height={36}
                    className="object-cover"
                  />
                ) : (
                  <motion.div className="w-16 h-16 bg-white/40" />
                )}
              </motion.div>

              {/* Tooltip on hover */}
              {section.label && (
                <span className="absolute left-full ml-4 px-3 py-1 bg-white/90 text-black text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
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
