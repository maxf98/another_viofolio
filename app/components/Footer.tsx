"use client";

import Link from "next/link";
import { FaTiktok, FaInstagram, FaEnvelope } from "react-icons/fa";
import RotateOnHover from "./animations/RotateOnHover";
import { useLang } from "@/app/context/LanguageContext";
import { usePathname } from "next/navigation";
import FixedBackgroundImage from "./FixedBackgroundImage";

const footerText = {
  en: { impressum: "Impressum" },
  de: { impressum: "Impressum" },
  ru: { impressum: "Impressum" },
} as const;

function getFooterBackground(pathname: string) {
  if (pathname === "/") {
    return {
      src: "/gallery/ship.webp",
      objectPosition: "center bottom",
      overlay: "bg-[#1a1a1f]/60",
      opacity: 1,
      containerBg: "",
    };
  }
  if (pathname === "/elgato") {
    return {
      src: "/projects/elgato/brand-illustration/ofest/6.png",
      objectPosition: "center",
      opacity: 0.05,
      containerBg: "bg-[#1e1e28]",
    };
  }
  if (pathname === "/quards") {
    return {
      src: "/projects/quards/featureArtNoBG.webp",
      objectPosition: "center 70%",
      opacity: 0.2,
      containerBg: "bg-[#24242e]",
    };
  }
  if (pathname === "/mascha") {
    return {
      src: "/covers/mascha/m-plants.webp",
      objectPosition: "center 70%",
      opacity: 0.1,
      containerBg: "bg-[#24242e]",
    };
  }
  if (pathname === "/gallery/illustrated-photography") {
    return {
      src: "/gallery/bird.webp",
      objectPosition: "center",
      opacity: 0.15,
      containerBg: "",
    };
  }
  if (pathname === "/gallery/art-therapy") {
    return {
      src: "/gallery/Frottage.png",
      objectPosition: "center",
      opacity: 0.1,
      containerBg: "",
    };
  }
  if (pathname === "/gallery/monkeybrain") {
    return {
      src: "/gallery/m2%202.png",
      objectPosition: "center",
      opacity: 0.15,
      containerBg: "",
    };
  }
  if (pathname === "/monkeybrain") {
    return {
      src: "/gallery/m2%202.png",
      objectPosition: "center",
      opacity: 0.15,
      containerBg: "",
    };
  }
  if (pathname === "/gallery") {
    return {
      src: "/gallery/m2%202.png",
      objectPosition: "center",
      opacity: 0.15,
      containerBg: "",
    };
  }
  return null;
}

export default function Footer() {
  const { lang } = useLang();
  const t = footerText[lang];
  const pathname = usePathname();
  const footerBg = getFooterBackground(pathname);
  const hasImageBg = Boolean(footerBg);

  const iconClass = hasImageBg
    ? "text-white/75 hover:text-white transition-colors"
    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors";
  const linkClass = hasImageBg
    ? "text-white/75 hover:text-white transition-colors"
    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors";
  const copyrightClass = hasImageBg
    ? "text-sm text-white/65"
    : "text-sm text-gray-500 dark:text-gray-400";

  return (
    <footer className={`w-full border-t ${hasImageBg ? "border-white/20 relative overflow-hidden" : "border-gray-200 dark:border-gray-700 bg-body"}`}>
      {footerBg && (
        <>
          <FixedBackgroundImage
            src={footerBg.src}
            alt="Footer background"
            opacity={footerBg.opacity}
            objectPosition={footerBg.objectPosition}
            containerClassName={`-z-10 pointer-events-none ${footerBg.containerBg}`}
            loading="eager"
          >
            {"overlay" in footerBg && footerBg.overlay ? (
              <div className={`absolute inset-0 ${footerBg.overlay}`} />
            ) : null}
          </FixedBackgroundImage>
        </>
      )}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-8">
            <RotateOnHover rotation={15} stiffness={400} damping={8}>
              <a
                href="https://www.tiktok.com/@vioseum"
                target="_blank"
                rel="noopener noreferrer"
                className={iconClass}
                aria-label="TikTok"
              >
                <FaTiktok size={32} />
              </a>
            </RotateOnHover>

            <RotateOnHover rotation={15} stiffness={400} damping={8}>
              <a
                href="https://www.instagram.com/vioseum/"
                target="_blank"
                rel="noopener noreferrer"
                className={iconClass}
                aria-label="Instagram"
              >
                <FaInstagram size={32} />
              </a>
            </RotateOnHover>

            <RotateOnHover rotation={15} stiffness={400} damping={8}>
              <a
                href="mailto:vioprandetskaya@gmail.com"
                className={iconClass}
                aria-label="Email"
              >
                <FaEnvelope size={32} />
              </a>
            </RotateOnHover>
          </div>

          {/* Footer Links */}
          <div className="flex gap-6 text-sm">
            <Link
              href="/impressum"
              className={linkClass}
            >
              {t.impressum}
            </Link>
          </div>

          {/* Copyright */}
          <p className={copyrightClass}>
            © {new Date().getFullYear()} Violetta Prandetskaya
          </p>
        </div>
      </div>
    </footer>
  );
}
