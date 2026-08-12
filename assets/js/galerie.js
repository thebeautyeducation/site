/* ==========================================================================
   THE BEAUTY EDUCATION — GALERIE · intrare pe scroll
   Fade + translate cu decalaj ușor între poze. Progresiv:
   - fără JS → galeria e vizibilă de la început (starea ascunsă se activează
     abia aici, prin clasa .gal-anim)
   - cu prefers-reduced-motion → nicio animație
   ========================================================================== */
(function () {
  'use strict';

  var lista = document.querySelector('[data-galerie]');
  if (!lista) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  var itemi = Array.prototype.slice.call(lista.children);
  lista.classList.add('gal-anim');   // abia acum pozele pornesc ascunse

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      e.target.classList.add('is-in');
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

  itemi.forEach(function (el, i) {
    // Stagger modulo 4: pozele care intră împreună în viewport se decalează
    // între ele, dar decalajul nu crește la nesfârșit pentru cele de jos.
    el.style.transitionDelay = (i % 4) * 70 + 'ms';
    io.observe(el);
  });
})();
