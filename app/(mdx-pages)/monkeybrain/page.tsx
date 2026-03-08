"use client";

import ArchiveSectionPage from "@/app/gallery/components/ArchiveSectionPage";
import { GalleryTextProvider } from "@/app/translations/gallery";

export default function MonkeybrainPage() {
  return (
    <GalleryTextProvider>
      <ArchiveSectionPage sectionId="monkeybrain" />
    </GalleryTextProvider>
  );
}
