"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang } from "@/app/context/LanguageContext";

const translations = {
  en: {
    heroTitle: "^MASCHA^",
    heroDescription: "In collaboration with musician Mascha, I created three album covers that translate the themes of her music into visual form. Using a mixed-media process, I combined AI-generated imagery, photography, hand-painted illustration, and digital editing to craft layered, cohesive artworks that reflect the depth and atmosphere of her sound.",
    breatheDescription: "This cover explores breath as a force. My work involved illustration and collage, designing a hand-drawn title, a frame-by-frame animation in Procreate, and a full CD design.",
    breatheSubtitle: "Animation & CD Design",
    breatheListen: "Listen",
    kundaliniDescription: "This cover design involved bringing Mascha into a calm underwater world. Working with photographs, this cover involved mainly photo editing and collage work.",
    kundaliniListen: "Listen",
    feelLovedDescription: "This cover design wrapped Mascha in a warm, glowing floral blanket. The work combined photo editing, collage, and illustration, along with hand-drawn lettering for the title.",
    feelLovedSubtitle: "Album Design",
    feelLovedListen: "Listen",
    summaryText: "Working with Mascha allowed me to explore the intersection of music and visual art, translating emotion and sound into imagery through a blend of traditional and digital techniques.",
    navBreathe: "Breathe",
    navKundalini: "Kundalini",
    navFeelLoved: "Feel Loved",
  },
  de: {
    heroTitle: "^MASCHA^",
    heroDescription: "In Zusammenarbeit mit der Musikerin Mascha schuf ich drei Albumcover, die die Themen ihrer Musik in visuelle Form übersetzen. Mit einem Mixed-Media-Prozess kombinierte ich KI-generierte Bilder, Fotografie, handgemalte Illustration und digitale Bearbeitung.",
    breatheDescription: "Dieses Cover erkundet Atem als Kraft. Meine Arbeit umfasste Illustration und Collage, einen handgezeichneten Titel, eine Einzelbild-Animation in Procreate und ein vollständiges CD-Design.",
    breatheSubtitle: "Animation & CD Design",
    breatheListen: "Anhören",
    kundaliniDescription: "Dieses Cover-Design brachte Mascha in eine ruhige Unterwasserwelt. Mit Fotografien als Grundlage umfasste die Arbeit hauptsächlich Fotobearbeitung und Collage.",
    kundaliniListen: "Anhören",
    feelLovedDescription: "Dieses Cover-Design hüllte Mascha in eine warme, leuchtende Blumendecke. Die Arbeit kombinierte Fotobearbeitung, Collage und Illustration sowie handgezeichnete Lettern für den Titel.",
    feelLovedSubtitle: "Album Design",
    feelLovedListen: "Anhören",
    summaryText: "Die Zusammenarbeit mit Mascha ermöglichte es mir, die Schnittstelle von Musik und bildender Kunst zu erkunden und Emotionen und Klang durch eine Mischung aus traditionellen und digitalen Techniken in Bilder zu übersetzen.",
    navBreathe: "Breathe",
    navKundalini: "Kundalini",
    navFeelLoved: "Feel Loved",
  },
  ru: {
    heroTitle: "^MASCHA^",
    heroDescription: "В сотрудничестве с музыкантом Машей я создала три обложки альбомов, переводящих темы её музыки в визуальную форму. Используя смешанные медиа, я объединила изображения, созданные ИИ, фотографию, иллюстрацию и цифровую обработку.",
    breatheDescription: "Эта обложка исследует дыхание как силу. Моя работа включала иллюстрацию и коллаж, разработку рукописного названия, покадровую анимацию в Procreate и полный дизайн CD.",
    breatheSubtitle: "Анимация и дизайн CD",
    breatheListen: "Слушать",
    kundaliniDescription: "Этот дизайн обложки погружал Машу в спокойный подводный мир. Работа с фотографиями включала главным образом редактирование фото и коллаж.",
    kundaliniListen: "Слушать",
    feelLovedDescription: "Этот дизайн обложки укутал Машу в тёплое, светящееся цветочное одеяло. Работа сочетала редактирование фото, коллаж и иллюстрацию, а также рукописные буквы для названия.",
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
