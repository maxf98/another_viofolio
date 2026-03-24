"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang } from "@/app/context/LanguageContext";

const translations = {
  en: {
    heroTitle: "ELGATO",
    heroDescription:
      "Elgato creates tools for content creators, from streaming hardware to creative production gear. I collaborated with their team on a variety of illustration and design projects, contributing to product releases, brand collaborations, and special campaigns.",
    customsTitle: "Product Customisation",
    customsDescription:
      "I designed custom faceplates for Elgato's Stream Deck and Wave XLR, collaborating with their design and printing teams to bring concepts to life. Working within product constraints, I created engaging visuals that aligned with the brand's tech-focused identity and became official products used by customers worldwide.",
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
        title: "Winter Windows",
        description:
          "This project focused on celebrating diversity during the holiday season while representing the Elgato brand. I developed two connected concepts. The first drew inspiration from the Stream Deck, reimagining each button as a window into different homes, offering a glimpse into unique holiday traditions while subtly integrating Elgato products into everyday festive moments. The second explored a gingerbread house theme, presenting a stylized interpretation of a classic holiday symbol. The project involved creating detailed vector illustrations and translating Elgato's visual language into a playful winter context, balancing festive storytelling with brand consistency.",
      },
      {
        title: "Snow Pixels",
        description:
          "This project brought together a range of my creative work for Elgato, aimed at creating a playful and engaging winter holiday gift experience. The brief was to make the Elgato brand feel fun, approachable, and festive while remaining true to its tech-focused identity.\nThe box centers on personifying the Elgato logo in a snowy winter theme, using a pixel art–styled pattern and illustration to unify the assets. I also designed additional items for the box, including illustrative posters and stickers, working across multiple styles to add a playful and approachable touch to the brand. I collaborated closely with the Elgato team, iterating on concepts and exploring various visual approaches to ensure the designs felt diverse yet cohesive.",
      },
      {
        title: "Creatorfest",
        description:
          "As Elgato is based in Munich, I was asked to create an Oktoberfest-themed gift box for their partners, offering a playful glimpse into Bavarian culture. Inspired by the festival's busy, lively atmosphere, I developed a Wimmelbild-style illustration to capture its bustling energy while seamlessly incorporating multiple Elgato products.\nIn this concept, Elgato products become part of the celebration—rollercoasters, attractions, and playful activities—turning the Elgato ecosystem into an amusement park. The design merges Oktoberfest's festive spirit with the brand's identity, creating a unique, fun, and immersive experience that celebrates both culture and technology.",
      },
    ],
  },
  de: {
    heroTitle: "ELGATO",
    heroDescription:
      "Elgato entwickelt Tools für Content Creator – von Streaming-Hardware bis hin zu Equipment für kreative Produktionen. Ich arbeitete mit ihrem Team an einer Vielzahl von Illustrations- und Designprojekten und trug zu Produktveröffentlichungen, Markenkooperationen und besonderen Kampagnen bei.",
    customsTitle: "Product Customisation",
    customsDescription:
      "Ich entwarf individuelle Frontplatten für Elgatos Stream Deck und Wave XLR und arbeitete dabei eng mit den Design- und Druckteams zusammen, um Konzepte zum Leben zu erwecken. Im Rahmen der Produktvorgaben entwickelte ich ansprechende Visuals, die zur technikorientierten Identität der Marke passten und zu offiziellen Produkten wurden, die weltweit von Kunden genutzt werden.",
    dreamvilleTitle: "Dreamville x Elgato",
    dreamvilleDescription:
      "Ich hatte die Möglichkeit, die visuellen Assets für die Dreamville x Elgato Wave:3 Kollaboration zu gestalten und die Dreamville-Marke durch Illustration, Farbe und Komposition auf das Mikrofon zu übersetzen.",
    anniversaryTitle: "Anniversary Designs",
    anniversaryDescription:
      "Elgato feierte sein 10-jähriges Jubiläum mit limitierten Produkten, für die ich ein passendes Muster und Logo entwarf, das an verschiedenen Touchpoints eingesetzt werden konnte. Das Elgato-Logo machte ich zum zentralen Element des Musters, verbunden durch das Logo des Events selbst.",
    summaryText:
      "Im Laufe dieser Projekte stand ich vor vielen Herausforderungen und lernte sehr viel – ich arbeitete mit den unterschiedlichsten Spezifikationen, experimentierte mit neuen Ideen und sorgte stets dafür, dass sich die Marke konsistent anfühlt.",
    giftboxesTitle: "Gift Boxes",
    giftboxesDescription:
      "Elgato verschickt Geschenkboxen zu besonderen Anlässen. Ich gestaltete einige davon – von der Box selbst über die enthaltenen Materialien bis hin zu den Werbemitteln – und schuf dabei verspielte visuelle Erzählungen.",
    boxes: [
      {
        title: "Winter Windows",
        description:
          "Dieses Projekt stand im Zeichen der Vielfalt in der Winterferienzeit und der Repräsentation der Elgato-Marke. Ich entwickelte zwei miteinander verbundene Konzepte. Das erste ließ sich vom Stream Deck inspirieren und stellte sich jede Taste als Fenster in verschiedene Zuhause vor – ein Blick auf einzigartige Festtraditionen, während Elgato-Produkte dezent in festliche Alltagsmomente integriert wurden. Das zweite erkundete das Thema Lebkuchenhaus als stilisierte Interpretation eines klassischen Wintersymbols. Das Projekt umfasste detaillierte Vektorgrafiken und die Übertragung von Elgatos visuellem Ausdruck in einen verspielten Winterkontext.",
      },
      {
        title: "Snow Pixels",
        description:
          "Dieses Projekt bündelte eine Reihe meiner kreativen Arbeiten für Elgato mit dem Ziel, ein verspieltes und ansprechendes Wintergeschenkerlebnis zu schaffen. Das Briefing lautete: Die Elgato-Marke soll sich spaßig, zugänglich und festlich anfühlen – und dabei ihrer technikorientierten Identität treu bleiben.\nDie Box dreht sich darum, das Elgato-Logo in einem verschneiten Winterthema zu personifizieren, wobei ein Pixel-Art-Muster und Illustrationen die Assets vereinen. Ich gestaltete außerdem zusätzliche Elemente für die Box, darunter illustrierte Poster und Sticker, und arbeitete über mehrere Stile hinweg, um der Marke eine verspielte Note zu verleihen. In enger Zusammenarbeit mit dem Elgato-Team wurden Konzepte iteriert und verschiedene visuelle Ansätze erkundet.",
      },
      {
        title: "Creatorfest",
        description:
          "Da Elgato in München ansässig ist, wurde ich gebeten, eine Oktoberfest-Geschenkbox für ihre Partner zu gestalten – ein verspielter Einblick in die bayerische Kultur. Inspiriert von der geschäftigen, lebhaften Atmosphäre des Fests entwickelte ich eine Wimmelbild-Illustration, die diese Energie einfängt und dabei mehrere Elgato-Produkte nahtlos einbindet.\nIn diesem Konzept werden Elgato-Produkte Teil der Feier – Achterbahnen, Attraktionen und verspielte Aktivitäten – und verwandeln das Elgato-Ökosystem in einen Vergnügungspark. Das Design verbindet den Festgeist des Oktoberfests mit der Markenidentität und schafft ein einzigartiges, spaßiges Erlebnis, das Kultur und Technologie feiert.",
      },
    ],
  },
  ru: {
    heroTitle: "ELGATO",
    heroDescription:
      "Elgato — компания, известная своими инструментами для контент-мейкеров: от стримингового оборудования до устройств для креативного продакшена. Я сотрудничала с их командой над различными иллюстрационными и дизайн-проектами, внося вклад в продуктовые релизы, брендовые коллаборации и специальные кампании.",
    customsTitle: "Product Customisation",
    customsDescription:
      "Я разрабатывала кастомные лицевые панели для Elgato Stream Deck и Wave XLR, сотрудничая с командами дизайна и печати, чтобы воплотить концепции в жизнь. Работая в рамках продуктовых ограничений, я создавала выразительные визуальные решения, отражающие технологическую идентичность бренда, которые стали официальными продуктами для покупателей по всему миру.",
    dreamvilleTitle: "Dreamville x Elgato",
    dreamvilleDescription:
      "У меня была возможность разработать визуальные материалы для коллаборации Dreamville x Elgato Wave:3, перенеся бренд Dreamville на микрофон через иллюстрацию, цвет и композицию.",
    anniversaryTitle: "Anniversary Designs",
    anniversaryDescription:
      "К 10-летию Elgato я разработала паттерн и логотип для серии лимитированных продуктов, которые можно было использовать на разных носителях. Логотип Elgato стал центральным элементом паттерна, связанным с логотипом самого события.",
    summaryText:
      "В ходе этих проектов я столкнулась со многими трудностями и многому научилась — работала с самыми разными спецификациями, экспериментировала с новыми идеями, при этом всегда сохраняя единый стиль бренда.",
    giftboxesTitle: "Gift Boxes",
    giftboxesDescription:
      "Elgato рассылает подарочные коробки по особым случаям. Я разработала несколько таких наборов — от самой коробки до материалов внутри и промо-материалов вокруг неё, создавая игривые визуальные нарративы.",
    boxes: [
      {
        title: "Winter Windows",
        description:
          "Этот проект был посвящён празднованию разнообразия в праздничный сезон с сохранением духа бренда Elgato. Я разработала две связанных концепции. Первая черпала вдохновение из Stream Deck, переосмысляя каждую кнопку как окно в разные дома — возможность заглянуть в уникальные праздничные традиции, деликатно интегрируя продукты Elgato в повседневные festive моменты. Вторая исследовала тему пряничного домика как стилизованную интерпретацию классического зимнего символа. Проект включал создание детальных векторных иллюстраций и адаптацию визуального языка Elgato в игривый зимний контекст.",
      },
      {
        title: "Snow Pixels",
        description:
          "Этот проект объединил ряд моих творческих работ для Elgato с целью создания игривого и запоминающегося зимнего подарочного опыта. Задача — сделать бренд Elgato весёлым, доступным и праздничным, сохранив его технологическую идентичность.\nКоробка строится вокруг персонификации логотипа Elgato в снежной зимней теме с использованием пиксельного паттерна и иллюстраций для единства всех элементов. Я также разработала дополнительные материалы для коробки — иллюстрированные постеры и стикеры, работая в разных стилях, чтобы придать бренду игривый характер. В тесном сотрудничестве с командой Elgato мы итерировали концепции и исследовали различные визуальные подходы.",
      },
      {
        title: "Creatorfest",
        description:
          "Поскольку Elgato базируется в Мюнхене, меня попросили создать подарочную коробку в теме Октоберфеста для партнёров компании — игривый взгляд на баварскую культуру. Вдохновлённая оживлённой атмосферой фестиваля, я разработала иллюстрацию в стиле Wimmelbild, передающую его кипучую энергию и органично включающую несколько продуктов Elgato.\nВ этой концепции продукты Elgato становятся частью праздника — американские горки, аттракционы и игровые активности — превращая экосистему Elgato в парк развлечений. Дизайн соединяет праздничный дух Октоберфеста с идентичностью бренда, создавая уникальный и захватывающий опыт.",
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
