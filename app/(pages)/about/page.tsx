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
      "Hey I'm Vio! I create visual narratives by exploring fragments of the real world and turning them into new visual spaces. I studied Graphic Design and Art Direction at NABA Milano, and am currently deepening my practice through Art Therapy studies at Campus Naturalis Munich. Alongside client work as a freelance illustrator and designer, I maintain a personal practice rooted in both digital and analogue process-led art.",
    fullNameValue: "Violetta Prandetskaya",
    socialsLabel: "Socials",
  },
  de: {
    basedInLabel: "Standort",
    basedInValue: "München, Deutschland",
    roleLabel: "Rolle",
    roleValue: "Illustratorin, Graphic Designerin, Künstlerin",
    shortBio:
      "Hey, ich bin Vio! Ich entwickle visuelle Erzählungen, indem ich Fragmente der realen Welt erkunde und in neue visuelle Räume verwandle. Ich studierte Grafikdesign und Art Direction an der NABA Milano und vertiefe meine Praxis derzeit durch ein Kunststudium am Campus Naturalis München. Neben meiner Arbeit als freiberufliche Illustratorin und Designerin pflege ich eine persönliche Praxis, die sowohl digitale als auch analoge, prozessorientierte Kunstansätze umfasst.",
    fullNameValue: "Violetta Prandetskaya",
    socialsLabel: "Socials",
  },
  ru: {
    basedInLabel: "Город",
    basedInValue: "Мюнхен, Германия",
    roleLabel: "Роль",
    roleValue: "Illustrator, Graphic Designer, Artist",
    shortBio:
      "Привет, я Вио! Я создаю визуальные нарративы, исследуя фрагменты реального мира и превращая их в новые визуальные пространства. Я изучала графический дизайн и арт-дирекцию в NABA Milano и сейчас углубляю свою практику через изучение арт-терапии в Campus Naturalis Мюнхен. Наряду с клиентской работой в качестве фриланс-иллюстратора и дизайнера я веду личную практику, основанную на цифровом и аналоговом процессуальном искусстве.",
    fullNameValue: "Violetta Prandetskaya",
    socialsLabel: "Соцсети",
  },
};


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
            <div className="text-white/90 px-4 md:px-8 py-10 md:py-16">
              <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
                {/* Portrait */}
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

                {/* Text */}
                <div className="flex-1 flex flex-col">
                  <p className="mt-0 font-semibold tracking-[0.01em] text-[var(--color-text)] leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", padding: 0 }}>
                    {t.fullNameValue}
                  </p>
                  <p className="mt-3 font-semibold uppercase tracking-[var(--tracking-label)] text-[var(--color-text)]" style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", padding: 0 }}>
                    {t.roleValue}
                  </p>
                  <p className="mt-2 text-white/80" style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", padding: 0 }}>
                    <span className="uppercase tracking-[var(--tracking-indicator)] text-[var(--color-label)] mr-2">
                      {t.basedInLabel}
                    </span>
                    <span>{t.basedInValue}</span>
                  </p>
                  <p className="mt-5 text-[var(--color-text-secondary)] leading-relaxed" style={{ fontSize: "clamp(1.2rem, 1.5vw, 1.125rem)", padding: 0 }}>
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
