"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang } from "@/app/context/LanguageContext";

const translations = {
  en: {
    heroTitle: "QUARDS",
    heroDescription: "Quards is an indie iPad app for creating handdrawn flashcards, for which I developed the visual identity and created all assets. As the only designer, working with a single developer, that meant I was responsible for a wide variety of big and small tasks, from designing button icons, to logo design, colors, app store screenshots and themed artworks.",
    appDesignTitle: "App Design",
    appDesignP1: "When I joined the project, the app had no visual design—just basic functionality. I helped transform it into what you see today, bringing the builder's vision to life together with my own additions.",
    appDesignP2: "What makes Quards unique is that instead of having two sides like a regular flashcard, a Quard has layers—a question layer and an answer layer, a decision inspired by digital illustration programs.",
    visualIdentityTitle: "Visual Identity",
    visualIdentityP1: "The app consists of two basic elements: the circle (folder) and the rounded rectangle (quard), which together form the logo.",
    visualIdentityP2: "I developed the visual identity around this concept of squares and circles—cards and folders orbiting in a personal knowledge universe, with the learner at the center.",
    visualIdentityP3: "This idea of space and floating elements was carried through to the website, showing the unique and representative elements of the app—cards, folders, drawings—floating in space.",
    visualIdentityP4: "Quards is about drawing instead of typing, about feeling free and having fun and putting your soul into something that can otherwise feel kind of rigid and boring: studying. The design reflects this through its use of color and handdrawn visual assets.\n\nI created these visuals for the app store and onboarding to showcase what using the app feels like:",
    summaryText: "Being the sole designer on this project taught me to wear many hats—from icon design to brand strategy, from app store assets to marketing materials. It was a rewarding challenge that pushed me to grow in every direction.",
    beforeLabel: "Before",
    afterLabel: "After",
    tapToSeeAfter: "Tap to see after",
    tapToSeeBefore: "Tap to see before",
    tapToSwitch: "Tap to switch",
    tapPreviewToChange: "Tap a preview to change",
    navApp: "App Design",
    navVisualIdentity: "Visual Identity",
  },
  de: {
    heroTitle: "QUARDS",
    heroDescription: "Quards ist eine Indie-iPad-App zum Erstellen handgezeichneter Lernkarten, für die ich die visuelle Identität entwickelt und alle Assets erstellt habe. Als einzige Designerin war ich für eine breite Palette von Aufgaben verantwortlich – von Button-Icons über Logo-Design bis hin zu App-Store-Screenshots.",
    appDesignTitle: "App Design",
    appDesignP1: "Als ich dem Projekt beitrat, hatte die App kein visuelles Design – nur grundlegende Funktionalität. Ich half dabei, sie in das zu verwandeln, was man heute sieht.",
    appDesignP2: "Was Quards einzigartig macht, ist, dass ein Quard statt zwei Seiten wie eine normale Lernkarte Ebenen hat – eine Fragen- und eine Antwortebene, inspiriert von digitalen Illustrationsprogrammen.",
    visualIdentityTitle: "Visuelle Identität",
    visualIdentityP1: "Die App besteht aus zwei Grundelementen: dem Kreis (Ordner) und dem abgerundeten Rechteck (Quard), die zusammen das Logo bilden.",
    visualIdentityP2: "Ich entwickelte die visuelle Identität rund um dieses Konzept von Quadraten und Kreisen – Karten und Ordner, die in einem persönlichen Wissensuniversum mit dem Lernenden im Zentrum kreisen.",
    visualIdentityP3: "Diese Idee von Raum und schwebenden Elementen wurde auf die Website übertragen und zeigt die einzigartigen Elemente der App – Karten, Ordner, Zeichnungen – schwebend im Raum.",
    visualIdentityP4: "Quards dreht sich ums Zeichnen statt Tippen, ums freie Fühlen und darum, seine Seele in etwas zu stecken, das sonst starr und langweilig wirken kann: das Lernen. Das Design spiegelt dies durch Farbe und handgezeichnete visuelle Assets wider.\n\nDiese Visuals habe ich für den App Store und das Onboarding erstellt:",
    summaryText: "Als einzige Designerin dieses Projekts lernte ich, viele Rollen zu übernehmen – von Icon-Design bis Markenstrategie, von App-Store-Assets bis Marketingmaterialien. Es war eine lohnende Herausforderung, die mich in alle Richtungen wachsen ließ.",
    beforeLabel: "Vorher",
    afterLabel: "Nachher",
    tapToSeeAfter: "Tippen, um Nachher zu sehen",
    tapToSeeBefore: "Tippen, um Vorher zu sehen",
    tapToSwitch: "Tippen zum Wechseln",
    tapPreviewToChange: "Vorschau antippen zum Wechseln",
    navApp: "App Design",
    navVisualIdentity: "Visuelle Identität",
  },
  ru: {
    heroTitle: "QUARDS",
    heroDescription: "Quards — независимое iPad-приложение для создания рукописных карточек, для которого я разработала визуальную идентичность и создала все ресурсы. Будучи единственным дизайнером, работающим с одним разработчиком, я отвечала за широкий спектр задач — от иконок кнопок до логотипа, цветов, скриншотов для App Store и тематических иллюстраций.",
    appDesignTitle: "Дизайн приложения",
    appDesignP1: "Когда я присоединилась к проекту, приложение не имело визуального дизайна — только базовая функциональность. Я помогла превратить его в то, что вы видите сегодня.",
    appDesignP2: "Уникальность Quards в том, что вместо двух сторон, как у обычной карточки, у Quard есть слои — слой вопроса и слой ответа, вдохновлённые программами цифровой иллюстрации.",
    visualIdentityTitle: "Визуальная идентичность",
    visualIdentityP1: "Приложение состоит из двух базовых элементов: круга (папки) и скруглённого прямоугольника (quard), которые вместе образуют логотип.",
    visualIdentityP2: "Я разработала визуальную идентичность вокруг концепции квадратов и кругов — карточки и папки, вращающиеся в личной вселенной знаний с учащимся в центре.",
    visualIdentityP3: "Идея пространства и парящих элементов была перенесена на сайт, демонстрирующий уникальные элементы приложения — карточки, папки, рисунки — парящими в пространстве.",
    visualIdentityP4: "Quards — это про рисование вместо печатания, про свободу и удовольствие, про вкладывание души во что-то, что иначе кажется скучным: учёбу. Дизайн отражает это через цвет и нарисованные вручную визуальные элементы.\n\nЭти материалы я создала для App Store и онбординга:",
    summaryText: "Будучи единственным дизайнером проекта, я научилась совмещать множество ролей — от дизайна иконок до стратегии бренда, от ресурсов App Store до маркетинговых материалов. Это был ценный опыт, который помог мне расти во всех направлениях.",
    beforeLabel: "До",
    afterLabel: "После",
    tapToSeeAfter: "Нажмите, чтобы увидеть после",
    tapToSeeBefore: "Нажмите, чтобы увидеть до",
    tapToSwitch: "Нажмите, чтобы переключить",
    tapPreviewToChange: "Нажмите превью для смены",
    navApp: "Дизайн приложения",
    navVisualIdentity: "Визуальная идентичность",
  },
} as const;

type QuardsText = typeof translations[keyof typeof translations];

const QuardsTextContext = createContext<QuardsText | null>(null);

export function QuardsTextProvider({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  return (
    <QuardsTextContext.Provider value={translations[lang]}>
      {children}
    </QuardsTextContext.Provider>
  );
}

export function useQuardsText(): QuardsText {
  const ctx = useContext(QuardsTextContext);
  if (!ctx) throw new Error("useQuardsText must be used within QuardsTextProvider");
  return ctx;
}
