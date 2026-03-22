"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang } from "@/app/context/LanguageContext";

const translations = {
  en: {
    heroTitle: "MASCHA",
    heroDescription:
      "Collaborating with musician Mascha, I designed album covers that realise her vision. By blending photography, hand-painted illustration, digital editing, and AI-generated imagery, I created layered artworks that capture the atmosphere of her albums.",
    breatheDescription:
      "This cover visualizes breath as an expanding circle, capturing Mascha’s immersive sound. I designed the album’s visuals, including a frame-by-frame animation.",
    kundaliniDescription:
      "This cover depicts Mascha in a calm underwater world, created through photo editing and collage, exuding a feeling of peace and serenity.",
    feelLovedDescription:
      "The cover presents Mascha immersed in flowers through illustrated photography, combining photo editing, collage, illustration, and hand-drawn title lettering.",
    navBreathe: "Breathe",
    navKundalini: "Kundalini",
    navFeelLoved: "Feel Loved",
  },
  de: {
    heroTitle: "MASCHA",
    heroDescription:
      "In Zusammenarbeit mit der Musikerin Mascha gestaltete ich Albumcover, die ihre Vision in visuelle Form übersetzen. Durch die Verbindung von Fotografie, handgemalter Illustration, digitaler Bearbeitung und KI-generierten Bildern entstanden vielschichtige Arbeiten, die die Atmosphäre ihrer Alben einfangen.",
    breatheDescription:
      "Dieses Cover visualisiert Atem als sich ausdehnenden Kreis und fängt Maschas immersiven Klang ein. Ich gestaltete die visuellen Elemente des Albums, einschließlich einer Frame-by-Frame-Animation.",
    kundaliniDescription:
      "Dieses Cover zeigt Mascha in einer ruhigen Unterwasserwelt, die durch Fotobearbeitung und Collage entstanden ist.",
    feelLovedDescription:
      "Das Cover zeigt Mascha, eingebettet in Blumen, durch illustrierte Fotografie und verbindet Fotobearbeitung, Collage, Illustration und handgezeichnetes Title-Lettering.",
    navBreathe: "Breathe",
    navKundalini: "Kundalini",
    navFeelLoved: "Feel Loved",
  },
  ru: {
    heroTitle: "MASCHA",
    heroDescription:
      "Сотрудничая с музыкантом Машей, я создавала обложки альбомов, переводящие её видение в визуальную форму. Сочетая фотографию, рукописную иллюстрацию, цифровую обработку и изображения, созданные ИИ, я создала многослойные работы, передающие атмосферу её альбомов.",
    breatheDescription:
      "Эта обложка визуализирует дыхание как расширяющийся круг, передавая захватывающее звучание Маши. Я разработала визуальные материалы для альбома, включая покадровую анимацию.",
    kundaliniDescription:
      "Эта обложка показывает Машу в спокойном подводном мире, созданном с помощью фотомонтажа и коллажа.",
    feelLovedDescription:
      "Обложка показывает Машу, погружённую в цветы, через иллюстрированную фотографию, сочетая фотомонтаж, коллаж, иллюстрацию и рукописный леттеринг названия.",
    navBreathe: "Breathe",
    navKundalini: "Kundalini",
    navFeelLoved: "Feel Loved",
  },
} as const;

type MaschaText = (typeof translations)[keyof typeof translations];

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
  if (!ctx)
    throw new Error("useMaschaText must be used within MaschaTextProvider");
  return ctx;
}
