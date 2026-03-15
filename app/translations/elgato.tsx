"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang } from "@/app/context/LanguageContext";

const translations = {
  en: {
    heroTitle: "ELGATO",
    heroDescription: "Elgato is a leading creator of hardware and software for content creators, known for products like the Stream Deck, capture cards, microphones, and lighting tools used by streamers and creatives worldwide. I had the opportunity to collaborate with their teams globally on custom product designs and illustrated brand assets, contributing to the visual identity of several releases and campaigns.",
    customsTitle: "Product Customs",
    customsDescription: "I designed custom faceplates for Elgato's Stream Deck and Wave XLR, including the first versions released in their store and various partner collaborations.",
    dreamvilleTitle: "Dreamville x Elgato",
    dreamvilleDescription: "I helped bring the first Dreamville x Elgato Wave 3 microphone to life by crafting its visual identity, exploring color directions, and creating assets used throughout the collaboration's launch.",
    anniversaryTitle: "Anniversary Designs",
    anniversaryDescription: "For Elgato's 10-year anniversary, I developed the event's visual identity, creating limited-edition products featuring a custom pattern, two color palettes, and the Elgato X event logo.",
    summaryText: "Throughout these projects, I faced many challenges and learned a great deal—working across a wide variety of specifications, experimenting with new ideas, and always keeping the brand feeling consistent.",
    giftboxesTitle: "Partner Gift Boxes",
    giftboxesDescription: "I created a series of playful visual narratives for Elgato's partner gift boxes, building imaginative worlds around their brand by working with their logo and products.",
    boxes: [
      {
        title: "Winter Holidays 2022",
        description: "For Elgato's 2022 Holiday Gift Box, I developed two visual narratives: reimagining the Stream Deck as illuminated winter-night windows, and creating an Elgato-inspired gingerbread house.",
      },
      {
        title: "Winter Holidays 2021",
        description: "This gift box brought together a wide range of custom illustrations I developed over time—from Elgato winter-themed stickers to branded posters—all coming together in one cheerful, festive box.",
      },
      {
        title: "Oktoberfest Gift Box",
        description: "Inspired by Munich's Oktoberfest, I created an illustrated gift box combining classic festival elements with Elgato's playful, creative identity.",
      },
    ],
  },
  de: {
    heroTitle: "ELGATO",
    heroDescription: "Elgato ist ein führender Hersteller von Hardware und Software für Content Creator, bekannt für Produkte wie das Stream Deck, Capture Cards, Mikrofone und Beleuchtungstools. Ich hatte die Möglichkeit, mit ihren Teams weltweit an individuellen Produktdesigns und illustrierten Markenassets zusammenzuarbeiten.",
    customsTitle: "Produkt-Customs",
    customsDescription: "Ich entwarf individuelle Frontplatten für Elgatos Stream Deck und Wave XLR, einschließlich der ersten Versionen, die in ihrem Store veröffentlicht wurden.",
    dreamvilleTitle: "Dreamville x Elgato",
    dreamvilleDescription: "Ich half dabei, das erste Dreamville x Elgato Wave 3-Mikrofon zum Leben zu erwecken, indem ich die visuelle Identität entwickelte, Farbrichtungen erkundete und Assets für den Launch der Zusammenarbeit erstellte.",
    anniversaryTitle: "Jubiläumsdesigns",
    anniversaryDescription: "Für Elgatos 10-jähriges Jubiläum entwickelte ich die visuelle Identität des Events und schuf Sonderprodukte mit einem individuellen Muster, zwei Farbpaletten und dem Elgato X Event-Logo.",
    summaryText: "Im Laufe dieser Projekte stand ich vor vielen Herausforderungen und lernte sehr viel – ich arbeitete mit einer Vielzahl von Spezifikationen, experimentierte mit neuen Ideen und sorgte stets für ein konsistentes Markenimage.",
    giftboxesTitle: "Partner-Geschenkboxen",
    giftboxesDescription: "Ich schuf eine Reihe verspielter visueller Erzählungen für Elgatos Partner-Geschenkboxen und baute fantasievolle Welten rund um ihre Marke auf.",
    boxes: [
      {
        title: "Winterfeiertage 2022",
        description: "Für Elgatos Holiday Gift Box 2022 entwickelte ich zwei visuelle Erzählungen: die Neuinterpretation des Stream Decks als beleuchtete Winternachtsfenster und ein Elgato-inspiriertes Lebkuchenhaus.",
      },
      {
        title: "Winterfeiertage 2021",
        description: "Diese Geschenkbox vereinte eine breite Palette individueller Illustrationen, die ich im Laufe der Zeit entwickelt hatte – von Elgato-Winterstickets bis hin zu Markenpostern.",
      },
      {
        title: "Oktoberfest-Geschenkbox",
        description: "Inspiriert vom Münchner Oktoberfest schuf ich eine illustrierte Geschenkbox, die klassische Festivalelemente mit Elgatos verspielter, kreativer Identität verbindet.",
      },
    ],
  },
  ru: {
    heroTitle: "ELGATO",
    heroDescription: "Elgato — ведущий создатель аппаратного и программного обеспечения для контент-мейкеров, известный такими продуктами, как Stream Deck, карты захвата, микрофоны и инструменты освещения. Мне выпала возможность сотрудничать с их командами по всему миру над индивидуальными дизайнами продуктов и иллюстрированными брендовыми активами.",
    customsTitle: "Кастомизация продуктов",
    customsDescription: "Я разработала индивидуальные лицевые панели для Stream Deck и Wave XLR от Elgato, включая первые версии, выпущенные в их магазине.",
    dreamvilleTitle: "Dreamville x Elgato",
    dreamvilleDescription: "Я помогла воплотить в жизнь первый микрофон Dreamville x Elgato Wave 3, создав визуальную идентичность, исследуя цветовые направления и создавая ресурсы для запуска коллаборации.",
    anniversaryTitle: "Юбилейные дизайны",
    anniversaryDescription: "К 10-летию Elgato я разработала визуальную идентичность мероприятия, создав лимитированные продукты с уникальным паттерном, двумя цветовыми палитрами и логотипом события Elgato X.",
    summaryText: "В ходе этих проектов я столкнулась со многими трудностями и многому научилась — работала с самыми разными спецификациями, экспериментировала с новыми идеями, при этом всегда сохраняя единый стиль бренда.",
    giftboxesTitle: "Партнёрские подарочные коробки",
    giftboxesDescription: "Я создала серию игривых визуальных нарративов для партнёрских подарочных коробок Elgato, выстраивая воображаемые миры вокруг их бренда.",
    boxes: [
      {
        title: "Зимние праздники 2022",
        description: "Для праздничной подарочной коробки Elgato 2022 я разработала два визуальных нарратива: переосмысление Stream Deck как освещённых зимних окон и создание пряничного домика в стиле Elgato.",
      },
      {
        title: "Зимние праздники 2021",
        description: "Эта подарочная коробка объединила широкий спектр индивидуальных иллюстраций — от зимних стикеров Elgato до брендированных постеров.",
      },
      {
        title: "Подарочная коробка Октоберфест",
        description: "Вдохновлённая мюнхенским Октоберфестом, я создала иллюстрированную подарочную коробку, сочетающую классические элементы фестиваля с игривой творческой идентичностью Elgato.",
      },
    ],
  },
} as const;

type ElgatoText = typeof translations[keyof typeof translations];

const ElgatoTextContext = createContext<ElgatoText | null>(null);

export function ElgatoTextProvider({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  return (
    <ElgatoTextContext.Provider value={translations[lang]}>
      {children}
    </ElgatoTextContext.Provider>
  );
}

export function useElgatoText(): ElgatoText {
  const ctx = useContext(ElgatoTextContext);
  if (!ctx) throw new Error("useElgatoText must be used within ElgatoTextProvider");
  return ctx;
}
