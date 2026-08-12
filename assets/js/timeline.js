/* ==========================================================================
   THE BEAUTY EDUCATION — TIMELINE · comportament
   Două componente independente. Fiecare funcționează și singură.
     [data-tl-acordeon] — un rând deschis o dată
     [data-tl-rail]     — scroll orizontal cu snap; JS doar pentru butoane
                          și segmentul activ (scroll-ul e nativ)
   ========================================================================== */
(function () {
  'use strict';

  /* ----------------------------------------------------------------- FIRUL
     Leagă cardurile mozaicului în ordine cronologică. Traseul se calculează
     din pozițiile reale, deci merge la orice lățime și la orice aranjare a
     grilei (12 coloane, 2 coloane, 1 coloană).

     Două tipuri de segment:
       - același rând  → linie dreaptă prin gap-ul dintre carduri
       - rând nou      → întoarcere: curbă din marginea de jos a cardului
                         până în marginea de sus a următorului
     Întoarcerile sunt lungi (traversează toată lățimea) pentru că ordinea de
     lectură e stânga→dreapta pe fiecare rând. Le desenăm ca bucle line, nu ca
     diagonale rupte, ca să arate intenționate.                                */
  var NS = 'http://www.w3.org/2000/svg';

  Array.prototype.forEach.call(document.querySelectorAll('[data-tl-fir]'), function (wrap) {
    var lista = wrap.querySelector('.tl-mozaic');
    if (!lista) return;
    var carduri = Array.prototype.slice.call(lista.children);
    if (carduri.length < 2) return;

    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'tl-fir');
    svg.setAttribute('aria-hidden', 'true');
    var linie = document.createElementNS(NS, 'path');
    linie.setAttribute('class', 'tl-fir-linie');
    var start = document.createElementNS(NS, 'circle');
    start.setAttribute('class', 'tl-fir-capat');
    start.setAttribute('r', '3.5');
    var final = document.createElementNS(NS, 'circle');
    final.setAttribute('class', 'tl-fir-capat');
    final.setAttribute('r', '3.5');
    svg.appendChild(linie);
    svg.appendChild(start);
    svg.appendChild(final);
    wrap.insertBefore(svg, wrap.firstChild);

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var desenat = false;

    function construieste() {
      var box = wrap.getBoundingClientRect();
      if (!box.width) return null;
      var rel = function (el) {
        var r = el.getBoundingClientRect();
        return { left: r.left - box.left, right: r.right - box.left,
                 top: r.top - box.top, bottom: r.bottom - box.top, w: r.width };
      };

      var d = '', primul = null, ultimul = null;
      for (var i = 0; i < carduri.length - 1; i++) {
        var a = rel(carduri[i]), b = rel(carduri[i + 1]);
        var acelasiRand = Math.abs(a.top - b.top) < 8;
        var p1, p2;

        if (acelasiRand) {
          var y = (Math.max(a.top, b.top) + Math.min(a.bottom, b.bottom)) / 2;
          p1 = [a.right, y]; p2 = [b.left, y];
          d += 'M ' + p1[0] + ' ' + p1[1] + ' L ' + p2[0] + ' ' + p2[1] + ' ';
        } else {
          // Ieșim prin dreptul centrului cardului și intrăm la fel, cu punctele
          // de control la mijlocul gap-ului → curbă simetrică, fără colțuri.
          var x1 = a.left + a.w * 0.5, x2 = b.left + b.w * 0.5;
          var mid = (a.bottom + b.top) / 2;
          p1 = [x1, a.bottom]; p2 = [x2, b.top];
          d += 'M ' + p1[0] + ' ' + p1[1] +
               ' C ' + p1[0] + ' ' + mid + ', ' + p2[0] + ' ' + mid + ', ' + p2[0] + ' ' + p2[1] + ' ';
        }
        if (!primul) primul = p1;
        ultimul = p2;
      }

      linie.setAttribute('d', d.trim());
      start.setAttribute('cx', primul[0]); start.setAttribute('cy', primul[1]);
      final.setAttribute('cx', ultimul[0]); final.setAttribute('cy', ultimul[1]);
      return linie.getTotalLength ? linie.getTotalLength() : 0;
    }

    function deseneaza() {
      var len = construieste();
      if (!len || desenat) return;
      desenat = true;
      if (reduce) return;   // traseul rămâne desenat complet, fără animație
      linie.style.transition = 'none';
      linie.style.strokeDasharray = len;
      linie.style.strokeDashoffset = len;
      start.style.opacity = '0';
      final.style.opacity = '0';
      // Un cadru de pauză, altfel browserul comasează stările și nu animează.
      window.requestAnimationFrame(function () {
        linie.style.transition = 'stroke-dashoffset 1500ms cubic-bezier(.2,.8,.2,1)';
        linie.style.strokeDashoffset = '0';
        start.style.transition = 'opacity 300ms ease 120ms';
        final.style.transition = 'opacity 300ms ease 1350ms';
        start.style.opacity = '1';
        final.style.opacity = '1';
      });
    }

    construieste();

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          deseneaza();
        });
      }, { threshold: 0.15 });
      io.observe(wrap);
    } else {
      deseneaza();
    }

    // La redimensionare recalculăm traseul. Dacă animația s-a consumat deja,
    // dasharray-ul vechi ar tăia noul traseu → îl scoatem.
    var t;
    window.addEventListener('resize', function () {
      clearTimeout(t);
      t = setTimeout(function () {
        var len = construieste();
        if (desenat && !reduce && len) {
          linie.style.transition = 'none';
          linie.style.strokeDasharray = 'none';
          linie.style.strokeDashoffset = '0';
        }
      }, 150);
    });
  });

  /* ------------------------------------------------------------- ACORDEON */
  Array.prototype.forEach.call(document.querySelectorAll('[data-tl-acordeon]'), function (lista) {
    var itemi = Array.prototype.slice.call(lista.querySelectorAll('.tl-ac-item'));

    function deschide(item) {
      itemi.forEach(function (i) {
        var activ = i === item;
        i.classList.toggle('is-open', activ);
        var btn = i.querySelector('.tl-ac-cap');
        if (btn) btn.setAttribute('aria-expanded', activ ? 'true' : 'false');
      });
    }

    itemi.forEach(function (item) {
      var btn = item.querySelector('.tl-ac-cap');
      if (!btn) return;
      btn.addEventListener('click', function () {
        // Un rând deschis o dată. Click pe cel deschis îl lasă deschis:
        // un acordeon complet închis arată ca o secțiune goală.
        if (!item.classList.contains('is-open')) deschide(item);
      });
    });

    // Deschis inițial: rândul marcat, altfel ultimul (anul curent).
    deschide(lista.querySelector('.tl-ac-item.is-open') || itemi[itemi.length - 1]);
  });

  /* ----------------------------------------------------------------- RAIL */
  Array.prototype.forEach.call(document.querySelectorAll('[data-tl-rail]'), function (wrap) {
    var rail = wrap.querySelector('.tl-rail');
    var itemi = Array.prototype.slice.call(rail.children);
    var segmente = Array.prototype.slice.call(wrap.querySelectorAll('.tl-seg'));
    var prev = wrap.querySelector('[data-tl-prev]');
    var next = wrap.querySelector('[data-tl-next]');
    if (!itemi.length) return;

    var pas = function () {
      // Lățimea unui card + gap-ul. Citită din DOM, nu presupusă: se schimbă
      // cu breakpoint-ul (clamp) și cu lățimea ferestrei.
      if (itemi.length < 2) return itemi[0].getBoundingClientRect().width;
      return itemi[1].getBoundingClientRect().left - itemi[0].getBoundingClientRect().left;
    };

    function activ() {
      return Math.round(rail.scrollLeft / pas());
    }

    function actualizeaza() {
      // Cât timp rail-ul e ascuns (display:none), toate măsurătorile ies 0 și
      // am dezactiva butoanele degeaba. Ieșim și așteptăm să devină vizibil —
      // pagina de comparare emite un `resize` când comută varianta.
      if (!rail.offsetWidth) return;

      var i = activ();
      segmente.forEach(function (s, k) { s.classList.toggle('is-activ', k === i); });
      var maxScroll = rail.scrollWidth - rail.clientWidth;
      if (prev) prev.disabled = rail.scrollLeft <= 1;
      if (next) next.disabled = rail.scrollLeft >= maxScroll - 1;
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
  });
})();
