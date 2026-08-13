/* ==========================================================================
   THE BEAUTY EDUCATION — FAQ pagina COMUNITATE
   --------------------------------------------------------------------------
   Aceeași mecanică precum assets/js/empiria-faq.js (randare din array +
   acordeon cu un singur item deschis), cu propriul array — separat de
   faq.js (homepage) și empiria-faq.js. Reutilizează clasele .faq-* din
   assets/css/faq.css.
   ►► ÎNTREBĂRILE SE EDITEAZĂ ÎN COMUNITATE_FAQS, MAI JOS ◄◄
   ========================================================================== */
var COMUNITATE_FAQS = [
  {
    q: 'E chiar gratuit să intru în comunitate?',
    a: 'Da. Contul e gratuit și rămâne gratuit — nu e o perioadă de probă. Cu el ai acces permanent la zona General (chat, evenimente, Marketplace, Magazinul de Loialitate) și la zona de Resurse.'
  },
  {
    q: 'Ce primesc concret fără abonament?',
    a: 'Toată zona General plus Resursele: Librăria (ghiduri de business, mindset și organizare, interviuri, live-uri despre social media) și în jur de 20 de tutoriale de colorimetrie realizate cu Paul Mitchell și Milkshake.'
  },
  {
    q: 'Dacă îmi fac abonament, pot renunța oricând?',
    a: 'Da, oricând — abonamentul e recurent, fără perioadă contractuală. Iar progresul tău din EMPIRIA nu se pierde: nivelurile finalizate rămân pe cont și te așteaptă dacă revii.'
  },
  {
    q: 'Există aplicație de mobil?',
    a: 'Da. Comunitatea are aplicație de mobil, deci tutorialele, chat-urile și activitățile săptămânale sunt cu tine și în salon, nu doar la laptop.'
  },
  {
    q: 'Cum obțin diplomele The Beauty Education?',
    a: 'Exclusiv prin programul EMPIRIA, disponibil cu abonamentul: 3 niveluri pe specializare, fiecare încheiat cu diplomă, plus diploma supremă EMPIRIA la final — 8 diplome posibile în total, toate verificate manual de traineri. Detalii pe <a href="empiria.html">pagina EMPIRIA</a>.'
  }
];

(function () {
  'use strict';

  var lista = document.querySelector('[data-comunitate-faq]');
  if (!lista) return;

  COMUNITATE_FAQS.forEach(function (f, i) {
    var li = document.createElement('li');
    li.className = 'faq-item' + (i === 0 ? ' is-open' : '');
    li.innerHTML =
      '<h3 class="faq-q">' +
        '<button type="button" class="faq-btn" aria-expanded="' + (i === 0) + '" aria-controls="cmp-faq-r-' + i + '">' +
          '<span>' + f.q + '</span>' +
          '<svg class="faq-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" ' +
               'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M3.5 6 8 10.5 12.5 6"/>' +
          '</svg>' +
        '</button>' +
      '</h3>' +
      '<div class="faq-r" id="cmp-faq-r-' + i + '"><div><p>' + f.a + '</p></div></div>';
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
