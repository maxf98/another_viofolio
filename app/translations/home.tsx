"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang } from "@/app/context/LanguageContext";

const translations = {
  en: {
    navGallery: "personal archive",
    navElgato: "elgato",
    navQuards: "quards",
    navMascha: "mascha",
    aboutButton: "About Me",
    aboutParagraphs: [
      "Hi, I'm Vio - an artist, illustrator, and designer based in Munich, Germany. I create expressive illustrations and designs with a playful, narrative-driven approach, where storytelling sits at the core of my practice.",
      "I began my professional journey at NABA Milan, where I completed a Bachelor's degree in Graphic Design and Art Direction. Since then, I've been working as a freelance illustrator and designer, alongside studying art therapy, which has deepened my interest in intuition, emotional expression, and process-led making.",
      "Much of my personal practice is rooted in experimentation and chance. I often begin with photographs of nature, spaces, and patterns, then reshape them into imagined narratives. My analogue process is also informed by art therapy methods, creating space for intuition, reflection, and gentle discovery.",
      "In my client work, I combine these personal interests with each brief, responding closely to what the client needs while weaving in elements of my own playful visual world.",
    ],
    ctaLabel: "Get in Touch",
  },
  de: {
    navGallery: "persönliches Archiv",
    navElgato: "elgato",
    navQuards: "quards",
    navMascha: "mascha",
    aboutButton: "Über mich",
    aboutParagraphs: [
      "Hallo, ich bin Vio – Künstlerin, Illustratorin und Designerin aus München. Ich schaffe ausdrucksstarke Illustrationen und Designs mit einem spielerischen, narrativen Ansatz, bei dem Geschichtenerzählen im Mittelpunkt meiner Arbeit steht.",
      "Meine professionelle Laufbahn begann an der NABA Mailand, wo ich einen Bachelor in Grafikdesign und Art Direction abschloss. Seitdem arbeite ich als freiberufliche Illustratorin und Designerin und studiere gleichzeitig Kunsttherapie, was mein Interesse an Intuition, emotionalem Ausdruck und prozessgesteuertem Schaffen vertieft hat.",
    ],
    ctaLabel: "Kontakt aufnehmen",
  },
  ru: {
    navGallery: "личный архив",
    navElgato: "elgato",
    navQuards: "quards",
    navMascha: "mascha",
    aboutButton: "Обо мне",
    aboutParagraphs: [
      "Привет, я Вио — художница, иллюстратор и дизайнер из Мюнхена. Я создаю выразительные иллюстрации и дизайн с игривым, нарративным подходом, где рассказывание историй лежит в основе моей практики.",
      "Я начала свой профессиональный путь в NABA Milan, где получила степень бакалавра по графическому дизайну и арт-дирекции. С тех пор я работаю как фриланс-иллюстратор и дизайнер, параллельно изучая арт-терапию, что углубило мой интерес к интуиции, эмоциональному выражению и процессному творчеству.",
    ],
    ctaLabel: "Связаться",
  },
} as const;

type HomeText = typeof translations[keyof typeof translations];

const HomeTextContext = createContext<HomeText | null>(null);

export function HomeTextProvider({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  return (
    <HomeTextContext.Provider value={translations[lang]}>
      {children}
    </HomeTextContext.Provider>
  );
}

export function useHomeText(): HomeText {
  const ctx = useContext(HomeTextContext);
  if (!ctx) throw new Error("useHomeText must be used within HomeTextProvider");
  return ctx;
}
