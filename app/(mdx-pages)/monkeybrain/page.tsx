"use client";

import Image from "next/image";
import Navigation from "@/app/components/navigation/Navigation";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";
import FlipBook from "@/app/components/monkeybrain/FlipBook";

export default function Page() {
  return (
    <div className="bg-body">
      <Navigation sections={[]} />

      <ProjectHeroSection
        src="/projects/MONKEYBRAIN/monkeybrain.png"
        alt="Monkeybrain"
        title="^MONKEY\nBRAIN^ MAG"
        description="Monkeybrain is a magazine (better viewed on a Desktop computer!)"
      />

      <div className="relative min-h-screen" style={{ clipPath: "inset(0)" }}>
        <div className="fixed inset-0 -z-10 bg-body">
          <Image
            src="/projects/MONKEYBRAIN/pages/FINALPATTERNS_left.png"
            alt=""
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="content-container min-h-screen flex flex-col justify-center py-8">
          <FlipBook />
        </div>
      </div>
    </div>
  );
}
