# Image Preloading and Animation Patterns

This document covers the coordinated image loading and animation system implemented for the portfolio landing page.

## Load Sequence Overview

The landing page loads elements in this order with deliberate timing:

1. **"Hey I'm" text** - appears first (0.5s delay after page load)
2. **Letters (V, I, O)** - appear with stagger animation (1.2s after "Hey I'm", 450ms between each letter)
3. **Background + "Graphic Designer" text** - fade in together (0.5s after all letters ready)
4. **Navigation** - appears last (1.1s after letters ready, after background has faded in)

## Key Files

### `app/context/LoadContext.tsx`
Central state management for coordinating load sequence across components.

```tsx
interface LoadState {
  lettersLoaded: [boolean, boolean, boolean];  // Tracks each letter
  allLettersReady: boolean;                    // True when all letters loaded
}
```

- `setLetterLoaded(index)` - Called by each letter when it finishes loading
- `useLoadState()` - Hook to access load state from any component

### `app/components/LetterSwitcher.tsx`
Handles sequential letter loading with stagger delays.

**Key Constants:**
```tsx
const INITIAL_DELAY = 1200;  // Delay before first letter (after "Hey I'm")
const STAGGER_DELAY = 450;   // Delay between each letter appearing
```

**Pattern:** Each `LetterStack` preloads its image with `new Image()`, then uses setTimeout to stagger visibility based on position.

### `app/components/Hero.tsx`
Controls text element visibility tied to load state.

- "Hey I'm" - simple opacity animation with 0.5s delay
- "Graphic Designer" - animates when `state.allLettersReady` is true

### `app/components/navigation/Navigation.tsx`
Shows navigation after everything else.

**Pattern:** Uses setTimeout after `allLettersReady` becomes true to delay appearance by 1100ms (after background fade completes).

```tsx
useEffect(() => {
  if (state.allLettersReady && !showNav) {
    const timer = setTimeout(() => setShowNav(true), 1100);
    return () => clearTimeout(timer);
  }
}, [state.allLettersReady, showNav]);
```

### `app/components/navigation/ScrollNav.tsx`
Fixed navigation buttons with scale animation.

**Important:** Must set `initial` prop to match `animate` values to prevent resize flash on mount:
```tsx
<motion.div
  initial={{ width: 36, height: 36, scale: 1 }}
  animate={{ width: 36, height: 36, scale: isActive ? 1.8 : 1 }}
>
```

### `app/page.tsx`
Background image with conditional rendering.

**Pattern:** Only render the Image component when ready (not just opacity: 0), to prevent early loading:
```tsx
{state.allLettersReady && (
  <Image src="/gallery/sky.png" ... />
)}
```

### `app/components/ScrollLinkSection.tsx`
Intersection Observer for scroll-based preloading.

**Pattern:** Preload images 1.5 viewports ahead:
```tsx
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setShouldLoad(true);
      observer.disconnect();
    }
  },
  { rootMargin: "150% 0px" }  // 1.5 viewports ahead
);
```

## Important Patterns

### Image Preloading with Native API
```tsx
const img = new Image();
img.onload = () => {
  // Image is now cached, safe to show
};
img.src = imageUrl;
```

### Handling StaticImageData | string Union
```tsx
function getImageSrc(image: StaticImageData | string): string {
  return typeof image === "string" ? image : image.src;
}
```

### Conditional Image Rendering vs Opacity
To prevent early loading, use conditional rendering instead of just `opacity: 0`:
```tsx
// Good - prevents loading until ready
{ready && <Image src="..." />}

// Bad - loads immediately, just hidden
<Image src="..." style={{ opacity: ready ? 1 : 0 }} />
```

## Gotchas

### Fixed Positioning + CSS Transforms
CSS transforms on parent elements don't work properly with fixed-positioned children. This caused visual glitches when trying to animate navigation container.

**Solution:** Don't animate fixed elements with transforms. Use simple show/hide with setTimeout instead.

### Framer Motion Initial Values
If a motion element appears visually different on mount, add `initial` prop matching the default `animate` values to prevent the "transition from nowhere" effect.

## Timing Summary

| Element | Trigger | Delay |
|---------|---------|-------|
| "Hey I'm" | Page load | 0.5s |
| First letter (V) | Page load | 1.2s |
| Second letter (I) | Page load | 1.65s |
| Third letter (O) | Page load | 2.1s |
| Background | allLettersReady | 0.5s |
| "Graphic Designer" | allLettersReady | 0.5s |
| Navigation | allLettersReady | 1.1s |
