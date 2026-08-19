/* ==========================================================================
   THE BEAUTY EDUCATION — PAGINA CURS „COLOR MASTERY"
   --------------------------------------------------------------------------
   Două lucruri, ambele progresive (fără JS pagina rămâne funcțională):
     1. FAQ — acordeon cu un singur item deschis, randat din CM_FAQS.
        Array propriu, separat de FAQ-urile celorlalte pagini.
        ►► ÎNTREBĂRILE SE EDITEAZĂ ÎN CM_FAQS, MAI JOS ◄◄
     2. Bara CTA lipicioasă — apare la scroll sub hero, se ascunde când blocul
        de ofertă e pe ecran (ca să nu dublăm CTA-ul). Fără JS, bara nu apare.
   ========================================================================== */
var CM_FAQS = [
  {
    q: 'Cât timp am acces la curs?',
    a: 'Pe viață. Îl cumperi o dată și ai acces la tot — inclusiv la orice materiale, modificări sau rubrici noi pe care le adăugăm ulterior.'
  },
  {
    q: 'Cum obțin diplomele și certificările?',
    a: 'Primești câte o <strong>diplomă</strong> pentru fiecare modul parcurs — vine cu cursul. <strong>Certificările</strong> specializate (Color Foundations Specialist, Bleach &amp; Tone Specialist, Senior Colorist, Balayage Artist și Master Colorist) le obții la finalul mastermind-urilor de 3-4 săptămâni pe tema respectivă.'
  },
  {
    q: 'Pot plăti în rate?',
    a: 'Da — în 2 rate (1.680 lei) sau în 3 rate (1.890 lei). Plata integrală e 1.390 lei. Cu abonament activ ai <strong>−10%</strong> în plus (codul de reducere se cere în privat). La rate, dacă oprești și apoi reiei plățile, se aplică o taxă de reactivare de 300 lei.'
  },
  {
    q: 'Există garanție?',
    a: 'Da. Dacă parcurgi cu adevărat primul modul — faci exercițiile, participi la minimum 2 întâlniri online, realizezi cele 3 lucrări și obții diploma Color Foundations Specialist — și tot simți că n-ai învățat nimic, îți returnăm 100% banii, fără întrebări. (Exercitarea acestui drept duce la interdicția de a te mai înscrie la curs.)'
  },
  {
    q: 'Am nevoie de experiență avansată?',
    a: 'Nu neapărat. Pornim de la baze naturale și oxidative și urcăm treptat spre decolorări, blond special, corecții și balayage. Contează să fii dispusă să exersezi.'
  },
  {
    q: 'Cum accesez cursul după ce plătesc?',
    a: 'Cursul e online, îl parcurgi de pe platformă, în ritmul tău. Ai acces la video-uri, la Rubrica de Feedback, la întâlnirile live cu Mihaela și la suport în comunitatea Circle.'
  }
];

(function () {
  'use strict';

  /* --- 1 · FAQ ------------------------------------------------------------ */
  var lista = document.querySelector('[data-cm-faq]');
  if (lista) {
    CM_FAQS.forEach(function (f, i) {
      var li = document.createElement('li');
      li.className = 'faq-item' + (i === 0 ? ' is-open' : '');
      li.innerHTML =
        '<h3 class="faq-q">' +
          '<button type="button" class="faq-btn" aria-expanded="' + (i === 0) + '" aria-controls="clm-faq-r-' + i + '">' +
            '<span>' + f.q + '</span>' +
            '<svg class="faq-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" ' +
                 'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<path d="M3.5 6 8 10.5 12.5 6"/>' +
            '</svg>' +
          '</button>' +
        '</h3>' +
        '<div class="faq-r" id="clm-faq-r-' + i + '"><div><p>' + f.a + '</p></div></div>';
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
