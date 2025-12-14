"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface LoadState {
  lettersLoaded: [boolean, boolean, boolean]; // V, I, O
  allLettersReady: boolean;
}

interface LoadContextType {
  state: LoadState;
  setLetterLoaded: (index: 0 | 1 | 2) => void;
}

const LoadContext = createContext<LoadContextType | null>(null);

export function LoadProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LoadState>({
    lettersLoaded: [false, false, false],
    allLettersReady: false,
  });

  const setLetterLoaded = useCallback((index: 0 | 1 | 2) => {
    setState((prev) => {
      const newLettersLoaded = [...prev.lettersLoaded] as [
        boolean,
        boolean,
        boolean
      ];
      newLettersLoaded[index] = true;
      return {
        lettersLoaded: newLettersLoaded,
        allLettersReady: newLettersLoaded.every(Boolean),
      };
    });
  }, []);

  return (
    <LoadContext.Provider value={{ state, setLetterLoaded }}>
      {children}
    </LoadContext.Provider>
  );
}

export function useLoadState() {
  const context = useContext(LoadContext);
  if (!context) {
    throw new Error("useLoadState must be used within LoadProvider");
  }
  return context;
}
