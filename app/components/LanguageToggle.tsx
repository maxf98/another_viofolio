"use client";

import { useLang, Lang } from "@/app/context/LanguageContext";

const LANGS: Lang[] = ["en", "de", "ru"];

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1 text-xs font-medium tracking-wide">
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          <button
            onClick={() => setLang(l)}
            className={`uppercase transition-opacity ${
              lang === l ? "text-white opacity-100" : "text-white/40 hover:text-white/70"
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
