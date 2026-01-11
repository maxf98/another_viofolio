"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NavSection } from "./Navigation";

interface HamburgerMenuProps {
  sections: NavSection[];
}

export default function HamburgerMenu({ sections }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
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
  }, [sections]);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close menu after navigation
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button Container - matches logo container dimensions */}
      <div className="fixed top-0 right-0 z-50 flex items-center px-6 py-6 md:py-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
            }}
            className="w-8 h-0.5 bg-white block"
          />
          <motion.span
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            className="w-8 h-0.5 bg-white block"
          />
          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
            }}
            className="w-8 h-0.5 bg-white block"
          />
        </button>
      </div>

      {/* Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-full h-screen z-40 flex items-center justify-center"
            style={{
              backdropFilter: "blur(24px)",
              backgroundColor: "rgba(28, 27, 27, 0.65)",
            }}
          >
            <nav className="flex flex-col gap-8 items-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleClick(section.id)}
                    className="text-white text-2xl font-medium transition-all flex flex-col items-center gap-2"
                  >
                    {section.src && (
                      <motion.div
                        animate={{
                          scale: isActive ? 1.8 : 1,
                          opacity: isActive ? 1 : 0.7,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <Image
                          src={section.src}
                          alt={section.label ?? section.id}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </motion.div>
                    )}
                    <motion.span
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        opacity: isActive ? 1 : 0.7,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="block"
                    >
                      {section.label ?? section.id}
                    </motion.span>
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
