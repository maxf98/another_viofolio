## Cursor Issue Diagnostics (pointer flickers off on links)

- Observation: Hover over links/buttons briefly shows pointer, then reverts to default. Happens on nav and ScrollLinkSection links.
- Hypothesis 1: Fullscreen fixed backgrounds capturing hover via stacking context.
  - Hero background (`app/page.tsx`) set to `pointer-events-none` but issue persisted.
  - ScrollLinkSection backgrounds set to `pointer-events-none` but issue persisted.
  - Removing hero background entirely did **not** fix cursor -> backgrounds likely not sole cause.
- Hypothesis 2: Nav behind an overlay due to stacking context.
  - Increased nav/header z-index to `z-[9999]/z-[9998]` and forced `pointer-events-auto` -> no change.
- Hypothesis 3: CSS override elsewhere.
  - Added `.force-pointer { cursor: pointer !important; }` and applied to nav buttons -> no change.
- elementFromPoint check:
  - On ScrollLinkSection center, returns the `<a>` Link (as expected), not an overlay.
- Next steps to isolate:
  1) Temporarily wrap `body` with `pointer-events-none` on known full-screen wrappers one by one via a test flag to see when cursor returns.
  2) Add a temporary mousemove logger to print `document.elementFromPoint(e.clientX, e.clientY)` to verify actual hit targets while hovering the nav/link.
  3) Search for global styles that may set `cursor: auto` on `motion` elements (Framer adds transforms, creating stacking contexts).
  4) Try disabling Framer `whileHover`/`whileTap` on nav buttons to see if animation is resetting cursor.
  5) If isolated to ScrollLinkSection, test removing the outer `relative` + `clipPath: inset(0)` to see if clipping triggers a new stacking context.
