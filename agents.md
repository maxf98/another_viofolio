# Vioseum Website - Agent Guide

## Overview

This repo is Violetta Prandetskaya's portfolio site. It is a content-heavy, image-led Next.js app with a strong emphasis on:

- fixed and semi-fixed background imagery
- animated overlays and transitions
- mobile-specific layout variants, especially portrait vs landscape
- translated UI copy across English, German, and Russian

The visual language is intentionally editorial and atmospheric. Most pages are not generic app screens; they are custom compositions built from reusable primitives.

## Repo Reality

Much of this website was built through iterative trial-and-error collaboration with a non-technical stakeholder using coding models. That process produced a lot of working UI, but it also produced code that often prioritizes:

- preserving the exact current behavior
- accommodating fast-changing visual wishes
- patching edge cases locally instead of redesigning the underlying abstraction

As a result, some complexity in this repo is essential, but a meaningful amount is accidental.

Important context for future agents:

- there are effectively two collaborators behind the site
- one is a non-expert user who judges changes by visual and interaction outcomes, not code quality
- the other is a developer who can work in the codebase, but generally wants to avoid spending time untangling avoidable mess

Practical implication:

- when editing a file, do not assume the existing structure is the best structure
- many files can likely be simplified, split, or de-duplicated without changing behavior
- if a component feels overly specific, state-heavy, or branch-heavy, that suspicion is often valid
- still preserve visible behavior unless the task explicitly asks for a redesign

Agents should treat "works but looks overbuilt" as a normal condition in this repo, not as a sign that previous contributors were irrational. The code reflects iterative accretion under changing requirements.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Next `Image`
- Embla Carousel for lightboxes
- `react-pageflip` for the Monkeybrain magazine
- MDX only for a few content pages such as `about` and `impressum`

## App Shell

The root shell is in [app/layout.tsx](/Users/maxfest/vscode/another_viofolio/app/layout.tsx).

It provides:

- `LanguageProvider`
- `LoadProvider`
- `GlobalNavProvider`
- a fixed top header row containing `Logo` and `HamburgerButton`
- `GlobalNav`
- `AboutMeOverlay`
- page content
- `Footer`

Important detail:

- the top header row is `pointer-events-none` and its children opt back into interaction with `pointer-events-auto`
- this is intentional and should not be "cleaned up" casually

## Main Route Groups

### Home

- [app/page.tsx](/Users/maxfest/vscode/another_viofolio/app/page.tsx)
- wrapped with `HomeTextProvider`
- built from:
  - `Hero`
  - `LocalNav`
  - `AboutMeSection`
  - `PreviewCardsGrid` from `PreviewCard.tsx`
  - `FixedBackgroundImage`
  - `CTAButton`

The home page is a sequence of full-screen or near-full-screen sections with fixed background layers clipped to section bounds.

### Archive / Gallery

- [app/gallery/page.tsx](/Users/maxfest/vscode/another_viofolio/app/gallery/page.tsx)
- section pages:
  - [app/gallery/illustrated-photography/page.tsx](/Users/maxfest/vscode/another_viofolio/app/gallery/illustrated-photography/page.tsx)
  - [app/gallery/art-therapy/page.tsx](/Users/maxfest/vscode/another_viofolio/app/gallery/art-therapy/page.tsx)
  - [app/gallery/monkeybrain/page.tsx](/Users/maxfest/vscode/another_viofolio/app/gallery/monkeybrain/page.tsx)
- shared section page:
  - [app/gallery/components/ArchiveSectionPage.tsx](/Users/maxfest/vscode/another_viofolio/app/gallery/components/ArchiveSectionPage.tsx)

The archive area uses `GalleryTextProvider` and a shared translation/data model from [app/translations/gallery.tsx](/Users/maxfest/vscode/another_viofolio/app/translations/gallery.tsx).

### Project Pages

Project pages live under [app/(mdx-pages)](/Users/maxfest/vscode/another_viofolio/app/(mdx-pages)).

Current important ones:

- [app/(mdx-pages)/elgato/page.tsx](/Users/maxfest/vscode/another_viofolio/app/(mdx-pages)/elgato/page.tsx)
- [app/(mdx-pages)/quards/page.tsx](/Users/maxfest/vscode/another_viofolio/app/(mdx-pages)/quards/page.tsx)
- [app/(mdx-pages)/mascha/page.tsx](/Users/maxfest/vscode/another_viofolio/app/(mdx-pages)/mascha/page.tsx)
- [app/(mdx-pages)/monkeybrain/page.tsx](/Users/maxfest/vscode/another_viofolio/app/(mdx-pages)/monkeybrain/page.tsx)

These are mostly TSX pages, not pure MDX.

## Shared Systems

### Navigation

There are two navigation systems:

- `GlobalNav` for the drawer menu
- `LocalNav` for page-internal section jumps

Relevant files:

- [app/components/navigation/GlobalNav.tsx](/Users/maxfest/vscode/another_viofolio/app/components/navigation/GlobalNav.tsx)
- [app/components/navigation/GlobalNavContext.tsx](/Users/maxfest/vscode/another_viofolio/app/components/navigation/GlobalNavContext.tsx)
- [app/components/navigation/LocalNav.tsx](/Users/maxfest/vscode/another_viofolio/app/components/navigation/LocalNav.tsx)

The About Me overlay is also controlled from `GlobalNavContext`.

### Translations

Translations are split by domain, not by single global file:

- [app/translations/home.tsx](/Users/maxfest/vscode/another_viofolio/app/translations/home.tsx)
- [app/translations/gallery.tsx](/Users/maxfest/vscode/another_viofolio/app/translations/gallery.tsx)
- [app/translations/elgato.tsx](/Users/maxfest/vscode/another_viofolio/app/translations/elgato.tsx)
- [app/translations/mascha.tsx](/Users/maxfest/vscode/another_viofolio/app/translations/mascha.tsx)
- [app/translations/quards.tsx](/Users/maxfest/vscode/another_viofolio/app/translations/quards.tsx)
- [app/translations/globalNav.tsx](/Users/maxfest/vscode/another_viofolio/app/translations/globalNav.tsx)

Pattern:

- pages wrap themselves in the correct provider
- components inside those pages should prefer translated props or the matching hook
- do not add new hardcoded UI strings if a page-specific translation source already exists

### Background Images

Fixed background images are a core part of the site.

Primary component:

- [app/components/FixedBackgroundImage.tsx](/Users/maxfest/vscode/another_viofolio/app/components/FixedBackgroundImage.tsx)

Common pattern:

- section wrapper with `style={{ clipPath: "inset(0)" }}`
- local content layered above a fixed background image

This pattern prevents a fixed background from bleeding into the entire page. Do not remove the `clipPath` wrappers unless you intentionally want background bleed.

### Overlays

Shared overlay shell:

- [app/components/OverlayShell.tsx](/Users/maxfest/vscode/another_viofolio/app/components/OverlayShell.tsx)

Common overlay consumers:

- [app/components/Lightbox.tsx](/Users/maxfest/vscode/another_viofolio/app/components/Lightbox.tsx)
- [app/components/AboutMeOverlay.tsx](/Users/maxfest/vscode/another_viofolio/app/components/AboutMeOverlay.tsx)
- [app/components/monkeybrain/FlipBook.tsx](/Users/maxfest/vscode/another_viofolio/app/components/monkeybrain/FlipBook.tsx)

There is also a shared overlay z-index constant:

- [app/components/overlayZ.ts](/Users/maxfest/vscode/another_viofolio/app/components/overlayZ.ts)

### Shared Card System

The preview cards on the home page and the "go-to" cards at the bottom of content pages now use the same shared implementation:

- [app/components/PreviewCard.tsx](/Users/maxfest/vscode/another_viofolio/app/components/PreviewCard.tsx)
- [app/components/SectionHintsGrid.tsx](/Users/maxfest/vscode/another_viofolio/app/components/SectionHintsGrid.tsx)

If a page needs another project-preview style card, extend this shared system rather than creating a one-off card.

## Important Components

### `Hero`

- [app/components/Hero.tsx](/Users/maxfest/vscode/another_viofolio/app/components/Hero.tsx)

The hero is part of the home page identity and is tied to loading state from `LoadContext`.

### `LetterSwitcher`

- [app/components/LetterSwitcher.tsx](/Users/maxfest/vscode/another_viofolio/app/components/LetterSwitcher.tsx)

Used for the animated branding language on the home page.

### `GalleryGrid`

- [app/components/GalleryGrid.tsx](/Users/maxfest/vscode/another_viofolio/app/components/GalleryGrid.tsx)

Shared archive grid with orientation-aware mobile layout:

- mobile portrait uses 2 columns
- mobile landscape uses 3 columns

### `Lightbox`

- [app/components/Lightbox.tsx](/Users/maxfest/vscode/another_viofolio/app/components/Lightbox.tsx)

Uses Embla and has separate interaction patterns for:

- desktop
- mobile portrait
- mobile landscape

Mobile landscape is intentionally different from mobile portrait. Test both when changing it.

### `InteractionHint`

- [app/components/InteractionHint.tsx](/Users/maxfest/vscode/another_viofolio/app/components/InteractionHint.tsx)

Supports:

- `size`: currently `small` and `large`
- `direction`: `top`, `right`, `bottom`, `left`

Used across Quards and Monkeybrain. Prefer this over ad hoc hint markup.

### `ProjectHeroSection`

- [app/components/ProjectHeroSection.tsx](/Users/maxfest/vscode/another_viofolio/app/components/ProjectHeroSection.tsx)

Shared hero structure for content pages. It can either own its background or be placed inside a wrapper that owns a fixed background. Be careful with `noBackground`; it means the hero should not render its own background layer.

### `FlipBook` (Monkeybrain)

- [app/components/monkeybrain/FlipBook.tsx](/Users/maxfest/vscode/another_viofolio/app/components/monkeybrain/FlipBook.tsx)
- page image list:
  - [app/components/monkeybrain/images.ts](/Users/maxfest/vscode/another_viofolio/app/components/monkeybrain/images.ts)

This is the most interaction-heavy component in the repo.

It includes:

- a closed preview state
- an overlay mode
- `react-pageflip`
- orientation-specific hint placement
- restricted image preloading to avoid mobile crashes
- special handling for portrait mobile vs landscape mobile

If you touch this file, test:

- mobile portrait
- mobile landscape
- opening directly in landscape
- opening in portrait and rotating

The source images are large, so changes to eager loading, `priority`, `sizes`, or rendered page count can easily reintroduce memory problems on mobile.

## Data and Assets

Core data files:

- [app/data/graph.ts](/Users/maxfest/vscode/another_viofolio/app/data/graph.ts)
- [app/data/model.tsx](/Users/maxfest/vscode/another_viofolio/app/data/model.tsx)
- [app/data/elgato.ts](/Users/maxfest/vscode/another_viofolio/app/data/elgato.ts)

Asset organization is mostly:

- `public/gallery/*` for archive imagery
- `public/projects/*` for project-specific assets
- `public/covers/*` for page cover artwork
- `public/letters/*` for branding letter assets
- `public/icons/*` for nav and UI icons

## Diagnostic Snapshot

This section is a rolling high-level diagnostic note for downstream agents. It is intentionally candid.

### Snapshot Date

- 2026-03-16

### Broad Diagnosis

- The repo is functional, but not structurally clean.
- A number of larger files mix layout, animation, content, and responsive edge-case handling in one place.
- Several surfaces have special-case mobile landscape logic layered on top of earlier portrait or desktop logic.
- Some data and copy still live directly inside component files rather than being cleanly separated.
- There are visible signs of incremental patching rather than systematic refactoring.

### Biggest Complexity Hotspots

- `app/components/monkeybrain/FlipBook.tsx`
- `app/components/Hero.tsx`
- `app/components/AboutMeOverlay.tsx`
- `app/components/Lightbox.tsx`
- `app/components/navigation/GlobalNav.tsx`
- `app/page.tsx`
- `app/translations/gallery.tsx`

These files are not automatically wrong, but they are the places most likely to contain accidental complexity and the highest-value refactor opportunities.

### Current Repo Health Notes

- Full lint is not clean.
- `npx tsc --noEmit` should be checked after changes; the repo has been close to type-clean but can regress easily during UI iterations.
- `npm run lint` currently reports both genuine issues and cleanup debt.

Known lint/problem areas observed during the 2026-03-16 diagnostic pass:

- `app/components/animations/PageTransitionEffect.tsx`
  - React ref usage during render triggers `react-hooks/refs`
- `app/context/LanguageContext.tsx`
  - synchronous `setState` inside an effect triggers `react-hooks/set-state-in-effect`
- `scripts/*.js`
  - CommonJS `require()` usage is flagged by the current ESLint rules
- multiple files contain unused imports, unused data, or dead-ish values
  - especially `app/data/elgato.ts`, `app/data/graph.ts`, and a few UI components

### Likely Simplification Opportunities

- split large interaction-heavy components into:
  - data/config
  - layout rendering
  - animation/behavior hooks
- reduce repeated portrait/landscape branching by deriving shared responsive state once
- move embedded copy/data out of components where practical
- replace one-off UI variants with existing shared primitives when a good primitive already exists
- remove defensive state introduced only to preserve previous intermediate behavior if it is no longer needed

### Guidance for Future Refactors

- prefer incremental simplification over heroic rewrites
- when touching a messy file, clean up one layer if you can do it safely
- if behavior is fragile, refactor around tests/manual verification points rather than rewriting from scratch
- for mobile overlays and image-heavy components, manual testing matters more than aesthetic code cleanup alone

## Editing Guidelines

### Preserve the Existing Visual Language

- This site is intentionally atmospheric and image-heavy.
- Avoid generic dashboard-like layouts.
- Preserve the current typography, spacing rhythm, and fixed-background feel unless the task explicitly changes them.

### Reuse Existing Primitives

Prefer existing building blocks before creating new ones:

- `FixedBackgroundImage`
- `OverlayShell`
- `InteractionHint`
- `PreviewCardsGrid`
- `LocalNav`
- `ProjectHeroSection`

### Keep Text in Translation Files

If you add UI copy for a translated page:

- add it to the relevant translation module
- thread it through via hook or props

Do not add new hardcoded strings to translated surfaces unless there is a strong reason.

### Respect Mobile Landscape

Several parts of the site have custom mobile landscape behavior:

- `GlobalNav`
- `Lightbox`
- `FlipBook`
- `AboutMeOverlay`

If you only test desktop and mobile portrait, you will miss real regressions.

### Be Careful with Fixed Backgrounds

Many pages depend on:

- fixed-position background layers
- local stacking contexts
- `clipPath: inset(0)` wrappers
- explicit z-index control

Seemingly small cleanup changes here can cause one section's background to bleed through another.

### Be Careful with Huge Images

This repo contains large assets, especially in Monkeybrain. When editing image-heavy components:

- avoid eager loading too many images at once
- use accurate `sizes`
- prefer current/adjacent-page loading strategies for page-based viewers
- test on mobile if the component runs in an overlay

## Good Starting Points for Agents

If the task is about:

- global navigation or About Me overlay:
  - start in [app/components/navigation/GlobalNav.tsx](/Users/maxfest/vscode/another_viofolio/app/components/navigation/GlobalNav.tsx)
  - and [app/components/AboutMeOverlay.tsx](/Users/maxfest/vscode/another_viofolio/app/components/AboutMeOverlay.tsx)
- archive pages:
  - start in [app/gallery/components/ArchiveSectionPage.tsx](/Users/maxfest/vscode/another_viofolio/app/gallery/components/ArchiveSectionPage.tsx)
- home project cards:
  - start in [app/components/PreviewCard.tsx](/Users/maxfest/vscode/another_viofolio/app/components/PreviewCard.tsx)
- lightbox behavior:
  - start in [app/components/Lightbox.tsx](/Users/maxfest/vscode/another_viofolio/app/components/Lightbox.tsx)
- Monkeybrain:
  - start in [app/components/monkeybrain/FlipBook.tsx](/Users/maxfest/vscode/another_viofolio/app/components/monkeybrain/FlipBook.tsx)
- project page hero/background issues:
  - start in [app/components/ProjectHeroSection.tsx](/Users/maxfest/vscode/another_viofolio/app/components/ProjectHeroSection.tsx)
  - and `FixedBackgroundImage`

## Practical Commands

- dev server: `npm run dev`
- lint: `npm run lint -- <file>`
- typecheck: `npx tsc --noEmit`

When changing interaction-heavy UI, lint and typecheck are necessary but not sufficient. Manual testing in mobile portrait and landscape is often the real verification step.
