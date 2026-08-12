/* ==========================================================================
   THE BEAUTY EDUCATION — MĂRTURII · butoane + intrare pe scroll
   Scroll-ul benzii e nativ (snap CSS) — fără JS totul funcționează cu
   degetul/trackpad-ul. Aici doar: butoanele înainte/înapoi cu stările lor
   și reveal-ul cu decalaj, ca la galerie.
   ========================================================================== */
(function () {
  'use strict';

  var wrap = document.querySelector('[data-marturii]');
  if (!wrap) return;
  var rail = wrap.querySelector('.mt-rail');
  var itemi = Array.prototype.slice.call(rail.children);
  var prev = wrap.querySelector('[data-mt-prev]');
  var next = wrap.querySelector('[data-mt-next]');
  if (!itemi.length) return;

  /* ------------------------------------------------------------- butoane */
  var pas = function () {
    if (itemi.length < 2) return itemi[0].getBoundingClientRect().width;
    return itemi[1].getBoundingClientRect().left - itemi[0].getBoundingClientRect().left;
  };

  function actualizeaza() {
    if (!rail.offsetWidth) return;
    var max = rail.scrollWidth - rail.clientWidth;
    if (prev) prev.disabled = rail.scrollLeft <= 1;
    if (next) next.disabled = rail.scrollLeft >= max - 1;
  }

  if (prev) prev.addEventListener('click', function () { rail.scrollLeft -= pas(); });
  if (next) next.addEventListener('click', function () { rail.scrollLeft += pas(); });

  var ticking = false;
  rail.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { actualizeaza(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', actualizeaza);
  actualizeaza();

  /* ------------------------------------------------------ intrare pe scroll */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  rail.classList.add('mt-anim');   // abia acum cardurile pornesc ascunse
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      e.target.classList.add('is-in');
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

  itemi.forEach(function (el, i) {
    el.style.transitionDelay = (i % 5) * 70 + 'ms';
    io.observe(el);
  });
})();
