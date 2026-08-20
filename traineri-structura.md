# Pagina „Traineri" — structură (generată fără aprobare, per cerere)

> Pagină de prezentare a echipei de traineri. Câmpuri per trainer (cerute):
> nume, localitate, specializare, titulatură, ani de experiență, descriere, poză,
> „cu ce se ocupă în comunitate".
>
> Surse: `[claude.md]` = context proiect · `[inventat]` = completat de mine, de validat.

## Decizie foto (19 aug 2026)
Marius a ales „crop foto generic din site". În practică, singura sursă foto e poza de eveniment
(mulțime care aplaudă) — crop-urile individuale ies proaste (mai multe persoane / fețe tăiate /
unul fără față deloc) și ar pune fețe greșite pe persoane reale, inclusiv fondatoarea. Am construit
deci cu **placeholder cu inițiale** (monogram elegant, pe culorile brandului). Fiecare card e gata
să primească portretul real: se pune un `<img>` în `.trn-foto` și monogramul dispare. **De înlocuit
cu 6 portrete reale.**

## Cei 6 traineri (în ordinea de afișare)
| # | Nume | Titulatură | Specializare | Localitate | Ani | Sursă |
|---|---|---|---|---|---|---|
| 1 | Adriana Dobre | Fondatoare & Lead Trainer | Coafuri | București | 10+ | [claude.md] |
| 2 | Mihaela Mihăescu | Lead Trainer | Colorimetrie | București `[inventat]` | 12+ `[inventat]` | [claude.md] rol |
| 3 | Cosmina Ducu | Trainer | Makeup | Cluj-Napoca `[inventat]` | 8+ `[inventat]` | [claude.md] rol |
| 4 | Larisa Matei | Trainer Junior | Coafuri | Iași `[inventat]` | 4+ `[inventat]` | [claude.md] |
| 5 | Viorica Dima | Trainer Junior | Coafuri | Brașov `[inventat]` | 4+ `[inventat]` | [claude.md] |
| 6 | Alina Ene | Trainer Junior | Coafuri | Timișoara `[inventat]` | 3+ `[inventat]` | [claude.md] |

Notă: dosarul mai listează **Veronica Nistor** (trainer senior, coafuri) și **Răcean Marius Răzvan**
(colaborator colorimetrie) — NU sunt în lista dată de Marius, deci nu apar pe pagină. De adăugat dacă se dorește.

Descrierile și „cu ce se ocupă în comunitate" sunt scrise de mine pe baza rolurilor din CLAUDE.md
(pentru junioare: povestea reală „cursantă → trainer prin Diamond"). De validat/ajustat.

## Secțiuni
0. **Hero** — kicker „Echipa", titlu, lead. Reper: 6 traineri, 3 specializări.
1. **Grila de traineri** — 6 carduri (foto/monogram, nume, titulatură, specializare, localitate,
   ani, descriere, „În comunitate"). Ordine: lead → trainer → junioare.
2. **Callout „De la cursantă la trainer"** — cele 3 junioare au început ca membre, promovate prin
   Diamond (dovada că traseul funcționează). Link → Empiria / program de loialitate.
3. **CTA** — alătură-te comunității.

## Fișiere
`traineri.html` + `assets/css/traineri-pagina.css` (prefix `trn-`). Fără JS.
Footer: se adaugă „Traineri" în coloana Navigare, pe toate paginile (cerut).
