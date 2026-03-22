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
      "Elgato regularly creates custom and limited edition prints of their products, for general sale, partnerships or events. I designed a number of these, developing concepts that fit the brand and customer base, and then bringing these to life. I've included some of my favorites below. Click through!",
    dreamvilleTitle: "Dreamville x Elgato",
    dreamvilleDescription:
      "I had the opportunity to design the visual assets for the Dreamville x Elgato Wave:3 collaboration, translating the Dreamville brand onto the microphone through illustration, color, and composition.",
    anniversaryTitle: "Anniversary Designs",
    anniversaryDescription:
      "Elgato celebrated their 10-year anniversary with some limited-edition products, for which I designed a matching pattern and logo, reusable across different touchpoints. I made the elgato logo the central element of the pattern, connected by the logo for the event itself.",
    summaryText:
      "Throughout these projects, I faced many challenges and learned a great deal—working across a wide variety of specifications, experimenting with new ideas, and always keeping the brand feeling consistent.",
    giftboxesTitle: "Gift Boxes",
    giftboxesDescription:
      "Elgato sends out giftboxes to celebrate special occasions. I designed a few of these, from the box itself, to the assets inside, and the promotional materials around them, creating playful visual narratives.",
    boxes: [
      {
        title: "Windows to Worlds",
        description:
          "Inspired by the Stream Deck, I imagined each button as a window into other people's homes, celebrating the diversity of the winter holidays. To complement the perfect geometry of the Stream Deck, I decided to go with vector art for this one.",
      },
      {
        title: "Snow Pixels",
        description:
          "I used pixel art to bring together 'Tech company' and 'snow', personalising Elgato and embedding it into a winter wonderland. Beyond the gift box itself, the assets I created were used in promotional content across website and social media. ",
      },
      {
        title: "Creatorfest",
        description:
          "To celebrate Oktoberfest, I wanted to create a 'Wimmelbild' illustration that captures its busy, bustly nature, and also allows me to seamlessly include multiple different Elgato products. The Elgato product ecosystem becomes the amusement park, the place for celebration and free expression.",
      },
    ],
  },
  de: {
    heroTitle: "ELGATO",
    heroDescription:
      "Elgato entwickelt Tools für Content Creator – von Streaming-Hardware bis hin zu Equipment für kreative Produktionen. Ich arbeitete mit ihrem Team an einer Vielzahl von Illustrations- und Designprojekten und trug zu Produktveröffentlichungen, Markenkooperationen und besonderen Kampagnen bei.",
    customsTitle: "Produkt-Customs",
    customsDescription:
      "Elgato bringt regelmäßig individuelle und limitierte Editionen seiner Produkte heraus – für den freien Verkauf, Partnerschaften oder Events. Ich entwarf einige davon, entwickelte Konzepte, die zur Marke und zur Community passen, und setzte sie anschließend um. Ein paar meiner Favoriten gibt es unten zu sehen. Einfach durchklicken!",
    dreamvilleTitle: "Dreamville x Elgato",
    dreamvilleDescription:
      "Ich hatte die Möglichkeit, die visuellen Assets für die Dreamville x Elgato Wave:3 Kollaboration zu gestalten und die Dreamville-Marke durch Illustration, Farbe und Komposition auf das Mikrofon zu übersetzen.",
    anniversaryTitle: "Jubiläumsdesigns",
    anniversaryDescription:
      "Elgato feierte sein 10-jähriges Jubiläum mit limitierten Produkten, für die ich ein passendes Muster und Logo entwarf, das an verschiedenen Touchpoints eingesetzt werden konnte. Das Elgato-Logo machte ich zum zentralen Element des Musters, verbunden durch das Logo des Events selbst.",
    summaryText:
      "Im Laufe dieser Projekte stand ich vor vielen Herausforderungen und lernte sehr viel – ich arbeitete mit den unterschiedlichsten Spezifikationen, experimentierte mit neuen Ideen und sorgte stets dafür, dass sich die Marke konsistent anfühlt.",
    giftboxesTitle: "Gift Boxes",
    giftboxesDescription:
      "Elgato verschickt Geschenkboxen zu besonderen Anlässen. Ich gestaltete einige davon – von der Box selbst über die enthaltenen Materialien bis hin zu den Werbemitteln – und schuf dabei verspielte visuelle Erzählungen.",
    boxes: [
      {
        title: "Windows to Worlds",
        description:
          "Inspiriert vom Stream Deck stellte ich mir jede Taste als Fenster in die Häuser anderer Menschen vor und feierte so die Vielfalt der Winterfeiertage. Um die perfekte Geometrie des Stream Decks zu ergänzen, entschied ich mich für Vektorgrafik.",
      },
      {
        title: "Snow Pixels",
        description:
          "Mit Pixel Art verband ich 'Tech-Unternehmen' und 'Schnee', personalisierte Elgato und betttete es in ein winterliches Wunderland ein. Über die Geschenkbox hinaus wurden die erstellten Assets in Werbeinhalten auf der Website und in sozialen Medien verwendet.",
      },
      {
        title: "Creatorfest",
        description:
          "Zum Oktoberfest wollte ich eine Wimmelbild-Illustration schaffen, die das geschäftige, lebhafte Treiben einfängt und es mir gleichzeitig ermöglicht, verschiedene Elgato-Produkte nahtlos einzubinden. Das Elgato-Produktuniversum wird zum Vergnügungspark – ein Ort zum Feiern und für freien Ausdruck.",
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
