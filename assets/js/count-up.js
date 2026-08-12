/* ==========================================================================
   THE BEAUTY EDUCATION — NUMĂRĂTOARE PE SCROLL
   Componentă reutilizabilă. Se aplică pe orice element cu [data-count].
   --------------------------------------------------------------------------
   Markup așteptat:
     <span class="cifra-num" data-count="7000" data-suffix="+">
       <span class="cifra-fantoma" aria-hidden="true">7.000+</span>
       <span class="cifra-val">7.000+</span>
     </span>

   Fantoma ține lățimea finală, deci numărătoarea nu împinge layout-ul.
   Fără JS, valoarea finală e deja în HTML — nimeni nu vede „0".
   Cu prefers-reduced-motion, animația nu pornește deloc.
   ========================================================================== */
(function () {
  'use strict';

  var els = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
  if (!els.length) return;

  var fmt = function (n) {
    try { return n.toLocaleString('ro-RO'); }   // 7000 → 7.000
    catch (e) { return String(n); }
  };
  var val = function (el) { return el.querySelector('.cifra-val') || el; };

  // Valoarea finală, scrisă corect din start (și pentru cazurile în care nu
  // animăm: reduced-motion, browser fără IntersectionObserver).
  els.forEach(function (el) {
    var t = parseInt(el.getAttribute('data-count'), 10);
    var s = el.getAttribute('data-suffix') || '';
    var ghost = el.querySelector('.cifra-fantoma');
    if (ghost) ghost.textContent = fmt(t) + s;
    val(el).textContent = fmt(t) + s;
  });

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window) || !window.requestAnimationFrame) return;

  var DUR = 1100;
  var ease = function (t) { return 1 - Math.pow(1 - t, 3); };   // easeOutCubic

  function anima(el, intarziere) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var node = val(el);
    var start = null;

    function pas(now) {
      if (start === null) start = now;
      var t = (now - start - intarziere) / DUR;
      if (t < 0) { window.requestAnimationFrame(pas); return; }
      if (t >= 1) { node.textContent = fmt(target) + suffix; return; }
      node.textContent = fmt(Math.round(target * ease(t))) + suffix;
      window.requestAnimationFrame(pas);
    }
    window.requestAnimationFrame(pas);
  }

  // Pornim de la 0 abia când elementele intră în ecran — altfel un vizitator
  // care aterizează direct pe secțiune ar vedea numerele deja terminate.
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      anima(e.target, els.indexOf(e.target) * 80);   // decalaj mic, de la stânga la dreapta
    });
  }, { threshold: 0.4 });

  els.forEach(function (el) {
    val(el).textContent = '0' + (el.getAttribute('data-suffix') || '');
    io.observe(el);
  });
})();
