"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation, { NavSection } from "@/app/components/navigation/Navigation";

const navs: NavSection[] = [
  { id: "nature" },
  { id: "sensory" },
  { id: "chance" },
  { id: "fragments" },
  { id: "imagination" },
];

// Define subsection data
interface ImageGroup {
  title: string;
  images: string[];
}

interface Subsection {
  id: string;
  title: string;
  description: string;
  secondaryDescription?: string;
  thumbnail: string;
  images: string[];
  imageGroups?: ImageGroup[];
}

interface Section {
  id: string;
  title: string;
  description: string;
  backgroundColor?: string;
  backgroundImage?: string;
  subsections: Subsection[];
}

const sections: Section[] = [
  {
    id: "nature",
    title: "Creating with Nature",
    description: "These exercises explore the intersection of art and the natural world, using organic materials and natural processes as creative partners. By working with elements like stones, rain, and flowers, we learn to surrender control and embrace the unexpected beauty that emerges from collaboration with nature.",
    backgroundColor: "#2d4a3a",
    backgroundImage: "/arttherapy/flowers/flower1.png",
    subsections: [
      {
        id: "dipping",
        title: "Dipping Nature",
        description: "Using flowers, leaves, greens, stones, and potatoes gathered from the surroundings, this technique involves dipping natural materials into paint and pressing them onto paper. The unpredictability of each print invites us to embrace imperfection, let go of control, and then add our own marks to transform the accident into something personal.",
        thumbnail: "/arttherapy/flowers/flower1.png",
        images: [],
        imageGroups: [
          {
            title: "Stone Painting",
            images: ["/arttherapy/stone/stone3.png", "/arttherapy/stone/stone1.png", "/arttherapy/stone/stone2.png"],
          },
          {
            title: "Botanical Work",
            images: ["/arttherapy/flowers/flower1.png", "/arttherapy/flowers/flower2.png", "/arttherapy/flowers/flower3.png"],
          },
          {
            title: "Potato Dipping",
            images: [],
          },
        ],
      },
      {
        id: "rain",
        title: "Weather Collaborations",
        description: "Collaborating with weather transforms the creative act into a partnership with natural forces. By placing pigments on paper and letting rain, wind, or sunshine interact with the materials, we surrender control to the elements—dissolving boundaries between artist and environment.",
        thumbnail: "/arttherapy/rain/rain3.png",
        images: ["/arttherapy/rain/rain1.png", "/arttherapy/rain/rain2.png", "/arttherapy/rain/rain3.png", "/arttherapy/rain/rain5.png"],
      },
      {
        id: "nature-imprint",
        title: "Impermanence Work",
        description: "Nature imprint techniques capture the textures and forms of the natural world directly onto paper or fabric. By pressing leaves, bark, flowers, and other organic materials into wet paint or ink, we create intimate records of nature's patterns and structures.",
        thumbnail: "/arttherapy/imprint/imprint1.jpg",
        images: ["/arttherapy/imprint/imprint2.jpg", "/arttherapy/imprint/imprint3.jpg", "/arttherapy/imprint/imprint4.jpg"],
      },
    ],
  },
  {
    id: "sensory",
    title: "Sensory Work",
    description: "These exercises engage the body directly in the creative process, using touch, texture, and physical sensation as pathways to expression. By working with our hands and exploring different materials, we reconnect with the primal joy of making and discover new ways to communicate beyond words.",
    backgroundColor: "#5a5235",
    backgroundImage: "/arttherapy/face trace/eyes/eye1.png",
    subsections: [
      {
        id: "pottery",
        title: "Pottery",
        description: "Working with clay engages the whole body in a grounding, meditative practice. The cool, malleable material responds to every touch, requiring presence and patience as forms slowly emerge.",
        secondaryDescription: "Pottery connects us to one of humanity's oldest crafts, teaching us about impermanence, transformation, and the beauty of functional art shaped by human hands.",
        thumbnail: "/arttherapy/face trace/eyes/eye1.png",
        images: ["/arttherapy/face trace/eyes/eye1.png", "/arttherapy/face trace/eyes/eye2.png", "/arttherapy/face trace/eyes/eye3.png", "/arttherapy/face trace/eyes/eye4.png"],
      },
      {
        id: "felt",
        title: "Felt",
        description: "Working with felt offers a tactile, meditative experience. The soft fibers respond to gentle manipulation, allowing forms to emerge slowly through patient, repetitive motion.",
        thumbnail: "/arttherapy/felt /felt1.png",
        images: ["/arttherapy/felt /felt1.png", "/arttherapy/felt /felt2.png"],
      },
      {
        id: "handpainting",
        title: "Hand Painting",
        description: "Painting directly with hands removes the barrier between artist and material. Fingers become brushes, palms become tools, and the act of creation becomes visceral and immediate.",
        thumbnail: "/arttherapy/handpainting/hand1.png",
        images: ["/arttherapy/handpainting/hand1.png", "/arttherapy/handpainting/hand2.png"],
      },
    ],
  },
  {
    id: "chance",
    title: "Chance Based Methods",
    description: "These techniques embrace randomness and relinquish control, allowing unexpected forms and patterns to emerge. By introducing elements of chance into the creative process, we quiet the inner critic and open ourselves to surprise, discovering beauty in the unplanned and the accidental.",
    backgroundColor: "#6a4d2f",
    backgroundImage: "/arttherapy/sponge/sponge1.png",
    subsections: [
      {
        id: "inkblowing",
        title: "Ink Blowing",
        description: "Ink blowing transforms breath into art. Drops of ink are placed on paper and blown in various directions, creating organic, tree-like forms that seem to grow on their own.",
        secondaryDescription: "This technique connects the act of breathing—so fundamental to life—with creative expression, reminding us that art can emerge from the simplest, most natural gestures.",
        thumbnail: "/arttherapy/sponge/sponge1.png",
        images: [],
      },
      {
        id: "blinddrawing",
        title: "Blind Drawing",
        description: "Blind drawing removes the visual feedback loop, forcing us to trust our hand and intuition. Without seeing what we create, we bypass self-judgment and allow pure expression to flow.",
        secondaryDescription: "The results are often surprising and liberating—imperfect lines that capture essence rather than appearance, teaching us that mistakes can be doorways to discovery.",
        thumbnail: "/arttherapy/sponge/sponge1.png",
        images: [],
      },
      {
        id: "transfer",
        title: "Transfer",
        description: "Transfer techniques involve moving images or textures from one surface to another, creating ghostly impressions and unexpected combinations. The process introduces happy accidents and unpredictable results.",
        secondaryDescription: "By layering transferred images, we build visual narratives that feel dreamlike and mysterious, where meaning emerges through the interplay of chance and intention.",
        thumbnail: "/arttherapy/sponge/sponge1.png",
        images: [],
      },
    ],
  },
  {
    id: "fragments",
    title: "Working with Fragments",
    description: "These exercises explore the art of reassembly and recontextualization, using broken pieces, cutouts, and found objects to create new wholes. By working with fragments, we learn that destruction can lead to creation, and that meaning can emerge from seemingly disconnected parts.",
    backgroundColor: "#6a3f35",
    backgroundImage: "/arttherapy/fragments/collage1.png",
    subsections: [
      {
        id: "collage",
        title: "Collage",
        description: "Collage invites us to see the world as a collection of possibilities. By cutting, tearing, and reassembling images and materials, we create new narratives from existing fragments.",
        secondaryDescription: "This technique teaches us that beauty can emerge from disruption, and that bringing together disparate elements can reveal unexpected connections and meanings.",
        thumbnail: "/arttherapy/fragments/collage1.png",
        images: ["/arttherapy/fragments/collage1.png", "/arttherapy/fragments/collage2.png"],
      },
      {
        id: "arranged",
        title: "Arranged Objects",
        description: "Arranging found objects transforms everyday items into art. By carefully placing and composing objects in space, we discover relationships between form, color, and meaning.",
        secondaryDescription: "This meditative practice encourages mindful observation and teaches us to see the extraordinary within the ordinary, finding harmony in the arrangement of simple things.",
        thumbnail: "/arttherapy/fragments/arranged1.png",
        images: ["/arttherapy/fragments/arranged1.png", "/arttherapy/fragments/arranged2.png"],
      },
    ],
  },
  {
    id: "imagination",
    title: "Working with Imagination",
    description: "These exercises tap into the boundless realm of imagination, using storytelling and visualization as gateways to inner exploration. By engaging with fantasy and narrative, we access deeper layers of consciousness where symbols, archetypes, and personal mythology reside.",
    backgroundColor: "#5a3545",
    backgroundImage: "/arttherapy/fragments/arranged1.png",
    subsections: [
      {
        id: "fairytale",
        title: "Fairy Tale Work",
        description: "Fairy tales carry ancient wisdom wrapped in symbol and metaphor. By illustrating, rewriting, or embodying these timeless stories, we connect with universal themes of transformation and growth.",
        secondaryDescription: "This work allows us to explore our own life narratives through the safe container of story, discovering where we are hero, helper, or in need of rescue.",
        thumbnail: "/arttherapy/fragments/collage1.png",
        images: [],
      },
      {
        id: "guidedimagery",
        title: "Guided Imagery",
        description: "Guided visualization takes us on journeys through inner landscapes. These travels allow us to encounter symbols, guides, and places that hold personal meaning and therapeutic insight.",
        secondaryDescription: "By giving visual form to these inner experiences through art, we bridge the imaginal and material worlds, making the invisible visible and bringing back treasures from the depths.",
        thumbnail: "/arttherapy/fragments/collage1.png",
        images: [],
      },
    ],
  },
];

export default function Page() {
  const [activeOverlay, setActiveOverlay] = useState<{ subsection: Subsection; section: Section; subsectionIndex: number } | null>(null);

  const navigateOverlay = (direction: "prev" | "next") => {
    if (!activeOverlay) return;
    const { section, subsectionIndex } = activeOverlay;
    const newIndex = direction === "prev" ? subsectionIndex - 1 : subsectionIndex + 1;
    if (newIndex >= 0 && newIndex < section.subsections.length) {
      setActiveOverlay({
        subsection: section.subsections[newIndex],
        section,
        subsectionIndex: newIndex,
      });
    }
  };

  return (
    <div className="bg-[#24242e]">
      <Navigation sections={navs} />

      <div className="relative" style={{ clipPath: "inset(0)" }}>
        {/* Fixed background image */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#24242e]" />
          <Image
            src="/arttherapy/fragments/pens.png"
            fill
            alt="Art Therapy"
            className="object-cover opacity-20 scale-150 md:scale-100"
            style={{ objectPosition: "center 70%" }}
          />
        </div>

        {/* First section - Hero */}
        <div className="relative w-screen min-h-screen flex items-end">
          <div className="content-container pb-20 md:pb-32">
            <h1 className="!leading-none">
              <span className="block !text-3xl md:!text-5xl tracking-[0.3em] md:tracking-[0.5em]">
                EXPLORING
              </span>
              <span className="block !text-7xl md:!text-[10rem]">
                ART THERAPY
              </span>
            </h1>
            <p className="text-sm md:text-base mt-4 max-w-2xl">
              In June 2025, my journey led me to begin my Art Therapy Practitioner training at Campus Naturalis in Munich - exploring various realms of art and creativity. Returning to traditional mediums and hands-on processes has created a space for deeper exploration—where imagination meets emotion, and where small creative experiments can grow into meaningful inner work.
            </p>
          </div>
        </div>

        {/* Second section - Art Therapy Exercises */}
        <div className="relative min-h-screen flex items-center">
          <div className="content-container py-32">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-light text-white tracking-wide">
                Art Therapy Exercises
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-4xl">
                Art therapy uses creative expression as a pathway to healing, self-discovery, and emotional well-being. Through various exercises and techniques, we can access parts of ourselves that words alone cannot reach. The medium we choose fundamentally transforms our creative experience—working with clay grounds us in the body, while watercolors invite us to surrender control. Each material carries its own language, its own resistance, its own way of meeting us. I&apos;ve started exploring different exercises myself—you can see some of them below.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="work">
        {sections.map((section) => (
          <div key={section.id} className="relative" style={{ clipPath: "inset(0)" }}>
            {/* Fixed background color per section */}
            {section.backgroundColor && (
              <div
                className="fixed inset-0 -z-10"
                style={{ backgroundColor: section.backgroundColor }}
              />
            )}
            {/* Fixed background image with low opacity */}
            {section.backgroundImage && (
              <div className="fixed inset-0 -z-10">
                <Image
                  src={section.backgroundImage}
                  alt="Background"
                  fill
                  className="object-cover opacity-30 md:opacity-25 scale-100"
                />
              </div>
            )}

            <section id={section.id} className="content-container space-y-12 py-16">
              <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-light text-white tracking-wide">
                  {section.title}
                </h1>
                <p className="text-3xl md:text-4xl font-medium leading-relaxed opacity-90 max-w-4xl">
                  {section.description}
                </p>
              </div>

              {/* Subsection cards - 1 col mobile, 3 cols desktop */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {section.subsections.map((sub, subIdx) => (
                  <button
                    key={sub.id}
                    onClick={() => setActiveOverlay({ subsection: sub, section, subsectionIndex: subIdx })}
                    className="group cursor-pointer flex flex-col"
                  >
                    <div className="relative w-full aspect-[2/1] md:aspect-square overflow-hidden">
                      <Image
                        src={sub.thumbnail}
                        alt={sub.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="bg-black/30 py-2 px-2 flex-1 flex items-center justify-center">
                      <h3 className="text-sm md:text-base font-light text-white text-center tracking-wide">
                        {sub.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        ))}
      </div>

      {/* Overlay modal */}
      {activeOverlay && (
        <div
          className="fixed inset-0 z-50 flex items-start md:items-end justify-center p-4 pt-16 md:p-8"
          style={{ backgroundColor: activeOverlay.section.backgroundColor || "#24242e" }}
          onClick={() => setActiveOverlay(null)}
        >
          <Image
            src={activeOverlay.subsection.thumbnail}
            alt="Background"
            fill
            className="object-cover opacity-30 scale-150 md:scale-100"
          />

          {/* Navigation arrows - bottom on mobile, side on desktop */}
          <div className="fixed bottom-6 left-0 right-0 flex justify-center gap-8 z-20 md:hidden">
            {activeOverlay.subsectionIndex > 0 && (
              <button
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white/70 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateOverlay("prev");
                }}
                aria-label="Previous subsection"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}
            {activeOverlay.subsectionIndex < activeOverlay.section.subsections.length - 1 && (
              <button
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white/70 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateOverlay("next");
                }}
                aria-label="Next subsection"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            )}
          </div>

          {/* Left arrow - desktop only */}
          {activeOverlay.subsectionIndex > 0 && (
            <button
              className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateOverlay("prev");
              }}
              aria-label="Previous subsection"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Right arrow - desktop only */}
          {activeOverlay.subsectionIndex < activeOverlay.section.subsections.length - 1 && (
            <button
              className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateOverlay("next");
              }}
              aria-label="Next subsection"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          <div
            className="relative max-w-4xl w-full max-h-[80vh] overflow-y-auto p-8 pb-24 md:max-h-[85vh] md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl"
              onClick={() => setActiveOverlay(null)}
            >
              ×
            </button>

            <div className="space-y-6">
              <div className="pr-8">
                <p className="text-sm md:text-base font-light text-white/50 tracking-widest uppercase mb-2">
                  {activeOverlay.section.title}
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
                  {activeOverlay.subsection.title}
                </h2>
              </div>

              <p className="text-base md:text-lg leading-relaxed opacity-90">
                {activeOverlay.subsection.description}
              </p>

              {activeOverlay.subsection.secondaryDescription && (
                <p className="text-sm md:text-base leading-relaxed opacity-70">
                  {activeOverlay.subsection.secondaryDescription}
                </p>
              )}

              {activeOverlay.subsection.imageGroups && activeOverlay.subsection.imageGroups.length > 0 ? (
                <div className="space-y-8 pt-4">
                  {activeOverlay.subsection.imageGroups.map((group, groupIdx) => (
                    <div key={groupIdx} className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-light text-white/80 tracking-wide">
                        {group.title}
                      </h3>
                      {group.images.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {group.images.map((img: string, idx: number) => (
                            <div key={idx} className="relative aspect-[3/4]">
                              <Image
                                src={img}
                                alt={`${group.title} ${idx + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm opacity-50 italic">Images coming soon</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : activeOverlay.subsection.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                  {activeOverlay.subsection.images.map((img: string, idx: number) => (
                    <div key={idx} className="relative aspect-[3/4]">
                      <Image
                        src={img}
                        alt={`${activeOverlay.subsection.title} ${idx + 1}`}
                        fill
                        className={`object-cover ${img.includes("imprint2") ? "rotate-180 object-bottom" : ""}`}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
