# iOS Safari Dynamic Browser Chrome Background Coverage Issue

## Problem
- On iOS Safari, the browser chrome (address bar + toolbar) dynamically shows/hides during scroll.
- This changes the visible viewport and created a visual mismatch for `ScrollLinkSection` background images.
- The symptom was an awkward exposed area during scroll where content appeared to move into space the background did not fully cover.

## Context
- Component: `app/components/ScrollLinkSection.tsx`
- Page wrapper usage: `app/page.tsx`
- Relevant browser behavior: dynamic viewport changes caused by Safari UI chrome transitions.

## What Was Tried
1. `lvh` sizing strategy:
- Fixed background container set to `100lvh`.
- Background images set to `120lvh` with explicit inline width/height and absolute positioning.

2. Alternative attempts (later reverted):
- Additional overscan offsets and larger image heights.
- Sticky-based background rewrite to avoid fixed-layer quirks.
- Removing/restoring `clipPath` wrappers while testing clipping behavior.

## Current Chosen State
- Keep the `lvh`-based approach.
- `ScrollLinkSection` uses:
- fixed background container with `height: 100lvh`
- mobile and desktop background images at `height: 100lvh` (now matching container)
- explicit image sizing/positioning (absolute + inline dimensions)
- overflow clipping applied at container levels to reduce visual bleed:
- section root has `overflow-hidden`
- project-section wrapper in `app/page.tsx` has `overflow-hidden`

## Notes
- This issue is device/browser specific and should be re-validated on real iOS Safari hardware after layout changes.
- If artifacts reappear, revisit overscan strategy (e.g., controlled top/bottom overscan) with minimal structural changes.
