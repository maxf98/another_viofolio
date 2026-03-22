"use client";

import CTAButton from "@/app/components/CTAButton";
import InteractionHint from "@/app/components/InteractionHint";

/* ─── small helpers ──────────────────────────────────────────── */

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="border border-white/10 p-6 md:p-8 space-y-6">
    <h2 className="text-[length:var(--text-label)] font-semibold uppercase tracking-[var(--tracking-wide)] text-[var(--color-label)]">
      {title}
    </h2>
    {children}
  </section>
);

const Swatch = ({ label, cssVar, style }: { label: string; cssVar: string; style: React.CSSProperties }) => (
  <div className="flex flex-col gap-2">
    <div className="h-14 w-full rounded border border-white/10" style={style} />
    <p className="text-[length:var(--text-body-sm)] font-medium text-[var(--color-text)]">{label}</p>
    <code className="text-[length:var(--text-indicator)] text-[var(--color-label)]">{cssVar}</code>
  </div>
);

const TokenRow = ({ name, value }: { name: string; value: string }) => (
  <div className="flex flex-col gap-0.5">
    <code className="text-[length:var(--text-indicator)] text-[var(--color-label)]">{name}</code>
    <span className="text-[length:var(--text-body-sm)] text-[var(--color-text)]">{value}</span>
  </div>
);

/* ─── page ───────────────────────────────────────────────────── */

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen px-4 pt-24 pb-16 md:px-8 lg:px-16" style={{ backgroundColor: "var(--color-page-bg)" }}>
      <div className="mx-auto max-w-4xl space-y-3">

        {/* Header */}
        <div className="mb-10">
          <h1
            className="font-bold uppercase"
            style={{ fontSize: "var(--text-display)", lineHeight: "var(--leading-heading)", color: "var(--color-text)" }}
          >
            Design System
          </h1>
          <p style={{ fontSize: "var(--text-body-lg)", color: "var(--color-text-secondary)", marginTop: "0.75rem" }}>
            Live token reference — edit <code className="text-[var(--color-label)] text-sm">globals.css</code> and everything updates here.
          </p>
        </div>

        {/* ── COLOURS ── */}
        <Section title="Colours — Text Roles">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <Swatch label="Text" cssVar="--color-text" style={{ backgroundColor: "#ededed" }} />
            <Swatch label="Text Secondary" cssVar="--color-text-secondary" style={{ backgroundColor: "rgba(255,255,255,0.8)" }} />
            <Swatch label="Text Muted" cssVar="--color-text-muted" style={{ backgroundColor: "rgba(255,255,255,0.65)" }} />
            <Swatch label="Text Hint" cssVar="--color-text-hint" style={{ backgroundColor: "rgba(255,255,255,0.6)" }} />
            <Swatch label="Label" cssVar="--color-label" style={{ backgroundColor: "rgba(255,255,255,0.5)" }} />
          </div>
        </Section>

        <Section title="Colours — Palette">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <Swatch label="Page Background" cssVar="--color-page-bg" style={{ backgroundColor: "#1c1b1b", border: "1px solid rgba(255,255,255,0.15)" }} />
            <Swatch label="Surface" cssVar="--color-surface" style={{ backgroundColor: "#393535" }} />
            <Swatch label="Accent Warm" cssVar="--color-accent-warm" style={{ backgroundColor: "rgba(255,138,92,0.4)" }} />
            <Swatch label="Accent Cool" cssVar="--color-accent-cool" style={{ backgroundColor: "rgba(124,207,255,0.25)" }} />
            <Swatch label="Dark Overlay" cssVar="--color-dark-overlay" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
            <Swatch label="Button" cssVar="--button-color" style={{ backgroundColor: "#b89fd4" }} />
          </div>
        </Section>

        {/* ── TYPOGRAPHY ── */}
        <Section title="Typography — Type Scale">
          <div className="space-y-4">
            {[
              { label: "Display", cssVar: "--text-display", style: { fontSize: "var(--text-display)", fontWeight: "var(--weight-bold)", lineHeight: "var(--leading-heading)" }, sample: "Display" },
              { label: "Heading LG", cssVar: "--text-heading-lg", style: { fontSize: "var(--text-heading-lg)", fontWeight: "var(--weight-heading)", lineHeight: "var(--leading-heading)" }, sample: "Heading Large" },
              { label: "Heading", cssVar: "--text-heading", style: { fontSize: "var(--text-heading)", fontWeight: "var(--weight-heading)", lineHeight: "var(--leading-heading)" }, sample: "Heading" },
              { label: "Heading SM", cssVar: "--text-heading-sm", style: { fontSize: "var(--text-heading-sm)", fontWeight: "var(--weight-heading)", lineHeight: "var(--leading-heading)" }, sample: "Heading Small" },
              { label: "Body LG", cssVar: "--text-body-lg", style: { fontSize: "var(--text-body-lg)", fontWeight: "var(--weight-body)", lineHeight: "var(--leading-body)" }, sample: "Body large — lead paragraphs" },
              { label: "Body", cssVar: "--text-body", style: { fontSize: "var(--text-body)", fontWeight: "var(--weight-body)", lineHeight: "var(--leading-body)" }, sample: "Body — default text" },
              { label: "Body SM", cssVar: "--text-body-sm", style: { fontSize: "var(--text-body-sm)", fontWeight: "var(--weight-body)", lineHeight: "var(--leading-body)" }, sample: "Body small — captions" },
              { label: "Label", cssVar: "--text-label", style: { fontSize: "var(--text-label)", fontWeight: "var(--weight-heading)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase" as const, lineHeight: "var(--leading-body)" }, sample: "LABEL — nav headers, card categories" },
              { label: "Indicator", cssVar: "--text-indicator", style: { fontSize: "var(--text-indicator)", fontWeight: "var(--weight-heading)", letterSpacing: "var(--tracking-indicator)", textTransform: "uppercase" as const, lineHeight: "var(--leading-body)" }, sample: "INDICATOR — card badges, hints" },
            ].map(({ label, cssVar, style, sample }) => (
              <div key={cssVar} className="flex flex-col gap-0.5 border-b border-white/8 pb-4 last:border-0 last:pb-0">
                <p style={{ ...style, color: "var(--color-text)" }}>{sample}</p>
                <div className="flex gap-4 mt-0.5">
                  <code className="text-[10px] text-[var(--color-label)]">{cssVar}</code>
                  <span className="text-[10px] text-[var(--color-label)]">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── INDICATORS (unified) ── */}
        <Section title="Indicators — Unified Style">
          <p className="text-[length:var(--text-body-sm)] text-[var(--color-text-secondary)]">
            Card badges, InteractionHint text+arrow, and navigation hints all share{" "}
            <code className="text-[var(--color-label)]">--color-text-hint</code>,{" "}
            <code className="text-[var(--color-label)]">--text-indicator</code>, and{" "}
            <code className="text-[var(--color-label)]">--tracking-indicator</code>.
          </p>

          <div className="flex flex-wrap items-start gap-8 pt-2">
            {/* Card badge */}
            <div className="space-y-2">
              <p className="text-[length:var(--text-indicator)] text-[var(--color-label)] uppercase tracking-[var(--tracking-indicator)]">Card badge</p>
              <div className="inline-flex rounded-full border border-[var(--color-text-hint)]/30 bg-black/45 px-3 py-1 text-[length:var(--text-indicator)] font-semibold uppercase tracking-[var(--tracking-indicator)] text-[var(--color-text-hint)]">
                View Project
              </div>
            </div>

            {/* InteractionHint */}
            <div className="space-y-2">
              <p className="text-[length:var(--text-indicator)] text-[var(--color-label)] uppercase tracking-[var(--tracking-indicator)]">InteractionHint</p>
              <InteractionHint text="tap to explore" size="small" delay={0} />
            </div>

            {/* Go To label */}
            <div className="space-y-2">
              <p className="text-[length:var(--text-indicator)] text-[var(--color-label)] uppercase tracking-[var(--tracking-indicator)]">"Go To" header</p>
              <div className="text-[var(--color-label)] text-[length:var(--text-body)] uppercase tracking-[var(--tracking-wide)] font-[var(--weight-heading)]">
                Go To
              </div>
            </div>
          </div>
        </Section>

        {/* ── GLOBAL NAV ── */}
        <Section title="Global Nav Tokens">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <TokenRow name="--nav-link-size" value="1.125rem" />
            <TokenRow name="--nav-link-weight" value="500" />
            <TokenRow name="--nav-link-color" value="rgba(255,255,255,0.9)" />
            <TokenRow name="--nav-label-size" value="var(--text-label) → 0.75rem" />
            <TokenRow name="--nav-label-color" value="var(--color-label)" />
          </div>
          <div className="mt-4 space-y-1 border border-white/10 p-4">
            <p className="text-[length:var(--nav-label-size)] text-[var(--nav-label-color)] uppercase tracking-[var(--tracking-wide)] font-semibold mb-2">Section Header</p>
            {["Home", "About Me", "Design System"].map((link) => (
              <div key={link} className="block w-full rounded-sm px-2 py-1.5 text-[length:var(--nav-link-size)] font-[var(--nav-link-weight)] text-[var(--nav-link-color)]">
                {link}
              </div>
            ))}
          </div>
        </Section>

        {/* ── CTA BUTTON ── */}
        <Section title="CTA Button">
          <div className="flex flex-wrap gap-4 items-end">
            {(["sm", "md", "lg"] as const).map((s) => (
              <div key={s} className="space-y-1">
                <p className="text-[length:var(--text-indicator)] text-[var(--color-label)] uppercase tracking-[var(--tracking-indicator)]">size={s}</p>
                <CTAButton size={s}>Button</CTAButton>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 items-end pt-2">
            {(["low", "medium", "high"] as const).map((b) => (
              <div key={b} className="space-y-1">
                <p className="text-[length:var(--text-indicator)] text-[var(--color-label)] uppercase tracking-[var(--tracking-indicator)]">blob={b}</p>
                <CTAButton size="sm" blobIntensity={b}>{b}</CTAButton>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 pt-2">
            <TokenRow name="--button-color" value="#b89fd4" />
            <TokenRow name="--button-opacity" value="0.35" />
            <TokenRow name="--button-blobbiness" value="medium" />
          </div>
        </Section>

        {/* ── LABEL / SECONDARY TITLE ── */}
        <Section title="Label / Secondary Title Role">
          <p className="text-[length:var(--text-body-sm)] text-[var(--color-text-secondary)]">
            <code className="text-[var(--color-label)]">--color-label</code> + <code className="text-[var(--color-label)]">--text-label</code> + <code className="text-[var(--color-label)]">--tracking-label</code> are used for nav section headers, about card category labels, and the "Working With" project subtitle.
          </p>
          <div className="space-y-3 pt-1">
            <div className="text-[length:var(--text-label)] uppercase tracking-[var(--tracking-label)] text-[var(--color-label)] font-semibold">Nav Section Header</div>
            <div className="text-[length:var(--text-label)] uppercase tracking-[var(--tracking-label)] text-[var(--color-label)] font-semibold">Work</div>
            <div className="text-[length:var(--text-label)] uppercase tracking-[var(--tracking-label)] text-[var(--color-label)] font-semibold">Education & Studies</div>
          </div>
        </Section>

        {/* ── BLUR ── */}
        <Section title="Blur & Glass">
          <div className="flex items-center gap-4">
            <div
              className="h-20 w-48 border border-white/20 flex items-center justify-center text-[length:var(--text-body-sm)] text-[var(--color-text-hint)]"
              style={{ backdropFilter: "blur(var(--overlay-blur))", backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              --overlay-blur: 12px
            </div>
          </div>
        </Section>

        {/* ── SPACING ── */}
        <Section title="Spacing Tokens">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { name: "--section-padding-y", value: "4rem", desc: "Vertical padding between sections" },
              { name: "--section-padding-top", value: "6rem", desc: "Top padding — fixed nav offset" },
              { name: "--content-padding-x", value: "1.5rem", desc: "Horizontal padding (mobile)" },
              { name: "--content-padding-x-md", value: "2rem", desc: "Horizontal padding (desktop)" },
            ].map(({ name, value, desc }) => (
              <div key={name} className="flex items-start gap-3 border border-white/8 p-4">
                <div className="mt-1 shrink-0 rounded bg-white/10" style={{ width: value, height: "0.75rem", maxWidth: "5rem" }} />
                <div>
                  <code className="text-[length:var(--text-indicator)] text-[var(--color-label)]">{name}</code>
                  <p className="text-[length:var(--text-body-sm)] font-semibold text-[var(--color-text)]">{value}</p>
                  <p className="text-[length:var(--text-indicator)] text-[var(--color-label)]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── ANIMATIONS ── */}
        <Section title="Utility Animations">
          <div className="flex flex-wrap gap-8">
            <div className="space-y-2">
              <div className="animate-tap-hint inline-block border border-white/20 px-4 py-2 text-[length:var(--text-body-sm)] text-[var(--color-text-hint)]">
                .animate-tap-hint
              </div>
              <p className="text-[length:var(--text-indicator)] text-[var(--color-label)]">pulse scale 1 → 1.05</p>
            </div>
            <div className="space-y-2">
              <div className="inline-block border border-white/20 px-4 py-2 text-[length:var(--text-body-sm)] text-[var(--color-text-hint)]">
                → <span className="animate-arrow-bounce inline-block">.animate-arrow-bounce</span>
              </div>
              <p className="text-[length:var(--text-indicator)] text-[var(--color-label)]">translateX 0 → 8px</p>
            </div>
          </div>
        </Section>

      </div>
    </div>
  );
}
