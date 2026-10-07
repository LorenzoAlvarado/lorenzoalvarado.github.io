(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-navigation');

  if (!header || !toggle || !nav) return;

  const isSpanish = document.documentElement.lang.toLowerCase().startsWith('es');
  const labels = isSpanish
    ? { open: 'Abrir menú de navegación', close: 'Cerrar menú de navegación' }
    : { open: 'Open navigation menu', close: 'Close navigation menu' };

  const mobileQuery = window.matchMedia('(max-width: 1100px)');

  const setOpen = (open) => {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? labels.close : labels.open);
  };

  toggle.addEventListener('click', () => {
    setOpen(!header.classList.contains('nav-open'));
  });

  nav.addEventListener('click', (event) => {
    if (mobileQuery.matches && event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('nav-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  mobileQuery.addEventListener('change', (event) => {
    if (!event.matches) setOpen(false);
  });
})();
