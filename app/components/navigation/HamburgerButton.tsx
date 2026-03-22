"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useGlobalNav } from "./GlobalNavContext";

export default function HamburgerButton() {
  const { isGlobalNavOpen, toggleGlobalNav } = useGlobalNav();

  return (
    <AnimatePresence>
      <motion.button
        onClick={toggleGlobalNav}
        className="flex items-center justify-center text-white focus:outline-none"
        aria-label="Toggle navigation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="flex h-8 w-8 flex-col justify-center space-y-1.5"
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
