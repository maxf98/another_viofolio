"use client";

import LocalNav from "@/app/components/navigation/LocalNav";
import SectionHintsGrid from "@/app/components/SectionHintsGrid";
import PageHeader from "@/app/components/PageHeader";
import DigitalSections from "./DigitalSections";
import { GalleryTextProvider, useGalleryText } from "@/app/translations/gallery";

function IllustratedPhotographyInner() {
  const t = useGalleryText();

  const navSections = t.digitalGroups.map((g) => ({ id: g.id, label: g.groupTitle }));

  const section = t.sections.find((s) => s.id === "illustrated-photography");

  return (
    <div className="flex flex-col relative isolate min-h-screen overflow-x-hidden">
      <LocalNav sections={navSections} />

      <div className="pt-24 pb-8 content-container relative z-10">
        {section && (
          <PageHeader title={section.title} description={section.description} />
        )}
      </div>

      <DigitalSections />

      <div className="relative z-10">
        <SectionHintsGrid currentHref="/illustrated-photography" transparentCards />
      </div>
    </div>
  );
}

export default function IllustratedPhotographyPage() {
  return (
    <GalleryTextProvider>
      <IllustratedPhotographyInner />
    </GalleryTextProvider>
  );
}
