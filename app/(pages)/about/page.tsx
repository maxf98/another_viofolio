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
      "Hey, I am Vio, I create visual narratives across commissioned and independent work. My practice combines photography, illustration, image editing, and mixed-media experimentation to build atmospheric, story-led visuals. Alongside my digital work, I have been exploring process-driven art with real materials, and how you can use this to interact with your self. I studied Graphic Design and Art Direction at NABA Milano and continue to expand my practice through Art Therapy studies at Campus Naturalis Munich.",
    fullNameValue: "Violetta Prandetskaya",
    socialsLabel: "Socials",
  },
  de: {
    basedInLabel: "Standort",
    basedInValue: "München, Deutschland",
    roleLabel: "Rolle",
    roleValue: "Illustratorin, Graphic Designerin, Künstlerin",
    shortBio:
      "Hey, ich bin Vio, ich schaffe visuelle Erzählungen in Auftrags- und eigenen Projekten. Meine Praxis verbindet Fotografie, Illustration, Bildbearbeitung und Mixed-Media-Experimente, um atmosphärische, narrative Bildwelten zu schaffen. Neben meiner digitalen Arbeit erforsche ich prozessorientierte Kunst mit echten Materialien und wie man diese nutzen kann, um mit sich selbst in Kontakt zu treten. Ich habe Grafikdesign und Art Direction an der NABA Milano studiert und erweitere meine Praxis aktuell durch ein Studium der Kunsttherapie am Campus Naturalis München.",
    fullNameValue: "Violetta Prandetskaya",
    socialsLabel: "Socials",
  },
  ru: {
    basedInLabel: "Город",
    basedInValue: "Мюнхен, Германия",
    roleLabel: "Роль",
    roleValue: "Illustrator, Graphic Designer, Artist",
    shortBio:
      "Привет, я Вио, я создаю визуальные нарративы в рамках заказных и независимых проектов. Моя практика сочетает фотографию, иллюстрацию, обработку изображений и смешанные техники, создавая атмосферные, сюжетно выстроенные визуальные миры. Параллельно с цифровой работой я исследую процессуальное искусство с реальными материалами и то, как это можно использовать для взаимодействия с собой. Я изучала графический дизайн и арт-дирекцию в NABA Milano и продолжаю расширять свою практику через обучение арт-терапии в Campus Naturalis в Мюнхене.",
    fullNameValue: "Violetta Prandetskaya",
    socialsLabel: "Соцсети",
  },
};

export default function AboutPage() {
  const { lang } = useLang();
  const t = aboutText[lang];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Image
          src="/mememe.png"
          alt="Violetta portrait"
          fill
          loading="eager"
          className="object-cover"
          style={{ objectPosition: "50% 72%" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(255,212,171,0.14),transparent_44%),radial-gradient(circle_at_84%_18%,rgba(174,206,255,0.12),transparent_38%),linear-gradient(to_bottom,rgba(8,9,14,0.62),rgba(8,9,14,0.38))]" />
        <div className="absolute inset-0 bg-[#0d5f63]/24" />
      </div>

      <div className="relative min-h-screen flex flex-col px-4 pt-24 pb-10 sm:px-8 md:px-12 md:pb-10 lg:px-16">
        <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col justify-around">
          <section className="relative overflow-visible p-5 md:p-8">
            <div className="text-white/90 px-4 md:px-8 py-10 md:py-16">
              <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
                <div className="flex-shrink-0 w-full max-w-[380px] mx-auto md:mx-0 md:w-[280px] lg:w-[500px]">
                  <div className="relative aspect-[4/5] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
                    <Image
                      src="/mememe.png"
                      alt="Violetta portrait"
                      fill
                      sizes="(min-width: 1024px) 500px, (min-width: 768px) 280px, 380px"
                      className="object-cover object-[50%_72%]"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <p
                    className="mt-0 font-semibold tracking-[0.01em] text-[var(--color-text)] leading-tight"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", padding: 0 }}
                  >
                    {t.fullNameValue}
                  </p>
                  <p
                    className="mt-3 font-semibold uppercase tracking-[var(--tracking-label)] text-[var(--color-text)]"
                    style={{
                      fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                      padding: 0,
                    }}
                  >
                    {t.roleValue}
                  </p>
                  <p
                    className="mt-2 text-white/80"
                    style={{
                      fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                      padding: 0,
                    }}
                  >
                    <span className="uppercase tracking-[var(--tracking-indicator)] text-[var(--color-label)] mr-2">
                      {t.basedInLabel}
                    </span>
                    <span>{t.basedInValue}</span>
                  </p>
                  <p
                    className="mt-5 text-[var(--color-text-secondary)] leading-relaxed"
                    style={{
                      fontSize: "clamp(1.2rem, 1.5vw, 1.125rem)",
                      padding: 0,
                    }}
                  >
                    {t.shortBio}
                  </p>
                  <div className="mt-8">
                    <SocialLinks
                      size={24}
                      iconClass="text-white/78 hover:text-white transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
