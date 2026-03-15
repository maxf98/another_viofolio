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
    navIllustratedPhotography: "Digital Explorations",
    navAnalogueExplorations: "Analogue Explorations",
    navMonkeybrain: "Monkeybrain Magazine",
    sections: [
      {
        id: "illustrated-photography",
        title: "Digital Explorations",
        description: "I work with photography, mixed media, collage, and drawing.",
        images: [
          { index: 0, image: galleryImages.illustratedPhotography[4], alt: "view", title: "View", description: "A window into another world." },
          { index: 1, image: galleryImages.illustratedPhotography[21], alt: "sun", title: "Sun", description: "A radiant study of warmth, shape, and light." },
          { index: 2, image: galleryImages.illustratedPhotography[17], alt: "grandpa", title: "Grandpa", description: "A tribute to cherished memories." },
          { index: 4, image: galleryImages.illustratedPhotography[2], alt: "sunburn", title: "Sunburn", description: "The warmth that leaves its mark." },
          { index: 5, image: galleryImages.illustratedPhotography[12], alt: "bottle", title: "Bottle", description: "Messages waiting to be discovered." },
          { index: 6, image: galleryImages.illustratedPhotography[14], alt: "wood", title: "Wood", description: "Nature's textures meet imagination." },
          { index: 7, image: galleryImages.illustratedPhotography[19], alt: "what", title: "What", description: "An open-ended image that invites multiple readings and imagined stories." },
          { index: 8, image: galleryImages.illustratedPhotography[18], alt: "bird", title: "Bird", description: "Freedom takes flight in unexpected forms." },
          { index: 9, image: galleryImages.illustratedPhotography[1], alt: "ship", title: "Ship", description: "A voyage through dreams and memories." },
          { index: 10, image: galleryImages.illustratedPhotography[3], alt: "memories", title: "Memories", description: "Fragments of memory translated into layered visual notes." },
          { index: 11, image: galleryImages.illustratedPhotography[10], alt: "ghosts", title: "Ghosts", description: "Echoes of presence lingering in space." },
          { index: 12, image: galleryImages.illustratedPhotography[13], alt: "chat", title: "Chat", description: "Conversations that shape who we are." },
          { index: 13, image: galleryImages.illustratedPhotography[8], alt: "thoughts", title: "Thoughts", description: "A visual stream of layered ideas and inner reflections." },
          { index: 14, image: galleryImages.illustratedPhotography[16], alt: "monster", title: "Monster", description: "Friendly creatures from the imagination." },
          { index: 15, image: galleryImages.illustratedPhotography[7], alt: "flowers", title: "Flowers", description: "A botanical-focused drawing study with layered colour and line." },
          { index: 17, image: galleryImages.illustratedPhotography[0], alt: "fake", title: "Fake", description: "A conceptual digital drawing reflecting on appearance, performance, and constructed identity." },
          { index: 18, image: galleryImages.illustratedPhotography[6], alt: "treeudude", title: "Tree Dude", description: "Where humans and nature intertwine." },
          { index: 3, image: galleryImages.illustratedPhotography[9], alt: "looking", title: "Looking", description: "Searching for meaning in the everyday." },
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
          { index: 15, image: galleryImages.artTherapy[3], alt: "chalk work", title: "Chalk Work", description: "Working with chalk allows marks to remain open, fragile, and easily altered. Images emerge through touch, movement, and continuous response to what appears on the surface." },
          { index: 3, image: galleryImages.artTherapy[13], alt: "carib", title: "Image Continuation", description: "Chosen cutouts or images are positioned as a starting point and then continued with different media like paints, pastels, and drawing materials." },
          { index: 4, image: galleryImages.artTherapy[8], alt: "frottage texture study", title: "Frottage", description: "Frottage is a rubbing technique where paper is placed over textured surfaces and graphite or pastel is drawn across it to capture hidden patterns. The collected textures become starting points for intuitive image-making and layered composition." },
          { index: 5, image: galleryImages.artTherapy[5], alt: "mask", title: "Color Marks", description: "Colour is applied randomly across the surface of the paper. The resulting marks are then observed for emerging forms, which guide the next steps of the image." },
          { index: 8, image: galleryImages.artTherapy[7], alt: "puzzle collage", title: "Puzzle Collage", description: "This exercise begins by cutting a puzzle shape out of paper. Without knowing how it will come together, each piece is illustrated individually and intuitively, then combined into a surprising collage that results in something I would never have drawn with intention." },
          { index: 9, image: galleryImages.artTherapy[14], alt: "mix3", title: "Intuitive Drawing with Music", description: "This drawing is made while listening to music and letting changes in rhythm, mood, and intensity influence the marks and composition." },
          { index: 10, image: galleryImages.artTherapy[9], alt: "dragon drawing", title: "Dragon", description: "An intuitive image study where creature-like forms emerge through spontaneous mark-making and development." },
          { index: 12, image: galleryImages.artTherapy[10], alt: "handpainting process", title: "Handpainting", description: "Handpainting focuses on direct contact with paint using hands and fingers instead of brushes. Layer by layer, pressure, movement, and touch create organic marks that are then observed and developed into image forms." },
          { index: 13, image: galleryImages.artTherapy[11], alt: "abdruck print technique", title: "Abdruck", description: "An image is created by listening to a story and drawing what stays with you. The most vivid fragments, emotions, and scenes are translated into intuitive marks and then developed into a composition." },
          { index: 2, image: galleryImages.artTherapy[2], alt: "stair hair", title: "Blind Drawing", description: "With closed eyes, spontaneous pastel marks are made intuitively. Afterwards, emerging forms are discovered and developed into the final image." },
          { index: 16, image: galleryImages.artTherapy[4], alt: "floral", title: "Floral Dip", description: "Plants and natural materials are used as mark-making tools. By dipping them into paint and pressing or dragging them across the paper, organic and unpredictable marks emerge. These initial impressions become a starting point to observe, respond to, and further develop into a drawing." },
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
        description: "Bilder werden als Ausgangspunkte behandelt, nicht als Ergebnisse – sie verschieben sich durch digitale Eingriffe langsam hin zu Szenen, die Geschichte, Atmosphäre und Andersartigkeit andeuten. Ergänzend dazu sind digitale Zeichnungen in dieselbe Bildwelt integriert.",
        images: [
          { index: 0, image: galleryImages.illustratedPhotography[4], alt: "view", title: "Aussicht", description: "Ein Fenster in eine andere Welt." },
          { index: 1, image: galleryImages.illustratedPhotography[21], alt: "sun", title: "Sun", description: "Eine strahlende Studie zu Wärme, Form und Licht." },
          { index: 2, image: galleryImages.illustratedPhotography[17], alt: "grandpa", title: "Opa", description: "Ein Tribut an geliebte Erinnerungen." },
          { index: 4, image: galleryImages.illustratedPhotography[2], alt: "sunburn", title: "Sonnenbrand", description: "Die Wärme, die ihre Spuren hinterlässt." },
          { index: 5, image: galleryImages.illustratedPhotography[12], alt: "bottle", title: "Flasche", description: "Botschaften warten darauf, entdeckt zu werden." },
          { index: 6, image: galleryImages.illustratedPhotography[14], alt: "wood", title: "Holz", description: "Die Texturen der Natur begegnen der Vorstellungskraft." },
          { index: 7, image: galleryImages.illustratedPhotography[19], alt: "what", title: "What", description: "Ein offenes Bild, das mehrere Lesarten und imaginierte Geschichten zulässt." },
          { index: 8, image: galleryImages.illustratedPhotography[18], alt: "bird", title: "Vogel", description: "Freiheit entfaltet sich in unerwarteten Formen." },
          { index: 9, image: galleryImages.illustratedPhotography[1], alt: "ship", title: "Schiff", description: "Eine Reise durch Träume und Erinnerungen." },
          { index: 10, image: galleryImages.illustratedPhotography[3], alt: "memories", title: "Memories", description: "Erinnerungsfragmente werden in geschichtete visuelle Notizen übersetzt." },
          { index: 11, image: galleryImages.illustratedPhotography[10], alt: "ghosts", title: "Geister", description: "Echos von Anwesenheit, die im Raum verweilen." },
          { index: 12, image: galleryImages.illustratedPhotography[13], alt: "chat", title: "Gespräch", description: "Unterhaltungen, die uns formen." },
          { index: 13, image: galleryImages.illustratedPhotography[8], alt: "gedanken", title: "Gedanken", description: "Ein visueller Strom aus geschichteten Ideen und inneren Reflexionen." },
          { index: 14, image: galleryImages.illustratedPhotography[16], alt: "monster", title: "Monster", description: "Freundliche Wesen aus der Phantasie." },
          { index: 15, image: galleryImages.illustratedPhotography[7], alt: "flowers", title: "Flowers", description: "Eine botanische Zeichenstudie mit geschichteter Farbe und Linie." },
          { index: 17, image: galleryImages.illustratedPhotography[0], alt: "fake", title: "Fake", description: "Eine konzeptuelle digitale Zeichnung über Schein, Inszenierung und konstruierte Identität." },
          { index: 18, image: galleryImages.illustratedPhotography[6], alt: "treeudude", title: "Baumkerl", description: "Wo Mensch und Natur sich verflechten." },
          { index: 3, image: galleryImages.illustratedPhotography[9], alt: "looking", title: "Schauen", description: "Auf der Suche nach Bedeutung im Alltag." },
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
          { index: 15, image: galleryImages.artTherapy[3], alt: "chalk work", title: "Kreidearbeit", description: "Das Arbeiten mit Kreide ermöglicht es, Spuren offen, fragil und leicht veränderbar zu halten. Bilder entstehen durch Berührung, Bewegung und kontinuierliche Reaktion auf das, was auf der Oberfläche erscheint." },
          { index: 3, image: galleryImages.artTherapy[13], alt: "carib", title: "Image Continuation", description: "Ausgewählte Ausschnitte oder Bilder werden als Ausgangspunkt platziert und anschließend mit verschiedenen Medien wie Farbe, Pastell und Zeichnung weitergeführt." },
          { index: 4, image: galleryImages.artTherapy[8], alt: "Frottage-Texturstudie", title: "Frottage", description: "Frottage ist eine Abriebtechnik: Papier wird auf strukturierte Oberflächen gelegt und mit Graphit oder Pastell überrieben, um verborgene Muster sichtbar zu machen. Diese Texturen dienen anschließend als Ausgangspunkt für intuitives Arbeiten und vielschichtige Kompositionen." },
          { index: 5, image: galleryImages.artTherapy[5], alt: "mask", title: "Farbspuren", description: "Farbe wird zufällig auf der Oberfläche des Papiers aufgetragen. Die entstandenen Spuren werden dann auf entstehende Formen beobachtet, die die nächsten Schritte des Bildes leiten." },
          { index: 8, image: galleryImages.artTherapy[7], alt: "Puzzle-Collage", title: "Puzzle-Collage", description: "Diese Übung beginnt damit, eine Puzzleform aus Papier auszuschneiden. Ohne zu wissen, wie alles zusammenkommt, wird jedes Teil einzeln und intuitiv gestaltet und danach zu einer überraschenden Collage zusammengesetzt - etwas, das ich niemals so bewusst gezeichnet hätte." },
          { index: 9, image: galleryImages.artTherapy[14], alt: "mix3", title: "Intuitive Drawing with Music", description: "Diese Zeichnung entsteht beim Hören von Musik, wobei Veränderungen in Rhythmus, Stimmung und Intensität die Spuren und Komposition beeinflussen." },
          { index: 10, image: galleryImages.artTherapy[9], alt: "Drachenzeichnung", title: "Drache", description: "Eine intuitive Bildstudie, bei der durch spontane Markierungen und Weiterentwicklung wesenhafte Formen entstehen." },
          { index: 12, image: galleryImages.artTherapy[10], alt: "Handmalerei-Prozess", title: "Handpainting", description: "Bei dieser Methode wird Farbe direkt mit Händen und Fingern statt mit Pinseln aufgetragen. Durch Berührung, Druck und Bewegung entstehen organische Spuren, die anschließend beobachtet und zu Bildformen weiterentwickelt werden." },
          { index: 13, image: galleryImages.artTherapy[11], alt: "Abdruck-Technik", title: "Abdruck", description: "Ein Bild entsteht durch das Hören einer Geschichte und das Zeichnen dessen, was hängen bleibt. Prägnante Fragmente, Gefühle und Szenen werden in intuitive Spuren übersetzt und danach zur Komposition ausgearbeitet." },
          { index: 2, image: galleryImages.artTherapy[2], alt: "stair hair", title: "Blindzeichnung", description: "Mit geschlossenen Augen entstehen intuitive Pastellspuren. Danach werden entdeckte Formen herausgearbeitet und zum finalen Bild weiterentwickelt." },
          { index: 16, image: galleryImages.artTherapy[4], alt: "floral", title: "Pflanzenstempel", description: "Pflanzen und natürliche Materialien werden als Zeichenwerkzeuge verwendet. Durch das Eintauchen in Farbe und Drücken oder Ziehen über das Papier entstehen organische und unvorhersehbare Spuren." },
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
        description: "Изображения рассматриваются как отправные точки, а не результаты — постепенно трансформируясь через цифровое вмешательство в сцены, предлагающие историю, атмосферу и инаковость. Цифровые рисунки теперь включены в этот же поток.",
        images: [
          { index: 0, image: galleryImages.illustratedPhotography[4], alt: "view", title: "Вид", description: "Окно в другой мир." },
          { index: 1, image: galleryImages.illustratedPhotography[21], alt: "sun", title: "Sun", description: "Светлая работа о тепле, форме и свете." },
          { index: 2, image: galleryImages.illustratedPhotography[17], alt: "grandpa", title: "Дедушка", description: "Дань уважения дорогим воспоминаниям." },
          { index: 4, image: galleryImages.illustratedPhotography[2], alt: "sunburn", title: "Солнечный ожог", description: "Тепло, оставляющее след." },
          { index: 5, image: galleryImages.illustratedPhotography[12], alt: "bottle", title: "Бутылка", description: "Послания, ждущие своего открытия." },
          { index: 6, image: galleryImages.illustratedPhotography[14], alt: "wood", title: "Дерево", description: "Текстуры природы встречаются с воображением." },
          { index: 7, image: galleryImages.illustratedPhotography[19], alt: "what", title: "What", description: "Открытая по смыслу работа, допускающая разные прочтения и воображаемые истории." },
          { index: 8, image: galleryImages.illustratedPhotography[18], alt: "bird", title: "Птица", description: "Свобода обретает крылья в неожиданных формах." },
          { index: 9, image: galleryImages.illustratedPhotography[1], alt: "ship", title: "Корабль", description: "Путешествие через мечты и воспоминания." },
          { index: 10, image: galleryImages.illustratedPhotography[3], alt: "memories", title: "Memories", description: "Фрагменты памяти переводятся в многослойные визуальные заметки." },
          { index: 11, image: galleryImages.illustratedPhotography[10], alt: "ghosts", title: "Призраки", description: "Эхо присутствия, витающее в пространстве." },
          { index: 12, image: galleryImages.illustratedPhotography[13], alt: "chat", title: "Разговор", description: "Беседы, формирующие нас." },
          { index: 13, image: galleryImages.illustratedPhotography[8], alt: "мысли", title: "Мысли", description: "Визуальный поток многослойных идей и внутренних отражений." },
          { index: 14, image: galleryImages.illustratedPhotography[16], alt: "monster", title: "Монстр", description: "Дружелюбные существа из воображения." },
          { index: 15, image: galleryImages.illustratedPhotography[7], alt: "flowers", title: "Flowers", description: "Ботаническое исследование рисунка с многослойным цветом и линией." },
          { index: 17, image: galleryImages.illustratedPhotography[0], alt: "fake", title: "Fake", description: "Концептуальный цифровой рисунок о внешнем образе, постановке и сконструированной идентичности." },
          { index: 18, image: galleryImages.illustratedPhotography[6], alt: "treeudude", title: "Древесный", description: "Где человек и природа переплетаются." },
          { index: 3, image: galleryImages.illustratedPhotography[9], alt: "looking", title: "Взгляд", description: "В поисках смысла в повседневном." },
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
          { index: 15, image: galleryImages.artTherapy[3], alt: "chalk work", title: "Работа с мелом", description: "Работа с мелом позволяет линиям оставаться открытыми, хрупкими и легко изменяемыми. Образы возникают через прикосновение, движение и непрерывную реакцию." },
          { index: 3, image: galleryImages.artTherapy[13], alt: "carib", title: "Image Continuation", description: "Выбранные вырезки или изображения используются как отправная точка и затем продолжаются разными материалами: краской, пастелью и графикой." },
          { index: 4, image: galleryImages.artTherapy[8], alt: "фроттаж текстуры", title: "Фроттаж", description: "Фроттаж - это техника натирания: бумага кладется на фактурную поверхность, а сверху проводится графитом или пастелью, чтобы проявить скрытые узоры. Полученные текстуры становятся отправной точкой для интуитивной работы и многослойной композиции." },
          { index: 5, image: galleryImages.artTherapy[5], alt: "mask", title: "Цветовые отметины", description: "Краска наносится хаотично по поверхности бумаги. Полученные отметины затем изучаются на предмет возникающих форм." },
          { index: 8, image: galleryImages.artTherapy[7], alt: "пазл-коллаж", title: "Пазл-коллаж", description: "Это упражнение начинается с вырезания формы пазла из бумаги. Не зная заранее, как всё сложится, я интуитивно оформляю каждый фрагмент по отдельности, а затем соединяю их в неожиданную коллажную композицию - результат, который невозможно было бы нарисовать намеренно." },
          { index: 9, image: galleryImages.artTherapy[14], alt: "mix3", title: "Intuitive Drawing with Music", description: "Этот рисунок создается под музыку: изменения ритма, настроения и интенсивности напрямую влияют на линии, жест и композицию." },
          { index: 10, image: galleryImages.artTherapy[9], alt: "рисунок дракона", title: "Дракон", description: "Интуитивное исследование образа, где похожие на существо формы возникают через спонтанные линии и дальнейшую доработку." },
          { index: 12, image: galleryImages.artTherapy[10], alt: "процесс рисования руками", title: "Handpainting", description: "Этот метод основан на прямом нанесении краски руками и пальцами вместо кисти. Через касание, нажим и движение появляются органичные следы, которые затем развиваются в визуальные формы." },
          { index: 13, image: galleryImages.artTherapy[11], alt: "техника отпечатка", title: "Abdruck", description: "Изображение создается через прослушивание истории и рисование того, что в ней осталось с вами. Самые яркие фрагменты, эмоции и сцены переводятся в интуитивные линии и затем собираются в композицию." },
          { index: 2, image: galleryImages.artTherapy[2], alt: "stair hair", title: "Слепой рисунок", description: "С закрытыми глазами интуитивно наносятся пастельные линии. Затем найденные формы дорабатываются и превращаются в финальное изображение." },
          { index: 16, image: galleryImages.artTherapy[4], alt: "floral", title: "Растительные отпечатки", description: "Растения и природные материалы используются как инструменты для создания отметин. Окунутые в краску и прижатые к бумаге, они создают органичные и непредсказуемые следы." },
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
