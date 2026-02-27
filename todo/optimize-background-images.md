# Optimize Background Images Across All Pages

## Problem
Background images using Next.js Image component with `fill` prop need proper optimization settings across the entire site. Currently only the mascha page has been updated with `sizes="100vw"`.

## Pages to Update

### Project Pages
- **elgato/page.tsx** - Check all sections with fixed background images
- **quards/page.tsx** - Check all sections with fixed background images
- **monkeybrain/page.tsx** - Check all sections with fixed background images

### Other Pages
- **gallery/page.tsx** - Already has some background images, verify optimization
- Any other pages using fixed backgrounds with `fill` prop

## Required Changes

For each Image component using `fill` prop:

1. **Add `sizes` prop**
   ```tsx
   <Image
     src="..."
     fill
     sizes="100vw"  // Add this for full-viewport backgrounds
     className="..."
   />
   ```

2. **Verify container positioning**
   - Ensure parent has `position: relative` or `position: fixed`
   - Ensure proper z-index layering

3. **Check for console warnings**
   - Next.js will warn about missing `sizes` prop
   - Look for any layout shift issues

## Benefits
- Proper responsive image optimization
- Better performance (correct srcset generation)
- No console warnings from Next.js
- Consistent implementation across all pages

## Pattern to Follow
Use the mascha page as reference implementation:
- Fixed backgrounds with `sizes="100vw"`
- Proper z-index layering with `-z-10`
- clipPath: "inset(0)" for section containment
