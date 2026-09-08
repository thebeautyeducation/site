/* ==========================================================================
   THE BEAUTY EDUCATION — PAGINA ABONAMENT (abonament.html)
   --------------------------------------------------------------------------
   1. Selectorul de perioadă: radio-urile native fac tot ce contează și fără
      JS; aici doar sincronizăm textul butonului de checkout cu perioada
      aleasă („Continuă cu 12 luni · 1.850 lei”).
   2. FAQ — aceeași mecanică precum comunitate-faq.js (randare din array +
      acordeon cu un singur item deschis), clase .faq-* din faq.css.
   ►► ÎNTREBĂRILE SE EDITEAZĂ ÎN ABONAMENT_FAQS, MAI JOS ◄◄
   ========================================================================== */
var ABONAMENT_FAQS = [
  {
    q: 'Cumpăr o revistă sau acces la comunitate?',
    a: 'Amândouă, într-un singur abonament. Produsul e abonamentul la Revista Coafezelor — publicație lunară cu ISSN — iar accesul complet la comunitatea The Beauty Education (tutoriale, activități, EMPIRIA, programul de loialitate) vine inclus cu el, pe toată durata abonamentului.'
  },
  {
    q: 'Pot renunța oricând?',
    a: 'Da. Abonamentul e recurent, fără perioadă contractuală — îl închizi oricând din cont. Iar dacă te răzgândești imediat după o plată lunară, ai 3 zile să ceri rambursarea la <a href="mailto:contact@thebeautyeducation.com">contact@thebeautyeducation.com</a>.'
  },
  {
    q: 'Ce diferență e între lunar și 12 luni?',
    a: 'Accesul e identic. Diferă prețul pe lună (154 lei la 6 sau 12 luni, față de 185 lei lunar), numărul de plăți și punctele de loialitate primite la plată: 60 la lunar, 200 la 3 luni, 400 la 6 luni și 850 la 12 luni.'
  },
  {
    q: 'Ce se întâmplă cu progresul și punctele mele dacă mă opresc?',
    a: 'Nivelurile EMPIRIA finalizate și nivelul de loialitate rămân pe cont permanent. Punctele disponibile se șterg după 60 de zile de la închiderea abonamentului, dacă nu îl reactivezi. Detalii pe <a href="program-de-loialitate.html">pagina programului de loialitate</a>.'
  },
  {
    q: 'Cursurile Color Mastery și Makeup Essentials sunt incluse?',
    a: 'Nu — sunt cursuri online separate, cu plată unică și acces pe viață. Abonamentul îți aduce însă reducere la ele (5% la Gold, 10% la Diamond) și 500 de puncte de loialitate la fiecare achiziție.'
  },
  {
    q: 'Primesc factură?',
    a: 'Da, automat, la fiecare plată — pe persoană fizică sau pe firmă, dacă îți completezi datele fiscale în profil. Plățile se fac cu cardul, securizat, prin Stripe.'
  }
];

(function () {
  'use strict';

  /* --- 1. Selectorul de perioadă ------------------------------------------ */
  var form = document.querySelector('[data-ab-perioade]');
  var cta = document.querySelector('[data-ab-cta]');
  if (form && cta) {
    var text = cta.querySelector('[data-ab-cta-text]') || cta;
    var sync = function () {
      var ales = form.querySelector('input[name="perioada"]:checked');
      if (!ales) return;
      text.textContent = 'Continuă cu ' + ales.getAttribute('data-nume') + ' · ' + ales.getAttribute('data-pret') + ' lei';
    };
    form.addEventListener('change', sync);
    sync();
  }

  /* --- 2. FAQ -------------------------------------------------------------- */
  var lista = document.querySelector('[data-abonament-faq]');
  if (!lista) return;

  ABONAMENT_FAQS.forEach(function (f, i) {
    var li = document.createElement('li');
    li.className = 'faq-item' + (i === 0 ? ' is-open' : '');
    li.innerHTML =
      '<h3 class="faq-q">' +
        '<button type="button" class="faq-btn" aria-expanded="' + (i === 0) + '" aria-controls="ab-faq-r-' + i + '">' +
          '<span>' + f.q + '</span>' +
          '<svg class="faq-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" ' +
               'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M3.5 6 8 10.5 12.5 6"/>' +
          '</svg>' +
        '</button>' +
      '</h3>' +
      '<div class="faq-r" id="ab-faq-r-' + i + '"><div><p>' + f.a + '</p></div></div>';
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
  if (reduce || !('IntersectionObserver' in window)) return;

  lista.classList.add('faq-anim');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      e.target.classList.add('is-in');
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

  itemi.forEach(function (el, i) {
    el.style.transitionDelay = (i % 5) * 60 + 'ms';
    io.observe(el);
  });
})();
