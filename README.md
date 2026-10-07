# lorenzoalvarado.github.io

Personal academic website published with GitHub Pages and Jekyll.

## Structure

- `_layouts/default.html`: shared HTML document shell.
- `_includes/header.html`: shared responsive header and navigation.
- `_includes/footer.html`: shared footer.
- `_data/navigation.yml`: navigation links; edit the menu here once instead of on every page.
- `_templates/`: authoring templates kept out of the generated public site.
- `css/styles.css`: shared desktop and responsive styles.
- `assets/js/site.js`: mobile-navigation behavior.
- `assets/`: images, PDFs, and other static resources.

Each page contains a short YAML front matter block followed by only its page-specific content.
GitHub Pages processes the site automatically when pushed to the repository.

## Responsive behavior

- Desktop keeps the full horizontal navigation.
- At widths up to 1100 px the navigation becomes an accessible hamburger menu.
- Course tables, cards, galleries, videos, forms, mathematical displays, and long text adapt to narrow screens.
- The header is `sticky`, so no fixed body offset is required.
- The navigation remains usable as a progressive-enhancement fallback if JavaScript is unavailable.

## Bilingual URLs

The existing root URLs are the English version. The Spanish version mirrors the same structure under `/es/`:

- `/research.html` ↔ `/es/research.html`
- `/teaching/calculus_1.html` ↔ `/es/teaching/calculus_1.html`
- `/blog/` ↔ `/es/blog/`

Navigation labels live in `_data/navigation.yml`. The shared header automatically displays the correct navigation and generates the EN/ES counterpart link based on `page.lang` and `page.url`.

When adding a new public page, create both the English page and its counterpart under `/es/` using the same relative path, and set `lang: en` / `lang: es` in their front matter.
