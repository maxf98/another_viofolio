"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang } from "@/app/context/LanguageContext";

const translations = {
  en: {
    heroTitle: "ELGATO",
    heroDescription:
      "Elgato creates tools for content creators, from streaming hardware to creative production gear. I collaborated with their team on a variety of illustration and design projects, contributing to product releases, brand collaborations, and special campaigns.",
    customsTitle: "Product Customs",
    customsDescription:
      "I worked on a variety of custom faceplate designs for Elgato's Stream Deck and Wave XLR, developing concepts and bringing them to life across partner collaborations and store releases.",
    dreamvilleTitle: "Dreamville x Elgato",
    dreamvilleDescription:
      "I had the opportunity to design the visual assets for the Dreamville x Elgato Wave:3 collaboration, translating the Dreamville brand onto the microphone through illustration, color, and composition.",
    anniversaryTitle: "Anniversary Designs",
    anniversaryDescription:
      "For Elgato’s 10-year anniversary, I designed the visual identity for the event, creating limited-edition products featuring a custom pattern and the event’s logo.",
    summaryText:
      "Throughout these projects, I faced many challenges and learned a great deal—working across a wide variety of specifications, experimenting with new ideas, and always keeping the brand feeling consistent.",
    giftboxesTitle: "Partner Gift Boxes",
    giftboxesDescription:
      "I created playful visual narratives for Elgato’s partner gift boxes, transforming their products and logo into imaginative illustrated worlds.",
    boxes: [
      {
        title: "Winter Lights",
        description:
          "Inspired by the Stream Deck buttons, I imagined each button as a window into other people's homes, celebrating the diversity of winter holidays. The Winter Lights design appeared on the Stream Deck and packaging, complemented by an illustrated gingerbread house featured in the box and promotional materials.",
      },
      {
        title: "Winter Trails",
        description:
          "For this winter gift box, I created a snowy world, integrating the Elgato brand into playful winter-themed environments. The box brought together a variety of custom illustrations I developed over time, from Elgato-themed stickers to branded posters, all combined into one cohesive and imaginative package.",
      },
      {
        title: "Oktoberfest Gift Box",
        description:
          "Inspired by Munich’s Oktoberfest, I designed an illustrated gift box that blends traditional festival elements with Elgato’s playful and creative brand identity.",
      },
    ],
  },
  de: {
    heroTitle: "ELGATO",
    heroDescription:
      "Elgato ist ein Unternehmen, das für Tools für Content Creator bekannt ist - von Streaming-Hardware bis hin zu Equipment für kreative Produktionen. Ich arbeitete mit ihrem Team an einer Vielzahl von Illustrations- und Designprojekten und trug zu Produktveröffentlichungen, Brand-Kollaborationen und besonderen Kampagnen bei.",
    customsTitle: "Produkt-Customs",
    customsDescription:
      "Ich arbeitete an einer Vielzahl individueller Faceplate-Designs fuer Elgatos Stream Deck und Wave XLR, entwickelte Konzepte und setzte sie fuer Partner-Kollaborationen und Store-Releases um.",
    dreamvilleTitle: "Dreamville x Elgato",
    dreamvilleDescription:
      "Ich hatte die Moeglichkeit, die visuellen Assets fuer die Dreamville x Elgato Wave:3 Kollaboration zu gestalten und die Dreamville-Marke durch Illustration, Farbe und Komposition auf das Mikrofon zu uebersetzen.",
    anniversaryTitle: "Jubiläums designs",
    anniversaryDescription:
      "Fuer Elgatos 10-jaehriges Jubilaeum gestaltete ich die visuelle Identitaet des Events und schuf limitierte Produkte mit einem individuellen Muster und dem Logo des Events.",
    summaryText:
      "Im Laufe dieser Projekte stand ich vor vielen Herausforderungen und lernte sehr viel – ich arbeitete mit einer Vielzahl von Spezifikationen, experimentierte mit neuen Ideen und sorgte stets für ein konsistentes Markenimage.",
    giftboxesTitle: "Partner Geschenk Boxen",
    giftboxesDescription:
      "Ich schuf verspielte visuelle Erzaehlungen fuer Elgatos Partner-Geschenkboxen und verwandelte ihre Produkte und ihr Logo in imaginative illustrierte Welten.",
    boxes: [
      {
        title: "Winterfeiertage 2022",
        description:
          "Inspiriert von den Stream-Deck-Tasten stellte ich mir jede Taste als Fenster in die Haeuser anderer Menschen vor und feierte so die Vielfalt winterlicher Feiertage. Das Winter-Lights-Design erschien auf dem Stream Deck und der Verpackung, ergaenzt durch ein illustriertes Lebkuchenhaus, das in der Box und in den Werbematerialien auftauchte.",
      },
      {
        title: "Winterpfade",
        description:
          "Fuer diese winterliche Geschenkbox erschuf ich eine verschneite Welt und integrierte die Elgato-Marke in verspielte winterliche Umgebungen. Die Box vereinte eine Vielzahl individueller Illustrationen, die ich im Laufe der Zeit entwickelt hatte - von Elgato-inspirierten Stickern bis hin zu Markenpostern, alles zusammengefuehrt in einem stimmigen und fantasievollen Gesamtpaket.",
      },
      {
        title: "Oktoberfest-Geschenkbox",
        description:
          "Inspiriert vom Muenchner Oktoberfest gestaltete ich eine illustrierte Geschenkbox, die traditionelle Festivalelemente mit Elgatos verspielter und kreativer Markenidentitaet verbindet.",
      },
    ],
  },
  ru: {
    heroTitle: "ELGATO",
    heroDescription:
      "Elgato — компания, известная своими инструментами для контент-мейкеров: от стримингового оборудования до устройств для креативного продакшена. Я сотрудничала с их командой над различными иллюстрационными и дизайн-проектами, внося вклад в продуктовые релизы, брендовые коллаборации и специальные кампании.",
    customsTitle: "Кастомизация продуктов",
    customsDescription:
      "Я работала над различными дизайнами кастомных лицевых панелей для Elgato Stream Deck и Wave XLR, разрабатывая концепции и воплощая их для партнёрских коллабораций и релизов в магазине.",
    dreamvilleTitle: "Dreamville x Elgato",
    dreamvilleDescription:
      "У меня была возможность разработать визуальные материалы для коллаборации Dreamville x Elgato Wave:3, перенеся бренд Dreamville на микрофон через иллюстрацию, цвет и композицию.",
    anniversaryTitle: "Юбилейные дизайны",
    anniversaryDescription:
      "К 10-летию Elgato я разработала визуальную идентичность мероприятия, создав лимитированные продукты с собственным паттерном и логотипом события.",
    summaryText:
      "В ходе этих проектов я столкнулась со многими трудностями и многому научилась — работала с самыми разными спецификациями, экспериментировала с новыми идеями, при этом всегда сохраняя единый стиль бренда.",
    giftboxesTitle: "Партнёрские подарочные коробки",
    giftboxesDescription:
      "Я создала игривые визуальные нарративы для партнёрских подарочных коробок Elgato, превращая их продукты и логотип в воображаемые иллюстрированные миры.",
    boxes: [
      {
        title: "Зимние праздники 2022",
        description:
          "Вдохновившись кнопками Stream Deck, я представила каждую кнопку как окно в дома других людей, отмечая разнообразие зимних праздников. Дизайн Winter Lights появился на Stream Deck и упаковке, а также был дополнен иллюстрированным пряничным домиком, который использовался в коробке и промоматериалах.",
      },
      {
        title: "Зимние тропы",
        description:
          "Для этой зимней подарочной коробки я создала снежный мир, интегрировав бренд Elgato в игривые зимние окружения. Коробка объединила разнообразные индивидуальные иллюстрации, которые я разрабатывала со временем, от стикеров в стиле Elgato до брендированных постеров, собранных в один цельный и воображаемый комплект.",
      },
      {
        title: "Подарочная коробка Октоберфест",
        description:
          "Вдохновлённая мюнхенским Октоберфестом, я разработала иллюстрированную подарочную коробку, объединяющую традиционные элементы фестиваля с игривой и творческой бренд-идентичностью Elgato.",
      },
    ],
  },
} as const;

type ElgatoText = (typeof translations)[keyof typeof translations];

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
  if (!ctx)
    throw new Error("useElgatoText must be used within ElgatoTextProvider");
  return ctx;
}
