# Rens Windhorst - Informatica P4 Homepage

Op deze site vind je handige lijstjes voor heel veel programmeer talen.

## Wat je hier kan vinden

*   **Donker thema**: Ziet er cool uit en is rustig voor je ogen.
*   **Cheat Sheets**: Een snelle lijst met de belangrijkste code voor HTML, CSS, JavaScript, Python, TypeScript, SQL, Java, C, PHP en nog meer.
*   **Live zoekbalk**: Je kan meteen zoeken in alle cheat sheets met JavaScript.
*   **Bronnen**: Een lijst met goede websites en uitleg.
*   **Werkt overal**: De site ziet er goed uit op je computer, tablet en telefoon.
*   **Coole animaties**: Dingen bewegen als je er met je muis overheen gaat.

## Pagina's en wat ze doen

### Index.html - Homepage
**Wat het is**: De eerste pagina die je ziet met een welkomstbericht en knoppen naar andere delen van de site.

**Belangrijke code**:
- **HTML structuur**: Speciale HTML5-tags zoals `<main>`, `<section>`, `<header>`.
- **Menu**: Een menu dat bovenaan blijft staan als je naar beneden scrollt.
- **Knoppen**: Knoppen die iets doen als je er met je muis overheen gaat.
- **Plaatje**: Een GIF-plaatje dat vanzelf groter of kleiner wordt.

**HTML head instellingen**:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="Style.css">
```
Dit zorgt ervoor dat alles goed werkt op je telefoon en dat de site er mooi uitziet.

### Sheets.html - Cheat Sheets
**Wat het is**: Een pagina waar je lijstjes met code kan zien en waar je kan zoeken.

**Belangrijke code**:
- **CSS Grid Layout**: De kaartjes met code passen zich automatisch aan met `grid-template-columns: repeat(auto-fit, minmax(340px, 1fr))`
- **Live zoekfunctie**: Een JavaScript dingetje dat meteen zoekt terwijl je typt.
- **Data attributen**: `data-lang` om beter te kunnen zoeken.
- **Werkt op elk scherm**: De kaartjes worden groter of kleiner, net wat past.

**JavaScript zoekfunctie**:
```javascript
function filterCheatSheets() {
    const input = document.getElementById('cheatSearch').value.toLowerCase();
    document.querySelectorAll('.cheat-card').forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? '' : 'none';
    });
}
```
**Hoe het werkt**:
1. Kijkt wat je in het zoekvak typt.
2. Maakt alles kleine letters zodat het niet uitmaakt of je met hoofdletters typt.
3. Kijkt naar alle kaartjes met code.
4. Laat alleen de kaartjes zien waar jouw zoekwoord in staat.

### Bronvermelding.html - Bronnen & Uitleg
**Wat het is**: Een lijst met handige links en meer uitleg over de code.

**Belangrijke code**:
- **Links naar andere sites**: `target="_blank"` zodat ze in een nieuw tabblad openen.
- **Code voorbeelden**: `<pre>` tags zodat de code er netjes uitziet.
- **Uitleg**: Over hoe de zoekbalk en de knop-effecten werken.
- **Aria labels**: `aria-label="Hoofdnavigatie"` zodat mensen met een screenreader het ook snappen.

## Style.css - Kleuren & Vormgeving

### CSS Variabelen & Thema
**Kleuren**:
- **Achtergrond**: `linear-gradient(120deg, #181f2a 0%, #232b39 100%)` (een soort donkerblauw/grijs)
- **Belangrijke kleur**: `#4fc3f7` (lichtblauw)
- **Tekst kleur**: `#ecf0f1` (lichtgrijs)
- **Kaart achtergrond**: `#232b39` (donkergrijs)

### Belangrijke CSS Trucjes

**1. Flexbox Menu**:
```css
.navbar {
    display: flex;
    justify-content: center;
    gap: 32px;
    position: sticky;
    top: 0;
    z-index: 10;
}
```
**Wat het doet**: Zet de menu-items in het midden met ruimte ertussen en blijft bovenaan de pagina.

**2. CSS Grid Layout**:
```css
.cheatsheet-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 40px;
}
```
**Wat het doet**: Maakt een soort rooster dat vanzelf goed staat op elk scherm.

**3. Hover Animaties**:
```css
.cheat-card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 16px 48px rgba(44,62,80,0.22);
    border-color: #4fc3f7;
}
```
**Wat het doet**: De kaartjes gaan een beetje omhoog en worden groter als je er met je muis op staat.

**4. Soepele Overgangen**:
```css
transition: transform 0.2s, box-shadow 0.2s, background 0.3s;
```
**Wat het doet**: Zorgt dat de animaties er mooi en soepel uitzien.

**5. Responsive Design**:
```css
@media (max-width: 900px) {
    .cheatsheet-grid {
        grid-template-columns: 1fr;
    }
    .navbar {
        flex-direction: column;
    }
}
```
**Wat het doet**: Zorgt dat de site er anders uitziet op kleine schermen (zoals je telefoon).

## Hoe het technisch werkt

### HTML5 Dingen
- `<main>`: Het belangrijkste deel van elke pagina.
- `<section>`: Stukjes content die bij elkaar horen.
- `<nav>`: Voor de menu's.
- `<header>`: De titel bovenaan de pagina.
- `<footer>`: Info onderaan de pagina.

### CSS Manier van werken
- **Eerst voor mobiel**: De basis is voor telefoons, daarna extra dingen voor computers.
- **In stukjes**: Herbruikbare CSS-klassen (zoals `.cheat-card`, `.cta-btn`).
- **Steeds beter**: De basis werkt altijd, coole animaties zijn extra.

### JavaScript Dingen
- **DOM Aanpassen**: `document.getElementById()` en `querySelectorAll()` om dingen op de pagina te veranderen.
- **Events**: `onkeyup` om te reageren als je typt (voor het zoeken).
- **Array Methoden**: `forEach()` om door een lijst met dingen te gaan.
- **String Methoden**: `toLowerCase()` en `includes()` voor het zoeken.

## Hoe je het gebruikt

### Lokaal gebruiken:
1. Download alle bestanden in één map.
2. Open `Index.html` in een browser (zoals Chrome of Firefox).
3. Klik op de knoppen in het menu om naar andere pagina's te gaan.
4. Probeer de zoekfunctie op de Cheat Sheets pagina.

### Wat je nodig hebt:
- **Browser**: Een moderne browser zoals Chrome, Firefox, Safari of Edge.
- **JavaScript**: Moet aanstaan, anders werkt het zoeken niet.
- **Internet**: Niet nodig, het werkt helemaal offline.

## Bestanden

```
Informatica_P4/
├── README.md
└── Homepage/
    ├── Index.html          # De hoofdpagina
    ├── Sheets.html         # De pagina met cheat sheets en zoekfunctie
    ├── Bronvermelding.html # Pagina met bronnen en uitleg
    ├── About.html          # Extra pagina met bronnen
    ├── Style.css           # Alle styling
    └── giphy.gif          # Een plaatje
```

### Details over de bestanden:

**Index.html** (62 regels):
- De homepage met een welkomsttekst.
- Knoppen naar andere pagina's.
- Een voorbeeldlijstje.
- Info over wie het gemaakt heeft.

**Sheets.html** (178 regels):
- 9 cheat sheets voor verschillende programmeertalen.
- Live zoekfunctie met JavaScript.
- Responsive rooster layout.
- Data attributen om beter te zoeken.

**Style.css** (260 regels):
- Alle styling voor het donkere thema.
- CSS Grid en Flexbox voor de layout.
- Hover animaties en overgangen.
- Media queries om het responsive te maken.
- Styling voor knoppen en kaartjes.

**Bronvermelding.html** (92 regels):
- Links naar handige websites.
- Code voorbeelden.
- Uitleg over de zoekbalk.
- Demo van het hover effect op knoppen.

## Extra coole dingen

### Zoekbalk
**Hoe het werkt**: Zoekt meteen zonder dat de pagina opnieuw laadt.
**Techniek**: JavaScript die de pagina aanpast.
**Snelheid**: Werkt snel door `includes()`.

### Responsive Rooster
**Techniek**: CSS Grid met `auto-fit` en `minmax()`.
**Voordeel**: Past zich automatisch aan aan hoe groot je scherm is.
**Als het niet past**: Op telefoons staat alles onder elkaar.

### CSS Animaties
**Hover effecten**: Dingen bewegen, worden groter.
**Soepele overgangen**: Alles beweegt netjes.
**Snelheid**: Gebruikt dingen die je computer snel kan doen.

## Wie heeft dit gemaakt?

**Gemaakt door**: Rens Windhorst
**Vak**: Informatica P4
**Tools gebruikt**:
- Visual Studio Code (om te programmeren)
- HTML (voor de structuur)
- CSS (voor de styling en layout)
- Vanilla JavaScript (voor de interactieve dingen)
- Git (om versies bij te houden)

**Ontwikkeltijd**: Eindproject voor Informatica P4
**Browser compatibiliteit**: Werkt op alle moderne browsers
**Responsive design**: Voor computer, tablet en mobiel

