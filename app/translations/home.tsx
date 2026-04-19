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
    ctaDescription:
      "Open for freelance projects, collaborations, and creative adventures.",
    ctaLabel: "Get in Touch",
    viewProjectHint: "View project",
    projectCards: [
      { href: "/monkeybrain", title: "Monkeybrain Magazine", description: "Bachelor thesis magazine in mixed media" },
      { href: "/art-therapy", title: "Analogue Explorations", description: "Process-driven experiments and material play" },
      { href: "/illustrated-photography", title: "Digital Explorations", description: "Digital image-making and narrative scenes" },
      { href: "/mascha", title: "Working with Mascha", description: "Album artwork and visual storytelling", defaultTitle: "Working with an artist" },
      { href: "/quards", title: "Working with Quards", description: "App design and visual identity", defaultTitle: "Working with a startup" },
      { href: "/elgato", title: "Working with Elgato", description: "Product customisation and brand illustration", defaultTitle: "Working with a company" },
    ],
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
    ctaDescription:
      "Offen für Freelance-Projekte, Kollaborationen und kreative Abenteuer.",
    ctaLabel: "Kontakt aufnehmen",
    viewProjectHint: "Projekt ansehen",
    projectCards: [
      { href: "/monkeybrain", title: "Monkeybrain Magazin", description: "Bachelorarbeit-Magazin in Mixed Media" },
      { href: "/art-therapy", title: "Analoge Erkundungen", description: "Prozessorientierte Experimente und Materialspiel" },
      { href: "/illustrated-photography", title: "Digitale Erkundungen", description: "Digitale Bildgestaltung und narrative Szenen" },
      { href: "/mascha", title: "Zusammenarbeit mit Mascha", description: "Album-Artwork und visuelles Geschichtenerzählen", defaultTitle: "Zusammenarbeit mit einer Künstlerin" },
      { href: "/quards", title: "Zusammenarbeit mit Quards", description: "App-Design und visuelle Identität", defaultTitle: "Zusammenarbeit mit einem Startup" },
      { href: "/elgato", title: "Zusammenarbeit mit Elgato", description: "Produktgestaltung und Markenillustration", defaultTitle: "Zusammenarbeit mit einem Unternehmen" },
    ],
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
    ctaDescription:
      "Открыта для фриланс-проектов, коллабораций и творческих приключений.",
    ctaLabel: "Связаться",
    viewProjectHint: "Открыть проект",
    projectCards: [
      { href: "/monkeybrain", title: "Monkeybrain Журнал", description: "Дипломный журнал в технике смешанных медиа" },
      { href: "/art-therapy", title: "Аналоговые исследования", description: "Процессуальные эксперименты и работа с материалом" },
      { href: "/illustrated-photography", title: "Цифровые исследования", description: "Цифровое создание образов и нарративные сцены" },
      { href: "/mascha", title: "Сотрудничество с Машей", description: "Обложки альбомов и визуальный сторителлинг", defaultTitle: "Сотрудничество с художницей" },
      { href: "/quards", title: "Сотрудничество с Quards", description: "Дизайн приложения и визуальная идентичность", defaultTitle: "Сотрудничество со стартапом" },
      { href: "/elgato", title: "Сотрудничество с Elgato", description: "Кастомизация продукта и брендовая иллюстрация", defaultTitle: "Сотрудничество с компанией" },
    ],
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
