"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang } from "@/app/context/LanguageContext";

const translations = {
  en: {
    pageTitle: "Art Therapy Exercises",
    pageIntro: "Art therapy uses creative expression as a pathway to healing, self-discovery, and emotional well-being. Through various exercises and techniques, we can access parts of ourselves that words alone cannot reach. The medium we choose fundamentally transforms our creative experience—working with clay grounds us in the body, while watercolors invite us to surrender control. Each material carries its own language, its own resistance, its own way of meeting us. I've started exploring different exercises myself—you can see some of them below.",
    imagesComingSoon: "Images coming soon",
    navNature: "Nature",
    navSensory: "Sensory",
    navChance: "Chance",
    navFragments: "Fragments",
    navImagination: "Imagination",
    sections: [
      {
        id: "nature",
        title: "Creating with Nature",
        description: "These exercises explore the intersection of art and the natural world, using organic materials and natural processes as creative partners. By working with elements like stones, rain, and flowers, we learn to surrender control and embrace the unexpected beauty that emerges from collaboration with nature.",
        subsections: [
          {
            id: "dipping",
            title: "Dipping Nature",
            description: "Using flowers, leaves, greens, stones, and potatoes gathered from the surroundings, this technique involves dipping natural materials into paint and pressing them onto paper. The unpredictability of each print invites us to embrace imperfection, let go of control, and then add our own marks to transform the accident into something personal.",
            imageGroups: [
              { title: "Stone Painting" },
              { title: "Botanical Work" },
              { title: "Potato Dipping" },
            ],
          },
          {
            id: "rain",
            title: "Weather Collaborations",
            description: "Collaborating with weather transforms the creative act into a partnership with natural forces. By placing pigments on paper and letting rain, wind, or sunshine interact with the materials, we surrender control to the elements—dissolving boundaries between artist and environment.",
          },
          {
            id: "nature-imprint",
            title: "Impermanence Work",
            description: "Nature imprint techniques capture the textures and forms of the natural world directly onto paper or fabric. By pressing leaves, bark, flowers, and other organic materials into wet paint or ink, we create intimate records of nature's patterns and structures.",
          },
        ],
      },
      {
        id: "sensory",
        title: "Sensory Work",
        description: "These exercises engage the body directly in the creative process, using touch, texture, and physical sensation as pathways to expression. By working with our hands and exploring different materials, we reconnect with the primal joy of making and discover new ways to communicate beyond words.",
        subsections: [
          {
            id: "pottery",
            title: "Pottery",
            description: "Working with clay engages the whole body in a grounding, meditative practice. The cool, malleable material responds to every touch, requiring presence and patience as forms slowly emerge.",
            secondaryDescription: "Pottery connects us to one of humanity's oldest crafts, teaching us about impermanence, transformation, and the beauty of functional art shaped by human hands.",
          },
          {
            id: "felt",
            title: "Felt",
            description: "Working with felt offers a tactile, meditative experience. The soft fibers respond to gentle manipulation, allowing forms to emerge slowly through patient, repetitive motion.",
          },
          {
            id: "handpainting",
            title: "Hand Painting",
            description: "Painting directly with hands removes the barrier between artist and material. Fingers become brushes, palms become tools, and the act of creation becomes visceral and immediate.",
          },
        ],
      },
      {
        id: "chance",
        title: "Chance Based Methods",
        description: "These techniques embrace randomness and relinquish control, allowing unexpected forms and patterns to emerge. By introducing elements of chance into the creative process, we quiet the inner critic and open ourselves to surprise, discovering beauty in the unplanned and the accidental.",
        subsections: [
          {
            id: "inkblowing",
            title: "Ink Blowing",
            description: "Ink blowing transforms breath into art. Drops of ink are placed on paper and blown in various directions, creating organic, tree-like forms that seem to grow on their own.",
            secondaryDescription: "This technique connects the act of breathing—so fundamental to life—with creative expression, reminding us that art can emerge from the simplest, most natural gestures.",
          },
          {
            id: "blinddrawing",
            title: "Blind Drawing",
            description: "Blind drawing removes the visual feedback loop, forcing us to trust our hand and intuition. Without seeing what we create, we bypass self-judgment and allow pure expression to flow.",
            secondaryDescription: "The results are often surprising and liberating—imperfect lines that capture essence rather than appearance, teaching us that mistakes can be doorways to discovery.",
          },
          {
            id: "transfer",
            title: "Transfer",
            description: "Transfer techniques involve moving images or textures from one surface to another, creating ghostly impressions and unexpected combinations. The process introduces happy accidents and unpredictable results.",
            secondaryDescription: "By layering transferred images, we build visual narratives that feel dreamlike and mysterious, where meaning emerges through the interplay of chance and intention.",
          },
        ],
      },
      {
        id: "fragments",
        title: "Working with Fragments",
        description: "These exercises explore the art of reassembly and recontextualization, using broken pieces, cutouts, and found objects to create new wholes. By working with fragments, we learn that destruction can lead to creation, and that meaning can emerge from seemingly disconnected parts.",
        subsections: [
          {
            id: "collage",
            title: "Collage",
            description: "Collage invites us to see the world as a collection of possibilities. By cutting, tearing, and reassembling images and materials, we create new narratives from existing fragments.",
            secondaryDescription: "This technique teaches us that beauty can emerge from disruption, and that bringing together disparate elements can reveal unexpected connections and meanings.",
          },
          {
            id: "arranged",
            title: "Arranged Objects",
            description: "Arranging found objects transforms everyday items into art. By carefully placing and composing objects in space, we discover relationships between form, color, and meaning.",
            secondaryDescription: "This meditative practice encourages mindful observation and teaches us to see the extraordinary within the ordinary, finding harmony in the arrangement of simple things.",
          },
        ],
      },
      {
        id: "imagination",
        title: "Working with Imagination",
        description: "These exercises tap into the boundless realm of imagination, using storytelling and visualization as gateways to inner exploration. By engaging with fantasy and narrative, we access deeper layers of consciousness where symbols, archetypes, and personal mythology reside.",
        subsections: [
          {
            id: "fairytale",
            title: "Fairy Tale Work",
            description: "Fairy tales carry ancient wisdom wrapped in symbol and metaphor. By illustrating, rewriting, or embodying these timeless stories, we connect with universal themes of transformation and growth.",
            secondaryDescription: "This work allows us to explore our own life narratives through the safe container of story, discovering where we are hero, helper, or in need of rescue.",
          },
          {
            id: "guidedimagery",
            title: "Guided Imagery",
            description: "Guided visualization takes us on journeys through inner landscapes. These travels allow us to encounter symbols, guides, and places that hold personal meaning and therapeutic insight.",
            secondaryDescription: "By giving visual form to these inner experiences through art, we bridge the imaginal and material worlds, making the invisible visible and bringing back treasures from the depths.",
          },
        ],
      },
    ],
  },
  de: {
    pageTitle: "Kunsttherapeutische Übungen",
    pageIntro: "Kunsttherapie nutzt kreativen Ausdruck als Weg zur Heilung, Selbstentdeckung und emotionalem Wohlbefinden. Durch verschiedene Übungen und Techniken können wir auf Teile unserer selbst zugreifen, die Worte allein nicht erreichen. Das gewählte Medium verändert unsere kreative Erfahrung grundlegend – das Arbeiten mit Ton erdet uns im Körper, während Aquarelle uns einladen, die Kontrolle loszulassen. Jedes Material trägt seine eigene Sprache, seinen eigenen Widerstand, seine eigene Art, uns zu begegnen. Ich habe selbst begonnen, verschiedene Übungen zu erkunden – einige davon könnt ihr unten sehen.",
    imagesComingSoon: "Bilder folgen bald",
    navNature: "Natur",
    navSensory: "Sensorisch",
    navChance: "Zufall",
    navFragments: "Fragmente",
    navImagination: "Vorstellungskraft",
    sections: [
      {
        id: "nature",
        title: "Mit der Natur schaffen",
        description: "Diese Übungen erkunden die Schnittstelle von Kunst und der natürlichen Welt und nutzen organische Materialien und natürliche Prozesse als kreative Partner.",
        subsections: [
          {
            id: "dipping",
            title: "Naturdruck",
            description: "Unter Verwendung von Blumen, Blättern, Steinen und Kartoffeln aus der Umgebung werden natürliche Materialien in Farbe getaucht und auf Papier gedrückt. Die Unvorhersehbarkeit lädt ein, Unvollkommenheit zu umarmen.",
            imageGroups: [
              { title: "Steinmalerei" },
              { title: "Botanische Arbeit" },
              { title: "Kartoffeldruck" },
            ],
          },
          {
            id: "rain",
            title: "Wetter-Kollaborationen",
            description: "Die Zusammenarbeit mit dem Wetter verwandelt den kreativen Akt in eine Partnerschaft mit natürlichen Kräften. Durch das Platzieren von Pigmenten auf Papier und das Einwirken von Regen, Wind oder Sonnenschein geben wir die Kontrolle an die Elemente ab.",
          },
          {
            id: "nature-imprint",
            title: "Vergänglichkeitsarbeit",
            description: "Naturabdrucktechniken halten die Texturen und Formen der natürlichen Welt direkt auf Papier oder Stoff fest. Durch das Pressen von Blättern, Rinde und Blumen in nasse Farbe entstehen intime Aufzeichnungen der Muster der Natur.",
          },
        ],
      },
      {
        id: "sensory",
        title: "Sensorische Arbeit",
        description: "Diese Übungen beziehen den Körper direkt in den kreativen Prozess ein und nutzen Berührung, Textur und körperliche Empfindung als Ausdruckswege.",
        subsections: [
          {
            id: "pottery",
            title: "Töpfern",
            description: "Das Arbeiten mit Ton bezieht den ganzen Körper in eine erdende, meditative Praxis ein. Das kühle, formbare Material reagiert auf jede Berührung.",
            secondaryDescription: "Töpfern verbindet uns mit einem der ältesten Handwerke der Menschheit und lehrt uns über Vergänglichkeit und Transformation.",
          },
          {
            id: "felt",
            title: "Filz",
            description: "Das Arbeiten mit Filz bietet eine taktile, meditative Erfahrung. Die weichen Fasern reagieren auf sanfte Manipulation und ermöglichen es Formen, langsam zu entstehen.",
          },
          {
            id: "handpainting",
            title: "Handmalerei",
            description: "Das direkte Malen mit den Händen beseitigt die Barriere zwischen Künstler und Material. Finger werden zu Pinseln, Handflächen zu Werkzeugen.",
          },
        ],
      },
      {
        id: "chance",
        title: "Zufallsbasierte Methoden",
        description: "Diese Techniken umfassen Zufälligkeit und verzichten auf Kontrolle, sodass unerwartete Formen und Muster entstehen können.",
        subsections: [
          {
            id: "inkblowing",
            title: "Tinteblasen",
            description: "Tinteblasen verwandelt Atem in Kunst. Tintentropfen werden auf Papier gelegt und in verschiedene Richtungen geblasen, wodurch organische, baumartige Formen entstehen.",
            secondaryDescription: "Diese Technik verbindet den Atemakt mit kreativem Ausdruck.",
          },
          {
            id: "blinddrawing",
            title: "Blindzeichnung",
            description: "Blindzeichnung entfernt die visuelle Rückkopplungsschleife und zwingt uns, unserer Hand und Intuition zu vertrauen. Ohne zu sehen, was wir schaffen, umgehen wir Selbstkritik.",
            secondaryDescription: "Die Ergebnisse sind oft überraschend und befreiend – unvollkommene Linien, die Essenz statt Erscheinung erfassen.",
          },
          {
            id: "transfer",
            title: "Transfer",
            description: "Transfertechniken beinhalten das Übertragen von Bildern oder Texturen von einer Oberfläche auf eine andere, wodurch geisterhafte Impressionen entstehen.",
            secondaryDescription: "Durch das Überlagern übertragener Bilder entstehen visuelle Erzählungen, die traumhaft und geheimnisvoll wirken.",
          },
        ],
      },
      {
        id: "fragments",
        title: "Mit Fragmenten arbeiten",
        description: "Diese Übungen erkunden die Kunst der Neuzusammensetzung und Rekontextualisierung mit zerbrochenen Stücken, Ausschnitten und gefundenen Objekten.",
        subsections: [
          {
            id: "collage",
            title: "Collage",
            description: "Collage lädt uns ein, die Welt als eine Sammlung von Möglichkeiten zu sehen. Durch Schneiden, Reißen und Neuzusammensetzen entstehen neue Erzählungen.",
            secondaryDescription: "Diese Technik lehrt uns, dass Schönheit aus Störungen entstehen kann.",
          },
          {
            id: "arranged",
            title: "Angeordnete Objekte",
            description: "Das Anordnen von gefundenen Objekten verwandelt alltägliche Gegenstände in Kunst. Durch sorgfältiges Platzieren entdecken wir Beziehungen zwischen Form, Farbe und Bedeutung.",
            secondaryDescription: "Diese meditative Praxis fördert achtsame Beobachtung.",
          },
        ],
      },
      {
        id: "imagination",
        title: "Mit der Vorstellungskraft arbeiten",
        description: "Diese Übungen schöpfen aus dem grenzenlosen Reich der Vorstellungskraft und nutzen Geschichtenerzählen und Visualisierung als Tore zur inneren Erkundung.",
        subsections: [
          {
            id: "fairytale",
            title: "Märchenarbeit",
            description: "Märchen tragen uralte Weisheit, in Symbol und Metapher gehüllt. Durch das Illustrieren, Umschreiben oder Verkörpern dieser zeitlosen Geschichten verbinden wir uns mit universellen Themen.",
            secondaryDescription: "Diese Arbeit ermöglicht es uns, unsere eigenen Lebenserzählungen durch den sicheren Rahmen der Geschichte zu erkunden.",
          },
          {
            id: "guidedimagery",
            title: "Geführte Imagination",
            description: "Geführte Visualisierung nimmt uns mit auf Reisen durch innere Landschaften. Diese Reisen ermöglichen es uns, Symbole, Führer und Orte zu begegnen, die persönliche Bedeutung tragen.",
            secondaryDescription: "Durch die visuelle Gestaltung dieser inneren Erfahrungen überbrücken wir die imaginalen und materiellen Welten.",
          },
        ],
      },
    ],
  },
  ru: {
    pageTitle: "Упражнения арт-терапии",
    pageIntro: "Арт-терапия использует творческое самовыражение как путь к исцелению, самопознанию и эмоциональному благополучию. Через различные упражнения и техники мы можем получить доступ к тем частям себя, которые слова не могут достичь. Выбранный нами материал коренным образом меняет наш творческий опыт — работа с глиной заземляет нас в теле, тогда как акварели приглашают отпустить контроль. Я сама начала исследовать различные упражнения — некоторые из них вы можете увидеть ниже.",
    imagesComingSoon: "Изображения скоро появятся",
    navNature: "Природа",
    navSensory: "Сенсорное",
    navChance: "Случайность",
    navFragments: "Фрагменты",
    navImagination: "Воображение",
    sections: [
      {
        id: "nature",
        title: "Творчество с природой",
        description: "Эти упражнения исследуют пересечение искусства и природного мира, используя органические материалы и природные процессы как творческих партнёров.",
        subsections: [
          {
            id: "dipping",
            title: "Природные отпечатки",
            description: "Используя цветы, листья, камни и картофель, найденные в окрестностях, эта техника предполагает окунание природных материалов в краску и прижимание их к бумаге.",
            imageGroups: [
              { title: "Живопись камнями" },
              { title: "Ботаническая работа" },
              { title: "Картофельные отпечатки" },
            ],
          },
          {
            id: "rain",
            title: "Сотрудничество с погодой",
            description: "Сотрудничество с погодой превращает творческий акт в партнёрство с природными силами. Помещая пигменты на бумагу и позволяя дождю, ветру или солнцу взаимодействовать с материалами, мы отдаём контроль стихиям.",
          },
          {
            id: "nature-imprint",
            title: "Работа с непостоянством",
            description: "Техники природных отпечатков запечатлевают текстуры и формы природного мира непосредственно на бумаге или ткани.",
          },
        ],
      },
      {
        id: "sensory",
        title: "Сенсорная работа",
        description: "Эти упражнения непосредственно вовлекают тело в творческий процесс, используя прикосновение, текстуру и физическое ощущение как пути выражения.",
        subsections: [
          {
            id: "pottery",
            title: "Гончарное дело",
            description: "Работа с глиной вовлекает всё тело в заземляющую, медитативную практику. Прохладный, пластичный материал реагирует на каждое прикосновение.",
            secondaryDescription: "Гончарное дело соединяет нас с одним из древнейших ремёсел человечества, обучая непостоянству и трансформации.",
          },
          {
            id: "felt",
            title: "Войлок",
            description: "Работа с войлоком предлагает тактильный, медитативный опыт. Мягкие волокна реагируют на нежное воздействие, позволяя формам медленно возникать.",
          },
          {
            id: "handpainting",
            title: "Рисование руками",
            description: "Непосредственное рисование руками устраняет барьер между художником и материалом. Пальцы становятся кистями, ладони — инструментами.",
          },
        ],
      },
      {
        id: "chance",
        title: "Методы, основанные на случайности",
        description: "Эти техники embraces случайность и отказываются от контроля, позволяя возникать неожиданным формам и паттернам.",
        subsections: [
          {
            id: "inkblowing",
            title: "Выдувание туши",
            description: "Выдувание туши превращает дыхание в искусство. Капли туши помещаются на бумагу и выдуваются в разных направлениях, создавая органические, древовидные формы.",
            secondaryDescription: "Эта техника соединяет акт дыхания с творческим выражением.",
          },
          {
            id: "blinddrawing",
            title: "Слепой рисунок",
            description: "Слепой рисунок устраняет визуальную обратную связь, заставляя нас доверять своей руке и интуиции.",
            secondaryDescription: "Результаты часто удивляют и освобождают — несовершенные линии, захватывающие суть, а не внешность.",
          },
          {
            id: "transfer",
            title: "Перенос",
            description: "Техники переноса предполагают перемещение изображений или текстур с одной поверхности на другую, создавая призрачные впечатления.",
            secondaryDescription: "Накладывая перенесённые изображения, мы создаём визуальные нарративы, которые кажутся сновидческими и загадочными.",
          },
        ],
      },
      {
        id: "fragments",
        title: "Работа с фрагментами",
        description: "Эти упражнения исследуют искусство повторной сборки и переосмысления, используя сломанные части, вырезки и найденные объекты.",
        subsections: [
          {
            id: "collage",
            title: "Коллаж",
            description: "Коллаж приглашает нас видеть мир как коллекцию возможностей. Разрезая, разрывая и пересобирая изображения и материалы, мы создаём новые нарративы.",
            secondaryDescription: "Эта техника учит нас, что красота может возникать из разрушения.",
          },
          {
            id: "arranged",
            title: "Расположенные объекты",
            description: "Расположение найденных объектов превращает повседневные предметы в искусство. Тщательно размещая объекты в пространстве, мы открываем отношения между формой, цветом и смыслом.",
            secondaryDescription: "Эта медитативная практика поощряет осознанное наблюдение.",
          },
        ],
      },
      {
        id: "imagination",
        title: "Работа с воображением",
        description: "Эти упражнения обращаются к безграничному царству воображения, используя рассказывание историй и визуализацию как врата во внутреннее исследование.",
        subsections: [
          {
            id: "fairytale",
            title: "Работа со сказками",
            description: "Сказки несут древнюю мудрость, облечённую в символ и метафору. Иллюстрируя, переписывая или воплощая эти вечные истории, мы соединяемся с универсальными темами.",
            secondaryDescription: "Эта работа позволяет нам исследовать собственные жизненные нарративы через безопасный контейнер истории.",
          },
          {
            id: "guidedimagery",
            title: "Управляемые образы",
            description: "Управляемая визуализация уводит нас в путешествия по внутренним ландшафтам. Эти путешествия позволяют нам встретить символы, проводников и места, несущие личный смысл.",
            secondaryDescription: "Придавая визуальную форму этим внутренним переживаниям через искусство, мы соединяем воображаемый и материальный миры.",
          },
        ],
      },
    ],
  },
} as const;

type ArtTherapyText = typeof translations[keyof typeof translations];

const ArtTherapyTextContext = createContext<ArtTherapyText | null>(null);

export function ArtTherapyTextProvider({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  return (
    <ArtTherapyTextContext.Provider value={translations[lang]}>
      {children}
    </ArtTherapyTextContext.Provider>
  );
}

export function useArtTherapyText(): ArtTherapyText {
  const ctx = useContext(ArtTherapyTextContext);
  if (!ctx) throw new Error("useArtTherapyText must be used within ArtTherapyTextProvider");
  return ctx;
}
