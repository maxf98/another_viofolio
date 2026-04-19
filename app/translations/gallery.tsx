"use client";

import { createContext, useContext, ReactNode } from "react";
import { useLang } from "@/app/context/LanguageContext";
import { GallerySection, galleryImages } from "@/app/translations/galleryImages";

export interface TechniqueTranslation {
  id: string;
  title: string;
  description: string;
}

export interface TechniqueGroupTranslation {
  id: string;
  groupTitle: string;
  groupDescription: string;
  techniques: TechniqueTranslation[];
}

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
    groups: [
      {
        id: "exploring-surroundings",
        groupTitle: "Exploring Surroundings",
        groupDescription:
          "Turning attention outward — to textures, surfaces, light, and the natural world. These methods use the immediate environment as raw material, capturing what is already there through rubbing, pressing, and tracing the traces that the world leaves behind.",
        techniques: [
          {
            id: "imprinting-nature",
            title: "Nature",
            description:
              "Organic materials are pressed into paint or ink and transferred onto paper, creating direct impressions of natural forms. Each print is unique, shaped by the material's own texture and structure, and can then be further developed through your own imagination.",
          },
          {
            id: "capturing-shadow",
            title: "Sun",
            description:
              "Objects are placed in light and their shadows traced or painted onto paper. The resulting outlines and silhouettes reveal hidden geometries and relationships between form, light, and space.",
          },
          {
            id: "rain",
            title: "Rain",
            description:
              "Paper is left out in the rain with paint or ink applied to the surface. The falling drops create unpredictable marks and patterns, turning weather into a collaborator in the making of the image.",
          },
          {
            id: "frottage",
            title: "Frottage",
            description:
              "Paper is placed over textured surfaces and graphite or pastel is drawn across it to capture hidden patterns. The collected textures become starting points for intuitive image-making and layered composition.",
          },
        ],
      },
      {
        id: "chance-and-material",
        groupTitle: "Exploring Chance",
        groupDescription:
          "Methods that embrace unpredictability by letting physical materials take the lead. Ink blown across paper, plants pressed into paint — these processes invite chance as a collaborator, creating forms that couldn't be planned or controlled.",
        techniques: [
          {
            id: "blowout",
            title: "Ink & Straw",
            description:
              "Ink is flicked or placed onto paper and blown with a straw, creating unpredictable breath-shaped marks. The resulting forms are then observed and intuitively developed using additional materials.",
          },
          {
            id: "abklatsch",
            title: "Imprint",
            description:
              "A freshly painted surface is pressed onto paper and lifted, transferring an impression of the original image. The resulting mirror print retains traces of the source while becoming something entirely its own.",
          },
          {
            id: "blind-explorations",
            title: "Blind Explorations",
            description:
              "Marks made without looking — eyes closed, hand moving freely across the surface. The resulting lines and forms are then observed and developed into something new.",
          },
          {
            id: "puzzle",
            title: "Puzzle",
            description:
              "Puzzle pieces are cut out and used as individual surfaces for drawing. Each piece receives its own spontaneous mark or image, made without knowing how it will connect to the rest. When reassembled, the random drawings create an unexpected collective composition.",
          },
          {
            id: "collage",
            title: "Collage",
            description:
              "Found images, textures, and cutouts are assembled intuitively into a new composition. The process of choosing, cutting, and placing fragments creates unexpected connections and meanings.",
          },
        ],
      },
      {
        id: "intuition-and-inner-world",
        groupTitle: "Intuition & Inner World",
        groupDescription:
          "Working without the guidance of sight, sound, or plan. These methods access inner imagery by suspending control — allowing the unconscious to express itself through mark, line, and form.",
        techniques: [
          {
            id: "intuitive-drawing",
            title: "Intuitive Drawing with Music",
            description:
              "Made while listening to music, letting changes in rhythm, mood, and intensity influence the marks and composition in real time.",
          },
          {
            id: "handpainting",
            title: "Handpainting",
            description:
              "Direct contact with paint using hands and fingers instead of brushes. Layer by layer, pressure, movement, and touch create organic marks that are then observed and developed into image forms.",
          },
          {
            id: "imagination-travel",
            title: "Imagination Travel",
            description:
              "A guided inner journey where images, scenes, and feelings are explored through the imagination. Afterwards, impressions are translated into marks and forms on paper.",
          },
        ],
      },
    ] as TechniqueGroupTranslation[],
    digitalGroups: [
      {
        id: "enhanced-photography",
        groupTitle: "Enhanced Photography",
        groupDescription:
          "Photographs from my surroundings, reshaped through editing and layering. The camera becomes a starting point — the image evolves through manipulation, texture, and digital intervention.",
        techniques: [{ id: "enhanced-photography-images", title: "Enhanced Photography", description: "" }],
      },
      {
        id: "illustrated-photography",
        groupTitle: "Illustrated Photography",
        groupDescription:
          "Photography as a foundation for drawing and painting. Photographs are extended, layered with illustration, and transformed into something between document and imagination.",
        techniques: [{ id: "illustrated-photography-images", title: "Illustrated Photography", description: "" }],
      },
      {
        id: "digital-illustration",
        groupTitle: "Digital Illustration",
        groupDescription:
          "Images built from drawing and painting digitally, without a photographic base. These works explore character, pattern, and composition through mark-making in a digital medium.",
        techniques: [{ id: "digital-illustration-images", title: "Digital Illustration", description: "" }],
      },
      {
        id: "animation",
        groupTitle: "Animation",
        groupDescription:
          "Still images set into motion. Short loops and animated sequences that bring a single moment or concept to life through movement.",
        techniques: [{ id: "animation-images", title: "Animation", description: "" }],
      },
    ] as TechniqueGroupTranslation[],
    navIllustratedPhotography: "Digital Explorations",
    navAnalogueExplorations: "Analogue Explorations",
    navMonkeybrain: "Monkeybrain Magazine",
    sections: [
      {
        id: "illustrated-photography",
        title: "Digital Explorations",
        description:
          "My digital practice follows an experimental, mixed-media approach, merging elements of surrealism and realism. Some works begin with snapshots from my surroundings, which I develop into imaginative worlds, while others are digital illustrations built entirely from imagination. Through editing, drawing, and animation, I explore new forms and narratives.",
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
          "My analogue practice explores my surroundings, chance, intuition, and the inner world through physical materials and experimental methods. Rooted in my art therapy journey, I work with textures, surfaces, light, and natural traces as raw material while leaving room for unpredictability to shape the image. By suspending control and responding to what emerges, the process becomes a dialogue between material, unconscious imagery, and open-ended discovery.",
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
      title: "Monkeybrain Magazin",
      description: "Entwickelt als meine Bachelorarbeit an der NABA Mailand in Grafikdesign und Art Direction verbindet dieses Projekt Mixed Media, illustrierte Fotografie und Bildbearbeitung mit Forschung zu menschlicher Psychologie und innerer Erfahrung – das Ergebnis ist Monkey Brain, ein illustriertes Magazin für junge Erwachsene, das Bewusstsein durch narrativ geführte Bildwelten vermittelt.",
      tapToFlickThrough: "zum Durchblättern tippen",
      betterInLandscape: "besser im Querformat",
    },
    disclaimer: "Interesse am Prozess hinter meiner Arbeit? Schau in meine Socials",
    groups: [
      {
        id: "exploring-surroundings",
        groupTitle: "Die Umgebung erkunden",
        groupDescription:
          "Die Aufmerksamkeit nach außen richten — auf Texturen, Oberflächen, Licht und die natürliche Welt. Diese Methoden nutzen die unmittelbare Umgebung als Rohmaterial und erfassen, was bereits vorhanden ist, durch Reiben, Drücken und das Nachzeichnen von Spuren, die die Welt hinterlässt.",
        techniques: [
          {
            id: "imprinting-nature",
            title: "Natur",
            description:
              "Organische Materialien werden in Farbe oder Tinte gedrückt und auf Papier übertragen, wodurch direkte Abdrücke natürlicher Formen entstehen. Jeder Druck ist einzigartig, geprägt von der eigenen Textur und Struktur des Materials, und kann dann durch die eigene Vorstellungskraft weiterentwickelt werden.",
          },
          {
            id: "capturing-shadow",
            title: "Sonne",
            description:
              "Objekte werden ins Licht gestellt und ihre Schatten auf Papier nachgezeichnet oder gemalt. Die entstehenden Umrisse und Silhouetten enthüllen verborgene Geometrien und Beziehungen zwischen Form, Licht und Raum.",
          },
          {
            id: "rain",
            title: "Regen",
            description:
              "Papier wird mit aufgetragener Farbe oder Tinte im Regen liegen gelassen. Die fallenden Tropfen erzeugen unvorhersehbare Spuren und Muster und machen das Wetter zu einem Mitgestalter des Bildes.",
          },
          {
            id: "frottage",
            title: "Frottage",
            description:
              "Papier wird auf strukturierte Oberflächen gelegt und mit Graphit oder Pastell überstrichen, um verborgene Muster sichtbar zu machen. Die gesammelten Texturen werden zu Ausgangspunkten für intuitives Arbeiten und vielschichtige Kompositionen.",
          },
        ],
      },
      {
        id: "chance-and-material",
        groupTitle: "Den Zufall erkunden",
        groupDescription:
          "Methoden, die das Unvorhersehbare willkommen heißen, indem sie physischen Materialien die Führung überlassen. Tinte, die über Papier geblasen wird, Pflanzen, die in Farbe gepresst werden — diese Prozesse laden den Zufall als Mitgestalter ein und schaffen Formen, die nicht geplant oder kontrolliert werden konnten.",
        techniques: [
          {
            id: "blowout",
            title: "Tinte & Strohhalm",
            description:
              "Tinte wird auf Papier getropft und mit einem Strohhalm geblasen, wodurch unvorhersehbare, atemförmige Spuren entstehen. Die entstandenen Formen werden dann beobachtet und mit zusätzlichen Materialien intuitiv weiterentwickelt.",
          },
          {
            id: "abklatsch",
            title: "Abklatsch",
            description:
              "Eine frisch bemalte Oberfläche wird auf Papier gedrückt und abgehoben, wobei ein Abdruck des ursprünglichen Bildes übertragen wird. Der entstandene Spiegeldruck bewahrt Spuren der Quelle und wird dabei zu etwas völlig Eigenem.",
          },
          {
            id: "blind-explorations",
            title: "Blinde Erkundungen",
            description:
              "Spuren, die ohne Hinsehen entstehen — Augen geschlossen, die Hand bewegt sich frei über die Oberfläche. Die entstehenden Linien und Formen werden dann beobachtet und zu etwas Neuem weiterentwickelt.",
          },
          {
            id: "puzzle",
            title: "Puzzle",
            description:
              "Puzzleteile werden herausgeschnitten und als einzelne Zeichenflächen verwendet. Jedes Teil erhält seine eigene spontane Spur oder sein eigenes Bild, ohne zu wissen, wie es sich mit dem Rest verbinden wird. Wenn es wieder zusammengesetzt wird, entsteht aus den zufälligen Zeichnungen eine unerwartete kollektive Komposition.",
          },
          {
            id: "collage",
            title: "Collage",
            description:
              "Gefundene Bilder, Texturen und Ausschnitte werden intuitiv zu einer neuen Komposition zusammengestellt. Das Auswählen, Ausschneiden und Platzieren von Fragmenten schafft unerwartete Verbindungen und Bedeutungen.",
          },
        ],
      },
      {
        id: "intuition-and-inner-world",
        groupTitle: "Intuition & Innenwelt",
        groupDescription:
          "Arbeiten ohne die Führung von Blick, Klang oder Plan. Diese Methoden ermöglichen den Zugang zu inneren Bildern, indem die Kontrolle ausgesetzt wird — und das Unbewusste sich durch Spur, Linie und Form ausdrücken darf.",
        techniques: [
          {
            id: "intuitive-drawing",
            title: "Intuitives Zeichnen mit Musik",
            description:
              "Entsteht beim Hören von Musik, wobei Veränderungen in Rhythmus, Stimmung und Intensität die Spuren und die Komposition in Echtzeit beeinflussen.",
          },
          {
            id: "handpainting",
            title: "Handpainting",
            description:
              "Direkter Kontakt mit Farbe — mit Händen und Fingern statt Pinseln. Schicht für Schicht entstehen durch Druck, Bewegung und Berührung organische Spuren, die dann beobachtet und zu Bildformen weiterentwickelt werden.",
          },
          {
            id: "imagination-travel",
            title: "Imaginationsreise",
            description:
              "Eine geführte innere Reise, bei der Bilder, Szenen und Gefühle durch die Vorstellungskraft erkundet werden. Anschließend werden Eindrücke in Spuren und Formen auf Papier übersetzt.",
          },
        ],
      },
    ] as TechniqueGroupTranslation[],
    digitalGroups: [
      {
        id: "enhanced-photography",
        groupTitle: "Bearbeitete Fotografie",
        groupDescription:
          "Fotografien aus meiner Umgebung, umgeformt durch Bearbeitung und Überlagerung. Die Kamera wird zum Ausgangspunkt — das Bild entwickelt sich durch Manipulation, Textur und digitalen Eingriff.",
        techniques: [{ id: "enhanced-photography-images", title: "Bearbeitete Fotografie", description: "" }],
      },
      {
        id: "illustrated-photography",
        groupTitle: "Illustrierte Fotografie",
        groupDescription:
          "Fotografie als Grundlage für Zeichnung und Malerei. Fotografien werden erweitert, mit Illustration überlagert und in etwas zwischen Dokument und Vorstellung verwandelt.",
        techniques: [{ id: "illustrated-photography-images", title: "Illustrierte Fotografie", description: "" }],
      },
      {
        id: "digital-illustration",
        groupTitle: "Digitale Illustration",
        groupDescription:
          "Bilder, die durch digitales Zeichnen und Malen entstehen, ohne fotografische Grundlage. Diese Arbeiten erkunden Figur, Muster und Komposition durch Setzung von Spuren im digitalen Medium.",
        techniques: [{ id: "digital-illustration-images", title: "Digitale Illustration", description: "" }],
      },
      {
        id: "animation",
        groupTitle: "Animation",
        groupDescription:
          "Stillbilder, die in Bewegung versetzt werden. Kurze Loops und animierte Sequenzen, die einen einzelnen Moment oder ein Konzept durch Bewegung zum Leben erwecken.",
        techniques: [{ id: "animation-images", title: "Animation", description: "" }],
      },
    ] as TechniqueGroupTranslation[],
    navIllustratedPhotography: "Digitale Erkundungen",
    navAnalogueExplorations: "Analoge Erkundungen",
    navMonkeybrain: "Monkeybrain Magazin",
    sections: [
      {
        id: "illustrated-photography",
        title: "Digitale Erkundungen",
        description:
          "Meine digitale Praxis folgt einem experimentellen Mixed-Media-Ansatz, der Elemente des Surrealismus und Realismus miteinander verbindet. Manche Arbeiten beginnen mit Momentaufnahmen aus meiner Umgebung, die ich zu imaginativen Welten weiterentwickle, während andere digitale Illustrationen vollständig aus der Vorstellung entstehen. Durch Bearbeitung, Zeichnung und Animation erkunde ich neue Formen und Erzählungen.",
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
        title: "Analoge Erkundungen",
        description:
          "Meine analoge Praxis erforscht meine Umgebung, den Zufall, die Intuition und die innere Welt durch physische Materialien und experimentelle Methoden. Verwurzelt in meiner kunsttherapeutischen Reise arbeite ich mit Texturen, Oberflächen, Licht und natürlichen Spuren als Ausgangsmaterial und lasse zugleich Unvorhersehbarkeit das Bild mitformen. Indem ich Kontrolle loslasse und auf das reagiere, was entsteht, wird der Prozess zu einem Dialog zwischen Material, unbewussten Bildern und offener Entdeckung.",
        images: [
          { index: 0, image: galleryImages.artTherapy[0], alt: "blowout", title: "Tinte & Strohhalm", description: "Diese Methode verwendet Tinte, einen Pinsel und einen Strohhalm, um zufallsbasierte Bilder zu erzeugen. Tinte wird auf Papier gekleckst oder getropft und über die Oberfläche geblasen, wodurch unvorhersehbare, atemförmige Spuren entstehen. Die resultierenden Formen werden dann beobachtet und mit zusätzlichen Materialien intuitiv weiterentwickelt, sodass das Bild durch Reaktion entsteht." },
          { index: 15, image: galleryImages.artTherapy[3], alt: "chalk work", title: "Kreide", description: "Das Arbeiten mit Kreide ermöglicht es, Spuren offen, fragil und leicht veränderbar zu halten. Bilder entstehen durch Berührung, Bewegung und kontinuierliche Reaktion auf das, was auf der Oberfläche erscheint." },
          { index: 3, image: galleryImages.artTherapy[13], alt: "carib", title: "Bildfortsetzung", description: "Ausgewählte Ausschnitte oder Bilder werden als Ausgangspunkt platziert und anschließend mit verschiedenen Medien wie Farbe, Pastell und Zeichenmaterialien weitergeführt." },
          { index: 4, image: galleryImages.artTherapy[8], alt: "frottage texture study", title: "Frottage", description: "Frottage ist eine Abriebtechnik, bei der Papier auf strukturierte Oberflächen gelegt und mit Graphit oder Pastell überrieben wird, um verborgene Muster sichtbar zu machen. Die gesammelten Texturen werden zu Ausgangspunkten für intuitives Arbeiten und vielschichtige Kompositionen." },
          { index: 9, image: galleryImages.artTherapy[14], alt: "mix3", title: "Intuitives Zeichnen mit Musik", description: "Diese Zeichnung entsteht beim Hören von Musik, wobei Veränderungen in Rhythmus, Stimmung und Intensität die Spuren und die Komposition beeinflussen." },
          { index: 10, image: galleryImages.artTherapy[9], alt: "dragon drawing", title: "Drache", description: "Eine intuitive Bildstudie, bei der durch spontane Markierungen und Weiterentwicklung wesenartige Formen entstehen." },
          { index: 12, image: galleryImages.artTherapy[10], alt: "handpainting process", title: "Handpainting", description: "Handpainting konzentriert sich auf den direkten Kontakt mit Farbe – mit Händen und Fingern statt Pinseln. Schicht für Schicht entstehen durch Druck, Bewegung und Berührung organische Spuren, die beobachtet und zu Bildformen weiterentwickelt werden." },
          { index: 13, image: galleryImages.artTherapy[11], alt: "abdruck print technique", title: "Abdruck", description: "Ein Bild entsteht durch das Hören einer Geschichte und das Zeichnen dessen, was hängen bleibt. Die lebhaftesten Fragmente, Gefühle und Szenen werden in intuitive Spuren übersetzt und zu einer Komposition ausgearbeitet." },
          { index: 2, image: galleryImages.artTherapy[2], alt: "stair hair", title: "Blindzeichnen", description: "Mit geschlossenen Augen entstehen intuitive Pastellspuren. Danach werden entdeckte Formen herausgearbeitet und zum finalen Bild weiterentwickelt." },
          { index: 16, image: galleryImages.artTherapy[4], alt: "floral", title: "Naturabdruck", description: "Pflanzen und natürliche Materialien werden als Zeichenwerkzeuge verwendet. Durch Eintauchen in Farbe und Drücken oder Ziehen über das Papier entstehen organische und unvorhersehbare Spuren. Diese ersten Abdrücke werden dann beobachtet, beantwortet und zu einer Zeichnung weiterentwickelt." },
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
      title: "Monkeybrain Журнал",
      description: "Разработанный как мой дипломный проект в NABA Milano по графическому дизайну и арт-дирекции, этот проект сочетает смешанные медиа, иллюстрированную фотографию и редактирование изображений с исследованием человеческой психологии и внутреннего опыта — результатом стал Monkey Brain, иллюстрированный журнал для молодых взрослых, передающий осознанность через нарративно выстроенные визуальные образы.",
      tapToFlickThrough: "нажми, чтобы листать",
      betterInLandscape: "лучше в горизонтальном режиме",
    },
    disclaimer: "Интересует процесс создания моих работ? Загляни в мои соцсети",
    groups: [
      {
        id: "exploring-surroundings",
        groupTitle: "Исследование окружения",
        groupDescription:
          "Внимание обращается вовне — к текстурам, поверхностям, свету и природному миру. Эти методы используют непосредственное окружение как сырой материал, фиксируя то, что уже существует, через растирание, вдавливание и отслеживание следов, которые оставляет мир.",
        techniques: [
          {
            id: "imprinting-nature",
            title: "Природа",
            description:
              "Органические материалы вдавливаются в краску или тушь и переносятся на бумагу, создавая прямые оттиски природных форм. Каждый отпечаток уникален, определён собственной текстурой и структурой материала, и может быть дополнительно развит силой воображения.",
          },
          {
            id: "capturing-shadow",
            title: "Солнце",
            description:
              "Предметы помещаются на свет, и их тени обводятся или рисуются на бумаге. Возникающие контуры и силуэты раскрывают скрытые геометрии и отношения между формой, светом и пространством.",
          },
          {
            id: "rain",
            title: "Дождь",
            description:
              "Бумага с нанесённой краской или тушью оставляется под дождём. Падающие капли создают непредсказуемые следы и узоры, превращая погоду в соавтора создания образа.",
          },
          {
            id: "frottage",
            title: "Фроттаж",
            description:
              "Бумага кладётся на фактурные поверхности, и по ней проводят графитом или пастелью, чтобы уловить скрытые узоры. Собранные текстуры становятся отправными точками для интуитивного создания образов и многослойной композиции.",
          },
        ],
      },
      {
        id: "chance-and-material",
        groupTitle: "Исследование случайности",
        groupDescription:
          "Методы, принимающие непредсказуемость, позволяя физическим материалам взять инициативу. Тушь, выдутая через трубочку, растения, вдавленные в краску — эти процессы приглашают случай в соавторы, создавая формы, которые невозможно было спланировать или контролировать.",
        techniques: [
          {
            id: "blowout",
            title: "Тушь и трубочка",
            description:
              "Тушь капается на бумагу и выдувается через трубочку, создавая непредсказуемые следы в форме дыхания. Возникшие формы затем наблюдаются и интуитивно развиваются с помощью дополнительных материалов.",
          },
          {
            id: "abklatsch",
            title: "Отпечаток",
            description:
              "Свежеокрашенная поверхность прижимается к бумаге и поднимается, перенося оттиск исходного изображения. Полученный зеркальный отпечаток сохраняет следы источника, становясь при этом чем-то совершенно самостоятельным.",
          },
          {
            id: "blind-explorations",
            title: "Слепые исследования",
            description:
              "Следы, оставленные без взгляда — с закрытыми глазами, рука свободно движется по поверхности. Возникшие линии и формы затем наблюдаются и развиваются во что-то новое.",
          },
          {
            id: "puzzle",
            title: "Пазл",
            description:
              "Детали пазла вырезаются и используются как отдельные поверхности для рисования. Каждая деталь получает свой спонтанный след или образ, созданный без знания о том, как он соединится с остальным. При сборке случайные рисунки создают неожиданную коллективную композицию.",
          },
          {
            id: "collage",
            title: "Коллаж",
            description:
              "Найденные изображения, текстуры и вырезки интуитивно собираются в новую композицию. Процесс выбора, вырезания и размещения фрагментов создаёт неожиданные связи и смыслы.",
          },
        ],
      },
      {
        id: "intuition-and-inner-world",
        groupTitle: "Интуиция и внутренний мир",
        groupDescription:
          "Работа без ориентиров зрения, звука или плана. Эти методы открывают доступ к внутренним образам, приостанавливая контроль — позволяя бессознательному выражать себя через след, линию и форму.",
        techniques: [
          {
            id: "intuitive-drawing",
            title: "Интуитивный рисунок под музыку",
            description:
              "Создаётся под музыку, позволяя изменениям ритма, настроения и интенсивности влиять на следы и композицию в реальном времени.",
          },
          {
            id: "handpainting",
            title: "Рисование руками",
            description:
              "Прямой контакт с краской — руками и пальцами вместо кистей. Слой за слоем давление, движение и прикосновение создают органические следы, которые затем наблюдаются и развиваются в образные формы.",
          },
          {
            id: "imagination-travel",
            title: "Путешествие воображения",
            description:
              "Управляемое внутреннее путешествие, в котором образы, сцены и чувства исследуются через воображение. Затем впечатления переводятся в следы и формы на бумаге.",
          },
        ],
      },
    ] as TechniqueGroupTranslation[],
    digitalGroups: [
      {
        id: "enhanced-photography",
        groupTitle: "Обработанная фотография",
        groupDescription:
          "Фотографии из моего окружения, переосмысленные через редактирование и наложение слоёв. Камера становится отправной точкой — изображение развивается через манипуляцию, текстуру и цифровое вмешательство.",
        techniques: [{ id: "enhanced-photography-images", title: "Обработанная фотография", description: "" }],
      },
      {
        id: "illustrated-photography",
        groupTitle: "Иллюстрированная фотография",
        groupDescription:
          "Фотография как основа для рисунка и живописи. Снимки расширяются, накладываются иллюстрацией и превращаются в нечто среднее между документом и воображением.",
        techniques: [{ id: "illustrated-photography-images", title: "Иллюстрированная фотография", description: "" }],
      },
      {
        id: "digital-illustration",
        groupTitle: "Цифровая иллюстрация",
        groupDescription:
          "Образы, созданные через цифровой рисунок и живопись, без фотографической основы. Эти работы исследуют персонаж, паттерн и композицию через следы в цифровой среде.",
        techniques: [{ id: "digital-illustration-images", title: "Цифровая иллюстрация", description: "" }],
      },
      {
        id: "animation",
        groupTitle: "Анимация",
        groupDescription:
          "Статичные изображения, приведённые в движение. Короткие петли и анимированные последовательности, оживляющие единый момент или концепцию через движение.",
        techniques: [{ id: "animation-images", title: "Анимация", description: "" }],
      },
    ] as TechniqueGroupTranslation[],
    navIllustratedPhotography: "Цифровые исследования",
    navAnalogueExplorations: "Аналоговые исследования",
    navMonkeybrain: "Журнал Monkeybrain",
    sections: [
      {
        id: "illustrated-photography",
        title: "Цифровые исследования",
        description:
          "Моя цифровая практика следует экспериментальному смешанному подходу, объединяя элементы сюрреализма и реализма. Одни работы начинаются со снимков из моего окружения, которые я развиваю в воображаемые миры, а другие представляют собой цифровые иллюстрации, полностью рожденные воображением. Через редактирование, рисование и анимацию я исследую новые формы и нарративы.",
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
        title: "Аналоговые исследования",
        description:
          "Моя аналоговая практика исследует окружающий мир, случай, интуицию и внутренний мир через физические материалы и экспериментальные методы. Уходя корнями в мой путь арт-терапии, я работаю с фактурами, поверхностями, светом и следами природы как с исходным материалом и одновременно оставляю место непредсказуемости, чтобы она формировала образ. Ослабляя контроль и откликаясь на то, что возникает, я превращаю процесс в диалог между материалом, бессознательными образами и открытым поиском.",
        images: [
          { index: 0, image: galleryImages.artTherapy[0], alt: "blowout", title: "Тушь и трубочка", description: "Этот метод использует тушь, кисть и трубочку для создания изображений, основанных на случайности. Тушь капается на бумагу и выдувается по поверхности, создавая непредсказуемые, дыхательные отметины. Затем возникшие формы наблюдаются и интуитивно развиваются с помощью дополнительных материалов, позволяя изображению эволюционировать через отклик." },
          { index: 15, image: galleryImages.artTherapy[3], alt: "chalk work", title: "Мел", description: "Работа с мелом позволяет линиям оставаться открытыми, хрупкими и легко изменяемыми. Образы возникают через прикосновение, движение и непрерывную реакцию на то, что появляется на поверхности." },
          { index: 3, image: galleryImages.artTherapy[13], alt: "carib", title: "Продолжение образа", description: "Выбранные вырезки или изображения используются как отправная точка и затем продолжаются разными медиа: красками, пастелью и рисовальными материалами." },
          { index: 4, image: galleryImages.artTherapy[8], alt: "frottage texture study", title: "Фроттаж", description: "Фроттаж — это техника натирания: бумага кладётся на фактурную поверхность, и по ней проводят графитом или пастелью, чтобы уловить скрытые узоры. Собранные текстуры становятся отправными точками для интуитивного создания образов и многослойной композиции." },
          { index: 9, image: galleryImages.artTherapy[14], alt: "mix3", title: "Интуитивный рисунок под музыку", description: "Этот рисунок создаётся под музыку, позволяя изменениям ритма, настроения и интенсивности влиять на штрихи и композицию." },
          { index: 10, image: galleryImages.artTherapy[9], alt: "dragon drawing", title: "Дракон", description: "Интуитивное исследование образа, где похожие на существ формы возникают через спонтанные штрихи и дальнейшую разработку." },
          { index: 12, image: galleryImages.artTherapy[10], alt: "handpainting process", title: "Рисование руками", description: "Рисование руками сосредоточено на прямом контакте с краской — руками и пальцами вместо кистей. Слой за слоем давление, движение и прикосновение создают органические отметины, которые затем наблюдаются и развиваются в образные формы." },
          { index: 13, image: galleryImages.artTherapy[11], alt: "abdruck print technique", title: "Отпечаток", description: "Изображение создаётся через прослушивание истории и рисование того, что остаётся с тобой. Самые яркие фрагменты, эмоции и сцены переводятся в интуитивные отметины и затем развиваются в композицию." },
          { index: 2, image: galleryImages.artTherapy[2], alt: "stair hair", title: "Рисование вслепую", description: "С закрытыми глазами интуитивно наносятся пастельные штрихи. После этого обнаруженные формы раскрываются и развиваются в финальное изображение." },
          { index: 16, image: galleryImages.artTherapy[4], alt: "floral", title: "Природный отпечаток", description: "Растения и природные материалы используются как инструменты для создания отметин. Окуная их в краску и прижимая или протягивая по бумаге, возникают органические и непредсказуемые следы. Эти первые отпечатки становятся отправной точкой для наблюдения, отклика и дальнейшего развития в рисунок." },
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
