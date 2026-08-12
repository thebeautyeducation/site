/* ==========================================================================
   THE BEAUTY EDUCATION — FAQ
   --------------------------------------------------------------------------
   ►► ÎNTREBĂRILE ȘI RĂSPUNSURILE SE EDITEAZĂ AICI ◄◄
   Constanta FAQS e singura sursă a acordeonului. Răspunsurile sunt
   placeholdere (de rafinat).
   ATENȚIE la primul răspuns: „mai multe niveluri de abonament" contrazice
   dosarul oficial (CLAUDE.md: există UN SINGUR tip de abonament) — de
   corectat la rafinare.
   ========================================================================== */
var FAQS = [
  {
    q: 'Cât costă abonamentul?',
    a: 'Avem mai multe niveluri de abonament, în funcție de cât de mult vrei să accesezi — de la fundamente până la programul complet EMPIRIA. Detaliile complete le găsești pe pagina de abonamente.'
  },
  {
    q: 'Trebuie să am experiență ca să mă înscriu?',
    a: 'Nu. Comunitatea e construită pentru toate nivelurile — de la începătoare care vor un drum clar, până la profesioniste care caută să se perfecționeze.'
  },
  {
    q: 'Cum funcționează programul EMPIRIA?',
    a: 'EMPIRIA e un program structurat pe trei niveluri — Fundamentals, Essentials și Mastery — în două specializări: Coafuri și Colorimetrie. Parcurgi pas cu pas și primești diplome la fiecare nivel.'
  },
  {
    q: 'Pot accesa cursurile de pe telefon?',
    a: 'Da. Ai acces la comunitate și la cursuri direct din aplicația mobilă, oricând și de oriunde.'
  },
  {
    q: 'Ce este Harta Coafezelor?',
    a: 'E un director public unde clientele te pot găsi după oraș. Îți creezi un profil gratuit și apari pe hartă pentru clientele din zona ta.'
  }
];

(function () {
  'use strict';

  var lista = document.querySelector('[data-faq]');
  if (!lista) return;

  /* ------------------------------------------------------------- randare */
  FAQS.forEach(function (f, i) {
    var li = document.createElement('li');
    li.className = 'faq-item' + (i === 0 ? ' is-open' : '');   // primul deschis
    li.innerHTML =
      '<h3 class="faq-q">' +
        '<button type="button" class="faq-btn" aria-expanded="' + (i === 0) + '" aria-controls="faq-r-' + i + '">' +
          '<span>' + f.q + '</span>' +
          '<svg class="faq-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" ' +
               'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M3.5 6 8 10.5 12.5 6"/>' +
          '</svg>' +
        '</button>' +
      '</h3>' +
      '<div class="faq-r" id="faq-r-' + i + '"><div><p>' + f.a + '</p></div></div>';
    lista.appendChild(li);
  });

  var itemi = Array.prototype.slice.call(lista.children);

  /* --------------------------------------------------------- comportament */
  // Un singur item deschis. Click pe cel deschis îl închide — la FAQ,
  // „totul închis" e o stare legitimă.
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

  /* ------------------------------------------------------ intrare pe scroll */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  lista.classList.add('faq-anim');   // abia acum itemele pornesc ascunse
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
