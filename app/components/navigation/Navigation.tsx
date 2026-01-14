"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
  };

  if (!showNav) {
    return null;
  }

  const showMobileMenu = isMobile && isMenuOpen;

  return (
    <>
      {/* Mobile: horizontal top bar (portrait & landscape) */}
      {isMobile ? (
        <header className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between pointer-events-auto px-4 py-3">
          <Link href="/" className="inline-block p-1">
            <RotateOnHover rotation={8}>
              <Image src="/logo.png" alt="Logo" width={32} height={32} priority />
            </RotateOnHover>
          </Link>
          {sections.length > 0 && (
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              <motion.div
                className="w-6 space-y-1.5"
                animate={{
                  rotate: isMenuOpen ? 90 : 0,
                  scale: isMenuOpen ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <span className="block h-0.5 bg-white origin-center" />
                <span className="block h-0.5 bg-white origin-center" />
                <span className="block h-0.5 bg-white origin-center" />
              </motion.div>
            </button>
          )}
        </header>
      ) : null}

      {/* Fullscreen slide-in menu for mobile portrait & landscape */}
      <AnimatePresence>
        {showMobileMenu && sections.length > 0 && (
          <div className="fixed inset-0 z-[9998] pointer-events-auto">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMenuOpen(false)}
              aria-hidden
            />
            <motion.div
              className="absolute inset-y-0 right-0 w-full sm:w-[70%] text-white flex flex-col bg-white/10 backdrop-blur-lg border-l border-white/15"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              aria-label="Navigation menu"
            >
              <motion.nav
                className="flex-1 flex flex-col justify-evenly px-6 py-12"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                  },
                }}
              >
                {sections.map((section) =>
                  section.src ? (
                    <motion.button
                      key={section.id}
                      onClick={() => handleClick(section.id)}
                      className="flex items-center gap-4 text-2xl font-semibold"
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    >
                      <Image
                        src={section.src}
                        alt={section.label ?? section.id}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                      <span>{section.label ?? section.id}</span>
                    </motion.button>
                  ) : null
                )}
              </motion.nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
        </>
      )}
    </>
  );
}
