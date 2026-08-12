# Site TBE — fundația

Prototip static, fidel la pixel, gândit ca **referință pentru replicarea în WordPress**.
Se deschide cu dublu-click pe `index.html`. Fără build, fără server, fără internet.

**Pasul 1 (acesta):** design system global + navbar + footer + hero gol.
Nu există încă nicio secțiune de conținut — asta e intenționat.

---

## Ce e construit

Totul e în [`index.html`](index.html) — navbar, hero, „Povestea noastră", footer.

| Zonă | Stare |
|---|---|
| Design system global (tokeni, tipografie, componente) | ✅ preluat din `brand/design-system`, cu override-urile de formă ale site-ului |
| Navbar (transparent → solid la scroll, dropdown, hamburger) | ✅ |
| Hero — varianta 3, cu fotografia comunității | ✅ în `index.html` |
| Povestea noastră — mozaic cu fir + bandă de cifre | ✅ în `index.html` |
| Comunitatea ta — bento cu fotografii, pe bandă bej | ✅ în `index.html` |
| Problema — moment de reflecție pe charcoal, citat semnat + CTA | ✅ în `index.html` |
| Empiria — diplomă A4 + grilă în oglindă, pe crem | ✅ în `index.html` · **lorem la „2 specializări" și „3 niveluri", poza diplomei lipsește** |
| Galerie „Dinăuntru" — masonry pe alb | ✅ în `index.html` · **poze provizorii** |
| Program de loialitate — intro + 2 carduri + 4 niveluri, pe crem | ✅ în `index.html` · **valorile nivelurilor în `LEVELS`, loialitate.js** |
| Harta Coafezelor — mock din componente DS + statistici, pe bandă bej | ✅ în `index.html` · **date demonstrative pe cardul de coafeză** |
| Mărturii — bandă full-bleed cu carduri portret | ✅ în `index.html` · **⚠ toate cele 5 testimoniale sunt DEMO — obligatoriu de înlocuit cu citate reale înainte de lansare** |
| FAQ — antet fix + acordeon, pe alb | ✅ în `index.html` · **răspunsurile sunt placeholder, în `FAQS` (faq.js)** |
| CTA final — card magenta cu gradient + statistici și discipline | ✅ în `index.html` |
| Blog — antet pe două coloane + 2 carduri orizontale, pe alb | ✅ în `index.html` · **articole DEMO; în WordPress devine loop peste ultimele postări** |
| Footer (4 coloane, date firmă, newsletter, social, plăți, bara legală) | ✅ |
| Secțiuni următoare | ⬜ |

### Pagini de lucru (nu fac parte din site)
Rămân ca referință pentru deciziile luate. Se pot șterge oricând.

| Fișier | Ce conține |
|---|---|
| [`hero-variante.html`](hero-variante.html) | cele 3 variante de hero · **aleasă: 3** |
| [`timeline-variante.html`](timeline-variante.html) | cele 3 direcții de timeline · **aleasă: mozaic cu fir** |
| [`sectiune-povestea.html`](sectiune-povestea.html) | secțiunea izolată, cu bandă de scroll deasupra ca să vezi firul desenându-se |
| [`comunitate-variante.html`](comunitate-variante.html) | cele 3 aranjări pentru „Comunitatea ta" · **de ales** |

Variantele nealese trăiesc încă în `hero.css` și `timeline.css`, comentate ca atare. La portarea în
WordPress se pot tăia: din `hero.css` blocurile `.hero.is-v1` și `.hero.is-v2`, din `timeline.css`
blocurile `.tl-acordeon-*` și `.tl-rail-*` plus jumătatea corespunzătoare din `timeline.js`.

### Footer — cele trei registre
Footer-ul separă deliberat trei tipuri de informație, de sus în jos:
1. **Grila de navigare** (4 coloane) — brand + date firmă · Navigare · Mai mult · Newsletter și social.
2. **Rândul de încredere** — marca Stripe pe pilulă albă + „Plăți securizate" la stânga, ANPC și SOL
   la dreapta. Stau împreună pentru că răspund aceleiași întrebări: *pot avea încredere să plătesc aici?*
3. **Bara de copyright** — © și cele trei documente legale.

Datele firmei (denumire, CUI, Reg. Com., adresă) stau în coloana de brand, sub descriere: obligatorii
legal, deci lizibile (contrast 7,2:1), dar în registru de caption cu cifre tabulare, ca să nu concureze
cu navigarea. Pilula albă din jurul mărcii Stripe e singurul loc din site unde o identitate străină își
păstrează culorile proprii — un badge de plată recunoscut instant valorează mai mult decât coerența cromatică.

---

## Structura

```
site/
├── index.html                      ← pagina; navbar + hero placeholder + footer
├── assets/
│   ├── css/
│   │   ├── tokens.css              ← COPIE din design system (nu edita)
│   │   ├── components.css          ← COPIE din design system (nu edita)
│   │   └── site.css                ← forma site-ului + navbar/hero/footer
│   ├── js/site.js                  ← scroll, dropdown, sertar mobil (vanilla, 0 dependențe)
│   ├── fonturi/                    ← 4 fonturi variable + licența OFL
│   └── logo/                       ← logo-uri TĂIATE (vezi mai jos)
└── README.md
```

**Ordinea de încărcare a CSS-ului nu e opțională:** `tokens.css` → `components.css` → `site.css`.
`site.css` funcționează prin rescrierea tokenilor pe care componentele îi citesc deja. Dacă ajunge
înaintea lor, nu are ce să rescrie.

`tokens.css` și `components.css` sunt copii. Se modifică în `brand/design-system/` și se re-copiază —
nu se editează aici. Singura diferență față de original: căile `@font-face` (`../fonturi/` în loc de
`../assets/fonturi/`).

---

## Logo — de ce fișiere noi

Cele 9 SVG-uri din design system au pânză pătrată **2000×2000**, inclusiv varianta „orizontal".
Măsurat: conținutul real ocupă **1660,71 × 443,54**, cu **778 unități goale sus și 778 jos** —
78% din înălțime era aer. De aici impresia de logo mic și dezlipit de navbar.

Fișierele din `assets/logo/` au același desen, dar `viewBox="169.66 778.23 1660.71 443.54"` —
**geometria nu a fost atinsă, s-a schimbat doar fereastra de decupaj.** Raport final **3,744:1**,
deci înălțimea comandă totul: `height: 40px` → 149,8px lățime, fără padding parazit.

Bounding box-ul e calculat prin eșantionare Bézier pe toate cele 27 de trasee, nu estimat din ochi.

| Fișier | Unde se folosește |
|---|---|
| `tbe-orizontal-alb.svg` | navbar transparent (peste hero), footer |
| `tbe-orizontal-color.svg` | navbar solid (după scroll) |
| `tbe-orizontal-negru.svg` | rezervă pentru print / fundal deschis |
| `tbe-icon-color.svg` | favicon |

### Marca Stripe — de unde vine

`assets/logo/stripe.png` — **marca oficială Stripe, extrasă din factura Stripe a firmei**
(`Stripe Tax Invoice 3KTOSRTK-2026-04.pdf`). În PDF logo-ul e raster: un strat JPEG plus o mască
de transparență `FlateDecode`/`DeviceGray` 177×75. Masca e exact forma literelor, deci din ea s-a
construit un PNG RGBA curat, tăiat pe conținut (175×75) și colorat în **violetul oficial Stripe
`#635BFF`** — varianta canonică pe fundal alb. Afișat la 18px înălțime = **4,2x supraeșantionare**,
deci arată clar și pe ecran retina.

Nu am desenat marca de mână și nu am aproximat-o: pentru un logo străin, „aproape corect" e mai rău
decât deloc. Dacă vrei totuși vector, descarcă SVG-ul oficial de la
[stripe.com/newsroom/brand-assets](https://stripe.com/newsroom/brand-assets) și înlocuiește fișierul —
`.site-trust-badge img` dimensionează pe înălțime, deci nu trebuie schimbat nimic în CSS.

---

## Specificația de formă (implementată)

| | Valoare | Token |
|---|---|---|
| Carduri, imagini | 20px | `--tbe-radius-card`, `--tbe-radius-media` |
| Butoane | 999px (pill) | `--site-radius-btn` |
| Inputuri | 12px | `--tbe-radius-control` |
| Umbră card | `0 20px 50px -12px rgba(26,20,22,.12)` | `--site-shadow-card` |
| Umbră card hover | `0 28px 60px -12px rgba(26,20,22,.18)` | `--site-shadow-card-hover` |
| Spațiere | scară pe 8px | `--s-1` … `--s-16` (8 → 128px) |
| Padding secțiuni | 128 / 80 / 56px | `--site-section-y` |
| Lățime conținut | 1200px, centrat | `--container` |
| Înălțime navbar | 88 / 72 / 64px | `--site-nav-h` |

Tokenii DS `--shadow-xs…xl` au fost remapați la variante difuze, ca nicio componentă moștenită
să nu mai poată produce o umbră „hard". Nu există drop-shadow dur nicăieri în site.

Praguri: **1024px** → tabletă + hamburger · **640px** → mobil.

---

## Portarea în WordPress

### 1 · Fișierele
Copiază `assets/` în temă (child theme, ideal). Apoi în `functions.php`:

```php
add_action('wp_enqueue_scripts', function () {
    $u = get_stylesheet_directory_uri() . '/assets';
    $v = wp_get_theme()->get('Version');

    wp_enqueue_style('tbe-tokens',     "$u/css/tokens.css", [], $v);
    wp_enqueue_style('tbe-components', "$u/css/components.css", ['tbe-tokens'], $v);
    wp_enqueue_style('tbe-site',       "$u/css/site.css", ['tbe-components'], $v);

    wp_enqueue_script('tbe-site', "$u/js/site.js", [], $v, true);
});
```

Dependențele (`['tbe-tokens']`, `['tbe-components']`) sunt cele care garantează ordinea. Nu le omite.

### 2 · Markup-ul
| Din prototip | În WordPress |
|---|---|
| `<header class="site-nav">` + sertarul | `header.php` (sau template part „header") |
| `<footer class="site-footer">` | `footer.php` |
| `<section class="site-hero">` | secțiune în șablonul paginii de start |
| `<html lang="ro" data-theme="light">` | `language_attributes()` + `data-theme="light"` — **obligatoriu**, altfel design system-ul comută pe dark din preferința sistemului |

Meniurile pot rămâne HTML fix (5 iteme care se schimbă rar) sau pot veni din `wp_nav_menu()`.
Dacă folosești `wp_nav_menu()`, ai nevoie de un Walker care emită exact clasele
`site-nav-item` / `site-nav-link` / `site-nav-has-sub` / `site-nav-sub` și atributul
`data-site-dropdown` pe itemul părinte — JS-ul și CSS-ul se leagă de ele.

### 3 · Cele două variante de navbar
- **Pagină cu hero:** `<body class="site-has-hero">` + `<header class="site-nav">`
  → navbar transparent peste hero, devine solid după 24px de scroll.
- **Pagină fără hero:** body fără clasă + `<header class="site-nav is-locked">`
  → navbar solid din start, iar `body` primește automat `padding-top` cât navbar-ul.

### 4 · De evitat
Constructoarele (Elementor, Bricks) își impun propriile reset-uri, containere și breakpoint-uri.
Dacă navbar-ul și footer-ul se construiesc în builder și nu ca template parts, forma se pierde
în detalii — mai ales umbrele difuze și tranziția navbar-ului. Recomandarea: header/footer în cod,
conținutul paginilor în builder.

---

## De completat

| Ce | Unde |
|---|---|
| Link-urile reale de social (Instagram, Facebook, TikTok, YouTube) | `index.html`, `.site-social` — momentan `#` |
| URL-ul exact de înscriere pentru „Alătură-te comunității" | acum duce la `ro.thebeautyeducation.com` |
| Confirmare domeniu magazin (presupus `beautifier.ro`) | navbar + footer |
| **Numărul de traineri** — în hero scrie „7 traineri", pentru că tabelul din `CLAUDE.md` listează 7 nume (Adriana, Mihaela, Veronica, Cosmina, Larisa, Viorica, Alina). Briefingul cerea 6. De confirmat care e corect. | `hero-variante.html`, toate variantele |
| **Decizie pe link-ul SOL** — platforma europeană ODR (`ec.europa.eu/consumers/odr`) a fost desființată în iulie 2025, odată cu abrogarea Regulamentului 524/2013. Eticheta „SOL" a rămas obișnuință pe site-urile românești, dar link-ul duce spre un serviciu închis. Variante: îl scoți, sau îl redirecționezi către pagina SAL a ANPC. | `.site-trust-legal` |
| Paginile interne: `/empiria`, `/cursuri-online`, `/cursuri-fizice`, `/revista`, `/blog`, `/program-de-loialitate`, `/contact`, cele legale | nu există încă |
| Acțiunea formularului de newsletter | `<form action="#">` |

## Hero — 3 variante de comparat

Deschide [`hero-variante.html`](hero-variante.html). Comuți cu butoanele de jos sau cu **tastele 1 / 2 / 3**.
Navbar-ul și footer-ul sunt cele reale, ca să judeci hero-ul în context. Fișierul e schelă de lucru:
după ce alegi, varianta intră în `index.html`, iar fișierul ăsta și blocul „schelă de comparare" din
`hero.css` se șterg.

| # | Layout | Unghi de text | Ce face cu poza |
|---|---|---|---|
| 1 | Centrat, bloc unic, dovezi pe un rând | „Meseria asta nu se învață singură" — comunitate | Scrim aproape uniform (0,56–0,64): mulțimea se vede peste tot, dar estompată |
| 2 | Jos-stânga, coloană îngustă, dovezi pe două rânduri | „De la «știu cum se face» la «pot să o fac»" — Empiria | Scrim diagonal: colțul textului la 0,76–0,86, dreapta sălii rămâne descoperită |
| 3 | Bloc jos centrat + bară de dovezi lipită de margine | „Cea mai mare comunitate de coafeze din România" — scală | Jumătatea de sus rămâne curată, toate fețele se văd; overlay tare doar jos |

Layout-ul și textul sunt independente — poți lua structura din una și textul din alta.

### Fotografia
`poze/Homepage_hero.JPG` (6912×4608, 5,4 MB) e prea grea pentru un hero. În `assets/poze/` intră trei
variante redimensionate, servite prin `srcset`:

| Fișier | Dimensiune | Greutate | Când se folosește |
|---|---|---|---|
| `hero-comunitate-1000.jpg` | 1000×667 | 143 KB | mobil 1x |
| `hero-comunitate-1600.jpg` | 1600×1067 | 322 KB | desktop 1x |
| `hero-comunitate-2400.jpg` | 2400×1600 | 641 KB | desktop retina |

Redimensionate cu System.Drawing (bicubic de calitate înaltă), q72–76. În WordPress, un plugin de
imagini le va converti în WebP/AVIF și mai taie ~40%.

**Cropul pe mobil e compromisul care rămâne.** Poza e 3:2 orizontală; pe un ecran portret,
`object-fit: cover` păstrează doar banda centrală (~34% din lățime) — grupul din mijloc cu buchetul.
Funcționează, dar dacă vrei tot grupul și pe telefon, e nevoie de un crop portret separat, servit cu
`<picture>` + `media`.

### De ce arată scrim-urile așa — măsurat, nu estimat
Fotografia are luminanță foarte neuniformă: mediană 0,05–0,12 (sală închisă) dar ținute aproape albe,
maxim RGB(255,226,212). Am măsurat pe pixeli, în cropul real de desktop, procentul care cade sub 4,5:1
pentru text alb: **alpha 0,30 → 13,0% · 0,40 → 3,6% · 0,50 → 0,1% · 0,60 → 0%**. De aici pragul de
**0,55** și gradientele care sunt tari exact unde stă textul și slabe unde se vede lumea. Detaliile și
tabelul complet sunt în comentariul din capul lui [`hero.css`](assets/css/hero.css).

Verificarea a prins trei lucruri pe care ochiul le-ar fi ratat: kickerul cădea sub prag în V1 (0,50) și
V3 (0,545) pentru că e elementul cel mai de sus, deci primește cel mai puțin overlay; și **navbar-ul alb
nu avea contrast peste vitraliul cupolei** — banda lui are mediana 0,045 dar maximul 0,969, exact în
centru, sub link-uri. De aici scrimul de sus (300px) plus o umbră de text discretă pe navbar-ul
transparent, care dispare când devine solid.

## Secțiunea „Povestea noastră" (izolată)

[`sectiune-povestea.html`](sectiune-povestea.html) — pagină de lucru, nelegată în site.
Fișiere: [`assets/css/povestea.css`](assets/css/povestea.css) + [`assets/js/count-up.js`](assets/js/count-up.js).

**Timeline ales: MOZAIC CU FIR.** Secțiunea completă e în
[`sectiune-povestea.html`](sectiune-povestea.html). Celelalte două direcții rămân în
[`timeline-variante.html`](timeline-variante.html) (taste 1 / 2 / 3) pentru referință.
Fișiere: [`assets/css/timeline.css`](assets/css/timeline.css) + [`assets/js/timeline.js`](assets/js/timeline.js).

### Firul
Leagă cardurile în ordine cronologică și **se desenează pe scroll** — de aici senzația de călătorie.
Traseul e calculat din pozițiile reale ale cardurilor (nu desenat fix), deci merge la 12 coloane,
la 2 și la 1. Două tipuri de segment:

- **același rând** → linie dreaptă de 24px prin gap-ul dintre carduri
- **rând nou** → întoarcere: 483px și 725px de traversare în 56px de gap vertical

Întoarcerile sunt lungi pentru că lectura merge stânga→dreapta pe fiecare rând — firul face exact ce
face ochiul la capăt de rând. Ca să nu arate ca o diagonală rătăcită, punctele de control ale curbei
stau direct sub/deasupra capetelor: **tangenta e verticală la ambele capete și orizontală la mijloc**,
deci forma e de cablu care coboară, traversează și urcă. Curba rămâne matematic între marginea de jos
a unui card și marginea de sus a următorului, deci nu atinge niciodată cardurile.

Două puncte mauve marcează capetele: începutul (2020) și prezentul (2026). Fără JS firul nu apare, iar
mozaicul rămâne întreg. Cu `prefers-reduced-motion` firul e desenat complet, fără animație.

Prima versiune de timeline (index vertical cu spină, clasele `.cronica-*`) a fost respinsă ca
plictisitoare și **ștearsă** din `povestea.css`. Ce s-a păstrat din ea: **un titlu pentru fiecare an +
realizările ca badges**.

| # | Model de interacțiune | Layout | 2026 |
|---|---|---|---|
| 1 | Niciunul — totul vizibil deodată | Mozaic asimetric (5/7 · 7/5 · 4/4/4), carduri cu umbră difuză | Card charcoal — singurul bloc închis din secțiune |
| 2 | Dezvăluire progresivă — un an deschis | Coloană de 7 ani; deschis apare titlul + badges | Deschis din start, linia devine magenta |
| 3 | Navigare orizontală cu snap | Carduri egale în rail, segmente de progres + butoane | Linie magenta sus (inversarea ar rupe ritmul) |

Toate trei au aceleași badge-uri de discipline („Coafuri", „+ Makeup", „+ Tunsoare", „+ Colorimetrie"),
ca să se vadă curriculumul crescând. La rail, scroll-ul e nativ — funcționează și cu JS oprit.

**Antetul, reparat.** Titlul ieșea pe 3 rânduri și leadul pe 4 din cauza unei greșeli: `max-width: 42ch`
pe antet, dar `ch` se calculează în fontul elementului, iar antetul moștenește Jost 16px, unde
1ch = 9,60px — deci 403px, nu ~700 cum intenționam. Măsurat pe metricile reale ale fonturilor (parsate
din `hmtx`/`cmap`), la 720px titlul are 631px, adică **un rând**, iar leadul **două** (703 + 375px).
720px la 18px Jost ≈ 67 caractere, exact `--measure` din design system.

**Ierarhia de culoare:** anii și titlurile charcoal (informație), accentul „acum" și etichetele mauve
(voce editorială), iar **magenta doar pe cifrele mari** — singurul moment de impact, și singura folosire
pe care design system-ul o sancționează deja explicit pentru numere (`.tbe-stat-value`).

**Numărătoarea** pornește când banda intră în ecran, nu la încărcare. Fiecare cifră are o „fantomă"
invizibilă cu valoarea finală care ține lățimea celulei — altfel fiecare cifră în plus ar împinge
layout-ul. Fără JS, valoarea finală e deja în HTML. Cu `prefers-reduced-motion`, animația nu pornește.
`toLocaleString('ro-RO')` dă separatorul corect (7.000, nu 7,000) — verificat în browser.

### Cifrele — două nepotriviri cu dosarul oficial
Am folosit cifrele din briefing, dar nu se potrivesc cu `CLAUDE.md`, care e declarat sursă unică de adevăr:

| În secțiune | În `CLAUDE.md` |
|---|---|
| 430+ ore conținut educațional | ~400 ore |
| 100+ cursuri fizice | 70+ cursuri fizice (2020–2026) |

Restul se potrivesc (7.000+ ≈ 7.120 în baza de date · 3.600+ ≈ 3.618 conturi active · 250+ tutoriale).
De decis care set e corect și de aliniat celălalt document.

## Secțiunea „Problema" (De ce existăm)

Charcoal plin ([`assets/css/problema.css`](assets/css/problema.css)), **centrat**, coloană de 680px pe
axul paginii (prima versiune era aliniată stânga, dar golul din dreapta domina — schimbat la cerere).
Ruptura de ritm față de bento-ul de deasupra **e** designul: fără fotografii, fără carduri, doar text.
Citatul („Talentul nu e de-ajuns...") e piesa centrală — Cormorant italic 28→44px, semnat
„Adriana Dobre · Fondatoare". Prima frază a confesiunii e mai deschisă la culoare (schimbarea de voce),
concluzia e `<strong>` alb, CTA-ul duce la `ro.thebeautyeducation.com`, ca peste tot.
Culorile vin din tokenii `--site-on-dark-*` (muted 7,2:1 pe charcoal).

**Decizie luată de utilizator:** după „Problema" urmează FAQ pe fundal diferit, deci adiacența
charcoal–footer nu e o problemă — nu adăuga separatoare aici.

**Anii din timeline** (`.tl-an`) sunt magenta semibold 16px — abatere cerută explicit de la
„magenta = acțiune": anii sunt reperul de scanare al secțiunii. Pe cardul charcoal al lui 2026,
anul trece pe `--c-magenta-light` (magenta oficial ține doar 2,1:1 pe fundal închis).

## Secțiunea „Empiria"

CSS: [`assets/css/empiria.css`](assets/css/empiria.css). Pe crem, după „Problema" (charcoal → crem =
graniță puternică). Antet centrat cu kicker **magenta** (`.tbe-kicker.is-action` — precede o acțiune,
deci excepția din design system se aplică legitim).

**Geometria în oglindă** (mic+mare stânga · mare+mic dreapta) nu e aproximată: fiecare coloană e flex
vertical cu același gap (24px), cardul mare are `flex: 1`, iar rândul de grid e comandat de diploma A4.
Verificat aritmetic la container plin: diploma dă 463×655px, coloanele au minim 484 respectiv 482px →
cardurile mari absorb diferența și ambele coloane se închid la 655px exact.

**Diploma e A4 strict** — `aspect-ratio: 210/297`, nu 4/5. Pe tabletă se limitează la 420px lățime și
se centrează (A4 la 768px lățime ar avea peste 1000px înălțime). Sub 1024px oglinda se desface în
carduri egale, stivuite logic: diplomă → 250+ → 8 diplome → 2 specializări → buton.

Oglinda a fost revizuită la cerere: cardul-gazdă al butonului a devenit cardul **„3 niveluri"**
(număr + titlu + lorem scurt), iar butonul stă centrat sub layout (`.emp-actions`). Constrângere nouă,
notată în CSS: minimul fiecărei coloane trebuie să rămână sub înălțimea diplomei A4 (~655px la container
plin), altfel grid-ul întinde diploma și rupe raportul 210:297 — deci textele cardurilor mici rămân scurte.

**De completat:** poza reală a diplomei (înlocuiește `.emp-diploma-eticheta`) · textele de la
„2 specializări" și „3 niveluri" sunt **lorem ipsum** (marcate cu comentarii în HTML) ·
`/empiria?utm_source=empiria_section` nu există încă. Butonul are hover scale — singurul din site.

## Secțiunea „Galerie / Dinăuntru"

CSS: [`assets/css/galerie.css`](assets/css/galerie.css) · JS: [`assets/js/galerie.js`](assets/js/galerie.js).
Pe **alb** (umbrele ies cel mai bine pe alb), după Empiria. Granița crem→alb ar fi doar 1,06:1 —
invizibilă — deci secțiunea are **linie fină sus** (`border-top`) plus marcajul mauve în antet.

**Masonry real** cu CSS `columns` (3 → 2 → 2 pe breakpoint-uri): fiecare imagine la înălțimea ei
naturală, `break-inside: avoid`. Consecință asumată: ordinea vizuală curge pe coloană, nu pe rând —
corect pentru o galerie foto.

**Ordinea pozelor în DOM nu e 1–8** — e calculată ca înălțimile să se împartă echilibrat pe coloane:
2200/2240/2367px pe 3 coloane, 3400/3407 pe 2. În ordinea naturală, prima coloană rămânea cu un gol de
~1100px jos. Dacă se înlocuiesc pozele cu altele de alte rapoarte, ordinea trebuie reechilibrată
(comentariu în HTML).

**Animația de intrare** (fade + translateY, stagger 70ms modulo 4) e progresivă: starea ascunsă se
activează doar din JS (clasa `.gal-anim`), deci fără JS galeria e vizibilă; cu `prefers-reduced-motion`
nu pornește. Hover: scale 1,02 + umbră mai adâncă — scale-ul stă pe figură, translate-ul pe `<li>`,
nu se calcă.

**Pozele sunt provizorii**: 8 decupaje din fotografia comunității la rapoarte variate
(`assets/poze/placeholder/galerie-1…8.jpg`, 54–148 KB). Se înlocuiesc 1:1 cu poze reale.

## Ritmul de fundaluri al paginii

Fiecare graniță dintre secțiuni trebuie să se vadă. Contrastul dintre benzi, calculat:

| Graniță | Contrast | |
|---|---|---|
| hero (fotografie închisă) → Povestea (crem `#FAF4EF`) | 16,59:1 | vizibilă |
| Povestea → Comunitatea (bej cald `#EDDDD3`) | **1,21:1** | vizibilă |
| Comunitatea → Problema (charcoal `#2C2521`) | 9,42:1 | vizibilă |
| Problema → footer (charcoal) | — | urmează FAQ între ele, pe fundal diferit |

Prima alegere ar fi fost `--tbe-bg-alt` (`#F2E9E2`), tokenul de secțiune alternantă din sistem — dar dă
doar **1,10:1** față de crem, adică o graniță pe care ochiul o ratează. Bejul cald urcă la 1,21:1 și
rămâne în aceeași familie caldă: nu introduce o culoare nouă, doar un ton mai adânc din aceeași scară.

Clasa e `.site-section.is-band`, iar tonul e în `--site-band` (site.css) — se schimbă într-un singur loc.
Peste bandă, secțiunea are și un **marcaj tipografic**: linia scurtă mauve de deasupra kickerului. Banda
spune „altă secțiune", linia spune „începe aici".

Atenție la ordinea benzilor pe viitor: Comunitatea e acum ultima înainte de footer. Dacă vreo secțiune
următoare ajunge charcoal, nu o pune lipită de footer — s-ar contopi.

## Secțiunea „Comunitatea ta" (3 aranjări · aleasă: A, bento cu poze)

[`comunitate-variante.html`](comunitate-variante.html), taste 1 / 2 / 3.
CSS: [`assets/css/comunitate.css`](assets/css/comunitate.css). Fără JS — sticky-ul din varianta 3 e CSS curat.

| # | Aranjare | Caracter |
|---|---|---|
| A | Bento asimetric 7/5 · 5/7 · 4/4/4, **cu fotografie în spate și text peste** | densă, se scanează |
| B | Index numerotat 01–07, două coloane, fără carduri și fără poze | aerisită, editorială |
| C | Antet fix în stânga, lista trece pe lângă el | lentă, forțează parcurgerea |

**Toate trei sunt clicabile.** Elementul `<a>` *este* cardul/rândul, deci toată suprafața se dă click,
nu doar titlul. Fiecare are inel de focus pe tot elementul și hover propriu.

| Card | Duce la | Există? |
|---|---|---|
| Locul tău printre 3.600+ | `/comunitate` | nu |
| Empiria | `/empiria` | nu |
| Revista Coafezelor | `/revista` | nu |
| 250+ tutoriale și cursuri | `/cursuri` | nu — **și nu e în navbar**, care are `/cursuri-online` și `/cursuri-fizice` separat. De decis dacă apare o pagină-hub sau cardul trimite la una dintre cele două |
| Aplicație de mobil | `/aplicatie` | nu |
| Harta Coafezelor | `https://harta-coafezelor.ro` | **da** — extern, ca în navbar |
| Rootine+ | `/rootine-plus` | nu |

### Fotografiile de pe carduri
`assets/poze/placeholder/card-1…7.jpg` — **provizorii**: șapte decupaje diferite (1800×1200 din sursă,
reduse la 1000×667, ~90–150 KB fiecare) din poza comunității. Sunt oameni reali din TBE, deci designul
se judecă pe conținut adevărat, nu pe dreptunghiuri gri. Se înlocuiesc cu poze proprii pe teme:
revistă, aplicație, hartă, booking.

**Gradientul e măsurat, nu ales.** Am analizat banda de jos a fiecărui decupaj (55% din înălțime, unde
stă textul). Cel mai luminos pixel ajunge la RGB(255,224,209), iar decupajul cu cupola la luminanță
0,865. Procentul de pixeli sub 4,5:1 pentru text alb: **alpha 0,45 → între 0,0% și 2,0% · alpha 0,55 →
0,0% pe toate șapte.** Gradientul ține ≥0,58 pe toată banda de text, cu marjă.

Consecință pe culori: peste fotografie mauve-ul ajunge la ~2,8:1, deci pe cardurile cu poză **eticheta
trece pe crem**. Aceeași abatere documentată ca la hero — pe fotografie lizibilitatea bate preferința
cromatică; pe fundal solid regula rămâne mauve.

Clasele `.is-dark` și `.is-decor` au rămas în CSS: dacă vrei un mix (unele carduri cu poză, unele
plate — charcoal sau nude), funcționează fără modificări.

**Două decizii de conținut, de confirmat:**
- „EMPIRIA — certificarea nivelului profesional" a fost despicat în etichetă mono **Empiria** +
  titlu **„Certificarea nivelului profesional"**. Cu `EMPIRIA` în majuscule în titlul Cormorant arăta
  ca un acronim tehnic, nu ca un nume de program.
- Punctul 5 avea două titluri („Aplicație de mobil / Educația ta, mereu la tine"): primul a devenit
  etichetă, al doilea titlu.

**Rootine+ e marcat „În curând".** În `CLAUDE.md` apare ca fiind *în dezvoltare*; fără marcaj, site-ul
ar promite o aplicație care nu există încă.

**Fără cifre mari aici, deliberat.** Banda de statistici e chiar deasupra, în „Povestea noastră" — dacă
repetăm 3.600+ și 250+ la câteva sute de pixeli distanță, niciunul nu mai contează. Și **fără iconițe**:
design system-ul e editorial, iar iconițele în cerculețe ar trage secțiunea spre estetică de SaaS.

Antetul secțiunii (kicker + titlu + lead) l-am scris eu, fiind singura parte care lipsea din briefing.

## Secțiunea „Program de loialitate"

CSS: [`assets/css/loialitate.css`](assets/css/loialitate.css) · JS: [`assets/js/loialitate.js`](assets/js/loialitate.js).
Pe cremul paginii, după galerie, cu linie fină sus (albul galeriei → crem = 1,06:1). Zona de sus:
intro cu CTA (~40%) + două carduri stivuite (~60%); dedesubt rândul full-width cu 4 niveluri.

**►► Valorile nivelurilor se editează în constanta `LEVELS`, în capul lui `loialitate.js`.** Cardurile
se generează din ea; fără JS, un `<noscript>` afișează nivelurile compact. Multiplicatorii folosesc
virgulă (1,2x) — site-ul e în română; briefu-ul avea punct.

**Numele nivelurilor sunt badge-urile oficiale din design system** (`.tbe-badge.is-bronze` …
`.is-diamond`, cu glifele ● ◈ ★ ◆) — aceleași pe care membrele le văd pe profil și în comunitate.
Au înlocuit indicatorul magenta de trepte (două sisteme de culoare pe același card ar fi concurat).
**Progresia Bronze → Diamond are trei semnale**: cardurile cresc în înălțime (176→236px, cu baza
comună — doar pe desktop), badge-urile strălucesc crescând (progresie proiectată în DS), iar la
intrare cardurile apar în cascadă de la stânga la dreapta (stagger 90ms).

**Nepotrivire de date, de decis:** briefu-ul dă Diamond **2x**, `CLAUDE.md` spune „până la **2x–3x**
la Diamond". E un rând de schimbat în `LEVELS` dacă 3x e corect.
`/program-loialitate?utm_source=loyalty_section` nu există încă (dar footer-ul are deja
`/program-de-loialitate` — **de unificat slugul**: cu sau fără „de").

## Secțiunea „Harta Coafezelor"

CSS: [`assets/css/harta.css`](assets/css/harta.css), fără JS. Pe bandă bej (`is-band`), după Loialitate.
Layout 50/50: vizual stânga + conținut și statistici dreapta (adaptarea editorială a unei referințe SaaS).

**Vizualul nu e o poză — e produsul, construit din componentele design system-ului**: pini de hartă în
Verde Hartă (`--c-harta-*`, semnalul oficial al sub-brandului) cu inițialele reale de pe harta live
(GC, AS, CD, NC), un caroiaj discret de 56px care sugerează străzi fără să deseneze un oraș real,
o pată verde „parc", plus **cardul de coafeză oficial** (`.tbe-salon` din components.css) cu badge-ul
„Recomandat" magenta și butonul de contact verde. Mockul întreg e decorativ (`aria-hidden`,
`pointer-events: none`), iar „butoanele" din el sunt spanuri — nu duc nicăieri.

**Datele de pe card sunt demonstrative** („Andreea M.", Cluj-Napoca) — nu e o persoană reală; poza e
decupajul provizoriu. Cifrele (600+, 42 orașe) sunt cele publicate pe harta-coafezelor.ro la data
integrării — dacă se schimbă acolo, se schimbă și aici.

**Pitch-ul e către coafeze** (decizie confirmată): titlu „Locul unde clientele te găsesc pe tine",
lead cu diferențiatorii din dosar (contact direct fără comision, ranking pe merit — nu plătit),
CTA „Vreau pe hartă" → harta-coafezelor.ro.

## Secțiunea „Mărturii" (Din comunitate)

CSS: [`assets/css/marturii.css`](assets/css/marturii.css) · JS: [`assets/js/marturii.js`](assets/js/marturii.js).
Pe crem, după Harta (bej → crem = graniță vizibilă). Referința: cardurile Circle.so — portret cu citat
peste gradient jos, adaptate editorial: citatul e **Cormorant italic**, ca toate citatele din brand.

**Bandă full-bleed derulabilă**: cardurile ies din container până la marginea ecranului (padding
calculat cu `--mt-pad`), snap nativ CSS — merge fără JS. JS-ul adaugă doar butoanele înainte/înapoi și
reveal-ul cu decalaj. Gradientul e din aceeași familie măsurată ca la „Comunitatea ta" (≥0,58 în zona
de text), urcat mai sus pentru că citatul ocupă mai mult din card decât un titlu.

**⚠ CONȚINUT DEMO — blocant de lansare.** Toate cele 5 citate sunt scrise de noi, numele sunt fictive
(Elena D., Ioana P., Cristina V., Ana-Maria S., Diana T. — verificate să nu coincidă cu numele
trainerelor), pozele sunt decupaje provizorii. Fiecare citat e mapat pe un pilon al ecosistemului
(comunitate, EMPIRIA, Harta, sprijin, loialitate+Beautifier), ca să fie clar ce fel de citat real se
caută pentru fiecare slot. **Testimoniale inventate pe site-ul live = înșelătorie ușor de demontat** —
se înlocuiesc cu citate reale, cu acordul autoarelor, înainte de publicare.

## Secțiunea „FAQ" (ultima)

CSS: [`assets/css/faq.css`](assets/css/faq.css) · JS: [`assets/js/faq.js`](assets/js/faq.js).
Pe **alb** — închide ritmul de benzi exact cum s-a promis la secțiunea „Problema": alb → footer charcoal
= 11,4:1. Granița de sus (cremul Mărturiilor → alb, 1,06:1) primește linia fină + marcajul mauve.

Antet fix stânga (sticky sub navbar; static sub 1024px), acordeon dreapta. **Un singur item deschis**
(primul, implicit); click pe cel deschis îl închide — la FAQ „totul închis" e o stare legitimă.
Expandarea e `grid-template-rows 0fr → 1fr` (animează înălțimi necunoscute fără max-height inventat).
Chevron magenta care se rotește, `aria-expanded`/`aria-controls` corecte.

**►► Întrebările și răspunsurile se editează în constanta `FAQS`, în capul lui `faq.js`.** Fără JS,
un `<noscript>` afișează toate întrebările ca listă simplă.

**⚠ De corectat la rafinare:** primul răspuns („Avem mai multe niveluri de abonament") **contrazice
dosarul oficial** — `CLAUDE.md` spune explicit că există acum UN SINGUR tip de abonament, care a
înlocuit vechea structură Fundamentals/Essentials/Mastery. Notat și în comentariul din `faq.js`.
Răspunsurile sunt placeholdere, rafinate de utilizator.

## Secțiunea „CTA final"

CSS: [`assets/css/cta.css`](assets/css/cta.css), fără JS. După FAQ, chiar înainte de footer, pe crem
cu `is-tight` (bannerul nu are nevoie de 128px de aer) + linia fină sus (alb → crem).

Un singur card cu gradient magenta (magenta-600 → 500 → 700 din paletă + halou din varianta luminoasă;
alb ≥7:1 pe orice treaptă), umbră difuză în tonul cardului. **Singura suprafață magenta plină din
site** — regula „magenta = acțiune" a ținut culoarea curată tocmai pentru momentul ăsta.

Textul închide bucla cu hero-ul (decizie confirmată): „Locul tău e aici." · „Cont gratuit în două
minute — abonamentul, când ești pregătită." · buton crem „Creează cont gratuit" cu săgeată →
`ro.thebeautyeducation.com`.

Revizuit la feedback: padding vertical 48px (nu 64), subtitlul și numerele urcate o treaptă
(numerele 32→44px), iar statistica fără sens „4 / discipline" a fost înlocuită — jos stau
**3.600+ coafeze · 250+ tutoriale**, iar cele patru discipline (Coafuri · Colorimetrie · Tunsoare ·
Makeup) sunt **pastile cu contur** sub statistici.

## Secțiunea „Blog" (ultima înainte de footer)

CSS: [`assets/css/blog.css`](assets/css/blog.css), fără JS. Pe **alb** + linia fină sus (cremul
CTA-ului → alb); alb → footer charcoal = 11,4:1. Referința: antet pe două coloane (titlu stânga ·
descriere + link dreapta) și **carduri orizontale** — imagine 42% stânga, conținut dreapta cu autor
(avatar + nume + rol), titlu, extras și „Citește articolul →".

Adaptări față de referință: titlurile articolelor în **Cormorant** (nu sans bold), linkul de articol
magenta, iar **punctele de carusel au fost scoase** — secțiunea arată ultimele 2 articole; în
WordPress devine loop peste postările recente. Pe mobil imaginea trece deasupra conținutului.

**Articolele sunt DEMO** (titluri, extrase, poze provizorii, autori: Adriana Dobre / Echipa TBE);
ambele linkuri duc la `/blog`, care nu există încă (dar e deja în footer).

## Ordinea de încărcare, acum că sunt mai multe fișiere

```html
<link rel="stylesheet" href="assets/css/tokens.css">      <!-- design system -->
<link rel="stylesheet" href="assets/css/components.css">  <!-- design system -->
<link rel="stylesheet" href="assets/css/site.css">        <!-- forma site-ului + navbar + footer -->
<link rel="stylesheet" href="assets/css/hero.css">        <!-- secțiune: hero -->
<link rel="stylesheet" href="assets/css/povestea.css">    <!-- secțiune: antet + cifre -->
<link rel="stylesheet" href="assets/css/timeline.css">    <!-- secțiune: mozaicul cu fir -->
```

Primele trei sunt obligatorii în ordinea asta (`site.css` rescrie tokeni pe care componentele îi
citesc deja). Fișierele de secțiune vin după și pot fi încărcate doar pe paginile care le folosesc.

JS: `site.js` (navbar) → `timeline.js` (firul) → `count-up.js` (cifrele). Independente între ele.

Fotografia de hero e precărcată din `<head>` cu `imagesrcset`, fiind elementul LCP al paginii.

---

## Verificat

Măsurat în browser, nu presupus: navbar 88px cu logo 40px · hero exact 90vh pe desktop și pe mobil ·
container 1200px · radius 20/999/12 · umbre difuze · zero scroll orizontal la 375, 768 și 1326px ·
navbar-ul are nevoie de minim 935px și trece pe hamburger la 1024px (90px marjă) ·
sertarul mobil blochează scroll-ul paginii și se închide cu Escape · dropdown-ul comută corect
`aria-expanded` · contrast minim **4,98:1** (hover-ul de footer), restul peste 6,7:1.

Footer, după adăugarea datelor firmei și a plăților: toate cele patru margini din stânga (logo, date
firmă, rând de plată, copyright) aliniate la același pixel, marginile din dreapta la fel · date firmă
12px la contrast 7,2:1, cu cifre tabulare · marca Stripe 42×18 într-o pilulă albă de 74×36, la 4,2x
supraeșantionare, violet pe alb 4,7:1 · pe 375px rândul de încredere și bara de copyright se stivuiesc,
fără scroll orizontal.
