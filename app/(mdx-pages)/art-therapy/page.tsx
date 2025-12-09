"use client";

import { useState } from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import Navigation, { NavSection } from "@/app/components/navigation/Navigation";
import ProjectHeroSection from "@/app/components/ProjectHeroSection";

const navs: NavSection[] = [
  {
    id: "work",
    label: "work",
  },
];

interface Exploration {
  title: string;
  image: string;
  borderColor: string;
  description: string;
  contentImages: string[];
}

const explorations: Exploration[] = [
  {
    title: "Dipping Plants",
    image: "/covers/arttherapy.png",
    borderColor: "#d97706",
    description:
      "Working with natural materials like leaves, flowers, and branches offers a grounding, sensory experience that connects us to the earth. Dipping plants in paint and pressing them onto paper invites a slower, more intuitive creative process—one where imperfection becomes beauty and nature guides the outcome.",
    contentImages: ["/covers/arttherapy.png"],
  },
  {
    title: "Felt Exploration",
    image: "/arttherapy/felt /felt2.png",
    borderColor: "#65a30d",
    description:
      "Needle felting offers a meditative, tactile experience that grounds us in the present moment. The repetitive motion of the needle puncturing wool creates a calming rhythm, while the transformation of loose fibers into solid form mirrors our own capacity for inner change. This slow, deliberate craft invites patience and presence—qualities that support emotional regulation and mindful awareness in therapeutic settings.",
    contentImages: [
      "/arttherapy/felt /felt1.png",
      "/arttherapy/felt /felt2.png",
    ],
  },
  {
    title: "Stone Dipping",
    image: "/arttherapy/stone/stone2.png",
    borderColor: "#b45309",
    description:
      "Using stones as drawing tools connects us to ancient mark-making traditions while engaging our senses in unexpected ways. Dipping stones in paint and pressing or dragging them across paper creates organic textures and forms that feel both primal and spontaneous. This practice encourages letting go of precision—embracing the unpredictable shapes that emerge when nature guides our hand.",
    contentImages: [
      "/arttherapy/stone/stone3.png",
      "/arttherapy/stone/stone1.png",
      "/arttherapy/stone/stone2.png",
    ],
  },
  {
    title: "Painting with the Rain",
    image: "/arttherapy/rain/rain5.png",
    borderColor: "#ca8a04",
    description:
      "Painting with rain invites us to collaborate with nature in a deeply symbolic way. By placing pigment on paper and allowing raindrops to do the work, we release control and embrace the unpredictable beauty of natural elements. This practice mirrors the therapeutic journey itself—learning to let go, trusting the process, and finding meaning in what emerges without force. The rain becomes both artist and healer, washing away rigidity while creating something uniquely alive.",
    contentImages: [
      "/arttherapy/rain/rain1.png",
      "/arttherapy/rain/rain2.png",
      "/arttherapy/rain/rain3.png",
      "/arttherapy/rain/rain4.png",
      "/arttherapy/rain/rain5.png",
    ],
  },
  {
    title: "Handpainting",
    image: "/arttherapy/handpainting/hand2.png",
    borderColor: "#7c3aed",
    description:
      "Handpainting bypasses the distance created by brushes and tools, bringing us into direct, intimate contact with color and texture. Using our hands to spread, smear, and shape paint reconnects us with the primal joy of childhood mark-making while awakening sensory awareness. In art therapy, this tactile engagement can unlock emotional expression that feels blocked when using more controlled methods—allowing feelings to flow through fingertips onto paper in a raw, unfiltered way.",
    contentImages: [
      "/arttherapy/handpainting/hand1.png",
      "/arttherapy/handpainting/hand2.png",
    ],
  },
  {
    title: "Face Trace",
    image: "/arttherapy/face trace/face1.png",
    borderColor: "#0891b2",
    description:
      "Tracing the contours of your own face creates a profound moment of self-encounter. By slowly following the curves, angles, and textures of your features with a pen or finger, you cultivate a gentle, non-judgmental awareness of yourself. In art therapy, this practice can help rebuild a positive relationship with one's body and appearance—transforming self-perception from criticism to curiosity, and from avoidance to acceptance.",
    contentImages: [
      "/arttherapy/face trace/face1.png",
      "/arttherapy/face trace/face2.png",
      "/arttherapy/face trace/face3.png",
      "/arttherapy/face trace/face4.png",
    ],
  },
  {
    title: "Sponge Textures",
    image: "/arttherapy/sponge/sponge1.png",
    borderColor: "#dc2626",
    description:
      "Sponge painting introduces an element of playful unpredictability to the creative process. The porous texture of sponges creates unique patterns impossible to replicate with brushes, inviting experimentation and releasing perfectionism. In art therapy, this technique helps clients embrace spontaneity and find beauty in uncontrolled outcomes—a metaphor for accepting life's uncertainties.",
    contentImages: [
      "/arttherapy/sponge/sponge1.png",
      "/arttherapy/sponge/sponge2.png",
      "/arttherapy/sponge/sponge3.png",
    ],
  },
  {
    title: "Coming Soon",
    image: "/gallery/field.png",
    borderColor: "#6b7280",
    description:
      "More creative explorations are being documented and will be added here soon.",
    contentImages: ["/gallery/field.png"],
  },
  {
    title: "Coming Soon",
    image: "/gallery/beach.png",
    borderColor: "#6b7280",
    description:
      "More creative explorations are being documented and will be added here soon.",
    contentImages: ["/gallery/beach.png"],
  },
];

export default function Page() {
  const [selectedExploration, setSelectedExploration] =
    useState<Exploration | null>(null);

  return (
    <div>
      <Navigation sections={[]} />

      <ProjectHeroSection
        src="/covers/arttherapy.png"
        alt="Art Therapy"
        title="Analogue Experimentations"
        description="In June 2025, my journey led me to begin my Art Therapy Practitioner training at Campus Naturalis in Munich - exploring various realms of art and creativity. Returning to traditional mediums and hands-on processes has created a space for deeper exploration—where imagination meets emotion, and where small creative experiments can grow into meaningful inner work."
      />

      <div id="work" className="mt-24">
        <div className="flex flex-col justify-center items-center gap-8">
          <h2 className="text-3xl font-bold">Creative Explorations</h2>
          <p className="max-w-2xl text-center">
            Art therapy uses creative expression as a pathway to self-discovery
            and emotional healing. These explorations with different
            mediums—from natural materials to tactile crafts—demonstrate how
            working with our hands can quiet the mind, unlock feelings, and
            reveal insights that words alone cannot reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-8 md:px-16 lg:px-24">
          {explorations.map((exploration, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedExploration(exploration)}
            >
              <h3 className="text-xl font-semibold text-white">
                {exploration.title}
              </h3>
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src={exploration.image}
                  alt={exploration.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Modal */}
      {selectedExploration && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedExploration(null)}
        >
          <div
            className="bg-base-100 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 bg-base-200 hover:bg-base-300 rounded-full p-2 transition-colors"
              onClick={() => setSelectedExploration(null)}
            >
              <MdClose size={24} />
            </button>

            <div className="p-8">
              {/* Title */}
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: selectedExploration.borderColor }}
              >
                {selectedExploration.title}
              </h2>

              {/* Content area */}
              <div className="flex flex-col gap-8">
                {/* Text */}
                <p className="text-base-content/70">
                  {selectedExploration.description}
                </p>

                {/* Images - original aspect ratio, all side by side */}
                <div className="flex flex-wrap gap-4">
                  {selectedExploration.contentImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl overflow-hidden flex-1 min-w-[200px]"
                    >
                      <Image
                        src={img}
                        alt={`${selectedExploration.title} ${idx + 1}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
