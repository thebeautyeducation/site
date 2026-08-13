# Pagina EMPIRIA — structură de conținut

> Document de lucru. NU e design — e ordinea secțiunilor și conținutul lor, ca să cădem de acord
> înainte să construim ceva vizual. Fiecare bucată are sursa: `[dosar pXX]` = pagina din
> `documente/the_beauty_education_dosar_ecosistem_2026.pdf`, `[gol]` = nu există în dosar,
> `[user]` = spus de tine în cerere, nu confirmat în dosar.
>
> **STATUS: structură FIXATĂ.** Cele 4 ambiguități au fost decise — vezi „Decizii" la finalul
> fiecărei secțiuni afectate. Următorul pas e construcția paginii (tot fără design — doar
> semantică HTML pe componentele DS existente), dacă confirmi mai jos.

---

## 0 · Cap de pagină (nu hero cu fotografie — pagină interioară)
Kicker mono magenta „PROGRAMUL EMPIRIA" + titlu H1 + un rând de intro. *(Diferit de teaser-ul deja
existent pe homepage — acolo titlul e „EMPIRIA — drumul de la baze la expert"; aici poate rămâne
la fel sau se reformulează, e prima decizie de titlu pentru o pagină dedicată.)*

---

## 1 · Ce este EMPIRIA — descrierea programului *(punctul 1)*
**Sursă: `[dosar p12]`, secțiunea 08.**

- **Problema pe care o rezolvă — „Iluzia Cunoașterii":** privești zeci de tutoriale, salvezi sute
  de poze, telefonul plin de capturi — și când o clientă cere exact acea coafură, apare un gol.
  Iluzia Cunoașterii: crezi că, dacă privești, înveți.
- **Citat oficial:** *„Măiestria nu se fură. Măiestria se construiește. Nu poți învăța să coafezi
  doar privind un ecran, la fel cum nu poți învăța să înoți citind o carte."*
- **Numele:** din greaca veche, „experiență" — ales deliberat, în contrast cu „teoria".
- **Filozofia:** empirismul — cunoașterea vine din observare, experimentare, practică repetată,
  nu din teorie.
- **Ce NU este:** „încă un curs online". Ce ESTE: Harta care scoate coafeza din haosul
  informațional (cursuri fizice, cursuri online, tutoriale YouTube/Instagram/Facebook) și o
  ghidează pas cu pas printr-un sistem de practică verificată.

---

## 2 · Cele 2 specializări *(punctul 2)*
**Sursă: `[dosar p12]`.**

- **EMPIRIA Coafuri**
- **EMPIRIA Colorimetrie** (Vopsit)

Aceeași structură pe 3 niveluri se aplică ambelor, independent — o coafeză poate face doar Coafuri,
doar Colorimetrie, sau ambele în paralel.

**Decizie: două blocuri complete, secvențiale.** Coafuri (cu toate cele 3 niveluri) urmat de
Colorimetrie (cu toate cele 3 niveluri), unul după altul pe pagină — nu tab-uri. Pagina e mai
lungă, dar tot conținutul e vizibil fără click-uri, ceea ce contează pentru o pagină de vânzare
a programului.

---

## 3 · Cele 3 niveluri — ce se învață la fiecare *(punctul 3)*
**Sursă: `[dosar p12-13]`. Regulă comună tuturor nivelurilor și ambelor specializări:**
Fundamentals → Essentials → Mastery, strict secvențial. Nivelul următor e **blocat** până la
finalizarea celui anterior.

### Coafuri — detaliat complet în dosar

**Nivelul 1 — Fundamentals**
Scop: noțiunile de bază care stau la baza oricărei coafuri, plus bazele de social media.
- Teoria coafurilor texturate
- Produsele de styling
- Pregătirea părului
- Tipuri de breton
- Social Media — noțiuni de bază (configurare conturi, tipuri de postări, repere)
- 4 coafuri care însumează toată teoria nivelului

**Nivelul 2 — Essentials**
Scop: folosirea cunoștințelor din Fundamentals + tehnici noi — valuri, coafuri lejere, coafuri pe
bază de ondule și textură naturală. *„Multe coafeze se opresc la acest nivel, pentru că acoperă o
mare parte din cerințele reale ale clientelor."*
- 8 coafuri, alese să acopere toate „punctele sensibile" ale nivelului

**Nivelul 3 — Mastery**
Scop: certificarea că nicio coafură comercială și nicio cerință de clientă nu mai pune probleme.
Coafeza poate citi orice coafură din poze și o reproduce corect, în stilul propriu.
- 8 coafuri — servesc și pentru certificare, și pentru portofoliul de expunere pe social media

**Cum se finalizează fiecare nivel (identic pe cele 3):**
1. Vizionarea tutorialelor nivelului (cele cu experiență pot sări direct la test)
2. Test grilă — minimum 80% (8 din 10 răspunsuri corecte)
3. Realizarea coafurilor nivelului + încărcare poze
4. Verificare **manuală** de echipa TBE, pe criteriile: **Formă, Linii, Finisaj**
5. Aprobat → diploma nivelului. Respins → feedback punctual de îmbunătățire, reîncercare

### Colorimetrie — **[gol în dosar]**
Dosarul confirmă doar că există aceleași 3 niveluri (Fundamentals V / Essentials V / Mastery V,
`[dosar p5]`) și că certificarea urmează aceeași logică (test + coafuri/tehnici evaluate manual,
`[dosar p12]` nota de subsol). **Dar nu detaliază CE tehnici de vopsit se învață la fiecare nivel** —
secțiunea 05 spune explicit că Colorimetrie e „deja clară la nivel de structură, fără nevoie de
mapare suplimentară" (adică: clară pentru echipă, nu documentată pentru public).

**Decizie: text generic, marcat explicit „DE VALIDAT cu Adriana" în comentariul din cod** — ca la
lorem-urile din Empiria de pe homepage. Progresie rezonabilă, de rescris cu conținutul real:

- **Fundamentals (V):** teoria culorii (cerc cromatic, nivele de nuanță), tipuri de vopsea și
  oxidanți, pregătirea firului, decolorare de bază, 4 tehnici test
- **Essentials (V):** corecturi de culoare, tehnici de nuanțare (balayage, ombre, șuvițe), 8 tehnici
- **Mastery (V):** corecturi complexe, decolorări avansate, reproducerea oricărei nuanțe din poză,
  8 lucrări finale

---

## 4 · Singura modalitate de certificare în TBE *(punctul 4)*
Nu e o propoziție literală în dosar, dar e consecința logică a structurii: EMPIRIA e singurul
sistem din ecosistem cu test + verificare manuală + diplomă. Cursurile standalone (Color Mastery,
Atelierul de Bucle) nu emit diplome — au doar „Rubrica de Feedback" proprie (`[dosar p5]`). Se poate
afirma direct, ca poziționare.

---

## 5 · Diplomele — per nivel + diploma supremă *(punctul 5)*
**Sursă: `[dosar p12-13]` + card-ul deja publicat pe homepage.**

Aici e o **contradicție reală** de rezolvat înainte să scriem orice text:

- Cardul „8 diplome" de pe homepage (deja aprobat de tine) spune: *„Am pregătit câte 4 diplome
  pentru fiecare specializare: Fundamentals, Essentials, Mastery **și Diploma EMPIRIA**."*
  → Asta înseamnă **o diplomă supremă PER specializare** (a 4-a diplomă din fiecare), deci 2
  diplome supreme posibile per persoană (una la finalul Coafuri, una la finalul Colorimetrie).
- Cererea ta de acum spune: *„primesc câte o diplomă per nivel și **la sfârșit** diploma supremă
  care atestă expertiza lor"* → sună a **o singură** diplomă supremă, la finalul a tot parcursul
  (ambele specializări, toate nivelurile).

**Decizie: câte una per specializare, ca pe homepage.** Nu se schimbă nimic pe homepage — cardul
„8 diplome" rămâne corect. Pe pagina Empiria: fiecare specializare (Coafuri, Colorimetrie) se
încheie cu propria „diplomă supremă" (a 4-a diplomă din acea specializare), după cele 3 de nivel.
O coafeză care termină ambele specializări complet are 8 diplome: 3 + 1 supremă, de două ori.

---

## 6 · Fără limită de timp *(punctul 6)*
**`[gol în dosar]`** — dar e o inferență solidă: nicăieri în cele 25 de pagini nu apare vreun termen
limită pentru parcurgerea unui nivel. Structura e „parcurgi în ritmul tău", nu „ai X luni". Propun
să afirmăm asta direct, formulat ca beneficiu („Nu există termen-limită — parcurgi în ritmul tău").

---

## 7 · Efortul depus se păstrează *(punctul 7)*
**`[user]`** — spus de tine, nu în dosar. O să-l redau ca atare, dar formularea corectă contează:
nivelurile finalizate **rămân finalizate** pe cont, însă accesul la nivelul următor / la conținut
necesită abonament activ (vezi punctul 8). Propun textul: *„Dacă îți întrerupi abonamentul, nimic
din ce ai finalizat nu se pierde. Nivelurile obținute rămân ale tale — reactivezi abonamentul
exact de unde ai rămas."*

---

## 8 · Acces condiționat de abonament *(punctul 8)*
**Sursă: `[dosar p12]`, tabelul „Condiții de acces pe niveluri".**

| Nivel | Condiție de acces (structura actuală, simplificată) |
|---|---|
| Fundamentals | Abonament activ |
| Essentials | Abonament activ **+** Fundamentals finalizat |
| Mastery | Abonament activ **+** Essentials finalizat |

Notă din dosar: *„în prezent există un singur tip de abonament, care înlocuiește vechea structură
pe trei planuri. Logica de progres liniar (test + coafuri + validare) rămâne neschimbată."* —
important, pentru că un text vechi ar putea sugera greșit că fiecare nivel are un abonament diferit.

---

## 9 · Cifre statistice *(punctul 9)*
**`[gol în dosar]`** — dosarul are cifre generale (7.120 în baza de date, 3.618 conturi active,
601 abonamente active), dar **nu are un singur număr despre EMPIRIA specific** — câți au început
programul, câți au finalizat un nivel, câte diplome au fost emise până acum.

De reținut: cardul de pe homepage spune deja *„250+ cursanți sunt deja în program"* — dar 250+ e
de fapt **numărul de tutoriale** din dosar (`[dosar p3]`), nu numărul de cursanți EMPIRIA. Cifra
aia a fost preluată dintr-un brief anterior, nu din dosar — merită verificată, nu doar copiată
mai departe pe pagina dedicată.

**Decizie: marcate DEMO, obligatoriu de completat cu numere reale înainte de lansare** — același
tratament ca testimonialele. Cifre propuse (plauzibile, NU reale):
- „X coafeze au început EMPIRIA" — DEMO
- „X diplome emise până acum" — DEMO
- „X% rată de finalizare Fundamentals" — DEMO

**Corecție de făcut și pe homepage:** cardul Empiria de acolo spune „250+ cursanți sunt deja în
program" — dar 250+ e numărul de tutoriale din dosar (`[dosar p3]`), nu cursanți EMPIRIA. La
construcția paginii dedicate, acel text de pe homepage se schimbă în DEMO marcat, nu se mai
prezintă ca fapt cert.

---

## 10 · Puncte de loialitate câștigate *(punctul 10)*
**Sursă: `[dosar p15]`, tabelul „Cum se acumulează puncte — EMPIRIA".**

| Nivel finalizat | Puncte |
|---|---|
| Fundamentals | 80 |
| Essentials | 160 |
| Mastery | 240 |
| **Total per specializare** | **480** |

Cu ambele specializări finalizate complet: **960 de puncte**. Plus, un motiv suplimentar de a
finaliza EMPIRIA: nivelurile de status Silver/Gold/Diamond sunt **condiționate** de finalizarea
EMPIRIA (Silver = Fundamentals oricare specializare, Gold = Essentials, Diamond = Mastery —
`[dosar p17]`) — merită menționat aici ca motivație, cu link spre pagina de loialitate.

---

## CTA final
Consecvent cu restul site-ului: „Creează cont gratuit" / „Vezi abonamentul", ca la hero și la CTA-ul
homepage-ului.

---

## Ordinea finală a paginii (rezumat)

0. Cap de pagină — kicker + H1 + intro
1. Ce este EMPIRIA — Iluzia Cunoașterii, citat, filosofie
2. Cele 2 specializări (introducere scurtă, trimite spre blocurile 3 și 4)
3. **Coafuri** — complet: cele 3 niveluri (conținut detaliat, din dosar) + certificare + diplome
   (3 de nivel + 1 supremă)
4. **Colorimetrie** — complet: cele 3 niveluri (conținut generic DE VALIDAT) + certificare +
   diplome (3 de nivel + 1 supremă)
5. Singura modalitate de certificare din TBE (poziționare)
6. Fără limită de timp
7. Efortul depus se păstrează (persistă la reactivare abonament)
8. Acces condiționat de abonament (tabelul de condiții)
9. Cifre statistice — **DEMO**, de completat
10. Puncte de loialitate (80/160/240, 480/specializare, 960 total) + legătura cu nivelurile
    Bronze–Diamond
11. CTA final

## Următorul pas

Structura de mai sus e finală. Pasul următor e construcția paginii `empiria.html` — tot fără
design (fără CSS de secțiune, fără culori, fără layout ales) — doar markup semantic pe
componentele deja existente în design system (`.tbe-kicker`, `.tbe-lead`, `.tbe-stat`, liste,
tabele), ca să vedem conținutul „curgând" pe pagină înainte să-l stilizăm. Confirmă și trec la asta.
