export type ProjectCard = {
  href: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  defaultTitle?: string;
};

export const personalArchiveCards: ProjectCard[] = [
  {
    href: "/illustrated-photography",
    image: "/gallery/sun.png",
    alt: "Digital Explorations",
    title: "Digital Explorations",
    description: "Digital image-making and narrative scenes",
  },
  {
    href: "/art-therapy",
    image: "/gallery/blowout.png",
    alt: "Analogue Explorations",
    title: "Analogue Explorations",
    description: "Process-driven experiments and material play",
  },
  {
    href: "/monkeybrain",
    image: "/projects/MONKEYBRAIN/pages/monkeybrain.png",
    alt: "Monkeybrain Magazine",
    title: "Monkeybrain Magazine",
    description: "Bachelor thesis magazine in mixed media",
  },
];

export const workingCards: ProjectCard[] = [
  {
    href: "/elgato",
    image: "/projects/elgato/front1.png",
    alt: "Elgato background preview",
    defaultTitle: "Working with a company",
    title: "Working with Elgato",
    description: "Product customisation and brand illustration",
  },
  {
    href: "/quards",
    image: "/projects/quards/featureArtNoBG.webp",
    alt: "Quards background preview",
    defaultTitle: "Working with a startup",
    title: "Working with Quards",
    description: "App design and visual identity",
  },
  {
    href: "/mascha",
    image: "/covers/mascha/m3.webp",
    alt: "Mascha background preview",
    defaultTitle: "Working with an artist",
    title: "Working with Mascha",
    description: "Album artwork and visual storytelling",
  },
];

export const combinedProjectCards: ProjectCard[] = [
  ...personalArchiveCards,
  ...workingCards,
];
