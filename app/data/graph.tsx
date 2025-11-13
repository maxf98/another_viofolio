// This file contains the actual data, i.e. image -> data model mapping
import { GalleryItem, LetterItem } from "./model";

export const gallery_graph: GalleryItem[] = [
  { index: 0, image: "/gallery/angels.png", alt: "Vio's gallery, number 0" },
  { index: 1, image: "/gallery/bird.png", alt: "Vio's gallery, number 1" },
  { index: 2, image: "/gallery/bottle.PNG", alt: "Vio's gallery, number 2" },
  { index: 3, image: "/gallery/breathe.png", alt: "Vio's gallery, number 3" },
  { index: 4, image: "/gallery/chat.PNG", alt: "Vio's gallery, number 4" },
  { index: 5, image: "/gallery/dogs.PNG", alt: "Vio's gallery, number 5" },
  { index: 6, image: "/gallery/feelloved.png", alt: "Vio's gallery, number 6" },
  { index: 7, image: "/gallery/field.PNG", alt: "Vio's gallery, number 7" },
  { index: 8, image: "/gallery/grandpa.png", alt: "Vio's gallery, number 8" },
  { index: 9, image: "/gallery/kundalini.png", alt: "Vio's gallery, number 9" },
  { index: 10, image: "/gallery/monkeybrain.jpg", alt: "Vio's gallery, number 10" },
  { index: 11, image: "/gallery/octoberfest.png", alt: "Vio's gallery, number 11" },
  { index: 12, image: "/gallery/poster.png", alt: "Vio's gallery, number 12" },
  { index: 13, image: "/gallery/quardss.png", alt: "Vio's gallery, number 13" },
  { index: 14, image: "/gallery/sand.png", alt: "Vio's gallery, number 14" },
  { index: 15, image: "/gallery/shock.PNG", alt: "Vio's gallery, number 15" },
  { index: 16, image: "/gallery/sky.PNG", alt: "Vio's gallery, number 16" },
  { index: 17, image: "/gallery/streamdeckk.png", alt: "Vio's gallery, number 17" },
  { index: 18, image: "/gallery/surrealdude.png", alt: "Vio's gallery, number 18" },
  { index: 19, image: "/gallery/tears.png", alt: "Vio's gallery, number 19" },
  { index: 20, image: "/gallery/vogue.png", alt: "Vio's gallery, number 20" },
  { index: 21, image: "/gallery/walkofshame.jpg", alt: "Vio's gallery, number 21" },
  { index: 22, image: "/gallery/wavexlrr.png", alt: "Vio's gallery, number 22" },
  { index: 23, image: "/gallery/winter.png", alt: "Vio's gallery, number 23" },
  { index: 24, image: "/gallery/wood.png", alt: "Vio's gallery, number 24" },
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
