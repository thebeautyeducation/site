/* ==========================================================================
   THE BEAUTY EDUCATION — PROGRAM DE LOIALITATE
   --------------------------------------------------------------------------
   ►► VALORILE NIVELURILOR SE EDITEAZĂ AICI ◄◄
   Constanta LEVELS e singura sursă pentru rândul de niveluri: nume,
   multiplicator, notă. Cardurile se generează din ea, în ordine — primul
   element e treapta cea mai de jos.
   Notă: multiplicatorii folosesc virgulă (1,5x), nu punct — site-ul e în
   română. În CLAUDE.md scrie „până la 2x–3x la Diamond"; aici e 2x, cum a
   venit în brief. Dacă 3x e corect, se schimbă doar rândul de mai jos.
   ========================================================================== */
var LEVELS = [
  { name: 'Bronze',  multiplier: '1x',   note: 'punctul de plecare' },
  { name: 'Silver',  multiplier: '1,5x', note: 'mai multe puncte' },
  { name: 'Gold',    multiplier: '2x',   note: 'și mai multe' },
  { name: 'Diamond', multiplier: '3x',   note: 'maximum de puncte' }
];
/* Numele nivelului devine badge-ul oficial din design system
   (.tbe-badge.is-bronze/.is-silver/.is-gold/.is-diamond, cu glifele ● ◈ ★ ◆).
   Clasa se derivă din nume — dacă redenumești un nivel, păstrează numele
   englezești din tokens (bronze/silver/gold/diamond) sau scrie clasa manual. */

(function () {
  'use strict';

  /* ------------------------------------------------ 1 · randarea nivelurilor */
  var lista = document.querySelector('[data-loy-niveluri]');
  if (lista) {
    LEVELS.forEach(function (nivel) {
      var li = document.createElement('li');
      li.className = 'loy-nivel';

      var tier = 'is-' + nivel.name.toLowerCase();   // is-bronze … is-diamond

      li.innerHTML =
        '<h3 class="loy-nivel-badge"><span class="tbe-badge ' + tier + '">' + nivel.name + '</span></h3>' +
        '<span class="loy-multiplu">' + nivel.multiplier + '</span>' +
        '<p class="loy-nota">' + nivel.note + '</p>';

      lista.appendChild(li);
    });
  }

  /* ------------------------------------------------ 2 · intrarea pe scroll */
  var sect = document.querySelector('.loialitate');
  if (!sect) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  var tinte = Array.prototype.slice.call(sect.querySelectorAll('.loy-card, .loy-nivel'));
  sect.classList.add('loy-anim');   // abia acum elementele pornesc ascunse

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      e.target.classList.add('is-in');
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -5% 0px' });

  tinte.forEach(function (el, i) {
    // Nivelurile intră în trepte, de la stânga la dreapta — încă un semnal
    // de progresie, pe lângă înălțimi și strălucirea crescândă a badge-urilor.
    el.style.transitionDelay = (i % 4) * 90 + 'ms';
    io.observe(el);
  });
})();
