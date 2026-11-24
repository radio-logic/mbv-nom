# mbv nom calculator

Web-app die voor radiologische onderzoeken, puncties en percutane drainages het honorarium, de RIZIV-terugbetaling
en het remgeld berekent, inclusief cumulatieregels en het bijkomend honorarium voor dringende verstrekkingen.

Huidige versie: `kostprijs-v15` (zie `sw.js`).

## Bronnen (stand 24/11/2026)

Gecoördineerde nomenclatuurteksten (officieuze coördinatie RIZIV):

| Artikel | Inhoud | Versie |
|---|---|---|
| 11 | Puncties (§ 4), geleiding 355913 | 1/11/2025 |
| 17 | RX, CT, NMR, CBCT, consultance, forfaits per voorschrift | 1/07/2026 |
| 17bis | Echografie | 1/10/2024 |
| 17quater | Echografie door niet-radiologen (cumulregel) | 1/08/2021 |
| 26 | Bijkomend honorarium dringend (nacht, weekend, feestdag) | 1/09/2026 |
| 34 | Percutane drainage, accrediteringssupplement | 1/07/2026 |

Tariefomzendbrieven:

| Bestand | Inhoud | Van toepassing vanaf |
|---|---|---|
| tarief_artsen_deel04 | Medische beeldvorming (art. 17, 17bis, 17ter) | 1/07/2026 |
| tarief_artsen_deel07 | Medische verstrekkingen deel 1 (art. 11) | 1/01/2026 |
| tarief_artsen_deel12 | Medische verstrekkingen deel 6 (art. 26) | 1/01/2026 |
| tarief_artsen_deel13 | Medische verstrekkingen deel 7 (art. 34) | 1/07/2026 |

Forfait medische beeldvorming per opname (460784), bedragen vanaf 1/11/2026:
- ZOL Genk (710.371): € 71,39 (67 % bij heropname: € 47,84)
- Ziekenhuis Maas en Kempen, Maaseik (710.717): € 57,49 (67 %: € 38,52)

Een maandelijkse geplande taak controleert of het RIZIV nieuwe versies publiceert. De volledige lijst met
gebruikte versies staat in het project "Nomenclatuur berekenen" (`claude/riziv-bronnen-baseline.md`).

Alles zit in `index.html`; er is geen server of build-stap nodig en de pagina laadt geen externe bestanden.
De bedragen gelden voor geconventioneerde artsen. Controleer bij twijfel steeds NomenSoft.

## Bijwerken
Vervang `index.html` door een nieuwe versie en verhoog in `sw.js` het versienummer (bv. `kostprijs-v15` → `kostprijs-v16`),
zodat geïnstalleerde apps de nieuwe versie ophalen. Werk ook de tabellen hierboven bij.

## Toegangscode
De pagina vraagt een eenvoudige code (nu `mbv`). Dit houdt toevallige bezoekers tegen, maar is geen echte beveiliging:
wie de broncode bekijkt, kan de inhoud lezen. Na één keer correct ingeven onthoudt de browser de code.

Code wijzigen: open de browserconsole op de pagina, typ `gateHash("nieuwecode")` en vervang de waarde van
`window.GATE_HASH` in `index.html` door het resultaat. Verhoog daarna het versienummer in `sw.js`.
