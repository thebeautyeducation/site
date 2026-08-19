/* ==========================================================================
   THE BEAUTY EDUCATION — PAGINA CURS „MAKEUP ESSENTIALS"
   --------------------------------------------------------------------------
   Două lucruri, ambele progresive (fără JS pagina rămâne funcțională):
     1. FAQ — acordeon cu un singur item deschis, randat din MK_FAQS.
        Array propriu, separat de FAQ-urile celorlalte pagini.
        ►► ÎNTREBĂRILE SE EDITEAZĂ ÎN MK_FAQS, MAI JOS ◄◄
     2. Bara CTA lipicioasă — apare la scroll sub hero, se ascunde când blocul
        de ofertă e pe ecran (ca să nu dublăm CTA-ul). Fără JS, bara nu apare.
   ========================================================================== */
var MK_FAQS = [
  {
    q: 'Când primesc kitul cadou în valoare de 600 lei?',
    a: 'După ce achiziționezi cursul, în termen de 1-3 zile lucrătoare un membru al echipei The Beauty Education te contactează pentru adresa de livrare a kitului TopFace.'
  },
  {
    q: 'Cum pot plăti cursul?',
    a: 'Cu cardul, într-o singură tranșă de 1.200 lei. Prețul include cursul complet și kitul cadou de 16 produse (valoare 600 lei).'
  },
  {
    q: 'Cât timp am acces la curs?',
    a: 'Acces nelimitat. Odată achiziționat, îl poți revedea de oricâte ori ai nevoie, în ritmul tău.'
  },
  {
    q: 'Am nevoie de o aplicație pentru curs?',
    a: 'Nu neapărat. Îți recomandăm însă aplicația de mobil a comunității The Beauty Education, ca să-ți fie mai ușor procesul de învățare.'
  },
  {
    q: 'Pentru cine e cursul?',
    a: 'Pentru pasionate de makeup care vor să înceapă, pentru cele la început de drum care se simt nesigure, și pentru makeup artiste cu experiență care vor să-și diversifice portofoliul (plus produse de 600 lei).'
  },
  {
    q: 'Ce conține kitul cadou?',
    a: '16 produse TopFace în valoare de 600 lei — fond de ten, corector, farduri, rimel, rujuri, creioane, fixator și altele, exact produsele folosite în tutoriale, ca să reproduci fiecare look.'
  }
];

(function () {
  'use strict';

  /* --- 1 · FAQ ------------------------------------------------------------ */
  var lista = document.querySelector('[data-mk-faq]');
  if (lista) {
    MK_FAQS.forEach(function (f, i) {
      var li = document.createElement('li');
      li.className = 'faq-item' + (i === 0 ? ' is-open' : '');
      li.innerHTML =
        '<h3 class="faq-q">' +
          '<button type="button" class="faq-btn" aria-expanded="' + (i === 0) + '" aria-controls="mke-faq-r-' + i + '">' +
            '<span>' + f.q + '</span>' +
            '<svg class="faq-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" ' +
                 'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<path d="M3.5 6 8 10.5 12.5 6"/>' +
            '</svg>' +
          '</button>' +
        '</h3>' +
        '<div class="faq-r" id="mke-faq-r-' + i + '"><div><p>' + f.a + '</p></div></div>';
      lista.appendChild(li);
    });

    var itemi = Array.prototype.slice.call(lista.children);
    lista.addEventListener('click', function (e) {
      var btn = e.target.closest('.faq-btn');
      if (!btn) return;
      var item = btn.closest('.faq-item');
      var deschis = item.classList.contains('is-open');
      itemi.forEach(function (x) {
        x.classList.remove('is-open');
        x.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
      });
      if (!deschis) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce && 'IntersectionObserver' in window) {
      lista.classList.add('faq-anim');
      var ioFaq = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          ioFaq.unobserve(e.target);
          e.target.classList.add('is-in');
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
      itemi.forEach(function (el, i) {
        el.style.transitionDelay = (i % 6) * 60 + 'ms';
        ioFaq.observe(el);
      });
    }
  }

  /* --- 2 · Bara CTA lipicioasă -------------------------------------------- */
  var bara = document.querySelector('[data-sticky-cta]');
  if (!bara) return;

  bara.hidden = false;            // devine controlabilă din CSS (transform)
  var oferta = document.getElementById('oferta');
  var ofertaVizibila = false;

  if ('IntersectionObserver' in window && oferta) {
    var ioOferta = new IntersectionObserver(function (entries) {
      ofertaVizibila = entries[0].isIntersecting;
      actualizeaza();
    }, { threshold: 0 });
    ioOferta.observe(oferta);
  }

  var prag = Math.round(window.innerHeight * 0.9);  // ~sub hero
  var tichet = false;

  function actualizeaza() {
    var subHero = window.scrollY > prag;
    // Arată bara doar când am trecut de hero ȘI blocul de ofertă nu e pe ecran.
    bara.classList.toggle('is-visible', subHero && !ofertaVizibila);
  }

  window.addEventListener('scroll', function () {
    if (tichet) return;
    tichet = true;
    window.requestAnimationFrame(function () {
      actualizeaza();
      tichet = false;
    });
  }, { passive: true });

  window.addEventListener('resize', function () {
    prag = Math.round(window.innerHeight * 0.9);
    actualizeaza();
  }, { passive: true });

  actualizeaza();
})();
