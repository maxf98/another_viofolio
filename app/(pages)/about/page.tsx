"use client";

import Image from "next/image";
import { useLang } from "@/app/context/LanguageContext";
import SocialLinks from "@/app/components/SocialLinks";

const aboutText = {
  en: {
    basedInLabel: "Based in",
    basedInValue: "Munich, Germany",
    roleLabel: "Role",
    roleValue: "Illustrator, Graphic Designer, Artist",
    shortBio:
      "Hey im Vio! I create visual narratives by exploring fragments of the real world, and turning them into new visual spaces.",
    workHeading: "Work",
    sharedEducationTitle: "Education & Studies",
    sharedEducationItems: [
      "BA in Graphic Design and Art Direction, NABA Milano",
      "Art Therapy Practitioner studies, Campus Naturalis Munich",
    ],
    sharedWorkItems: [
      "Freelance Illustrator & Graphic Designer",
      "Digital and analogue process-led art practice",
    ],
    skillsHeading: "Design Skills",
    skillsItems: [
      "Adobe Creative Cloud",
      "Typography & Layout Design",
      "Brand Identity Systems",
      "Editorial & Print Design",
      "Digital Illustration",
      "Animation",
    ],
    artTherapySkillsHeading: "Art Therapy Skills",
    artTherapySkillsItems: [
      "Process-Led Art Practice",
      "Intuitive Image-Making",
      "Material Exploration Methods",
      "Reflective Creative Facilitation",
    ],
    fullNameValue: "Violetta Prandetskaya",
    socialsLabel: "Socials",
  },
  de: {
    basedInLabel: "Standort",
    basedInValue: "Muenchen, Deutschland",
    roleLabel: "Rolle",
    roleValue: "Illustratorin, Graphic Designerin, Kunstlerin",
    shortBio:
      "Hey, ich bin Vio! Ich entwickle visuelle Erzaehlungen, indem ich Fragmente der realen Welt erkunde und in neue visuelle Raeume verwandle.",
    workHeading: "Arbeit",
    sharedEducationTitle: "Ausbildung & Studium",
    sharedEducationItems: [
      "BA in Graphic Design and Art Direction, NABA Milano",
      "Kunst Therapeutische Praxis, Campus Naturalis Muenchen",
    ],
    sharedWorkItems: [
      "Freelance Illustratorin & Graphic Designerin",
      "Digitale und analoge, prozessorientierte Kunstpraxis",
    ],
    skillsHeading: "Design Skills",
    skillsItems: [
      "Adobe Creative Cloud",
      "Typografie & Layoutdesign",
      "Brand-Identity-Systeme",
      "Editorial & Print Design",
      "Digitale Illustration",
      "Animation",
    ],
    artTherapySkillsHeading: "Art-Therapie Skills",
    artTherapySkillsItems: [
      "Prozessorientierte Kunstpraxis",
      "Intuitive Bildfindung",
      "Materialbasierte Explorationsmethoden",
      "Reflektierende kreative Begleitung",
    ],
    fullNameValue: "Violetta Prandetskaya",
    socialsLabel: "Socials",
  },
  ru: {
    basedInLabel: "Город",
    basedInValue: "Мюнхен, Германия",
    roleLabel: "Роль",
    roleValue: "Illustrator, Graphic Designer, Artist",
    shortBio:
      "Hi, I am Vio, an illustrator and graphic designer with a strong interest in inner-world exploration, art-therapy-informed processes, and emotionally grounded visual storytelling.",
    workHeading: "Work",
    sharedEducationTitle: "Education & Studies",
    sharedEducationItems: [
      "BA in Graphic Design and Art Direction, NABA Milano",
      "Art Therapy Practitioner studies, Campus Naturalis Munich",
    ],
    sharedWorkItems: [
      "Freelance Illustrator & Graphic Designer",
      "Digital and analogue process-led art practice",
    ],
    skillsHeading: "Design Skills",
    skillsItems: [
      "Adobe Creative Cloud",
      "Typography & Layout Design",
      "Brand Identity Systems",
      "Editorial & Print Design",
      "Digital Illustration",
      "Animation",
    ],
    artTherapySkillsHeading: "Art Therapy Skills",
    artTherapySkillsItems: [
      "Process-Led Art Practice",
      "Intuitive Image-Making",
      "Material Exploration Methods",
      "Reflective Creative Facilitation",
    ],
    fullNameValue: "Violetta Prandetskaya",
    socialsLabel: "Соцсети",
  },
};

const notchClip =
  "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)";

function InfoCard({
  heading,
  items,
  gradient,
  divided = false,
}: {
  heading: string;
  items: string[];
  gradient: string;
  divided?: boolean;
}) {
  return (
    <div
      className={`border border-white/18 px-4 py-3 ${gradient}`}
      style={{ clipPath: notchClip }}
    >
      <p className="text-[length:var(--text-label)] uppercase tracking-[var(--tracking-label)] text-[var(--color-label)]">
        {heading}
      </p>
      <ul className="mt-2">
        {items.map((item, index) => (
          <li
            key={item}
            className={`text-[length:var(--text-body-sm)] md:text-[length:var(--text-body)] text-[var(--color-text)] leading-[var(--leading-body)] ${divided && index > 0 ? "mt-2 pt-2 border-t border-white/15" : ""}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  const { lang } = useLang();
  const t = aboutText[lang];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background */}
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

      <div className="relative min-h-screen flex flex-col px-4 pt-24 pb-10 sm:px-8 md:px-12 md:pb-10 lg:px-16">
        <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col justify-around">
          <section className="relative overflow-visible p-5 md:p-8">
            {/* Outer grid: sidebar col | right col */}
            <div className="relative flex flex-col gap-7 md:gap-8 lg:grid lg:grid-cols-[400px_1fr] lg:gap-8 lg:items-start">
              {/* Name / role card — first on mobile, top of right col on desktop */}
              <div
                className="order-1 lg:col-start-2 lg:row-start-1 text-white/90 border border-white/20 bg-[linear-gradient(125deg,rgba(101,190,203,0.2),rgba(255,190,225,0.15),rgba(255,227,176,0.14))] px-4 md:px-6 py-5 shadow-[0_12px_24px_rgba(0,0,0,0.22)]"
                style={{ clipPath: notchClip }}
              >
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-8 md:gap-16">
                  <div className="flex-1 flex flex-col">
                    <p className="text-[length:var(--text-heading-sm)] md:text-[length:var(--text-heading-lg)] font-semibold tracking-[0.01em] text-[var(--color-text)] leading-tight">
                      {t.fullNameValue}
                    </p>
                    <p className="mt-3 text-[length:var(--text-label)] md:text-[length:var(--text-body)] font-semibold uppercase tracking-[var(--tracking-label)] text-[var(--color-text)]">
                      {t.roleValue}
                    </p>
                    <p className="mt-3 text-[length:var(--text-label)] md:text-[length:var(--text-body-sm)] text-white/80">
                      <span className="uppercase tracking-[var(--tracking-indicator)] text-[var(--color-label)] mr-2">
                        {t.basedInLabel}
                      </span>
                      <span>{t.basedInValue}</span>
                    </p>
                    <p className="mt-4 text-[length:var(--text-body-sm)] md:text-[length:var(--text-body)] text-[var(--color-text-secondary)] leading-[var(--leading-body)]">
                      {t.shortBio}
                    </p>
                  </div>
                  <SocialLinks
                    vertical
                    size={28}
                    iconClass="text-white/78 hover:text-white transition-colors"
                    className="justify-center"
                  />
                </div>
              </div>

              {/* Portrait — sidebar */}
              <div className="order-2 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-center w-full mx-auto max-w-[320px] lg:max-w-full">
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
                      sizes="(min-width: 1024px) 400px, 320px"
                      className="object-cover object-center object-[50%_72%]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              {/* End sidebar */}

              {/* Info cards grid */}
              <div className="order-3 lg:col-start-2 lg:row-start-2 text-white/90 grid grid-cols-1 md:grid-cols-2 gap-3">
                <InfoCard
                  heading={t.workHeading}
                  items={t.sharedWorkItems}
                  gradient="bg-[linear-gradient(160deg,rgba(255,191,204,0.14),rgba(255,255,255,0.04))]"
                  divided
                />
                <InfoCard
                  heading={t.sharedEducationTitle}
                  items={t.sharedEducationItems}
                  gradient="bg-[linear-gradient(160deg,rgba(255,226,166,0.14),rgba(255,255,255,0.04))]"
                  divided
                />
                <InfoCard
                  heading={t.skillsHeading}
                  items={t.skillsItems}
                  gradient="bg-[linear-gradient(160deg,rgba(160,212,255,0.16),rgba(255,255,255,0.04))]"
                />
                <InfoCard
                  heading={t.artTherapySkillsHeading}
                  items={t.artTherapySkillsItems}
                  gradient="bg-[linear-gradient(160deg,rgba(255,180,212,0.16),rgba(255,255,255,0.04))]"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
