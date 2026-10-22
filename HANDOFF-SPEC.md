# Spec de handoff — site-ul The Beauty Education

Pentru echipa care replică site-ul în WordPress. **Toate valorile de mai jos sunt rezolvate** — HEX, alpha, pixeli,
poziții — fără variabile CSS, fără `var()`, fără `light-dark()`. Sunt valorile **reale de pe site**, în tema light
(singura pe care o folosește site-ul).

> **Important — două sisteme de umbre cu aceleași nume.** Design system-ul de referință
> (thebeautyeducation.github.io/design-system) are umbre scurte, „strânse" (ex. `0 4px 14px`). **Site-ul le rescrie**
> în `site.css` cu umbre lungi și difuze (ex. `0 20px 50px -12px`). Pentru WordPress folosești **valorile din acest
> document**, nu pe cele din DS-ul de referință. Aici e explicat de ce au părut „diverse".

Cum se citește o umbră: `box-shadow: X Y blur spread culoare` → `0 20px 50px -12px rgba(33,16,24,0.12)` înseamnă
deplasare 0 pe orizontală, 20px în jos, blur 50px, spread −12px (umbra e mai mică decât elementul), culoare
`#211018` (negru-prună) la 12% opacitate.

---

## 1 · Fundație

### 1.1 Culori (tema light, site)

| Rol | HEX | Unde |
|---|---|---|
| Fundal pagină (crem) | `#FAF4EF` | body |
| Suprafață (carduri, panouri, inputuri) | `#FFFFFF` | carduri, dropdown, buy-box |
| Bandă bej (secțiuni alternante) | `#EDDDD3` | `.site-section.is-band` |
| Fundal alternativ | `#F2E9E2` | inputuri disabled, segmented, card flat |
| Decor (nude) | `#F4E9E1` · strong `#DCC4B4` | blocuri decorative, avatar fără poză |
| Text principal | `#2C2521` | corp, titluri |
| Text secundar (muted) | `#6B5C51` | leaduri, descrieri, placeholder |
| Text secundar mic pe fundal colorat | `#5A4D44` | etichete și meta pe roz, crem, gri (7.5:1) |
| Text discret (subtle) — **doar decorativ / text ≥18px** | `#9E9086` | etichete de grup în dropdown |
| Ink (umbre, scrimuri) | `#211018` (negru-prună) | baza umbrelor și a scrimurilor peste fotografii |
| **Magenta — acțiune** | `#A71257` | butoane primare, linkuri, focus |
| Magenta hover | `#8E0F4A` | |
| Magenta active (apăsat) | `#740C3C` | |
| Magenta soft (fundal) | `#FBF0F5` · hover `#F5DCE7` | badge is-action, buton secundar hover, dropdown hover |
| Magenta border | `#E9B6CC` | buton secundar, badge is-action |
| Magenta light (pe fundal închis) | `#E36D9E` | hover-uri în footer / navbar transparent |
| **Prună — voce editorială** (text) | `#6B2A4A` | cuvântul în italic din titluri, kickere, citate, etichete, roluri (10.2:1) |
| Prună linie decorativă | `#C396AA` | `.tbe-rule`, bordura citatului, accent pe piloni |
| Prună soft | `#F3E7ED` | card editorial (`.is-editorial` / `.is-mauve`), etichete editoriale |
| **Negru-prună — fundal închis** | `#2A1520` | footer, secțiunea „Problema", carduri închise, toast, tooltip |
| Bordură subtilă | `#EDDDD3` | carduri, separatoare |
| Bordură normală | `#DCCFC4` | inputuri, chips, tags |
| Bordură puternică | `#C0B1A5` | buton neutru hover |
| Succes | `#2E7D5B` · fundal `#E4F1EA` | |
| Atenție | `#9C5C00` · fundal `#FBEEDC` | |
| Eroare | `#B3261E` · fundal `#FBE7E5` | |
| Info | `#6B2A4A` · fundal `#F3E7ED` | |
| Verde Hartă (disponibil / pin) | `#2E6F5E` · soft `#E3EFEB` | doar Harta Coafezelor |
| Verde contact (WhatsApp / Contactează) | `#15803D` · hover `#116631` | doar butoanele de contact de pe Hartă |

**Pe suprafețe închise** (negru-prună `#2A1520` — footer, „Problema"; hero peste fotografie): text `#FAF4EF` · secundar `#D9C2CB` ·
kicker și cuvânt-accent `#E9B6CC` · acțiune/hover `#E36D9E` · linie fină `rgba(250,244,239,0.12)` · umplere `rgba(250,244,239,0.06)`.

**Logo:** simbolul și textul au mereu aceeași culoare (color, negru sau alb) — niciodată bicolor.

### 1.2 Tipografie

| Rol | Font | Mărime | Greutate | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Display (hero) | Fraunces | **40 → 72px** (fluid) | 300 | 1.08 | −0.02em |
| H1 | Fraunces | **32 → 48px** (fluid) | 500 | 1.25 | −0.02em |
| H2 | Fraunces | **26 → 34px** (fluid) | 500 | 1.25 | −0.02em |
| H3 | Fraunces | **22px** | 600 | 1.25 | 0 |
| H4 | Fraunces | **18px** | 600 | 1.25 | 0 |
| Lead (intro) | Inter | **18px** | 300 | 1.8 | 0 |
| Corp | Inter | **16px** | 400 | 1.65 | 0 |
| Mic (UI, carduri, butoane) | Inter | **14px** | 400/500 | 1.5 | 0 |
| Caption / kicker / etichete | Source Code Pro | **12px** | 500 | 1.5 | 0.14em (kicker) · 0.04em (badge) |
| Citat editorial | Fraunces italic | **22px** | 400 | 1.5 | 0 |

„Fluid" = `clamp()` — crește cu lățimea ecranului între cele două valori; pe desktop vezi valoarea mare, pe mobil pe cea mică.

**Fonturi (din octombrie 2026):** **Fraunces** (titluri) + **Inter** (text, UI, butoane) + **Source Code Pro** (kickere). Au înlocuit Cormorant Garamond + Jost.
Ambele familii principale au **toate grosimile 100–900**, roman și italic. Fișierele: `assets/fonturi/` în `.woff2`, câte două subseturi
(`latin` + `latin-ext`, cel din urmă are ă, ș, ț); licență OFL. Sunt și în Google Fonts, dacă tema le ia de acolo.
Fallback: Georgia (titluri) / system-ui, Segoe UI, Arial (text) / Consolas (mono).

**Grosimi suplimentare** (bold real, nou): `700` bold — `<b>`, `<strong>`, accente în text; `800` extrabold și `900` black — doar în bannere, pe 1–3 cuvinte.

**Cifre:** aliniate pe rând peste tot (`font-variant-numeric: lining-nums`, pe `body`). Prețuri, statistici, tabele: și lățime egală
(`lining-nums tabular-nums`).

Cuvântul accentuat din titluri (`<em>`): Fraunces **italic**, greutate 400, culoare **prună `#6B2A4A`** (nu magenta: magenta înseamnă „se dă click"). Pe fundal închis: `#E9B6CC`.

### 1.3 Spațiere (scară pe 8px)

`8 · 16 · 24 · 32 · 40 · 48 · 56 · 64 · 80 · 96 · 128 px`. Padding vertical de secțiune: **128px** desktop · 80px tabletă (≤1024) · 56px mobil (≤640).
Componentele din design system folosesc intern o scară pe 4px: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 px`.
Container: **1200px** centrat, margini laterale 32 / 24 / 16 px. Lățime de citit: 68 caractere.

### 1.4 Raze de colț (site)

| Element | Rază |
|---|---|
| **Butoane** (toate) | **999px** (pill) |
| Carduri, casete, buy-box | **20px** (buy-box: 28px) |
| Imagini, media | 20px |
| Inputuri, select, textarea, itemi de dropdown | **12px** |
| Panouri flotante (dropdown) | 20px |
| Badge-uri, chips, tags, flag-uri | 999px (pill) |
| Avatar | 50% |
| Tooltip, tag mic, cod | 4px |

### 1.5 Umbre — scara de elevație (valorile REALE de pe site)

Toate umbrele sunt **calde** — culoarea de bază e ink `#211018` (rgb 33,16,24, negru-prună), niciodată negru pur. Toate au
deplasare **doar pe verticală** (X = 0), blur mare și **spread negativ** (umbra nu iese lateral din element).

| Nivel | `box-shadow` | Se folosește pe |
|---|---|---|
| **xs** | `0 4px 12px -6px rgba(33,16,24,0.07)` | segmented activ |
| **sm** | `0 10px 28px -14px rgba(33,16,24,0.10)` | buton neutru hover, knob de switch, card de coafeză (Hartă) |
| **md = card** | `0 20px 50px -12px rgba(33,16,24,0.12)` | card is-raised, buton primar hover, dropdown, buton de contact hover, card de preț evidențiat, skip-link |
| **lg = card hover** | `0 28px 60px -12px rgba(33,16,24,0.18)` | card interactiv hover, buy-box, toast, card de coafeză hover |
| **xl** | `0 40px 90px -20px rgba(33,16,24,0.22)` | modal |
| **focus (inel)** | `0 0 0 3px rgba(167,18,87,0.28)` | inputuri la focus, switch la focus |
| navbar solid | `0 12px 32px -24px rgba(33,16,24,0.35)` | bara de sus, după scroll |
| bară CTA lipicioasă | `0 -8px 30px -12px rgba(33,16,24,0.18)` | bara de jos de pe paginile de curs (umbră în SUS) |

Umbre de **text** (doar pe navbar-ul transparent, peste fotografie): `text-shadow: 0 1px 3px rgba(33,16,24,0.50)`;
logo alb: `filter: drop-shadow(0 1px 3px rgba(33,16,24,0.45))`. Dispar când navbar-ul devine solid.

**Focus vizibil (tastatură):** `outline: 2px solid #A71257; outline-offset: 2px`. Pe fundal închis: `outline-color: #DCC4B4`.

### 1.6 Mișcare

Durate: **120ms** (fast) · **200ms** (base) · **320ms** (slow) · **520ms** (slower).
Easing standard: `cubic-bezier(0.2, 0.8, 0.2, 1)`. Butoanele: apăsat → `translateY(1px)`. Cardurile interactive: hover → `translateY(-3px)`.
Cu `prefers-reduced-motion`: toate animațiile decorative se opresc; spinnerele rămân animate.

---

## 2 · Butoane

**Baza (`.tbe-btn`)** — se aplică TUTUROR variantelor:

| Proprietate | Valoare |
|---|---|
| Font | Inter, **14px**, greutate **500**, line-height 1, letter-spacing 0.04em |
| Padding | 0.85em × 1.6em = **≈12px sus/jos · ≈22px stânga/dreapta** |
| Înălțime minimă | **44px** |
| Rază | **999px** (pill) |
| Bordură | 1px solid (culoarea din tabelul de variante) |
| Tranziție | 200ms culoare/fundal/bordură · 120ms transform |
| Apăsat (`:active`) | `translateY(1px)` |
| Dezactivat | opacitate 0.45, `cursor: not-allowed` |

**Mărimi** (schimbă doar font-ul, padding-ul și înălțimea):

| Mărime | Font | Padding (≈) | Înălțime min. |
|---|---|---|---|
| `.is-sm` (mic) | **12px** | 8px × 13px | 36px |
| normal | **14px** | 12px × 22px | 44px |
| `.is-lg` (mare) | **16px** | 16px × 32px | 52px |
| `.is-icon` (doar iconiță) | — | 0 | 44 × 44px |
| `.is-block` | — | — | lățime 100% |

**Variante** — culori și umbre pe fiecare stare:

| Variantă | Fundal | Text | Bordură | **Hover** | **Umbră** |
|---|---|---|---|---|---|
| **Primar** `.is-primary` | `#A71257` | `#FFFFFF` | `#A71257` | fundal + bordură `#8E0F4A` | repaus: **niciuna** · hover: **`0 20px 50px -12px rgba(33,16,24,0.12)`** |
| **Secundar** `.is-secondary` | transparent | `#A71257` | `#E9B6CC` | fundal `#FBF0F5`, bordură `#A71257` | niciuna |
| **Neutru** `.is-neutral` | `#FFFFFF` | `#2C2521` | `#DCCFC4` | bordură `#C0B1A5` | hover: **`0 10px 28px -14px rgba(33,16,24,0.10)`** |
| **Fantomă** `.is-ghost` | transparent | `#2C2521` | transparent | fundal `#F2E9E2` | niciuna |
| **Link** `.is-link` | transparent | `#A71257`, subliniat | — | text `#8E0F4A` | niciuna (fără padding lateral, fără înălțime min.) |
| **Invers** `.is-inverse` (pe fundal închis / foto) | `#FFFFFF` | `#2C2521` | `#FFFFFF` | — | niciuna |
| **Contact** `.tbe-btn-contact` (Harta) | `#15803D` | `#FFFFFF` | fără | fundal `#116631` | hover: `0 20px 50px -12px rgba(33,16,24,0.12)` |
| **CTA pe card magenta** (ofertă, Atelierul de Bucle) | `#2A1520` | `#FAF4EF` | `#2A1520` | fundal `#2A1520` + umbră md | hover: umbră md |

Regulă: **un singur buton primar per ecran/secțiune.** Butonul busy (`.is-busy`): text transparent + spinner alb 16px, 2px, rotire 0.7s.

---

## 3 · Casete / carduri

**Baza (`.tbe-card`):**

| Proprietate | Valoare |
|---|---|
| Fundal | `#FFFFFF` |
| Bordură | 1px solid `#EDDDD3` |
| Rază | **20px** |
| Padding | **24px** |
| Umbră (repaus) | **niciuna** — cardul de bază stă doar pe bordură |
| Tranziție | 320ms umbră / transform / bordură |

**Variante:**

| Variantă | Fundal | Bordură | **Umbră** | Alte |
|---|---|---|---|---|
| implicit | `#FFFFFF` | `#EDDDD3` | niciuna | |
| `.is-interactive` (clicabil) | `#FFFFFF` | `#EDDDD3` → hover `#DCCFC4` | repaus: niciuna · **hover: `0 28px 60px -12px rgba(33,16,24,0.18)`** | hover: `translateY(-3px)`, cursor pointer |
| `.is-raised` (ridicat) | `#FFFFFF` | transparent | **`0 20px 50px -12px rgba(33,16,24,0.12)`** | |
| `.is-flat` (plat) | `#F2E9E2` | transparent | niciuna | |
| `.is-decor` | `#F4E9E1` | transparent | niciuna | |
| `.is-featured` (evidențiat) | `#FFFFFF` | **1.5px `#A71257`** | niciuna | |
| `.is-editorial` / `.is-mauve` (bloc editorial) | `#F3E7ED` | `#C396AA` | niciuna | |

**Interiorul cardului:**

| Element | Valoare |
|---|---|
| Media (`.tbe-card-media`) | ies din padding (margine −24px), raport 4:3, colțuri de sus 20px, fundal `#F4E9E1`, imagine `object-fit: cover` |
| Titlu (`.tbe-card-title`) | Fraunces **22px**, 600, margine jos 8px |
| Corp (`.tbe-card-body`) | Inter **14px**, `#6B5C51`, margine jos 16px |
| Subsol (`.tbe-card-foot`) | flex space-between, padding sus 16px, linie sus 1px `#EDDDD3` |

**Card de statistică (`.tbe-stat`):** ca baza (alb, bordură `#EDDDD3`, 20px, padding 24). Valoarea: Fraunces **32→48px**, 500,
**magenta `#A71257`**, cifre tabulare. Eticheta: Source Code Pro **12px** majuscule, spațiere 0.14em, prună `#6B2A4A`.

**Casete specifice paginilor de curs** (Atelierul de Bucle / Color Mastery / Makeup Essentials):

| Casetă | Fundal | Bordură | Rază | Padding | Umbră |
|---|---|---|---|---|---|
| **Buy-box** (hero) | `#FFFFFF` | 1px `#EDDDD3` | **28px** | corp 32px | **`0 28px 60px -12px rgba(33,16,24,0.18)`** |
| Card de preț | `#FFFFFF` | 1px `#EDDDD3` | 20px | 40px | niciuna |
| Card de preț **evidențiat** | `#FFFFFF` | **1.5px `#A71257`** | 20px | 40px | `0 20px 50px -12px rgba(33,16,24,0.12)` |
| Pilon / modul / „pentru cine" / mărturie / risc | `#FFFFFF` | 1px `#EDDDD3` | 20px | 24–40px | niciuna |
| Card de ofertă magenta | gradient `#8E0F4A → #A71257 (55%) → #740C3C`, 135° | — | 28px | 56px | `0 28px 60px -12px rgba(33,16,24,0.18)` |

---

## 4 · Formulare

| Element | Valori |
|---|---|
| **Input / select / textarea** | Inter **16px**, `#2C2521`, fundal `#FFFFFF`, bordură 1px `#DCCFC4`, rază **12px**, padding 12px × 16px, înălțime min. **48px**; textarea min. 120px |
| Placeholder | `#6B5C51` |
| **Focus** | bordură `#A71257` + inel **`0 0 0 3px rgba(167,18,87,0.28)`** (fără outline) |
| Dezactivat | fundal `#F2E9E2`, text `#9E9086` |
| Invalid | bordură `#B3261E` |
| Etichetă (`.tbe-label`) | Inter 14px, 500, `#2C2521`; asterisc obligatoriu `#B3261E` |
| Text ajutător | 12px, `#6B5C51` · Eroare: 12px, 500, `#B3261E` |
| Select | săgeată desenată din CSS, 6px, padding dreapta 2.75em |
| Checkbox / radio | 20 × 20px, `accent-color: #A71257` |
| **Switch** | pistă 46 × 26px, fundal `#C0B1A5` → activ `#A71257`, rază pill; buton 20px alb `#FFFFFF`, umbră `0 10px 28px -14px rgba(33,16,24,0.10)`, glisare 20px; focus: inelul de focus |
| **Segmented** | container fundal `#F2E9E2`, bordură 1px `#EDDDD3`, rază 12px, padding 3px; buton 14px 500 `#6B5C51`; **activ:** fundal `#FFFFFF`, text `#2C2521`, umbră `0 4px 12px -6px rgba(33,16,24,0.07)` |
| Căutare | input pill, iconiță lupă la 1.05em stânga |
| **Newsletter (footer, pe închis)** | fundal `rgba(250,244,239,0.06)`, bordură 1px `rgba(250,244,239,0.12)`, rază 12px, min. 48px, text `#FAF4EF`; focus: bordură `#E36D9E`, fundal `rgba(250,244,239,0.09)` |

---

## 5 · Badge-uri, chips, tags, avatare

| Element | Valori |
|---|---|
| **Badge** (`.tbe-badge`) | Source Code Pro **12px**, 500, majuscule, spațiere 0.04em, padding 4px × 9px, pill; fundal `#F2E9E2`, text `#6B5C51`, bordură 1px `#EDDDD3` |
| Badge `.is-action` | fundal `#FBF0F5`, text `#A71257`, bordură `#E9B6CC` |
| Badge `.is-solid` | fundal `#A71257`, text `#FFFFFF` |
| Badge succes / atenție / eroare | fundal soft (`#E4F1EA` / `#FBEEDC` / `#FBE7E5`), text semnal, fără bordură |
| **Badge „Recomandat de TBE"** | fundal `#A71257`, text `#FFFFFF`, mono 12px majuscule, pill — **rămâne magenta oriunde** |
| **Niveluri de loialitate** — glifă vie + text lizibil + fundal diluat: | |
| · Bronze ● | glifă `#C97F45` · text `#8A5228` · fundal `#F7EBE1` · bordură `rgba(201,127,69,0.40)` |
| · Silver ◈ | glifă `#9BA5B5` · text `#5D6675` · fundal `#EEF1F5` · bordură `rgba(155,165,181,0.45)` |
| · Gold ★ | glifă `#F0B72A` · text `#8A6300` · fundal `#FDF3D9` · bordură `rgba(240,183,42,0.55)` · luciu interior `inset 0 1px 0 rgba(255,255,255,0.5)` |
| · Diamond ◆ | glifă `#3FB6E8` · text `#1A6E92` · fundal `#E2F3FB` · bordură `rgba(63,182,232,0.55)` · luciu interior `inset 0 1px 0 rgba(255,255,255,0.55)` |
| · varianta plină `.is-tier-solid` | gradient 135° din glifă → bază, text alb (Gold: text `#4A3400`) |
| **Chip** (`.tbe-chip`, clicabil) | Inter 14px, padding 6px × 13px, pill, fundal `#FFFFFF`, bordură 1px `#DCCFC4`, text `#2C2521`; hover: bordură + text `#A71257`; activ: fundal `#A71257`, text alb |
| **Tag** (`.tbe-tag`, NEclicabil) | 14px, `#6B5C51`, fundal `#FFFFFF`, bordură 1px `#DCCFC4`, pill, padding 5px × 13px |
| **Avatar** | 44px (`.is-sm` 32 · `.is-lg` 64 · `.is-xl` 96), cerc, fundal `#DCC4B4`, inițială Fraunces 600; `.is-ring`: inel 2px alb + 4px magenta; grup: suprapunere −12px, contur 2px alb |
| Flag pe buy-box („Acces pe viață" / „Kit cadou") | fundal `#A71257`, text `#FFFFFF`, mono 12px majuscule, pill, poziționat 16px de la colțul stânga-sus al imaginii |

---

## 6 · Callout / alertă

Padding **16px × 24px**, rază **12px**, font 14px, **bordură completă 1px** (nu bară laterală), fundal `#F2E9E2`, bordură `#EDDDD3`.

| Variantă | Fundal | Bordură |
|---|---|---|
| succes | `#E4F1EA` | `rgba(46,125,91,0.45)` |
| atenție | `#FBEEDC` | `rgba(156,92,0,0.45)` |
| eroare | `#FBE7E5` | `rgba(179,38,30,0.45)` |
| info | `#F1E9EC` | `rgba(110,83,97,0.45)` |
| acțiune | `#FBF0F5` | `#E9B6CC` |

---

## 7 · Navigație

### 7.1 Navbar (bara de sus) — **aici e efectul „glass"**

Fixată sus, înălțime **88px** desktop · 72px tabletă · 64px mobil. Logo **40px** înălțime (34 / 30 pe mobil).
Are **două stări**:

| Stare | Când | Fundal | Text linkuri | Umbre |
|---|---|---|---|---|
| **Transparentă** | peste hero, la începutul paginii | transparent | `rgba(255,255,255,0.92)`, hover `#FFFFFF` | text: `0 1px 3px rgba(33,16,24,0.50)` · logo: `drop-shadow(0 1px 3px rgba(33,16,24,0.45))` |
| **Solidă („glass")** | după 24px de scroll, sau din start pe paginile fără hero | **`rgba(250,244,239,0.94)` + `backdrop-filter: blur(16px) saturate(1.05)`** | `#2C2521`, hover/activ `#A71257` | bordură jos 1px `#EDDDD3` · **`0 12px 32px -24px rgba(33,16,24,0.35)`** |

Linkurile: Inter **14px**, 500, spațiere 0.01em, padding 12px sus/jos. Sub link, o linie de 1px (`currentColor`, opacitate 0.75) care crește din centru la hover, 320ms.
Butonul CTA din navbar = **buton primar normal** (pill magenta, 14px, 44px) — **butonul în sine NU are efect glass**; sticla e bara din spatele lui.
Hamburger: 44 × 44px, trei linii de 1.5px, alb pe transparent / `#2C2521` pe solid. Apare sub 1024px (meniul și CTA-ul se ascund).

### 7.2 Dropdown („Cursuri")

Fundal `#FFFFFF`, bordură 1px `#EDDDD3`, rază **20px**, padding 8px, lățime min. 240px (280px grupat), umbră **`0 20px 50px -12px rgba(33,16,24,0.12)`**.
Apare de sub link, cu translație de 8px în sus → 0, 200–320ms. Pe desktop se deschide și la hover.
Item: 14px, 400, `#2C2521`, padding 12px × 16px, rază 12px; hover/focus: fundal `#FBF0F5`, text `#A71257`.
Etichetă de grup („Cursuri fizice / online"): mono 12px majuscule, spațiere 0.04em, `#9E9086`; al doilea grup are linie sus 1px `#EDDDD3`.

### 7.3 Sertar mobil

Fundal `#FAF4EF`, ocupă ecranul sub navbar, padding 24px sus / 64px jos. Linkuri: Fraunces **22px**, 500, spațiere −0.02em, `#2C2521`, padding 16px, linie jos 1px `#EDDDD3`; hover `#A71257`. Sub-linkuri: 16px, `#6B5C51`. CTA mare (pill, block) împins în josul sertarului.

### 7.4 Breadcrumb · Taburi · Paginare

| Element | Valori |
|---|---|
| Breadcrumb | 14px, `#6B5C51`, separator „/" `#9E9086`; hover `#A71257` |
| Taburi | 14px, 500, `#6B5C51`, padding 12px sus/jos, linie jos 2px transparent; **activ:** text `#A71257` + linie `#A71257`; hover: `#2C2521` |
| Paginare | butoane **44 × 44px**, 14px, rază 12px, fundal `#FFFFFF`, bordură 1px `#EDDDD3`; **curent:** fundal `#A71257`, text alb |

### 7.5 Bară CTA lipicioasă (paginile de curs) — **al doilea element „glass"**

Fixată jos, apare după ce treci de hero, dispare când blocul de ofertă e pe ecran.
Fundal **`rgba(255,255,255,0.92)` + `backdrop-filter: blur(12px)`**, bordură sus 1px `#EDDDD3`, umbră în sus **`0 -8px 30px -12px rgba(33,16,24,0.18)`**, padding 16px sus/jos.
Titlu Fraunces 18px `#2C2521` · subtitlu 12px `#6B5C51` · buton primar normal (pill magenta).
Intră glisând de jos, 320ms.

### 7.6 Skip link („Sari la conținut")

Vizibil doar la focus: fundal `#FFFFFF`, 14px 500, padding 8px × 24px, pill, umbră `0 20px 50px -12px rgba(33,16,24,0.12)`.

---

## 8 · Indicatori

| Element | Valori |
|---|---|
| Bară de progres | pistă 8px `#F2E9E2`, pill; umplere `#A71257`, tranziție 520ms |
| Pași (dots) | 8px cerc `#9E9086` (3.1:1); activ: 24 × 8px pill `#A71257`; făcut: `#A71257` |
| Rating (stele) | `#A71257`, 16px; goală `#9E9086` |
| Skeleton | gradient `#F2E9E2 → #F4E9E1 → #F2E9E2`, shimmer 1.4s, rază 4px |
| Spinner | 24px, bordură 2.5px `#DCCFC4`, sus `#A71257`, rotire 0.7s |

---

## 9 · Tabel

Font 14px. **Antet:** Source Code Pro 12px majuscule, spațiere 0.14em, `#6B5C51`, 500, padding 12px × 16px, linie jos **1.5px `#DCCFC4`**.
**Celule:** padding 16px, linie jos 1px `#EDDDD3`. Rând hover: `#F2E9E2`. Coloane numerice: aliniate dreapta, cifre tabulare.

---

## 10 · Overlay-uri

| Element | Valori |
|---|---|
| **Modal** | lățime max. 520px; interior: fundal `#FFFFFF`, rază **20px**, padding **32px**, umbră **`0 40px 90px -20px rgba(33,16,24,0.22)`** |
| Fundal modal (backdrop) — **al treilea element „glass"** | `rgba(44,37,33,0.55)` + `backdrop-filter: blur(3px)` |
| **Toast** | fundal `#2A1520` (negru-prună), text `#FAF4EF`, 14px, padding 16px × 24px, rază 12px, lățime max. 420px, umbră `0 28px 60px -12px rgba(33,16,24,0.18)` |
| **Tooltip** | fundal `#2A1520` (negru-prună), text `#FAF4EF`, **12px**, padding 8px × 12px, rază 4px, la 8px deasupra; apare la hover/focus (200ms) |
| **Acordeon** (`.tbe-accordion`) | rezumat Fraunces **18px** 600, padding 16px sus/jos, linie jos 1px `#EDDDD3`, semn „+" magenta (rotește 45° la deschidere); corp 14px `#6B5C51` |
| **FAQ de pe site** (`.faq-*`) | item cu chevron magenta care se rotește 180°; deschidere animată cu `grid-template-rows 0fr → 1fr`; un singur item deschis odată |
| Stare goală | text centrat `#6B5C51`, padding 64px × 24px, iconiță 40px la 35% opacitate |

---

## 11 · Hero, bandă, fotografie

| Element | Valori |
|---|---|
| Hero (`.tbe-hero`) | padding vertical fluid 56 → 128px; titlu display (40→72px), lățime max. 16 caractere; subtitlu 18px 300 `#6B5C51`, max. 52 caractere |
| Bandă promoțională | fundal `#A71257`, text `#FFFFFF`, 14px, padding 12px × 32px, centrat |
| **Scrim peste fotografie** (`.tbe-photo-scrim`) | gradient de jos în sus: `rgba(44,37,33,0.72)` la 0% → `rgba(44,37,33,0.28)` la 45% → transparent la 75%; text peste = `#FFFFFF`; rază 20px |
| Hero-ul homepage-ului (foto comunitate) | scrim măsurat pe pixeli: prag **0.55** alpha în zona textului (contrast alb ≥4.5:1); scrim suplimentar 300px sus, pentru navbar |

---

## 12 · Patternuri TBE

| Element | Valori |
|---|---|
| **Bandă de progres EMPIRIA** (`.tbe-path-node`) | mono 12px majuscule, padding 6px × 14px, pill; **neatins:** fundal `#F2E9E2`, text `#6B5C51`, bordură `#EDDDD3`; **făcut:** fundal `#FBF0F5`, text `#A71257`, bordură `#E9B6CC`; **curent:** fundal `#A71257`, text alb; **blocat:** + lacăt |
| **Card de coafeză** (Harta, `.tbe-salon`) | lățime max. 360px, fundal `#FFFFFF`, bordură 1px `#EDDDD3`, rază 20px, umbră `0 10px 28px -14px rgba(33,16,24,0.10)` → **hover `0 28px 60px -12px rgba(33,16,24,0.18)`** + `translateY(-2px)`; foto 1:1; nume Fraunces 22px 600; rol Fraunces italic 16px mauve; adresă 14px **magenta** cu pin; tag-uri de servicii pill; buton contact verde + cercuri social 44px în culorile platformelor |
| Scor de comunitate | valoare Fraunces 22px 600 `#2C2521` · maxim 14px `#6B5C51` |
| Bară de dovadă socială (paginile de curs) | fundal `#EDDDD3`, linii sus/jos 1px `#EDDDD3`, padding 24px; cifră Fraunces 18px 600 **magenta**, etichetă 14px `#6B5C51` |
| Citat editorial (`.tbe-quote`) | Fraunces italic 22px 400, linie stânga 2px `#C396AA`, padding 8px 0 8px 24px; atribuire Inter 14px prună `#6B2A4A` |
| Linie decorativă (`.tbe-rule`) | 1px `#C396AA` la 50% opacitate; scurtă: 64 × 2px pill, 100% |
| Kicker (supratitlu) | Source Code Pro 12px 500 majuscule, spațiere 0.14em, prună `#6B2A4A` (magenta doar când precede o acțiune) |

---

## 13 · Footer

Fundal **`#2A1520`** (negru-prună), text `#FAF4EF`, padding sus 128px (80 / 56). Grilă 5 coloane `1.6fr 0.9fr 1.2fr 0.9fr 1.3fr` (2 coloane ≤1024, 1 coloană ≤560).

| Element | Valori |
|---|---|
| Logo | 38px înălțime, varianta albă |
| Descriere | 14px, `#D9C2CB`, max. 34 caractere |
| Date firmă | 12px, `#D9C2CB`, line-height 1.75, cifre tabulare; numele firmei 14px 500 `#FAF4EF` |
| Titluri de coloană | Source Code Pro 12px majuscule, spațiere 0.14em, `#DFC8D1` |
| Linkuri | 14px, `#D9C2CB`; hover `#E36D9E` |
| Social | cercuri 44px, bordură 1px `rgba(250,244,239,0.12)`, iconiță 19px `#D9C2CB`; hover: text `#FAF4EF`, bordură `rgba(250,244,239,0.32)`, fundal `rgba(250,244,239,0.06)` |
| Badge Stripe | pilulă albă `#FFFFFF`, 36px înălțime, logo 18px — singurul loc cu culorile unei mărci străine |
| Bara de jos | linie sus 1px `rgba(250,244,239,0.12)`, 12px, `#D9C2CB` |

Paginile de curs (landing) au un **footer minimal**: doar rândul de brand + date firmă, plăți/ANPC/SOL și linkurile legale — fără coloane de navigare, newsletter sau social.

---

## 14 · Răspuns direct la „butonul cu glass efect"

Nu există un **buton** cu efect de sticlă în sistem. Efectul `backdrop-filter` (blur pe ce e în spate) apare pe **trei elemente**, iar butonul de pe ele e un buton primar normal:

| Element | Fundal | Blur | Umbră |
|---|---|---|---|
| **Navbar solid** (§7.1) | `rgba(250,244,239,0.94)` | 16px + saturate 1.05 | `0 12px 32px -24px rgba(33,16,24,0.35)` + bordură jos `#EDDDD3` |
| **Bară CTA lipicioasă** (§7.5, paginile de curs) | `rgba(255,255,255,0.92)` | 12px | `0 -8px 30px -12px rgba(33,16,24,0.18)` + bordură sus `#EDDDD3` |
| **Fundal de modal** (§10) | `rgba(44,37,33,0.55)` | 3px | — |

Cel mai probabil designerul a văzut **butonul „Vreau acces / Mă înscriu" din navbar sau din bara lipicioasă**, peste fundalul de sticlă — de aici „butonul cu glass". Butonul: pill magenta `#A71257`, 14px, 44px, fără umbră în repaus, umbra md la hover (vezi §2). Sticla și umbra sunt ale **barei**, nu ale butonului.

---

## Sursa valorilor

Rezolvate din `assets/css/tokens.css` (tema light) + `assets/css/components.css` (design system) + **`assets/css/site.css`** (rescrierile site-ului: raze, umbre difuze, navbar, footer) + `assets/css/faq.css` și fișierele paginilor de curs. Dacă un token se schimbă în design system, valorile de aici se refac din aceleași fișiere.
