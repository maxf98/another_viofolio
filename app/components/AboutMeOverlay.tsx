"use client";

import Image from "next/image";
import { useLang } from "@/app/context/LanguageContext";
import { useGlobalNav } from "./navigation/GlobalNavContext";
import OverlayShell from "./OverlayShell";

const aboutText = {
  en: {
    aboutParagraphs: [
      "Hi, I'm Vio - an artist, illustrator, and designer based in Munich, Germany. I create expressive illustrations and designs with a playful, narrative-driven approach, where storytelling sits at the core of my practice.",
      "I began my professional journey at NABA Milan, where I completed a Bachelor's degree in Graphic Design and Art Direction. Since then, I've been working as a freelance illustrator and designer, alongside studying art therapy, which has deepened my interest in intuition, emotional expression, and process-led making.",
      "Much of my personal practice is rooted in experimentation and chance. I often begin with photographs of nature, spaces, and patterns, then reshape them into imagined narratives. My analogue process is also informed by art therapy methods, creating space for intuition, reflection, and gentle discovery.",
    ],
  },
  de: {
    aboutParagraphs: [
      "Hallo, ich bin Vio – Künstlerin, Illustratorin und Designerin aus München. Ich schaffe ausdrucksstarke Illustrationen und Designs mit einem spielerischen, narrativen Ansatz, bei dem Geschichtenerzählen im Mittelpunkt meiner Arbeit steht.",
      "Meine professionelle Laufbahn begann an der NABA Mailand, wo ich einen Bachelor in Grafikdesign und Art Direction abschloss. Seitdem arbeite ich als freiberufliche Illustratorin und Designerin und studiere gleichzeitig Kunsttherapie, was mein Interesse an Intuition, emotionalem Ausdruck und prozessgesteuertem Schaffen vertieft hat.",
    ],
  },
  ru: {
    aboutParagraphs: [
      "Привет, я Вио — художница, иллюстратор и дизайнер из Мюнхена. Я создаю выразительные иллюстрации и дизайн с игривым, нарративным подходом, где рассказывание историй лежит в основе моей практики.",
      "Я начала свой профессиональный путь в NABA Milan, где получила степень бакалавра по графическому дизайну и арт-дирекции. С тех пор я работаю как фриланс-иллюстратор и дизайнер, параллельно изучая арт-терапию, что углубило мой интерес к интуиции, эмоциональному выражению и процессному творчеству.",
    ],
  },
} as const;

export default function AboutMeOverlay() {
  const { isAboutMeOpen, closeAboutMe } = useGlobalNav();
  const { lang } = useLang();
  const t = aboutText[lang];

  return (
    <OverlayShell
      isOpen={isAboutMeOpen}
      onClose={closeAboutMe}
      backdropClassName="bg-[#24242e]"
      containerClassName="w-full h-full px-2 sm:px-4 md:px-6 py-2 md:py-0 flex items-stretch justify-center"
      closeButtonClassName="md:top-4"
      lockScroll={false}
    >
      <div className="relative w-full max-w-4xl h-[100dvh] md:h-auto md:max-h-[calc(100dvh-6rem)] py-16 md:py-10 px-3 sm:px-5 md:px-10 overflow-y-auto overscroll-contain flex items-start md:items-center justify-center">
        <div className="relative z-10 w-full max-w-5xl pt-3 md:pt-0 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(240px,320px)_1fr] gap-7 md:gap-8 items-start md:items-center p-1 md:p-2">
            <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-none mx-auto md:mx-0">
              <Image
                src="/gallery/draw.jpg"
                alt="Drawing"
                width={900}
                height={1200}
                className="w-full h-48 sm:h-56 md:h-auto object-cover rounded-xl border border-white/12"
                loading="lazy"
              />
            </div>
            <div className="max-w-2xl text-left text-white/90 leading-relaxed space-y-4 px-5 sm:px-7 md:px-0 mt-1 md:mt-0">
              {t.aboutParagraphs.map((para: string, idx: number) => {
                if (idx === 0) {
                  const split = para.split(/\s[-–—]\s/, 2);
                  const intro = split[0] ?? "";
                  const rest = split[1] ?? "";
                  return (
                    <p key={idx}>
                      <span className="block text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                        {intro}
                      </span>
                      {rest ? (
                        <span className="block mt-2 text-[0.95rem] md:text-base text-white/85">
                          {rest}
                        </span>
                      ) : null}
                    </p>
                  );
                }
                return (
                  <p
                    key={idx}
                    className="text-[0.95rem] md:text-base text-white/88"
                  >
                    {para}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </OverlayShell>
  );
}
