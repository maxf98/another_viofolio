"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTiktok, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useGlobalNav } from "./GlobalNavContext";
import { useLang } from "@/app/context/LanguageContext";
import { globalNavText } from "@/app/translations/globalNav";
import LanguageToggle from "@/app/components/LanguageToggle";
import RotateOnHover from "../animations/RotateOnHover";

export default function GlobalNav() {
  const { isGlobalNavOpen, closeGlobalNav, openAboutMe } = useGlobalNav();
  const { lang } = useLang();
  const t = globalNavText[lang];
  const pathname = usePathname();

  const handleAboutMeClick = () => {
    openAboutMe();
    closeGlobalNav();
  };

  const handleLinkClick = () => {
    closeGlobalNav();
  };

  const isActive = (path: string) => pathname === path;

  return (
    <AnimatePresence>
      {isGlobalNavOpen && (
        <div className="fixed inset-0 z-[19998] pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeGlobalNav}
            aria-hidden
          />

          {/* Menu panel */}
          <motion.div
            className="absolute inset-y-0 right-0 w-full md:w-full md:max-w-md text-white flex flex-col bg-white/10 backdrop-blur-lg md:border-l border-white/15 z-[19999]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            aria-label="Global navigation menu"
          >
            {/* Language toggle at top */}
            <div className="pt-20 pb-6 px-6 flex justify-center border-b border-white/10">
              <LanguageToggle />
            </div>

            {/* Navigation links */}
            <motion.nav
              className="flex-1 flex flex-col py-8 overflow-y-auto"
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
              {/* About Me */}
              <motion.button
                onClick={handleAboutMeClick}
                className="px-6 py-2 text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200 text-left"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {t.aboutMe}
              </motion.button>

              {/* Personal Archive Section */}
              <div className="mt-8">
                <motion.h3
                  className="text-xs uppercase tracking-wider text-white/50 font-semibold px-6 mb-1 pointer-events-none"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {t.personalArchive}
                </motion.h3>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href="/gallery/illustrated-photography"
                    onClick={handleLinkClick}
                    className={`block px-6 py-2 text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200 ${
                      isActive("/gallery/illustrated-photography")
                        ? "underline underline-offset-4 decoration-white/60"
                        : ""
                    }`}
                  >
                    {t.digitalExplorations}
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href="/gallery/art-therapy"
                    onClick={handleLinkClick}
                    className={`block px-6 py-2 text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200 ${
                      isActive("/gallery/art-therapy")
                        ? "underline underline-offset-4 decoration-white/60"
                        : ""
                    }`}
                  >
                    {t.analogueExplorations}
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href="/gallery/monkeybrain"
                    onClick={handleLinkClick}
                    className={`block px-6 py-2 text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200 ${
                      isActive("/gallery/monkeybrain")
                        ? "underline underline-offset-4 decoration-white/60"
                        : ""
                    }`}
                  >
                    {t.monkeybrainMag}
                  </Link>
                </motion.div>
              </div>

              {/* Working With Section */}
              <div className="mt-8">
                <motion.h3
                  className="text-xs uppercase tracking-wider text-white/50 font-semibold px-6 mb-1 pointer-events-none"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {t.workingWith}
                </motion.h3>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href="/quards"
                    onClick={handleLinkClick}
                    className={`block px-6 py-2 text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200 ${
                      isActive("/quards")
                        ? "underline underline-offset-4 decoration-white/60"
                        : ""
                    }`}
                  >
                    {t.startup}
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href="/elgato"
                    onClick={handleLinkClick}
                    className={`block px-6 py-2 text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200 ${
                      isActive("/elgato")
                        ? "underline underline-offset-4 decoration-white/60"
                        : ""
                    }`}
                  >
                    {t.company}
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href="/mascha"
                    onClick={handleLinkClick}
                    className={`block px-6 py-2 text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200 ${
                      isActive("/mascha")
                        ? "underline underline-offset-4 decoration-white/60"
                        : ""
                    }`}
                  >
                    {t.artist}
                  </Link>
                </motion.div>
              </div>
            </motion.nav>

            {/* Social links at bottom */}
            <div className="px-6 pb-8 border-t border-white/10 pt-6">
              <div className="flex gap-8 justify-center">
                <RotateOnHover rotation={15} stiffness={400} damping={8}>
                  <a
                    href="https://tiktok.com/@yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label="TikTok"
                  >
                    <FaTiktok size={32} />
                  </a>
                </RotateOnHover>

                <RotateOnHover rotation={15} stiffness={400} damping={8}>
                  <a
                    href="https://instagram.com/@yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={32} />
                  </a>
                </RotateOnHover>

                <RotateOnHover rotation={15} stiffness={400} damping={8}>
                  <a
                    href="mailto:vioprandetskaya@gmail.com"
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <FaEnvelope size={32} />
                  </a>
                </RotateOnHover>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
