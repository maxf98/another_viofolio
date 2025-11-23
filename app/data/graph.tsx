// This file contains the actual data, i.e. image -> data model mapping
import { GalleryItem, LetterItem } from "./model";

// Gallery images
import angels from "@/public/gallery/angels.png";
import beach from "@/public/gallery/beach.png";
import bird from "@/public/gallery/bird.png";
import bottle from "@/public/gallery/bottle.png";
import chat from "@/public/gallery/chat.png";
import couple from "@/public/gallery/couple.png";
import dogs from "@/public/gallery/dogs.png";
import field from "@/public/gallery/field.png";
import ghosts from "@/public/gallery/ghosts.png";
import grandpa from "@/public/gallery/grandpa2.png";
import looking from "@/public/gallery/looking.png";
import memories from "@/public/gallery/memories.png";
import shame from "@/public/gallery/shame.png";
import sunburn from "@/public/gallery/sunburn.png";
import surrealdude from "@/public/gallery/surrealdude.png";
import treeudude from "@/public/gallery/treeudude.png";
import vogue from "@/public/gallery/vogue.png";
import wood from "@/public/gallery/wood.png";

// Letter V images
import vMe from "@/public/letters/V/me.png";
import vPants from "@/public/letters/V/pants.png";
import vPens from "@/public/letters/V/pens.png";
import vShape from "@/public/letters/V/shape.png";
import vSelfPortrait from "@/public/letters/V/selfportrait.png";

// Letter I images
import iFace from "@/public/letters/I/face.png";
import iShapes from "@/public/letters/I/shapes.png";
import iSun from "@/public/letters/I/sun.png";
import iWindow from "@/public/letters/I/window.png";

// Letter O images
import oFace from "@/public/letters/O/face.png";
import oFlowerHead from "@/public/letters/O/flower head.png";
import oKaktus from "@/public/letters/O/kaktus.png";
import oShape from "@/public/letters/O/shape.png";

export const gallery_graph: GalleryItem[] = [
  { index: 0, image: angels, alt: "Vio's gallery, number 0" },
  { index: 1, image: beach, alt: "Vio's gallery, number 1" },
  { index: 2, image: bird, alt: "Vio's gallery, number 2" },
  { index: 3, image: bottle, alt: "Vio's gallery, number 3" },
  { index: 4, image: chat, alt: "Vio's gallery, number 4" },
  { index: 5, image: couple, alt: "Vio's gallery, number 5" },
  { index: 6, image: dogs, alt: "Vio's gallery, number 6" },
  { index: 7, image: field, alt: "Vio's gallery, number 7" },
  { index: 8, image: ghosts, alt: "Vio's gallery, number 8" },
  { index: 9, image: grandpa, alt: "Vio's gallery, number 9" },
  { index: 10, image: looking, alt: "Vio's gallery, number 10" },
  { index: 11, image: memories, alt: "Vio's gallery, number 11" },
  { index: 12, image: shame, alt: "Vio's gallery, number 12" },
  { index: 13, image: sunburn, alt: "Vio's gallery, number 13" },
  { index: 14, image: surrealdude, alt: "Vio's gallery, number 14" },
  { index: 15, image: treeudude, alt: "Vio's gallery, number 15" },
  { index: 16, image: vogue, alt: "Vio's gallery, number 16" },
  { index: 17, image: wood, alt: "Vio's gallery, number 17" },
];

export const letters: Record<"V" | "I" | "O", LetterItem[]> = {
  V: [
    // { index: 0, image: vMe, alt: "me" },
    { index: 1, image: vPants, alt: "pants" },
    { index: 2, image: vPens, alt: "pens" },
    { index: 3, image: vShape, alt: "shape" },
    { index: 4, image: vSelfPortrait, alt: "self-portrait" },
  ],
  I: [
    { index: 0, image: iFace, alt: "face" },
    { index: 1, image: iShapes, alt: "shapes" },
    { index: 2, image: iSun, alt: "sun" },
    { index: 3, image: iWindow, alt: "window" },
  ],
  O: [
    { index: 0, image: oFace, alt: "face" },
    { index: 1, image: oFlowerHead, alt: "flower head" },
    { index: 2, image: oKaktus, alt: "kaktus" },
    { index: 3, image: oShape, alt: "shape" },
  ],
};
