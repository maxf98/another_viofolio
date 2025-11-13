# Portfolio Website - Project Overview

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Content**: MDX for pages
- **Language**: TypeScript
- **Icons**: React Icons (FA library)

## Architecture

### Image Management
- All images served via Next.js Image CDN for optimization
- Image data organized in a structured model:
  - **`app/data/model.tsx`** - TypeScript interfaces/types for image items
    - `ImageItem` - Base interface (index, image path, alt text)
    - `GalleryItem` - Alias for ImageItem
    - `LetterItem` - Extends ImageItem with letter attribute ("V" | "I" | "O")
  - **`app/data/graph.tsx`** - Actual data mappings
    - `gallery_graph` - Array of gallery images
    - `letters` - Dictionary of letter variants organized by V/I/O

### Content Structure
- **Static pages**: Regular React/TSX components
- **Project pages**: MDX files in `app/(mdx-pages)/`
  - Route group pattern keeps MDX pages organized
  - Shared layout with custom styling (prose classes)
  - 100px top padding to account for fixed header

### Key Components

#### Landing Page (`app/page.tsx`)
- **Hero section**: Full-screen LetterSwitcher
- **Projects section**: Full-width PagePreview cards stacked vertically

#### LetterSwitcher
- Auto-animates letters every second
- Randomizes one letter (V, I, or O) at a time
- Uses letter images from `public/letters/Vs`, `Is`, `Os`
- Masonry-style layout with column-based CSS

#### PagePreview
- Clickable preview cards for MDX pages
- Two size options: "normal" (h-96) and "large" (h-screen)
- Hover animations: lift up + image zoom
- Full-width display (edge to edge)

#### GalleryGrid
- Masonry layout using CSS columns (300px)
- Displays gallery images with modal overlay on click
- Hover effects on images

#### Header
- Fixed position (top-left)
- Logo with rotating hover animation (RotateOnHover component)
- Doesn't affect layout flow (position: fixed)

#### Footer
- Social icons (TikTok, Instagram, Email) with rotate animation
- Link to Impressum page
- Copyright notice

### Reusable Animations

#### RotateOnHover (`app/components/animations/RotateOnHover.tsx`)
- Wraps any component with springy rotation on hover
- Configurable: rotation degrees, stiffness, damping
- Used for: logo, social icons, and anywhere rotation is needed

### Styling Approach
- **Pure Tailwind CSS** - No CSS modules
- All custom styles converted to Tailwind utility classes
- Dark mode support throughout
- Responsive design (mobile-first)

## File Organization

```
app/
├── (mdx-pages)/          # MDX content pages (route group)
│   ├── layout.tsx        # Shared MDX layout
│   ├── about/
│   ├── impressum/
│   └── [other projects]/
├── components/
│   ├── animations/       # Reusable animation wrappers
│   ├── Header/
│   ├── Footer.tsx
│   ├── LetterSwitcher.tsx
│   ├── PagePreview.tsx
│   ├── GalleryGrid.tsx
│   └── Modal.tsx
├── data/
│   ├── model.tsx         # TypeScript types/interfaces
│   └── graph.tsx         # Actual data (images, letters)
├── gallery/
│   └── page.tsx          # Gallery page with grid + modal
└── page.tsx              # Landing page

public/
├── gallery/              # Gallery images
├── letters/              # Letter variants (V, I, O)
│   ├── Vs/
│   ├── Is/
│   └── Os/
├── projects/             # Project preview images
└── logo.png              # Site logo
```

## Key Design Decisions

1. **MDX for projects** - Easy to write content, supports React components
2. **Route groups** - Clean URLs without nested folders affecting routing
3. **Data separation** - Model/Graph pattern keeps types and data organized
4. **Full-width previews** - Magazine-style layout, no grid on landing page
5. **Autonomous animations** - Components self-animate (useEffect + setInterval)
6. **Spring physics** - All animations use spring transitions (feels more natural)
7. **Fixed header** - Doesn't take up layout space, always visible
8. **Tailwind only** - No CSS modules, easier to maintain

## Adding New Content

### Add a Gallery Image
1. Place image in `public/gallery/`
2. Add entry to `gallery_graph` in `app/data/graph.tsx`

### Add a Project Page
1. Create MDX file: `app/(mdx-pages)/project-name/page.mdx`
2. Add preview image: `public/projects/project-name/preview.png`
3. Add PagePreview component to `app/page.tsx`

### Add Letter Variants
1. Place images in `public/letters/Vs/`, `Is/`, or `Os/`
2. Update `letters` dictionary in `app/data/graph.tsx`

## Development Notes

- Server running: `npm run dev`
- All images optimized through Next.js Image component
- TypeScript strict mode enabled
- ESLint configured for Next.js
- Framer Motion for all animations (no CSS transitions for complex animations)
