# Kostprijs medische beeldvorming

Web-app die voor een radiologisch onderzoek het honorarium, de RIZIV-terugbetaling en het remgeld berekent.

- Tarieven: RIZIV-omzendbrief "Tarieven artsen – medische beeldvorming", van toepassing vanaf 1/07/2026
- Nomenclatuurteksten: officieuze coördinatie art. 17 (versie 1/07/2026) en art. 17bis (versie 1/10/2024)
- Forfait per opname (460784): ZOL Genk (710.371) en Ziekenhuis Maas en Kempen (710.717), bedragen vanaf 1/04/2026

Alles zit in `index.html`; er is geen server of build-stap nodig.
De bedragen gelden voor geconventioneerde artsen. Controleer bij twijfel steeds NomenSoft.

## Bijwerken
Vervang `index.html` door een nieuwe versie en verhoog in `sw.js` het versienummer (`kostprijs-v1` → `kostprijs-v2`),
zodat geïnstalleerde apps de nieuwe versie ophalen.

## Toegangscode
De pagina vraagt een eenvoudige code (nu `mbv`). Dit houdt toevallige bezoekers tegen, maar is geen echte beveiliging:
wie de broncode bekijkt, kan de inhoud lezen. Na één keer correct ingeven onthoudt de browser de code.

Code wijzigen: open de browserconsole op de pagina, typ `gateHash("nieuwecode")` en vervang de waarde van
`window.GATE_HASH` in `index.html` door het resultaat. Verhoog daarna het versienummer in `sw.js`.
