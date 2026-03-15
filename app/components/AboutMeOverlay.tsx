"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/app/context/LanguageContext";
import { useGlobalNav } from "./navigation/GlobalNavContext";
import OverlayShell from "./OverlayShell";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";

const aboutText = {
  en: {
    chartLabel: "Creative Profile",
    chartIntro: "My practice moves across three connected disciplines.",
    roleCards: [
      {
        title: "",
        description:
          "I work illustratively and graphically, building visual stories from concept to final output through illustration, typography, and design.",
        bodyText:
          "I explore an intuitive, process-led art practice across digital and analogue techniques, often starting with fragments, textures, and chance moments to create images that feel alive, emotional, and honest.",
      },
    ],
    basedInLabel: "Based in",
    basedInValue: "Munich, Germany",
    roleLabel: "Role",
    roleValue: "Illustrator, Graphic Designer, Artist",
    shortBio:
      "Hi, I am Vio, an illustrator and graphic designer with a strong interest in inner-world exploration, art-therapy-informed processes, and emotionally grounded visual storytelling.",
    educationHeading: "Education",
    workHeading: "Work",
    skillsHeading: "Design Skills",
    artTherapySkillsHeading: "Art Therapy Skills",
    sharedEducationTitle: "Education & Studies",
    sharedEducationItems: [
      "BA in Graphic Design and Art Direction, NABA Milano",
      "Art Therapy Practitioner studies, Campus Naturalis Munich",
    ],
    sharedWorkItems: [
      "Freelance Illustrator & Graphic Designer",
      "Digital and analogue process-led art practice",
    ],
    skillsItems: [
      "Adobe Creative Cloud",
      "Typography & Layout Design",
      "Brand Identity Systems",
      "Editorial & Print Design",
      "Digital Illustration",
      "Art Direction",
    ],
    artTherapySkillsItems: [
      "Process-Led Art Practice",
      "Intuitive Image-Making",
      "Material Exploration Methods",
      "Reflective Creative Facilitation",
    ],
    fullNameLabel: "Full name",
    fullNameValue: "Violetta Prandetskaya",
    socialsLabel: "Socials",
  },
  de: {
    chartLabel: "Profil",
    chartIntro:
      "Meine Praxis bewegt sich zwischen drei verbundenen Disziplinen.",
    roleCards: [
      {
        title: "",
        description:
          "Ich arbeite illustrativ und grafisch und entwickle visuelle Erzaehlungen von der Idee bis zur finalen Umsetzung mit Illustration, Typografie und Design.",
        bodyText:
          "Ich erforsche eine intuitive, prozessorientierte Kunstpraxis mit digitalen und analogen Techniken und beginne oft mit Fragmenten, Texturen und Zufallsmomenten, damit Bilder mit Lebendigkeit, Gefuehl und Ehrlichkeit entstehen.",
      },
    ],
    basedInLabel: "Standort",
    basedInValue: "Muenchen, Deutschland",
    roleLabel: "Rolle",
    roleValue: "Illustratorin, Graphic Designerin, Kunstlerin",
    shortBio:
      "Hi, ich bin Vio. Mich inspirieren vor allem visuelle Zufälle, kleine Details und Emotionen, die ein Bild ehrlich und lebendig machen.",
    educationHeading: "Ausbildung",
    workHeading: "Arbeit",
    skillsHeading: "Design Skills",
    artTherapySkillsHeading: "Art-Therapie Skills",
    sharedEducationTitle: "Ausbildung & Studium",
    sharedEducationItems: [
      "BA in Graphic Design and Art Direction, NABA Milano",
      "Kunst Therapeutische Praxis, Campus Naturalis Muenchen",
    ],
    sharedWorkItems: [
      "Freelance Illustratorin & Graphic Designerin",
      "Digitale und analoge, prozessorientierte Kunstpraxis",
    ],
    skillsItems: [
      "Adobe Creative Cloud",
      "Typografie & Layoutdesign",
      "Brand-Identity-Systeme",
      "Editorial & Print Design",
      "Digitale Illustration",
      "Art Direction",
    ],
    artTherapySkillsItems: [
      "Prozessorientierte Kunstpraxis",
      "Intuitive Bildfindung",
      "Materialbasierte Explorationsmethoden",
      "Reflektierende kreative Begleitung",
    ],
    fullNameLabel: "Voller Name",
    fullNameValue: "Violetta Prandetskaya",
    socialsLabel: "Socials",
  },
  ru: {
    chartLabel: "Профиль",
    chartIntro: "Моя практика соединяет три связанные дисциплины.",
    roleCards: [
      {
        title: "",
        description:
          "I work illustratively and graphically, building visual stories from concept to final output through illustration, typography, and design.",
        bodyText:
          "I explore an intuitive, process-led art practice across digital and analogue techniques, often starting with fragments, textures, and chance moments to create images that feel alive, emotional, and honest.",
      },
    ],
    basedInLabel: "Город",
    basedInValue: "Мюнхен, Германия",
    roleLabel: "Роль",
    roleValue: "Illustrator, Graphic Designer, Artist",
    shortBio:
      "Hi, I am Vio, an illustrator and graphic designer with a strong interest in inner-world exploration, art-therapy-informed processes, and emotionally grounded visual storytelling.",
    educationHeading: "Education",
    workHeading: "Work",
    skillsHeading: "Design Skills",
    artTherapySkillsHeading: "Art Therapy Skills",
    sharedEducationTitle: "Education & Studies",
    sharedEducationItems: [
      "BA in Graphic Design and Art Direction, NABA Milano",
      "Art Therapy Practitioner studies, Campus Naturalis Munich",
    ],
    sharedWorkItems: [
      "Freelance Illustrator & Graphic Designer",
      "Digital and analogue process-led art practice",
    ],
    skillsItems: [
      "Adobe Creative Cloud",
      "Typography & Layout Design",
      "Brand Identity Systems",
      "Editorial & Print Design",
      "Digital Illustration",
      "Art Direction",
    ],
    artTherapySkillsItems: [
      "Process-Led Art Practice",
      "Intuitive Image-Making",
      "Material Exploration Methods",
      "Reflective Creative Facilitation",
    ],
    fullNameLabel: "Полное имя",
    fullNameValue: "Violetta Prandetskaya",
    socialsLabel: "Соцсети",
  },
} as const;

export default function AboutMeOverlay() {
  const { isAboutMeOpen, closeAboutMe } = useGlobalNav();
  const { lang } = useLang();
  const t = aboutText[lang];
  const notchClip =
    "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)";
  const notchClipLarge =
    "polygon(16px 0,100% 0,100% calc(100% - 16px),calc(100% - 16px) 100%,0 100%,0 16px)";

  return (
    <OverlayShell
      isOpen={isAboutMeOpen}
      onClose={closeAboutMe}
      backdropClassName="bg-transparent"
      containerClassName="w-full h-full px-3 sm:px-5 md:px-8 py-3 md:py-6 flex items-stretch justify-center"
      closeButtonClassName="md:top-4"
      lockScroll={false}
    >
      <div className="relative w-full h-[100dvh] overflow-y-auto overscroll-contain">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <Image
            src="/gallery/nobody.png"
            alt=""
            fill
            loading="eager"
            className="object-cover"
            style={{ objectPosition: "center 70%" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(255,212,171,0.16),transparent_44%),radial-gradient(circle_at_84%_18%,rgba(174,206,255,0.14),transparent_38%),linear-gradient(to_bottom,rgba(8,9,14,0.28),rgba(8,9,14,0.22))]" />
          <div className="absolute inset-0 bg-[#0d5f63]/18" />
        </div>

        <div className="relative min-h-full w-full px-4 py-10 sm:px-8 md:px-12 md:py-4 lg:px-16 flex items-center justify-center">
          <div className="mx-auto w-full max-w-7xl space-y-5 md:space-y-6">
            <section className="relative overflow-visible p-5 md:p-8">
              <div className="relative grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-7 md:gap-8 items-start">
                <div className="w-full max-w-[300px] mx-auto lg:mx-0 pt-2 space-y-5">
                  <div
                    className="-rotate-2 border border-white/20 bg-white/5 p-2 shadow-[0_18px_32px_rgba(0,0,0,0.35)]"
                    style={{ clipPath: notchClip }}
                  >
                    <div
                      className="rotate-[1.5deg] overflow-hidden border border-white/25 bg-transparent"
                      style={{ clipPath: notchClip }}
                    >
                      <Image
                        src="/myface.png"
                        alt="Violetta portrait"
                        width={2835}
                        height={2835}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div
                    className="border border-white/18 bg-[linear-gradient(140deg,rgba(124,211,219,0.14),rgba(255,194,229,0.1))] px-4 py-3.5"
                    style={{ clipPath: notchClip }}
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.16em] text-white/58 mb-1">
                          Contact
                        </p>
                        <Link
                          href="mailto:vioprandetskaya@gmail.com"
                          className="group inline-flex items-center gap-2 text-base font-medium tracking-[0.01em] text-white/95"
                        >
                          <FaEnvelope size={14} />
                          <span className="group-hover:underline">
                            vioprandetskaya@gmail.com
                          </span>
                        </Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-white/58 mr-1">
                          {t.socialsLabel}
                        </p>
                        <a
                          href="https://www.instagram.com/vioseum/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                          className="inline-flex h-9 w-9 items-center justify-center border border-white/20 bg-white/5 text-white/80 hover:text-white hover:bg-white/12 transition-colors"
                          style={{ clipPath: notchClip }}
                        >
                          <FaInstagram size={16} />
                        </a>
                        <a
                          href="https://www.tiktok.com/@vioseum"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="TikTok"
                          className="inline-flex h-9 w-9 items-center justify-center border border-white/20 bg-white/5 text-white/80 hover:text-white hover:bg-white/12 transition-colors"
                          style={{ clipPath: notchClip }}
                        >
                          <FaTiktok size={16} />
                        </a>
                        <span className="text-base text-white/90 tracking-[0.01em]">
                          @vioseum
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-white/90 space-y-4 md:space-y-5">
                  <div
                    className="border border-white/20 bg-[linear-gradient(125deg,rgba(101,190,203,0.2),rgba(255,190,225,0.15),rgba(255,227,176,0.14))] px-4 md:px-6 py-5 shadow-[0_12px_24px_rgba(0,0,0,0.22)]"
                    style={{ clipPath: notchClip }}
                  >
                    <p className="text-3xl md:text-5xl font-semibold tracking-[0.01em] text-white leading-tight">
                      {t.fullNameValue}
                    </p>
                    <p className="mt-3 text-xs md:text-lg font-semibold uppercase tracking-[0.16em] text-white/92">
                      {t.roleValue}
                    </p>
                    <p className="mt-3 text-sm md:text-base text-white/80">
                      <span className="uppercase tracking-[0.12em] text-white/62 mr-2">
                        {t.basedInLabel}
                      </span>
                      <span>{t.basedInValue}</span>
                    </p>
                    <p className="mt-4 text-sm md:text-base text-white/78 leading-relaxed max-w-3xl">
                      {t.shortBio}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div
                      className="border border-white/18 bg-[linear-gradient(160deg,rgba(255,191,204,0.14),rgba(255,255,255,0.04))] px-4 py-3"
                      style={{ clipPath: notchClip }}
                    >
                      <p className="text-[11px] uppercase tracking-[0.16em] text-white/58">
                        {t.workHeading}
                      </p>
                      <ul className="mt-2">
                        {t.sharedWorkItems.map(
                          (item: string, index: number) => (
                            <li
                              key={item}
                              className={`text-base md:text-lg text-white/88 leading-relaxed ${
                                index > 0
                                  ? "mt-2 pt-2 border-t border-white/15"
                                  : ""
                              }`}
                            >
                              {item}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div
                      className="border border-white/18 bg-[linear-gradient(160deg,rgba(255,226,166,0.14),rgba(255,255,255,0.04))] px-4 py-3"
                      style={{ clipPath: notchClip }}
                    >
                      <p className="text-[11px] uppercase tracking-[0.16em] text-white/58">
                        {t.sharedEducationTitle}
                      </p>
                      <ul className="mt-2">
                        {t.sharedEducationItems.map(
                          (item: string, index: number) => (
                            <li
                              key={item}
                              className={`text-base md:text-lg text-white/88 leading-relaxed ${
                                index > 0
                                  ? "mt-2 pt-2 border-t border-white/15"
                                  : ""
                              }`}
                            >
                              {item}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div
                      className="border border-white/18 bg-[linear-gradient(160deg,rgba(160,212,255,0.16),rgba(255,255,255,0.04))] px-4 py-3"
                      style={{ clipPath: notchClip }}
                    >
                      <p className="text-[11px] uppercase tracking-[0.16em] text-white/58">
                        {t.skillsHeading}
                      </p>
                      <ul className="mt-2">
                        {t.skillsItems.map((item: string) => (
                          <li
                            key={item}
                            className="text-base md:text-lg text-white/88 leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="border border-white/18 bg-[linear-gradient(160deg,rgba(255,180,212,0.16),rgba(255,255,255,0.04))] px-4 py-3"
                      style={{ clipPath: notchClip }}
                    >
                      <p className="text-[11px] uppercase tracking-[0.16em] text-white/58">
                        {t.artTherapySkillsHeading}
                      </p>
                      <ul className="mt-2">
                        {t.artTherapySkillsItems.map((item: string) => (
                          <li
                            key={item}
                            className="text-base md:text-lg text-white/88 leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </OverlayShell>
  );
}
