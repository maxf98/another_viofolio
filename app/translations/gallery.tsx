"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang, Lang } from "@/app/context/LanguageContext";
import { GallerySection } from "@/app/data/graph";
import { galleryImages } from "@/app/data/graph";

const translations = {
  en: {
    archiveTitle: "Personal Archive",
    archiveDescription: "Much of my personal practice is rooted in experimentation and chance. In my digital work, I use photographs I take of nature, spaces, and patterns as a starting point, reshaping them to explore the imagined stories that emerge. Alongside this, my analogue practice is influenced by art therapy methodologies, focusing on approaches that create space for intuition, reflection, and gentle discovery. This archive documents my recent explorations in illustrated photography, process-driven art, and my bachelor thesis project, where I had the freedom to create my own visuals and narratives.",
    artTherapyHint: "Open an image to learn more about the technique!",
    monkeybrain: {
      title: "Monkeybrain Magazine",
      description: "Developed as my bachelor thesis at NABA Milano in Graphic Design and Art Direction, this project integrates mixed media practices, illustrated photography, and image editing with research into human psychology and inner experience. The outcome is Monkey Brain, an illustrated magazine for young adults that communicates awareness through expressive and narrative-driven imagery.",
    },
    disclaimer: "Interested to see the process behind my work? Check out my socials",
    navIllustratedPhotography: "Illustrated Photography",
    navAnalogueExplorations: "Analogue Explorations",
    navMonkeybrain: "Monkeybrain Magazine",
    sections: [
      {
        id: "illustrated-photography",
        title: "Illustrated Photography",
        description: "Images are treated as starting points rather than outcomes, gradually shifting through digital intervention into scenes that suggest story, atmosphere, and otherness.",
        images: [
          { index: 0, image: galleryImages.illustratedPhotography[0], alt: "bird", title: "Bird", description: "Freedom takes flight in unexpected forms." },
          { index: 1, image: galleryImages.illustratedPhotography[1], alt: "ship", title: "Ship", description: "A voyage through dreams and memories." },
          { index: 3, image: galleryImages.illustratedPhotography[2], alt: "grandpa", title: "Grandpa", description: "A tribute to cherished memories." },
          { index: 4, image: galleryImages.illustratedPhotography[3], alt: "view", title: "View", description: "A window into another world." },
          { index: 5, image: galleryImages.illustratedPhotography[4], alt: "treeudude", title: "Tree Dude", description: "Where humans and nature intertwine." },
          { index: 6, image: galleryImages.illustratedPhotography[5], alt: "bottle", title: "Bottle", description: "Messages waiting to be discovered." },
          { index: 7, image: galleryImages.illustratedPhotography[6], alt: "looking", title: "Looking", description: "Searching for meaning in the everyday." },
          { index: 8, image: galleryImages.illustratedPhotography[7], alt: "ghosts", title: "Ghosts", description: "Echoes of presence lingering in space." },
          { index: 9, image: galleryImages.illustratedPhotography[8], alt: "angels", title: "Angels", description: "Guardians watching from above." },
          { index: 10, image: galleryImages.illustratedPhotography[9], alt: "chat", title: "Chat", description: "Conversations that shape who we are." },
          { index: 11, image: galleryImages.illustratedPhotography[10], alt: "wood", title: "Wood", description: "Nature's textures meet imagination." },
          { index: 12, image: galleryImages.illustratedPhotography[11], alt: "monster", title: "Monster", description: "Friendly creatures from the imagination." },
          { index: 13, image: galleryImages.illustratedPhotography[12], alt: "sunburn", title: "Sunburn", description: "The warmth that leaves its mark." },
        ],
      },
      {
        id: "traditional-media",
        title: "Traditional Media",
        description: "Handmade works created with traditional materials and techniques.",
        images: [],
      },
      {
        id: "art-therapy",
        title: "Analogue Process Driven Explorations",
        description: "Analogue materials invite a slower, more embodied approach. Influenced by my art therapy studies and personal chance-based experiments, these explorations prioritise intuition, responsiveness, and process.",
        images: [
          { index: 0, image: galleryImages.artTherapy[0], alt: "blowout", title: "Blowout", description: "This method uses ink, a brush, and a straw to generate chance-based imagery. Ink is flicked or placed onto paper and blown across the surface, creating unpredictable, breath-shaped marks. The resulting forms are then observed and intuitively developed using additional materials, allowing the image to evolve through response." },
          { index: 1, image: galleryImages.artTherapy[1], alt: "fish", title: "Mirrored Paint", description: "This method begins by placing watered-down acrylic paint between two sheets of paper, which are pressed together to create mirrored forms. The resulting paint blots are observed for emerging shapes and relationships between the mirrored images. In this trial, the forms were developed into a mixed media composition by cutting them out and illustrating a new environment around them." },
          { index: 2, image: galleryImages.artTherapy[2], alt: "stair hair", title: "Blind Drawing", description: "This method involves drawing with oil pastels while keeping the eyes closed, choosing colours intuitively and making spontaneous marks. Once complete, the drawing is observed for emerging forms - such as faces, animals, or landscapes - which are then developed further, allowing the image to become something unexpected." },
          { index: 3, image: galleryImages.artTherapy[3], alt: "chalk work", title: "Chalk Work", description: "Working with chalk allows marks to remain open, fragile, and easily altered. Images emerge through touch, movement, and continuous response to what appears on the surface." },
          { index: 4, image: galleryImages.artTherapy[4], alt: "floral", title: "Floral Dip", description: "Plants and natural materials are used as mark-making tools. By dipping them into paint and pressing or dragging them across the paper, organic and unpredictable marks emerge. These initial impressions become a starting point to observe, respond to, and further develop into a drawing." },
          { index: 5, image: galleryImages.artTherapy[5], alt: "mask", title: "Color Marks", description: "Colour is applied randomly across the surface of the paper. The resulting marks are then observed for emerging forms, which guide the next steps of the image." },
          { index: 7, image: galleryImages.artTherapy[6], alt: "Narrative Immersion", title: "Narrative Immersion", description: "With eyes closed, a story is listened to and experienced through imagination and sensation. Drawing then becomes a response to what remains from the narrative, allowing memory, emotion, and imagery to guide the marks." },
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
    archiveDescription: "Meine persönliche Praxis ist stark in Experimentieren und Zufall verwurzelt. In meiner digitalen Arbeit nutze ich Fotografien von Natur, Räumen und Mustern als Ausgangspunkt und forme sie um, um die imaginierten Geschichten zu erkunden, die dabei entstehen. Daneben wird meine analoge Praxis von kunsttherapeutischen Methoden beeinflusst – mit Fokus auf Ansätze, die Raum für Intuition, Reflexion und sanfte Entdeckung schaffen. Dieses Archiv dokumentiert meine jüngsten Erkundungen in illustrierter Fotografie, prozessorientierter Kunst und meinem Bachelorprojekt, bei dem ich die Freiheit hatte, eigene Bilder und Erzählungen zu schaffen.",
    artTherapyHint: "Öffne ein Bild, um mehr über die Technik zu erfahren!",
    monkeybrain: {
      title: "Monkeybrain Magazin",
      description: "Als meine Bachelorarbeit an der NABA Mailand in Grafikdesign und Art Direction entwickelt, verbindet dieses Projekt Mixed-Media-Praktiken, illustrierte Fotografie und Bildbearbeitung mit Forschung zur menschlichen Psychologie und inneren Erfahrung. Das Ergebnis ist Monkey Brain, ein illustriertes Magazin für junge Erwachsene, das Bewusstsein durch ausdrucksstarke und narrativ getriebene Bildsprache vermittelt.",
    },
    disclaimer: "Interessiert am Prozess hinter meiner Arbeit? Schau in meine sozialen Netzwerke",
    navIllustratedPhotography: "Illustrierte Fotografie",
    navAnalogueExplorations: "Analoge Erkundungen",
    navMonkeybrain: "Monkeybrain Magazin",
    sections: [
      {
        id: "illustrated-photography",
        title: "Illustrierte Fotografie",
        description: "Bilder werden als Ausgangspunkte behandelt, nicht als Ergebnisse – sie verschieben sich durch digitale Eingriffe langsam hin zu Szenen, die Geschichte, Atmosphäre und Andersartigkeit andeuten.",
        images: [
          { index: 0, image: galleryImages.illustratedPhotography[0], alt: "bird", title: "Vogel", description: "Freiheit entfaltet sich in unerwarteten Formen." },
          { index: 1, image: galleryImages.illustratedPhotography[1], alt: "ship", title: "Schiff", description: "Eine Reise durch Träume und Erinnerungen." },
          { index: 3, image: galleryImages.illustratedPhotography[2], alt: "grandpa", title: "Opa", description: "Ein Tribut an geliebte Erinnerungen." },
          { index: 4, image: galleryImages.illustratedPhotography[3], alt: "view", title: "Aussicht", description: "Ein Fenster in eine andere Welt." },
          { index: 5, image: galleryImages.illustratedPhotography[4], alt: "treeudude", title: "Baumkerl", description: "Wo Mensch und Natur sich verflechten." },
          { index: 6, image: galleryImages.illustratedPhotography[5], alt: "bottle", title: "Flasche", description: "Botschaften warten darauf, entdeckt zu werden." },
          { index: 7, image: galleryImages.illustratedPhotography[6], alt: "looking", title: "Schauen", description: "Auf der Suche nach Bedeutung im Alltag." },
          { index: 8, image: galleryImages.illustratedPhotography[7], alt: "ghosts", title: "Geister", description: "Echos von Anwesenheit, die im Raum verweilen." },
          { index: 9, image: galleryImages.illustratedPhotography[8], alt: "angels", title: "Engel", description: "Wächter, die von oben beobachten." },
          { index: 10, image: galleryImages.illustratedPhotography[9], alt: "chat", title: "Gespräch", description: "Unterhaltungen, die uns formen." },
          { index: 11, image: galleryImages.illustratedPhotography[10], alt: "wood", title: "Holz", description: "Die Texturen der Natur begegnen der Vorstellungskraft." },
          { index: 12, image: galleryImages.illustratedPhotography[11], alt: "monster", title: "Monster", description: "Freundliche Wesen aus der Phantasie." },
          { index: 13, image: galleryImages.illustratedPhotography[12], alt: "sunburn", title: "Sonnenbrand", description: "Die Wärme, die ihre Spuren hinterlässt." },
        ],
      },
      {
        id: "traditional-media",
        title: "Traditionelle Medien",
        description: "Handgefertigte Arbeiten mit traditionellen Materialien und Techniken.",
        images: [],
      },
      {
        id: "art-therapy",
        title: "Analoge prozessgeleitete Erkundungen",
        description: "Analoge Materialien laden zu einem langsameren, verkörperten Ansatz ein. Beeinflusst von meinem Kunststudium und persönlichen zufallsbasierten Experimenten stellen diese Erkundungen Intuition, Reaktionsfähigkeit und Prozess in den Vordergrund.",
        images: [
          { index: 0, image: galleryImages.artTherapy[0], alt: "blowout", title: "Blasbild", description: "Diese Methode verwendet Tinte, einen Pinsel und einen Strohhalm, um zufallsbasierte Bilder zu erzeugen. Tinte wird auf Papier gekleckst oder getropft und über die Oberfläche geblasen, wodurch unvorhersehbare, atemförmige Spuren entstehen. Die resultierenden Formen werden dann beobachtet und mit zusätzlichen Materialien intuitiv weiterentwickelt." },
          { index: 1, image: galleryImages.artTherapy[1], alt: "fish", title: "Spiegelfarbe", description: "Diese Methode beginnt mit dem Aufbringen von verdünnter Acrylfarbe zwischen zwei Papierbögen, die zusammengedrückt werden, um gespiegelte Formen zu erzeugen. Die entstandenen Farbkleckse werden auf entstehende Formen untersucht. In diesem Versuch wurden die Formen zu einer gemischten Medienkomposition weiterentwickelt." },
          { index: 2, image: galleryImages.artTherapy[2], alt: "stair hair", title: "Blindzeichnung", description: "Diese Methode beinhaltet das Zeichnen mit Ölpastellkreiden bei geschlossenen Augen, mit intuitiver Farbwahl und spontanen Strichen. Nach der Fertigstellung wird die Zeichnung auf entstehende Formen beobachtet, die dann weiterentwickelt werden." },
          { index: 3, image: galleryImages.artTherapy[3], alt: "chalk work", title: "Kreidearbeit", description: "Das Arbeiten mit Kreide ermöglicht es, Spuren offen, fragil und leicht veränderbar zu halten. Bilder entstehen durch Berührung, Bewegung und kontinuierliche Reaktion auf das, was auf der Oberfläche erscheint." },
          { index: 4, image: galleryImages.artTherapy[4], alt: "floral", title: "Pflanzenstempel", description: "Pflanzen und natürliche Materialien werden als Zeichenwerkzeuge verwendet. Durch das Eintauchen in Farbe und Drücken oder Ziehen über das Papier entstehen organische und unvorhersehbare Spuren." },
          { index: 5, image: galleryImages.artTherapy[5], alt: "mask", title: "Farbspuren", description: "Farbe wird zufällig auf der Oberfläche des Papiers aufgetragen. Die entstandenen Spuren werden dann auf entstehende Formen beobachtet, die die nächsten Schritte des Bildes leiten." },
          { index: 7, image: galleryImages.artTherapy[6], alt: "Narrative Immersion", title: "Narrative Immersion", description: "Mit geschlossenen Augen wird eine Geschichte gehört und durch Vorstellungskraft und Empfindung erlebt. Das Zeichnen wird dann zu einer Antwort auf das, was von der Erzählung übrig bleibt." },
        ],
      },
      {
        id: "monkeybrain-gallery",
        title: "",
        description: "",
        images: [
          { index: 0, image: galleryImages.monkeybrain[0], alt: "Magazinseite" },
          { index: 1, image: galleryImages.monkeybrain[1], alt: "Magazinseite" },
          { index: 2, image: galleryImages.monkeybrain[2], alt: "Magazinseite" },
          { index: 3, image: galleryImages.monkeybrain[3], alt: "Magazinseite" },
          { index: 4, image: galleryImages.monkeybrain[4], alt: "Magazinseite" },
          { index: 5, image: galleryImages.monkeybrain[5], alt: "Magazinseite" },
        ],
      },
    ] as GallerySection[],
  },
  ru: {
    archiveTitle: "Личный архив",
    archiveDescription: "Моя личная практика во многом основана на экспериментировании и случайности. В цифровой работе я использую фотографии природы, пространств и паттернов как отправную точку, преобразуя их для исследования воображаемых историй. Параллельно моя аналоговая практика вдохновлена методологиями арт-терапии — подходами, создающими пространство для интуиции, рефлексии и мягкого открытия. Этот архив документирует мои недавние исследования в области иллюстрированной фотографии, процессуального искусства и моего дипломного проекта.",
    artTherapyHint: "Открой изображение, чтобы узнать больше о технике!",
    monkeybrain: {
      title: "Журнал Monkeybrain",
      description: "Разработанный как дипломная работа в NABA Милан по графическому дизайну и арт-дирекции, этот проект объединяет практики смешанных медиа, иллюстрированную фотографию и редактирование изображений с исследованиями человеческой психологии. Результат — иллюстрированный журнал Monkey Brain для молодых взрослых.",
    },
    disclaimer: "Хотите увидеть процесс создания моих работ? Загляните в мои социальные сети",
    navIllustratedPhotography: "Иллюстрированная фотография",
    navAnalogueExplorations: "Аналоговые исследования",
    navMonkeybrain: "Журнал Monkeybrain",
    sections: [
      {
        id: "illustrated-photography",
        title: "Иллюстрированная фотография",
        description: "Изображения рассматриваются как отправные точки, а не результаты — постепенно трансформируясь через цифровое вмешательство в сцены, предлагающие историю, атмосферу и инаковость.",
        images: [
          { index: 0, image: galleryImages.illustratedPhotography[0], alt: "bird", title: "Птица", description: "Свобода обретает крылья в неожиданных формах." },
          { index: 1, image: galleryImages.illustratedPhotography[1], alt: "ship", title: "Корабль", description: "Путешествие через мечты и воспоминания." },
          { index: 3, image: galleryImages.illustratedPhotography[2], alt: "grandpa", title: "Дедушка", description: "Дань уважения дорогим воспоминаниям." },
          { index: 4, image: galleryImages.illustratedPhotography[3], alt: "view", title: "Вид", description: "Окно в другой мир." },
          { index: 5, image: galleryImages.illustratedPhotography[4], alt: "treeudude", title: "Древесный", description: "Где человек и природа переплетаются." },
          { index: 6, image: galleryImages.illustratedPhotography[5], alt: "bottle", title: "Бутылка", description: "Послания, ждущие своего открытия." },
          { index: 7, image: galleryImages.illustratedPhotography[6], alt: "looking", title: "Взгляд", description: "В поисках смысла в повседневном." },
          { index: 8, image: galleryImages.illustratedPhotography[7], alt: "ghosts", title: "Призраки", description: "Эхо присутствия, витающее в пространстве." },
          { index: 9, image: galleryImages.illustratedPhotography[8], alt: "angels", title: "Ангелы", description: "Стражи, наблюдающие сверху." },
          { index: 10, image: galleryImages.illustratedPhotography[9], alt: "chat", title: "Разговор", description: "Беседы, формирующие нас." },
          { index: 11, image: galleryImages.illustratedPhotography[10], alt: "wood", title: "Дерево", description: "Текстуры природы встречаются с воображением." },
          { index: 12, image: galleryImages.illustratedPhotography[11], alt: "monster", title: "Монстр", description: "Дружелюбные существа из воображения." },
          { index: 13, image: galleryImages.illustratedPhotography[12], alt: "sunburn", title: "Солнечный ожог", description: "Тепло, оставляющее след." },
        ],
      },
      {
        id: "traditional-media",
        title: "Традиционные медиа",
        description: "Работы, созданные вручную с использованием традиционных материалов и техник.",
        images: [],
      },
      {
        id: "art-therapy",
        title: "Аналоговые процессуальные исследования",
        description: "Аналоговые материалы приглашают к более медленному, телесному подходу. Вдохновлённые изучением арт-терапии и личными экспериментами, основанными на случайности, эти исследования ставят во главу угла интуицию, отзывчивость и процесс.",
        images: [
          { index: 0, image: galleryImages.artTherapy[0], alt: "blowout", title: "Выдувание", description: "Этот метод использует тушь, кисть и трубочку для создания изображений, основанных на случайности. Тушь капается на бумагу и выдувается по поверхности, создавая непредсказуемые отметины." },
          { index: 1, image: galleryImages.artTherapy[1], alt: "fish", title: "Зеркальная краска", description: "Этот метод начинается с нанесения разбавленной акриловой краски между двумя листами бумаги, которые прижимаются друг к другу для создания зеркальных форм." },
          { index: 2, image: galleryImages.artTherapy[2], alt: "stair hair", title: "Слепой рисунок", description: "Этот метод предполагает рисование масляной пастелью с закрытыми глазами, интуитивный выбор цветов и спонтанные штрихи." },
          { index: 3, image: galleryImages.artTherapy[3], alt: "chalk work", title: "Работа с мелом", description: "Работа с мелом позволяет линиям оставаться открытыми, хрупкими и легко изменяемыми. Образы возникают через прикосновение, движение и непрерывную реакцию." },
          { index: 4, image: galleryImages.artTherapy[4], alt: "floral", title: "Растительные отпечатки", description: "Растения и природные материалы используются как инструменты для создания отметин. Окунутые в краску и прижатые к бумаге, они создают органичные и непредсказуемые следы." },
          { index: 5, image: galleryImages.artTherapy[5], alt: "mask", title: "Цветовые отметины", description: "Краска наносится хаотично по поверхности бумаги. Полученные отметины затем изучаются на предмет возникающих форм." },
          { index: 7, image: galleryImages.artTherapy[6], alt: "Narrative Immersion", title: "Нарративное погружение", description: "С закрытыми глазами история слушается и переживается через воображение и ощущения. Рисование становится ответом на то, что остаётся от повествования." },
        ],
      },
      {
        id: "monkeybrain-gallery",
        title: "",
        description: "",
        images: [
          { index: 0, image: galleryImages.monkeybrain[0], alt: "разворот журнала" },
          { index: 1, image: galleryImages.monkeybrain[1], alt: "разворот журнала" },
          { index: 2, image: galleryImages.monkeybrain[2], alt: "разворот журнала" },
          { index: 3, image: galleryImages.monkeybrain[3], alt: "разворот журнала" },
          { index: 4, image: galleryImages.monkeybrain[4], alt: "разворот журнала" },
          { index: 5, image: galleryImages.monkeybrain[5], alt: "разворот журнала" },
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
