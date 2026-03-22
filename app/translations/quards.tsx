"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang } from "@/app/context/LanguageContext";

const translations = {
  en: {
    heroTitle: "QUARDS",
    heroDescription:
      "Quards is an indie iPad app for creating hand-drawn flashcards. Working alongside a single developer, I supported the app’s design and later created the visual identity, shaping the overall brand image.",
    appDesignTitle: "App Design",
    appDesignP1:
      "When I came on board, the app existed only as basic functionality. I helped shape its visual design, translating the builder’s vision into a finished product and contributing my own creative touches.",
    appDesignP2:
      "Quards stands out with its layered flashcards, featuring separate question and answer layers. I collaborated with the developer on the user experience, helping introduce this layer system inspired by digital illustration programs.",
    visualIdentityTitle: "Visual Identity",
    visualIdentityP1:
      "The app consists of two basic elements: the circle (folder) and the rounded rectangle (quard), which together form the logo.",
    visualIdentityP2:
      "I developed the visual identity around this concept of squares and circles—cards and folders orbiting in a personal knowledge universe, with the learner at the center.",
    visualIdentityP3:
      "This sense of space and floating elements was extended to the website, highlighting the app’s distinctive components appearing to float in a dynamic digital environment.",
    visualIdentityP4:
      "Additionally, I created illustrated visual examples for the app onboarding, showing the different possibilities of using the app:",
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
    heroDescription:
      "Quards ist eine Indie-iPad-App zum Erstellen handgezeichneter Lernkarten. In enger Zusammenarbeit mit einem einzelnen Entwickler unterstützte ich zunächst das Design der App und entwickelte später die visuelle Identität, die das gesamte Markenbild prägt.",
    appDesignTitle: "App Design",
    appDesignP1:
      "Als ich zum Projekt dazustieß, bestand die App nur aus grundlegender Funktionalität. Ich half dabei, ihr visuelles Design zu formen, die Vision des Entwicklers in ein fertiges Produkt zu übersetzen und eigene kreative Impulse einzubringen.",
    appDesignP2:
      "Quards zeichnet sich durch seine geschichteten Lernkarten mit getrennten Frage- und Antwortebenen aus. Ich arbeitete mit dem Entwickler am User Experience Design und half dabei, dieses von digitalen Illustrationsprogrammen inspirierte Ebenensystem einzuführen.",
    visualIdentityTitle: "Visuelle Identität",
    visualIdentityP1:
      "Die App besteht aus zwei Grundelementen: dem Kreis (Ordner) und dem abgerundeten Rechteck (Quard), die zusammen das Logo bilden.",
    visualIdentityP2:
      "Ich entwickelte die visuelle Identität rund um dieses Konzept von Quadraten und Kreisen – Karten und Ordner, die in einem persönlichen Wissensuniversum mit dem Lernenden im Zentrum kreisen.",
    visualIdentityP3:
      "Dieses Gefühl von Raum und schwebenden Elementen wurde auf die Website übertragen und hebt die charakteristischen Bestandteile der App hervor, die in einer dynamischen digitalen Umgebung zu schweben scheinen.",
    visualIdentityP4:
      "Zusätzlich erstellte ich illustrierte visuelle Beispiele für das Onboarding der App, die die verschiedenen Nutzungsmöglichkeiten der App zeigen:",
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
    heroDescription:
      "Quards — независимое iPad-приложение для создания рукописных карточек. Работая вместе с одним разработчиком, я поддерживала дизайн приложения, а позже создала визуальную идентичность, сформировав общий образ бренда.",
    appDesignTitle: "Дизайн приложения",
    appDesignP1:
      "Когда я присоединилась к проекту, приложение существовало только как базовая функциональность. Я помогла сформировать его визуальный дизайн, переводя видение разработчика в завершённый продукт и добавляя собственные творческие штрихи.",
    appDesignP2:
      "Quards выделяется своими многослойными карточками с отдельными слоями вопроса и ответа. Я сотрудничала с разработчиком над пользовательским опытом, помогая внедрить эту систему слоёв, вдохновлённую программами цифровой иллюстрации.",
    visualIdentityTitle: "Визуальная идентичность",
    visualIdentityP1:
      "Приложение состоит из двух базовых элементов: круга (папки) и скруглённого прямоугольника (quard), которые вместе образуют логотип.",
    visualIdentityP2:
      "Я разработала визуальную идентичность вокруг концепции квадратов и кругов — карточки и папки, вращающиеся в личной вселенной знаний с учащимся в центре.",
    visualIdentityP3:
      "Это ощущение пространства и парящих элементов было перенесено на сайт, где характерные элементы приложения выглядят так, будто они парят в динамичной цифровой среде.",
    visualIdentityP4:
      "Дополнительно я создала иллюстрированные визуальные примеры для онбординга приложения, показывающие разные возможности его использования:",
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

type QuardsText = (typeof translations)[keyof typeof translations];

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
  if (!ctx)
    throw new Error("useQuardsText must be used within QuardsTextProvider");
  return ctx;
}
