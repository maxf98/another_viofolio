"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang } from "@/app/context/LanguageContext";

const translations = {
  en: {
    heroTitle: "MASCHA",
    heroDescription: "Collaborating with musician Mascha, I designed album covers that translate her vision into visual form. By blending photography, hand-painted illustration, digital editing, and AI-generated imagery, I created layered artworks that capture the atmosphere of her albums.",
    breatheDescription: "This cover visualizes breath as an expanding circle, capturing Mascha’s immersive sound. I designed the album’s visuals, including a frame-by-frame animation.",
    breatheSubtitle: "Animation & CD Design",
    breatheListen: "Listen",
    kundaliniDescription: "This cover depicts Mascha in a calm underwater world, created through photo editing and collage.",
    kundaliniListen: "Listen",
    feelLovedDescription: "The cover presents Mascha immersed in flowers through illustrated photography, combining photo editing, collage, illustration, and hand-drawn title lettering.",
    feelLovedSubtitle: "Album Design",
    feelLovedListen: "Listen",
    summaryText: "Working with Mascha allowed me to explore the intersection of music and visual art, translating emotion and sound into imagery through a blend of traditional and digital techniques.",
    navBreathe: "Breathe",
    navKundalini: "Kundalini",
    navFeelLoved: "Feel Loved",
  },
  de: {
    heroTitle: "MASCHA",
    heroDescription: "In Zusammenarbeit mit der Musikerin Mascha gestaltete ich Albumcover, die ihre Vision in visuelle Form uebersetzen. Durch die Verbindung von Fotografie, handgemalter Illustration, digitaler Bearbeitung und KI-generierten Bildern entstanden vielschichtige Arbeiten, die die Atmosphaere ihrer Alben einfangen.",
    breatheDescription: "Dieses Cover visualisiert Atem als sich ausdehnenden Kreis und faengt Maschas immersiven Klang ein. Ich gestaltete die visuellen Elemente des Albums, einschliesslich einer Frame-by-Frame-Animation.",
    breatheSubtitle: "Animation & CD Design",
    breatheListen: "Anhören",
    kundaliniDescription: "Dieses Cover zeigt Mascha in einer ruhigen Unterwasserwelt, die durch Fotobearbeitung und Collage entstanden ist.",
    kundaliniListen: "Anhören",
    feelLovedDescription: "Das Cover zeigt Mascha, eingebettet in Blumen, durch illustrierte Fotografie und verbindet Fotobearbeitung, Collage, Illustration und handgezeichnetes Title-Lettering.",
    feelLovedSubtitle: "Album Design",
    feelLovedListen: "Anhören",
    summaryText: "Die Zusammenarbeit mit Mascha ermöglichte es mir, die Schnittstelle von Musik und bildender Kunst zu erkunden und Emotionen und Klang durch eine Mischung aus traditionellen und digitalen Techniken in Bilder zu übersetzen.",
    navBreathe: "Breathe",
    navKundalini: "Kundalini",
    navFeelLoved: "Feel Loved",
  },
  ru: {
    heroTitle: "MASCHA",
    heroDescription: "Сотрудничая с музыкантом Машей, я создавала обложки альбомов, переводящие её видение в визуальную форму. Сочетая фотографию, рукописную иллюстрацию, цифровую обработку и изображения, созданные ИИ, я создала многослойные работы, передающие атмосферу её альбомов.",
    breatheDescription: "Эта обложка визуализирует дыхание как расширяющийся круг, передавая захватывающее звучание Маши. Я разработала визуальные материалы для альбома, включая покадровую анимацию.",
    breatheSubtitle: "Анимация и дизайн CD",
    breatheListen: "Слушать",
    kundaliniDescription: "Эта обложка показывает Машу в спокойном подводном мире, созданном с помощью фотомонтажа и коллажа.",
    kundaliniListen: "Слушать",
    feelLovedDescription: "Обложка показывает Машу, погружённую в цветы, через иллюстрированную фотографию, сочетая фотомонтаж, коллаж, иллюстрацию и рукописный леттеринг названия.",
    feelLovedSubtitle: "Дизайн альбома",
    feelLovedListen: "Слушать",
    summaryText: "Работа с Машей позволила мне исследовать пересечение музыки и визуального искусства, переводя эмоции и звук в образы через сочетание традиционных и цифровых техник.",
    navBreathe: "Breathe",
    navKundalini: "Kundalini",
    navFeelLoved: "Feel Loved",
  },
} as const;

type MaschaText = typeof translations[keyof typeof translations];

const MaschaTextContext = createContext<MaschaText | null>(null);

export function MaschaTextProvider({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  return (
    <MaschaTextContext.Provider value={translations[lang]}>
      {children}
    </MaschaTextContext.Provider>
  );
}

export function useMaschaText(): MaschaText {
  const ctx = useContext(MaschaTextContext);
  if (!ctx) throw new Error("useMaschaText must be used within MaschaTextProvider");
  return ctx;
}
