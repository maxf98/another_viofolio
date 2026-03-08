"use client";

import ArchiveSectionPage from "../components/ArchiveSectionPage";
import { GalleryTextProvider } from "@/app/translations/gallery";

export default function IllustratedPhotographyPage() {
  return (
    <GalleryTextProvider>
      <ArchiveSectionPage sectionId="illustrated-photography" />
    </GalleryTextProvider>
  );
}
