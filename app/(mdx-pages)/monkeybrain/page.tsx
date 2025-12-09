"use client";

import Navigation from "@/app/components/navigation/Navigation";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";
import Monkeybrain from "@/app/components/monkeybrain/monkeybrain";

export default function Page() {
  return (
    <div>
      <Navigation sections={[]} />

      <div className="mt-24">
        <h1>Monkeybrain</h1>
        <p>Monkeybrain is a magazine (better viewed on a Desktop computer!)</p>
        <Monkeybrain />
      </div>
    </div>
  );
}
