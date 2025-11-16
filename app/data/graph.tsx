// This file contains the actual data, i.e. image -> data model mapping
import { GalleryItem, LetterItem } from "./model";

export const gallery_graph: GalleryItem[] = [
  { index: 0, image: "/gallery/angels.png", alt: "Vio's gallery, number 0" },
  { index: 1, image: "/gallery/beach.PNG", alt: "Vio's gallery, number 1" },
  { index: 2, image: "/gallery/bird.png", alt: "Vio's gallery, number 2" },
  { index: 3, image: "/gallery/bottle.PNG", alt: "Vio's gallery, number 3" },
  { index: 4, image: "/gallery/chat.PNG", alt: "Vio's gallery, number 4" },
  { index: 5, image: "/gallery/couple.png", alt: "Vio's gallery, number 5" },
  { index: 6, image: "/gallery/dogs.PNG", alt: "Vio's gallery, number 6" },
  { index: 7, image: "/gallery/field.PNG", alt: "Vio's gallery, number 7" },
  { index: 8, image: "/gallery/ghosts.PNG", alt: "Vio's gallery, number 8" },
  { index: 9, image: "/gallery/grandpa.PNG", alt: "Vio's gallery, number 9" },
  { index: 10, image: "/gallery/looking.PNG", alt: "Vio's gallery, number 10" },
  { index: 11, image: "/gallery/memories.PNG", alt: "Vio's gallery, number 11" },
  { index: 12, image: "/gallery/shame.PNG", alt: "Vio's gallery, number 12" },
  { index: 13, image: "/gallery/sunburn.PNG", alt: "Vio's gallery, number 13" },
  { index: 14, image: "/gallery/surrealdude.png", alt: "Vio's gallery, number 14" },
  { index: 15, image: "/gallery/treeudude.png", alt: "Vio's gallery, number 15" },
  { index: 16, image: "/gallery/vogue.png", alt: "Vio's gallery, number 16" },
  { index: 17, image: "/gallery/wood.png", alt: "Vio's gallery, number 17" },
];

export const letters: Record<"V" | "I" | "O", LetterItem[]> = {
  V: [
    { index: 0, image: "/letters/V/me.png", alt: "me" },
    { index: 1, image: "/letters/V/pants.png", alt: "pants" },
    { index: 2, image: "/letters/V/pens.png", alt: "pens" },
    { index: 3, image: "/letters/V/shape.png", alt: "shape" },
  ],
  I: [
    { index: 0, image: "/letters/I/face.png", alt: "face" },
    { index: 1, image: "/letters/I/shapes.png", alt: "shapes" },
    { index: 2, image: "/letters/I/sun.png", alt: "sun" },
    { index: 3, image: "/letters/I/window.png", alt: "window" },
  ],
  O: [
    { index: 0, image: "/letters/O/face.PNG", alt: "face" },
    { index: 1, image: "/letters/O/flower head.png", alt: "flower head" },
    { index: 2, image: "/letters/O/kaktus.png", alt: "kaktus" },
    { index: 3, image: "/letters/O/shape.png", alt: "shape" },
  ],
};
