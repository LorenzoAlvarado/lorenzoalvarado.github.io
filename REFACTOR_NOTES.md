# Refactor notes

The refactor preserves the site's content and overall visual identity while making the source easier to maintain and the published site usable across desktop, tablet, and mobile devices.

## Phase 1 — Structural cleanup

- Replaced repeated headers and footers with Jekyll includes.
- Centralized navigation in `_data/navigation.yml`.
- Added a shared Jekyll layout and page front matter.
- Corrected the language metadata of the currently English pages to `lang: en`.
- Made MathJax conditional instead of loading it on every page.
- Moved authoring templates into `_templates/` so GitHub Pages does not publish them as ordinary pages.
- Omitted `operacion_flores_karina (1).html` from the cleaned public-site copy.
- Corrected the broken Outreach cover-image path.
- Corrected the Calculus I notes path so it points to the Calculus I folder.
- Added `rel="noopener noreferrer"` to links that open a new tab.
- Added intrinsic image dimensions and lazy-loading metadata where appropriate.
- Fixed malformed section structure in the Outreach detail pages and accidental nested sections in Research.
- Moved repeated blog article styles into the main stylesheet.
- Replaced the fragile inline-style active-navigation selector with `.is-active` / `aria-current="page"`.
- Made the footer year generated automatically by Jekyll.

## Phase 2 — Responsive/mobile pass

- Replaced the fixed header with a `sticky` header, removing the fragile fixed `body` top offset.
- Added an accessible hamburger navigation for widths up to 1100 px.
- Added `aria-expanded`, keyboard Escape handling, automatic menu closing after navigation, and a no-JavaScript fallback.
- Added a scrollable mobile menu for short landscape viewports so the header never traps content off-screen.
- Preserved the desktop horizontal navigation above the responsive breakpoint.
- Converted Teaching course tables into stacked mobile cards at narrow widths.
- Improved mobile behavior for two-column layouts, course cards, card grids, galleries, resource cards, blog cards, buttons, forms, and talk metadata.
- Made embedded videos and media width-safe.
- Added safe horizontal scrolling for large MathJax displays instead of allowing formulas to force page-wide overflow.
- Added long-text overflow protection for narrow screens.
- Increased practical touch targets in mobile navigation.
- Prevented iOS form zoom by using a 16 px mobile input font size.
- Added `prefers-reduced-motion` support.
- Hid the secondary header subtitle on very narrow phones to keep the mobile header compact.
- Corrected the 1 px mobile overflow caused by the negative header margin inside resource cards.

## Intentionally not done yet

- No Spanish version has been added yet.
- Large teaching preview images have not yet been resized/recompressed.
- PDFs removed from `assets/pdfs/resources/course_notes/` before the original upload remain absent.
- Teaching `notes.pdf`, `homework.pdf`, and preview references that are not present remain in place intentionally as placeholders for future course materials.

## Validation

### Structural pass

- 31 published HTML pages were compared against the supplied originals after removing only the repeated header/footer shell: normalized visible page text matched on all 31 pages.
- 263 local page/resource references were checked.
- The 12 missing `course_notes` PDFs were expected because they had been intentionally removed before upload.
- The Teaching references to currently absent notes/homework resources are intentionally retained for future material.

### Responsive pass

- All 31 published pages were rendered programmatically through the shared layout/header structure.
- They were checked at 12 viewport configurations, including 320–430 px portrait phones, mobile landscape, tablets, 1024/1100 px widths, and desktop widths up to 1440 px.
- 372 page/viewport checks completed with no accidental horizontal document overflow.
- The hamburger menu was also opened during mobile/tablet checks and verified not to create horizontal overflow or exceed the viewport height in landscape mode.

## Phase 3 — Mobile spacing/type + bilingual site (2026-10-06)

### Mobile refinements
- Fixed the horizontal-padding bug on pages that used both `.container` and `.panel`: `.panel` now uses `padding-block`, so it no longer overwrites the container's left/right gutters.
- Increased mobile gutters to 20–22 px depending on viewport width.
- Increased the mobile base type size to 17 px and slightly increased body-text line height for easier reading.
- Desktop sizing and layout remain essentially unchanged.

### English / Spanish architecture
- English remains at the existing URLs (`/`, `/research.html`, etc.) so existing links do not break.
- A complete Spanish mirror now lives under `/es/` with the same page structure.
- Navigation labels are language-aware through `_data/navigation.yml`.
- Every page now has an `EN` / `ES` switch in the main navigation.
- The language switch maps a page to its counterpart, e.g. `/research.html` ↔ `/es/research.html`.
- Added `canonical`, `hreflang="en"`, `hreflang="es"`, and `hreflang="x-default"` metadata in the shared layout.
- Mobile navigation accessibility labels are also localized.
- Shared PDFs and images remain in the same `/assets/` and `/cv/` directories; they are not duplicated for the Spanish site.

### Content cleanup included in this phase
- Removed stray citation-marker text from `teaching/adv_algebra_2.html`.
- Fixed the missing space in the Cauchy-variables talk title (`AND PRODUCTS`).
- Corrected the seminar label on that talk's English detail page.
- Updated the English home-page title/description so the metadata matches the English version.

### Validation
- All public English pages have a Spanish counterpart: 31 English + 31 Spanish pages.
- Internal HTML-page link validation reports 0 missing page targets.
- The only missing local assets are the same intentional future course-note/homework placeholders already discussed; the Spanish mirror points to those same shared future files rather than duplicating them.
