"use client";

import Image from "next/image";
import Navigation from "@/app/components/navigation/Navigation";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";
import ScrollSection from "@/app/components/ScrollSection";

export default function Page() {
  return (
    <div>
      <Navigation sections={[]} />

      <ProjectHeroSection
        src="/covers/arttherapy.png"
        alt="Art Therapy"
        title="Analogue Experimentations"
        description="In June 2025, my journey led me to begin my Art Therapy Practitioner training at Campus Naturalis in Munich - exploring various realms of art and creativity. Returning to traditional mediums and hands-on processes has created a space for deeper exploration—where imagination meets emotion, and where small creative experiments can grow into meaningful inner work."
      />

      <div id="work" className="mt-24">
        <ScrollSection
          title="Stone Painting"
          backgroundImage="/arttherapy/stone/stone2.png"
        >
          <div className="max-w-2xl space-y-6">
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Working with stones connects us to the earth and the timeless.
              Each stone carries its own history, its own texture, its own
              weight. Painting on them becomes a meditative dialogue between
              material and intention.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-80">
              The natural imperfections and shapes of each stone guide the
              creative process, teaching us to work with what is given rather
              than imposing our will upon a blank canvas.
            </p>
          </div>
        </ScrollSection>

        <ScrollSection
          title="Sponge Techniques"
          backgroundImage="/arttherapy/sponge/sponge1.png"
        >
          <div className="max-w-2xl space-y-6">
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Sponge painting introduces an element of controlled spontaneity.
              The porous texture creates organic patterns that the hand alone
              cannot replicate, inviting us to embrace the unexpected.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-80">
              Through layering and blending, we discover how colors interact and
              merge, creating depth and atmosphere that emerges from the process
              itself.
            </p>
          </div>
        </ScrollSection>

        <ScrollSection
          title="Rain Paintings"
          backgroundImage="/arttherapy/rain/rain1.png"
        >
          <div className="max-w-2xl space-y-6">
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Collaborating with rain transforms the creative act into a
              partnership with nature. Pigments are placed on paper and left to
              the mercy of falling water, dissolving boundaries between artist
              and environment.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-80">
              The results are never predictable—each rainfall brings its own
              rhythm, its own intensity, its own story. We learn to let go and
              trust the process.
            </p>
          </div>
        </ScrollSection>
      </div>
    </div>
  );
}
