# Portrait Layout Changes After Landscape Round-Trip

## Problem
- On the home page, portrait layout is not always identical after this sequence:
1. Load in portrait.
2. Rotate to landscape.
3. Rotate back to portrait.
- After rotating back, `ScrollLinkSection` visuals/layout can differ from initial portrait render.

## Scope
- Component: `app/components/ScrollLinkSection.tsx`
- Page usage: `app/page.tsx`
- Affects sections using fixed background layers and viewport-sized image containers.

## Important Constraint
- `lvh` units are intentional and should remain in place for now.
- Do not "fix" this by switching to `dvh`/`svh` unless explicitly decided later.

## Current Observations
- `ScrollLinkSection` uses a fixed background layer (`position: fixed`) plus clipped section wrappers.
- Section root and parent wrappers include clipping/overflow controls.
- Mobile vs desktop image variants rely on responsive class switching (`md:hidden` / `md:block`).

## Repro Checklist
1. Open home page on mobile or responsive simulator.
2. Scroll to sections using `ScrollLinkSection`.
3. Rotate portrait -> landscape.
4. Rotate landscape -> portrait.
5. Compare positioning/cropping to initial portrait state.

## Investigation Next Steps
1. Verify whether clipping context (`clipPath: inset(0)`, `overflow-hidden`) changes effective paint area after orientation events.
2. Check if fixed-layer composition order (`fixed` + negative z-index wrappers) is stable across orientation changes.
3. Inspect breakpoint transitions around `md` width during rotation to ensure only one image variant is active as expected.
4. Add temporary debug logs for viewport dimensions and computed section/image box sizes before and after rotation.

## Status
- Deferred for later investigation.
