import angels from "../../public/gallery/angels.webp";
import beach from "../../public/gallery/beach.webp";
import bottle from "../../public/gallery/bottle.webp";
import chat from "../../public/gallery/chat.webp";
import field from "../../public/gallery/field.webp";
import ghosts from "../../public/gallery/ghosts.webp";
import grandpa from "../../public/gallery/grandpa2.webp";
import looking from "../../public/gallery/looking.webp";
import memories from "../../public/gallery/memories.webp";
import sunburn from "../../public/gallery/sunburn.webp";
import dude from "../../public/gallery/dude.png";
import flowers from "../../public/gallery/flowers.png";
import schadenfreude from "../../public/gallery/schadenfreude.png";
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
import surrealdude from "../../public/gallery/surrealdude.webp";
import cloud from "../../public/gallery/cloud.png";
import thoughtsPng from "../../public/gallery/originals_backup/thoughts.png";

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
import city from "../../public/gallery/city.png";

import m1 from "../../public/gallery/m1 2.png";
import m2 from "../../public/gallery/m2 2.png";
import m3 from "../../public/gallery/m3 2.png";
import m4 from "../../public/gallery/m4.png";
import m6 from "../../public/gallery/m6.png";
import m7 from "../../public/gallery/m7.png";

export const galleryImages = {
  illustratedPhotography: [
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
    grandpa,
    dogs,
    sun,
    field,
    vogue,
    surrealdude,
    beach,
    cloud,
  ],
  artTherapy: [blowout, fish, stairhair, chalk3, flo, mask, grounded, puzzle, frottage, dragon, handpainting, abdruck, pic, carib, mix3, city],
  monkeybrain: [m1, m2, m3, m4, m6, m7],
};

export interface GallerySection {
  id: string;
  title: string;
  description: string;
  images: import("@/app/model").GalleryItem[];
}
