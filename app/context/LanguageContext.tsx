"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

export type Lang = "en" | "de" | "ru";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Sync with localStorage after hydration
  useEffect(() => {
    const stored = localStorage.getItem("vio-lang");
    if (stored === "en" || stored === "de" || stored === "ru") {
      setLangState(stored); // eslint-disable-line react-hooks/set-state-in-effect
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("vio-lang", l);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLang must be used within LanguageProvider");
  }
  return context;
}
