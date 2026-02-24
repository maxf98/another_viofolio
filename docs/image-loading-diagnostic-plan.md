# Image Loading Diagnostic Plan

This is the ongoing checklist for catching image-loading regressions similar to the recent homepage issues.

## 1) Run the static audit first

```bash
npm run audit:images
```

What to review from output:
- Count of assets over `500KB`, `1MB`, `5MB`
- Top largest files in `public/`
- Largest assets that are actually referenced from `app/`
- All `next/image` usages with `priority`
- Remaining literal `*.png` route references
- Static imports from `/public` inside app code

## 2) Priority rules

Keep `priority` only for content that is immediately visible above the fold.

Remove or downgrade `priority` when:
- Image is in a modal/lightbox
- Image is below the fold
- Image appears conditionally after interaction
- Multiple images in the same section all request priority

## 3) Above-the-fold sequence checks (homepage)

Confirm this order in browser network waterfall:
1. `heyo` and first letter assets
2. letter sequence (`V -> I -> O`)
3. background/section artwork
4. below-the-fold section images

If something jumps ahead:
- Verify no manual `<link rel="preload" as="image">` exists for it
- Verify component is conditionally rendered when needed
- Verify IntersectionObserver root margin is not too aggressive

## 4) Route-level checks

For each route (`/`, `/gallery`, `/elgato`, `/quards`, `/mascha`, `/monkeybrain`):
- Hard refresh and inspect first 10 image requests
- Identify any request over ~`700KB` in early viewport work
- Check if oversized PNG can be replaced with existing WebP/AVIF asset
- Validate lazy content does not start too early

## 5) Regression guardrails

Before shipping image-heavy changes:
1. Run `npm run audit:images`
2. Verify no newly introduced `priority` on non-critical images
3. Verify no new huge `*.png` path in top-level route components
4. Smoke test waterfall on throttled Fast 3G and normal 4G

## 6) Suggested thresholds

- Hero/critical image target: `< 350KB`
- Above-the-fold secondary images: `< 600KB`
- Below-the-fold images: prefer lazy + WebP/AVIF
- Flag any single referenced asset `> 1MB` for review
