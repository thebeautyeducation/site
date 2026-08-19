# Pagina „Revista Coafezelor" — structura de conținut (înainte de design)

> **Pagină de prezentare** (nu landing page). Rol: prezintă Revista Coafezelor și îi arată arhiva
> de coperți. Nu vinde agresiv — revista e **beneficiu de abonament, nu se vinde separat**, deci
> îndemnul e blând, spre abonament.
>
> Surse: `[claude.md]` = fișierul de context al proiectului · `[user]` = confirmat de Marius ·
> `[decizie]` = ales la întrebările din 19 aug 2026.

## Decizii luate (19 aug 2026)
1. **Click pe copertă → lightbox** (mărește coperta într-un overlay). Revista completă rămâne
   accesibilă doar în abonament — coperta e vitrină, nu descărcare gratuită. `[decizie]`
2. **Interior: câteva highlight-uri** (4–6 rubrici reprezentative), nu toate cele ~19. `[decizie]`
3. **Poziționare: beneficiu de abonament** — CTA principal spre `/abonament`. `[decizie]`

## Fapte de bază despre revistă (din CLAUDE.md)
- Publicație **lunară**, digitală (PDF, 22–24 pagini, realizată în Canva).
- **ISSN 3153–3809** (ISSN-L 3153–3809), editată de Beauty Education Publishing SRL.
- **Produs inclus în abonamentul TBE** — nu se vinde separat.
- Rol în ecosistem: **liantul editorial** care leagă celelalte componente într-o experiență lunară
  (tutoriale → Circle, produse → Beautifier, portofoliu → Harta Coafezelor, puncte → Loialitate).
- Colectiv editorial: Adriana Elena Dobre · Marius Dobre · Mihaela Mihăescu · Miruna Crăciunescu.
  Colaborator: Răcean Marius Răzvan (tutorialele de colorimetrie, cu produse Davines).
- Arhiva (în `documente/`): **Nr. 1 — August 2026 (22 pagini)**, **Nr. 2 — Septembrie 2026 (24 pagini)**.

---

## Structura propusă — 6 secțiuni

### 0 · HERO — prezentarea revistei
- Supratitlu: „Revista Coafezelor". Titlu + o frază despre ce e („revista lunară a comunității").
- **Coperta ultimului număr** (Nr. 2, Septembrie 2026) afișată mare, alături de text — nu fotografie
  de stoc, ci coperta reală. Restul (galeria) mai jos.
- Detaliu discret: ISSN 3153–3809 · apariție lunară · inclusă în abonament.
- Fără CTA agresiv aici — e pagină de prezentare; un link „Vezi arhiva" (ancoră spre galerie).

### 1 · CE ESTE REVISTA + rolul în ecosistem
- Ce e: publicație lunară, digitală, 22–24 pagini, parte din abonament. `[claude.md]`
- Rolul de **liant**: nu e material de marketing, e un beneficiu care creează un ritm lunar de
  revenire; fiecare rubrică trimite undeva în ecosistem. `[claude.md]`
- Format vizual: 3–4 puncte scurte (lunar · digital · inclusă în abonament · ISSN înregistrat),
  plus un paragraf despre rol.

### 2 · CE GĂSEȘTI ÎN FIECARE NUMĂR — highlight-uri
6 rubrici reprezentative din cele ~19, alese să acopere toate direcțiile `[claude.md, decizie]`:
| Highlight | Ce e |
|---|---|
| Tutoriale Coafuri | 2 tutoriale pas-cu-pas, cu link + cod QR către Circle |
| Tutoriale Colorimetrie | semnate Răcean, cu produse Davines, tot spre Circle |
| Empiria | rubrica programului de certificare |
| Fix It — 5 probleme, 5 rezolvări | cazuri reale din comunitate, coafuri + colorimetrie |
| Beauty by Beautifier · Produsul Lunii | produse profesionale, cu preț redus + QR |
| Interviu | interviul lunii, care trimite la videoul complet pe YouTube |

- Notă: pot menționa și elementele recurente („Luna trecută în TBE", „Realizarea Lunii",
  „Noutăți") ca detaliu, dar nu ca rubrici separate.

### 3 · ARHIVA — galeria de coperți  ◀ inima paginii
- Grilă de coperți, un card per număr. Click → **lightbox** cu coperta mare. `[decizie]`
- Fiecare card: coperta + „Nr. N · Luna AAAA" + număr de pagini.
- Cele 2 numere existente `[user]`:
  - **Nr. 1 — August 2026** · 22 pagini
  - **Nr. 2 — Septembrie 2026** · 24 pagini
- Copertele se extrag din PDF-urile reale (pagina 1) din `documente/` — nu imagini de stoc.
- Grila e gândită să crească: la fiecare număr nou se adaugă un card, fără reproiectare.

### 4 · COLECTIVUL EDITORIAL — cine o face
- Cei 4 din colectiv + colaboratorul, cu rolul fiecăruia `[claude.md]`:
  Adriana Elena Dobre, Marius Dobre, Mihaela Mihăescu, Miruna Crăciunescu · colaborator Răcean Marius Răzvan.
- Format: listă simplă nume + rol (nu neapărat poze — colectivul e mic, contează numele).

### 5 · CTA — beneficiu de abonament
- Mesaj: „Primești revista în fiecare lună, cu abonamentul." `[decizie]`
- CTA principal → `/abonament`. Eventual secundar → creare cont / comunitate.
- Ton editorial, nu de vânzare forțată.

---

## Ordinea rațională
Prezinți revista (hero) → explici ce e și de ce contează (rol de liant) → arăți ce e înăuntru
(highlight-uri) → **arhiva de coperți** (motivul paginii) → cine o face (credibilitate editorială)
→ cum o primești (abonament). Galeria e centrul, restul o încadrează.

## Aspecte pentru design (după aprobare)
- Fișiere: `revista.html` + `assets/css/revista-pagina.css` (prefix `rev-`) +
  `assets/js/revista-lightbox.js` (lightbox-ul pe coperți, cu tastatură + focus trap).
- Coperți: extrase din PDF-uri în `assets/poze/revista/` (nume: `nr-1-august-2026.jpg` etc.).
- Legături în site: `/revista` există deja ca link în footer și în cardul „Revista Coafezelor"
  de pe homepage (secțiunea Comunitatea ta) — le repoint pe `revista.html`.
- Meniul principal: revista NU e acum în meniu; de decis dacă intră (probabil nu — rămâne în footer
  și în cardurile de pe homepage/comunitate, ca să nu aglomerăm meniul).

## De clarificat / de completat
- Lightbox-ul afișează coperta la rezoluția din PDF; dacă vrei o rezoluție anume, spune.
- Data de pe pagină e „azi" în ecosistem (august 2026) — Nr. 2 (septembrie) apare ca „în curând"
  sau ca număr deja publicat? Presupun **publicat** (arhiva le are pe ambele). De confirmat dacă nu.
