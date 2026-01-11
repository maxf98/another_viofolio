"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import RotateOnHover from "../animations/RotateOnHover";
import { useLoadState } from "@/app/context/LoadContext";

export interface NavSection {
  id: string;
  label?: string;
  src?: string;
  bgColor?: string;
  size?: number;
}

interface NavigationProps {
  sections: NavSection[];
}

export default function Navigation({ sections }: NavigationProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { state } = useLoadState();
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const detect = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind
      setOrientation(window.innerWidth >= window.innerHeight ? "landscape" : "portrait");
    };

    detect(); // Check on mount
    window.addEventListener("resize", detect);
    window.addEventListener("orientationchange", detect);
    return () => {
      window.removeEventListener("resize", detect);
      window.removeEventListener("orientationchange", detect);
    };
  }, []);

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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!showNav) {
    return null;
  }

  const isMobilePortrait = isMobile && orientation === "portrait";
  const isMobileLandscape = isMobile && orientation === "landscape";

  return (
    <>
      {/* Mobile portrait: horizontal top bar */}
      {isMobilePortrait ? (
        <header className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-center pointer-events-auto bg-black/20 backdrop-blur-md">
          <div className="flex items-center justify-center gap-3 px-4 py-2">
            <Link href="/" className="inline-block p-1">
              <RotateOnHover rotation={8}>
                <Image src="/logo.png" alt="Logo" width={32} height={32} priority />
              </RotateOnHover>
            </Link>

            {/* Mobile icons */}
            {sections.length > 0 &&
              sections.map((section) => {
                const isActive = activeSection === section.id;
                return section.src ? (
                  <motion.button
                    key={section.id}
                    onClick={() => handleClick(section.id)}
                    className="p-1"
                    animate={{
                      scale: isActive ? 1 : 0.7,
                      opacity: isActive ? 1 : 0.6,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src={section.src}
                      alt={section.label ?? section.id}
                      width={52}
                      height={52}
                      className="object-contain"
                    />
                  </motion.button>
                ) : null;
              })}
          </div>
        </header>
      ) : null}

      {/* Mobile landscape: vertical stack (no blur) */}
      {isMobileLandscape ? (
        <div className="fixed top-0 left-0 z-[9999] flex flex-col items-center px-4 py-6 pointer-events-auto">
          <Link href="/" className="inline-block mb-6">
            <RotateOnHover rotation={8}>
              <Image src="/logo.png" alt="Logo" width={32} height={32} priority />
            </RotateOnHover>
          </Link>
          <nav className="flex flex-col gap-6">
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
                      scale: isActive ? 1.2 : 1,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    whileHover={{ scale: 1.15, opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src={section.src}
                      alt={section.label ?? section.id}
                      width={52}
                      height={52}
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Tooltip on hover */}
                  {section.label && (
                    <span className="absolute left-full ml-3 px-2.5 py-1 bg-white/10 text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap border border-white/15">
                      {section.label}
                    </span>
                  )}
                </motion.button>
              ) : null;
            })}
          </nav>
        </div>
      ) : null}

      {/* Desktop */}
      {!isMobile && (
        <>
          {/* Desktop: Logo top left */}
          <header className="fixed top-0 left-0 z-[9999] flex flex-col items-center px-6 py-10 pointer-events-auto">
            <Link href="/" className="inline-block">
              <RotateOnHover rotation={8}>
                <Image src="/logo.png" alt="Logo" width={36} height={36} priority />
              </RotateOnHover>
            </Link>
          </header>

          {/* Desktop: Side navigation */}
          <div className="fixed z-[9998] top-0 left-0 bottom-0 h-screen ml-6 w-[60px] flex items-center justify-center pointer-events-auto">
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
                        scale: isActive ? 1.3 : 1,
                        opacity: isActive ? 1 : 0.7,
                      }}
                      whileHover={{ scale: 1.2, opacity: 1 }}
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
        </>
      )}
    </>
  );
}
