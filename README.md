# Rens Windhorst - Informatica P4 Homepage


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


## Style.css - Kleuren & Vormgeving

### CSS Variabelen & Thema
**Kleuren**:
- **Achtergrond**: `linear-gradient(120deg, #181f2a 0%, #232b39 100%)` (een soort donkerblauw naar donkergrijs verloop)
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
**Wat het doet**: Zorgt dat de site er anders uitziet op kleine schermen.


### HTML5 Dingen
- `<main>`: Het belangrijkste deel van de pagina.
- `<section>`: Stukjes content die bij elkaar horen.
- `<nav>`: Voor de menu's / de navigatiebalk.
- `<header>`: De titel bovenaan de pagina.
- `<footer>`: Info onderaan de pagina.

### JavaScript Dingen
- **DOM Aanpassen**: `document.getElementById()` en `querySelectorAll()` om dingen op de pagina te veranderen. Dit zorgt ervoor dat de kaartjes en zoekfunctie werken.
- **Events**: `onkeyup` om te reageren als je typt. Dit zorgt ervoor dat de zoekfunctie meteen werkt als je iets typt.
- **Array Methoden**: `forEach()` om door een lijst met dingen te gaan. En te kijken of het er in staat.
- **String Methoden**: `toLowerCase()` en `includes()` voor het zoeken. Dit maakt het zoeken makkelijker, omdat het niet uitmaakt of je hoofdletters of kleine letters gebruikt.

## Hoe je het gebruikt

### Lokaal gebruiken:
1. Download alle bestanden in één map.
2. Open `Index.html` in een browser (zoals Chrome of Firefox).
3. Klik op de knoppen in het menu om naar andere pagina's te gaan.
4. Probeer de zoekfunctie op de Cheat Sheets pagina.


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