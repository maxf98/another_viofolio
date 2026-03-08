"use client";

import { useLang, Lang } from "@/app/context/LanguageContext";

const LANGS: Lang[] = ["en", "de"];

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1 text-lg md:text-xl font-medium tracking-wide">
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          <button
            onClick={() => setLang(l)}
            className={`uppercase px-1.5 py-1 md:px-1 md:py-0.5 transition-all ${
              lang === l
                ? "text-white underline underline-offset-2 decoration-white/50"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {l}
          </button>
          {i < LANGS.length - 1 && <span className="text-white/20">/</span>}
        </span>
      ))}
    </div>
  );
}
