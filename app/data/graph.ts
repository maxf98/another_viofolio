// Image imports only — all text/translations live in app/translations/gallery.tsx
import { StaticImageData } from "next/image";
import { GalleryItem, LetterItem } from "./model";

export interface GallerySection {
  id: string;
  title: string;
  description: string;
  images: GalleryItem[];
}

// Gallery images
import angels from "../../public/gallery/angels.webp";
import beach from "../../public/gallery/beach.webp";
import bird from "../../public/gallery/bird.webp";
import bottle from "../../public/gallery/bottle.webp";
import chat from "../../public/gallery/chat.webp";
import field from "../../public/gallery/field.webp";
import ghosts from "../../public/gallery/ghosts.webp";
import grandpa from "../../public/gallery/grandpa2.webp";
import looking from "../../public/gallery/looking.webp";
import memories from "../../public/gallery/memories.webp";
import sunburn from "../../public/gallery/sunburn.webp";
import dude from "../../public/gallery/dude.png";
import self from "../../public/gallery/self.png";
import flowers from "../../public/gallery/flowers.png";
import schadenfreude from "../../public/gallery/schadenfreude.png";
import fake from "../../public/gallery/fake.png";
import treeudude from "../../public/gallery/treeudude.webp";
import dogs from "../../public/gallery/dogs.webp";
import vogue from "../../public/gallery/vogue.webp";
import wood from "../../public/gallery/wood.webp";
import thoughts from "../../public/gallery/thoughts.webp";
import monster from "../../public/gallery/monster.webp";
import ship from "../../public/gallery/ship.webp";
import sun from "../../public/gallery/sun.png";
import view from "../../public/gallery/view.webp";
import what from "../../public/gallery/what.png";
import eye from "../../public/gallery/eye.png";
import girl from "../../public/gallery/girl.png";
import thoughtsPng from "../../public/gallery/originals_backup/thoughts.png";

// Art therapy images
import blowout from "../../public/gallery/blowout.png";
import fish from "../../public/gallery/fish.png";
import stairhair from "../../public/gallery/stairhair.png";
import chalk3 from "../../public/gallery/chalk 3.png";
import flo from "../../public/gallery/flo.png";
import mask from "../../public/gallery/mask.png";
import grounded from "../../public/gallery/grounded.png";
import puzzle from "../../public/gallery/puzzle.png";
import frottage from "../../public/gallery/Frottage.png";
import dragon from "../../public/gallery/dragon.png";
import handpainting from "../../public/gallery/handpainting.png";
import abdruck from "../../public/gallery/Narrative.png";
import pic from "../../public/gallery/pic.png";
import carib from "../../public/gallery/carib.png";
import mix3 from "../../public/gallery/mix3.png";

// Monkeybrain magazine images
import m1 from "../../public/gallery/m1 2.png";
import m2 from "../../public/gallery/m2 2.png";
import m3 from "../../public/gallery/m3 2.png";
import m4 from "../../public/gallery/m4.png";
import m6 from "../../public/gallery/m6.png";
import m7 from "../../public/gallery/m7.png";

// Letter images - using dynamic paths instead of static imports for better performance

// Image-only exports (no text) — used by gallery.tsx translations provider
export const galleryImages = {
  illustratedPhotography: [
    bird,
    ship,
    what,
    memories,
    view,
    bottle,
    treeudude,
    flowers,
    thoughtsPng,
    looking,
    ghosts,
    girl,
    schadenfreude,
    chat,
    wood,
    angels,
    monster,
    sunburn,
    fake,
    grandpa,
    dogs,
    sun,
  ],
  artTherapy: [blowout, fish, stairhair, chalk3, flo, mask, grounded, puzzle, frottage, dragon, handpainting, abdruck, pic, carib, mix3],
  monkeybrain: [m1, m2, m3, m4, m6, m7],
};

export const gallery_graph: GalleryItem[] = [
  { index: 0, image: angels, alt: "Vio's gallery, number 0" },
  { index: 1, image: beach, alt: "Vio's gallery, number 1" },
  { index: 2, image: bird, alt: "Vio's gallery, number 2" },
  { index: 3, image: bottle, alt: "Vio's gallery, number 3" },
  { index: 4, image: chat, alt: "Vio's gallery, number 4" },
  { index: 7, image: field, alt: "Vio's gallery, number 7" },
  { index: 8, image: ghosts, alt: "Vio's gallery, number 8" },
  { index: 9, image: grandpa, alt: "Vio's gallery, number 9" },
  { index: 10, image: looking, alt: "Vio's gallery, number 10" },
  { index: 11, image: memories, alt: "Vio's gallery, number 11" },
  { index: 13, image: sunburn, alt: "Vio's gallery, number 13" },
  { index: 14, image: wood, alt: "Vio's gallery, number 14" },
  { index: 15, image: treeudude, alt: "Vio's gallery, number 15" },
  { index: 16, image: vogue, alt: "Vio's gallery, number 16" },
  { index: 18, image: thoughts, alt: "Vio's gallery, number 18" },
  { index: 22, image: monster, alt: "Vio's gallery, number 22" },
  { index: 23, image: ship, alt: "Vio's gallery, number 23" },
  { index: 24, image: view, alt: "Vio's gallery, number 24" },
];

export interface GallerySection {
  id: string;
  title: string;
  description: string;
  images: GalleryItem[];
}

export const letters: Record<"V" | "I" | "O", LetterItem[]> = {
  V: [
    { index: 2, image: "/letters/V/4v.png", alt: "4v" },
    { index: 6, image: "/letters/V/blip.png", alt: "blip" },
    { index: 1, image: "/letters/V/pp.png", alt: "pp" },
  ],
  I: [
    { index: 1, image: "/letters/I/shapes.webp", alt: "shapes" },
    { index: 4, image: "/letters/I/plants.png", alt: "plants" },
  ],
  O: [
    { index: 9, image: "/letters/O/7o.png", alt: "7o" },
    { index: 4, image: "/letters/O/1o.png", alt: "1o" },
    { index: 7, image: "/letters/O/4o.png", alt: "4o" },
  ],
};
