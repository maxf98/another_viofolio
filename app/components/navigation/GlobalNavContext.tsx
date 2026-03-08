"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface GlobalNavContextType {
  isGlobalNavOpen: boolean;
  isAboutMeOpen: boolean;
  openGlobalNav: () => void;
  closeGlobalNav: () => void;
  toggleGlobalNav: () => void;
  openAboutMe: () => void;
  closeAboutMe: () => void;
}

const GlobalNavContext = createContext<GlobalNavContextType | undefined>(undefined);

export function GlobalNavProvider({ children }: { children: ReactNode }) {
  const [isGlobalNavOpen, setIsGlobalNavOpen] = useState(false);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  // Lock body scroll when either overlay is open
  useEffect(() => {
    if (isGlobalNavOpen || isAboutMeOpen) {
      const originalBodyOverflowX = document.body.style.overflowX;
      const originalBodyOverflowY = document.body.style.overflowY;
      const originalHtmlOverflowX = document.documentElement.style.overflowX;
      const originalHtmlOverflowY = document.documentElement.style.overflowY;

      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "hidden";
      document.documentElement.style.overflowX = "hidden";
      document.documentElement.style.overflowY = "hidden";

      return () => {
        document.body.style.overflowX = originalBodyOverflowX;
        document.body.style.overflowY = originalBodyOverflowY;
        document.documentElement.style.overflowX = originalHtmlOverflowX;
        document.documentElement.style.overflowY = originalHtmlOverflowY;
      };
    }
  }, [isGlobalNavOpen, isAboutMeOpen]);

  const openGlobalNav = () => setIsGlobalNavOpen(true);
  const closeGlobalNav = () => setIsGlobalNavOpen(false);
  const toggleGlobalNav = () => setIsGlobalNavOpen((prev) => !prev);

  const openAboutMe = () => {
    setIsAboutMeOpen(true);
    setIsGlobalNavOpen(false); // Close global nav when opening about me
  };
  const closeAboutMe = () => setIsAboutMeOpen(false);

  return (
    <GlobalNavContext.Provider
      value={{
        isGlobalNavOpen,
        isAboutMeOpen,
        openGlobalNav,
        closeGlobalNav,
        toggleGlobalNav,
        openAboutMe,
        closeAboutMe,
      }}
    >
      {children}
    </GlobalNavContext.Provider>
  );
}

export function useGlobalNav() {
  const context = useContext(GlobalNavContext);
  if (context === undefined) {
    throw new Error("useGlobalNav must be used within a GlobalNavProvider");
  }
  return context;
}
