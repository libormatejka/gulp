# LM-GULP

Základní šablona a devstack pro DART SASS.


## CSS

Kompilaci do CSS řeší **Gulp.js**, je použit preprocesor **DART SASS**.


### Základní struktura stylů (ITCSS)

* **css/style.scss** - základní struktura stylů, propojení na další části
  * **css/src** - základní vlastnosti a styly, nastavení, typografie
    * **src/debug** - debug styly
    * **src/settings** - nastavení
    * **src/tools** - funkce a mixiny
    * **src/generic** - resetování a normalizace css
    * **src/elements** - nastavení základních elementů
    * **src/objects** - layouty, animace
    * **src/components** - componenty
    * **src/utilities** - helpery a ostatní

## Gulp

Gulp řeší spojování, generování a minifikaci SASS souborů a autoprefixování.

### Gulp - Jak instalovat?

* stáhnout a nainstalovat Node.js - https://nodejs.org/en/
* zadat `npm install -g gulp-cli`
* zadat `npm install`
* adresář "node_modules" neverzovat a nezasahovat do něj
* po instalaci zadat `gulp` který bude hlídat změnu souborů a generovat potřebné

### Gulp - Jak použít?

* Natavit základní cesty v `gulpfile.js`.
* Základní task `gulp` provádí sledování změn, spojování CSS souborů.
* Alternativně lze použít i `gulp makecss` (vygeneruje CSS z SASS souborů, spustí autoprefixer a minifikuje CSS).
