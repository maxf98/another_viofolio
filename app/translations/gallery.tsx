"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang } from "@/app/context/LanguageContext";
import { GallerySection, galleryImages } from "@/app/translations/galleryImages";

const translations = {
  en: {
    archiveTitle: "Personal Archive",
    archiveDescription: "Much of my personal practice is rooted in experimentation and chance. In my digital work, I use photographs I take of nature, spaces, and patterns as a starting point, reshaping them to explore the imagined stories that emerge. Alongside this, my analogue practice is influenced by art therapy methodologies, focusing on approaches that create space for intuition, reflection, and gentle discovery. This archive documents my recent explorations in illustrated photography, process-driven art, and my bachelor thesis project, where I had the freedom to create my own visuals and narratives.",
    monkeybrain: {
      title: "Monkeybrain Magazine",
      description: "Developed as my bachelor thesis at NABA Milano in Graphic Design and Art Direction, this project blends mixed media, illustrated photography, and image editing with research into human psychology and inner experience, producing Monkey Brain, an illustrated magazine for young adults that conveys awareness through narrative-driven visuals.",
      tapToFlickThrough: "tap to flick through",
      betterInLandscape: "better in landscape",
    },
    disclaimer: "Interested to see the process behind my work? Check out my socials",
    navIllustratedPhotography: "Digital Explorations",
    navAnalogueExplorations: "Analogue Explorations",
    navMonkeybrain: "Monkeybrain Magazine",
    sections: [
      {
        id: "illustrated-photography",
        title: "Digital Explorations",
        description:
          "My digital practice follows an experimental, mixed-media approach, merging elements of surrealism and realism. I like to work with snapshots from my surroundings as starting points, developing them into imaginative worlds. Through editing, drawing, and animating images, I explore new forms and narratives.",
        images: [
          { index: 0, image: galleryImages.illustratedPhotography[3], alt: "view" },
          { index: 1, image: galleryImages.illustratedPhotography[19], alt: "sun" },
          { index: 2, image: galleryImages.illustratedPhotography[16], alt: "sunburn" },
          { index: 3, image: galleryImages.illustratedPhotography[13], alt: "wood" },
          { index: 4, image: galleryImages.illustratedPhotography[0], alt: "ship" },
          { index: 5, image: galleryImages.illustratedPhotography[9], alt: "ghosts" },
          { index: 6, image: galleryImages.illustratedPhotography[12], alt: "chat" },
          { index: 7, video: "/gallery/schaukel.mp4", image: "/gallery/schaukel.mp4", alt: "schaukel", videoWidth: 3520, videoHeight: 2488 },
          { index: 8, image: galleryImages.illustratedPhotography[7], alt: "thoughts" },
          { index: 9, video: "/gallery/blink.mp4", image: "/gallery/blink.mp4", alt: "blink", videoWidth: 1088, videoHeight: 1934 },
          { index: 10, image: galleryImages.illustratedPhotography[15], alt: "monster" },
          { index: 11, image: galleryImages.illustratedPhotography[5], alt: "treeudude" },
          { index: 12, image: galleryImages.illustratedPhotography[8], alt: "looking" },
          { index: 13, image: galleryImages.illustratedPhotography[14], alt: "angels" },
          { index: 14, image: galleryImages.illustratedPhotography[20], alt: "field" },
          { index: 15, image: galleryImages.illustratedPhotography[2], alt: "memories" },
          { index: 16, video: "/gallery/rose.mp4", image: "/gallery/rose.mp4", alt: "rose", videoWidth: 1088, videoHeight: 1934 },
          { index: 17, image: galleryImages.illustratedPhotography[21], alt: "vogue" },
          { index: 18, image: galleryImages.illustratedPhotography[22], alt: "surrealdude" },
          { index: 19, image: galleryImages.illustratedPhotography[11], alt: "schadenfreude" },
          { index: 20, image: galleryImages.illustratedPhotography[6], alt: "flowers" },
          { index: 21, image: galleryImages.illustratedPhotography[18], alt: "dogs" },
          { index: 22, image: galleryImages.illustratedPhotography[4], alt: "bottle" },
          { index: 23, video: "/gallery/passthrough.mp4", image: "/gallery/passthrough.mp4", alt: "passthrough", videoWidth: 2480, videoHeight: 3508 },
          { index: 24, image: galleryImages.illustratedPhotography[23], alt: "beach" },
          { index: 25, image: galleryImages.illustratedPhotography[17], alt: "grandpa" },
          { index: 26, image: galleryImages.illustratedPhotography[24], alt: "cloud" },
        ],
      },
      {
        id: "art-therapy",
        title: "Analogue Process Driven Explorations",
        description:
          "My analogue process explores creation through physical materials and experimental methods. Rooted in my art therapy journey, this approach emphasizes intuition, expression, and a responsive dialogue with materials. By allowing chance to play an active role, the process becomes open-ended, embracing unpredictability as an essential part of creation.",
        images: [
          { index: 0, image: galleryImages.artTherapy[0], alt: "blowout", title: "Blowout", description: "This method uses ink, a brush, and a straw to generate chance-based imagery. Ink is flicked or placed onto paper and blown across the surface, creating unpredictable, breath-shaped marks. The resulting forms are then observed and intuitively developed using additional materials, allowing the image to evolve through response." },
          { index: 15, image: galleryImages.artTherapy[3], alt: "chalk work", title: "Chalk Work", description: "Working with chalk allows marks to remain open, fragile, and easily altered. Images emerge through touch, movement, and continuous response to what appears on the surface." },
          { index: 3, image: galleryImages.artTherapy[13], alt: "carib", title: "Image Continuation", description: "Chosen cutouts or images are positioned as a starting point and then continued with different media like paints, pastels, and drawing materials." },
          { index: 4, image: galleryImages.artTherapy[8], alt: "frottage texture study", title: "Frottage", description: "Frottage is a rubbing technique where paper is placed over textured surfaces and graphite or pastel is drawn across it to capture hidden patterns. The collected textures become starting points for intuitive image-making and layered composition." },
          { index: 9, image: galleryImages.artTherapy[14], alt: "mix3", title: "Intuitive Drawing with Music", description: "This drawing is made while listening to music and letting changes in rhythm, mood, and intensity influence the marks and composition." },
          { index: 10, image: galleryImages.artTherapy[9], alt: "dragon drawing", title: "Dragon", description: "An intuitive image study where creature-like forms emerge through spontaneous mark-making and development." },
          { index: 12, image: galleryImages.artTherapy[10], alt: "handpainting process", title: "Handpainting", description: "Handpainting focuses on direct contact with paint using hands and fingers instead of brushes. Layer by layer, pressure, movement, and touch create organic marks that are then observed and developed into image forms." },
          { index: 13, image: galleryImages.artTherapy[11], alt: "abdruck print technique", title: "Abdruck", description: "An image is created by listening to a story and drawing what stays with you. The most vivid fragments, emotions, and scenes are translated into intuitive marks and then developed into a composition." },
          { index: 2, image: galleryImages.artTherapy[2], alt: "stair hair", title: "Blind Drawing", description: "With closed eyes, spontaneous pastel marks are made intuitively. Afterwards, emerging forms are discovered and developed into the final image." },
          { index: 16, image: galleryImages.artTherapy[4], alt: "floral", title: "Floral Dip", description: "Plants and natural materials are used as mark-making tools. By dipping them into paint and pressing or dragging them across the paper, organic and unpredictable marks emerge. These initial impressions become a starting point to observe, respond to, and further develop into a drawing." },
          { index: 17, image: galleryImages.artTherapy[15], alt: "city" },
        ],
      },
      {
        id: "monkeybrain-gallery",
        title: "",
        description: "",
        images: [
          { index: 0, image: galleryImages.monkeybrain[0], alt: "magazine spread" },
          { index: 1, image: galleryImages.monkeybrain[1], alt: "magazine spread" },
          { index: 2, image: galleryImages.monkeybrain[2], alt: "magazine spread" },
          { index: 3, image: galleryImages.monkeybrain[3], alt: "magazine spread" },
          { index: 4, image: galleryImages.monkeybrain[4], alt: "magazine spread" },
          { index: 5, image: galleryImages.monkeybrain[5], alt: "magazine spread" },
        ],
      },
    ] as GallerySection[],
  },
  de: {
    archiveTitle: "Persönliches Archiv",
    archiveDescription: "Mein persönliche Praxis ist in Experimentieren und Zufall verwurzelt. In meiner digitalen Arbeit nutze ich Fotografien von Natur, Räumen und Mustern als Ausgangspunkt und forme sie um, um die imaginierten Geschichten zu erkunden, die dabei entstehen. Daneben wird meine analoge Praxis von kunsttherapeutischen Methoden beeinflusst – mit Fokus auf Intuition, Reflexion und sanfte Entdeckung. Dieses Archiv dokumentiert meine jüngsten Erkundungen in Digital Explorations, prozessorientierter Kunst und meinem Bachelorprojekt, bei dem ich die Freiheit hatte, eigene Bilder und Erzählungen zu schaffen.",
    monkeybrain: {
      title: "Monkeybrain Magazine",
      description: "Entwickelt als meine Bachelorarbeit an der NABA Mailand in Grafikdesign und Art Direction verbindet dieses Projekt Mixed Media, illustrierte Fotografie und Bildbearbeitung mit Forschung zu menschlicher Psychologie und innerer Erfahrung – das Ergebnis ist Monkey Brain, ein illustriertes Magazin für junge Erwachsene, das Bewusstsein durch narrativ geführte Bildwelten vermittelt.",
      tapToFlickThrough: "zum Durchblättern tippen",
      betterInLandscape: "besser im Querformat",
    },
    disclaimer: "Interesse am Prozess hinter meiner Arbeit? Schau in meine Socials",
    navIllustratedPhotography: "Digital Explorations",
    navAnalogueExplorations: "Analogue Process Driven Explorations",
    navMonkeybrain: "Monkeybrain Magazin",
    sections: [
      {
        id: "illustrated-photography",
        title: "Digital Explorations",
        description:
          "Meine digitale Praxis folgt einem experimentellen Mixed-Media-Ansatz, der Elemente des Surrealismus und Realismus miteinander verbindet. Ich arbeite gerne mit Momentaufnahmen aus meiner Umgebung als Ausgangspunkte und entwickle sie zu imaginativen Welten. Durch Bearbeitung, Zeichnung und Animation von Bildern erkunde ich neue Formen und Erzählungen.",
        images: [
          { index: 0, image: galleryImages.illustratedPhotography[3], alt: "view" },
          { index: 1, image: galleryImages.illustratedPhotography[19], alt: "sun" },
          { index: 2, image: galleryImages.illustratedPhotography[16], alt: "sunburn" },
          { index: 3, image: galleryImages.illustratedPhotography[13], alt: "wood" },
          { index: 4, image: galleryImages.illustratedPhotography[0], alt: "ship" },
          { index: 5, image: galleryImages.illustratedPhotography[9], alt: "ghosts" },
          { index: 6, image: galleryImages.illustratedPhotography[12], alt: "chat" },
          { index: 7, video: "/gallery/schaukel.mp4", image: "/gallery/schaukel.mp4", alt: "schaukel", videoWidth: 3520, videoHeight: 2488 },
          { index: 8, image: galleryImages.illustratedPhotography[7], alt: "thoughts" },
          { index: 9, video: "/gallery/blink.mp4", image: "/gallery/blink.mp4", alt: "blink", videoWidth: 1088, videoHeight: 1934 },
          { index: 10, image: galleryImages.illustratedPhotography[15], alt: "monster" },
          { index: 11, image: galleryImages.illustratedPhotography[5], alt: "treeudude" },
          { index: 12, image: galleryImages.illustratedPhotography[8], alt: "looking" },
          { index: 13, image: galleryImages.illustratedPhotography[14], alt: "angels" },
          { index: 14, image: galleryImages.illustratedPhotography[20], alt: "field" },
          { index: 15, image: galleryImages.illustratedPhotography[2], alt: "memories" },
          { index: 16, video: "/gallery/rose.mp4", image: "/gallery/rose.mp4", alt: "rose", videoWidth: 1088, videoHeight: 1934 },
          { index: 17, image: galleryImages.illustratedPhotography[21], alt: "vogue" },
          { index: 18, image: galleryImages.illustratedPhotography[22], alt: "surrealdude" },
          { index: 19, image: galleryImages.illustratedPhotography[11], alt: "schadenfreude" },
          { index: 20, image: galleryImages.illustratedPhotography[6], alt: "flowers" },
          { index: 21, image: galleryImages.illustratedPhotography[18], alt: "dogs" },
          { index: 22, image: galleryImages.illustratedPhotography[4], alt: "bottle" },
          { index: 23, video: "/gallery/passthrough.mp4", image: "/gallery/passthrough.mp4", alt: "passthrough", videoWidth: 2480, videoHeight: 3508 },
          { index: 24, image: galleryImages.illustratedPhotography[23], alt: "beach" },
          { index: 25, image: galleryImages.illustratedPhotography[17], alt: "grandpa" },
          { index: 26, image: galleryImages.illustratedPhotography[24], alt: "cloud" },
        ],
      },
      {
        id: "art-therapy",
        title: "Analogue Process Driven Explorations",
        description:
          "Meine analoge Praxis erkundet Schöpfung durch physische Materialien und experimentelle Methoden. Verwurzelt in meiner kunsttherapeutischen Reise betont dieser Ansatz Intuition, Ausdruck und einen responsiven Dialog mit den Materialien. Indem Zufall eine aktive Rolle einnimmt, wird der Prozess offen und umarmt Unvorhersehbarkeit als wesentlichen Teil der Kreation.",
        images: [
          { index: 0, image: galleryImages.artTherapy[0], alt: "blowout", title: "Blowout", description: "Diese Methode verwendet Tinte, einen Pinsel und einen Strohhalm, um zufallsbasierte Bilder zu erzeugen. Tinte wird auf Papier gekleckst oder getropft und über die Oberfläche geblasen, wodurch unvorhersehbare, atemförmige Spuren entstehen. Die resultierenden Formen werden dann beobachtet und mit zusätzlichen Materialien intuitiv weiterentwickelt, sodass das Bild durch Reaktion entsteht." },
          { index: 15, image: galleryImages.artTherapy[3], alt: "chalk work", title: "Chalk Work", description: "Das Arbeiten mit Kreide ermöglicht es, Spuren offen, fragil und leicht veränderbar zu halten. Bilder entstehen durch Berührung, Bewegung und kontinuierliche Reaktion auf das, was auf der Oberfläche erscheint." },
          { index: 3, image: galleryImages.artTherapy[13], alt: "carib", title: "Image Continuation", description: "Ausgewählte Ausschnitte oder Bilder werden als Ausgangspunkt platziert und anschließend mit verschiedenen Medien wie Farbe, Pastell und Zeichenmaterialien weitergeführt." },
          { index: 4, image: galleryImages.artTherapy[8], alt: "frottage texture study", title: "Frottage", description: "Frottage ist eine Abriebtechnik, bei der Papier auf strukturierte Oberflächen gelegt und mit Graphit oder Pastell überrieben wird, um verborgene Muster sichtbar zu machen. Die gesammelten Texturen werden zu Ausgangspunkten für intuitives Arbeiten und vielschichtige Kompositionen." },
          { index: 9, image: galleryImages.artTherapy[14], alt: "mix3", title: "Intuitive Drawing with Music", description: "Diese Zeichnung entsteht beim Hören von Musik, wobei Veränderungen in Rhythmus, Stimmung und Intensität die Spuren und die Komposition beeinflussen." },
          { index: 10, image: galleryImages.artTherapy[9], alt: "dragon drawing", title: "Dragon", description: "Eine intuitive Bildstudie, bei der durch spontane Markierungen und Weiterentwicklung wesenartige Formen entstehen." },
          { index: 12, image: galleryImages.artTherapy[10], alt: "handpainting process", title: "Handpainting", description: "Handpainting konzentriert sich auf den direkten Kontakt mit Farbe – mit Händen und Fingern statt Pinseln. Schicht für Schicht entstehen durch Druck, Bewegung und Berührung organische Spuren, die beobachtet und zu Bildformen weiterentwickelt werden." },
          { index: 13, image: galleryImages.artTherapy[11], alt: "abdruck print technique", title: "Abdruck", description: "Ein Bild entsteht durch das Hören einer Geschichte und das Zeichnen dessen, was hängen bleibt. Die lebhaftesten Fragmente, Gefühle und Szenen werden in intuitive Spuren übersetzt und zu einer Komposition ausgearbeitet." },
          { index: 2, image: galleryImages.artTherapy[2], alt: "stair hair", title: "Blind Drawing", description: "Mit geschlossenen Augen entstehen intuitive Pastellspuren. Danach werden entdeckte Formen herausgearbeitet und zum finalen Bild weiterentwickelt." },
          { index: 16, image: galleryImages.artTherapy[4], alt: "floral", title: "Floral Dip", description: "Pflanzen und natürliche Materialien werden als Zeichenwerkzeuge verwendet. Durch Eintauchen in Farbe und Drücken oder Ziehen über das Papier entstehen organische und unvorhersehbare Spuren. Diese ersten Abdrücke werden dann beobachtet, beantwortet und zu einer Zeichnung weiterentwickelt." },
          { index: 17, image: galleryImages.artTherapy[15], alt: "city" },
        ],
      },
      {
        id: "monkeybrain-gallery",
        title: "",
        description: "",
        images: [
          { index: 0, image: galleryImages.monkeybrain[0], alt: "magazine spread" },
          { index: 1, image: galleryImages.monkeybrain[1], alt: "magazine spread" },
          { index: 2, image: galleryImages.monkeybrain[2], alt: "magazine spread" },
          { index: 3, image: galleryImages.monkeybrain[3], alt: "magazine spread" },
          { index: 4, image: galleryImages.monkeybrain[4], alt: "magazine spread" },
          { index: 5, image: galleryImages.monkeybrain[5], alt: "magazine spread" },
        ],
      },
    ] as GallerySection[],
  },
  ru: {
    archiveTitle: "Личный архив",
    archiveDescription: "Моя личная практика во многом основана на экспериментировании и случайности. В цифровой работе я использую фотографии природы, пространств и паттернов как отправную точку, преобразуя их для исследования воображаемых историй. Параллельно моя аналоговая практика вдохновлена методологиями арт-терапии — подходами, создающими пространство для интуиции, рефлексии и мягкого открытия. Этот архив документирует мои недавние исследования в Digital Explorations, процессуальном искусстве и моём дипломном проекте.",
    monkeybrain: {
      title: "Monkeybrain Magazine",
      description: "Разработанный как мой дипломный проект в NABA Milano по графическому дизайну и арт-дирекции, этот проект сочетает смешанные медиа, иллюстрированную фотографию и редактирование изображений с исследованием человеческой психологии и внутреннего опыта — результатом стал Monkey Brain, иллюстрированный журнал для молодых взрослых, передающий осознанность через нарративно выстроенные визуальные образы.",
      tapToFlickThrough: "нажми, чтобы листать",
      betterInLandscape: "лучше в горизонтальном режиме",
    },
    disclaimer: "Интересует процесс создания моих работ? Загляни в мои соцсети",
    navIllustratedPhotography: "Digital Explorations",
    navAnalogueExplorations: "Analogue Process Driven Explorations",
    navMonkeybrain: "Журнал Monkeybrain",
    sections: [
      {
        id: "illustrated-photography",
        title: "Digital Explorations",
        description:
          "Моя цифровая практика следует экспериментальному смешанному подходу, объединяя элементы сюрреализма и реализма. Я люблю работать со снимками из своего окружения как отправными точками, развивая их в воображаемые миры. Через редактирование, рисование и анимацию изображений я исследую новые формы и нарративы.",
        images: [
          { index: 0, image: galleryImages.illustratedPhotography[3], alt: "view" },
          { index: 1, image: galleryImages.illustratedPhotography[19], alt: "sun" },
          { index: 2, image: galleryImages.illustratedPhotography[16], alt: "sunburn" },
          { index: 3, image: galleryImages.illustratedPhotography[13], alt: "wood" },
          { index: 4, image: galleryImages.illustratedPhotography[0], alt: "ship" },
          { index: 5, image: galleryImages.illustratedPhotography[9], alt: "ghosts" },
          { index: 6, image: galleryImages.illustratedPhotography[12], alt: "chat" },
          { index: 7, video: "/gallery/schaukel.mp4", image: "/gallery/schaukel.mp4", alt: "schaukel", videoWidth: 3520, videoHeight: 2488 },
          { index: 8, image: galleryImages.illustratedPhotography[7], alt: "thoughts" },
          { index: 9, video: "/gallery/blink.mp4", image: "/gallery/blink.mp4", alt: "blink", videoWidth: 1088, videoHeight: 1934 },
          { index: 10, image: galleryImages.illustratedPhotography[15], alt: "monster" },
          { index: 11, image: galleryImages.illustratedPhotography[5], alt: "treeudude" },
          { index: 12, image: galleryImages.illustratedPhotography[8], alt: "looking" },
          { index: 13, image: galleryImages.illustratedPhotography[14], alt: "angels" },
          { index: 14, image: galleryImages.illustratedPhotography[20], alt: "field" },
          { index: 15, image: galleryImages.illustratedPhotography[2], alt: "memories" },
          { index: 16, video: "/gallery/rose.mp4", image: "/gallery/rose.mp4", alt: "rose", videoWidth: 1088, videoHeight: 1934 },
          { index: 17, image: galleryImages.illustratedPhotography[21], alt: "vogue" },
          { index: 18, image: galleryImages.illustratedPhotography[22], alt: "surrealdude" },
          { index: 19, image: galleryImages.illustratedPhotography[11], alt: "schadenfreude" },
          { index: 20, image: galleryImages.illustratedPhotography[6], alt: "flowers" },
          { index: 21, image: galleryImages.illustratedPhotography[18], alt: "dogs" },
          { index: 22, image: galleryImages.illustratedPhotography[4], alt: "bottle" },
          { index: 23, video: "/gallery/passthrough.mp4", image: "/gallery/passthrough.mp4", alt: "passthrough", videoWidth: 2480, videoHeight: 3508 },
          { index: 24, image: galleryImages.illustratedPhotography[23], alt: "beach" },
          { index: 25, image: galleryImages.illustratedPhotography[17], alt: "grandpa" },
          { index: 26, image: galleryImages.illustratedPhotography[24], alt: "cloud" },
        ],
      },
      {
        id: "art-therapy",
        title: "Analogue Process Driven Explorations",
        description:
          "Моя аналоговая практика исследует творчество через физические материалы и экспериментальные методы. Уходя корнями в мой путь арт-терапии, этот подход подчёркивает интуицию, выразительность и отзывчивый диалог с материалами. Позволяя случайности играть активную роль, процесс становится открытым, принимая непредсказуемость как неотъемлемую часть творения.",
        images: [
          { index: 0, image: galleryImages.artTherapy[0], alt: "blowout", title: "Blowout", description: "Этот метод использует тушь, кисть и трубочку для создания изображений, основанных на случайности. Тушь капается на бумагу и выдувается по поверхности, создавая непредсказуемые, дыхательные отметины. Затем возникшие формы наблюдаются и интуитивно развиваются с помощью дополнительных материалов, позволяя изображению эволюционировать через отклик." },
          { index: 15, image: galleryImages.artTherapy[3], alt: "chalk work", title: "Chalk Work", description: "Работа с мелом позволяет линиям оставаться открытыми, хрупкими и легко изменяемыми. Образы возникают через прикосновение, движение и непрерывную реакцию на то, что появляется на поверхности." },
          { index: 3, image: galleryImages.artTherapy[13], alt: "carib", title: "Image Continuation", description: "Выбранные вырезки или изображения используются как отправная точка и затем продолжаются разными медиа: красками, пастелью и рисовальными материалами." },
          { index: 4, image: galleryImages.artTherapy[8], alt: "frottage texture study", title: "Frottage", description: "Фроттаж — это техника натирания: бумага кладётся на фактурную поверхность, и по ней проводят графитом или пастелью, чтобы уловить скрытые узоры. Собранные текстуры становятся отправными точками для интуитивного создания образов и многослойной композиции." },
          { index: 9, image: galleryImages.artTherapy[14], alt: "mix3", title: "Intuitive Drawing with Music", description: "Этот рисунок создаётся под музыку, позволяя изменениям ритма, настроения и интенсивности влиять на штрихи и композицию." },
          { index: 10, image: galleryImages.artTherapy[9], alt: "dragon drawing", title: "Dragon", description: "Интуитивное исследование образа, где похожие на существ формы возникают через спонтанные штрихи и дальнейшую разработку." },
          { index: 12, image: galleryImages.artTherapy[10], alt: "handpainting process", title: "Handpainting", description: "Handpainting сосредоточен на прямом контакте с краской — руками и пальцами вместо кистей. Слой за слоем давление, движение и прикосновение создают органические отметины, которые затем наблюдаются и развиваются в образные формы." },
          { index: 13, image: galleryImages.artTherapy[11], alt: "abdruck print technique", title: "Abdruck", description: "Изображение создаётся через прослушивание истории и рисование того, что остаётся с тобой. Самые яркие фрагменты, эмоции и сцены переводятся в интуитивные отметины и затем развиваются в композицию." },
          { index: 2, image: galleryImages.artTherapy[2], alt: "stair hair", title: "Blind Drawing", description: "С закрытыми глазами интуитивно наносятся пастельные штрихи. После этого обнаруженные формы раскрываются и развиваются в финальное изображение." },
          { index: 16, image: galleryImages.artTherapy[4], alt: "floral", title: "Floral Dip", description: "Растения и природные материалы используются как инструменты для создания отметин. Окуная их в краску и прижимая или протягивая по бумаге, возникают органические и непредсказуемые следы. Эти первые отпечатки становятся отправной точкой для наблюдения, отклика и дальнейшего развития в рисунок." },
          { index: 17, image: galleryImages.artTherapy[15], alt: "city" },
        ],
      },
      {
        id: "monkeybrain-gallery",
        title: "",
        description: "",
        images: [
          { index: 0, image: galleryImages.monkeybrain[0], alt: "magazine spread" },
          { index: 1, image: galleryImages.monkeybrain[1], alt: "magazine spread" },
          { index: 2, image: galleryImages.monkeybrain[2], alt: "magazine spread" },
          { index: 3, image: galleryImages.monkeybrain[3], alt: "magazine spread" },
          { index: 4, image: galleryImages.monkeybrain[4], alt: "magazine spread" },
          { index: 5, image: galleryImages.monkeybrain[5], alt: "magazine spread" },
        ],
      },
    ] as GallerySection[],
  },
} as const;

type GalleryText = typeof translations[keyof typeof translations];

const GalleryTextContext = createContext<GalleryText | null>(null);

export function GalleryTextProvider({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  return (
    <GalleryTextContext.Provider value={translations[lang] as unknown as GalleryText}>
      {children}
    </GalleryTextContext.Provider>
  );
}

export function useGalleryText(): GalleryText {
  const ctx = useContext(GalleryTextContext);
  if (!ctx) throw new Error("useGalleryText must be used within GalleryTextProvider");
  return ctx;
}
