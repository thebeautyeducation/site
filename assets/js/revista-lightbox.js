/* ==========================================================================
   THE BEAUTY EDUCATION — LIGHTBOX pentru coperțile Revistei Coafezelor
   --------------------------------------------------------------------------
   Deschide coperta mare peste tot ecranul. Accesibil: dialog modal, focus
   trap, Esc închide, săgeți navighează între coperți, click pe fundal închide,
   focusul revine pe coperta din care s-a deschis. Fără dependențe.
   ========================================================================== */
(function () {
  'use strict';

  var galerie = document.querySelector('[data-rev-galerie]');
  var box = document.querySelector('[data-rev-lightbox]');
  if (!galerie || !box) return;

  var butoane = Array.prototype.slice.call(galerie.querySelectorAll('[data-rev-cover]'));
  if (!butoane.length) return;

  var img = box.querySelector('[data-rev-img]');
  var capTitlu = box.querySelector('[data-rev-cap-titlu]');
  var capInfo = box.querySelector('[data-rev-cap-info]');
  var btnInchide = box.querySelector('[data-rev-close]');
  var btnPrev = box.querySelector('[data-rev-prev]');
  var btnNext = box.querySelector('[data-rev-next]');

  var index = 0;
  var declansator = null; // coperta din care s-a deschis, pentru revenirea focusului

  function arata(i) {
    index = (i + butoane.length) % butoane.length;
    var b = butoane[index];
    img.src = b.getAttribute('data-src');
    img.alt = b.getAttribute('data-alt') || '';
    capTitlu.textContent = b.getAttribute('data-titlu') || '';
    capInfo.textContent = b.getAttribute('data-info') || '';
    // Navigarea are sens doar cu 2+ coperți.
    var multiple = butoane.length > 1;
    btnPrev.hidden = !multiple;
    btnNext.hidden = !multiple;
  }

  function deschide(i, opener) {
    declansator = opener || null;
    arata(i);
    box.classList.add('is-open');
    box.setAttribute('aria-hidden', 'false');
    document.body.classList.add('rev-no-scroll');
    document.addEventListener('keydown', laTasta);
    btnInchide.focus();
  }

  function inchide() {
    box.classList.remove('is-open');
    box.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('rev-no-scroll');
    document.removeEventListener('keydown', laTasta);
    if (declansator && typeof declansator.focus === 'function') declansator.focus();
    declansator = null;
  }

  function laTasta(e) {
    if (e.key === 'Escape') { inchide(); return; }
    if (e.key === 'ArrowLeft' && butoane.length > 1) { arata(index - 1); return; }
    if (e.key === 'ArrowRight' && butoane.length > 1) { arata(index + 1); return; }
    if (e.key === 'Tab') {
      // Focus trap: doar butoanele vizibile din lightbox.
      var focusabile = Array.prototype.slice
        .call(box.querySelectorAll('button'))
        .filter(function (el) { return !el.hidden && el.offsetParent !== null; });
      if (!focusabile.length) return;
      var primul = focusabile[0];
      var ultimul = focusabile[focusabile.length - 1];
      if (e.shiftKey && document.activeElement === primul) { e.preventDefault(); ultimul.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimul) { e.preventDefault(); primul.focus(); }
    }
  }

  butoane.forEach(function (b, i) {
    b.addEventListener('click', function () { deschide(i, b); });
  });

  btnInchide.addEventListener('click', inchide);
  btnPrev.addEventListener('click', function () { arata(index - 1); });
  btnNext.addEventListener('click', function () { arata(index + 1); });

  // Click pe fundal (nu pe imagine sau butoane) închide.
  box.addEventListener('click', function (e) {
    if (e.target === box) inchide();
  });
})();
