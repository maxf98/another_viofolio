// Base interface for image items
export interface ImageItem {
  index: number;
  image: string;
  alt?: string;
}

// GalleryItem is the same as ImageItem (no extension needed)
export type GalleryItem = ImageItem;
export type LetterItem = ImageItem;
