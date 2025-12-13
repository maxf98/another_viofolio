import { StaticImageData } from "next/image";

// Base interface for image items
export interface ImageItem {
  index: number;
  image: StaticImageData | string;
  alt?: string;
}

// GalleryItem is the same as ImageItem (no extension needed)
export type GalleryItem = ImageItem;
export type LetterItem = ImageItem;
