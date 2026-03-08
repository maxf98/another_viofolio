"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLoadState } from "@/app/context/LoadContext";

export interface NavSection {
  id: string;
  label?: string;
  src?: string;
  bgColor?: string;
  size?: number;
}

interface LocalNavProps {
  sections: NavSection[];
}

export default function LocalNav({ sections }: LocalNavProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { state } = useLoadState();
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;

          if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
            setActiveSection(section.id);
            return;
          }
        }
      }
      setActiveSection(null);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // On non-homepage routes, show immediately
  const [showNav, setShowNav] = useState(!isHomepage);

  // Show nav after background has faded in (0.5s delay + 0.6s fade = ~1.1s after letters ready)
  useEffect(() => {
    if (isHomepage && state.allLettersReady && !showNav) {
      const timer = setTimeout(() => {
        setShowNav(true);
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [state.allLettersReady, showNav, isHomepage]);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const block = isHomepage ? "center" : "start";
      element.scrollIntoView({ behavior: "smooth", block });
    }
  };

  if (!showNav) {
    return null;
  }

  return (
    <>
      {/* Desktop only: Side navigation - hidden on mobile */}
      <div className="hidden md:block fixed z-[9998] top-0 left-0 bottom-0 h-screen ml-6 w-[60px] pointer-events-auto">
        <div className="flex items-center justify-center h-full">
          <nav className="flex flex-col gap-8 p-3">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return section.src ? (
                <motion.button
                  key={section.id}
                  onClick={() => handleClick(section.id)}
                  className="group relative flex items-center justify-center cursor-pointer"
                  aria-label={`Navigate to ${section.label}`}
                >
                  <motion.div
                    className="relative"
                    animate={{
                      scale: isActive ? 1.5 : 1,
                      opacity: 1,
                    }}
                    whileHover={{ scale: isActive ? 1.5 : 1.2, opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src={section.src}
                      alt={section.label ?? section.id}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Tooltip on hover */}
                  {section.label && (
                    <span className="absolute left-full ml-4 px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap border border-white/20">
                      {section.label}
                    </span>
                  )}
                </motion.button>
              ) : null;
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
