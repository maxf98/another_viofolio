# Fix ProjectHeroSection Mobile Layout

## Problem
The ProjectHeroSection component doesn't look good on mobile devices. The layout needs to be optimized for smaller screens.

## Issues to Address

1. **Text Size**
   - Large title text (`!text-7xl md:!text-[10rem]`) may be too large for mobile
   - Small text (`!text-3xl md:!text-5xl`) with wide tracking may overflow
   - Consider responsive font sizes that scale better on mobile

2. **Working With Image**
   - Currently `w-48 md:w-64` - may need different sizing on mobile
   - Position/spacing relative to other elements

3. **Content Spacing**
   - Bottom padding `pb-20 md:pb-32` may need adjustment
   - Overall vertical spacing between elements

4. **Viewport Height Constraints**
   - Content must fit within `h-screen` without scrolling
   - May need to reduce sizes or adjust layout on smaller screens

5. **Orientation Handling**
   - Previously had landscape mobile detection - may need to revisit
   - Consider different layouts for portrait vs landscape mobile

## Potential Solutions
- Use smaller font sizes on mobile
- Reduce tracking/letter-spacing on mobile
- Make working with image smaller on mobile
- Adjust vertical spacing/padding
- Consider a different layout structure for mobile (e.g., centered vs bottom-aligned)

## Testing Required
- Test on various mobile screen sizes (iPhone SE, standard phones, larger phones)
- Test both portrait and landscape orientations
- Test with different content lengths (short vs long titles/descriptions)
