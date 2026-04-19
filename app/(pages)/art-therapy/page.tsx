"use client";

import LocalNav from "@/app/components/navigation/LocalNav";
import SectionHintsGrid from "@/app/components/SectionHintsGrid";
import PageHeader from "@/app/components/PageHeader";
import AnalogueSections from "./AnalogueSections";
import {
  GalleryTextProvider,
  useGalleryText,
} from "@/app/translations/gallery";

function ArtTherapyInner() {
  const t = useGalleryText();

  const navSections = [
    { id: "exploring-surroundings", label: "Exploring Surroundings" },
    { id: "chance-and-material", label: "Exploring Chance" },
    { id: "intuition-and-inner-world", label: "Intuition & Inner World" },
  ];

  const section = t.sections.find((s) => s.id === "art-therapy");

  return (
    <div className="flex flex-col relative isolate min-h-screen overflow-x-hidden">
      <LocalNav sections={navSections} />

      <div className="pt-24 pb-8 content-container relative z-10">
        {section && (
          <PageHeader title={section.title} description={section.description} />
        )}
      </div>

      <AnalogueSections />

      <div className="relative z-10">
        <SectionHintsGrid currentHref="/art-therapy" transparentCards />
      </div>
    </div>
  );
}

export default function ArtTherapyPage() {
  return (
    <GalleryTextProvider>
      <ArtTherapyInner />
    </GalleryTextProvider>
  );
}
