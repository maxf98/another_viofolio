"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const sections = [
  { id: "gallery", label: "Gallery" },
  { id: "elgato", label: "Elgato" },
  { id: "quards", label: "Quards" },
  { id: "mascha", label: "Mascha" },
  { id: "monkeybrain", label: "Monkeybrain" },
];

export default function ScrollNav() {
  const pathname = usePathname();
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

  // Only show on home page
  if (pathname !== "/") {
    return null;
  }

  return (
    <nav className="flex flex-col gap-6">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className="group relative flex items-center justify-center"
            aria-label={`Navigate to ${section.label}`}
          >
            <motion.div
              className="rounded-full bg-white/40 hover:bg-white/60 transition-colors cursor-pointer"
              animate={{
                width: isActive ? 20 : 12,
                height: isActive ? 20 : 12,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            />
            {/* Tooltip on hover */}
            <span className="absolute left-full ml-4 px-3 py-1 bg-white/90 text-black text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
