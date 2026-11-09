# Nykredit-promptbiblioteket

Statisk hjemmeside til Nykredit-kredsen i Finansforbundet: **https://nykredit.boetter.dk**

Bygget til workshoppen *Kom i gang med kunstig intelligens – på 3 timer* onsdag den 11. november 2026
(hold 1 kl. 9–12, hold 2 kl. 13–16, Åhave Parkvej 29, Viby J) med Jacob Bøtter.
Prompterne er skrevet til Microsoft 365 Copilot, som er Nykredit-medarbejdernes arbejdsværktøj.

209 prompts: de 138 fra workshoppen (knyttet til dagens tolv eksempler), 8 til de nye Copilot-slides
og 63 rolleprompts fra Nykredit-biblioteket fra april 2026 (kunderådgivning, kredit, investering, jura,
IT, ledelse og kommunikation). Aprilversionen ligger i git-historikken.

## Deploy

- GitHub-repo: `boetter/nykredit`, gren `main`. Filerne ligger i roden af repoet.
- Netlify deployer automatisk, når der pushes til `main`. Ingen byggekommando, udgivelsesmappe = roden.
- Domænet `nykredit.boetter.dk` er allerede koblet på Netlify-sitet.

Ved rettelser: ret filerne, hæv `?v=` på de to `<script>`-tags nederst i `index.html`
(så browserne henter de nye filer), commit og push til `main`.

## Lokal forhåndsvisning

```
python3 -m http.server 8793
```

Kør kommandoen i mappen med `index.html`, og åbn `http://localhost:8793/`.

## Filer

- `index.html` – layout, Nykredits farver og skrift, sidens tekster
- `prompts.js` – promptkortene (`window.PROMPTS`)
- `app.js` – søgning, filtre (type, Fra dagen, arbejdssituation, fagområde), udfoldning og kopiering
- `nykredit-blaa.svg` – Nykredits navnetræk i headeren
- `NykreditSans-Regular.woff`, `-Medium.woff`, `-Bold.woff` – Nykredit Sans

Ingen backend, login, cookies, analyseværktøjer eller eksterne ressourcer.

## Promptformat

Hvert kort i `prompts.js` har felterne `id` (`p001` … i filens rækkefølge), `example` (valgfrit,
`E01`–`E12`), `category` (arbejdssituation), `field` (fagområde), `type`, `title`, `when` (begynder
altid med "Brug den"), `tags`, `prompt` (pladsholdere i `[KLAMMER]`), `safety` og evt. `avoid`.
Kortene henviser til Nykredits interne regler – de fortæller ikke, hvad reglerne tillader.

| `type` | Badge | Hvad det er |
|---|---|---|
| `micro` | MIKRO | Én til to sætninger. Sendes midt i en samtale. |
| `quick` | KORT | En lille, færdig opgave. |
| `deep` | RKM | Rolle, kontekst og metode – dagens fulde promptmodel. |

**Fra dagen (`example`):** 01 Sparringspartner · 02 Skriveblokering · 03 Fokusgruppe · 04 Praktikant ·
05 IT-supporter · 06 Alle sprog · 07 Aflaste kolleger · 08 Researcher · 09 Slides · 10 Programmør ·
11 Ny kollega · 12 Kreativ makker. Etiketterne står i `EXAMPLES` i `app.js`.

**Fagområder (`field`):** På tværs · Kunderådgivning · Kredit · Investering & pension · Jura & compliance ·
Back-office & økonomi · IT · Kommunikation · Ledelse & HR. Rækkefølgen og de tilladte værdier står i
`FIELDS` i `app.js`; en ny værdi skal også tilføjes dér.

**Arbejdssituationer (`category`):** læses automatisk ud af `prompts.js` og sorteres alfabetisk:
Analyse & data · Beslutning & sparring · Egen arbejdsdag · Kunde & kollega · Kvalitet & sikkerhed ·
Møder & samarbejde · Projekter & processer · Prompting & sparring · Præsentation & visualisering ·
Research & læring · Skrivning & redigering · Vaner & udvikling.
