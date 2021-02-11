# LM-GULP

Základní šablona a devstack pro DART SASS.


## CSS

Kompilaci do CSS řeší **Gulp.js**, je použit preprocesor **DART SASS**.


### Základní struktura stylů

* **css/styles.scss** - základní struktura stylů, propojení na další části
  * **css/base** - základní vlastnosti a styly, nastavení, typografie
    * **base/base** - základní definice dokumentu a respo
    * **base/fonts** - definice a nastavení fontů
    * **base/form** - základní vzhled formulářových polí
    * **base/helpers** - pomocné styly
    * **base/layout** - vstupní layout a jednoduchá mřížka (flexbox)
    * **base/print** - tiskové styly, přebíjíme deklarace pro standardizaci
    * **base/typography** - vstupní vzhled nadpisů, odstavců...
    * **base/variables** - nastavení, barvy, kulaté rohy, breakpointy
  * **css/components** - jednotlivé komponenty stylů
  * **css/libs** - externí knihovny a styly

## Gulp

Gulp řeší spojování, generování a minifikaci SASS a JS souborů, optimalizaci obrázků, autoprefixování, atd.

### Gulp - instalace

* stáhnout a nainstalovat Node.js - https://nodejs.org/en/ (nutný restart počítače po první instalaci)
* spustit konzoli a najít cestu k projektu (cd + přetáhnout adresář projektu)
* zadat `npm install -g gulp-cli`
* zadat `npm install`
* vytvoří se adresář "node_modules" který neverzovat a nezasahovat do něj
* po instalaci stačí zadat `gulp` který bude hlídat změnu souborů a generovat potřebné

### Gulp - použití

* Před použitím je potřeba upravit lokální URL adresu v souboru `gulpfile.js`.
* Základní task `gulp` provádí sledování změn, spojování CSS a JS souborů...
* Lze využít také tasky `gulp makejs` (spojí a minifikuje JS), `gulp makecss` (vygeneruje CSS z SASS souborů, spustí autoprefixer a minifikuje CSS) a `gulp images` optimalizuje obrázky.
