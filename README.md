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
