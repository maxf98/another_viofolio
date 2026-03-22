"use client";

import { useRef } from "react";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import FixedBackgroundImage from "./FixedBackgroundImage";
import { useLang } from "@/app/context/LanguageContext";
import { globalNavText } from "@/app/translations/globalNav";

type ProjectHeroSectionProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
} & (
  | {
      noBackground?: false;
      src: StaticImageData;
      alt: string;
    }
  | {
      noBackground: true;
      src?: StaticImageData;
      alt?: string;
    }
);

export default function ProjectHeroSection({
  src,
  alt,
  title,
  description,
  children,
  noBackground = false,
}: ProjectHeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const t = globalNavText[lang];

  return (
    <div
      ref={heroRef}
      className="relative w-screen min-h-screen"
      style={noBackground ? undefined : { clipPath: "inset(0)" }}
    >
      {!noBackground && (
        <FixedBackgroundImage
          src={src!}
          alt={alt!}
          opacity={0.2}
          objectPosition="center 70%"
          imageClassName="w-full h-full object-cover scale-100"
          quality={60}
          priority
        />
      )}
      <motion.div className="relative z-10 flex min-h-screen flex-col">
        <div className="h-20 md:h-24 shrink-0" />
        <div className="content-container mt-auto pb-20 md:pb-32">
          <div className="-mb-1 md:-mb-2 text-[var(--color-text-secondary)] !text-base md:!text-xl tracking-[var(--tracking-label)] uppercase font-[var(--weight-heading)]">
            {t.workingWith}
          </div>
          {title && (
            <h1 className="!leading-[var(--leading-tight)] !text-7xl md:!text-[10rem]">{title}</h1>
          )}
          {description && (
            <p className="text-[length:var(--text-body-sm)] md:text-[length:var(--text-body)] mt-4 max-w-2xl">{description}</p>
          )}
          {children}
        </div>
      </motion.div>
    </div>
  );
}
