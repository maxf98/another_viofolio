"use client";

import ArchiveSectionPage from "../components/ArchiveSectionPage";
import { GalleryTextProvider } from "@/app/translations/gallery";

export default function ArtTherapyPage() {
  return (
    <GalleryTextProvider>
      <ArchiveSectionPage sectionId="art-therapy" />
    </GalleryTextProvider>
  );
}
