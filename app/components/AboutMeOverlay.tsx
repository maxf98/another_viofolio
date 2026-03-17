"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/app/context/LanguageContext";
import { useGlobalNav } from "./navigation/GlobalNavContext";
import OverlayShell from "./OverlayShell";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";

const contactIconLinks = [
  {
    href: "mailto:vioprandetskaya@gmail.com",
    label: "Email",
    icon: FaEnvelope,
    motion: {
      x: [0, 3, -2, 0],
      y: [0, -5, 2, 0],
      rotate: [0, -4, 2, 0],
    },
    duration: 5.2,
  },
  {
    href: "https://www.instagram.com/vioseum/",
    label: "Instagram",
    icon: FaInstagram,
    motion: {
      x: [0, -2, 3, 0],
      y: [0, 2, -4, 0],
      rotate: [0, 3, -2, 0],
    },
    duration: 4.8,
  },
  {
    href: "https://www.tiktok.com/@vioseum",
    label: "TikTok",
    icon: FaTiktok,
    motion: {
      x: [0, 2, -3, 0],
      y: [0, -3, 3, 0],
      rotate: [0, -2, 4, 0],
    },
    duration: 5.6,
  },
] as const;
const [emailIconLink, ...socialIconLinks] = contactIconLinks;

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
      "Hey im Vio! I create visual narratives by exploring fragments of the real world, and turning them into new visual spaces.",
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
      "Animation",
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
      "Hey, ich bin Vio! Ich entwickle visuelle Erzaehlungen, indem ich Fragmente der realen Welt erkunde und in neue visuelle Raeume verwandle.",
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
      "Animation",
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
      "Animation",
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

        <div className="relative min-h-full w-full px-4 pt-6 pb-10 sm:px-8 md:px-12 md:pt-2 md:pb-4 lg:px-16 flex items-start justify-center">
          <div className="mx-auto w-full max-w-7xl space-y-5 md:space-y-6">
            <section className="relative overflow-visible p-5 md:p-8">
              <div className="relative grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-7 md:gap-8 items-start">
                <div
                  className="order-1 text-white/90 border border-white/20 bg-[linear-gradient(125deg,rgba(101,190,203,0.2),rgba(255,190,225,0.15),rgba(255,227,176,0.14))] px-4 md:px-6 py-5 shadow-[0_12px_24px_rgba(0,0,0,0.22)] lg:col-start-2"
                  style={{ clipPath: notchClip }}
                >
                  <p className="text-[1.7rem] md:text-[2.8rem] font-semibold tracking-[0.01em] text-white leading-tight">
                    {t.fullNameValue}
                  </p>
                  <p className="mt-3 text-[10px] md:text-base font-semibold uppercase tracking-[0.16em] text-white/92">
                    {t.roleValue}
                  </p>
                  <p className="mt-3 text-xs md:text-sm text-white/80">
                    <span className="uppercase tracking-[0.12em] text-white/62 mr-2">
                      {t.basedInLabel}
                    </span>
                    <span>{t.basedInValue}</span>
                  </p>
                </div>

                <div className="order-3 text-white/90 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:col-start-2">
                  <div
                    className="border border-white/18 bg-[linear-gradient(160deg,rgba(255,191,204,0.14),rgba(255,255,255,0.04))] px-4 py-3"
                    style={{ clipPath: notchClip }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/58">
                      {t.workHeading}
                    </p>
                    <ul className="mt-2">
                      {t.sharedWorkItems.map((item: string, index: number) => (
                        <li
                          key={item}
                          className={`text-sm md:text-base text-white/88 leading-relaxed ${
                            index > 0 ? "mt-2 pt-2 border-t border-white/15" : ""
                          }`}
                        >
                          {item}
                        </li>
                      ))}
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
                      {t.sharedEducationItems.map((item: string, index: number) => (
                        <li
                          key={item}
                          className={`text-sm md:text-base text-white/88 leading-relaxed ${
                            index > 0 ? "mt-2 pt-2 border-t border-white/15" : ""
                          }`}
                        >
                          {item}
                        </li>
                      ))}
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
                          className="text-sm md:text-base text-white/88 leading-relaxed"
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
                          className="text-sm md:text-base text-white/88 leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="order-2 w-full lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:max-w-[320px] lg:justify-self-start">
                  <div className="flex flex-col gap-5 max-md:landscape:flex-row md:flex-row lg:flex-col">
                    <div className="mx-auto w-full shrink-0 max-md:landscape:mx-0 max-md:landscape:w-[56%] md:mx-0 md:w-[42%] lg:w-full">
                      <div
                        className="-rotate-2 border border-white/20 bg-white/5 p-2 shadow-[0_18px_32px_rgba(0,0,0,0.35)]"
                        style={{ clipPath: notchClip }}
                      >
                        <div
                          className="relative aspect-[4/5] rotate-[1.5deg] overflow-hidden border border-white/25 bg-transparent"
                          style={{ clipPath: notchClip }}
                        >
                          <Image
                            src="/mememe.png"
                            alt="Violetta portrait"
                            fill
                            sizes="(min-width: 1024px) 320px, (min-width: 768px) 42vw, (max-width: 767px) and (orientation: landscape) 56vw, 100vw"
                            className="object-cover object-center object-[50%_72%]"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="w-full min-w-0 flex-1 border border-white/18 bg-[linear-gradient(140deg,rgba(124,211,219,0.14),rgba(255,194,229,0.1))] px-4 py-3.5"
                      style={{ clipPath: notchClip }}
                    >
                      <div className="flex flex-col gap-4">
                        <p className="text-sm md:text-base text-white/80 leading-relaxed">
                          {t.shortBio}
                        </p>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.16em] text-white/58 mb-1">
                            Contact
                          </p>
                          <div className="mt-2 flex w-full items-center justify-between gap-4 max-md:landscape:flex-col max-md:landscape:items-start max-md:landscape:justify-start">
                            <div className="group relative">
                              <motion.a
                                href={emailIconLink.href}
                                aria-label={emailIconLink.label}
                                animate={emailIconLink.motion}
                                transition={{
                                  duration: emailIconLink.duration,
                                  repeat: Infinity,
                                  repeatType: "mirror",
                                  ease: "easeInOut",
                                }}
                                whileHover={{
                                  y: -6,
                                  rotate: 0,
                                }}
                                className="inline-flex h-24 w-24 items-center justify-center text-white transition-colors duration-200 hover:text-white"
                              >
                                <motion.span
                                  whileHover={{
                                    scale: 1.28,
                                    borderRadius:
                                      "55% 45% 36% 64% / 39% 59% 41% 61%",
                                    backgroundColor: "rgba(255,255,255,0.12)",
                                  }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 240,
                                    damping: 18,
                                  }}
                                  className="flex h-full w-full items-center justify-center"
                                  style={{
                                    borderRadius:
                                      "38% 62% 54% 46% / 45% 38% 62% 55%",
                                  }}
                                >
                                  <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 260,
                                      damping: 18,
                                    }}
                                    className="flex items-center justify-center"
                                  >
                                    <FaEnvelope size={48} />
                                  </motion.span>
                                </motion.span>
                              </motion.a>
                            </div>

                            <div className="ml-auto flex items-center gap-5 max-md:landscape:ml-0">
                              {socialIconLinks.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <motion.a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    animate={item.motion}
                                    transition={{
                                      duration: item.duration,
                                      repeat: Infinity,
                                      repeatType: "mirror",
                                      ease: "easeInOut",
                                    }}
                                    whileHover={{
                                      scale: 1.14,
                                      y: -5,
                                      rotate: 0,
                                    }}
                                    className="group relative inline-flex h-14 w-14 items-center justify-center text-white/78 transition-all duration-200 hover:text-white"
                                  >
                                    <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/14 px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-white/88 opacity-0 transition-all duration-200 group-hover:mb-2 group-hover:opacity-100">
                                      @vioseum
                                    </span>
                                    <Icon size={32} />
                                  </motion.a>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
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
