"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface GlobalNavContextType {
  isGlobalNavOpen: boolean;
  openGlobalNav: () => void;
  closeGlobalNav: () => void;
  toggleGlobalNav: () => void;
}

const GlobalNavContext = createContext<GlobalNavContextType | undefined>(undefined);

export function GlobalNavProvider({ children }: { children: ReactNode }) {
  const [isGlobalNavOpen, setIsGlobalNavOpen] = useState(false);

  // Lock body scroll when nav is open
  useEffect(() => {
    if (isGlobalNavOpen) {
      const origBodyX = document.body.style.overflowX;
      const origBodyY = document.body.style.overflowY;
      const origHtmlX = document.documentElement.style.overflowX;
      const origHtmlY = document.documentElement.style.overflowY;

      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "hidden";
      document.documentElement.style.overflowX = "hidden";
      document.documentElement.style.overflowY = "hidden";

      return () => {
        document.body.style.overflowX = origBodyX;
        document.body.style.overflowY = origBodyY;
        document.documentElement.style.overflowX = origHtmlX;
        document.documentElement.style.overflowY = origHtmlY;
      };
    }
  }, [isGlobalNavOpen]);

  return (
    <GlobalNavContext.Provider value={{
      isGlobalNavOpen,
      openGlobalNav: () => setIsGlobalNavOpen(true),
      closeGlobalNav: () => setIsGlobalNavOpen(false),
      toggleGlobalNav: () => setIsGlobalNavOpen((prev) => !prev),
    }}>
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
