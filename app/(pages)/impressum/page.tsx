import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Vioseum",
  description: "Legal information and contact details",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen px-6 py-24 md:px-16 lg:px-32 max-w-3xl mx-auto">
      <h1 className="text-white text-5xl font-bold mb-10">Impressum</h1>

      <h2 className="text-white text-3xl font-semibold mt-8 mb-4">Information according to § 5 TMG</h2>
      <p className="text-white/80 text-lg leading-relaxed">
        [Your Name]<br />
        [Your Street and Number]<br />
        [Your Postal Code and City]<br />
        [Your Country]
      </p>

      <h2 className="text-white text-3xl font-semibold mt-10 mb-4">Contact</h2>
      <p className="text-white/80 text-lg leading-relaxed">
        <strong className="text-white">Email:</strong> your.email@example.com<br />
        <strong className="text-white">Phone:</strong> +49 (0) 123 456789
      </p>

      <h2 className="text-white text-3xl font-semibold mt-10 mb-4">Responsible for content</h2>
      <p className="text-white/80 text-lg leading-relaxed">
        [Your Name]<br />
        [Your Address]
      </p>

      <h2 className="text-white text-3xl font-semibold mt-10 mb-4">Disclaimer</h2>

      <h3 className="text-white text-2xl font-semibold mt-6 mb-3">Liability for Content</h3>
      <p className="text-white/80 text-lg leading-relaxed">
        The contents of our pages were created with the greatest care. However, we cannot guarantee
        the accuracy, completeness, and timeliness of the content.
      </p>

      <h3 className="text-white text-2xl font-semibold mt-6 mb-3">Liability for Links</h3>
      <p className="text-white/80 text-lg leading-relaxed">
        Our offer contains links to external websites of third parties, on whose contents we have no
        influence. Therefore, we cannot assume any liability for these external contents.
      </p>

      <h3 className="text-white text-2xl font-semibold mt-6 mb-3">Copyright</h3>
      <p className="text-white/80 text-lg leading-relaxed">
        The content and works on these pages created by the site operators are subject to German
        copyright law. Duplication, processing, distribution, and any kind of exploitation outside
        the limits of copyright require the written consent of the respective author or creator.
      </p>
    </div>
  );
}
