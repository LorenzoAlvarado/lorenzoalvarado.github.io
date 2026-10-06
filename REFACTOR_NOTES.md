# Structural refactor notes

This pass intentionally preserves the site's content and overall visual design while making the source easier to maintain.

## Changed in this pass

- Replaced repeated headers and footers with Jekyll includes.
- Centralized navigation in `_data/navigation.yml`.
- Added a shared Jekyll layout and page front matter.
- Corrected the language metadata of the currently English pages to `lang: en`.
- Made MathJax conditional instead of loading it on every page.
- Moved authoring templates into `_templates/` so GitHub Pages does not publish them as ordinary pages.
- Omitted `operacion_flores_karina (1).html` from this cleaned public-site copy.
- Corrected the broken Outreach cover-image path.
- Corrected the Calculus I notes path so it points to the Calculus I folder (the PDF itself is still absent in this ZIP).
- Added `rel="noopener noreferrer"` to links that open a new tab.
- Added intrinsic image dimensions and lazy loading metadata where appropriate; image files themselves were not recompressed in this pass.
- Fixed malformed section structure in the Outreach detail pages and the accidental nested sections in Research through HTML normalization.
- Moved repeated blog article styles into the main stylesheet.
- Replaced the fragile inline-style active-navigation selector with `.is-active` / `aria-current="page"`.
- Made the footer year generated automatically by Jekyll.

## Intentionally not done yet

- No Spanish version has been added yet.
- No mobile navigation redesign has been added yet.
- Large teaching preview images have not yet been resized/recompressed.
- PDFs removed from `assets/pdfs/resources/course_notes/` before upload remain absent.
- Several Teaching pages already referenced `notes.pdf` / `homework.pdf` files that were not present in the supplied ZIP. Those references remain as content TODOs rather than fabricating files.

## Validation

- 31 published HTML pages were compared against the supplied originals after removing only the repeated header/footer shell: normalized visible page text matched on all 31 pages.
- 263 local page/resource references were checked.
- The 12 missing `course_notes` PDFs are expected because they were intentionally removed before upload.
- 18 Teaching references point to files that were already absent from the supplied ZIP (PDFs and three preview images). These are left as explicit follow-up items rather than silently changing course content.
