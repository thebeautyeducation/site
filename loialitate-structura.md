# Pagina „Program de loialitate" — structură (înainte de design)

> Rută: `/program-de-loialitate` (12 referințe în site: footer pe toate paginile + linkuri din
> Empiria, Comunitate, secțiunea de loialitate de pe homepage). Fișier: `program-de-loialitate.html`.
>
> **Sursă unică:** [`business/docs/04-loialitate.md`](../business/docs/04-loialitate.md) —
> actualizarea de puncte validată de Marius, septembrie 2026. Cifrele de acolo înlocuiesc orice grilă
> mai veche. Marcaje: `[doc]` = din documentație · `[claude.md]` = context proiect · `[gol]` = lipsă
> în sursă · `[decizie]` = de confirmat de tine.

## Ce e pagina asta
Nu e un landing page de vânzare, ci **pagina-referință** a programului: explică transparent cum
câștigi puncte, cum urci în niveluri și ce primești. Unghiul de fond, din doc: **MERITOCRAȚIE** —
primești puncte pentru *muncă* (educație, activitate), nu doar pentru cumpărături. Are și un CTA
final spre abonament, dar informația e eroul.

---

## Structura propusă — 8 secțiuni

### 0 · HERO — ce e programul
- Supratitlu „Program de loialitate". Titlu pe ideea de meritocrație.
- O frază: aproape orice faci în comunitate și pe Beautifier aduce puncte; punctele urcă în niveluri
  și se transformă în recompense. `[doc]`
- Reper: în vigoare din 1 decembrie 2025. `[doc]`
- CTA discret: „Vezi cum aduni puncte" (ancoră).

### 1 · CUM FUNCȚIONEAZĂ — în 3 pași
Rezumatul mental înainte de tabele: **Aduni puncte** (din activitate + achiziții) → **Urci în niveluri**
(Bronze→Diamond) → **Primești recompense** (multiplicatori, discounturi, produse din Magazinul de
Loialitate). Trei carduri. `[doc]`

### 2 · CUM ADUNI PUNCTE — grila completă
Inima paginii. Toate categoriile din doc, valori **de bază (Bronze)**, grupate:
| Grup | Conținut |
|---|---|
| Onboarding (până la 250) | Cont creat 100 · Profil complet 100 · Poveste în „Prezintă-te" 50 `[doc]` |
| Abonament | Lunar 60 · 3 luni 200 · 6 luni 400 · Anual 850 `[doc]` |
| EMPIRIA (600/specializare) | Fundamentals 100 · Essentials 200 · Mastery 300 → 1.200 ambele `[doc]` |
| Cursuri online | Color Mastery 500 · Makeup Essentials 500 (la achiziție) `[doc]` |
| Rubrici & activități | Decode IT 20 · Skill Lab 25 · Pinterest 2.0 25 · Color IT 20 · Exercise IT 20 · Repair IT 20 · Duelul Coafezelor 25/50 · Coafeza lunii 200 `[doc]` |
| Scor de comunitate (săptămânal) | 9–10 → 100 · 8–8,99 → 70 · 7–7,99 → 50 `[doc]` |
| Mentorat | 250 la finalizarea oricărui program `[doc]` |
| Beautifier | **sistem separat, în magazin** — multiplicator propriu; grila exactă `[gol]` (nu inventez cifre) `[doc §H]` |
- Notă vizibilă: „valorile sunt de bază; nivelul tău le multiplică (vezi mai jos)".

### 3 · MULTIPLICATORUL — conceptul-cheie
Cele **două sisteme separate**, explicat clar ca să nu se confunde: `[doc]`
- **Multiplicatorul de comunitate** (nivelul tău) se aplică la TOT ce e mai sus — abonament, EMPIRIA,
  cursuri, rubrici, scor, mentorat. Bronze 1x · Silver 1,2x · Gold 1,5x · Diamond 2x.
- **Beautifier** are multiplicator PROPRIU, în magazin; cel de comunitate **NU** se aplică acolo.
- Exemplul validat: Coafeza lunii = 200 de bază → un Diamond primește **400**. `[doc]`

### 4 · CELE 4 NIVELURI — praguri + beneficii
- Bronze/Silver/Gold/Diamond cu **badge-urile DS oficiale** (ca pe homepage și Empiria): puncte
  necesare + condiția EMPIRIA. `[doc]`
- **Tabelul complet de beneficii** (multiplicator, discounturi cursuri, sesiune cu Adriana, prioritate
  pe Harta Coafezelor, tombolă, transport gratuit Beautifier). `[doc]`

### 5 · DIAMOND → TRAINER TBE
Vârful drumului: de la Diamond poți aplica la echipa de traineri. Dovada reală: Larisa, Viorica,
Alina. `[doc]` Link → pagina Traineri. (Ecou intenționat al callout-ului de pe pagina Traineri.)

### 6 · CUM FOLOSEȘTI PUNCTELE + regulile
- Mecanism: scrii **„VREAU"** la produsul dorit din **Magazinul de Loialitate**; sistem automat. `[doc]`
- Pe profil: **Puncte acumulate** (istoric, nu scad) vs. **Puncte disponibile** (sold). `[claude.md]`
- Expirare: punctele se șterg după **90 de zile** de la închiderea abonamentului (fără reactivare). `[doc]`
- Nu se acordă retroactiv. `[doc]`
- (Opțional) **Ligile** — Liga Hairstiliștilor / Liga MUA, puncte și pe specializare. `[doc]`

### 7 · CTA FINAL
„Începe să aduni puncte din prima zi" → abonament (`/abonament`) + secundar comunitate.

---

## Ordinea rațională
Ce e (hero) → cum merge pe scurt (3 pași) → **cum aduni** (grila) → **cum se multiplică** (nivelul) →
**unde ajungi** (niveluri + beneficii + Trainer) → **cum cheltui + reguli** → invitație. Grila și
multiplicatorul stau împreună, fiindcă fără multiplicator cifrele din grilă induc în eroare.

## Ce NU intră pe pagină
Secțiunea „Benchmark extern" din doc (research, rate de finalizare, recomandări neimplementate) e
strict internă — nu apare public.

## DECIZII FINALE (confirmate de Marius, 4 sept. 2026) — au prioritate peste doc
- **Onboarding pe plăți consecutive:** NU se includ.
- **Beautifier:** SCOS complet de pe pagină — fără câștig de puncte, fără multiplicator de comenzi,
  fără transport gratuit. Are program propriu (BON Loyalty, multiplicatori + niveluri), nemenționat aici.
- **Ligile:** NU se menționează momentan.
- **Cum folosești punctele:** FĂRĂ mecanismul „VREAU" (rămâne intern în Circle). Pe pagină:
  **zile gratuite la abonament** + **cursuri care pot fi luate cu puncte**. (Beautifier — deși
  punctele se pot folosi acolo prin BON Loyalty — nu se menționează, per „scoate tot ce ține de Beautifier".)
- **Multiplicatori NOI:** Bronze **1x** · Silver **1,5x** · Gold **2x** · Diamond **3x**.
  Exemplu: Coafeza lunii 200 → Diamond **600**.
- **Tabelul de beneficii:** SCOS „Sesiune lunară cu Adriana", „Transport gratuit Beautifier" și rândul
  de multiplicator comenzi Beautifier. Rămân: multiplicator de comunitate, discount cursuri fizice/online,
  prioritate Harta Coafezelor, tombolă lunară.
- Secțiunea 3 se simplifică: nemaifiind Beautifier, e **un singur multiplicator** (cel de comunitate) —
  nu mai explic „două sisteme separate".

### De sincronizat pe restul site-ului (fac odată cu pagina, ca să nu se contrazică)
- `assets/js/loialitate.js` (teaser homepage): multiplicatori 1,2/1,5/2 → **1,5/2/3**.
- `index.html` (paragraf sub niveluri): aceeași corecție de multiplicatori.
- `comunitate.html` cardurile Gold/Diamond: scot „sesiuni cu Adriana" și „transport gratuit"; Diamond „2–3x" → **3x**.

### De semnalat (NU ating fără OK)
- `index.html` — cardul „**Primele 3 luni, punctele se dublează**": regulă inexistentă în doc; de decis.
- `index.html` — în lista „Puncte pentru fiecare pas" apare „**Cumperi produse pe Beautifier**": acum
  Beautifier e program separat; de decis dacă rămâne pe teaser-ul de homepage.
- Documentul canonic `business/docs/04-loialitate.md` are încă multiplicatorii vechi (1,2/1,5/2),
  „Sesiune cu Adriana" și secțiunea Beautifier — ar trebui actualizat la fel (pot să-l fac separat).

## Decizii de confirmat înainte de design
1. **Recompensele de onboarding pe plăți consecutive** din CLAUDE.md — *2 plăți → acces Atelierul de
   Bucle; 3 plăți → acces Live-urile de Facebook* — le includem? Nuanță: Atelierul de Bucle e
   **discontinuat** (nu se mai vinde), dar accesul ca recompensă pare să existe. Nu sunt în
   `04-loialitate.md`. Le las **afară** deocamdată; confirmă dacă vrei să apară.
2. **Beautifier — grila `[gol]`.** O descriu calitativ („sistem propriu în magazin, multiplicator
   separat"), fără cifre inventate. OK?
3. **Ligile (secțiunea 6 opțional)** — le păstrez ca subsecțiune scurtă sau le tai?

## Nepotrivire găsită (de rezolvat separat, nu pe pagina asta)
Secțiunea de loialitate **de pe homepage** afirmă „**Primele 3 luni, punctele se dublează** — tot ce
faci în primele 90 de zile îți aduce puncte duble". **Nu există** o astfel de regulă în
`04-loialitate.md` (bonusul de 90 de zile de acolo e despre *expirare*, nu despre dublare). Pare o
afirmație veche/demo pe homepage. O semnalez ca s-o corectăm — dar pe pagina nouă nu o pun.

## Fișiere (la design, după aprobare)
`program-de-loialitate.html` + `assets/css/loialitate-pagina.css` (prefix `lp-`, ca să nu se
ciocnească cu `loy-` de la teaser-ul de pe homepage). Probabil fără JS. Footer: „Program de
loialitate" e deja în coloana „Mai mult"; îl marchez `aria-current` pe pagina asta.
