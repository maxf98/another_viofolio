import { StaticImageData } from "next/image";

// Base interface for image items
export interface ImageItem {
  index: number;
  image: StaticImageData | string;
  alt?: string;
  title?: string;
  description?: string;
}

// GalleryItem is the same as ImageItem (no extension needed)
export type GalleryItem = ImageItem;

// LetterItem uses string paths instead of StaticImageData for dynamic loading
export interface LetterItem {
  index: number;
  image: string;
  alt?: string;
  title?: string;
  description?: string;
}
