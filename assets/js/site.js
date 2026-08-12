/* ==========================================================================
   THE BEAUTY EDUCATION — SITE · comportament navbar
   Vanilla JS, fără dependențe. Trei lucruri:
     1. navbar transparent → solid la scroll
     2. dropdown „Cursuri" (click + tastatură; hover-ul e în CSS)
     3. sertar mobil (hamburger)
   Toate stările vizuale trăiesc în CSS. Aici doar comutăm clase și ARIA.
   ========================================================================== */
(function () {
  'use strict';

  var nav = document.querySelector('[data-site-nav]');
  if (!nav) return;

  var SOLID_AT = 24;                       // px de scroll după care navbar-ul devine solid
  var locked = nav.classList.contains('is-locked');  // pagină fără hero → mereu solid
  var burger = nav.querySelector('[data-site-burger]');
  var drawer = document.querySelector('[data-site-drawer]');
  var body = document.body;

  /* ---------------------------------------------------------------- 1 · scroll */
  var ticking = false;

  function applyScrollState() {
    // Când sertarul e deschis, navbar-ul rămâne solid ca logo-ul și
    // hamburgerul să se vadă pe fundalul crema al sertarului.
    var solid = locked || body.classList.contains('site-drawer-open') || window.scrollY > SOLID_AT;
    nav.classList.toggle('is-solid', solid);
    ticking = false;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(applyScrollState);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  applyScrollState();   // starea corectă și la reîncărcare în mijlocul paginii

  /* -------------------------------------------------------------- 2 · dropdown */
  var dropdowns = Array.prototype.slice.call(nav.querySelectorAll('[data-site-dropdown]'));

  function closeDropdowns(except) {
    dropdowns.forEach(function (item) {
      if (item === except) return;
      item.classList.remove('is-open');
      var btn = item.querySelector('[aria-expanded]');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  dropdowns.forEach(function (item) {
    var btn = item.querySelector('[aria-expanded]');
    if (!btn) return;

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      closeDropdowns(item);
    });

    // Escape închide și readuce focusul pe declanșator.
    item.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (!item.classList.contains('is-open')) return;
      item.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    });
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) closeDropdowns(null);
  });

  /* ----------------------------------------------------------- 3 · sertar mobil */
  if (burger && drawer) {
    var openDrawer = function (open) {
      body.classList.toggle('site-drawer-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Închide meniul' : 'Deschide meniul');
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      applyScrollState();
    };

    burger.addEventListener('click', function () {
      openDrawer(!body.classList.contains('site-drawer-open'));
    });

    // Orice link din sertar închide sertarul (navigare pe aceeași pagină inclusă).
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('a')) openDrawer(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && body.classList.contains('site-drawer-open')) {
        openDrawer(false);
        burger.focus();
      }
    });

    // Trecerea la desktop nu trebuie să lase pagina blocată cu overflow:hidden.
    var desktop = window.matchMedia('(min-width: 1025px)');
    var onBreakpoint = function () {
      if (desktop.matches && body.classList.contains('site-drawer-open')) openDrawer(false);
    };
    if (desktop.addEventListener) desktop.addEventListener('change', onBreakpoint);
    else desktop.addListener(onBreakpoint);   // Safari vechi

    openDrawer(false);   // stare inițială explicită
  }
})();
