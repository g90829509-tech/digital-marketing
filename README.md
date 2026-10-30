# Cruzen Digital — React + Vite (Header & Homepage Search milestone)

This project is the first manual rebuild milestone: responsive site header, services mega menu, mobile navigation, homepage hero/search, autocomplete suggestions and light-theme styling. The rest of the site routes are scaffolded so the next pages can be added in batches.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Main files

- `src/components/Header.jsx` — desktop header, hover mega menu and mobile menu
- `src/components/HeroSearch.jsx` — homepage hero, searchable services, suggestions and popular chips
- `src/data/navigation.js` — shared service index for menu and search
- `src/styles/header.css` — header and mega-menu styles
- `src/styles/hero.css` — top hero/search styling
- `src/App.jsx` — homepage and placeholder routes for the next milestone

## Notes

- Original Cruzen logo assets from the supplied ZIP are included under `public/assets/`.
- Search autocomplete routes to local service slugs. Unbuilt pages show a placeholder until their page content is implemented in later steps.
- This is a frontend milestone, not a complete production clone; authentication, checkout and enquiry backends are not connected yet.


## Interactive scroll experience update
- Added a pinned, full-screen digital-growth story section on the homepage. Scrolling through the section advances the narrative and progress indicator before the page continues.
- Added four interactive visual concept tiles with hover movement and a click-to-open detail modal.
- Added responsive layouts and reduced-motion fallbacks.
- The original routes, service catalogue, header/footer, and existing assets are retained.

To run locally: `npm install`, then `npm run dev`. To verify a production build: `npm run build`.
