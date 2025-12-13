"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RotateOnHover from "../animations/RotateOnHover";
import ScrollNav from "./ScrollNav";
import HamburgerMenu from "./HamburgerMenu";

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind
    };

    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
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
    </div>
  );
}
