"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RotateOnHover from "../animations/RotateOnHover";
import ScrollNav from "./ScrollNav";
import HamburgerMenu from "./HamburgerMenu";
import { useLoadState } from "@/app/context/LoadContext";

export interface NavSection {
  id: string;
  label?: string;
  src?: string;
}

interface NavigationProps {
  sections: NavSection[];
}

export default function Navigation({ sections }: NavigationProps) {
  const [isMobile, setIsMobile] = useState(false);
  const { state } = useLoadState();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind
    };

    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [showNav, setShowNav] = useState(false);

  // Show nav after background has faded in (0.5s delay + 0.6s fade = ~1.1s after letters ready)
  useEffect(() => {
    if (state.allLettersReady && !showNav) {
      const timer = setTimeout(() => {
        setShowNav(true);
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [state.allLettersReady, showNav]);

  if (!showNav) {
    return null;
  }

  return (
    <>
      {/* Logo */}
      <header className="fixed top-0 left-0 z-[60] flex flex-col items-center px-6 py-6 md:py-10">
        <Link href="/" className="inline-block">
          <RotateOnHover rotation={8}>
            <Image src="/logo.png" alt="Logo" width={36} height={36} priority />
          </RotateOnHover>
        </Link>
      </header>

      {/* Navigation - only render if there are sections */}
      {sections.length > 0 && (
        <>
          {isMobile ? (
            <HamburgerMenu sections={sections} />
          ) : (
            <ScrollNav sections={sections} />
          )}
        </>
      )}
    </>
  );
}
