/* ==========================================================================
   THE BEAUTY EDUCATION — PAGINA CURS „ATELIERUL DE BUCLE"
   --------------------------------------------------------------------------
   Două lucruri, ambele progresive (fără JS pagina rămâne funcțională):
     1. FAQ — acordeon cu un singur item deschis, randat din ATELIER_FAQS.
        Copie funcțională a assets/js/faq.js / empiria-faq.js, cu array propriu
        (intenționat separat, ca FAQ-urile celorlalte pagini să rămână neatinse).
        ►► ÎNTREBĂRILE SE EDITEAZĂ ÎN ATELIER_FAQS, MAI JOS ◄◄
     2. Bara CTA lipicioasă — apare la scroll sub hero, se ascunde când blocul
        de ofertă e pe ecran (ca să nu dublăm CTA-ul). Fără JS, bara nu apare.
   ========================================================================== */
var ATELIER_FAQS = [
  {
    q: 'Cât timp am acces la curs?',
    a: 'Pe viață. Cursul rămâne pe contul tău și revii la lecții oricând ai nevoie — nu există un interval în care trebuie să-l termini.'
  },
  {
    q: 'Voucherul de acces expiră?',
    a: 'Nu. Îl poți activa oricând, fără termen-limită. Cumperi acum, începi când ești pregătită.'
  },
  {
    q: 'Când primesc diplomele?',
    a: 'La finalizarea cursului primești două diplome oficiale The Beauty Education: <strong>Participare</strong> și <strong>Expert în Bucle</strong>.'
  },
  {
    q: 'Pentru cine e cursul?',
    a: 'Pentru coafeze, de la începătoare la experimentate, care vor bucle și valuri care rezistă — pe orice tip de păr. Nu ai nevoie de experiență avansată ca să începi.'
  },
  {
    q: 'Ce echipament îmi trebuie?',
    a: 'Instrumentele obișnuite de coafat pe care le folosești deja. În curs înveți exact ce aparat, ce bandă și ce produs alegi pentru fiecare rezultat — nu ai nevoie să cumperi nimic special ca să începi.'
  },
  {
    q: 'Cum accesez cursul după ce plătesc?',
    a: 'Cursul e online, îl parcurgi de pe platformă, în ritmul tău. Ai acces la video-uri, la materiale și la suport în comunitatea Circle, oricând te blochezi.'
  }
];

(function () {
  'use strict';

  /* --- 1 · FAQ ------------------------------------------------------------ */
  var lista = document.querySelector('[data-atelier-faq]');
  if (lista) {
    ATELIER_FAQS.forEach(function (f, i) {
      var li = document.createElement('li');
      li.className = 'faq-item' + (i === 0 ? ' is-open' : '');
      li.innerHTML =
        '<h3 class="faq-q">' +
          '<button type="button" class="faq-btn" aria-expanded="' + (i === 0) + '" aria-controls="adb-faq-r-' + i + '">' +
            '<span>' + f.q + '</span>' +
            '<svg class="faq-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" ' +
                 'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<path d="M3.5 6 8 10.5 12.5 6"/>' +
            '</svg>' +
          '</button>' +
        '</h3>' +
        '<div class="faq-r" id="adb-faq-r-' + i + '"><div><p>' + f.a + '</p></div></div>';
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
