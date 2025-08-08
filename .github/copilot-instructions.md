# Portfolio Project - AI Coding Agent Instructions

## Project Overview
This is an Astro-based portfolio website showcasing art with a content-driven gallery architecture. Uses Bun package manager, Tailwind CSS, and deploys via Fly.io with nginx.

## Architecture Patterns

### Content Collections System
- **Gallery entries**: Located in `src/content/gallery/` as MDX files with frontmatter
- **Schema**: Defined in `src/content/config.ts` with title, tags, image, and hidden fields
- **Naming convention**: Files prefixed with numbers for ordering (e.g., `10_ps001.mdx`, `20_fp002.mdx`)
- **Image references**: Use relative paths like `../assets/images/filename.jpg` in frontmatter

### Dynamic Image Loading Workaround
Critical pattern in `src/components/LocalImage.astro`:
```javascript
const images = import.meta.glob("../assets/images/*");
const image: any = images[imageUrl]();
```
This enables dynamic imports of local images based on frontmatter paths - essential for the gallery system.

### Routing Architecture
- `/` - Main gallery showing all visible artworks
- `/[tag]` - Filtered views (painting, drawing) via dynamic routes
- `/gallery/[slug]` - Individual artwork pages with prev/next navigation
- Static generation uses `getStaticPaths()` with filtering for hidden items

### Tag-Based Filtering
Hardcoded tags: `["painting", "drawing"]` in `src/pages/[tag].astro`. Filter component shows current state with bold styling.

## Development Commands
- **Dev server**: `bun run dev` (not npm - uses Bun exclusively)
- **Build**: `bun run build` (includes `astro check` validation)
- **Preview**: `bun run preview`

## Deployment & Infrastructure
- **Platform**: Fly.io with nginx serving static files
- **Docker**: Multi-stage build using oven/bun:slim → nginx
- **Build output**: `dist/` directory served by nginx on port 80
- **Site URL**: https://danielmilenkovic-portfolio.fly.dev

## Styling Conventions
- **Framework**: Tailwind CSS with custom fonts (Geomanist, PPSupplyMono)
- **Layout**: CSS Grid for responsive gallery (3/2/1 columns by breakpoint)
- **Typography**: Custom font families defined in `src/styles/fonts.css`
- **Transitions**: Astro ViewTransitions enabled in Layout

## Key Files to Understand
- `src/content/config.ts` - Content schema definition
- `src/components/LocalImage.astro` - Dynamic image loading pattern
- `src/components/Gallery.astro` - Main gallery grid with filtering
- `src/layouts/Layout.astro` - Base layout with navigation and transitions
- `Dockerfile` - Multi-stage build process

## Content Management
- Add new artworks by creating MDX files in `src/content/gallery/`
- Include corresponding images in `src/assets/images/`
- Use `hidden: true` to exclude from public gallery
- Number prefixes control display order

## Common Operations
- **New artwork**: Create MDX file + add image to assets
- **Hide artwork**: Add `hidden: true` to frontmatter
- **New tag**: Update hardcoded array in `[tag].astro` and Filter component
- **Font changes**: Update `src/styles/fonts.css` and public font files
