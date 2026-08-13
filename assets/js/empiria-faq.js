/* ==========================================================================
   THE BEAUTY EDUCATION — FAQ pagina EMPIRIA
   --------------------------------------------------------------------------
   Copie funcțională a comportamentului din assets/js/faq.js (randare din
   array + acordeon cu un singur item deschis), cu propriul array —
   INTENȚIONAT separat de faq.js, ca FAQ-ul de pe homepage să rămână
   neatins. Reutilizează integral clasele .faq-* din assets/css/faq.css.
   ►► ÎNTREBĂRILE SE EDITEAZĂ ÎN EMPIRIA_FAQS, MAI JOS ◄◄
   ========================================================================== */
var EMPIRIA_FAQS = [
  {
    q: 'Există un termen-limită pentru parcurgerea EMPIRIA?',
    a: 'Nu. Parcurgi nivelurile în ritmul tău — nu există un interval în care trebuie să termini. EMPIRIA nu se grăbește, se construiește.'
  },
  {
    q: 'Ce se întâmplă cu progresul meu dacă îmi întrerup abonamentul?',
    a: 'Nimic din ce ai finalizat nu se pierde. Nivelurile obținute rămân pe cont — reactivezi abonamentul exact de unde ai rămas, fără să reiei ce ai terminat deja.'
  },
  {
    q: 'Am nevoie de abonament pentru fiecare nivel?',
    a: 'Da — fiecare nivel necesită abonament activ, plus finalizarea nivelului anterior. Un singur abonament deschide toată platforma, în ambele specializări.<table class="tbe-table eph-faq-tabel"><thead><tr><th scope="col">Nivel</th><th scope="col">Condiție de acces</th></tr></thead><tbody><tr><td>Fundamentals</td><td>Abonament activ</td></tr><tr><td>Essentials</td><td>Abonament activ + Fundamentals finalizat</td></tr><tr><td>Mastery</td><td>Abonament activ + Essentials finalizat</td></tr></tbody></table>'
  },
  {
    q: 'Pot sări direct la un nivel mai avansat?',
    a: 'Nu. Nivelurile sunt strict secvențiale — Fundamentals, apoi Essentials, apoi Mastery. Accesul la nivelul următor e blocat până finalizezi complet pe cel curent, indiferent de experiența ta anterioară.'
  },
  {
    q: 'Cine îmi verifică lucrările?',
    a: 'Echipa de traineri The Beauty Education, manual, pe fiecare lucrare trimisă — nu un algoritm. Criteriile sunt aceleași la orice nivel: Formă, Linii, Finisaj.'
  }
];

(function () {
  'use strict';

  var lista = document.querySelector('[data-empiria-faq]');
  if (!lista) return;

  EMPIRIA_FAQS.forEach(function (f, i) {
    var li = document.createElement('li');
    li.className = 'faq-item' + (i === 0 ? ' is-open' : '');
    li.innerHTML =
      '<h3 class="faq-q">' +
        '<button type="button" class="faq-btn" aria-expanded="' + (i === 0) + '" aria-controls="eph-faq-r-' + i + '">' +
          '<span>' + f.q + '</span>' +
          '<svg class="faq-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" ' +
               'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M3.5 6 8 10.5 12.5 6"/>' +
          '</svg>' +
        '</button>' +
      '</h3>' +
      '<div class="faq-r" id="eph-faq-r-' + i + '"><div><p>' + f.a + '</p></div></div>';
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
