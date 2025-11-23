"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FlipBook from "./FlipBook";

export default function Monkeybrain() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Section is active when approaching or in viewport
      // Triggers well before section enters view for seamless transition
      const active =
        rect.top < viewportHeight * 2 && rect.bottom > -viewportHeight;
      setIsActive(active);
    };

    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen">
      {/* Fixed background image - z-index changes based on scroll position */}
      <div
        className={`bg-body fixed top-0 left-0 w-full h-screen ${
          isActive ? "-z-1" : "-z-50"
        }`}
      >
        <Image
          src="/projects/MONKEYBRAIN/pages/FINALPATTERNS_left.png"
          alt="Monkeybrain background pattern"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Content that scrolls over the fixed image */}
      <div className="relative z-10">
        <div className="content-container py-8">
          <FlipBook />
        </div>
      </div>
    </section>
  );
}
