// This file contains the actual data, i.e. image -> data model mapping
import { GalleryItem, LetterItem } from "./model";

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
import shame from "../../public/gallery/shame.webp";
import sunburn from "../../public/gallery/sunburn.webp";
import surrealdude from "../../public/gallery/surrealdude.webp";
import treeudude from "../../public/gallery/treeudude.webp";
import vogue from "../../public/gallery/vogue.webp";
import wood from "../../public/gallery/wood.webp";
import thoughts from "../../public/gallery/thoughts.webp";
import monster from "../../public/gallery/monster.webp";
import ship from "../../public/gallery/ship.webp";
import view from "../../public/gallery/view.webp";
import eye from "../../public/gallery/eye.png";
import girl from "../../public/gallery/girl.png";

// Art therapy images (from gallery folder)
import cat2 from "../../public/gallery/cat2.png";
import chalk2 from "../../public/gallery/chalk2.png";
import chalk3 from "../../public/gallery/chalk 3.png";
import felt1 from "../../public/gallery/felt1.png";
import flo from "../../public/gallery/flo.png";
import pic from "../../public/gallery/pic.png";
import rain from "../../public/gallery/rain.png";
import stone2Gallery from "../../public/gallery/stone2.png";

// Letter V images
import vMe from "../../public/letters/V/me.png";
import vPants from "../../public/letters/V/pants.png";
import vPens from "../../public/letters/V/pens.png";
import vShape from "../../public/letters/V/shape.png";
import vSelfPortrait from "../../public/letters/V/selfportrait.png";

// Letter I images
import iFace from "../../public/letters/I/face.png";
import iShapes from "../../public/letters/I/shapes.png";
import iSun from "../../public/letters/I/sun.png";
import iWindow from "../../public/letters/I/window.png";

// Letter O images
import oFace from "../../public/letters/O/face.png";
import oFlowerHead from "../../public/letters/O/flower head.png";
import oKaktus from "../../public/letters/O/kaktus.png";
import oShape from "../../public/letters/O/shape.png";

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
  { index: 12, image: shame, alt: "Vio's gallery, number 12" },
  { index: 13, image: sunburn, alt: "Vio's gallery, number 13" },
  { index: 14, image: wood, alt: "Vio's gallery, number 14" },
  { index: 15, image: treeudude, alt: "Vio's gallery, number 15" },
  { index: 16, image: vogue, alt: "Vio's gallery, number 16" },
  { index: 17, image: surrealdude, alt: "Vio's gallery, number 17" },
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

export const gallery_sections: GallerySection[] = [
  {
    id: "illustrated-photography",
    title: "Illustrated Photography",
    description: "Transforming photographs into surreal narratives—blending reality with imagination.",
    images: [
      { index: 0, image: ship, alt: "ship", title: "Ship", description: "A voyage through dreams and memories." },
      { index: 1, image: bird, alt: "bird", title: "Bird", description: "Freedom takes flight in unexpected forms." },
      { index: 2, image: looking, alt: "looking", title: "Looking", description: "Searching for meaning in the everyday." },
      { index: 3, image: view, alt: "view", title: "View", description: "A window into another world." },
      { index: 4, image: wood, alt: "wood", title: "Wood", description: "Nature's textures meet imagination." },
      { index: 5, image: treeudude, alt: "treeudude", title: "Tree Dude", description: "Where humans and nature intertwine." },
      { index: 6, image: ghosts, alt: "ghosts", title: "Ghosts", description: "Echoes of presence lingering in space." },
      { index: 7, image: sunburn, alt: "sunburn", title: "Sunburn", description: "The warmth that leaves its mark." },
      { index: 8, image: monster, alt: "monster", title: "Monster", description: "Friendly creatures from the imagination." },
      { index: 10, image: grandpa, alt: "grandpa", title: "Grandpa", description: "A tribute to cherished memories." },
      { index: 11, image: chat, alt: "chat", title: "Chat", description: "Conversations that shape who we are." },
      { index: 12, image: shame, alt: "shame", title: "Shame", description: "Emotions laid bare through visual poetry." },
      { index: 13, image: bottle, alt: "bottle", title: "Bottle", description: "Messages waiting to be discovered." },
      { index: 14, image: angels, alt: "angels", title: "Angels", description: "Guardians watching from above." },
    ],
  },
  {
    id: "traditional-media",
    title: "Traditional Media",
    description: "Handmade works created with traditional materials and techniques.",
    images: [],
  },
  {
    id: "art-therapy",
    title: "Analogue Process Driven Explorations",
    description: "Process-driven techniques from my art therapy studies—focusing on the creative journey rather than the outcome.",
    images: [
      { index: 0, image: felt1, alt: "felt work", title: "Felt Work", description: "Texture and color in tactile form." },
      { index: 1, image: pic, alt: "pic", title: "Pic", description: "Moments captured in process." },
      { index: 2, image: cat2, alt: "cat", title: "Cat", description: "Playful exploration in form." },
      { index: 3, image: rain, alt: "rain painting", title: "Rain Painting", description: "Collaborating with the elements." },
      { index: 4, image: stone2Gallery, alt: "stone painting", title: "Stone Painting", description: "Finding art in nature's surfaces." },
      { index: 5, image: chalk3, alt: "chalk work", title: "Chalk Work", description: "Exploring texture through chalk." },
      { index: 6, image: flo, alt: "floral", title: "Floral", description: "Celebrating natural beauty." },
      { index: 7, image: chalk2, alt: "chalk drawing", title: "Chalk Drawing", description: "Soft textures and bold strokes." },
    ],
  },
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
