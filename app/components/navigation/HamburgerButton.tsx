"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useGlobalNav } from "./GlobalNavContext";

export default function HamburgerButton() {
  const { isGlobalNavOpen, isAboutMeOpen, toggleGlobalNav } = useGlobalNav();

  // Hide hamburger when AboutMe overlay is open
  if (isAboutMeOpen) return null;

  return (
    <AnimatePresence>
      <motion.button
        onClick={toggleGlobalNav}
        className="fixed top-0 right-0 z-[20001] p-5 md:px-6 md:py-10 text-white focus:outline-none pointer-events-auto"
        aria-label="Toggle navigation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="w-6 space-y-1.5"
          animate={{
            rotate: isGlobalNavOpen ? 90 : 0,
            scale: isGlobalNavOpen ? 1.05 : 1,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <span className="block h-0.5 bg-white origin-center" />
          <span className="block h-0.5 bg-white origin-center" />
          <span className="block h-0.5 bg-white origin-center" />
        </motion.div>
      </motion.button>
    </AnimatePresence>
  );
}
