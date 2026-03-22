"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGlobalNav } from "./GlobalNavContext";
import { useLang } from "@/app/context/LanguageContext";
import { globalNavText } from "@/app/translations/globalNav";
import LanguageToggle from "@/app/components/LanguageToggle";
import SocialLinks from "@/app/components/SocialLinks";

export default function GlobalNav() {
  const { isGlobalNavOpen, closeGlobalNav } = useGlobalNav();
  const { lang } = useLang();
  const t = globalNavText[lang];
  const pathname = usePathname();
  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const handleLinkClick = () => {
    closeGlobalNav();
  };

  const isActive = (path: string) => pathname === path;
  const linkClass =
    "block w-full rounded-sm px-6 py-2 text-left font-[var(--nav-link-weight)] text-[length:var(--nav-link-size)] text-[var(--nav-link-color)] transition-all duration-200 hover:bg-white/5 hover:text-white max-md:py-1.5 max-md:text-base max-md:landscape:px-3";
  const headingClass =
    "mb-1 px-6 font-semibold uppercase tracking-wider text-[length:var(--nav-label-size)] text-[var(--nav-label-color)] pointer-events-none max-md:px-0 max-md:landscape:px-0";

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
            className="absolute inset-y-0 right-0 z-[19999] flex w-full flex-col bg-white/10 text-white backdrop-blur-lg border-white/15 md:w-full md:max-w-md md:border-l"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            aria-label="Global navigation menu"
          >
            {/* Language toggle at top */}
            <div className="flex justify-center border-b border-white/10 px-5 pb-4 pt-16 max-md:portrait:px-20 max-md:portrait:pb-3 max-md:portrait:pt-5 max-md:landscape:px-20 max-md:landscape:pb-3 max-md:landscape:pt-5 md:px-6 md:pb-6 md:pt-20">
              <LanguageToggle />
            </div>

            {/* Navigation links */}
            <motion.nav
              className="flex-1 overflow-y-auto py-6 max-md:flex max-md:flex-col max-md:justify-center md:py-8"
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
              <div className="my-auto flex flex-col gap-8 px-6 max-md:landscape:grid max-md:landscape:[grid-template-columns:minmax(0,0.7fr)_minmax(0,1fr)_minmax(0,1fr)] max-md:landscape:items-start max-md:landscape:gap-x-4 max-md:landscape:gap-y-0 max-md:landscape:px-6">
                <div className="min-w-0 space-y-1 max-md:landscape:space-y-0.5">
                  <motion.h3
                    className={`${headingClass} invisible`}
                    variants={itemVariants}
                    aria-hidden
                  >
                    {t.personalArchive}
                  </motion.h3>
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/"
                      onClick={handleLinkClick}
                      className={`${linkClass} ${
                        isActive("/")
                          ? "underline underline-offset-4 decoration-white/60"
                          : ""
                      }`}
                    >
                      {t.home}
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/about"
                      onClick={handleLinkClick}
                      className={`${linkClass} ${isActive("/about") ? "underline underline-offset-4 decoration-white/60" : ""}`}
                    >
                      {t.aboutMe}
                    </Link>
                  </motion.div>
                </div>

                <div className="min-w-0 max-md:landscape:mt-0">
                  <motion.h3 className={headingClass} variants={itemVariants}>
                    {t.personalArchive}
                  </motion.h3>
                  <div className="space-y-1 max-md:landscape:space-y-0.5">
                    <motion.div variants={itemVariants}>
                      <Link
                        href="/illustrated-photography"
                        onClick={handleLinkClick}
                        className={`${linkClass} ${
                          isActive("/illustrated-photography")
                            ? "underline underline-offset-4 decoration-white/60"
                            : ""
                        }`}
                      >
                        {t.digitalExplorations}
                      </Link>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Link
                        href="/art-therapy"
                        onClick={handleLinkClick}
                        className={`${linkClass} ${
                          isActive("/art-therapy")
                            ? "underline underline-offset-4 decoration-white/60"
                            : ""
                        }`}
                      >
                        {t.analogueExplorations}
                      </Link>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Link
                        href="/monkeybrain"
                        onClick={handleLinkClick}
                        className={`${linkClass} ${
                          isActive("/monkeybrain")
                            ? "underline underline-offset-4 decoration-white/60"
                            : ""
                        }`}
                      >
                        {t.monkeybrainMag}
                      </Link>
                    </motion.div>
                  </div>
                </div>

                <div className="min-w-0 max-md:landscape:mt-0">
                  <motion.h3 className={headingClass} variants={itemVariants}>
                    {t.workingWith}
                  </motion.h3>
                  <div className="space-y-1 max-md:landscape:space-y-0.5">
                    <motion.div variants={itemVariants}>
                      <Link
                        href="/elgato"
                        onClick={handleLinkClick}
                        className={`${linkClass} ${
                          isActive("/elgato")
                            ? "underline underline-offset-4 decoration-white/60"
                            : ""
                        }`}
                      >
                        {t.company}
                      </Link>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Link
                        href="/quards"
                        onClick={handleLinkClick}
                        className={`${linkClass} ${
                          isActive("/quards")
                            ? "underline underline-offset-4 decoration-white/60"
                            : ""
                        }`}
                      >
                        {t.startup}
                      </Link>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Link
                        href="/mascha"
                        onClick={handleLinkClick}
                        className={`${linkClass} ${
                          isActive("/mascha")
                            ? "underline underline-offset-4 decoration-white/60"
                            : ""
                        }`}
                      >
                        {t.artist}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.nav>

            {/* Social links at bottom */}
            <div className="border-t border-white/10 px-5 pb-5 pt-4 max-md:landscape:px-6 max-md:landscape:pb-3 max-md:landscape:pt-3 md:px-6 md:pb-8 md:pt-6">
              <SocialLinks
                size={28}
                iconClass="text-white/70 hover:text-white transition-colors"
                className="justify-center gap-6 md:gap-8"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
