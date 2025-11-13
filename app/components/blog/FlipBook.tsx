"use client";

import Image from "next/image";

type FlipBookPage = {
  src: string;
  alt?: string;
};

interface FlipBookProps {
  pages: FlipBookPage[];
  className?: string;
}

type Spread =
  | { type: "single"; page: FlipBookPage; position: "cover" | "back" }
  | { type: "double"; pages: [FlipBookPage, FlipBookPage | null] };

const buildSpreads = (pages: FlipBookPage[]): Spread[] => {
  if (!pages.length) return [];
  if (pages.length === 1) {
    return [{ type: "single", page: pages[0], position: "cover" }];
  }

  const spreads: Spread[] = [];
  spreads.push({ type: "single", page: pages[0], position: "cover" });

  const middle = pages.slice(1, -1);
  for (let i = 0; i < middle.length; i += 2) {
    spreads.push({
      type: "double",
      pages: [middle[i], middle[i + 1] ?? null],
    });
  }

  spreads.push({
    type: "single",
    page: pages[pages.length - 1],
    position: "back",
  });

  return spreads;
};

export default function FlipBook({ pages, className = "" }: FlipBookProps) {
  const spreads = buildSpreads(pages ?? []);

  if (!spreads.length) return null;

  return (
    <section
      className={`mx-auto flex w-full max-w-5xl flex-col gap-10 ${className}`}
    >
      {spreads.map((spread, idx) => {
        if (spread.type === "single") {
          return (
            <SinglePage
              key={`${spread.position}-${idx}`}
              page={spread.page}
              position={spread.position}
            />
          );
        }
        return (
          <DoubleSpread
            key={`spread-${idx}`}
            left={spread.pages[0]}
            right={spread.pages[1]}
          />
        );
      })}
    </section>
  );
}

function SinglePage({
  page,
  position,
}: {
  page: FlipBookPage;
  position: "cover" | "back";
}) {
  return (
    <div className="relative flex min-h-[420px] items-center justify-center rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/50 via-slate-800/60 to-black/70 p-6 shadow-[0_40px_90px_-45px_rgba(15,23,42,0.9)]">
      <div className="relative aspect-[3/4] w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-black/40">
        <Image
          src={page.src}
          alt={page.alt ?? `${position} page`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 40vw"
          priority={position === "cover"}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40" />
      </div>
    </div>
  );
}

function DoubleSpread({
  left,
  right,
}: {
  left: FlipBookPage;
  right: FlipBookPage | null;
}) {
  return (
    <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/40 via-slate-800/50 to-black/65 p-4 shadow-[0_40px_90px_-45px_rgba(15,23,42,0.9)]">
      <div className="flex h-full min-h-[360px] gap-4">
        <PagePanel page={left} />
        <PagePanel page={right} />
      </div>
    </div>
  );
}

function PagePanel({ page }: { page: FlipBookPage | null }) {
  if (!page) {
    return (
      <div className="flex-1 rounded-3xl border border-dashed border-white/15 bg-white/5 aspect-[3/4]" />
    );
  }

  return (
    <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-black/40 aspect-[3/4]">
      <Image
        src={page.src}
        alt={page.alt ?? "Magazine spread"}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/35" />
    </div>
  );
}
