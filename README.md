# Rens Windhorst - Informatica P4 Homepage

Welkom bij de moderne programmeerhulpsite van Rens Windhorst! Deze site is ontworpen als eindproject voor Informatica P4 en biedt een centrale plek voor handige tools, uitgebreide cheat sheets en een overzicht van de beste bronnen voor webdevelopment.

## 🌑 Features

*   **Donker thema**: Modern, rustig en prettig voor de ogen
*   **Cheat Sheets**: Snel overzicht van de belangrijkste code voor HTML, CSS, JavaScript, Python, TypeScript, SQL, Java, C, PHP en meer
*   **Live zoekbalk**: Filter direct door alle cheat sheets met JavaScript
*   **Bronvermelding**: Uitgebreide lijst met de beste bronnen, uitleg en codevoorbeelden
*   **Responsief ontwerp**: Werkt op desktop, tablet en mobiel door CSS Grid en Flexbox
*   **Moderne animaties**: Hover effecten en transitions voor een professionele uitstraling

## 📄 Pagina's & Functionaliteiten

### 🏠 Index.html - Homepage
**Functie**: Startpagina met welkomstbericht en navigatie naar andere secties.

**Belangrijke code-onderdelen**:
- **HTML structuur**: Semantische HTML5 tags (`<main>`, `<section>`, `<header>`)
- **Navigatie**: Sticky navbar die bovenaan blijft bij scrollen
- **CTA buttons**: Call-to-action knoppen met hover effecten
- **Responsive afbeelding**: GIF met automatische grootte-aanpassing

**HTML head configuratie**:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="Style.css">
```
Dit zorgt voor juiste karakterset, mobiele weergave en styling.

### 📋 Sheets.html - Cheat Sheets
**Functie**: Interactieve pagina met programmeertaal overzichten en zoekfunctionaliteit.

**Belangrijke code-onderdelen**:
- **CSS Grid Layout**: Automatische kaart-indeling met `grid-template-columns: repeat(auto-fit, minmax(340px, 1fr))`
- **Live zoekfunctie**: JavaScript functie die real-time filtert
- **Data attributen**: `data-lang` voor betere zoekresultaten
- **Responsive design**: Kaarten passen zich aan aan schermgrootte

**JavaScript zoekfunctionaliteit**:
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
1. Haalt de zoekterm op uit het input veld
2. Zet alles om naar kleine letters voor case-insensitive zoeken
3. Doorloopt alle cheat sheet kaarten
4. Toont/verbergt kaarten op basis van of ze de zoekterm bevatten

### 📚 Bronvermelding.html - Bronnen & Uitleg
**Functie**: Overzicht van nuttige links en gedetailleerde code-uitleg.

**Belangrijke code-onderdelen**:
- **External links**: `target="_blank"` voor openen in nieuw tabblad
- **Code voorbeelden**: `<pre>` tags voor code formatting
- **Embedded content**: Uitleg van de zoekbalk en button effecten
- **Aria labels**: `aria-label="Hoofdnavigatie"` voor toegankelijkheid

## 🎨 Style.css - Styling & Design

### CSS Variabelen & Thema
**Kleurenschema**:
- **Primaire achtergrond**: `linear-gradient(120deg, #181f2a 0%, #232b39 100%)`
- **Accent kleur**: `#4fc3f7` (lichtblauw)
- **Tekst kleur**: `#ecf0f1` (lichtgrijs)
- **Kaart achtergrond**: `#232b39` (donkergrijs)

### Belangrijke CSS Technieken

**1. Flexbox Navigatie**:
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
**Functie**: Centreert navigatie-items met gelijke ruimte ertussen en blijft bovenaan de pagina.

**2. CSS Grid Layout**:
```css
.cheatsheet-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 40px;
}
```
**Functie**: Maakt automatisch responsive grid die zich aanpast aan schermgrootte.

**3. Hover Animaties**:
```css
.cheat-card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 16px 48px rgba(44,62,80,0.22);
    border-color: #4fc3f7;
}
```
**Functie**: Tilt kaarten omhoog met schaalvergroting en schaduw bij hover.

**4. Smooth Transitions**:
```css
transition: transform 0.2s, box-shadow 0.2s, background 0.3s;
```
**Functie**: Zorgt voor vloeiende animaties tussen verschillende states.

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
**Functie**: Past layout aan voor mobiele apparaten.

## ⚙️ Technische Implementatie

### HTML5 Semantiek
- `<main>`: Hoofdinhoud van elke pagina
- `<section>`: Logische secties binnen de content
- `<nav>`: Navigatie elementen
- `<header>`: Paginakopteksten
- `<footer>`: Voettekst informatie

### CSS Methodologie
- **Mobile-first design**: Basis styling voor mobiel, uitbreidingen voor desktop
- **Component-based**: Herbruikbare CSS classes (`.cheat-card`, `.cta-btn`)
- **Progressive enhancement**: Basis functionaliteit werkt altijd, animaties zijn een toevoeging

### JavaScript Functionaliteit
- **DOM Manipulation**: `document.getElementById()` en `querySelectorAll()`
- **Event Handling**: `onkeyup` event voor real-time zoeken
- **Array Methods**: `forEach()` voor iteratie over elementen
- **String Methods**: `toLowerCase()` en `includes()` voor zoekfunctionaliteit

## 🚀 Gebruik & Installatie

### Lokaal gebruik:
1. Download alle bestanden naar één map
2. Open `Index.html` in een moderne webbrowser
3. Navigeer tussen pagina's via de menubalken
4. Test de zoekfunctionaliteit op de Cheat Sheets pagina

### Vereisten:
- **Browser**: Chrome, Firefox, Safari, Edge (moderne versies)
- **JavaScript**: Moet ingeschakeld zijn voor zoekfunctionaliteit
- **Internet**: Niet vereist, werkt volledig offline

## 📦 Bestandsstructuur

```
Informatica_P4/
├── README.md
└── Homepage/
    ├── Index.html          # Homepage met welkomst en navigatie
    ├── Sheets.html         # Cheat sheets met zoekfunctionaliteit
    ├── Bronvermelding.html # Bronnen en code-uitleg
    ├── About.html          # Extra bronnen pagina
    ├── Style.css           # Alle styling en responsive design
    └── giphy.gif          # Decorative afbeelding
```

### Bestand Details:

**Index.html** (62 regels):
- Homepage layout met welkomstbericht
- CTA buttons naar andere secties
- Fast-food lijst (voorbeeld content)
- Footer met auteursinformatie

**Sheets.html** (178 regels):
- 9 verschillende programmeertaal cheat sheets
- Live zoekfunctionaliteit met JavaScript
- Responsive grid layout
- Data attributen voor betere zoekresultaten

**Style.css** (260 regels):
- Complete dark theme styling
- CSS Grid en Flexbox layouts
- Hover animaties en transitions
- Mobile-responsive media queries
- Custom button en kaart styling

**Bronvermelding.html** (92 regels):
- Externe links naar nuttige bronnen
- Code voorbeelden met syntax highlighting
- Uitleg van zoekbalk implementatie
- CSS button hover effect demonstratie

## 🔧 Geavanceerde Functionaliteiten

### Zoekbalk Implementatie
**Werking**: Real-time filtering zonder page refresh
**Techniek**: JavaScript DOM manipulation
**Performance**: Efficiënt door gebruik van `includes()` method

### Responsive Grid System
**Techniek**: CSS Grid met `auto-fit` en `minmax()`
**Voordeel**: Automatische aanpassing aan schermgrootte
**Fallback**: Single column layout op mobiele apparaten

### CSS Animatie System
**Hover effecten**: Transform, scale, translateY
**Smooth transitions**: Consistent timing en easing
**Performance**: Hardware-accelerated transforms

## 👨‍💻 Auteur & Ontwikkeling

**Gemaakt door**: Rens Windhorst  
**Vak**: Informatica P4  
**Tools gebruikt**: 
- Visual Studio Code (development)
- HTML (structuur)
- CSS (styling & layout)  
- Vanilla JavaScript (interactiviteit)
- Git (versiebeheer)

**Ontwikkeltijd**: Eindproject voor Informatica P4
**Browser compatibiliteit**: Alle moderne browsers
**Responsive design**: Desktop, tablet en mobiel

