# Refactor ScrollLinkSection Component

## Goal
Abstract the content layer out of ScrollLinkSection and create a more flexible component architecture.

## Tasks

1. **Create new ScrollSection component**
   - Extract the base scroll behavior and background handling from ScrollLinkSection
   - Should handle:
     - Fixed background image with clipPath
     - Content container wrapper
     - No navigation link functionality
   - Can be used for general sections with fixed backgrounds

2. **Update ScrollLinkSection**
   - Refactor to be a wrapper around ScrollSection
   - Add the navigation link functionality on top
   - Keep the ID-based section linking behavior

3. **Update existing pages to use ScrollSection**
   - Update mascha/page.tsx background sections (breathe, kundalini, feelloved, summary)
   - Update other project pages (elgato, quards, monkeybrain) if applicable
   - Replace duplicated background/clipPath code with ScrollSection component

## Benefits
- DRY: Remove duplicated background/clipPath code across pages
- Flexibility: ScrollSection can be used anywhere a fixed background is needed
- Maintainability: Easier to update scroll behavior in one place
- Separation of concerns: Split navigation-specific logic from general scroll behavior
