// Nykredit-promptbiblioteket · Nykredit-kredsen i Finansforbundet · nykredit.boetter.dk
// Bygget til workshoppen "Kom i gang med kunstig intelligens – på 3 timer" den 11. november 2026 med Jacob Bøtter.
// type: "micro" vises som MIKRO, "quick" som KORT, "deep" som RKM (rolle · kontekst · metode).
// Arbejdssituationen (category) er den primære indgang. Fagområde (field) og "Fra dagen" (example, E01–E12) er separate filtre.
// example er valgfrit: 01 Sparringspartner · 02 Skriveblokering · 03 Fokusgruppe · 04 Praktikant · 05 IT-supporter · 06 Alle sprog · 07 Aflaste kolleger · 08 Researcher · 09 Slides · 10 Programmør · 11 Ny kollega · 12 Kreativ makker
// field: "På tværs" betyder, at prompten virker uanset jobfunktion. Øvrige værdier: Kunderådgivning · Kredit · Investering & pension · Jura & compliance · Back-office & økonomi · IT · Kommunikation · Ledelse & HR (se FIELDS i app.js).
// p001–p138: biblioteket fra workshoppen. p139–p146: prompts til de nye Copilot-slides (arbejdsprofil, referat, dokumenter, stabschef, PowerPoint, interaktiv illustration).
// p147–p209: rolleprompts fra Nykredit-promptbiblioteket april 2026 (kunderådgivning, kredit, investering, jura, IT, ledelse, kommunikation), tilpasset Copilot.

const PROMPTS = [
  // Fra dagen · E01 Sparringspartner
  {
    id: "p001",
    example: "E01",
    category: "Møder & samarbejde",
    field: "På tværs",
    type: "deep",
    title: "Brief mig, før jeg går ind til mødet",
    when: "Brug den, når du sidder i mange møder og vil have overblikket på forhånd – gem den én gang, og skriv derefter kun én linje om mødet.",
    tags: ["mødeforberedelse", "brief", "RKM", "offentlige kilder", "gemt prompt"],
    prompt: `Rolle: Du er min assistent. Jeg arbejder i back-office i en bank og sidder i mange møder med kolleger, leverandører og andre afdelinger.

Kontekst: Når jeg beskriver et møde, sætter du dig ind i emnet, så du forstår det til bunds. Gæt aldrig. Brug kun offentlige kilder og det, jeg selv giver dig, og markér tydeligt, hvor du er usikker.

Metode: Find baggrund om emnet, seneste nyt og de regler eller vejledninger, der gælder. Giv mig så fire ting – mange tabeller, få ord:
1. Baggrund: hvad emnet handler om, og hvorfor det er på dagsordenen nu
2. Hvem sidder med: hvilke roller og interesser der typisk er i rummet
3. Faldgruber: det, der oftest går galt i den slags møder
4. Mine fem spørgsmål: dem, jeg bør stille for at komme videre

Mødet i dag: [ÉN LINJE OM MØDET – FX "LEVERANDØRMØDE OM NYT SAGSSYSTEM"]`,
    safety: "Alt er samlet fra offentlige kilder. Kontrollér tal og regler, før du bruger dem i mødet – det er dine ti minutter, ikke maskinens.",
    avoid: "Skriv ikke navne på kunder, kolleger eller interne sagsnumre i linjen om mødet. Gem prompten i Copilot, og følg Nykredits interne regler."
  },
  {
    id: "p002",
    example: "E01",
    category: "Møder & samarbejde",
    field: "På tværs",
    type: "micro",
    title: "Én linje om mødet",
    when: "Brug den, når du har fem minutter, før et møde starter.",
    tags: ["mødeforberedelse", "hurtig", "spørgsmål"],
    prompt: `Jeg skal om lidt til [ÉN LINJE OM MØDET – FX "STATUSMØDE MED IT OM EN FORSINKET OPGRADERING"]. Giv mig baggrund, de typiske faldgruber og de fem spørgsmål, jeg bør stille. Kun offentlig viden – gæt ikke.`,
    safety: "Læs svaret som et udkast til din egen forberedelse. Kontrollér alt, der ligner et faktum."
  },
  // Fra dagen · E02 Skriveblokering
  {
    id: "p003",
    example: "E02",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "quick",
    title: "Tredive idéer – gruppér dem så",
    when: "Brug den, når den tomme side koster en time, og du ikke vil vælge den første idé, du får.",
    tags: ["idéer", "brainstorm", "skriveblokering", "gruppering"],
    prompt: `Giv mig tredive idéer til [EMNE – FX "HVORDAN VI DELER VIDEN, NÅR EN KOLLEGA STOPPER"].

De første ti må gerne være de oplagte. Bliv ved, til du når tredive – det er de sidste tyve, jeg er interesseret i.

Gruppér dem derefter i fem temaer med en overskrift hver. Marker de tre idéer, der er mest overraskende, og den ene, der kan afprøves i næste uge uden at spørge nogen om lov.`,
    safety: "Idéerne er råstof. Du vælger, og du vurderer, hvad der passer til teamet og til Nykredits interne regler."
  },
  {
    id: "p004",
    example: "E02",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "micro",
    title: "Den første grimme version",
    when: "Brug den, når du har kigget på en tom side i ti minutter.",
    tags: ["udkast", "skriveblokering", "kom i gang"],
    prompt: `Skriv en første, grim version af [TEKSTEN – FX "EN MAIL TIL TEAMET OM DEN NYE KONTROL"] på højst ti linjer. Den skal ikke være god. Den skal bare findes, så jeg har noget at rette i.`,
    safety: "Ret den til med det samme – den grimme version må aldrig sendes, som den er."
  },
  // Fra dagen · E03 Fokusgruppe
  {
    id: "p005",
    example: "E03",
    category: "Kunde & kollega",
    field: "På tværs",
    type: "deep",
    title: "Fem fiktive kolleger læser mit udkast",
    when: "Brug den, før et notat, en mail eller en plan går ud til mange – og du kun kan spørge dig selv.",
    tags: ["fokusgruppe", "fiktive personer", "feedback", "udkast", "indvendinger"],
    prompt: `Rolle: Du er facilitator for en fokusgruppe med fem opdigtede kolleger. Ingen af dem findes. Deres indvendinger gør.

Kontekst: Her er mit udkast: [INDSÆT UDKAST UDEN KUNDE- ELLER PERSONDATA]. Det skal læses af [MÅLGRUPPE], og formålet er [FORMÅL]. Panelet:
1. Lene, compliance og hvidvask – vil se, hvor en antagelse kommer fra, og hvad der sker, når den er forkert
2. Henrik, IT-drift – spørger, hvem der ejer det, når det fejler klokken tre om natten
3. Aisha, pension – kan hun forklare det for en kunde på to minutter?
4. Andreas, erhvervskunde – køber ikke et system, køber et svar inden fredag
5. Maja, ny i back-office – falder over forkortelser, hun ikke kender

Metode:
1. Lad hver af de fem læse udkastet og reagere i første person: hvad forstår de, hvad reagerer de på, hvad bliver de i tvivl om, og én konkret ændring de vil have
2. Saml de tre indvendinger, der går igen
3. Foreslå de mindste ændringer i udkastet, der fjerner dem
4. Slut med det, hele panelet er enige om

Præsentér ikke reaktionerne som dokumenteret indsigt. De er et gæt fra fem personer, der ikke findes.`,
    safety: "Fokusgruppen er inspiration. Test vigtige tekster på rigtige kolleger, før de sendes.",
    avoid: "Udskift ikke panelet med rigtige, navngivne kolleger. Ingen kunde- eller persondata i udkastet."
  },
  {
    id: "p006",
    example: "E03",
    category: "Beslutning & sparring",
    field: "På tværs",
    type: "micro",
    title: "Læs det som den, der helst vil sige nej",
    when: "Brug den, når dit forslag skal forbi en, der har travlt og er skeptisk.",
    tags: ["indvendinger", "godkendelse", "kritik"],
    prompt: `Læs mit udkast som den kollega, der skal godkende det og helst vil sige nej. Hvad er de tre første indvendinger – og hvilken én sætning ville få dig til at læse videre?`,
    safety: "Indvendingerne er gæt. Din rigtige godkender kan have andre."
  },
  // Fra dagen · E04 Praktikant
  {
    id: "p007",
    example: "E04",
    category: "Egen arbejdsdag",
    field: "På tværs",
    type: "deep",
    title: "Gør min rodede uge til en plan",
    when: "Brug den mandag morgen, når kalender, mails og løse opgaver ligger i tre forskellige bunker.",
    tags: ["ugeplan", "praktikant", "kalender", "mails", "prioritering"],
    prompt: `Rolle: Du er min praktikant. Du er grundig, spørger, når du er i tvivl, og du bestemmer ikke over min tid – det gør jeg.

Kontekst: Her er min uge, ufølsomt beskrevet: møder [LISTE MED DAG, TIDSPUNKT OG EMNE – INGEN NAVNE PÅ KUNDER], opgaver [LISTE], frister [LISTE] og de mails, jeg ikke har svaret på [KORTE STIKORD]. Min arbejdstid er [TIDSRUM], og jeg vil helst have fokustid [HVORNÅR].

Metode:
1. Stil mig højst tre spørgsmål, hvis noget er uklart – ellers gå i gang
2. Lav en ugeplan dag for dag: møder, forberedelse før hvert møde, fokusblokke og buffer
3. Skriv en kort brief til hvert møde: formål, hvem der typisk deltager, og de åbne spørgsmål jeg skal have svar på
4. Saml de spørgsmål, jeg endnu ikke har svaret nogen på, med forslag til hvornår
5. Marker det, der ikke kan nås, og foreslå hvad der flyttes

Hold det i tabeller. Ingen motiverende fyld.`,
    safety: "Planen er et udkast. Du flytter selv rundt, og du afgør, hvad der er vigtigt. I Copilot kan du bede den læse din kalender og dine mails direkte – følg Nykredits interne regler for, hvad der må deles.",
    avoid: "Kopiér ikke hele mails med kunde- eller persondata ind i et privat AI-værktøj. Brug stikord, eller brug Copilot i Nykredit."
  },
  {
    id: "p008",
    example: "E04",
    category: "Møder & samarbejde",
    field: "På tværs",
    type: "quick",
    title: "Opsummér mailtråden: tre punkter og én beslutning",
    when: "Brug den, når du er sat cc på en tråd med 23 svar og bare skal vide, hvad der er besluttet.",
    tags: ["mailtråd", "Outlook", "Copilot", "opsummering", "beslutning"],
    prompt: `Opsummér denne mailtråd for mig:

[INDSÆT TRÅDEN – ELLER BED COPILOT I OUTLOOK OM AT LÆSE DEN DIREKTE]

Giv mig præcis:
1. Tre punkter om, hvad tråden handler om, og hvor den står nu
2. Den ene beslutning, der er truffet – eller "ingen beslutning endnu", hvis den mangler
3. Det, der forventes af mig, med frist hvis den er nævnt
4. Hvem der stadig skylder et svar

Gæt ikke. Skriv "fremgår ikke", hvor tråden er uklar.`,
    safety: "Åbn selv den seneste mail, før du handler på opsummeringen. Copilot i Outlook holder tråden inden for Nykredit – kopiér ikke tråde med kunde- eller persondata ud i et privat værktøj."
  },
  {
    id: "p009",
    example: "E04",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "quick",
    title: "Udkast til svar – i Copilot i Outlook",
    when: "Brug den, når du ved, hvad du vil svare, men ikke gider skrive det pænt.",
    tags: ["mail", "svar", "Outlook", "Copilot", "udkast"],
    prompt: `Skriv et udkast til svar på denne mail: [INDSÆT MAILEN – ELLER SVAR DIREKTE I TRÅDEN MED COPILOT I OUTLOOK].

Svaret skal:
- sige ja til [DET, JEG SIGER JA TIL]
- bede om [DET, JEG MANGLER]
- foreslå [DATO ELLER NÆSTE SKRIDT]
- være venligt og kort, højst 80 ord, og lyde som et menneske

Ingen indledende høfligheder på tre linjer. Ingen løfter, jeg ikke har nævnt.`,
    safety: "Læs udkastet, som modtageren vil læse det, og ret det til din egen tone, før du sender."
  },
  {
    id: "p010",
    example: "E04",
    category: "Møder & samarbejde",
    field: "På tværs",
    type: "quick",
    title: "Hvad gik jeg glip af i Teams-mødet?",
    when: "Brug den, når du kom for sent, gik tidligt eller sad i et andet møde – og mødet blev optaget eller transskriberet i Teams.",
    tags: ["Teams", "Copilot", "referat", "møde", "opgaver"],
    prompt: `Opsummér mødet [MØDETS NAVN] for mig ud fra optagelsen eller transskriptionen i Teams:

1. Beslutninger, der tydeligt blev truffet
2. Opgaver med den person, der påtog sig dem, og frist hvis nævnt
3. De spørgsmål, der blev stillet til mig eller mit område
4. Uenigheder, der ikke blev løst
5. Det, jeg bør gøre inden næste møde

Skriv "uklart i optagelsen", hvor du ikke er sikker. Opfind ikke aftaler.`,
    safety: "Copilot i Teams arbejder inden for Nykredits rammer. Kontrollér beslutninger med mødelederen, før du handler på dem – og følg Nykredits interne regler for optagelse af møder."
  },
  {
    id: "p011",
    example: "E04",
    category: "Analyse & data",
    field: "Back-office & økonomi",
    type: "quick",
    title: "Find de bilag, der faktisk mangler",
    when: "Brug den, når en liste over posteringer uden bilag skal blive til en reel mangelliste – med opdigtede tal, indtil du har et godkendt værktøj.",
    tags: ["bilag", "afstemning", "posteringer", "regnskab", "praktikant"],
    prompt: `Her er posteringer uden bilag (opdigtede tal):
[FX: 12.03 · NORDKONTOR APS · 1.248,75 / 14.03 · REJSEKORT DEMO · 438,00 / 20.03 · SOFTWAREVÆRKSTEDET · 799,00 / 22.03 · UKENDT POSTERING · 1.125,00]

Her er de bilag og mails, jeg har liggende (opdigtede):
[FX: NK-1042 · NORDKONTOR · 1.248,75 · 11.03 / RK-771 · REJSEKORT · 438,00 / SV-209 · SOFTWAREVÆRKSTEDET · 799,00 · 19.03]

Gør tre ting:
1. Match hver postering med det mest sandsynlige bilag, og skriv hvilke felter der matcher (leverandør, beløb, dato)
2. Marker tvivl tydeligt: "sandsynligt", "usikkert" eller "kan ikke afgøres"
3. Skriv den reelle mangelliste – kun det, der stadig mangler et bilag – og hvem jeg skal spørge

Bogfør intet, og godkend intet. Det gør jeg.`,
    safety: "AI'en foreslår match. Du bogfører og godkender selv. Med rigtige tal: kun i et værktøj, Nykredits interne regler tillader.",
    avoid: "Ingen rigtige leverandørnavne, kontonumre eller kunde- eller persondata i et privat AI-værktøj."
  },
  {
    id: "p012",
    example: "E04",
    category: "Analyse & data",
    field: "Back-office & økonomi",
    type: "quick",
    title: "Forklar arket, og find de skæve rækker",
    when: "Brug den, når du får et regneark fra en kollega og ikke er sikker på, hvad der er i det – i Copilot i Excel eller med et opdigtet udtræk.",
    tags: ["Excel", "Copilot", "regneark", "kontrol", "afvigelser"],
    prompt: `Se på dette ark: [ÅBN DET I COPILOT I EXCEL – ELLER INDSÆT ET LILLE, OPDIGTET UDTRÆK MED OVERSKRIFTER].

1. Forklar i én linje pr. kolonne, hvad den ser ud til at indeholde
2. Find de rækker, hvor [KOLONNE – FX BELØB] afviger mere end [PROCENT] fra gennemsnittet, og vis dem i en tabel
3. Peg på tomme felter, dubletter og datoer, der ikke passer i perioden
4. Foreslå én kontrolformel, jeg kan sætte ind i en ny kolonne, og forklar den

Ændr ikke i arket. Foreslå kun.`,
    safety: "Kør kontrollen på en kopi. Formler skal testes, før de bruges på det rigtige datasæt – og rigtige data hører kun hjemme i Copilot i Nykredit."
  },
  // Fra dagen · E05 IT-supporter
  {
    id: "p013",
    example: "E05",
    category: "Egen arbejdsdag",
    field: "IT",
    type: "micro",
    title: "Her er et skærmbillede af fejlen – hvad gør jeg?",
    when: "Brug den, når en fejlmeddelelse eller en dialogboks dukker op, og du ikke kan forklare den med ord. Skærmbilledet er prompten.",
    tags: ["skærmbillede", "fejl", "IT-support", "Copilot", "fejlfinding"],
    prompt: `[SÆT SKÆRMBILLEDET IND] Det her dukkede op, da jeg [HVAD DU GJORDE – FX "PRØVEDE AT GEMME ARKET"]. Forklar, hvad fejlen betyder, og giv mig de tre mest sandsynlige løsninger – den enkleste først. Sig, hvornår jeg bør stoppe og ringe til IT-support i stedet.`,
    safety: "Tjek skærmbilledet, før du deler det: ingen kundenavne, cpr-numre eller interne data i billedet. Ændringer i systemindstillinger følger Nykredits interne regler – spørg IT, hvis du er i tvivl."
  },
  {
    id: "p014",
    example: "E05",
    category: "Projekter & processer",
    field: "IT",
    type: "quick",
    title: "Skriv en fejlmelding, IT-support kan bruge",
    when: "Brug den, når du skal melde en fejl og gerne vil have den løst i første omgang – ikke efter tre opklarende mails.",
    tags: ["fejlmelding", "ticket", "IT-support", "beskrivelse"],
    prompt: `Her er min rodede beskrivelse af problemet: [SKRIV ELLER DIKTÉR LØST – HVAD SKETE, HVORNÅR, OG HVAD HAVDE DU FORVENTET].

Skriv det om til en fejlmelding med:
- Overskrift på højst ti ord
- Hvad jeg gjorde, trin for trin
- Hvad jeg forventede, og hvad der skete i stedet
- Hvornår det startede, og om det sker hver gang
- Hvad jeg allerede har prøvet
- Hvor mange det rammer, og hvor meget det haster
- Hvad jeg bør vedhæfte (skærmbillede, fejlkode, tidspunkt)

Spørg mig, hvis noget mangler, i stedet for at gætte.`,
    safety: "Fjern kunde- eller persondata fra skærmbilleder og eksempler, før fejlmeldingen sendes."
  },
  {
    id: "p015",
    example: "E05",
    category: "Analyse & data",
    field: "IT",
    type: "deep",
    title: "Fejlsøg hændelsen ud fra et opdigtet loguddrag",
    when: "Brug den, når du vil øve fejlsøgning på en driftshændelse uden at dele rigtige logs – eller når du skal skrive hændelsesnoten bagefter.",
    tags: ["IT-drift", "hændelse", "log", "fejlsøgning", "incident"],
    prompt: `Rolle: Du er en erfaren driftskollega, som tænker i hypoteser og siger, hvad du ikke ved.

Kontekst: Her er et opdigtet loguddrag og en tidslinje – ingen rigtige systemnavne, adresser eller brugere:
[FX: 02:14 BATCHJOB "NATKØRSEL" STARTER / 02:31 TIMEOUT MOD DATABASE, 3 FORSØG / 02:32 JOBBET FEJLER MED KODE 504 / 06:50 FØRSTE KOLLEGA MELDER, AT SALDI IKKE ER OPDATERET / 07:10 GENSTART, JOBBET KØRER IGENNEM]
Konsekvensen var [BESKRIV GENERELT]. Systemet er, generelt beskrevet, [TYPE – FX EN NATLIG OPDATERING MELLEM TO SYSTEMER].

Metode:
1. Opstil de tre mest sandsynlige årsager, og hvad i loggen der taler for og imod hver
2. Skriv, hvad jeg bør tjekke først, og i hvilken rækkefølge – billigste tjek først
3. Peg på det, loggen ikke kan svare på, og hvem der typisk ved det
4. Skriv et udkast til hændelsesnoten: hvad skete, hvornår, konsekvens, midlertidig løsning, åbne spørgsmål
5. Foreslå én ting, der ville have opdaget fejlen fire timer tidligere

Peg ikke på personer, og udnævn ikke en årsag som sikker.`,
    safety: "Fejlsøgning i rigtige systemer følger Nykredits hændelsesproces. Noten er et udkast, som de driftsansvarlige skal godkende.",
    avoid: "Ingen rigtige logs, IP-adresser, brugernavne, systemnavne eller sikkerhedsoplysninger i et privat AI-værktøj."
  },
  {
    id: "p016",
    example: "E05",
    category: "Research & læring",
    field: "IT",
    type: "quick",
    title: "Trin for trin i det program, jeg sidder i",
    when: "Brug den, når du ved, hvad du vil opnå i Excel, Outlook, Teams eller Word, men ikke hvor knappen sidder.",
    tags: ["vejledning", "Excel", "Outlook", "Teams", "Word", "trin for trin"],
    prompt: `Jeg sidder i [PROGRAM – FX EXCEL, OUTLOOK, TEAMS ELLER WORD] og vil [MÅL – FX "LAVE EN REGEL, DER FLYTTER MAILS FRA ÉN AFSENDER TIL EN MAPPE"].

Spørg først, hvilken version jeg har, hvis det ændrer svaret. Giv mig derefter trin for trin med de præcise menunavne, ét trin pr. linje. Skriv til sidst, hvordan jeg tjekker, at det virkede, og hvordan jeg fortryder det.`,
    safety: "Menuer kan se anderledes ud i Nykredits opsætning. Stop, hvis et trin kræver adgang, du ikke har, og spørg IT."
  },
  // Fra dagen · E06 Alle sprog
  {
    id: "p017",
    example: "E06",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "quick",
    title: "Oversæt mailen til en kollega i udlandet",
    when: "Brug den, når du skal skrive til en kollega eller samarbejdspartner, der ikke taler dansk, og dit engelske skal være til at forstå – ikke perfekt.",
    tags: ["oversættelse", "engelsk", "udlandet", "mail", "forkortelser"],
    prompt: `Oversæt denne mail til engelsk til [MODTAGER – FX EN SAMARBEJDSPARTNER I UDLANDET ELLER EN KOLLEGA, DER IKKE TALER DANSK]:

[INDSÆT MAIL UDEN KUNDE- ELLER PERSONDATA]

Behold min tone og min struktur. Forklar danske forkortelser og fagudtryk i en parentes første gang, de bruges. Skriv ikke mere formelt, end jeg gjorde. Marker de ord, hvor du er i tvivl om den rigtige oversættelse, med [?], så jeg kan tjekke dem.`,
    safety: "Fagudtryk med juridisk eller økonomisk betydning skal tjekkes af en, der kender begge sprog. Copilot i Outlook kan oversætte direkte i mailen."
  },
  {
    id: "p018",
    example: "E06",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "micro",
    title: "Ret mit engelsk – behold min stemme",
    when: "Brug den, når du har skrevet på engelsk selv og bare vil have fejlene væk.",
    tags: ["engelsk", "korrektur", "tone"],
    prompt: `Ret mit engelsk. Behold mine formuleringer, hvor de er til at forstå – ret kun det, der er forkert eller lyder unaturligt. Vis mig ændringerne, ikke en ny tekst.`,
    safety: "Læs rettelserne igennem. Et rettet ord kan ændre betydningen."
  },
  {
    id: "p019",
    example: "E06",
    category: "Skrivning & redigering",
    field: "Kommunikation",
    type: "quick",
    title: "Samme opslag på dansk og engelsk",
    when: "Brug den, når et internt opslag skal ud til en gruppe, hvor ikke alle læser dansk.",
    tags: ["intern kommunikation", "flere sprog", "Teams", "opslag"],
    prompt: `Her er et internt opslag på dansk: [INDSÆT OPSLAG UDEN PERSONDATA]. Modtagerne er [BESKRIV GRUPPEN] – nogle af dem læser ikke dansk.

Skriv to versioner med præcis de samme fakta: dansk (tilrettet) og engelsk. Højst [ANTAL] ord hver, samme overskrift på begge sprog, og samme handling til sidst. Marker ét sted, hvor sprogene ville formulere sig forskelligt, og hvad du valgte.`,
    safety: "Få en kollega, der skriver godt engelsk, til at læse den engelske version, før den sendes. To versioner må ikke sige to forskellige ting."
  },
  // Fra dagen · E07 Aflaste kolleger
  {
    id: "p020",
    example: "E07",
    category: "Projekter & processer",
    field: "På tværs",
    type: "deep",
    title: "Interview mig om, hvordan jeg gør det – og skriv proceduren",
    when: "Brug den, når tyve års erfaring sidder i dit hoved og ikke i nogen vejledning – og en kollega snart skal overtage.",
    tags: ["procedure", "tavs viden", "interview", "overlevering", "aflaste kolleger"],
    prompt: `Rolle: Du er en nysgerrig kollega, der skal skrive en procedure ud fra det, jeg fortæller – ikke ud fra det, du gætter.

Kontekst: Opgaven er [OPGAVEN – FX "AT LUKKE EN SAG, NÅR ALLE KONTROLLER ER GENNEMFØRT"]. Jeg har gjort det i [ÅR], og der findes [INGEN / EN FORÆLDET] skriftlig vejledning. Den nye procedure skal bruges af [ROLLE – FX EN NY KOLLEGA I TEAMET].

Metode:
1. Interview mig ét spørgsmål ad gangen. Start med "Hvad er det første, du gør?" og følg mine svar
2. Spørg til det trin, jeg springer over, hver gang jeg siger "og så bare …"
3. Spørg "Hvad kigger du efter, før du går videre?" ved hvert kontrolpunkt
4. Stop efter højst tolv spørgsmål, og skriv proceduren som v0.1: nummererede trin, hvem der gør hvad, hvad man tjekker før hvert trin, og hvad man gør, når det ikke passer
5. Marker de steder, hvor du har gættet, med [TJEK]

Skriv kort. Den, der læser, har travlt.`,
    safety: "Udkastet retter du selv – det er ekspertdelen. Proceduren skal godkendes af den procesansvarlige, før den erstatter den gamle.",
    avoid: "Fortæl uden kunde- eller persondata og uden rigtige sagsnumre. Interne systemnavne kun i Copilot i Nykredit."
  },
  {
    id: "p021",
    example: "E07",
    category: "Projekter & processer",
    field: "På tværs",
    type: "quick",
    title: "Lav en tjekliste ud fra denne vejledning",
    when: "Brug den, når en vejledning på tolv sider skal blive til noget, en kollega kan følge på fem minutter – fx i Copilot i Word.",
    tags: ["tjekliste", "vejledning", "Word", "Copilot", "procedure"],
    prompt: `Her er en vejledning: [INDSÆT TEKSTEN – ELLER ÅBN DOKUMENTET I COPILOT I WORD OG PEG PÅ DET]. Den skal bruges af [ROLLE] i situationen [HVORNÅR].

Lav en tjekliste med:
- højst femten punkter i den rækkefølge, de udføres
- ved hvert punkt: hvad man gør, og hvad man tjekker, før man sætter flueben
- henvisning til det afsnit i vejledningen, punktet kommer fra
- en kort "stop og spørg"-liste med de situationer, tjeklisten ikke dækker

Udelad ikke kontroltrin, og opfind ikke trin, der ikke står i vejledningen.`,
    safety: "Tjeklisten erstatter ikke vejledningen. Få den procesansvarlige til at godkende den, før den deles i teamet."
  },
  {
    id: "p022",
    example: "E07",
    category: "Egen arbejdsdag",
    field: "På tværs",
    type: "quick",
    title: "Overlevering til min afløser",
    when: "Brug den ugen før, du går på ferie eller orlov.",
    tags: ["overlevering", "ferie", "afløser", "opgaver"],
    prompt: `Jeg er væk fra [DATO] til [DATO]. Her er mine opgaver, ufølsomt beskrevet: [LISTE MED OPGAVE, HYPPIGHED OG FRIST – INGEN KUNDE- ELLER PERSONDATA]. Min afløser er [ROLLE], som kender [HVAD DE KENDER] og ikke kender [HVAD DE IKKE KENDER].

Skriv en overleveringsnote på højst én side:
1. Det, der skal ske på bestemte dage, i kalenderrækkefølge
2. Det, der kan vente, til jeg er tilbage
3. Det, kun jeg plejer at vide – og hvem man ellers kan spørge
4. Tre ting, der typisk går galt, og hvad man gør
5. Hvordan man får fat i mig, hvis huset brænder – og hvad der ikke tæller som brand

Spørg, hvis en frist eller en ejer mangler.`,
    safety: "Læs noten igennem for det, du tager for givet. Det er præcis dét, afløseren ikke ved."
  },
  // Fra dagen · E08 Researcher
  {
    id: "p023",
    example: "E08",
    category: "Research & læring",
    field: "På tværs",
    type: "deep",
    title: "Læs de tre dokumenter, og find uoverensstemmelserne",
    when: "Brug den, når en lov, en bekendtgørelse og en vejledning burde sige det samme – og du ikke er sikker på, at de gør.",
    tags: ["dokumenter", "uoverensstemmelser", "kilder", "sammenligning", "research"],
    prompt: `Rolle: Du er en omhyggelig læser, som kun bruger de dokumenter, jeg giver dig, og altid siger, hvor det står.

Kontekst: Her er tre dokumenter: [VEDHÆFT ELLER INDSÆT – FX EN OFFENTLIG LOVTEKST, EN BEKENDTGØRELSE OG EN VEJLEDNING FRA FINANSTILSYNET]. Spørgsmålet, jeg skal svare på, er [SPØRGSMÅL – FX "HVORNÅR SKAL EN KUNDES OPLYSNINGER OPDATERES?"].

Metode:
1. Skriv i én tabel, hvad hvert dokument siger om spørgsmålet – med side eller afsnit ved hver påstand
2. Marker de steder, hvor dokumenterne siger noget forskelligt, bruger forskellige frister eller definerer et begreb forskelligt
3. Skriv "står ikke i dokumentet", hvor ét af dem ikke behandler spørgsmålet – gæt ikke ud fra de andre
4. Skeln mellem reel uoverensstemmelse og forskel i detaljeringsgrad
5. Slut med de tre spørgsmål, jeg skal stille en fagperson, før jeg konkluderer

Brug ingen viden uden for de tre dokumenter.`,
    safety: "Åbn selv de steder, den henviser til. Fortolkning af regler er compliance-teamets afgørelse, ikke AI'ens.",
    avoid: "Kun offentlige dokumenter – eller dokumenter, Nykredits interne regler tillader i det værktøj, du bruger."
  },
  {
    id: "p024",
    example: "E08",
    category: "Research & læring",
    field: "Jura & compliance",
    type: "deep",
    title: "Grundig research: hvad ændrer de nye regler for os?",
    when: "Brug den, når du vil have en rapport med kilder om et offentligt emne – og gerne vil hente kaffe, mens den arbejder. Vælg Researcher i Copilot.",
    tags: ["grundig research", "AMLA", "hvidvask", "EU", "rapport", "kilder"],
    prompt: `Hvad ændrer [REGELSÆT – FX "EU'S NYE HVIDVASKPAKKE OG AMLA"] for danske banker frem mod [ÅR – FX 2027] – og hvad bør en medarbejder i [OMRÅDE – FX BACK-OFFICE ELLER COMPLIANCE] vide?

Svar på fire spørgsmål:
1. Hvad ændrer sig i forhold til reglerne i dag?
2. Hvilke tre ændringer rammer [OMRÅDE] først?
3. Hvad siger Finanstilsynet og EU's egne tekster fra [PERIODE – FX 2024–2026]?
4. Hvad bør en medarbejder i [OMRÅDE] vide og gøre?

Angiv kilde for hvert udsagn, og brug kun offentlige kilder. Skriv tydeligt, hvad du ikke kunne verificere. Tabeller, højst to sider. Stil mig to spørgsmål, før du går i gang.`,
    safety: "Rapporten er et offentligt overblik, ikke Nykredits fortolkning. Åbn de vigtigste kilder selv, og lad compliance afgøre, hvad det betyder for jeres procedurer."
  },
  {
    id: "p025",
    example: "E08",
    category: "Research & læring",
    field: "På tværs",
    type: "quick",
    title: "Jeg er ny i teamet – svar kun ud fra de dokumenter, jeg giver dig",
    when: "Brug den, når du skal ind i et nyt regelområde og vil have svar, der peger på siden i stedet for at gætte. Fx i Copilot med de vedhæftede filer eller i en Copilot-notesbog.",
    tags: ["ny i teamet", "dokumenter", "kilder", "hvidvask", "onboarding"],
    prompt: `Jeg er ny i teamet. Her er de dokumenter, jeg må arbejde ud fra: [VEDHÆFT OFFENTLIGE LOVE, BEKENDTGØRELSER OG VEJLEDNINGER – ELLER PEG PÅ MAPPEN].

Svar kun ud fra dem – ikke ud fra det, du ellers ved. Hvad skal jeg vide om [EMNE – FX HVIDVASKREGLERNE] for at kunne begå mig i de første uger?

Start med de tre vigtigste ting. Vis ved hver, hvilket dokument og hvilken side det står på. Slut med fem begreber, jeg kommer til at høre hele tiden, forklaret i én linje hver.`,
    safety: "Klik dig ind på siderne, den henviser til. Det, der ikke står i dokumenterne, skal du spørge en kollega om – ikke AI'en."
  },
  {
    id: "p026",
    example: "E08",
    category: "Research & læring",
    field: "Jura & compliance",
    type: "quick",
    title: "Forklar denne paragraf, så en ny kollega forstår den",
    when: "Brug den, når du skal videregive en regel til en, der ikke har læst loven – og selv vil være sikker på, at du har forstået den.",
    tags: ["paragraf", "regler", "klarsprog", "hvidvask", "compliance"],
    prompt: `Her er en paragraf fra en offentlig regel: [INDSÆT TEKSTEN OG ANGIV KILDEN – FX "HVIDVASKLOVENS § X"].

Forklar den, så en ny kollega i [TEAM] forstår den:
1. Hvad kræver den – i én sætning uden fagord
2. Hvem gælder den for, og hvornår
3. Et neutralt, opdigtet eksempel på, at den er opfyldt – og ét på, at den ikke er
4. De to begreber, man skal slå op, før man bruger den
5. Det, paragraffen ikke siger noget om, og hvor man så leder

Fortolk ikke ud over teksten. Skriv "kræver fortolkning", hvor det er tilfældet.`,
    safety: "Forklaringen er læring, ikke en vurdering af en sag. Nykredits egne procedurer og compliance afgør, hvordan reglen anvendes."
  },
  // Fra dagen · E09 Slides
  {
    id: "p027",
    example: "E09",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "quick",
    title: "Lav en præsentation på otte slides om [EMNE]",
    when: "Brug den, når du skal have et udkast til et oplæg på et minut – i Copilot i PowerPoint eller Copilot Chat – og selv bestemme indholdet bagefter.",
    tags: ["slides", "præsentation", "PowerPoint", "Copilot", "udkast"],
    prompt: `Lav en præsentation på otte slides om [EMNE – FX "HVORDAN VI ONBOARDER NYE KOLLEGER I TEAMET"]. Målgruppen er [MÅLGRUPPE], og de skal bagefter [HVAD DE SKAL FORSTÅ ELLER GØRE].

For hver slide: en overskrift, der er en pointe (ikke et emne), højst tre punkter og en talenote til mig på to linjer. Slide 1 handler om, hvorfor det betyder noget. Slide 8 er næste skridt. Brug kun det, jeg giver dig her: [STIKORD ELLER TEKST]. Marker med [MANGLER], hvor du mangler indhold.`,
    safety: "Layoutet er hurtigt; indholdet er dit. Kontrollér tal og påstande, og brug Nykredits skabelon, hvis oplægget skal vises internt."
  },
  {
    id: "p028",
    example: "E09",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "micro",
    title: "Gør mine noter til fem slides",
    when: "Brug den, når du har noterne, men mødet er om en time.",
    tags: ["slides", "noter", "hurtig"],
    prompt: `Her er mine noter: [INDSÆT NOTER]. Gør dem til fem slides med én pointe pr. slide. Overskriften skal være pointen, ikke emnet. Højst tre punkter under hver.`,
    safety: "Læs overskrifterne som konklusioner – de må ikke love mere, end noterne holder."
  },
  // Fra dagen · E10 Programmør
  {
    id: "p029",
    example: "E10",
    category: "Projekter & processer",
    field: "Investering & pension",
    type: "quick",
    title: "Byg en lille pensionsberegner, jeg kan klikke på",
    when: "Brug den, når du vil have et lille, rigtigt program i stedet for en tegning af et – fx i Copilot (bed om en interaktiv illustration) eller Lovable. Tallene er illustration, ikke rådgivning.",
    tags: ["beregner", "pension", "program", "Lovable", "prototype"],
    prompt: `Byg en simpel pensionsberegner som én HTML-side, jeg kan åbne i en browser.

Jeg skal kunne taste: alder i dag, nuværende opsparing, månedlig indbetaling og ønsket pensionsalder. Siden skal vise en prognose for opsparingen ved pension med et årligt afkast på [PROCENT] før omkostninger – og lade mig ændre afkastet med en skyder.

Vis forudsætningerne tydeligt på siden, og skriv nederst: "Illustration – ikke rådgivning". Ingen data må gemmes eller sendes nogen steder. Forklar til sidst i tre linjer, hvordan beregningen er lavet.`,
    safety: "Beregneren er til at forstå og forklare – ikke til at rådgive. Tallene og formlen skal en fagperson i pension tjekke, og den må ikke deles med kunder uden godkendelse.",
    avoid: "Tast aldrig rigtige kunders tal ind i en beregner, der ligger uden for Nykredits systemer."
  },
  {
    id: "p030",
    example: "E10",
    category: "Analyse & data",
    field: "Back-office & økonomi",
    type: "quick",
    title: "Skriv formlen eller makroen ud fra min beskrivelse",
    when: "Brug den, når du ved, hvad arket skal gøre, men ikke hvordan man skriver det i Excel.",
    tags: ["Excel", "formel", "makro", "VBA", "Copilot"],
    prompt: `I mit ark har jeg kolonnerne [FX A: DATO, B: VIRKSOMHED, C: CVR, D: KATEGORI, E: BELØB]. Jeg vil [MÅL – FX "HAVE EN NY FANE PR. KATEGORI MED SUMMEN AF BELØB, SORTERET EFTER DATO"].

Giv mig først den enkleste løsning (formel eller pivottabel). Hvis det kræver en makro, så skriv VBA-koden, forklar den linje for linje i almindeligt dansk, og skriv trin for trin, hvordan jeg sætter den ind og kører den. Sig, hvad jeg skal teste på en kopi først, og hvad der typisk går galt på Mac og på Windows.`,
    safety: "Kør altid på en kopi med opdigtede tal først. Makroer i Nykredits miljø kan være begrænset – spørg IT, hvis noget er spærret."
  },
  // Fra dagen · E11 Ny kollega
  {
    id: "p031",
    example: "E11",
    category: "Projekter & processer",
    field: "På tværs",
    type: "deep",
    title: "Prøv at starte projektet for mig",
    when: "Brug den, når en rodet projektmappe skal have en start – med en AI, der må læse mappen, fx Copilot med adgang til SharePoint- eller OneDrive-mappen.",
    tags: ["projektstart", "mappe", "projektbrief", "to-do", "ny kollega"],
    prompt: `Rolle: Du er min nye kollega på projektet. Du er grundig, rører ikke originalerne og spørger, før du kontakter nogen.

Kontekst: Her er projektmappen: [PEG PÅ MAPPEN – ELLER LIST FILERNE, FX "KUNDEMAIL.PDF, TILBUD.PDF, KICKOFFNOTER.DOCX, TIDLIGERE_PRÆSENTATION.PPTX, SURVEY.CSV, NOTER.TXT"]. Projektet handler om [ÉN LINJE]. Jeg er [ROLLE], og vi skal aflevere [HVAD] senest [HVORNÅR].

Metode:
1. Læs alt, og skriv i fem linjer, hvad projektet går ud på – som du forstår det
2. Find det, der kan genbruges fra det gamle materiale, og hvad der skal opdateres
3. Find hullerne: det, ingen af filerne svarer på
4. Aflever fem nye filer: projektbrief, prioriteret to-do, drejebog for de næste to uger, genbrugsoversigt og åbne spørgsmål
5. Stil mig dit ene vigtigste spørgsmål, før du går i gang med punkt 4

Skriv ikke til nogen, og ændr ikke i originalerne.`,
    safety: "Læs briefen og to-do-listen kritisk – den har gættet på det, filerne ikke siger. Adgang til mapper følger Nykredits interne regler.",
    avoid: "Kun mapper med filer, du må dele med værktøjet. Ingen kunde- eller persondata i et privat AI-værktøj."
  },
  {
    id: "p032",
    example: "E11",
    category: "Projekter & processer",
    field: "På tværs",
    type: "quick",
    title: "Hvad kan genbruges fra det gamle materiale?",
    when: "Brug den, når du får en gammel præsentation eller et gammelt notat og skal lave noget nyt til et lignende formål.",
    tags: ["genbrug", "præsentation", "opdatering", "materiale"],
    prompt: `Her er et ældre materiale: [INDSÆT ELLER VEDHÆFT – FX EN PRÆSENTATION FRA SIDSTE ÅR]. Det nye formål er [FORMÅL], målgruppen er [MÅLGRUPPE], og det skal bruges [HVORNÅR].

Lav en genbrugsoversigt i en tabel med tre kolonner: "kan bruges som det er", "skal opdateres (hvad)" og "skal ud (hvorfor)". Gå slide for slide eller afsnit for afsnit. Marker tal, datoer og skærmbilleder, der sandsynligvis er forældede. Slut med de tre ting, der mangler helt.`,
    safety: "AI'en kan ikke vide, hvad der er sket siden. Tjek selv alle tal og datoer, den kalder forældede – og dem, den ikke gør."
  },
  // Fra dagen · E12 Kreativ makker
  {
    id: "p033",
    example: "E12",
    category: "Præsentation & visualisering",
    field: "Kommunikation",
    type: "quick",
    title: "Et billede til Teams-opslaget – uden logo og uden kolleger",
    when: "Brug den, når et internt opslag trænger til andet end et stockfoto – i Copilot, ChatGPT eller Gemini.",
    tags: ["billede", "illustration", "Teams", "opslag", "kreativ"],
    prompt: `Lav et billede til et internt opslag om [EMNE – FX "VI FÅR NYT SAGSSYSTEM I OKTOBER"].

Stil: flad, venlig illustration i [FARVER – FX MØRKEBLÅ OG MINTGRØN], liggende format. Motiv: [BESKRIV – FX "EN SKRIVEBORDSPLADS, HVOR EN GAMMEL OG EN NY SKÆRM SKIFTER PLADS"]. Ingen tekst i billedet, ingen logoer, ingen genkendelige personer og ingen stereotype fremstillinger af, hvem der arbejder i en bank. Giv mig tre varianter.`,
    safety: "Tjek rettigheder og Nykredits retningslinjer for billeder, før det bruges. Sæt aldrig kollegers fotos ind i et billedværktøj uden deres ja."
  },
  {
    id: "p034",
    example: "E12",
    category: "Skrivning & redigering",
    field: "Kommunikation",
    type: "micro",
    title: "En sang til fredagsmødet",
    when: "Brug den, når afdelingen skal fejre noget, og du vil have teksten klar til Suno eller til fællessang.",
    tags: ["sang", "fejring", "kreativ", "Suno", "socialt"],
    prompt: `Skriv en sangtekst på tre vers og et omkvæd om [ANLEDNING – FX "AT VI KOM IGENNEM ÅRSAFSLUTNINGEN"] i [AFDELING]. Venlig, med rim, og uden at gøre grin med nogen bestemt. Ingen navne, medmindre personen selv har sagt ja. Genre: [FX DANSKTOP, ROCK ELLER BØRNESANG].`,
    safety: "Læs teksten som den kollega, der bliver nævnt. Humor om enkeltpersoner skal de selv have sagt ja til."
  },
  // Fire tricks og fagområder med opdigtede data
  {
    id: "p035",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "micro",
    title: "Højst 150 ord",
    when: "Brug den, når svaret er tre skærmlængder, og du kun har brug for pointen.",
    tags: ["kort", "format", "længde", "fire tricks"],
    prompt: `Svar på højst 150 ord. Pointen først. Ingen indledning.`,
    safety: "Et kort svar udelader forbehold. Spørg efter dem, hvis det betyder noget."
  },
  {
    id: "p036",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "micro",
    title: "Her er et eksempel, jeg kan lide – skriv mit på samme måde",
    when: "Brug den, når du ikke kan forklare, hvordan teksten skal lyde – men kan vise det.",
    tags: ["eksempel", "stil", "vis det", "fire tricks"],
    prompt: `Her er et eksempel på en tekst, jeg godt kan lide: [INDSÆT EKSEMPEL UDEN PERSONDATA]. Skriv min tekst om [EMNE] på samme måde: samme længde, samme tone, samme opbygning. Kopiér ikke eksemplets indhold – kun formen.`,
    safety: "Brug kun eksempler, du har ret til at dele, og fjern navne og sagsoplysninger først."
  },
  {
    id: "p037",
    category: "Research & læring",
    field: "Jura & compliance",
    type: "deep",
    title: "Øv en kundekendskabsgennemgang på en opdigtet kunde",
    when: "Brug den, når du vil træne blikket for røde flag uden at komme i nærheden af en rigtig sag.",
    tags: ["KYC", "kundekendskab", "hvidvask", "øvelse", "syntetisk case"],
    prompt: `Rolle: Du er en erfaren hvidvaskkollega, som træner nye medarbejdere med opdigtede sager.

Kontekst: Opfind en kunde – en lille virksomhed – med navn, branche, ejerforhold, omsætning og et transaktionsmønster over tre måneder. Byg [ANTAL – FX TO] forhold ind, som bør give anledning til spørgsmål, og [ANTAL] forhold, der ser mistænkelige ud, men har en almindelig forklaring. Brug kun opdigtede navne, tal og steder, og genskab ikke virkelige sager fra nyhederne.

Metode:
1. Præsentér sagen, som den ville se ud i en gennemgang – uden at afsløre, hvad du har bygget ind
2. Lad mig skrive, hvad jeg ville spørge om, og hvad jeg ville dokumentere
3. Giv mig derefter feedback: hvad jeg fangede, hvad jeg overså, og hvad jeg overfortolkede
4. Forklar for hvert forhold, hvilken type oplysning der ville afklare det
5. Slut med tre ting, erfarne kolleger typisk kigger efter, som jeg ikke nævnte

Træf ingen afgørelse om underretning – det er en øvelse i at stille spørgsmål.`,
    safety: "Øvelsen følger ikke Nykredits procedurer og erstatter dem ikke. Rigtige sager behandles kun i Nykredits egne systemer efter Nykredits interne regler.",
    avoid: "Indsæt aldrig en rigtig kunde, et rigtigt cvr-nummer eller rigtige transaktioner. Ingen kunde- eller persondata."
  },
  {
    id: "p038",
    category: "Analyse & data",
    field: "Investering & pension",
    type: "quick",
    title: "Regn efter på et opdigtet pensionseksempel",
    when: "Brug den, når du vil forstå, hvad der flytter mest i en pensionsprognose, før du forklarer det for andre.",
    tags: ["pension", "beregning", "forudsætninger", "følsomhed"],
    prompt: `Her er et opdigtet eksempel: 45 år, opsparing 800.000 kr., indbetaling 4.000 kr. om måneden, forventet afkast 4 % om året før omkostninger, pension ved 68.

1. Vis beregningen af opsparingen ved pension trin for trin, så jeg kan følge den
2. Regn den igen med afkast på 2 % og 6 %, og med indbetaling på 3.000 og 5.000 kr.
3. Vis i én tabel, hvilken forudsætning der flytter resultatet mest
4. Forklar i tre linjer, hvorfor rækkefølgen er, som den er
5. Skriv, hvad eksemplet ikke tager højde for (skat, omkostninger, inflation, udbetalingsform)

Brug kun de tal, jeg har givet. Kald det en illustration, ikke en prognose.`,
    safety: "Regn selv efter i et ark. Rigtige beregninger til kunder laves kun i Nykredits godkendte værktøjer – aldrig med kundens rigtige tal her."
  },
  // Basisbiblioteket (omskrevet til Nykredit)
  {
    id: "p039",
    category: "Research & læring",
    field: "På tværs",
    type: "micro",
    title: "Forklar det, som var det første gang",
    when: "Brug den, når et fagbegreb skal være til at forstå med det samme.",
    tags: ["forklaring", "klarsprog", "fagbegreb"],
    prompt: `Forklar [BEGREB], som om jeg hører om det for første gang. Højst fem linjer og ingen fagudtryk.`,
    safety: "Kontrollér forklaringen i en godkendt kilde, før du bruger den over for andre."
  },
  {
    id: "p040",
    category: "Egen arbejdsdag",
    field: "På tværs",
    type: "micro",
    title: "Det mindste næste skridt",
    when: "Brug den, når en opgave er gået i stå, og du bare skal i gang.",
    tags: ["første skridt", "kom i gang", "prioritering"],
    prompt: `Her er opgaven: [BESKRIV DEN KORT OG UFØLSOMT]. Hvad er det mindste, jeg kan gøre på 15 minutter, som reelt flytter den?`,
    safety: "Du vurderer selv, om forslaget passer til din prioritering, din rolle og dine frister."
  },
  {
    id: "p041",
    category: "Kvalitet & sikkerhed",
    field: "På tværs",
    type: "micro",
    title: "Hvad må jeg ikke indsætte?",
    when: "Brug den, før du første gang bruger AI til en ny type opgave.",
    tags: ["sikkerhed", "fortrolighed", "dataminimering"],
    prompt: `Jeg overvejer at bruge AI til [OPGAVETYPE - BESKREVET HELT GENERELT]. Hvilke typer oplysninger bør jeg holde ude af Copilot, ChatGPT eller Claude, når jeg arbejder med den slags?`,
    safety: "Svaret er en huskeliste. Nykredits interne regler afgør, hvad der er tilladt – og kunde- eller persondata er aldrig med.",
    avoid: "Indsæt ikke den konkrete sag. Beskriv kun opgavetypen."
  },
  {
    id: "p042",
    category: "Egen arbejdsdag",
    field: "På tværs",
    type: "quick",
    title: "Find tre steder AI kan hjælpe mig",
    when: "Brug den, når du vil få øje på små, realistiske muligheder i din arbejdsdag.",
    tags: ["muligheder", "arbejdsopgaver", "kom i gang"],
    prompt: `Her er en kort og generel beskrivelse af mine arbejdsopgaver: [BESKRIV OPGAVERNE UDEN FORTROLIGE DETALJER].

Find tre konkrete delopgaver, hvor AI kan hjælpe mig med at komme i gang, skabe struktur eller udfordre mine tanker. For hver delopgave skal du skrive:
1. Hvad AI kan hjælpe med
2. Hvilket sikkert input jeg skal give
3. Hvad jeg selv skal kontrollere

Prioritér den letteste og sikreste afprøvning først.`,
    safety: "Beskriv opgaverne generelt, og følg altid Nykredits interne regler – ingen kunde- eller persondata."
  },
  {
    id: "p043",
    category: "Research & læring",
    field: "På tværs",
    type: "quick",
    title: "Forklar et fagbegreb helt enkelt",
    when: "Brug den, når du skal forstå eller forklare et begreb uden unødigt fagsprog.",
    tags: ["forklaring", "læring", "jargon"],
    prompt: `Forklar [FAGBEGREB] til [MÅLGRUPPE], som ikke kender emnet i forvejen.

Giv mig:
- en forklaring i én sætning
- en enkel analogi
- et konkret, neutralt eksempel
- én almindelig misforståelse
- ét spørgsmål, jeg kan bruge til at tjekke forståelsen

Markér tydeligt, hvis noget afhænger af en bestemt regel, organisation eller aktuel kilde.`,
    safety: "Kontrollér faglige og tidsfølsomme detaljer i en godkendt kilde, før forklaringen bruges."
  },
  {
    id: "p044",
    category: "Projekter & processer",
    field: "På tværs",
    type: "quick",
    title: "Gør en stor opgave mindre",
    when: "Brug den, når en opgave virker uoverskuelig, og du har brug for et første skridt.",
    tags: ["opdeling", "første skridt", "planlægning"],
    prompt: `Min opgave er: [BESKRIV OPGAVEN KORT].

Del den op i højst fem konkrete trin. Markér ved hvert trin:
- hvad jeg selv skal beslutte
- hvad AI eventuelt kan hjælpe med
- hvilket resultat trinnet skal ende med

Slut med den mindste handling, jeg kan gennemføre på 15 minutter.`,
    safety: "AI må foreslå struktur, men du vurderer selv prioritering, tidsforbrug og ansvar."
  },
  {
    id: "p045",
    category: "Kvalitet & sikkerhed",
    field: "På tværs",
    type: "quick",
    title: "Er opgaven egnet til AI?",
    when: "Brug den, før du går i gang med en opgave, hvor data eller ansvar kan være følsomt.",
    tags: ["sikkerhed", "fortrolighed", "egnethed"],
    prompt: `Jeg beskriver kun opgavetypen i generelle vendinger: [BESKRIV OPGAVETYPEN UDEN DATA FRA DEN VIRKELIGE SAG].

Hjælp mig med en foreløbig vurdering:
- GRØN: egnet til en ufølsom øvelse
- GUL: kræver godkendt værktøj, dataminimering eller ekstra kontrol
- RØD: bør ikke afprøves på denne måde

Vurdér persondata, fortrolighed, konsekvensen af fejl, behovet for menneskelig kontrol og om værktøjet skal være godkendt. Stil opklarende spørgsmål, hvis vurderingen er usikker. Gør tydeligt, at Nykredits interne regler afgør, hvad der er tilladt.`,
    safety: "Vurderingen er en huskeliste, ikke en godkendelse eller juridisk afgørelse.",
    avoid: "Indsæt aldrig den virkelige sag, personoplysninger, kundenumre eller interne dokumenter i denne prompt."
  },
  {
    id: "p046",
    category: "Egen arbejdsdag",
    field: "På tværs",
    type: "quick",
    title: "Prøv min opgave i seks af dagens AI-roller",
    when: "Brug den, når du vil se, hvor mange af dagens tolv måder der passer på den samme opgave.",
    tags: ["AI-roller", "muligheder", "arbejdsopgaver", "tolv måder"],
    prompt: `Her er en opgave fra min hverdag: [BESKRIV OPGAVEN UDEN FORTROLIGE DETALJER].

Vis mig i én linje pr. rolle, hvordan hver af disse kunne hjælpe:
1. Sparringspartner
2. Skrivehjælp mod skriveblokering
3. Fokusgruppe
4. Praktikant
5. IT-supporter
6. Researcher

Slut med den ene rolle, der ville hjælpe mig mest allerede i morgen, og hvad jeg skal kontrollere ved den.`,
    safety: "Rollerne er idéer til afprøvning, ikke en anbefaling om at overlade opgaven til AI."
  },
  {
    id: "p047",
    category: "Kvalitet & sikkerhed",
    field: "På tværs",
    type: "quick",
    title: "Kør den lille kontrolliste på svaret",
    when: "Brug den som fast sidste stop, før du bruger et AI-svar til noget.",
    tags: ["kontrolliste", "kvalitet", "ansvar"],
    prompt: `Her er det svar, jeg overvejer at bruge: [INDSÆT UFØLSOMT SVAR].

Gennemgå det punkt for punkt:
1. Hvilke fakta bør jeg kontrollere, og hvor?
2. Hvilke kilder påstås der - og kan de åbnes?
3. Hvilken vigtig kontekst eller undtagelse mangler?
4. Er tonen menneskelig og passende til modtageren?
5. Er der noget her, jeg ikke må sende videre?

Svar kort. Skriv "kan ikke vurderes herfra", hvor du ikke har grundlag.`,
    safety: "Listen er en hjælp til din egen gennemgang - ikke en godkendelse."
  },
  {
    id: "p048",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "quick",
    title: "Vis mig, hvad du ikke kan vide",
    when: "Brug den, når du vil forstå, hvorfor det første svar bliver så generisk.",
    tags: ["kontekst", "juniorkollega", "gæt"],
    prompt: `Her er min opgave: [BESKRIV OPGAVEN KORT OG UFØLSOMT].

Før du løser den: skriv en liste over alt det, du IKKE kan vide om min situation, min arbejdsplads og min modtager. Marker de tre punkter, der ville ændre svaret mest, hvis jeg fortalte dig dem.

Løs derefter opgaven med de gæt, du er nødt til at tage, og saml gættene i en tydelig note til sidst.`,
    safety: "Læs gættene igennem først. Det, AI gætter forkert på, er præcis dét, du selv skal levere."
  },
  {
    id: "p049",
    category: "Egen arbejdsdag",
    field: "På tværs",
    type: "deep",
    title: "AI-mulighedsscan på min arbejdsuge",
    when: "Brug den, når du vil vælge én god anvendelse blandt mange arbejdsopgaver.",
    tags: ["arbejdsuge", "prioritering", "muligheder"],
    prompt: `Rolle: Du er en nøgtern arbejdsgangssparringspartner, som hjælper begyndere med at finde små og sikre AI-anvendelser.

Kontekst: Mine typiske opgaver er [LIST 5-8 OPGAVETYPER UDEN FORTROLIGE DETALJER]. Det, der tager mest tid eller energi, er [BESKRIV]. Jeg må kun bruge [BESKRIV GODKENDTE DATATYPER OG VÆRKTØJSRAMMER, HVIS DU KENDER DEM].

Metode: Lav en tabel med højst fem muligheder. Vis for hver:
1. Den konkrete delopgave
2. Om AI skal hjælpe med start, struktur, kritik eller formulering
3. Hvilket ufølsomt input der kræves
4. Mulig gevinst
5. Største fejlrisiko og menneskeligt kontrolpunkt

Rangér mulighederne efter lav risiko og lav indsats. Anbefal ét lille eksperiment, men opfind ikke regler eller garantier om datasikkerhed.`,
    safety: "Brug kun generelle opgavetyper; den endelige afprøvning skal følge Nykredits interne regler."
  },
  {
    id: "p050",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "deep",
    title: "Lad AI interviewe mig om opgaven",
    when: "Brug den, når du ved, hvad du vil opnå, men har svært ved at formulere en god opgave.",
    tags: ["interview", "afklaring", "RKM"],
    prompt: `Rolle: Du er en tålmodig interviewer, der hjælper mig med at gøre en arbejdsopgave konkret.

Kontekst: Jeg vil arbejde med [BESKRIV OPGAVEN KORT OG UDEN FORTROLIGE DETALJER]. Jeg er ny i at bruge AI til denne type opgave.

Metode: Stil mig ét kort spørgsmål ad gangen. Spørg til formål, målgruppe, nødvendig kontekst, ønsket output, begrænsninger og menneskelig kontrol. Vent på mit svar mellem hvert spørgsmål. Stop efter højst seks spørgsmål, og saml derefter mine svar til en enkel prompt med Rolle, Kontekst og Metode. Brug pladsholdere dér, hvor virkelige data ikke bør indsættes.`,
    safety: "Svar med generelle eller syntetiske oplysninger, hvis spørgsmålene nærmer sig en virkelig kunde-, medarbejder- eller virksomhedssag."
  },
  {
    id: "p051",
    category: "Kvalitet & sikkerhed",
    field: "På tværs",
    type: "deep",
    title: "Lav en sikker, syntetisk øvelsescase",
    when: "Brug den, når du vil øve på en realistisk case uden at dele den virkelige sag. Fx en hvidvask-, pensions- eller IT-supportcase.",
    tags: ["syntetiske data", "anonymisering", "øvelse", "hvidvask", "pension", "IT-support"],
    prompt: `Rolle: Du er læringsdesigner med fokus på dataminimering.

Kontekst: Jeg vil øve [METODE ELLER OPGAVETYPE]. Den virkelige situation handler generelt om [BESKRIV KUN TYPEN AF SITUATION]. Relevante faglige forhold er [GENERELLE FORHOLD].

Metode: Skab en fuldt fiktiv øvelsescase. Brug opdigtede aktører, afrundede tal, ændrede datoer og generiske steder. Medtag kun de oplysninger, der er nødvendige for øvelsen. Afslut med:
1. Hvilke detaljer der bevidst er gjort syntetiske
2. Tre spørgsmål jeg kan øve på casen
3. Hvad casen ikke må bruges til at beslutte

Genskab ikke den virkelige person, kunde eller virksomhed.`,
    safety: "En syntetisk case skal bygges fra en generel beskrivelse - ikke ved at indsætte den oprindelige sag og bede AI anonymisere den.",
    avoid: "Undlad navne, kontaktoplysninger, præcise beløb, usædvanlige hændelser og kombinationer, der kan pege tilbage på en virkelig person eller virksomhed."
  },
  {
    id: "p052",
    category: "Vaner & udvikling",
    field: "På tværs",
    type: "deep",
    title: "Planlæg mit første lille AI-eksperiment",
    when: "Brug den, når du vil omsætte en idé til en tryg afprøvning efter workshoppen.",
    tags: ["eksperiment", "læring", "næste skridt"],
    prompt: `Rolle: Du er en læringsmakker, der hjælper mig med at starte småt og lære af resultatet.

Kontekst: Jeg vil afprøve AI på [UFØLSOM DEL AF EN ARBEJDSOPGAVE]. Jeg har cirka [TID] til forsøget. Mit mål er [HVAD JEG VIL LÆRE ELLER FORBEDRE].

Metode: Lav en enkel forsøgsplan med:
1. Et afgrænset input, jeg sikkert kan bruge
2. En første prompt
3. Et tydeligt tegn på, at forsøget hjælper
4. Tre ting jeg selv skal kontrollere
5. Hvad jeg noterer bagefter
6. Et næste skridt, hvis forsøget virker - og hvis det ikke virker

Hold forsøget lille nok til at kunne gennemføres på den angivne tid.`,
    safety: "Vælg en ufølsom delopgave og mål læring eller kvalitet - ikke lovede tidsgevinster."
  },
  {
    id: "p053",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "micro",
    title: "Spørg, før du svarer",
    when: "Brug den, når opgaven er for vigtig til, at det første svar må være et gæt.",
    tags: ["afklarende spørgsmål", "dialog", "RKM"],
    prompt: `Stil mig tre afklarende spørgsmål, før du løser opgaven. Vent på mine svar.`,
    safety: "Svar med ufølsomme oplysninger eller pladsholdere."
  },
  {
    id: "p054",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "micro",
    title: "Tre bud, der er reelt forskellige",
    when: "Brug den, når forslagene begynder at ligne hinanden.",
    tags: ["alternativer", "idéudvikling"],
    prompt: `Giv mig tre bud, der er reelt forskellige - ikke tre variationer af det samme.`,
    safety: "Du vælger selv retningen. Forslagene er sparring, ikke en anbefaling."
  },
  {
    id: "p055",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "micro",
    title: "Kritisér dit eget svar",
    when: "Brug den, når svaret ser pænt ud, men du ikke er sikker på, at det holder.",
    tags: ["kritik", "iteration", "forbedring"],
    prompt: `Find de tre svageste steder i dit eget svar, og skriv, hvad du ville gøre ved dem.`,
    safety: "Selvkritik fra AI er en idéliste, ikke en kvalitetsgaranti."
  },
  {
    id: "p056",
    category: "Kvalitet & sikkerhed",
    field: "På tværs",
    type: "micro",
    title: "Hvad har du gættet?",
    when: "Brug den, når svaret lyder mere sikkert, end grundlaget kan bære.",
    tags: ["hallucination", "usikkerhed", "kontrol"],
    prompt: `Hvad i dit svar bygger på det, jeg har fortalt dig - og hvad har du gættet dig til?`,
    safety: "AI kan også tage fejl om sin egen sikkerhed. Kontrollér de vigtigste punkter selv."
  },
  {
    id: "p057",
    category: "Vaner & udvikling",
    field: "På tværs",
    type: "micro",
    title: "Gør det til en prompt, jeg kan gemme",
    when: "Brug den, når noget virkede, og du gerne vil kunne gøre det igen.",
    tags: ["genbrug", "promptbibliotek", "pladsholdere"],
    prompt: `Skriv den opgave, jeg lige har givet dig, om til en prompt, jeg kan gemme og genbruge. Sæt [pladsholdere] dér, hvor jeg selv skal udfylde noget.`,
    safety: "Fjern lokale navne, tal og systemer, før prompten gemmes eller deles."
  },
  {
    id: "p058",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "quick",
    title: "Forbedr min prompt med RKM",
    when: "Brug den, når din første prompt er for vag eller giver et generisk svar.",
    tags: ["RKM", "forbedring", "prompt"],
    prompt: `Her er min nuværende prompt:
[INDSÆT PROMPTEN]

Forbedr den med:
- Rolle: en nyttig funktion, ikke en falsk autoritet
- Kontekst: formål, målgruppe og relevante begrænsninger
- Metode: trin, format og kvalitetskriterier

Bevar min intention. Brug pladsholdere til oplysninger, jeg selv skal udfylde. Vis først den forbedrede prompt og derefter højst tre korte begrundelser for ændringerne.`,
    safety: "Fjern fortrolige oplysninger fra den oprindelige prompt, før du indsætter den."
  },
  {
    id: "p059",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "quick",
    title: "Find den manglende kontekst",
    when: "Brug den, når AI svarer korrekt, men alt for generelt.",
    tags: ["kontekst", "afklaring", "kvalitet"],
    prompt: `Min opgave er: [OPGAVE]. Mit ønskede resultat er: [RESULTAT].

Stil de fem vigtigste spørgsmål, som skal besvares for at gøre opgaven præcis. Prioritér spørgsmål om formål, målgruppe, input, begrænsninger og kvalitetskriterier. Gæt ikke på svarene.`,
    safety: "Besvar spørgsmålene med ufølsomme oplysninger eller pladsholdere."
  },
  {
    id: "p060",
    example: "E02",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "quick",
    title: "Giv mig tre tydeligt forskellige retninger",
    when: "Brug den, når du vil undgå at låse dig fast på AI's første idé.",
    tags: ["alternativer", "idéudvikling", "valg"],
    prompt: `Jeg arbejder med [OPGAVE ELLER IDÉ]. Målet er [MÅL].

Foreslå tre tydeligt forskellige tilgange - en enkel, en ambitiøs og en utraditionel. Beskriv for hver:
1. Hovedidéen
2. Fordelen
3. Ulempen eller risikoen
4. Hvad jeg skal undersøge, før jeg vælger

Træf ikke valget for mig.`,
    safety: "Brug forslagene som sparring; vurder selv faglighed, konsekvenser og rammer."
  },
  {
    id: "p061",
    category: "Beslutning & sparring",
    field: "Jura & compliance",
    type: "quick",
    title: "Vær djævlens advokat på min plan",
    when: "Brug den, når du vil opdage blinde vinkler i en plan, analyse eller model, før et menneske går videre.",
    tags: ["kritik", "risici", "blinde vinkler", "analyse", "compliance", "hvidvask"],
    prompt: `Her er min foreløbige plan: [BESKRIV PLANEN UDEN FORTROLIGE DETALJER].

Giv mig de fem stærkeste grunde til, at planen kan mislykkes. Skeln mellem manglende information, svage antagelser og reelle risici. Afslut med tre konkrete spørgsmål, jeg bør undersøge - ikke med en endelig anbefaling.`,
    safety: "AI kan udfordre en plan, men må ikke stå alene med en vigtig faglig beslutning."
  },
  {
    id: "p062",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "quick",
    title: "Fra rod til prompt",
    when: "Brug den, når det er hurtigere at tale eller skrive løs end at formulere en pæn prompt.",
    tags: ["diktering", "kontekst", "RKM"],
    prompt: `Her er min ustrukturerede beskrivelse af opgaven - dikteret eller skrevet løs:

[INDSÆT DIN RÅ TEKST]

Gør tre ting:
1. Skriv i én sætning, hvad du tror, jeg beder om
2. Peg på det, der er uklart eller modsiger sig selv
3. Skriv en færdig prompt med Rolle, Kontekst og Metode

Gæt ikke på fakta, jeg ikke har nævnt. Marker dem med [MANGLER].`,
    safety: "Når man dikterer, får man let sagt for meget - læs teksten igennem for fortrolige detaljer, før du sender den."
  },
  {
    id: "p063",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "quick",
    title: "Sammenlign to værktøjers svar",
    when: "Brug den, når du har stillet samme opgave i to AI-værktøjer – fx Copilot og ChatGPT – og vil vide, hvad du kan tro på.",
    tags: ["sammenligning", "værktøjer", "kontrol"],
    prompt: `Jeg har fået to svar på den samme opgave fra to forskellige AI-værktøjer (fx Copilot og Claude).

SVAR A: [INDSÆT]
SVAR B: [INDSÆT]

Vis mig:
1. Hvad de er enige om
2. Hvor de siger noget forskelligt - og hvad forskellen betyder
3. Hvilke påstande der kun optræder i ét af svarene
4. Hvad jeg skal kontrollere for at afgøre, hvem der har ret

Udnævn ikke en vinder.`,
    safety: "To værktøjer kan tage fejl på samme måde. Enighed er ikke dokumentation."
  },
  {
    id: "p064",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "quick",
    title: "Sæt rammerne, ikke kun opgaven",
    when: "Brug den, når svaret bliver for langt, for bredt eller i det forkerte format.",
    tags: ["format", "længde", "tone", "begrænsninger"],
    prompt: `Løs opgaven igen - denne gang inden for disse rammer:

- Længde: [MAKS. ANTAL ORD ELLER PUNKTER]
- Format: [MAIL, TABEL, PUNKTER, TALENOTER ELLER ANDET]
- Målgruppe: [HVEM SKAL LÆSE DET]
- Tone: [2-3 ORD]
- Må ikke indeholde: [ORD, PÅSTANDE ELLER ELEMENTER]
- Skal altid indeholde: [DET DER IKKE MÅ FALDE UD]

Hvis en ramme gør opgaven umulig at løse ordentligt, så sig det i stedet for at presse svaret ind.`,
    safety: "Stramme rammer kan skubbe nuancer ud - læs efter, om et nødvendigt forbehold forsvandt."
  },
  {
    id: "p065",
    category: "Prompting & sparring",
    field: "IT",
    type: "deep",
    title: "Byg prompten ved at stille spørgsmål",
    when: "Brug den, når opgaven er vigtig, men du endnu ikke kender alle krav til svaret. Fx krav, user story, projekt, systemændring eller driftsproces.",
    tags: ["dialog", "afklarende spørgsmål", "RKM", "kravafklaring", "user story", "IT", "drift"],
    prompt: `Rolle: Du er min promptfacilitator. Dit mål er at forstå opgaven, før du foreslår en løsning.

Kontekst: Jeg vil bruge AI til [OPGAVE]. Resultatet skal bruges af [MÅLGRUPPE] til [FORMÅL]. Jeg kan dele [SIKRE INPUTTYPER].

Metode: Stil ét afklarende spørgsmål ad gangen, og vent på mit svar. Spørg især til ønsket output, succeskriterier, kendte begrænsninger, eksempler og menneskelig kontrol. Stop efter højst syv spørgsmål. Skriv derefter en samlet RKM-prompt og en kort tjekliste til vurdering af svaret. Udfyld ikke manglende fakta med gæt.`,
    safety: "Brug pladsholdere, hvis et afklarende spørgsmål kræver data, du ikke må dele."
  },
  {
    id: "p066",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "deep",
    title: "Reparer et svar, der ramte ved siden af",
    when: "Brug den, når AI's svar er for generisk, langt, stift eller upræcist.",
    tags: ["reparation", "iteration", "feedback"],
    prompt: `Rolle: Du er en kritisk redaktør af AI-output.

Kontekst: Min oprindelige opgave var [OPGAVE]. Jeg ønskede [ØNSKET RESULTAT]. Svaret ramte ved siden af, fordi [BESKRIV PROBLEMET]. Her er det ufølsomme svar eller et kort uddrag: [INDSÆT].

Metode:
1. Peg på de tre vigtigste årsager til, at svaret ikke virker
2. Foreslå den mindste ændring til min prompt, der kan løse hvert problem
3. Skriv en reparationsprompt, jeg kan sende som næste besked i samme samtale
4. Giv tre kontrolspørgsmål til det nye svar

Bevar det, der allerede fungerer, og start ikke automatisk helt forfra.`,
    safety: "Kontrollér, at uddraget ikke indeholder fortrolige eller personhenførbare oplysninger."
  },
  {
    id: "p067",
    category: "Kvalitet & sikkerhed",
    field: "På tværs",
    type: "deep",
    title: "Lav peer-review af min prompt",
    when: "Brug den, når du vil teste, om andre kan forstå promptens intention og kontrolkrav.",
    tags: ["peer-review", "forudsigelighed", "kontrol"],
    prompt: `Rolle: Du er en kritisk kollega, som kun må vurdere min instruktion - ikke løse opgaven.

Kontekst: Her er min prompt: [INDSÆT EN PROMPT UDEN FORTROLIGE OPLYSNINGER].

Metode: Vurdér prompten i fem punkter:
1. Hvilket output forventer du, at den giver?
2. Hvilken kontekst mangler?
3. Hvad kan misforstås?
4. Hvilke antagelser inviterer den AI til at gætte på?
5. Hvilket menneskeligt kontrolpunkt bør tilføjes?

Skriv derefter én forbedret version. Bevar promptens oprindelige formål.`,
    safety: "Peer-review forbedrer tydelighed, men dokumenterer ikke, at outputtet bliver korrekt eller lovligt."
  },
  {
    id: "p068",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "deep",
    title: "Lær mønsteret fra to eksempler",
    when: "Brug den, når du har godkendte eksempler på den form eller tone, du ønsker.",
    tags: ["eksempler", "stil", "multi-shot"],
    prompt: `Rolle: Du er en mønstergenkendende assistent, der skal lære form og kvalitetskriterier fra mine eksempler.

Kontekst: Jeg vil skabe [NYT OUTPUT]. Her er to korte, godkendte og ufølsomme eksempler:

EKSEMPEL 1:
[INDSÆT]

EKSEMPEL 2:
[INDSÆT]

Metode: Beskriv først mønsteret i struktur, tone, ordvalg og detaljeringsniveau i højst seks punkter. Bed mig bekræfte eller rette analysen. Skriv først det nye output, når jeg har bekræftet. Kopiér ikke særlige fakta eller formuleringer fra eksemplerne, medmindre de hører til den nye opgave.`,
    safety: "Brug kun tekster, du har ret til at dele, og fjern navne, sagsoplysninger og interne kendetegn."
  },
  {
    id: "p069",
    example: "E01",
    category: "Møder & samarbejde",
    field: "På tværs",
    type: "deep",
    title: "De spørgsmål, de helt sikkert stiller",
    when: "Brug den, når du skal ind til et møde med en anden afdeling, en leverandør eller din leder og gerne vil være forberedt på det svære.",
    tags: ["mødeforberedelse", "indvendinger", "leverandør", "ledelse"],
    prompt: `Rolle: Du er en erfaren kollega, som forbereder mig på et møde.

Kontekst: Jeg skal tale med [ROLLE ELLER AFDELING – IKKE NAVNE] om [EMNE]. Situationen er, generelt beskrevet: [BESKRIV UDEN FORTROLIGE DETALJER]. Det, jeg gerne vil opnå, er [FORMÅL].

Metode:
1. Giv mig de otte spørgsmål, de med størst sandsynlighed stiller – sorteret efter, hvor ubehagelige de er
2. Skriv et kort, ærligt svar i klarsprog til hvert
3. Marker de spørgsmål, jeg ikke bør besvare på stående fod, og hvem jeg i stedet skal spørge
4. Slut med tre spørgsmål, jeg selv bør stille

Lov ikke noget på Nykredits vegne, og opfind ikke frister, priser eller beslutninger.`,
    safety: "Kontrollér tal, frister og aftaler i Nykredits egne systemer, før du bruger svarene.",
    avoid: "Ingen kunde- eller persondata og ingen interne dokumenter i et privat AI-værktøj."
  },
  {
    id: "p070",
    example: "E03",
    category: "Kunde & kollega",
    field: "På tværs",
    type: "deep",
    title: "Fokusgruppe med fem opdigtede modtagere",
    when: "Brug den, når en besked skal virke på flere forskellige modtagere, og du kun kan spørge dig selv.",
    tags: ["fokusgruppe", "målgruppe", "test", "kommunikation"],
    prompt: `Rolle: Du er facilitator for en fokusgruppe med fem opdigtede modtagere.

Kontekst: Her er min besked: [INDSÆT UFØLSOM TEKST]. Den skal læses af [BESKRIV MÅLGRUPPEN BREDT]. Formålet er [FORMÅL].

Metode:
1. Opfind fem forskellige modtagere. Beskriv hver med to linjer om situation og forventning - brug ikke virkelige personer
2. Lad hver reagere i første person: hvad forstår de, hvad reagerer de på, hvad bliver de i tvivl om
3. Saml de tre indvendinger, der går igen
4. Foreslå de mindste ændringer, der ville fjerne dem

Personerne er opdigtede. Præsentér ikke deres reaktioner som dokumenteret indsigt i modtagerne.`,
    safety: "En syntetisk fokusgruppe er inspiration. Den erstatter ikke rigtige modtagere, test eller dokumenteret indsigt."
  },
  {
    id: "p071",
    category: "Projekter & processer",
    field: "IT",
    type: "deep",
    title: "Fra løs ønskeliste til klare krav",
    when: "Brug den, når et ønske fra forretningen skal blive til krav, nogen kan arbejde ud fra.",
    tags: ["kravafklaring", "user story", "acceptkriterier", "IT", "projekt"],
    prompt: `Rolle: Du er kravanalytiker, som hellere spørger end gætter.

Kontekst: Ønsket lyder: [INDSÆT ØNSKET, SOM DET BLEV SAGT]. Brugerne er [BESKRIV ROLLER]. Systemet eller processen er, generelt beskrevet: [BESKRIV UDEN INTERNE SYSTEMNAVNE, ARKITEKTUR ELLER KODE].

Metode:
1. Omskriv ønsket til højst fem user stories i formen "Som [rolle] vil jeg [handling], så [værdi]"
2. Giv hver story tre til fem acceptkriterier, der kan testes
3. List de antagelser, du var nødt til at tage
4. Skriv de fem spørgsmål, jeg skal stille bestilleren, før noget bygges
5. Peg på det, der i virkeligheden er to ønsker pakket ind i ét

Opfind ikke tekniske løsninger, integrationer eller datamodeller.`,
    safety: "Kravene skal bekræftes af bestilleren og af de fagpersoner, der kender systemet.",
    avoid: "Brug ikke proprietær kode, logs, arkitekturtegninger eller sikkerhedsoplysninger."
  },
  {
    id: "p072",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "micro",
    title: "Halv længde",
    when: "Brug den, når teksten er blevet for lang til, at nogen læser den.",
    tags: ["kortere", "redigering", "klarhed"],
    prompt: `Gør den halvt så lang. Samme pointe, samme tone, samme forbehold.`,
    safety: "Sammenlign med originalen - forbehold og nuancer forsvinder let, når der skæres."
  },
  {
    id: "p073",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "micro",
    title: "Mere venlig, mindre stiv",
    when: "Brug den, når teksten er korrekt, men lyder som en blanket.",
    tags: ["tone", "venlighed", "redigering"],
    prompt: `Skriv den om, så den lyder venligere og mindre formel - uden at blive fjollet eller overdrevent personlig.`,
    safety: "Tonen skal passe til relationen og til sagens alvor. Den vurdering er din."
  },
  {
    id: "p074",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "micro",
    title: "Ret kun det, jeg peger på",
    when: "Brug den, når AI bliver ved med at skrive hele teksten om.",
    tags: ["lokal redigering", "kontrol", "stil"],
    prompt: `Ret kun [AFSNITTET ELLER SÆTNINGEN, JEG PEGER PÅ]. Lad resten stå præcis, som det er.`,
    safety: "Læs efter, at resten faktisk står uændret."
  },
  {
    id: "p075",
    example: "E03",
    category: "Kunde & kollega",
    field: "På tværs",
    type: "micro",
    title: "Hvad bliver modtageren i tvivl om?",
    when: "Brug den, når du har skrevet noget, du selv synes er tydeligt.",
    tags: ["modtager", "klarhed", "feedback"],
    prompt: `Læs teksten som modtageren. Hvilke tre spørgsmål ville du sidde tilbage med?`,
    safety: "Svaret er et gæt på en typisk modtager - ikke på din konkrete modtager."
  },
  {
    id: "p076",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "micro",
    title: "Tre emnefelter, der bliver åbnet",
    when: "Brug den, når mailen er god, men risikerer at drukne i indbakken.",
    tags: ["mail", "emnefelt", "opmærksomhed"],
    prompt: `Skriv tre forslag til emnefelt til denne mail. Konkrete frem for smarte - modtageren skal kunne se, hvad mailen kræver af dem.`,
    safety: "Emnefeltet må ikke love mere eller andet, end mailen faktisk indeholder."
  },
  {
    id: "p077",
    example: "E02",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "quick",
    title: "Skriv et udkast eller en status fra mine stikord",
    when: "Brug den, når du har indholdet, men mangler en klar første version.",
    tags: ["udkast", "stikord", "tekst", "projektstatus", "IT", "drift", "kommunikation", "HR", "backoffice", "service"],
    prompt: `Skriv et første udkast ud fra disse ufølsomme stikord: [STIKORD].

Formål: [FORMÅL]
Målgruppe: [MÅLGRUPPE]
Format: [MAIL, NOTAT, PROJEKTSTATUS, DRIFTSNOTAT, HR-TEKST ELLER ANDET]
Tone: [2-3 ORD]
Maksimal længde: [LÆNGDE]

Markér med [MANGLER], hvis stikordene ikke giver grundlag for en nødvendig oplysning. Opfind ikke fakta.`,
    safety: "Læs hele udkastet igennem, kontrollér fakta, og gør sproget til dit eget før brug."
  },
  {
    id: "p078",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "quick",
    title: "Gør teksten kortere uden at miste pointen",
    when: "Brug den, når modtageren skal kunne afkode budskabet hurtigere.",
    tags: ["kortere", "klarhed", "redigering"],
    prompt: `Forkort denne tekst med cirka [PROCENT] procent:

[INDSÆT UFØLSOM TEKST]

Bevar alle verificerbare fakta, nødvendige forbehold og det vigtigste handlingspunkt. Fjern gentagelser, fyldord og baggrund, som modtageren ikke behøver. Skriv bagefter én linje om, hvad du fjernede.`,
    safety: "Sammenlign med originalen, så vigtige forbehold eller nuancer ikke er forsvundet."
  },
  {
    id: "p079",
    category: "Kunde & kollega",
    field: "På tværs",
    type: "quick",
    title: "Fjern jargon uden at miste faglighed",
    when: "Brug den, når en tekst skal forstås af en kollega i en anden afdeling, en ny medarbejder eller en kunde.",
    tags: ["jargon", "klarsprog", "målgruppe"],
    prompt: `Omskriv teksten til klart sprog for [MÅLGRUPPE]:

[INDSÆT UFØLSOM TEKST]

Bevar faglige pointer og nødvendige forbehold. Forklar uundgåelige fagbegreber første gang, de bruges. Markér fagudtryk eller påstande, du er usikker på, i stedet for at gætte.`,
    safety: "Enklere sprog må ikke ændre produktvilkår, juridisk betydning eller faglige nuancer."
  },
  {
    id: "p080",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "quick",
    title: "Skriv tre toneversioner",
    when: "Brug den, når du vil vælge tone bevidst i stedet for at acceptere første udkast.",
    tags: ["tone", "alternativer", "målgruppe"],
    prompt: `Omskriv dette budskab i tre komplette versioner:
1. Kort og direkte
2. Varm og imødekommende
3. Formelt og neutralt

Budskab: [INDSÆT UFØLSOMT BUDSKAB]
Modtager: [MÅLGRUPPE]

Bevar de samme fakta og løfter i alle tre versioner. Tilføj ikke nye oplysninger.`,
    safety: "Vælg og redigér selv den version, der passer til relationen og situationens alvor."
  },
  {
    id: "p081",
    example: "E04",
    category: "Møder & samarbejde",
    field: "På tværs",
    type: "quick",
    title: "Find beslutninger og handlinger i noter",
    when: "Brug den, når ufølsomme noter fra et møde, en workshop eller en intern proces skal blive til et overskueligt næste skridt.",
    tags: ["mødenoter", "handlinger", "ansvar", "HR", "workshop", "projekt", "backoffice", "service"],
    prompt: `Strukturér disse ufølsomme eller godkendte noter: [INDSÆT NOTER].

Lav fire afsnit:
- Beslutninger, der tydeligt fremgår
- Handlinger med foreslået ejer og frist
- Uafklarede spørgsmål
- Punkter, hvor noterne er tvetydige

Skriv "ikke angivet", hvis ejer eller frist mangler. Opfind ikke aftaler.`,
    safety: "Kontrollér resultatet med deltagerne eller de originale noter, før det behandles som et referat.",
    avoid: "Brug ikke rå noter med personoplysninger eller fortrolige forhold i et privat AI-værktøj."
  },
  {
    id: "p082",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "quick",
    title: "Korrektur uden stilskifte",
    when: "Brug den, når teksten skal rettes, men stadig lyde som dig.",
    tags: ["korrektur", "stil", "sprog"],
    prompt: `Læs korrektur på denne ufølsomme tekst: [INDSÆT TEKST].

Ret kun stavefejl, grammatik, tegnsætning og åbenlyst uklare formuleringer. Bevar min tone, struktur og faglige betydning. Vis:
1. Den rettede tekst
2. En kort liste over ændringer, der kan have påvirket betydningen

Spørg i stedet for at omskrive, hvis meningen er uklar.`,
    safety: "Godkend selv enhver ændring, der kan ændre tone, ansvar eller faglig betydning."
  },
  {
    id: "p083",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "quick",
    title: "Er teksten dyr at læse?",
    when: "Brug den, når en tekst er hurtig at skrive med AI, men måske besværlig at bruge for modtageren.",
    tags: ["workslop", "kvalitet", "modtager"],
    prompt: `Læs denne tekst som en travl modtager: [INDSÆT UFØLSOM TEKST].

Svar på:
1. Hvad er den konkrete pointe, og hvornår i teksten kommer den?
2. Hvilke afsnit siger noget, og hvilke fylder bare?
3. Hvad skal modtageren gøre bagefter - står det tydeligt?
4. Hvor lyder det som noget, en maskine har skrevet?

Skriv til sidst den korteste version, der stadig gør arbejdet.`,
    safety: "Den korte version er et forslag. Du afgør, hvad der skal stå."
  },
  {
    id: "p084",
    example: "E02",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "quick",
    title: "Disposition efter hvorfor, hvordan og hvad",
    when: "Brug den, når du ved, hvad du vil sige, men ikke i hvilken rækkefølge.",
    tags: ["disposition", "struktur", "Golden Circle"],
    prompt: `Emne: [EMNE]. Modtager: [MÅLGRUPPE]. Det, de skal forstå eller gøre bagefter: [MÅL].

Lav en disposition i tre dele:
- HVORFOR: hvorfor det betyder noget for netop dem
- HVORDAN: hvordan det hænger sammen eller foregår
- HVAD: hvad der konkret sker, og hvad de skal gøre

Højst tre punkter under hver. Marker de steder, hvor jeg mangler fakta.`,
    safety: "Rækkefølgen er et formidlingsgreb - kontrollér, at den ikke skjuler et nødvendigt forbehold."
  },
  {
    id: "p085",
    example: "E03",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "deep",
    title: "Få feedback før teksten bliver omskrevet",
    when: "Brug den, når du vil beholde ejerskab over teksten og først forstå dens svagheder.",
    tags: ["feedback", "redaktør", "forbedring"],
    prompt: `Rolle: Du er min skrivecoach, ikke min ghostwriter.

Kontekst: Jeg har skrevet denne ufølsomme tekst til [MÅLGRUPPE] med formålet [FORMÅL]:

[INDSÆT TEKST]

Metode: Giv feedback i fire sektioner: klarhed, struktur, tone og manglende information. Peg på højst to konkrete steder i hver sektion. Foreslå lokale ændringer, men skriv ikke hele teksten om endnu. Slut med de tre ændringer, der vil gøre størst forskel, og vent på mit valg.`,
    safety: "Kontrollér, at feedbacken ikke glatter nødvendige forbehold eller faglig præcision ud."
  },
  {
    id: "p086",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "deep",
    title: "Skriv, kritisér, forbedr og polér",
    when: "Brug den til en vigtig tekst, som skal udvikles i flere kontrollerede trin.",
    tags: ["fire trin", "workflow", "redigering"],
    prompt: `Rolle: Du er junior-skribent, og jeg er ansvarlig seniorredaktør.

Kontekst: Jeg skal skrive [FORMAT] til [MÅLGRUPPE]. Formålet er [FORMÅL]. Mine ufølsomme råmaterialer er [STIKORD ELLER TEKST]. Tonen skal være [TONE], og længden højst [LÆNGDE].

Metode: Arbejd i fire trin, og stop efter hvert trin, så jeg kan godkende:
1. SKRIV et første udkast uden at opfinde fakta
2. KRITISÉR udkastet med tre konkrete svagheder
3. FORBEDR kun de svagheder, jeg vælger
4. POLÉR tone, rytme og længde uden at ændre indholdet

Markér manglende oplysninger med [MANGLER].`,
    safety: "Send eller publicér aldrig teksten direkte fra processen; foretag en afsluttende menneskelig gennemgang."
  },
  {
    id: "p087",
    category: "Kunde & kollega",
    field: "På tværs",
    type: "deep",
    title: "Opfølgningsmail efter et møde",
    when: "Brug den, når aftaler fra et møde skal samles klart og venligt.",
    tags: ["mail", "opfølgning", "aftaler"],
    prompt: `Rolle: Du er en præcis kommunikationsassistent.

Kontekst: Jeg skal følge op på et møde om [EMNE]. Modtageren er [MÅLGRUPPE]. Disse ufølsomme punkter blev aftalt: [PUNKTER]. Det, der fortsat er åbent, er [ÅBNE PUNKTER].

Metode: Skriv en mail på højst [ANTAL] ord med:
1. Kort tak og formål
2. Beslutninger, som faktisk er truffet
3. Næste skridt med ejer og frist, hvor det er oplyst
4. Åbne spørgsmål uden gæt
5. En naturlig afslutning

Brug [MANGLER], hvis en ejer eller dato ikke er angivet.`,
    safety: "Kontrollér aftaler, navne, frister og tone før afsendelse.",
    avoid: "Indsæt ikke en rå mødeudskrift eller kunde- eller persondata i et værktøj, der ikke er godkendt til dem."
  },
  {
    id: "p088",
    category: "Kunde & kollega",
    field: "På tværs",
    type: "deep",
    title: "Forklar et komplekst emne til en ny målgruppe",
    when: "Brug den, når samme faglige indhold skal gøres relevant for en anden modtager. Fx en regel, en kontrol, en pensionsordning eller en IT-ændring.",
    tags: ["forklaring", "målgruppe", "klarsprog", "regler", "pension", "IT"],
    prompt: `Rolle: Du er en pædagogisk fagformidler, som er tydelig om usikkerhed.

Kontekst: Emnet er [EMNE]. Målgruppen er [MÅLGRUPPE], som allerede ved [FORHÅNDSVIDEN] og især har brug for at forstå [BEHOV]. Brug kun disse godkendte fakta eller kilder: [FAKTA/KILDER].

Metode: Skriv en forklaring med:
- hovedpointen i én sætning
- tre korte afsnit i logisk rækkefølge
- ét neutralt eksempel
- forklaring af nødvendige fagord
- hvad målgruppen bør gøre eller undersøge bagefter

Skeln mellem fakta, eksempel og forenkling.`,
    safety: "Vigtige faglige, juridiske eller økonomiske forklaringer skal kontrolleres mod kilden og Nykredits praksis."
  },
  {
    id: "p089",
    example: "E06",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "deep",
    title: "Oversæt og lokalisér teksten",
    when: "Brug den, når en tekst skal fungere naturligt i et andet sprog og en anden arbejdskontekst.",
    tags: ["oversættelse", "lokalisering", "tone"],
    prompt: `Rolle: Du er en omhyggelig oversætter og redaktør.

Kontekst: Oversæt fra [KILDESPROG] til [MÅLSPROG] for [MÅLGRUPPE]. Tekstens formål er [FORMÅL], og tonen skal være [TONE]. Fagord, produktnavne eller faste betegnelser, der skal bevares, er [LISTE].

Metode: Lav først en tro oversættelse. Tilpas derefter idiomer, høflighedsniveau, dato- og talformater til målgruppen uden at ændre fakta eller løfter. Markér tvetydige sætninger og termer, der kræver faglig afklaring. Vis til sidst de vigtigste lokaliseringsvalg i højst fem punkter.

Tekst:
[INDSÆT UFØLSOM TEKST]`,
    safety: "Få en sprogkyndig og relevant fagperson til at kontrollere tekster med juridisk eller økonomisk betydning eller betydning for kunder."
  },
  {
    id: "p090",
    category: "Skrivning & redigering",
    field: "På tværs",
    type: "deep",
    title: "Lav min lille toneguide",
    when: "Brug den, når du vil kunne genskabe din egen eller afdelingens tone i flere tekster.",
    tags: ["tone", "stilguide", "multi-shot", "eksempler"],
    prompt: `Rolle: Du er sprogredaktør og skal beskrive en tone, ikke efterligne den blindt.

Kontekst: Her er to korte tekster, der rammer den tone, jeg gerne vil skrive i: [INDSÆT EKSEMPEL 1] og [INDSÆT EKSEMPEL 2]. Her er én, der rammer forkert: [INDSÆT ELLER SKRIV "INGEN"]. Teksterne bruges til [FORMÅL] for [MÅLGRUPPE].

Metode:
1. Beskriv tonen i højst otte punkter: sætningslængde, tiltale, fagsprog, brug af tal, hvor tidligt budskabet kommer, og hvad der aldrig optræder
2. Giv tre "gør sådan her"- og tre "undgå"-eksempler på sætningsniveau
3. Vent på min rettelse af beskrivelsen
4. Skriv derefter [NY TEKST] efter den rettede toneguide

Kopiér ikke fakta eller formuleringer fra eksemplerne ind i den nye tekst.`,
    safety: "Brug kun tekster, du har ret til at dele, og fjern navne og sagsoplysninger først."
  },
  {
    id: "p091",
    category: "Kunde & kollega",
    field: "På tværs",
    type: "deep",
    title: "Svar på en utilfreds henvendelse fra en kollega eller afdeling",
    when: "Brug den, når nogen er utilfredse med ventetid, en fejl eller en afgørelse, og du skal svare ordentligt uden at love for meget.",
    tags: ["klage", "intern henvendelse", "tone", "service"],
    prompt: `Rolle: Du er en erfaren sagsbehandler i back-office med sans for både mennesker og regler.

Kontekst: Henvendelsen handler, generelt beskrevet, om [BESKRIV SITUATIONEN UDEN KUNDE- ELLER PERSONDATA]. Afsenderen er [ROLLE – FX EN KOLLEGA I EN ANDEN AFDELING ELLER EN FILIAL]. Det, jeg faktisk kan gøre, er [MULIGHEDER]. Det, jeg ikke kan, er [GRÆNSER].

Metode: Skriv et svar på højst [ANTAL] ord, som:
1. Anerkender det, personen faktisk er utilfreds med – uden at undskylde for noget, vi ikke har gjort
2. Forklarer det, jeg kan sige, i klarsprog
3. Er tydeligt om det, jeg ikke kan love, og hvorfor
4. Slutter med ét konkret næste skridt og hvem der gør hvad

Opfind ikke frister, undtagelser eller løfter på Nykredits vegne.`,
    safety: "Få den rette fagperson eller leder til at læse svaret, hvis sagen kan få økonomiske eller juridiske konsekvenser.",
    avoid: "Indsæt ikke den originale henvendelse med navne, sagsnumre eller kunde- eller persondata i et privat AI-værktøj."
  },
  {
    id: "p092",
    category: "Projekter & processer",
    field: "IT",
    type: "deep",
    title: "Samme status til to målgrupper",
    when: "Brug den, når ledelsen og fagfolkene skal have det samme at vide, men ikke på samme måde.",
    tags: ["projektstatus", "målgruppe", "IT", "drift", "projekt"],
    prompt: `Rolle: Du er projektkommunikatør, som skriver til to meget forskellige læsere.

Kontekst: Her er de ufølsomme fakta om status: [INDSÆT STIKORD, TAL, DATOER OG ÅBNE PUNKTER]. Projektet handler om [BESKRIV GENERELT].

Metode: Skriv to versioner af samme status, som ikke modsiger hinanden:
1. Til ledelsen: højst [ANTAL] ord om konsekvens, risiko, beslutninger der skal træffes og næste milepæl
2. Til fagfolkene: konkrete opgaver, afhængigheder, kendte fejl og det, der mangler afklaring

Brug samme tal og datoer i begge. Skriv [MANGLER], hvor stikordene ikke rækker, og pak ikke dårligt nyt ind.`,
    safety: "Kontrollér tal, datoer og status mod projektets egne kilder, før du sender.",
    avoid: "Brug ikke interne systemnavne, sikkerhedsforhold eller leverandøroplysninger, der ikke må deles."
  },
  {
    id: "p093",
    category: "Kunde & kollega",
    field: "Investering & pension",
    type: "deep",
    title: "Forklar en pensionsordning og dens undtagelser",
    when: "Brug den, når en kollega skal forstå præcis, hvad en ordning giver – og hvad den ikke giver.",
    tags: ["pension", "ordning", "undtagelser", "klarsprog"],
    prompt: `Rolle: Du er fagformidler, som er lige så tydelig om undtagelser som om fordele.

Kontekst: Emnet er [ORDNING, VILKÅR ELLER REGEL – FX EN GENEREL BESKRIVELSE AF EN RATEPENSION]. Brug kun disse offentlige eller godkendte formuleringer: [INDSÆT UDDRAG ELLER LINK]. Modtageren er [ROLLE – FX EN NY KOLLEGA I PENSIONSTEAMET] og har især brug for at forstå [BEHOV].

Metode: Skriv en forklaring med:
1. Hvad ordningen giver, i klarsprog
2. Hvad den ikke giver, lige så tydeligt
3. De tre situationer, hvor det oftest bliver misforstået
4. Hvad man selv skal gøre eller oplyse
5. De steder, hvor svaret afhænger af den enkelte aftale eller af lovændringer

Gæt ikke på satser, beløb eller frister, der ikke står i materialet. Skriv "fremgår ikke af materialet".`,
    safety: "Satser, frister og undtagelser skal bekræftes i de gældende regler og i Nykredits egne materialer.",
    avoid: "Brug ikke prompten til at afgøre en konkret kundes sag, og indsæt ingen kunde- eller persondata."
  },
  {
    id: "p094",
    category: "Skrivning & redigering",
    field: "Kommunikation",
    type: "deep",
    title: "Samme besked i tre kanaler",
    when: "Brug den, når den samme information skal ud i mail, på Teams og på intranettet.",
    tags: ["intern kommunikation", "kanaler", "HR", "drift"],
    prompt: `Rolle: Du er intern kommunikatør med sans for, at kanaler læses forskelligt.

Kontekst: Budskabet er: [INDSÆT UFØLSOMT BUDSKAB]. Modtagerne er [BESKRIV GRUPPEN]. Det, de skal gøre, er [HANDLING]. Afsenderen er [ROLLE, IKKE NAVN].

Metode: Skriv tre versioner med præcis de samme fakta:
1. Mail: emnefelt, højst [ANTAL] ord og en tydelig handling
2. Kort opslag til chat eller Teams: højst fem linjer, skal kunne læses på en telefon
3. Intranet eller opslagstavle: overskrift, to afsnit og hvem man spørger

Skriv til sidst, hvad der går tabt i den korteste version, og om det er acceptabelt.`,
    safety: "Kontrollér, at de tre versioner siger det samme, og at ingen af dem lover mere end den længste."
  },
  {
    id: "p095",
    category: "Beslutning & sparring",
    field: "På tværs",
    type: "micro",
    title: "Hvad taler imod?",
    when: "Brug den, når du er ved at være for enig med dig selv.",
    tags: ["modargumenter", "djævlens advokat", "kritik"],
    prompt: `Hvad taler imod det her? Giv mig de tre stærkeste modargumenter.`,
    safety: "Modargumenter er sparring. Du vurderer selv, hvilke der er fagligt relevante."
  },
  {
    id: "p096",
    example: "E08",
    category: "Kvalitet & sikkerhed",
    field: "På tværs",
    type: "micro",
    title: "Hvor står det?",
    when: "Brug den, når et svar henviser til et dokument, du selv har givet.",
    tags: ["kilde", "henvisning", "faktatjek"],
    prompt: `Peg på, hvor i kilden hver påstand står. Skriv "står ikke i kilden", hvor den ikke gør.`,
    safety: "Åbn selv de vigtigste steder i kilden - en henvisning kan være opfundet."
  },
  {
    id: "p097",
    category: "Kvalitet & sikkerhed",
    field: "På tværs",
    type: "micro",
    title: "Hvad er du mest usikker på?",
    when: "Brug den, før du bruger et svar til noget, der har konsekvenser.",
    tags: ["usikkerhed", "kontrol", "kildekritik"],
    prompt: `Hvilke tre af dine påstande er du mest usikker på, og hvordan tjekker jeg dem?`,
    safety: "AI's egen usikkerhedsvurdering er et fingerpeg, ikke en måling."
  },
  {
    id: "p098",
    example: "E08",
    category: "Research & læring",
    field: "På tværs",
    type: "quick",
    title: "Opsummér kun den valgte kilde",
    when: "Brug den, når du vil forstå ét dokument uden at blande anden viden ind.",
    tags: ["opsummering", "kilde", "dokument"],
    prompt: `Opsummér kun materialet nedenfor til [MÅLGRUPPE]. Brug ikke viden uden for materialet.

Giv mig:
1. De fem vigtigste pointer
2. De vigtigste tal, datoer og forbehold
3. Hvad materialet ikke giver svar på
4. Korte henvisninger til afsnit eller side, hvis de fremgår

Materiale: [INDSÆT OFFENTLIGT ELLER GODKENDT MATERIALE]`,
    safety: "Kontrollér henvisninger og centrale formuleringer direkte i originalkilden."
  },
  {
    id: "p099",
    example: "E08",
    category: "Research & læring",
    field: "På tværs",
    type: "quick",
    title: "Sammenlign to kilder",
    when: "Brug den, når to kilder ser ud til at sige noget forskelligt om samme emne.",
    tags: ["sammenligning", "kilder", "uenighed"],
    prompt: `Sammenlign KILDE A og KILDE B om [SPØRGSMÅL].

Vis i en tabel:
- Hvad de er enige om
- Hvad de er uenige om
- Forskelle i dato, metode, afsender og datagrundlag
- Hvilke konklusioner hver kilde faktisk understøtter
- Hvad der stadig er usikkert

Citér eller henvis præcist til det sted i hver kilde, der støtter sammenligningen. Gæt ikke, hvis information mangler.

KILDE A: [INDSÆT/LINK]
KILDE B: [INDSÆT/LINK]`,
    safety: "Åbn selv de vigtigste henvisninger og kontrollér, at kilderne siger det, sammenligningen hævder."
  },
  {
    id: "p100",
    category: "Kvalitet & sikkerhed",
    field: "På tværs",
    type: "quick",
    title: "Find påstande, der mangler belæg",
    when: "Brug den, når et udkast ser overbevisende ud, men dokumentationen kan være tynd.",
    tags: ["faktatjek", "påstande", "kildekritik"],
    prompt: `Gennemgå dette ufølsomme udkast: [INDSÆT TEKST].

Markér hver væsentlig påstand som:
- UNDERSTØTTET af en angivet kilde
- KRÆVER KILDE
- ANALYSE ELLER FORTOLKNING
- USIKKER ELLER FOR BRED

Forklar kort hvorfor, og foreslå hvilken type primærkilde der kan kontrollere de svage punkter. Opfind ikke kilder.`,
    safety: "En plausibel formulering er ikke dokumentation; find og åbn den faktiske kilde."
  },
  {
    id: "p101",
    example: "E05",
    category: "Analyse & data",
    field: "På tværs",
    type: "quick",
    title: "Forklar og fejlfind en Excel-formel",
    when: "Brug den, når du vil forstå en formel i Excel eller et andet regneark i stedet for blot at kopiere den.",
    tags: ["regneark", "formel", "test", "Excel", "data", "fejlfinding"],
    prompt: `Forklar denne formel i almindeligt dansk: [INDSÆT FORMEL].

Vis derefter:
1. Hvad hver del gør
2. Et lille, syntetisk eksempel med forventet resultat
3. To kanttilfælde eller fejl, jeg bør teste
4. En enklere variant, hvis den findes
5. En rettet variant, hvis du finder en fejl - ellers skriv, at ingen fejl er påvist

Hvis programversion eller lokale indstillinger kan ændre syntaksen, så sig det tydeligt.`,
    safety: "Test formlen på en kopi med syntetiske data, før den bruges på et rigtigt datasæt. Copilot i Excel kan gøre det direkte i arket."
  },
  {
    id: "p102",
    category: "Research & læring",
    field: "På tværs",
    type: "quick",
    title: "Vælg det rigtige researchrum",
    when: "Brug den, når du er i tvivl om, hvor du skal lede - og hvad du må lægge ind.",
    tags: ["researchrum", "kilder", "værktøjsvalg", "sikkerhed"],
    prompt: `Jeg skal undersøge: [SPØRGSMÅL]. Resultatet skal bruges til [FORMÅL].

Hjælp mig med at vælge mellem tre veje:
1. Mine egne eller udvalgte dokumenter
2. Det åbne web
3. Copilot i Nykredit – til det, Nykredits interne regler tillader

Skriv for hver: hvad den er god til her, hvad den er dårlig til, og hvilke typer oplysninger jeg under ingen omstændigheder skal lægge ind. Anbefal den enkleste vej, der kan besvare spørgsmålet, og sig det, hvis spørgsmålet kræver mere end én.`,
    safety: "Kun Nykredits interne regler afgør, hvilke værktøjer og datatyper der er godkendt – kunde- eller persondata hører aldrig hjemme i et privat AI-værktøj."
  },
  {
    id: "p103",
    category: "Research & læring",
    field: "På tværs",
    type: "deep",
    title: "Planlæg research med TRACE",
    when: "Brug den, når en researchopgave skal afgrænses og kunne efterprøves.",
    tags: ["TRACE", "researchplan", "kilder"],
    prompt: `Rolle: Du er researchfacilitator. Du hjælper mig med processen, men opfinder ikke kilder eller konklusioner.

Kontekst: Mit spørgsmål er [SPØRGSMÅL]. Resultatet skal bruges af [MÅLGRUPPE] til [FORMÅL]. Det skal være aktuelt pr. [DATO ELLER PERIODE]. Mine krav til kilder er [PRIMÆRKILDER, GEOGRAFI, SPROG ELLER ANDET].

Metode: Lav en TRACE-plan:
1. Task - præcis afgrænsning og underspørgsmål
2. Requirements - krav til aktualitet, kvalitet og output
3. Assemble - hvilke kildetyper der skal findes
4. Check - hvordan centrale påstande trianguleres
5. Export - et format, som passer til modtageren

Peg på antagelser og manglende information. Vent med selve researchen, til jeg har godkendt planen.`,
    safety: "TRACE gør processen mere sporbar, men mennesket skal stadig vurdere kilder og konklusioner."
  },
  {
    id: "p104",
    example: "E08",
    category: "Research & læring",
    field: "På tværs",
    type: "deep",
    title: "Lav et aktuelt overblik med tydelige kilder",
    when: "Brug den, når emnet har ændret sig og kræver opdaterede, daterede oplysninger.",
    tags: ["aktuelt", "webresearch", "kildehenvisninger"],
    prompt: `Rolle: Du er en forsigtig researchassistent, der skelner mellem dokumenterede fakta og egen syntese.

Kontekst: Jeg skal have et aktuelt overblik over [EMNE] pr. [DATO] til [MÅLGRUPPE]. Prioritér [OFFICIELLE MYNDIGHEDER, ORIGINALDATA, VIRKSOMHEDENS EGNE MEDDELELSER ELLER ANDRE PRIMÆRKILDER]. Geografisk fokus er [OMRÅDE].

Metode:
1. Søg efter de nyeste relevante primærkilder, hvis du har webadgang
2. Vis udgivelsesdato og direkte link ved hver central påstand
3. Skeln tydeligt mellem fakta, analyse og usikkerhed
4. Notér modstridende kilder og manglende data
5. Afslut med de fem vigtigste kontrolpunkter for mig

Hvis du ikke har webadgang eller ikke kan åbne en kilde, skal du sige det og ikke lade som om.`,
    safety: "Kontrollér dato, afsender og indhold i de vigtigste kilder, før overblikket bruges."
  },
  {
    id: "p105",
    example: "E07",
    category: "Kvalitet & sikkerhed",
    field: "Jura & compliance",
    type: "deep",
    title: "Fra offentlig vejledning til praktisk tjekliste",
    when: "Brug den, når en offentlig vejledning skal omsættes til spørgsmål og handlinger uden at blive til en afgørelse.",
    tags: ["vejledning", "tjekliste", "regler"],
    prompt: `Rolle: Du er en analytisk assistent, som kun arbejder ud fra den angivne offentlige kilde.

Kontekst: Kilden er [LINK ELLER GODKENDT UDDRAG]. Jeg vil forstå, hvad den betyder for [GENEREL PROCES ELLER ROLLE]. Målgruppen er [MÅLGRUPPE].

Metode:
1. Opsummér formål, anvendelsesområde og centrale krav
2. Lav en praktisk tjekliste med kildehenvisning ved hvert punkt
3. Markér undtagelser, definitioner og formuleringer, der kræver faglig fortolkning
4. Skriv fem spørgsmål til den relevante fagperson i Nykredit
5. Angiv kildens dato og eventuelle tegn på, at den kan være afløst

Træf ingen juridisk eller compliancefaglig afgørelse.`,
    safety: "Tjeklisten er forberedelse; gældende regler og konkret anvendelse skal bekræftes af ansvarlige fagpersoner.",
    avoid: "Brug ikke prompten til at afgøre en konkret kunde-, medarbejder- eller compliance-sag."
  },
  {
    id: "p106",
    example: "E01",
    category: "Møder & samarbejde",
    field: "På tværs",
    type: "deep",
    title: "Mødebrief fra offentlige kilder",
    when: "Brug den, når du vil forberede et leverandør-, projekt- eller ledelsesmøde ud fra offentlige kilder.",
    tags: ["mødebrief", "offentlige kilder", "spørgsmål", "leverandør", "projekt"],
    prompt: `Rolle: Du er min researchassistent før et fagligt møde.

Kontekst: Mødet handler om [EMNE, SYSTEM ELLER LEVERANDØR – FX ET NYT SAGSSYSTEM ELLER EN NY VEJLEDNING FRA FINANSTILSYNET]. Formålet er [FORMÅL]. Jeg skal tale med [ROLLE ELLER TYPE AF MODPART – IKKE NAVN]. Brug kun offentlige, aktuelle kilder frem til [DATO].

Metode: Lav en brief med:
1. Fem dokumenterede hovedpunkter med direkte kilder
2. Tre relevante udviklinger og deres dato
3. Hvad der er usikkert eller ikke offentligt belyst
4. Fem åbne mødespørgsmål, der ikke foregiver at kende modpartens situation
5. En kort liste over de kilder, jeg bør åbne først

Skeln mellem det, kilderne siger, og dine egne forslag til spørgsmål.`,
    safety: "Brug offentlige oplysninger respektfuldt, og antag ikke noget om en konkret person eller ikke-offentlig sag."
  },
  {
    id: "p107",
    category: "Beslutning & sparring",
    field: "På tværs",
    type: "deep",
    title: "Find modargumenter og manglende information",
    when: "Brug den, når et researchresultat virker ensidigt eller lidt for sikkert.",
    tags: ["modargumenter", "usikkerhed", "blindvinkler"],
    prompt: `Rolle: Du er en skeptisk fagfælle, der leder efter svagheder i et foreløbigt researchresultat.

Kontekst: Mit spørgsmål er [SPØRGSMÅL]. Her er min ufølsomme konklusion og kildeoversigt: [INDSÆT]. Beslutningen, som materialet skal informere, er [BESKRIV GENERELT].

Metode:
1. Identificér skjulte antagelser
2. Giv de tre stærkeste modargumenter
3. Peg på kilder eller perspektiver, der mangler
4. Skeln mellem usikkerhed i data og uenighed om fortolkning
5. Foreslå, hvad der konkret bør undersøges næste gang

Bedøm ikke en konkret person, kunde eller virksomhed, og træf ikke beslutningen.`,
    safety: "Brug kritikken til at styrke undersøgelsen, ikke som automatisk facit."
  },
  {
    id: "p108",
    category: "Beslutning & sparring",
    field: "På tværs",
    type: "deep",
    title: "Lav et beslutningsbrief uden at træffe beslutningen",
    when: "Brug den, når viden skal samles til et klart menneskeligt valg.",
    tags: ["beslutningsbrief", "muligheder", "kriterier"],
    prompt: `Rolle: Du er analytisk sekretær for en menneskelig beslutningstager.

Kontekst: Beslutningen handler om [EMNE]. De mulige veje er [MULIGHEDER]. Kriterierne er [KRITERIER]. Brug kun dette verificerede materiale: [KILDER ELLER UFØLSOMME NOTER].

Metode: Lav et kort brief med:
1. Beslutningen formuleret i én sætning
2. Kendte fakta med kildehenvisninger
3. Fordele, ulemper og afhængigheder ved hver mulighed
4. Manglende data og usikkerheder
5. Hvad der kan ændre vurderingen
6. De spørgsmål beslutningstageren bør tage stilling til

Undlad en endelig anbefaling, medmindre jeg udtrykkeligt giver et dokumenteret beslutningsprincip.`,
    safety: "AI strukturerer grundlaget; den ansvarlige person vurderer konsekvenser og træffer beslutningen."
  },
  {
    id: "p109",
    example: "E08",
    category: "Kvalitet & sikkerhed",
    field: "På tværs",
    type: "deep",
    title: "Triangulér de vigtigste påstande",
    when: "Brug den, når en konklusion skal kunne holde til at blive læst kritisk.",
    tags: ["triangulering", "kilder", "TRACE", "faktatjek"],
    prompt: `Rolle: Du er faktatjekker og må ikke fylde huller ud med gæt.

Kontekst: Her er de påstande, jeg vil bruge: [INDSÆT TRE TIL FEM PÅSTANDE MED DE KILDER, JEG HAR].

Metode: For hver påstand:
1. Angiv hvilken kilde der faktisk understøtter den, og hvor
2. Find mindst én uafhængig kilde mere, hvis du har adgang - ellers skriv "kun én kilde"
3. Notér udgivelsesdato og afsender ved hver kilde
4. Marker påstande, hvor kilderne siger noget forskelligt
5. Skriv til sidst de påstande, jeg bør droppe eller omformulere

Opfind hverken kilder, links eller datoer. Sig det, hvis du ikke kan åbne noget.`,
    safety: "Åbn selv mindst de kilder, der bærer konklusionen, før du bruger den."
  },
  {
    id: "p110",
    category: "Analyse & data",
    field: "Jura & compliance",
    type: "deep",
    title: "Sagskronologi og huller fra rodede noter",
    when: "Brug den, når et sagsforløb skal kunne genfortælles i rigtig rækkefølge, og hullerne skal frem.",
    tags: ["kronologi", "sagsforløb", "compliance", "dokumentation"],
    prompt: `Rolle: Du er analytisk assistent, som bygger kronologier og ikke fylder huller ud.

Kontekst: Her er mine ufølsomme eller syntetiske noter om sagsforløbet: [INDSÆT NOTER]. Kronologien skal bruges til [FORMÅL] og læses af [MÅLGRUPPE].

Metode:
1. Byg en tidslinje: dato, hvad der skete, hvem der handlede, og hvor det står i noterne
2. Skriv "dato ikke angivet" eller "kilde ikke angivet", hvor det mangler - gæt ikke
3. List de huller, der skal lukkes, før kronologien kan bruges
4. Marker de steder, hvor noterne modsiger hinanden
5. Slut med de fem spørgsmål, jeg skal have besvaret

Vurdér ikke, om nogen har handlet rigtigt eller forkert.`,
    safety: "Kronologien er et arbejdsdokument. Sagens faktiske grundlag skal bekræftes i de rigtige systemer.",
    avoid: "Brug ikke rå sagsakter, kunde- eller persondata eller personhenførbare noter i et privat AI-værktøj."
  },
  {
    id: "p111",
    category: "Beslutning & sparring",
    field: "Jura & compliance",
    type: "deep",
    title: "Kritisk gennemgang før oplægget går videre",
    when: "Brug den, når et fagligt oplæg skal kunne holde til den, der skal godkende det.",
    tags: ["indstilling", "compliance", "hvidvask", "godkendelse", "kritik"],
    prompt: `Rolle: Du er den kritiske godkender, mit oplæg skal forbi - fagligt skarp og uden interesse i at være flink.

Kontekst: Her er mit foreløbige, ufølsomme oplæg: [INDSÆT ELLER REFERÉR HOVEDPUNKTERNE]. Det skal bruges til [FORMÅL], og læseren er [ROLLE].

Metode:
1. Find de fem steder, hvor argumentet ikke hænger sammen
2. Peg på hvert tal og hver påstand, der mangler en kilde
3. Skriv de ti spørgsmål, en kritisk godkender ville stille
4. Peg på det, der er udeladt, men burde stå der
5. Sortér dine indvendinger i "skal rettes" og "kan diskuteres"

Skriv ikke oplægget om, og træf ikke den faglige afgørelse.`,
    safety: "AI må ikke levere den endelige hvidvask-, compliance-, regnskabs- eller modelbeslutning.",
    avoid: "Brug ikke den konkrete sag, kunde- eller persondata eller interne modeloplysninger i et privat AI-værktøj."
  },
  {
    id: "p112",
    category: "Analyse & data",
    field: "Back-office & økonomi",
    type: "deep",
    title: "Hvilke antagelser bærer konklusionen?",
    when: "Brug den, når en vurdering hviler på forudsætninger, der ikke er skrevet ned.",
    tags: ["antagelser", "følsomhed", "scenarier", "modeller", "analyse"],
    prompt: `Rolle: Du er analytiker med fokus på forudsætninger frem for resultater.

Kontekst: Her er min vurdering og de syntetiske eller offentlige tal, den bygger på: [INDSÆT]. Konklusionen er [KONKLUSION].

Metode:
1. List de antagelser, konklusionen faktisk hviler på - også dem, der ikke står skrevet
2. Rangér dem efter, hvor meget konklusionen ændrer sig, hvis antagelsen er forkert
3. Beskriv for de tre vigtigste, hvad der sker, hvis de er henholdsvis for optimistiske og for forsigtige
4. Peg på de antagelser, der kan efterprøves med data, jeg har adgang til
5. Foreslå, hvordan usikkerheden bør beskrives i mit materiale

Regn ikke videre på tal, du ikke har fået, og præsentér ikke scenarier som prognoser.`,
    safety: "Scenarierne illustrerer følsomhed. De er ikke beregninger, du kan sende videre uden selv at regne efter."
  },
  {
    id: "p113",
    example: "E01",
    category: "Møder & samarbejde",
    field: "IT",
    type: "deep",
    title: "Spørgsmål før et leverandørmøde",
    when: "Brug den, når du skal møde en leverandør eller en anden afdeling om et system og vil stille de rigtige spørgsmål.",
    tags: ["leverandør", "mødeforberedelse", "system", "IT", "risiko"],
    prompt: `Rolle: Du er en erfaren kollega fra IT, som forbereder spørgsmål frem for konklusioner.

Kontekst: Jeg skal mødes med [TYPE AF LEVERANDØR ELLER AFDELING – IKKE NAVN] om [EMNE: NYT SYSTEM, OPGRADERING, INTEGRATION ELLER SUPPORTAFTALE]. Det, jeg ved på forhånd, er alene offentligt eller generelt: [BESKRIV]. Mødets formål er [FORMÅL].

Metode:
1. Giv mig ti spørgsmål, der afdækker de reelle risici ved den type løsning – sorteret efter, hvad der oftest bliver overset (data, adgang, drift, exit)
2. Skriv til hvert spørgsmål, hvad et bekymrende svar ville lyde som
3. Peg på de forhold, der typisk ændrer sig med regler, licenser eller versioner
4. Slut med tre spørgsmål om, hvad de allerede har leveret til andre banker

Antag intet om den konkrete leverandør, og vurdér ikke løsningen på forhånd.`,
    safety: "Spørgsmålene er forberedelse. Vurderingen bygger på det, leverandøren faktisk svarer – og på Nykredits interne krav til IT-sikkerhed og indkøb.",
    avoid: "Ingen interne systemnavne, arkitektur eller sikkerhedsoplysninger i et privat AI-værktøj."
  },
  {
    id: "p114",
    category: "Projekter & processer",
    field: "Back-office & økonomi",
    type: "deep",
    title: "Hvad kan gå galt ved processen – og hvad kan gøres i forvejen",
    when: "Brug den, når du vil tale forebyggelse, før en proces kører – fx et månedsluk, en systemomlægning eller en ny kontrol.",
    tags: ["forebyggelse", "risiko", "proces", "tjekliste", "månedsluk"],
    prompt: `Rolle: Du er en erfaren proceskollega og arbejder kun med den generelle procestype – ikke med en konkret sag.

Kontekst: Processen er [BESKRIV GENERELT – FX ET MÅNEDSLUK, EN AFSTEMNING ELLER EN FLYTNING AF DATA MELLEM TO SYSTEMER]. Emnet er [OMRÅDE]. Brug kun det, jeg giver dig, og almindelig viden om den slags processer, og skriv, hvor du er usikker.

Metode:
1. List de ti mest almindelige ting, der går galt i den type proces
2. Angiv for hver: typisk årsag, hvad der ofte gør fejlen større, og ét konkret forebyggende tiltag
3. Marker de tiltag, der er billige og hurtige, og dem der kræver en beslutning
4. Skriv en kort tjekliste, jeg kan gennemgå med teamet før start
5. Angiv, hvad der afhænger af regler, systemer eller frister

Lov ikke, at et tiltag fjerner en risiko helt.`,
    safety: "Tjeklisten skal kontrolleres mod Nykredits egne procedurer og kontroller, før den bruges."
  },
  {
    id: "p115",
    category: "Møder & samarbejde",
    field: "Ledelse & HR",
    type: "deep",
    title: "Agenda og spørgeguide, der holder mødet på sporet",
    when: "Brug den, når du skal facilitere et møde eller en workshop og gerne vil have noget ud af det.",
    tags: ["møde", "workshop", "agenda", "facilitering", "HR"],
    prompt: `Rolle: Du er mødefacilitator, som designer efter et resultat frem for en dagsorden.

Kontekst: Mødet handler om [EMNE]. Deltagerne er [ROLLER, IKKE NAVNE]. Vi har [TID]. Det, der skal være besluttet eller afklaret bagefter, er [RESULTAT]. Det, der plejer at gå galt, er [BESKRIV].

Metode:
1. Skriv en agenda med tidsblokke, hvor mindst halvdelen af tiden er aktiv
2. Formulér til hvert punkt det spørgsmål, punktet skal besvare
3. Giv mig en spørgeguide med åbne spørgsmål og tre opfølgninger til hvert
4. Foreslå, hvordan de stille deltagere kommer til orde
5. Skriv, hvordan mødet lukkes, så beslutninger og ejere er tydelige

Foreslå ingen øvelser, der kræver, at nogen deler personlige eller fortrolige forhold.`,
    safety: "Tilpas agendaen til din egen stil og til de mennesker, der faktisk sidder i rummet."
  },
  {
    id: "p116",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "micro",
    title: "Forklar grafen på to linjer",
    when: "Brug den, når en graf skal kunne forstås uden en lang forklaring.",
    tags: ["graf", "formidling", "tal"],
    prompt: `Forklar den her graf på to linjer til en, der ikke kender tallene: [BESKRIV GRAFEN, AKSERNE OG PERIODEN].`,
    safety: "Kontrollér, at forklaringen kan aflæses af grafen og ikke tilføjer en årsagssammenhæng."
  },
  {
    id: "p117",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "micro",
    title: "Hvad skal de huske?",
    when: "Brug den, når en præsentation har mange pointer og ingen hovedpointe.",
    tags: ["budskab", "hovedpointe", "præsentation"],
    prompt: `Hvad er den ene ting, publikum skal huske fra det her? Skriv det i én sætning.`,
    safety: "Én sætning fjerner nuancer - kontrollér, at den ikke lover mere, end materialet viser."
  },
  {
    id: "p118",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "micro",
    title: "Skær tre elementer væk",
    when: "Brug den, når sliden er fyldt op, og ingen ved, hvor de skal kigge.",
    tags: ["forenkling", "slide", "layout"],
    prompt: `Hvilke tre elementer kan fjernes fra den her slide, uden at pointen forsvinder? [BESKRIV SLIDEN].`,
    safety: "Fjern ikke labels, enheder eller forbehold, der er nødvendige for at læse tallene rigtigt."
  },
  {
    id: "p119",
    category: "Analyse & data",
    field: "På tværs",
    type: "quick",
    title: "Find historien i et lille datasæt",
    when: "Brug den, når et lille offentligt eller syntetisk Excel-udtræk skal have en tydelig hovedpointe.",
    tags: ["datahistorie", "tal", "budskab", "Excel", "regneark", "analyse", "rapportering"],
    prompt: `Her er et lille offentligt eller syntetisk datasæt: [INDSÆT DATA MED ENHEDER OG PERIODE].

Find højst tre mulige hovedpointer. Vis for hver:
- hvilke konkrete tal der støtter pointen
- en neutral overskrift
- hvad data ikke kan fortælle
- hvilken kontrolberegning jeg bør lave

Vælg ikke den mest dramatiske historie; vælg den bedst understøttede.`,
    safety: "Kontrollér enheder, perioder, beregninger og datagrundlag i originalen."
  },
  {
    id: "p120",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "quick",
    title: "Vælg den rette visualisering",
    when: "Brug den, når du kender budskabet, men er i tvivl om graf, tabel eller diagram.",
    tags: ["diagramvalg", "graf", "målgruppe"],
    prompt: `Mit budskab er [BUDSKAB]. Målgruppen er [MÅLGRUPPE]. Mine data eller trin er [KORT BESKRIVELSE].

Foreslå højst tre visualiseringsformer. Forklar for hver:
1. Hvad den gør let at forstå
2. Hvad den kan skjule eller forvrænge
3. Hvilke labels og enheder der er nødvendige

Anbefal den enkleste form, der viser budskabet loyalt.`,
    safety: "Visualiseringen må ikke antyde mere sikkerhed eller årsagssammenhæng, end materialet understøtter."
  },
  {
    id: "p121",
    example: "E09",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "quick",
    title: "Skriv en slideoverskrift, der fortæller pointen",
    when: "Brug den, når en slide har et emne som titel, men mangler en klar konklusion.",
    tags: ["slide", "overskrift", "budskab"],
    prompt: `Slidens dokumenterede hovedpointe er: [POINTE]. Den vises med [GRAF, TABEL ELLER INDHOLD]. Målgruppen er [MÅLGRUPPE].

Skriv fem overskrifter på højst 12 ord, som fortæller pointen præcist. Undgå clickbait, overdrevne årsagsforklaringer og ord, data ikke understøtter. Rangér dem fra mest præcis til mest forsigtig.`,
    safety: "Tjek, at overskriften faktisk kan aflæses af sliden og ikke overfortolker tallene."
  },
  {
    id: "p122",
    category: "Kvalitet & sikkerhed",
    field: "På tværs",
    type: "quick",
    title: "Kontrollér en visualisering før deling",
    when: "Brug den som sidste kvalitetsstop på en slide, graf, illustration eller infografik.",
    tags: ["kvalitetskontrol", "bias", "tilgængelighed"],
    prompt: `Gennemgå denne beskrivelse af en visualisering: [BESKRIV ELLER INDSÆT UFØLSOMT INDHOLD].

Lav en kontrol i seks punkter:
1. Tal, enheder og labels
2. Om hovedpointen kan aflæses korrekt
3. Om noget er overdrevet eller mangler
4. Stereotyper eller skæv repræsentation
5. Læsbarhed, farvekontrast og alternativ tekst
6. Logoer, rettigheder og elementer, der kræver godkendelse

Markér tydeligt, hvad du ikke kan kontrollere ud fra beskrivelsen.`,
    safety: "Gennemfør også en menneskelig visuel kontrol; AI kan overse layoutfejl og forkerte tal."
  },
  {
    id: "p123",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "quick",
    title: "Ti sekunders-testen",
    when: "Brug den, når du vil vide, om en kollega faktisk fanger pointen.",
    tags: ["test", "makker", "forståelse"],
    prompt: `Her er min visualisering beskrevet i ord: [BESKRIV, HVAD DER STÅR, HVILKE TAL DER VISES, OG HVORDAN DET ER SAT OP].

Svar som en kollega, der ser den i ti sekunder:
1. Hvad tror du, pointen er?
2. Hvad kigger du på først - og er det det rigtige?
3. Hvad misforstår du sandsynligvis?
4. Hvilket ét spørgsmål ville du stille bagefter?

Slut med den mindste ændring, der ville gøre pointen tydelig med det samme.`,
    safety: "Test den også på et rigtigt menneske. AI kan ikke se dit layout."
  },
  {
    id: "p124",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "quick",
    title: "Beskriv figuren som kasser og pile",
    when: "Brug den, når du selv skal tegne figuren i PowerPoint, på et whiteboard eller i et andet værktøj.",
    tags: ["diagram", "figur", "gør-det-selv"],
    prompt: `Her er det, figuren skal forklare: [BESKRIV SAMMENHÆNGEN, PROCESSEN ELLER TALLENE].

Beskriv figuren, så jeg kan tegne den selv:
1. Læseretning og opbygning
2. Hver kasse: hvad står der i den, og hvor mange ord
3. Hver pil: hvad forbinder den, og hvad står der på den
4. Hvad der skal fremhæves, og hvad der skal tones ned
5. En kort forklarende tekst under figuren

Hold det på højst syv kasser. Foreslå en enklere version, hvis det ikke kan lade sig gøre.`,
    safety: "Kontrollér, at figuren ikke forenkler et nødvendigt kontroltrin væk."
  },
  {
    id: "p125",
    example: "E09",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "deep",
    title: "Fra tekst til en historie på tre slides",
    when: "Brug den, når en kort rapport eller forklaring skal blive til en enkel præsentation.",
    tags: ["slides", "historie", "struktur"],
    prompt: `Rolle: Du er præsentationsredaktør med fokus på én pointe ad gangen.

Kontekst: Jeg skal præsentere [EMNE] for [MÅLGRUPPE] på [TID]. Brug kun dette offentlige eller godkendte materiale: [INDSÆT KORT MATERIALE]. Det vigtigste, publikum skal forstå eller gøre, er [MÅL].

Metode: Lav en struktur på præcis tre slides:
1. Hvorfor emnet betyder noget
2. Hvad materialet dokumenterer
3. Hvad næste skridt eller åbne spørgsmål er

For hver slide: skriv en konkluderende overskrift, højst tre indholdspunkter, forslag til én enkel visualisering og korte talenoter. Markér manglende dokumentation med [MANGLER].`,
    safety: "Kontrollér alle tal, citater og billeder, og tilpas præsentationen til Nykredits visuelle retningslinjer."
  },
  {
    id: "p126",
    category: "Projekter & processer",
    field: "IT",
    type: "deep",
    title: "Fra procesbeskrivelse til diagram",
    when: "Brug den, når en projekt-, drifts-, kontrol-, onboarding- eller serviceproces skal kunne forstås og diskuteres på ét blik.",
    tags: ["procesdiagram", "flow", "ansvar", "IT", "projekt", "drift", "HR", "backoffice", "service"],
    prompt: `Rolle: Du er procesfacilitator, der gør arbejdsgange tydelige uden at opfinde trin.

Kontekst: Processen er [NAVN - FX SYNTETISK SYSTEMMIGRERING, GENERISK KONTROLFLOW, ONBOARDING ELLER INTERN SERVICEPROCES]. Målgruppen er [MÅLGRUPPE]. Her er en ufølsom eller godkendt beskrivelse: [BESKRIV TRIN, BESLUTNINGER OG ROLLER].

Metode:
1. Uddrag start, slut, handlinger, beslutningspunkter og ansvarlige roller
2. Markér huller og uklare overgange som spørgsmål
3. Foreslå et enkelt diagram med læseretning og former
4. Skriv diagrammet som en nummereret specifikation, der kan bygges i et valgfrit værktøj
5. Tilføj en kort legend og en liste over antagelser

Forenkl ikke kontroltrin væk.`,
    safety: "Få procesejeren til at bekræfte trin, ansvar og undtagelser før diagrammet bruges."
  },
  {
    id: "p127",
    example: "E12",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "deep",
    title: "Skriv en inkluderende billedbrief",
    when: "Brug den, når du vil skabe en illustration med et bevidst motiv og færre stereotyper.",
    tags: ["billedprompt", "inklusion", "illustration"],
    prompt: `Rolle: Du er art director for en saglig, inkluderende arbejdsillustration.

Kontekst: Illustrationen skal bruges til [FORMÅL] for [MÅLGRUPPE]. Hovedbudskabet er [BUDSKAB]. Formatet er [FORMAT OG PROPORTION]. Den ønskede stemning er [STEMNING].

Metode: Skriv en konkret billedbrief med:
- motiv og synlig handling
- miljø, komposition og perspektiv
- lys, farver og stil
- realistisk og varieret repræsentation uden at koble udseende til evner, økonomi eller adfærd
- plads til tekst, som tilføjes manuelt
- en "undgå"-liste med stereotyper, ulæselig tekst, forvanskede logoer og uvedkommende elementer

Foreslå også en billedfri alternativ visualisering.`,
    safety: "Kontrollér rettigheder, repræsentation og brand; indsæt altid godkendte logoer og præcis tekst manuelt."
  },
  {
    id: "p128",
    example: "E07",
    category: "Projekter & processer",
    field: "Ledelse & HR",
    type: "deep",
    title: "Fra politik til en huskeseddel, kollegaen bruger",
    when: "Brug den, når en procedure skal kunne følges i praksis - ikke bare findes.",
    tags: ["procedure", "klarsprog", "proces", "backoffice", "HR"],
    prompt: `Rolle: Du er procesformidler og skriver til den, der har travlt.

Kontekst: Her er den godkendte eller offentlige tekst: [INDSÆT ELLER LINK]. Den skal bruges af [ROLLE] i situationen [HVORNÅR DEN BRUGES]. Der er typisk [TID] til rådighed.

Metode: Lav en huskeseddel på højst én side med:
1. Hvornår sedlen overhovedet er relevant
2. Trinene i rækkefølge, med hvem der gør hvad
3. De tre steder, hvor det oftest går galt, og hvad man gør i stedet
4. Hvad der skal dokumenteres undervejs
5. Hvem man spørger, når noget ikke passer ind
6. En henvisning til den fulde tekst

Forenkl ikke kontroltrin eller undtagelser væk. Skriv "se den fulde tekst", hvor det er nødvendigt.`,
    safety: "Huskesedlen erstatter ikke den godkendte procedure og skal godkendes af den ansvarlige, før den deles."
  },
  {
    id: "p129",
    category: "Vaner & udvikling",
    field: "På tværs",
    type: "micro",
    title: "Gem det som en opskrift",
    when: "Brug den, lige når noget virkede - før du glemmer hvordan.",
    tags: ["AI-opskrift", "genbrug", "kogebog"],
    prompt: `Skriv den arbejdsgang, vi lige har brugt, som en kort opskrift: opgave, sikkert input, prompt, kontrolpunkt og gevinst.`,
    safety: "Fjern navne, systemer og sagsdetaljer, før opskriften gemmes eller deles."
  },
  {
    id: "p130",
    category: "Vaner & udvikling",
    field: "På tværs",
    type: "quick",
    title: "Find min vigtigste læring",
    when: "Brug den, når mange forsøg skal samles til én klar erfaring.",
    tags: ["refleksion", "læring", "erfaring"],
    prompt: `Stil mig fem korte spørgsmål ét ad gangen om mine AI-forsøg: hvad jeg prøvede, hvad der virkede, hvad der fejlede, hvad jeg selv skulle kontrollere, og hvad jeg vil gøre anderledes. Vent på hvert svar. Opsummér til sidst min vigtigste læring i én sætning og tre konkrete eksempler fra mine svar.`,
    safety: "Del erfaringen uden navne, afdelinger, konkrete sager eller andre fortrolige detaljer."
  },
  {
    id: "p131",
    category: "Vaner & udvikling",
    field: "På tværs",
    type: "quick",
    title: "Vurdér før og efter",
    when: "Brug den, når du vil undersøge, om AI faktisk forbedrede en opgave.",
    tags: ["evaluering", "før-efter", "gevinst"],
    prompt: `Hjælp mig sammenligne min arbejdsform før og efter et AI-forsøg.

FØR: [TID, KVALITET OG ARBEJDSGANG]
EFTER: [TID, KVALITET OG ARBEJDSGANG]

Lav en nøgtern vurdering af tid, kvalitet, læring, risiko og ekstra kontrolarbejde. Skeln mellem det, jeg faktisk har observeret, og det, jeg kun antager. Slut med ét forslag til en bedre test næste gang.`,
    safety: "Præsenter ikke et enkelt forsøg eller et løst tidsestimat som dokumenteret effekt."
  },
  {
    id: "p132",
    category: "Vaner & udvikling",
    field: "På tværs",
    type: "quick",
    title: "Vælg min næste lille handling",
    when: "Brug den, når gode intentioner skal blive til noget konkret efter workshoppen.",
    tags: ["handling", "vane", "opfølgning"],
    prompt: `Mit vigtigste AI-mål er [MÅL]. Min største barriere er [BARRIERE]. Jeg har realistisk [TID] om ugen.

Foreslå tre små handlinger, jeg kan gennemføre inden for syv dage. Hver handling skal have en tydelig trigger, tage højst [TID], ende med et gemt output og indeholde ét kontrolpunkt. Hjælp mig vælge den mindste handling - ikke den mest imponerende.`,
    safety: "Planen skal passe til din adgang, din rolle og Nykredits interne regler."
  },
  {
    id: "p133",
    category: "Vaner & udvikling",
    field: "På tværs",
    type: "quick",
    title: "Interview mig om min bedste opdagelse",
    when: "Brug den, når du skal fortælle en kollega, hvad du egentlig har lært.",
    tags: ["refleksion", "interview", "erfaringsdeling"],
    prompt: `Interview mig som en nysgerrig kollega, der ikke selv har været med.

Stil ét spørgsmål ad gangen, højst seks i alt. Spørg til: hvad jeg prøvede, hvad der overraskede mig, hvad der ikke virkede, hvad jeg selv skulle kontrollere, og hvad jeg ville sige til en, der er skeptisk.

Vent på mit svar hver gang. Skriv til sidst min opdagelse som et kort oplæg på højst 150 ord med mine egne ord og eksempler.`,
    safety: "Del historien uden navne, afdelinger eller konkrete sager."
  },
  {
    id: "p134",
    category: "Vaner & udvikling",
    field: "På tværs",
    type: "deep",
    title: "Gør min arbejdsgang til en AI-opskrift",
    when: "Brug den, når et afprøvet workflow skal kunne forstås og genbruges af en kollega.",
    tags: ["AI-opskrift", "workflow", "deling"],
    prompt: `Rolle: Du er redaktør for en begyndervenlig AI-kogebog.

Kontekst: Min afprøvede arbejdsgang handler om [OPGAVE]. Den bruges [HYPPIGHED] og kræver [SIKRE INPUTTYPER]. Min prompt eller metode er [INDSÆT UFØLSOM VERSION]. Det, jeg selv kontrollerer, er [KONTROLPUNKTER]. Min observerede gevinst og begrænsning er [BESKRIV].

Metode: Skriv en anonym, genbrugelig opskrift med:
1. Opgave og formål
2. Sikkert input
3. Trin-for-trin-metode eller prompt
4. Menneskelig kontrol
5. Observeret gevinst
6. Begrænsning og situationer, hvor opskriften ikke bør bruges

Brug ingen navne, afdelinger, værktøjsversioner eller udokumenterede tidsløfter.`,
    safety: "Del kun en opskrift, som er fri for persondata, interne arbejdsgange og andre fortrolige kendetegn.",
    avoid: "Opskriften må ikke publiceres eller sendes videre uden aftale om format, samtykke og kvalitetstjek."
  },
  {
    id: "p135",
    category: "Vaner & udvikling",
    field: "På tværs",
    type: "deep",
    title: "Lav min personlige AI-kompetenceplan",
    when: "Brug den, når du vil fastholde få, realistiske vaner efter workshoppen.",
    tags: ["kompetenceplan", "træning", "mål"],
    prompt: `Rolle: Du er en realistisk læringscoach, som hjælper mig med at øve i min eksisterende arbejdsdag.

Kontekst: Jeg er blevet bedre til [FÆRDIGHEDER]. Jeg vil især bruge AI til [OPGAVETYPER]. Mine barrierer er [TID, ADGANG, USIKKERHED ELLER ANDET]. Jeg kan træne [TID] pr. uge, og mine arbejdsrammer er [GODKENDTE VÆRKTØJER OG REGLER, HVIS KENDT].

Metode: Lav en plan for de næste seks uger med:
1. To konkrete færdigheder - ikke flere
2. Én fast trigger i arbejdsugen for hver færdighed
3. En lille ugentlig øvelse med ufølsomt input
4. Et synligt bevis på læring
5. En buddy- eller kollegasamtale
6. Et tilbagefaldstjek og en enkel genstart

Mål kvalitet og læring, ikke kun antal prompts.`,
    safety: "Planen skal holde sig inden for din rolle, din adgang og Nykredits interne regler."
  },
  {
    id: "p136",
    category: "Kvalitet & sikkerhed",
    field: "På tværs",
    type: "deep",
    title: "Gør min prompt klar til deling",
    when: "Brug den, når en prompt har virket for dig og skal kunne bruges sikkert af andre.",
    tags: ["genbrug", "deling", "kvalitetskontrol"],
    prompt: `Rolle: Du er kvalitetssikrer af genbrugelige arbejdsprompts.

Kontekst: Denne prompt har virket i min egen afprøvning: [INDSÆT UFØLSOM PROMPT]. Den skal kunne bruges af [MÅLGRUPPE] til [OPGAVETYPE].

Metode:
1. Erstat lokale navne, fakta og systemer med tydelige pladsholdere
2. Tilføj en kort "Brug den, når"-sætning
3. Gør nødvendige input og ønsket output tydelige
4. Indbyg krav om at markere manglende fakta og usikkerhed
5. Tilføj ét konkret menneskeligt kontrolpunkt
6. Skriv en "Undgå"-note, hvis prompten kan invitere til persondata, fortrolighed eller en højrisikobeslutning

Vis den færdige prompt og en kort test med rent syntetisk input.`,
    safety: "Test den delbare version med en kollega og syntetiske data, før den lægges i et fælles bibliotek."
  },
  {
    id: "p137",
    category: "Vaner & udvikling",
    field: "På tværs",
    type: "deep",
    title: "Besked til min leder om min AI-brug",
    when: "Brug den, når din leder skal vide, hvad du vil gøre - og hvad du ikke vil gøre.",
    tags: ["leder", "forventninger", "rammer", "plan"],
    prompt: `Rolle: Du er en nøgtern sparringspartner, som hjælper mig med at skrive kort og troværdigt til min leder.

Kontekst: Jeg har afprøvet AI på [OPGAVETYPER]. Det, der faktisk virkede, er [BESKRIV]. Det, jeg blev usikker på, er [BESKRIV]. Nykredits rammer, som jeg kender dem, er [BESKRIV].

Metode: Skriv en besked på højst 200 ord med:
1. Hvad jeg konkret vil bruge AI til de næste tre måneder
2. Hvad jeg bevidst ikke vil bruge det til
3. Hvad jeg selv kontrollerer hver gang
4. Hvad jeg har brug for: adgang, tid, afklaring eller en aftale om rammer
5. Ét spørgsmål, jeg gerne vil have min leders svar på

Lov ikke tidsbesparelser, jeg ikke har målt.`,
    safety: "Send den først, når du selv står inde for hvert punkt, og tilpas den til Nykredits interne regler."
  },
  {
    id: "p138",
    category: "Projekter & processer",
    field: "IT",
    type: "deep",
    title: "Læringsopsamling efter en hændelse",
    when: "Brug den, når et forløb er gået skævt, og læringen skal frem uden at nogen bliver hængt ud.",
    tags: ["post mortem", "læring", "drift", "IT", "projekt"],
    prompt: `Rolle: Du er facilitator for en læringsopsamling, hvor formålet er systemet - ikke skylden.

Kontekst: Her er det ufølsomme eller syntetiske forløb: [BESKRIV, HVAD DER SKETE, HVORNÅR, OG HVAD DER BLEV GJORT]. Konsekvensen var [BESKRIV]. Deltagerne er [ROLLER, IKKE NAVNE].

Metode:
1. Byg en kort tidslinje over, hvad der skete, og hvad man vidste på hvert tidspunkt
2. Peg på de steder, hvor beslutningen var rimelig ud fra det, man vidste dengang
3. Find de forhold i processen, værktøjerne eller kommunikationen, der gjorde fejlen mulig
4. Foreslå tre ændringer: én der kan laves i denne uge, én der kræver en beslutning, og én der kræver en investering
5. Skriv de spørgsmål, der stadig mangler svar

Peg ikke på personer, og formulér ikke noget, der kan læses som en personalesag.`,
    safety: "Opsamlingen er læring, ikke dokumentation for en sag. Følg Nykredits egen proces for hændelser.",
    avoid: "Brug ikke rå logs, sikkerhedsoplysninger, kunde- eller persondata eller navne på medarbejdere."
  },
  // Nye Copilot-slides · prompts uden "Fra dagen"
  {
    id: "p139",
    category: "Prompting & sparring",
    field: "På tværs",
    type: "quick",
    title: "Lad Copilot interviewe dig – og skriv din arbejdsprofil",
    when: "Brug den én gang, når Copilot skal kende din rolle, og hvordan du vil have svar – svar gerne med mikrofonen, du taler friere, end du skriver.",
    tags: ["arbejdsprofil", "brugerdefinerede instruktioner", "Copilot", "interview", "personalisering"],
    prompt: `Interview mig, så du kan skrive mine brugerdefinerede instruktioner i Copilot. Stil mig fem spørgsmål om min rolle, mine opgaver, hvem jeg skriver til, hvordan jeg arbejder og hvordan jeg vil have svar. Stil ét spørgsmål ad gangen, og vent på mit svar. Skriv derefter en arbejdsprofil med tre afsnit: Om mig, Sådan vil jeg have svar og Hvem jeg skriver til.`,
    safety: "Læs profilen, og ret det, der ikke passer. Sæt den ind under de tre prikker øverst → Chat-indstillinger → Personalisering (kan hedde Tilpasning) → Brugerdefinerede instruktioner → Rediger instruktioner, og gem. Har du allerede instruktioner, så tilføj kun det, du mangler.",
    avoid: "Skriv ikke kundenavne, CPR-numre eller oplysninger om kolleger i profilen. Følg Nykredits interne regler."
  },
  {
    id: "p140",
    category: "Møder & samarbejde",
    field: "På tværs",
    type: "micro",
    title: "Tjek referatet mod transskriptionen",
    when: "Brug den i samme chat, lige efter Copilot har skrevet referatet – før du sender det til nogen.",
    tags: ["referat", "transskription", "Teams", "kontrol", "beslutninger"],
    prompt: `Kontrollér referatet mod transskriptionen. Hvor har du muligvis gjort et forslag til en beslutning, et forbehold til et løfte eller en mulig ansvarlig til en aftalt ansvarlig? Vis de konkrete steder med citat.`,
    safety: "Læs selv de steder i transskriptionen, den peger på. \"Kan måske undersøge det\" er ikke det samme som \"undersøger det inden fredag\" – og referatet er først rigtigt, når mødelederen har godkendt det."
  },
  {
    id: "p141",
    example: "E04",
    category: "Research & læring",
    field: "På tværs",
    type: "quick",
    title: "Hvad er ændret mellem to versioner?",
    when: "Brug den, når en forretningsgang, en politik eller en vejledning er kommet i en ny version, og du vil vide, hvad der faktisk er ændret – vedhæft begge filer i Copilot.",
    tags: ["versioner", "forretningsgang", "sammenlign", "ændringer", "Copilot"],
    prompt: `Her er den gamle og den nye version af [DOKUMENTET – FX VORES FORRETNINGSGANG FOR BOLIGSAGER].
Hvad er ændret? Lav en tabel med kolonnerne Afsnit, Før, Nu og Betydning for [ROLLE – FX EN RÅDGIVER].
Citér ordret i Før og Nu. Tag kun ændringer med, der betyder noget for arbejdet.`,
    safety: "Åbn de afsnit, tabellen peger på, og tjek citaterne. Et lille ord som \"bør\" → \"skal\" kan være den vigtigste ændring – og det er dig, der vurderer betydningen."
  },
  {
    id: "p142",
    category: "Research & læring",
    field: "På tværs",
    type: "quick",
    title: "Opsummér med et formål – ikke bare \"opsummér\"",
    when: "Brug den, når du har fået en lang rapport og skal bruge den til noget bestemt. \"Opsummér dette dokument\" giver sjældent det, du har brug for.",
    tags: ["rapport", "opsummering", "formål", "forbehold", "citater", "Copilot"],
    prompt: `Jeg arbejder som [DIN ROLLE – FX RÅDGIVER I PRIVAT] og skal bruge den vedhæftede rapport til [MØDE ELLER BESLUTNING – FX TEAMMØDET PÅ TIRSDAG].
Træk de pointer ud, der er relevante for det, højst ti.
Lav en tabel med de vigtigste forbehold, og citér den passage, hvert forbehold bygger på.
Hvilke to afsnit bør jeg selv læse først?`,
    safety: "Tjek citaterne i selve rapporten, og læs de to afsnit, den peger på. Forbehold er det, en opsummering oftest taber."
  },
  {
    id: "p143",
    example: "E08",
    category: "Research & læring",
    field: "På tværs",
    type: "micro",
    title: "Spørg på tværs af dokumenterne i en notesbog",
    when: "Brug den i en Copilot-notesbog, hvor du har samlet de interne dokumenter om et emne – fx en rapport, en forretningsgang og en politik.",
    tags: ["notesbog", "Copilot", "dokumenter", "kilder", "afsnit"],
    prompt: `Rapporten siger, at [PÅSTAND ELLER TAL – FX "31 % AF BOLIGSAGERNE BLIVER SENDT TILBAGE FRA KREDITADMINISTRATION"].
Hvad i [DE ANDRE DOKUMENTER – FX FORRETNINGSGANGEN OG KREDITPOLITIKKEN] kan forklare det? Skriv dokument og afsnit ved hvert punkt.`,
    safety: "Svaret er kun så godt som dokumenterne i notesbogen. Åbn de afsnit, den henviser til – og læg kun dokumenter i notesbogen, som du må bruge i Copilot efter Nykredits interne regler."
  },
  {
    id: "p144",
    example: "E11",
    category: "Egen arbejdsdag",
    field: "På tværs",
    type: "deep",
    title: "Morgenbriefing: din stabschef i Copilot",
    when: "Brug den om morgenen i Copilot, som kan læse din mail, din kalender og Teams. Gem den, og planlæg den, så den kører af sig selv hver morgen.",
    tags: ["morgenbriefing", "stabschef", "indbakke", "kalender", "Teams", "planlagt prompt"],
    prompt: `Vær min stabschef. Skriv en briefing, jeg kan læse på fem minutter, og som fortæller mig det, jeg ellers ville overse. Vær direkte, spring fyld over, og fremhæv spændinger og risici.
INDBAKKEN · mine mails de seneste 24 timer. Afgør for hver: kræver den mig, i dag?
Kræver svar i dag: afsender, emne, det konkrete ønske (citér sætningen), forslag til svar, deadline.
Det, andre venter på fra mig: hvem venter, hvad har de brug for, hvornår.
Til orientering, men vigtigt: ændret omfang, status eller stemning på sager, jeg ejer.
Tråde, der er eskaleret: ny tone, nye personer, ledelsen sat på.
Spring nyhedsbreve, indkaldelser, automatiske beskeder og cc over, medmindre det ændrer noget, jeg har ansvar for.
KALENDEREN · for hvert møde i dag, i rækkefølge: tid og deltagere (markér nye eksterne) · hvad mødet reelt skal afgøre, ikke overskriften · min rolle: driver, bidrager eller lytter jeg? · 1–2 ting, jeg bør læse først · hvad der er ændret siden sidst · ét spørgsmål, jeg bør rejse. Markér møder ryg mod ryg uden forberedelsestid.
TEAMS · beskeder de seneste 24 timer, hvor jeg er nævnt direkte. Én linje pr. besked.
DAGENS VIGTIGSTE · ud fra deadlines, pres og det, der blokerer andre: den ene ting, jeg bør rykke i dag. Begrund i to sætninger med konkrete signaler fra indbakke og kalender.
Brug kun mine mails, min kalender og mine Teams-beskeder. Gæt ikke. Skriv "Intet", hvis en sektion er tom.`,
    safety: "Briefingen er et udkast. Åbn de mails og møder, den fremhæver, før du handler – og svar aldrig ud fra et citat, du ikke selv har læst.",
    avoid: "Brug den kun i Copilot i Nykredit – aldrig i et privat AI-værktøj med din indbakke."
  },
  {
    id: "p145",
    example: "E09",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "quick",
    title: "Fra struktur til slides i Nykredits PowerPoint-skabelon",
    when: "Brug den i Copilot i PowerPoint, når strukturen er på plads – fx fra \"Lav en præsentation på otte slides\" i Copilot Chat. Åbn først en ny præsentation i Nykredits skabelon.",
    tags: ["PowerPoint", "Copilot", "skabelon", "slides", "struktur"],
    prompt: `Lav en præsentation på [ANTAL – FX 6] slides ud fra strukturen nedenfor. Brug skabelonens layout, og behold overskrifterne, som de står.
[INDSÆT STRUKTUREN HER]`,
    safety: "Copilot sætter indholdet ind i skabelonen, men tjek tal, overskrifter og talenoter slide for slide, før du præsenterer."
  },
  {
    id: "p146",
    example: "E10",
    category: "Præsentation & visualisering",
    field: "Kunderådgivning",
    type: "quick",
    title: "Interaktiv illustration: hvad koster en rentestigning?",
    when: "Brug den, når en kunde eller en kollega selv skal kunne skrue på renten og se, hvad det betyder. Copilot bygger illustrationen, og du åbner den med Forhåndsvisning i chatten.",
    tags: ["interaktiv", "skyder", "boliglån", "rente", "ydelse", "Copilot"],
    prompt: `Jeg skal vise en kunde, hvordan ydelsen på et boliglån på 2 mio. kr. over 30 år ændrer sig med renten.
Lav en interaktiv illustration med en skyder for renten mellem 3 og 7 procent, der viser den månedlige ydelse opdateret.`,
    safety: "Illustrationen forklarer – den er ikke et lånetilbud. Tjek ét tal selv: ved 5 % skal ydelsen være ca. 10.736 kr. om måneden før bidrag og skat. Kundens rigtige tal kommer fra Nykredits egne beregnere."
  },
  // April 2026 · Kunderådgivning
  {
    id: "p147",
    category: "Møder & samarbejde",
    field: "Kunderådgivning",
    type: "deep",
    title: "Briefing før møde med erhvervskunde",
    when: "Brug den, når du skal møde en erhvervskunde og vil have regnskab, ejerforhold og nyheder samlet på én side – med kilder.",
    tags: ["erhvervskunde", "mødeforberedelse", "regnskab", "research", "kilder", "RKM"],
    prompt: `Rolle: Du er min erfarne research-assistent med mange års erfaring i dansk erhvervsbankrådgivning og realkredit.

Kontekst: Jeg er erhvervsrådgiver i Nykredit og skal i næste uge holde et møde med virksomheden [NAVN, CVR xxxxxxxx]. Mødets formål er [indsæt formål – fx refinansiering af realkreditlån, vurdering af driftskredit, dialog om investeringer]. Mit udgangspunkt er [indsæt: ny relation / eksisterende kunde siden xxxx / overtaget fra kollega].

Metode: Lav en briefing på maks 1 A4-side med:
1. Kerneforretning og seneste regnskabstal (omsætning, resultat, soliditet)
2. Ejerstruktur og nøglepersoner
3. Tre væsentligste finansielle eksponeringer ud fra branche og størrelse
4. Nyheder fra seneste 6 måneder der påvirker deres lånebehov eller risiko
5. Tre åbnende spørgsmål til mødet jeg kan bruge

Kildehenvisninger under hvert punkt. Vær skeptisk – sig "jeg ved det ikke" frem for at gætte.`,
    safety: "Copilot henter fra offentlige kilder og kan tage fejl. Kontrollér regnskabstal, ejerforhold og nyheder i kilden, før du bruger dem i mødet.",
    avoid: "Skriv ikke CPR-numre, kontonumre eller fortrolige oplysninger fra kundens sag – brug kun offentlige oplysninger om virksomheden. Følg Nykredits interne regler."
  },
  {
    id: "p148",
    category: "Møder & samarbejde",
    field: "Kunderådgivning",
    type: "deep",
    title: "Forberedelse til boligrådgivningssamtale",
    when: "Brug den aftenen før en samtale om konvertering, tillægsbelåning eller boligkøb, når du vil have talpunkter, bekymringer og alternativer klar.",
    tags: ["boligrådgivning", "realkredit", "mødeforberedelse", "konvertering", "kundens vinkel"],
    prompt: `Rolle: Du er min erfarne kollega som privat boligrådgiver i Nykredit med dyb forståelse for realkredit, bank og forsikring.

Kontekst: Jeg har en samtale i morgen med [kundeprofil: fx familie på fire, samlet bruttoindkomst xx mio. kr., ejer hus til xx mio., aktuel restgæld xx, fast rente F-Kort+5 udløber om 14 måneder]. Kunden har bedt om en gennemgang af [konvertering / tillægsbelåning / refinansiering / købsrådgivning til ny bolig].

Metode: Forbered mig på 1 A4-side med:
1. De 3 vigtigste talpunkter jeg skal have klar (rente, ydelse, restgæld, belåningsgrad)
2. De 3 sandsynlige bekymringer kunden vil have
3. To alternative låneprodukter jeg bør kunne sammenligne live
4. En afsluttende anbefalingsskabelon jeg kan tilpasse i mødet

Brug almindeligt dansk uden låne-jargon i bekymringerne – så jeg kan se det fra kundens vinkel.`,
    safety: "Regn selv rente, ydelse og belåningsgrad efter i Nykredits egne systemer. Copilot forbereder dig – den rådgiver ikke kunden.",
    avoid: "Beskriv kunden med en anonym profil – ingen navne, CPR-numre, adresser eller kontonumre. Følg Nykredits interne regler."
  },
  {
    id: "p149",
    category: "Møder & samarbejde",
    field: "Kunderådgivning",
    type: "deep",
    title: "Private Banking – formuegennemgang",
    when: "Brug den, når du skal forberede en formuesamtale om fx generationsskifte, pension eller risikospredning og vil åbne de rigtige temaer.",
    tags: ["Private Banking", "formue", "generationsskifte", "pension", "mødeforberedelse"],
    prompt: `Rolle: Du er min erfarne kollega i Nykredit Private Banking med erfaring i investerings-, pensions- og generationsskifterådgivning.

Kontekst: Jeg skal mødes med [kunde A – fx 62-årig direktør, gift, to voksne børn, formue ca. xx mio. kr. fordelt på depot, pension, ejendom, selskab]. Kunden har efterspurgt en samtale om [generationsskifte / pension om tre år / risikospredning / etablering af holdingstruktur].

Metode: Lav en mødeforberedelse på maks 2 A4-sider:
1. De 3 livsfase-temaer jeg bør tage initiativ til at åbne
2. De 4 produktområder jeg skal have parat (investering, pension, lån, forsikring) med 1-2 talepunkter pr. område
3. Tre spørgsmål jeg kan stille for at afdække værdier og prioriteter
4. En liste over interne specialister jeg potentielt skal trække ind (skatterådgiver, forsikringsspecialist, advokat-samarbejde)

Tone: kvalificeret og afdæmpet. Ingen salgssprog.`,
    safety: "Talepunkterne er forberedelse, ikke rådgivning. Skat, jura og produktvalg afklares med Nykredits specialister og følger Nykredits rådgivningsproces.",
    avoid: "Beskriv kunden med en anonym profil – ingen navne, CPR-numre, adresser eller kontonumre. Følg Nykredits interne regler."
  },
  {
    id: "p150",
    category: "Møder & samarbejde",
    field: "Kunderådgivning",
    type: "deep",
    title: "Behovsafklaring hos ny erhvervskunde",
    when: "Brug den før det første møde med en ny erhvervskunde, når du vil stille åbne spørgsmål i stedet for at sælge.",
    tags: ["erhvervskunde", "behovsafklaring", "spørgeguide", "første møde", "åbne spørgsmål"],
    prompt: `Rolle: Du er min erfarne kollega som erhvervsrådgiver i Nykredit med speciale i mellemstore danske virksomheder.

Kontekst: Jeg har første møde i morgen med [virksomhed, branche, ca. størrelse]. Vi kender ikke hinanden. Min hypotese er at de har behov inden for [realkredit / driftskredit / cash management / investering / valutaafdækning].

Metode: Giv mig en spørgsmålsguide opdelt i 4 faser:
1. Forretningsforståelse (5 spørgsmål)
2. Finansiel situation og likviditet (5 spørgsmål)
3. Risiko og fremtid (5 spørgsmål)
4. Beslutningsproces og forventninger til bank (3 spørgsmål)

Hvert spørgsmål skal være åbent (ikke ja/nej) og max 15 ord. Markér de 3 spørgsmål jeg helst ikke skal springe over.`,
    safety: "Spørgsmålene er et udgangspunkt. Tilpas dem til kunden, og drop dem, der ikke passer til situationen.",
    avoid: "Beskriv virksomheden med branche og størrelse – ingen fortrolige oplysninger fra kundens sag. Følg Nykredits interne regler."
  },
  {
    id: "p151",
    category: "Analyse & data",
    field: "Kunderådgivning",
    type: "micro",
    title: "Forretningsmodel som Business Model Canvas",
    when: "Brug den, når du har læst om en virksomhed og vil se hele forretningsmodellen på én side.",
    tags: ["Business Model Canvas", "forretningsmodel", "erhvervskunde", "analyse"],
    prompt: `Forklar denne forretningsmodel med Business Model Canvas – alle ni felter udfyldt med stikord.`,
    safety: "Canvas'et er en tolkning. Kontrollér de felter, der bygger på antagelser, og brug kun offentlige eller godkendte oplysninger om virksomheden."
  },
  {
    id: "p152",
    category: "Præsentation & visualisering",
    field: "Kunderådgivning",
    type: "micro",
    title: "Flowchart: produkt A vs produkt B",
    when: "Brug den, når du vil have et hurtigt overblik over, hvornår to produkter passer til en kunde – fx to låntyper.",
    tags: ["flowchart", "produkter", "beslutningstræ", "rådgivning", "overblik"],
    prompt: `Lav et tekst-flowchart over hvornår jeg skal anbefale produkt A og hvornår produkt B til en kunde.`,
    safety: "Flowchartet er en huskeseddel, ikke en rådgivningsregel. Kontrollér det mod Nykredits produktbeskrivelser og rådgivningsproces."
  },
  {
    id: "p153",
    category: "Kunde & kollega",
    field: "Kunderådgivning",
    type: "micro",
    title: "Fem åbne spørgsmål til ny kunde",
    when: "Brug den, når du vil i gang med en ny privatkunde uden de spørgsmål, alle andre stiller.",
    tags: ["privatkunde", "åbne spørgsmål", "første møde", "dialog"],
    prompt: `Lav fem åbne spørgsmål jeg kan stille en ny privatkunde – undgå klichéer som "hvad er dine drømme for fremtiden".`,
    safety: "Vælg de spørgsmål, der passer til dig og til kunden. Spørgsmål om helbred, familie og økonomi kræver ekstra omtanke."
  },
  // April 2026 · Kreditvurdering
  {
    id: "p154",
    category: "Analyse & data",
    field: "Kredit",
    type: "deep",
    title: "Indledende kreditscreening af erhvervskunde",
    when: "Brug den, før du går i gang med en indstilling, når du vil vide, hvilke spørgsmål du skal have svar på først.",
    tags: ["kreditscreening", "erhvervskunde", "regnskab", "indstilling", "spørgsmål"],
    prompt: `Rolle: Du er min erfarne kollega i Nykredits erhvervskredit-afdeling.

Kontekst: Jeg er ved at lave en indledende screening af [virksomhed, branche, omsætning ca. xx mio., antal ansatte, beliggenhed]. De søger [lånetype, beløb, formål]. Jeg har adgang til seneste tre regnskabsår samt ledelsesberetning.

Metode: Stil mig de 10 vigtigste screeningsspørgsmål jeg bør have svar på FØR jeg går videre med indstilling. Inddel i:
- Forretningsmodel og marked (3 spørgsmål)
- Finansiel sundhed og udvikling (3 spørgsmål)
- Sikkerhedsstillelse og struktur (2 spørgsmål)
- Ledelse og governance (2 spørgsmål)

For hvert spørgsmål: én linje om hvorfor det er vigtigt, og hvor jeg typisk finder svaret (regnskab, ledelsesberetning, CVR, samtale med kunde).`,
    safety: "Spørgsmålene erstatter ikke Nykredits kreditpolitik og procedurer. Kreditvurderingen er din og kreditorganisationens – ikke Copilots.",
    avoid: "Beskriv virksomheden generelt – ingen CPR-numre, kontonumre eller fortrolige oplysninger fra sagen. Følg Nykredits interne regler."
  },
  {
    id: "p155",
    category: "Analyse & data",
    field: "Kredit",
    type: "deep",
    title: "Risikofaktorer ved boliglån til førstegangskøber",
    when: "Brug den, når du skal vurdere en låneanmodning fra førstegangskøbere og vil have risici og stresstest struktureret.",
    tags: ["boliglån", "førstegangskøber", "risiko", "stresstest", "indstilling"],
    prompt: `Rolle: Du er min erfarne kollega som boligrådgiver i Nykredit med specifik erfaring med førstegangskøbere.

Kontekst: Jeg skal vurdere låneanmodning fra [kundeprofil – fx par i starten af 30'erne, samlet husstandsindkomst xx, opsparing xx, ingen børn endnu, søger ejerlejlighed til xx i [kommune]]. Belåningsgrad bliver [xx]%. De ønsker [F3 / F-kort / fast rente].

Metode: Giv mig en risikovurdering struktureret som:
1. De 5 vigtigste risikofaktorer for netop denne profil
2. For hver: kort hvorfor det er en risiko, og hvad jeg kan undersøge nærmere
3. To stress-test-scenarier (rentestigning, indkomstbortfald)
4. En klar anbefaling: lav / mellem / høj risiko, og hvilke vilkår jeg bør foreslå

Skriv så jeg kan bruge punkterne direkte i min indstilling.`,
    safety: "Copilot må ikke træffe kreditbeslutningen. Regn stresstest og rådighedsbeløb efter i Nykredits egne systemer, og følg kreditpolitikken.",
    avoid: "Beskriv kunden med en anonym profil – ingen navne, CPR-numre, adresser eller kontonumre. Følg Nykredits interne regler."
  },
  {
    id: "p156",
    category: "Research & læring",
    field: "Kredit",
    type: "deep",
    title: "Branchespecifik risikoanalyse – landbrug",
    when: "Brug den, når du skal vurdere en landbrugskunde og vil have den aktuelle branchesituation og regulering på én side.",
    tags: ["landbrug", "branche", "risiko", "regulering", "briefing"],
    prompt: `Rolle: Du er min erfarne brancheanalytiker med dyb viden om dansk landbrug og Nykredits position som realkreditgiver i landbruget.

Kontekst: Jeg skal vurdere en kunde inden for [malkekvæg / svin / planteavl / mink / økologi] med [antal hektar / antal dyr / omsætning xx mio.]. De søger [refinansiering / udvidelse / generationsskifte].

Metode: Lav en branchebriefing på 1 A4-side:
1. Aktuel branchesituation og 12-24 måneders udsigter (priser, regulering, bæredygtighed)
2. De 3 største finansielle risici for netop denne bedriftstype lige nu
3. To regulatoriske forhold der påvirker kreditvurderingen (fx CAP, kvælstofregulering, dyrevelfærd)
4. To åbne spørgsmål jeg bør stille til kunden ud over standardpakken

Vær specifik – undgå generelle udsagn som "landbruget er presset".`,
    safety: "Priser, regler og udsigter ændrer sig hurtigt. Bed om kilder, og kontrollér dem – og brug Nykredits egne branchevurderinger, hvor de findes.",
    avoid: "Skriv ikke kundens navn eller CVR-nummer – bedriftstype og størrelse er nok."
  },
  {
    id: "p157",
    category: "Analyse & data",
    field: "Kredit",
    type: "deep",
    title: "Læs et driftsregnskab – find signaler",
    when: "Brug den, når du har tre års regnskaber og vil se de tidlige tegn på forværring eller forbedring.",
    tags: ["regnskab", "nøgletal", "signaler", "SMV", "kreditanalyse"],
    prompt: `Rolle: Du er min erfarne kollega i Nykredits kreditafdeling med mange års erfaring i regnskabsanalyse for SMV'er.

Kontekst: Jeg har vedhæftet/indsat seneste tre års årsregnskaber for [virksomhed, branche]. Jeg leder efter de tidlige signaler på finansiel forværring eller forbedring.

[INDSÆT NØGLETAL ELLER VEDHÆFT REGNSKAB]

Metode: Giv mig en analyse i tre dele:
1. Tre positive signaler (med tal/nøgletal som dokumentation)
2. Tre advarselssignaler (med tal/nøgletal som dokumentation)
3. Tre nøglespørgsmål jeg bør stille til virksomhedens CFO/ejer for at forstå udviklingen

Brug konkrete tal fra regnskabet. Spring ikke over hvis tallene er inkonsistente – flag det i stedet.`,
    safety: "Copilot kan læse tal forkert. Tjek hvert nøgletal i regnskabet, før det bruges i en vurdering.",
    avoid: "Brug offentliggjorte regnskaber, eller fjern fortrolige oplysninger først. Følg Nykredits interne regler for, hvad du må dele med Copilot."
  },
  {
    id: "p158",
    category: "Skrivning & redigering",
    field: "Kredit",
    type: "deep",
    title: "Udkast til kreditindstilling",
    when: "Brug den, når du har noter og nøgletal og skal have dem stillet op som en indstilling til kreditkomitéen.",
    tags: ["kreditindstilling", "udkast", "struktur", "kreditkomité", "RKM"],
    prompt: `Rolle: Du er min skriveassistent med erfaring i danske kreditindstillinger.

Kontekst: Jeg er kreditmedarbejder i Nykredit og skal skrive en indstilling til kreditkomitéen om [kunde, ansøgt produkt, beløb, formål]. Jeg har følgende rå noter og data:

[INDSÆT NOTER, NØGLETAL, ANBEFALING]

Metode: Skriv et struktureret udkast på maks 1½ A4-side med følgende afsnit:
1. Sagsresumé (3-5 linjer)
2. Kunde og forretning
3. Finansiel situation og udvikling
4. Sikkerhedsstillelse og forhold
5. Risikovurdering
6. Indstilling og vilkår

Tone: nøgtern, faktuel, beslutningsorienteret. Ingen salgssprog. Marker [USIKKERT] hvor mine noter er for tynde til en konklusion.`,
    safety: "Udkastet er et skelet. Indstillingen, tallene og vurderingen er dine – læs hvert afsnit mod sagen, og følg Nykredits skabelon og kreditpolitik.",
    avoid: "Skriv ikke kundenavne, CPR-numre eller kontonumre i noterne. Følg Nykredits interne regler for, hvad du må dele med Copilot."
  },
  {
    id: "p159",
    category: "Analyse & data",
    field: "Kredit",
    type: "micro",
    title: "PESTEL-analyse af branche",
    when: "Brug den, når du vil have et hurtigt overblik over de ydre forhold, der påvirker en branche.",
    tags: ["PESTEL", "branche", "analyse", "omverden"],
    prompt: `Lav en PESTEL-analyse af denne branche med max 3 punkter pr. faktor.`,
    safety: "Bed om kilder til de punkter, du vil bruge. En PESTEL er et overblik, ikke en vurdering."
  },
  {
    id: "p160",
    category: "Beslutning & sparring",
    field: "Kunderådgivning",
    type: "micro",
    title: "Fordele og ulemper ved produkt",
    when: "Brug den, når du vil være sikker på, at begge sider af et produkt kommer lige meget frem.",
    tags: ["fordele og ulemper", "produkt", "balance", "rådgivning"],
    prompt: `Forklar fordele OG ulemper ved dette produkt – tre af hver, lige langt.`,
    safety: "Kontrollér punkterne mod Nykredits produktbeskrivelser. Copilot kender ikke de aktuelle vilkår."
  },
  // April 2026 · Investering
  {
    id: "p161",
    category: "Research & læring",
    field: "Investering & pension",
    type: "deep",
    title: "Markedsbriefing før dagens åbning",
    when: "Brug den om morgenen, når du vil have nattens nyheder, dagens nøgletal og det, du skal holde øje med, på 250 ord.",
    tags: ["markeder", "morgenbriefing", "renter", "nøgletal", "kalender"],
    prompt: `Rolle: Du er min markedsanalytiker-kollega med dækning af danske og europæiske rentemarkeder samt aktiemarkedet.

Kontekst: Jeg er dealer/investeringsrådgiver i Nykredit. Det er [dato, dag]. Jeg har brug for et hurtigt overblik før dagens åbning. Mine fokusområder er: [fx danske realkreditobligationer, EUR/DKK, amerikanske renter, danske C25-aktier].

Metode: Giv mig en briefing på maks 250 ord struktureret som:
1. Hovedoverskrifter fra natten/morgenen (3 punkter)
2. Forventede markedsdrivere i dag (2-3 punkter)
3. Kalenderbegivenheder og nøgletal der udkommer i dag
4. Et kort bullet med "watch out for" – det jeg særligt skal følge

Hold tonen analytisk og afdæmpet. Ingen anbefalinger om at købe/sælge.`,
    safety: "Copilot henter nyheder fra nettet og kan tage fejl om tal og tidspunkter. Kontrollér alt mod Nykredits egne markedsdata, før du bruger det.",
    avoid: "Brug ikke briefingen som grundlag for en handel eller en anbefaling til en kunde."
  },
  {
    id: "p162",
    category: "Kunde & kollega",
    field: "Investering & pension",
    type: "deep",
    title: "Forklar investeringsstrategi til PB-kunde",
    when: "Brug den, når en kunde har bedt om en skriftlig forklaring af sin investeringsstrategi før et møde.",
    tags: ["investeringsstrategi", "Private Banking", "klarsprog", "kundebrev", "forventninger"],
    prompt: `Rolle: Du er min skriveassistent med erfaring i dansk Private Banking-kommunikation.

Kontekst: Jeg er rådgiver i Nykredit Private Banking. Jeg skal forklare [fx en 60/40-portefølje / en risikospredt aktieportefølje / en obligationstung defensiv strategi] til [kundeprofil – alder, formue, risikoprofil, investeringshorisont]. Kunden har bedt om en skriftlig opsummering inden vi mødes næste uge.

Metode: Skriv en kort forklaring på maks 350 ord der:
1. Forklarer strategiens kerneidé i 2-3 sætninger uden jargon
2. Beskriver fordelingen og hvorfor den passer til kundens profil
3. Sætter forventninger til afkast og udsving (med ærlige tal)
4. Nævner to ting kunden skal være opmærksom på
5. Slutter med et naturligt næste skridt

Tone: rolig, fagligt sober, uden løfter. Brug du-form. Forklar fagudtryk første gang de optræder.`,
    safety: "Tal om afkast og udsving skal komme fra Nykredits egne materialer, og teksten skal følge Nykredits regler for investeringsrådgivning. Lad en kollega læse den, før den sendes.",
    avoid: "Beskriv kunden med en anonym profil – ingen navne, CPR-numre, adresser eller kontonumre. Følg Nykredits interne regler."
  },
  {
    id: "p163",
    category: "Analyse & data",
    field: "Investering & pension",
    type: "deep",
    title: "Porteføljeanalyse – koncentrationsrisici",
    when: "Brug den, når du vil se en kundes portefølje med friske øjne før et rådgivningsmøde.",
    tags: ["portefølje", "koncentrationsrisiko", "diversifikation", "risikoprofil", "analyse"],
    prompt: `Rolle: Du er min erfarne porteføljeanalytiker-kollega med fokus på risikospredning.

Kontekst: Jeg er asset management-specialist/Private Banking-rådgiver i Nykredit. Her er en kundes nuværende portefølje:

[INDSÆT BEHOLDNING – papirer, vægte, sektorer, geografi]

Kundens oplyste risikoprofil er [konservativ / balanceret / vækst].

Metode: Analysér porteføljen og giv mig:
1. De 3 største koncentrationsrisici (fx enkeltpapir, sektor, geografi, valuta)
2. For hver: hvor stor eksponering er der, og hvorfor er det en bekymring givet kundens profil
3. To-tre konkrete diversifikationsforslag jeg kan tage med til næste rådgivningsmøde
4. Et kort talepunkt jeg kan bruge når jeg åbner samtalen

Vær konservativ i vurderingen. Markér klart hvor du gætter vs. hvor du regner på data.`,
    safety: "Forslagene er sparring, ikke investeringsrådgivning. Rådgivning følger Nykredits egne processer og kundens egnethedsvurdering.",
    avoid: "Skriv ikke kundens navn, depotnummer eller CPR-nummer – beholdningen er nok. Følg Nykredits interne regler."
  },
  {
    id: "p164",
    category: "Research & læring",
    field: "Investering & pension",
    type: "deep",
    title: "Sammenfat lang analytikerrapport",
    when: "Brug den, når en analytikerrapport er for lang til at læse nu, men du skal kende konklusionen og svaghederne.",
    tags: ["analytikerrapport", "resumé", "TL;DR", "research", "blinde vinkler"],
    prompt: `Rolle: Du er min researchassistent med erfaring i investeringsanalyser.

Kontekst: Jeg er [investeringsrådgiver / asset manager / analytiker] i Nykredit. Jeg har en lang analytikerrapport om [emne – fx ECB's næste rentemøde, dansk boligmarked, Novo Nordisk Q-rapport]. Jeg har ikke tid til at læse de [xx] sider.

[INDSÆT RAPPORT ELLER LINK]

Metode: Lav en TL;DR jeg kan læse på 2 minutter:
1. Konklusionen i én sætning
2. De 3 vigtigste argumenter med stikord-evidens
3. Et tal eller datapunkt jeg særligt skal huske
4. To risici eller modargumenter rapporten diskuterer
5. Hvad rapporten IKKE dækker (potentielle blinde vinkler)

Maks 300 ord. Brug bullets. Ingen indledning.`,
    safety: "Tjek de tal, du vil bruge, i selve rapporten. En TL;DR taber forbehold – læs de afsnit, der bærer konklusionen.",
    avoid: "Del kun rapporter, du må dele med Copilot – købte analyser kan have licensvilkår. Følg Nykredits interne regler."
  },
  {
    id: "p165",
    category: "Skrivning & redigering",
    field: "Investering & pension",
    type: "deep",
    title: "Månedsrapport-introduktion",
    when: "Brug den, når pointerne til månedsrapporten er klar, men indledningen ikke vil skrive sig selv.",
    tags: ["månedsrapport", "investorer", "indledning", "tone", "skrivning"],
    prompt: `Rolle: Du er min skriveassistent med erfaring i månedsrapporter til investorer.

Kontekst: Jeg er [asset manager / Private Banking-rådgiver] i Nykredit. Jeg skal skrive intro-afsnittet til min månedsrapport for [måned, år]. Mine vigtigste pointer:

- [punkt om markedsudvikling]
- [punkt om porteføljens performance]
- [punkt om positionering fremadrettet]

Metode: Skriv en intro på 200-250 ord der:
1. Åbner med dét, der prægede markedet i måneden
2. Forklarer hvordan det påvirkede porteføljen
3. Slutter med vores positionering og hvad vi holder øje med næste måned

Tone: professionel, fagligt sober, uden overdrevne formuleringer. Ingen "spændende tider" eller "udfordrende marked"-klichéer.`,
    safety: "Tallene og vurderingerne er dine. Kontrollér performance og markedsudvikling, og følg Nykredits regler for investeringskommunikation."
  },
  {
    id: "p166",
    category: "Analyse & data",
    field: "Investering & pension",
    type: "micro",
    title: "Porter's Five Forces",
    when: "Brug den, når du vil forstå konkurrencen i en sektor, før du vurderer en virksomhed i den.",
    tags: ["Porter", "Five Forces", "sektor", "konkurrence", "analyse"],
    prompt: `Lav en Porter's Five Forces-analyse af denne sektor og marker den kraft der er stærkest.`,
    safety: "Analysen er en model, ikke et faktum. Bed om kilder til de vurderinger, du vil bruge videre."
  },
  // April 2026 · Jura & regulering
  {
    id: "p167",
    category: "Kvalitet & sikkerhed",
    field: "Jura & compliance",
    type: "deep",
    title: "DORA – identificér gaps i eget område",
    when: "Brug den, når du vil stressteste, om dit område har styr på de vigtigste DORA-krav – som intern tjekliste.",
    tags: ["DORA", "regulering", "IT-risiko", "tjekliste", "gap-analyse"],
    prompt: `Rolle: Du er min juridiske sparringspartner med speciale i finansiel regulering, særligt DORA (Digital Operational Resilience Act).

Kontekst: Jeg arbejder i Nykredit inden for [område – IT-leverandørstyring / incident response / risk management / outsourcing]. Vi er i gang med DORA-implementering og jeg vil gerne stress-teste om vi har dækket de vigtigste krav i mit område.

Vores nuværende setup: [beskriv kort]

Metode: Stil mig 10 spørgsmål struktureret efter DORA's fem søjler:
1. ICT risk management (2 spørgsmål)
2. ICT-related incident reporting (2 spørgsmål)
3. Digital operational resilience testing (2 spørgsmål)
4. ICT third-party risk (3 spørgsmål)
5. Information sharing (1 spørgsmål)

For hvert spørgsmål: én linje om hvad et "godt svar" indeholder, så jeg kan bruge det som intern tjekliste.

Disclaimer: dit svar er starthjælp, ikke juridisk rådgivning.`,
    safety: "Svaret er starthjælp, ikke juridisk rådgivning. Brug Nykredits egen DORA-implementering og fagfolkene som facit.",
    avoid: "Beskriv ikke sårbarheder, sikkerhedsopsætning eller leverandøraftaler i detaljer. Følg Nykredits interne regler."
  },
  {
    id: "p168",
    category: "Kunde & kollega",
    field: "Jura & compliance",
    type: "deep",
    title: "MiFID II egnethedsvurdering – forklaret til kunde",
    when: "Brug den, når en kunde synes, spørgsmålene i egnethedsvurderingen er for personlige, og du vil svare venligt og præcist.",
    tags: ["MiFID II", "egnethedsvurdering", "kundesvar", "klarsprog", "investering"],
    prompt: `Rolle: Du er min skriveassistent med kendskab til MiFID II og dansk investeringsrådgivning.

Kontekst: Jeg er investeringsrådgiver i Nykredit. En privatkunde har spurgt hvorfor de skal igennem en egnethedsvurdering før jeg kan anbefale produkter. De synes spørgsmålene er for personlige.

Metode: Skriv et venligt og pædagogisk svar (maks 200 ord) der:
1. Forklarer formålet med egnethedsvurderingen i hverdagssprog
2. Forklarer hvorfor det er et lovkrav, ikke en valg-tjekliste
3. Anerkender at det kan virke personligt
4. Forklarer hvad vi gør med oplysningerne (og ikke gør)
5. Slutter med en invitation til at spørge løbende

Tone: respektfuld og menneskelig. Undgå "Iht. MiFID II § ..."-formuleringer.`,
    safety: "Kontrollér, at forklaringen passer med Nykredits egen beskrivelse af egnethedsvurderingen og af, hvordan oplysningerne behandles, før den sendes.",
    avoid: "Indsæt ikke kundens henvendelse med navn eller andre persondata. Følg Nykredits interne regler."
  },
  {
    id: "p169",
    category: "Analyse & data",
    field: "Jura & compliance",
    type: "deep",
    title: "Hvidvask – vurdér røde flag i kundeprofil",
    when: "Brug den, når du vil strukturere din egen vurdering af et mønster, før du taler med den hvidvaskansvarlige – på en anonymiseret eller opdigtet beskrivelse.",
    tags: ["hvidvask", "røde flag", "eskalering", "AML", "vurdering"],
    prompt: `Rolle: Du er min sparringspartner med viden om hvidvaskloven og typiske risikoindikatorer i dansk bank.

Kontekst: Jeg er rådgiver/AML-medarbejder i Nykredit. Jeg har følgende kundeprofil og transaktionsmønster, som jeg er i tvivl om jeg skal eskalere:

[INDSÆT ANONYMISERET BESKRIVELSE – type virksomhed/person, geografi, beløbsstørrelser, frekvens, branche, ejerstruktur]

Metode: Hjælp mig med at strukturere min vurdering:
1. List op til 5 mulige røde flag i den beskrevne situation
2. For hvert: forklar hvorfor det kunne være et flag, og hvad der kunne være en legitim forklaring
3. Foreslå 3 konkrete oplysninger jeg bør indhente før eskalering
4. Giv mig en samlet vurdering: bør sagen eskaleres til hvidvaskansvarlig (ja/nej/måske + begrundelse)

Disclaimer: dit svar er ikke en officiel hvidvaskvurdering, og den endelige beslutning ligger hos mig og hvidvaskansvarlig.`,
    safety: "Svaret er ikke en hvidvaskvurdering. Rigtige sager behandles kun i Nykredits egne systemer og efter Nykredits procedurer – eskalér efter dem, ikke efter Copilot.",
    avoid: "Indsæt aldrig navne, CPR- eller CVR-numre, kontonumre eller rigtige transaktioner. Følg Nykredits interne regler."
  },
  {
    id: "p170",
    category: "Kvalitet & sikkerhed",
    field: "Jura & compliance",
    type: "deep",
    title: "GDPR-vurdering af nyt dataflow",
    when: "Brug den tidligt i et projekt, når du vil vide, hvilke GDPR-spørgsmål du skal have svar på, før du går videre.",
    tags: ["GDPR", "DPIA", "dataflow", "databeskyttelse", "projekt"],
    prompt: `Rolle: Du er min juridiske sparringspartner med fokus på GDPR i dansk finansiel sektor.

Kontekst: Jeg arbejder i Nykredit og er ved at implementere [nyt system / ny integration / ny proces] der involverer behandling af [type personoplysninger – fx kundedata, økonomidata, helbredsoplysninger via PEP-screening]. Dataflowet er:

[INDSÆT BESKRIVELSE]

Metode: Hjælp mig med en indledende vurdering:
1. List de 5 GDPR-spørgsmål jeg bør have besvaret før jeg går videre
2. Vurdér om dette sandsynligvis kræver en DPIA (databeskyttelses-konsekvensanalyse) – ja/nej/måske + begrundelse
3. Identificér de 2-3 største databeskyttelsesrisici i flowet
4. Foreslå første mitigerende tiltag for hver risiko

Disclaimer: din vurdering er starthjælp. DPO og jurist skal involveres før endelig beslutning.`,
    safety: "Vurderingen er starthjælp. Nykredits DPO og jurister skal involveres, før der træffes beslutning.",
    avoid: "Beskriv dataflowet generelt – ingen rigtige persondata og ingen sikkerhedsdetaljer."
  },
  {
    id: "p171",
    category: "Beslutning & sparring",
    field: "Jura & compliance",
    type: "micro",
    title: "Argument som Toulmin-model",
    when: "Brug den, når du vil se, hvad et argument i et notat eller en afgørelse faktisk hviler på.",
    tags: ["Toulmin", "argumentation", "belæg", "analyse", "jura"],
    prompt: `Vis mig argumentet i denne tekst som Toulmin-model: påstand → belæg → hjemmel → rygdækning.`,
    safety: "Modellen viser argumentets struktur – ikke om det holder juridisk. Den vurdering er din."
  },
  // April 2026 · IT & udvikling
  {
    id: "p172",
    category: "Kvalitet & sikkerhed",
    field: "IT",
    type: "deep",
    title: "Code review af kort kodestump",
    when: "Brug den, når du vil have en kritisk kollegas øjne på en kort stump kode, før den går til review.",
    tags: ["code review", "sikkerhed", "kvalitet", "vedligeholdelse", "udvikling"],
    prompt: `Rolle: Du er min erfarne udvikler-kollega med fokus på kvalitet, sikkerhed og vedligeholdelse i finansiel software.

Kontekst: Jeg arbejder i Nykredits IT. Jeg har skrevet følgende [sprog] kode der skal [formål]:

[INDSÆT KODE]

Metode: Lav en code review struktureret i fire kategorier:
1. Korrekthed (gør koden det den skal? edge cases?)
2. Sikkerhed (særligt med tanke på finansielle data – input validering, logging af sensitive data, secrets)
3. Vedligeholdbarhed (læsbarhed, navngivning, kompleksitet)
4. Performance (kun hvis relevant)

For hvert punkt: kort beskrivelse + konkret forslag til ændring + sværhedsgrad (let / medium / kræver refaktorering).

Vær konkret. Generelle udsagn som "tilføj logging" er ikke nok.`,
    safety: "Review fra AI erstatter ikke Nykredits review- og testproces. Test selv forslagene, før de kommer i koden.",
    avoid: "Indsæt aldrig secrets, nøgler, forbindelsesstrenge eller rigtige kundedata. Brug kun de AI-værktøjer til kode, som Nykredits interne regler tillader."
  },
  {
    id: "p173",
    category: "Projekter & processer",
    field: "IT",
    type: "deep",
    title: "Forfin en user story",
    when: "Brug den før sprint planning, når en user story skal være klar nok til, at teamet kan estimere uden at gætte.",
    tags: ["user story", "acceptkriterier", "sprint", "agil", "Jira"],
    prompt: `Rolle: Du er min Product Owner-kollega med erfaring i agil udvikling i bank- og forsikringsdomænet.

Kontekst: Jeg arbejder i Nykredits IT. Jeg har skrevet et udkast til en user story:

[INDSÆT USER STORY]

Den skal med på næste sprint planning og jeg vil gerne sikre at den er klar nok til at teamet kan estimere og bygge uden at gætte.

Metode: Gennemgå storyen og svar på:
1. Er "Som... vil jeg... så jeg..."-strukturen klar? Foreslå forbedring
2. Mangler der acceptkriterier? Hvis ja, foreslå 3-5 i Given/When/Then-format
3. Er der afhængigheder eller forudsætninger der bør nævnes?
4. Hvilke 2-3 åbne spørgsmål bør jeg afklare med stakeholderen før sprint planning?
5. Foreslå en størrelsesindikator (XS/S/M/L/XL) med begrundelse

Skriv den forbedrede story som sidste punkt, klar til at indsætte i Jira.`,
    safety: "Acceptkriterierne er forslag. Afstem dem med product owner og den, der har bestilt opgaven, før storyen kommer i sprinten."
  },
  {
    id: "p174",
    category: "Beslutning & sparring",
    field: "IT",
    type: "deep",
    title: "Arkitekturvurdering af foreslået løsning",
    when: "Brug den før en arkitekturbeslutning, når du vil have styrker, svagheder og alternativer på bordet.",
    tags: ["arkitektur", "vurdering", "risiko", "DORA", "beslutning"],
    prompt: `Rolle: Du er min erfarne løsningsarkitekt-kollega med erfaring fra finansiel sektor og fokus på integration, sikkerhed og skalerbarhed.

Kontekst: Jeg arbejder i Nykredits IT. Vi overvejer følgende arkitekturløsning til [problem/feature]:

[INDSÆT ARKITEKTURBESKRIVELSE – komponenter, integrationer, datastrømme]

Metode: Lav en hurtig arkitekturvurdering:
1. Tre styrker ved den foreslåede løsning
2. Tre svagheder eller risici (særligt mht. sikkerhed, drift, leverandørafhængighed, regulatoriske krav som DORA)
3. To alternative tilgange jeg bør overveje
4. Fem spørgsmål jeg bør stille før vi træffer beslutning
5. En sundhedstest: hvis dette går galt om 3 år, hvad er så den mest sandsynlige årsag?

Vær konkret og kritisk. Ingen "det afhænger af konteksten"-svar.`,
    safety: "Vurderingen er sparring. Beslutningen følger Nykredits arkitektur- og godkendelsesproces.",
    avoid: "Beskriv ikke sikkerhedsopsætning, sårbarheder eller interne systemdetaljer, du ikke må dele. Følg Nykredits interne regler."
  },
  {
    id: "p175",
    category: "Kunde & kollega",
    field: "IT",
    type: "deep",
    title: "Oversæt teknisk indhold til forretning",
    when: "Brug den, når en teknisk beskrivelse skal læses af ledere eller en styregruppe, der skal beslutte noget.",
    tags: ["teknisk indhold", "forretning", "klarsprog", "styregruppe", "IT"],
    prompt: `Rolle: Du er min skriveassistent med erfaring i at oversætte teknisk indhold til forretningssprog.

Kontekst: Jeg er [arkitekt / udvikler / proceskonsulent] i Nykredits IT. Jeg har følgende tekniske beskrivelse der skal læses af [forretningsledere / direktion / styregruppe]:

[INDSÆT TEKNISK INDHOLD]

Metode: Skriv en oversat version på maks 350 ord der:
1. Åbner med "Hvad det betyder i praksis" (2-3 sætninger)
2. Forklarer hvad ændringen/løsningen gør for kunderne eller forretningen
3. Forklarer hvad det IKKE løser
4. Lister tre konkrete risici eller forudsætninger i hverdagssprog
5. Slutter med hvad der kræves af modtageren (beslutning? information? feedback?)

Forklar tekniske udtryk første gang de optræder. Brug analogier hvor det giver mening. Ingen akronymer uden forklaring.`,
    safety: "Læs efter, at forenklingen ikke har fjernet en risiko eller en forudsætning. Lad en fagperson tjekke analogierne."
  },
  {
    id: "p176",
    category: "Møder & samarbejde",
    field: "IT",
    type: "deep",
    title: "Forbered facilitering af retrospective",
    when: "Brug den før en retrospective, når sprinten har været hård, og du vil have en plan, der passer til stemningen.",
    tags: ["retrospective", "Scrum", "facilitering", "team", "psykologisk tryghed"],
    prompt: `Rolle: Du er min erfarne Scrum Master-kollega.

Kontekst: Jeg er Scrum Master i Nykredits IT. Mit team har lige afsluttet en sprint hvor [beskriv kort – fx vi leverede meget under pres / vi havde mange tekniske problemer / et nyt teammedlem startede / der var spændinger]. Jeg skal facilitere retrospective på torsdag (90 min, 7 deltagere på Teams).

Metode: Foreslå mig:
1. Et tema/format der passer til situationen (med begrundelse)
2. En agenda med tidsbokse der summerer til 90 min
3. Fire konkrete spørgsmål til "what went well / what didn't"-runden tilpasset situationen – undgå klichéer
4. To psykologisk-tryghedsfremmende greb hvis der er spændinger
5. En afslutning der sikrer at vi forlader mødet med max 3 konkrete action items med ejer

Realistisk plan. Antag at folk er trætte og presset på tid.`,
    safety: "Planen er et udkast. Du kender teamet – tilpas øvelser og spørgsmål, så ingen skal dele mere, end de har lyst til.",
    avoid: "Skriv ikke navne eller personlige forhold om kolleger i beskrivelsen af sprinten."
  },
  {
    id: "p177",
    category: "Analyse & data",
    field: "IT",
    type: "micro",
    title: "CSV til JSON med datacheck",
    when: "Brug den, når et lille datasæt skal skifte format, og du samtidig vil fange fejl i data.",
    tags: ["CSV", "JSON", "datakvalitet", "konvertering", "data"],
    prompt: `Konvertér denne CSV til JSON-format og marker hvor data ser usundt ud (manglende værdier, dubletter, datofejl).`,
    safety: "Tjek antal rækker og et par stikprøver efter konverteringen.",
    avoid: "Brug kun testdata eller opdigtede data – ingen kunde- eller persondata."
  },
  {
    id: "p178",
    category: "Research & læring",
    field: "IT",
    type: "micro",
    title: "Forklar kode i hverdagssprog",
    when: "Brug den, når du skal forstå et stykke kode, du ikke selv har skrevet.",
    tags: ["kode", "forklaring", "læring", "udvikling"],
    prompt: `Forklar denne kode linje for linje i hverdagssprog som om jeg ikke kender sproget.`,
    safety: "Forklaringen kan tage fejl i detaljerne. Kør eller test koden, hvis det betyder noget.",
    avoid: "Indsæt aldrig kode med secrets, nøgler eller kundedata."
  },
  {
    id: "p179",
    category: "Kvalitet & sikkerhed",
    field: "IT",
    type: "micro",
    title: "Fem testcases inkl. edge cases",
    when: "Brug den, når du har skrevet en funktion og vil finde de tilfælde, du ikke selv har tænkt på.",
    tags: ["test", "edge cases", "kvalitet", "udvikling"],
    prompt: `Foreslå fem testcases for denne funktion inkl. edge cases (tomme inputs, ekstreme værdier, forkert datatype).`,
    safety: "Testcases fra AI er idéer. Kør dem, og tilføj dem, der mangler i forhold til Nykredits testkrav."
  },
  // April 2026 · Ledelse & HR
  {
    id: "p180",
    category: "Møder & samarbejde",
    field: "Ledelse & HR",
    type: "deep",
    title: "Forberedelse til medarbejdersamtale",
    when: "Brug den før en medarbejdersamtale, når du vil have temaer, spørgsmål og en ordentlig formulering af kritisk feedback klar.",
    tags: ["medarbejdersamtale", "MUS", "feedback", "SBI", "ledelse"],
    prompt: `Rolle: Du er min sparringspartner med erfaring i ledelse og HR i dansk finansiel sektor.

Kontekst: Jeg er leder i Nykredit og skal holde medarbejdersamtale med [medarbejderens rolle, anciennitet]. De seneste 6 måneder har der været [indsæt vigtige observationer – gode og knap så gode]. Mit indtryk er [indsæt]. Medarbejderen har selv sagt [hvis noget er kendt].

Metode: Hjælp mig med at forberede mig på 1 A4-side:
1. Tre temaer jeg bør have med (med formulering jeg kan bruge ordret)
2. To åbne spørgsmål der kan starte en god dialog
3. Hvis jeg skal give kritisk feedback: en formulering bygget på SBI (Situation/Behavior/Impact)
4. To ting jeg skal lytte efter snarere end tale om
5. En passende afslutning der peger fremad

Tone: respektfuld og direkte. Ingen sandwich-feedback eller fluffy formuleringer.`,
    safety: "Formuleringerne er forslag. Samtalen og vurderingen er din – og følger Nykredits HR-retningslinjer.",
    avoid: "Skriv ikke medarbejderens navn, helbredsoplysninger eller andet fra personalesagen. Beskriv rolle og observationer generelt, og følg Nykredits interne regler."
  },
  {
    id: "p181",
    category: "Kunde & kollega",
    field: "Ledelse & HR",
    type: "deep",
    title: "Rollespil – vanskelig samtale",
    when: "Brug den aftenen før en svær samtale, når du vil øve dig på modstand i stedet for at improvisere.",
    tags: ["rollespil", "svær samtale", "øvelse", "feedback", "ledelse"],
    prompt: `Rolle: Du skal spille rollen som [medarbejder/kollega/kunde] i en vanskelig samtale jeg skal have. Du er ikke aggressiv, men heller ikke samarbejdsvillig.

Kontekst: Jeg er leder i Nykredit. Jeg skal i morgen tale med [rolle] om [emne – fx underperformance / advarsel / afslag på ønsket forfremmelse / omstrukturering]. Personen er [kort profil – typisk reaktionsmønster, relation til mig, anciennitet].

Metode: Spil rollen realistisk. Du må gerne være defensiv, stille modspørgsmål, virke skuffet. Stop ikke samtalen – lad mig øve mig.

Når jeg skriver "PAUSE", træder du ud af rollen og giver mig:
- Hvad jeg gjorde godt
- Hvad jeg kunne have sagt anderledes
- Hvad du som modpart fornemmede mellem linjerne

Vi kan derefter starte forfra eller fortsætte hvor vi slap.`,
    safety: "Modparten er en simulering. Rigtige mennesker reagerer anderledes – brug øvelsen til at finde dine ord, ikke til at forudsige svaret.",
    avoid: "Skriv ikke navnet eller personlige oplysninger om den, samtalen handler om."
  },
  {
    id: "p182",
    category: "Møder & samarbejde",
    field: "Ledelse & HR",
    type: "deep",
    title: "Struktur til 1:1-møder",
    when: "Brug den, når dine 1:1-møder er blevet statusmøder, og du vil have mere udvikling ind i dem.",
    tags: ["1:1", "ledelse", "møder", "udvikling", "agenda"],
    prompt: `Rolle: Du er min sparringspartner med erfaring i ledelse.

Kontekst: Jeg er leder i Nykredit med [antal] direkte rapporter. Jeg har 1:1-møder hver [hyppighed]. Jeg synes mine 1:1'er er blevet for status-prægede og for lidt udviklingsorienterede.

Metode: Foreslå mig:
1. En agenda-skabelon på 30 min med faste sektioner og tidsfordeling
2. Fem skiftende åbningsspørgsmål jeg kan rotere mellem
3. Tre signaler jeg skal lytte efter (psykologisk tryghed, motivation, overbelastning)
4. En struktur til at fange op-til-ledelse fra mine medarbejdere uden det bliver klagebrev
5. En kvartalsvis "zoom ud"-version (45 min) der ser længere frem

Lad det være konkret nok at jeg kan tage det i brug i næste 1:1.`,
    safety: "Skabelonen er et udgangspunkt. Aftal formen med dine medarbejdere, så det også er deres møde."
  },
  {
    id: "p183",
    category: "Skrivning & redigering",
    field: "Ledelse & HR",
    type: "deep",
    title: "Udkast til jobopslag",
    when: "Brug den, når du skal rekruttere og vil have et ærligt jobopslag uden klichéer.",
    tags: ["jobopslag", "rekruttering", "HR", "tone", "klarsprog"],
    prompt: `Rolle: Du er min skriveassistent med erfaring i jobopslag til finansiel sektor i Danmark.

Kontekst: Jeg er leder i Nykredit og skal rekruttere en [titel] til [afdeling]. Stillingens kerne er [3-5 hovedopgaver]. Vigtige kvalifikationer: [indsæt]. Vi tilbyder [indsæt]. Vi søger en der [personprofil-stikord].

Metode: Skriv et opslag på maks 400 ord struktureret som:
1. Åbning der fanger opmærksomhed (én stærk linje)
2. "Det skal du arbejde med" (3-4 punkter)
3. "Det vi forventer du har med" (max 5 punkter – adskil "skal-have" fra "godt at have")
4. "Det vi tilbyder" (3 punkter med substans, ikke fluff)
5. Afslutning med klar invitation og deadline

Tone: ærlig, professionel, konkret. Undgå klichéer som "passioneret", "team player", "dynamisk miljø". Brug du-form.`,
    safety: "Kontrollér opslaget med HR, så det følger Nykredits rekrutteringspraksis og ikke utilsigtet udelukker ansøgere."
  },
  {
    id: "p184",
    category: "Kunde & kollega",
    field: "Ledelse & HR",
    type: "micro",
    title: "Tre åbninger på vanskeligt emne",
    when: "Brug den, når du ved, hvad du skal sige, men ikke hvordan du skal begynde.",
    tags: ["svær samtale", "åbning", "tone", "ledelse"],
    prompt: `Foreslå tre måder at åbne et vanskeligt emne på i en medarbejdersamtale, fra blød til direkte.`,
    safety: "Vælg den åbning, der passer til relationen og sagens alvor. Den vurdering er din."
  },
  {
    id: "p185",
    category: "Møder & samarbejde",
    field: "Ledelse & HR",
    type: "micro",
    title: "Fem ægte isbryder-spørgsmål",
    when: "Brug den, når teammødet trænger til en start, der ikke føles som en øvelse.",
    tags: ["isbryder", "teammøde", "trivsel", "møder"],
    prompt: `Lav fem isbryder-spørgsmål til mit teams ugentlige møde der ikke er flove eller kunstige.`,
    safety: "Ingen skal svare på noget personligt, de ikke har lyst til. Lad det være frivilligt."
  },
  // April 2026 · Kommunikation
  {
    id: "p186",
    category: "Kunde & kollega",
    field: "Kommunikation",
    type: "deep",
    title: "Kundekommunikation om renteændring",
    when: "Brug den, når en ændring i rente, satser eller vilkår skal ud til kunderne i flere kanaler på én gang.",
    tags: ["kundekommunikation", "renteændring", "SMS", "mail", "klarsprog", "kanaler"],
    prompt: `Rolle: Du er min skriveassistent med erfaring i dansk realkreditkommunikation.

Kontekst: Jeg arbejder i Nykredit og skal informere [målgruppe – fx F-Kort-kunder / privatkunder med variabel rente / erhvervskunder med specifikt produkt] om en ændring i [hvad – rentetilpasning / nye satser / produktvilkår]. Ændringen træder i kraft [dato]. Vigtigste fakta: [indsæt].

Metode: Skriv tre versioner af samme besked:
1. SMS/notifikation (max 160 tegn)
2. E-mail (max 200 ord, med emnefelt)
3. Tekst til Mit Nykredit-besked (max 350 ord, der også forklarer "hvad betyder det for mig")

For alle tre: behold faktuelle tal præcise, brug almindeligt dansk, undgå "vi gør opmærksom på" og lignende myndighedsformuleringer. Slutformulering skal pege på, hvor kunden kan få svar.`,
    safety: "Tal, datoer og vilkår skal være præcise og godkendte. Kundebreve følger Nykredits godkendelsesproces – AI-udkastet er kun et udkast.",
    avoid: "Skriv ikke kundenavne eller andre persondata i prompten."
  },
  {
    id: "p187",
    category: "Skrivning & redigering",
    field: "Kommunikation",
    type: "deep",
    title: "Intern kommunikation til intranet",
    when: "Brug den, når en nyhed skal på intranettet, og du vil have den til at lyde som jer – ikke som alle andre.",
    tags: ["intranet", "intern kommunikation", "nyhed", "overskrift", "tone"],
    prompt: `Rolle: Du er min skriveassistent med erfaring i intern kommunikation.

Kontekst: Jeg arbejder i Nykredit og skal lægge en nyhed på intranettet om [emne – fx ny proces / organisationsændring / ny politik / ny samarbejdspartner]. Mine vigtigste pointer:

[INDSÆT STIKORD]

Målgruppen er [bredt / specifik afdeling / ledere].

Metode: Skriv et udkast på maks 350 ord med:
1. En overskrift der ikke kunne være på enhver virksomheds intranet
2. Ingress (2-3 linjer der fortæller "hvad er det og hvorfor det betyder noget for dig")
3. Brødtekst med 3 underafsnit (hvad / hvorfor / hvad nu)
4. Afslutning med konkret CTA – hvad skal læseren gøre eller vide?

Tone: voksen og direkte. Undgå "vi er stolte af at kunne meddele"- indledninger.`,
    safety: "Kontrollér fakta og navne, og få nyheden godkendt efter Nykredits praksis for intern kommunikation."
  },
  {
    id: "p188",
    category: "Skrivning & redigering",
    field: "Kommunikation",
    type: "deep",
    title: "LinkedIn-opslag for medarbejder",
    when: "Brug den, når du vil dele en faglig pointe på LinkedIn og gerne vil prøve tre forskellige vinkler.",
    tags: ["LinkedIn", "opslag", "sociale medier", "tone", "faglig pointe"],
    prompt: `Rolle: Du er min skriveassistent med erfaring i LinkedIn-tone for finansielle fagfolk.

Kontekst: Jeg er [rolle] i Nykredit. Jeg vil dele [emne – fx en faglig pointe fra et kundemøde / en refleksion fra en konference / et synspunkt på et aktuelt emne]. Mine tre vigtigste pointer:

[INDSÆT POINTER]

Metode: Skriv tre forskellige versioner af samme opslag (alle 100-150 ord):
1. Personlig refleksion (jeg-form, en konkret oplevelse som krog)
2. Faglig observation (én klar pointe, lille modstykke til en gængs antagelse)
3. Spørgsmål-format (åbner en dialog)

Alle tre: ingen emojis i overdreven mængde, ingen "Thoughts? 👇", ingen humblebrag. Slut med ét spørgsmål eller en åben observation, ikke en CTA.`,
    safety: "Følg Nykredits retningslinjer for sociale medier. Skriv ikke noget om kunder, sager eller ikke-offentlige forhold.",
    avoid: "Brug aldrig detaljer fra et kundemøde, der kan genkendes."
  },
  {
    id: "p189",
    category: "Skrivning & redigering",
    field: "Kommunikation",
    type: "deep",
    title: "Pressemeddelelse – første udkast",
    when: "Brug den, når fakta og citater er på plads, og pressemeddelelsen skal have sin første form.",
    tags: ["pressemeddelelse", "presse", "udkast", "kommunikation"],
    prompt: `Rolle: Du er min skriveassistent med erfaring i dansk finansiel pressekommunikation.

Kontekst: Jeg arbejder i Nykredits kommunikation og skal lave et udkast til pressemeddelelse om [emne – fx nyt produkt / partnerskab / kvartalsresultat / analyserapport]. Vigtigste fakta:

[INDSÆT FAKTA, TAL, CITATER]

Målgruppe: [fagpresse / mainstream / faglige medier].

Metode: Skriv et udkast struktureret som:
1. Overskrift (maks 12 ord, faktuel – ingen "Nykredit lancerer banebrydende...")
2. Underrubrik (1 linje med næste-vigtigste fakta)
3. Ingress (3-5 linjer med 5W'er)
4. Brødtekst i 3 afsnit
5. Citat fra [navn, titel] – formulér det troværdigt og fagligt
6. Afsluttende faktaboks om Nykredit (3 linjer)

Tone: nøgtern og faktuel. Markér hvor jeg skal indsætte tal jeg ikke har givet dig.`,
    safety: "Udkastet sendes ikke uden kommunikationsafdelingens godkendelse. Citater skal godkendes af den, der citeres.",
    avoid: "Indsæt ikke ikke-offentlige regnskabstal eller intern viden før offentliggørelsen. Følg Nykredits interne regler."
  },
  {
    id: "p190",
    category: "Skrivning & redigering",
    field: "Kommunikation",
    type: "micro",
    title: "Find passive sætninger",
    when: "Brug den, når teksten føles tung og bureaukratisk, og du ikke kan se hvorfor.",
    tags: ["passiv", "aktiv", "klarsprog", "redigering"],
    prompt: `Find alle passive sætninger i denne tekst og foreslå aktive alternativer i en før/efter-tabel.`,
    safety: "Ikke al passiv skal væk. Behold den, hvor det er vigtigt at sige det sådan – fx i juridiske formuleringer."
  },
  {
    id: "p191",
    category: "Skrivning & redigering",
    field: "Kommunikation",
    type: "micro",
    title: "Tre afslutninger i tre toner",
    when: "Brug den, når teksten er god, men slutningen falder flad.",
    tags: ["afslutning", "tone", "mail", "redigering"],
    prompt: `Skriv tre afslutninger på denne tekst i tre toner: faktuel, varm og handlingsorienteret.`,
    safety: "Afslutningen må ikke love mere, end teksten og du kan holde."
  },
  {
    id: "p192",
    category: "Skrivning & redigering",
    field: "Kommunikation",
    type: "micro",
    title: "Komprimer til fem bullets",
    when: "Brug den, når en lang tekst skal kunne læses på ti sekunder.",
    tags: ["bullets", "kort", "opsummering", "overblik"],
    prompt: `Komprimer denne tekst til max 5 bullets – én pointe pr. bullet, max 15 ord.`,
    safety: "Tjek, at ingen forbehold eller tal er forsvundet undervejs."
  },
  {
    id: "p193",
    category: "Egen arbejdsdag",
    field: "Kommunikation",
    type: "micro",
    title: "Out-of-office i kort menneskelig tone",
    when: "Brug den før ferie, kursus eller orlov, når autosvaret skal lyde som et menneske.",
    tags: ["autosvar", "out-of-office", "ferie", "Outlook", "tone"],
    prompt: `Skriv min out-of-office i en kort og menneskelig tone – uden "Tak for din mail" og uden "vil blive besvaret hurtigst muligt".`,
    safety: "Skriv kun, hvem der kan kontaktes, hvis kollegaen har sagt ja. Undgå private detaljer om, hvorfor du er væk."
  },
  {
    id: "p194",
    category: "Skrivning & redigering",
    field: "Kommunikation",
    type: "micro",
    title: "Tre LinkedIn-bios i tre længder",
    when: "Brug den, når din LinkedIn-profil trænger til en opdatering, og du vil se den i tre længder.",
    tags: ["LinkedIn", "profil", "bio", "personlig"],
    prompt: `Lav tre forskellige LinkedIn-bios til min profil i tre længder: kort (én linje), mellem (3 linjer), længere (max 5 linjer).`,
    safety: "Skriv kun det, du selv kan stå inde for, og følg Nykredits retningslinjer for sociale medier."
  },
  // April 2026 · Møder & dokumenter
  {
    id: "p195",
    category: "Møder & samarbejde",
    field: "På tværs",
    type: "deep",
    title: "Mødereferat fra stikord",
    when: "Brug den lige efter et møde, når stikord, transskription eller Teams-noter skal blive til et referat med beslutninger og aftaler.",
    tags: ["referat", "møde", "beslutninger", "aftaler", "Teams"],
    prompt: `Rolle: Du er min mødereferent med god struktursans.

Kontekst: Jeg har lige holdt et møde om [emne, deltagere]. Her er mine stikord/transskription/Teams-noter:

[INDSÆT NOTER]

Metode: Lav et mødereferat struktureret som:
1. Mødetitel, dato, deltagere (markér hvis nogen mangler)
2. Beslutninger (kortest muligt, én linje pr. beslutning)
3. Aftaler / actions (Hvem / Hvad / Hvornår – som tabel)
4. Drøftelser uden konklusion (kort, så vi husker dem næste gang)
5. Næste skridt og næste møde

Maks 1 A4-side. Hvis mine stikord er uklare, skriv [USIKKERT – bekræft] i stedet for at gætte. Marker også [INTERN KILDE NØDVENDIG] hvis der mangler oplysninger jeg skal indhente.`,
    safety: "Kontrollér beslutninger og aftaler med deltagerne, før referatet sendes. Forslag må ikke fremstå som beslutninger.",
    avoid: "Skriv ikke kundenavne eller fortrolige sagsoplysninger i noterne. Følg Nykredits interne regler for optagelse og transskription af møder."
  },
  {
    id: "p196",
    category: "Beslutning & sparring",
    field: "På tværs",
    type: "deep",
    title: "Beslutningsmateriale til styregruppe",
    when: "Brug den, når dine noter og din indstilling skal blive til et oplæg, en styregruppe kan beslutte ud fra.",
    tags: ["styregruppe", "beslutningsoplæg", "indstilling", "alternativer", "projekt"],
    prompt: `Rolle: Du er min skriveassistent med erfaring i beslutningsoplæg til ledelse og styregrupper.

Kontekst: Jeg er [projektleder / specialist / leder] i Nykredit og skal lave et beslutningsoplæg til styregruppen om [emne]. Mine rå noter, data og indstilling:

[INDSÆT MATERIALE]

Metode: Skriv et oplæg på maks 2 A4-sider struktureret som:
1. Beslutning der søges (én præcis sætning)
2. Resumé (3-5 punkter – det styregruppen skal vide hvis de kun læser én sektion)
3. Baggrund og kontekst (kort)
4. Vurdering – to-tre alternativer med pro/con-tabel
5. Indstilling og begrundelse
6. Konsekvenser (økonomi, ressourcer, risici, tidsplan)
7. Næste skridt

Tone: nøgtern og beslutningsorienteret. Markér [USIKKERT] eller [ANTAGELSE] hvor mine data er tynde.`,
    safety: "Indstillingen er din. Kontrollér tal, konsekvenser og alternativer – og afklar alt markeret [USIKKERT] eller [ANTAGELSE], før oplægget sendes."
  },
  {
    id: "p197",
    category: "Projekter & processer",
    field: "På tværs",
    type: "micro",
    title: "Interessentanalyse med power/interest",
    when: "Brug den i starten af et projekt, når du vil vide, hvem der skal involveres – og hvordan.",
    tags: ["interessentanalyse", "power/interest", "projekt", "involvering"],
    prompt: `Lav en interessentanalyse over dette projekt med en power/interest-matrix og forslag til håndtering af hver gruppe.`,
    safety: "Brug roller, ikke navne, og vurdér selv placeringen – Copilot kender ikke organisationen."
  },
  {
    id: "p198",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "micro",
    title: "A4 handout fra PowerPoint-noter",
    when: "Brug den, når publikum skal have noget med hjem, som ikke er en kopi af dine slides.",
    tags: ["handout", "præsentation", "PowerPoint", "A4", "opsummering"],
    prompt: `Lav en 1 A4-side handout-version af mine PowerPoint-noter – kun det publikum skal kunne huske, ikke alt jeg vil sige.`,
    safety: "Læs handouten som en deltager: står de vigtigste tal og pointer rigtigt?"
  },
  {
    id: "p199",
    category: "Præsentation & visualisering",
    field: "På tværs",
    type: "micro",
    title: "Mind map i tekstform",
    when: "Brug den, når du vil se hovedtemaerne i et langt dokument og sammenhængen mellem dem.",
    tags: ["mind map", "overblik", "dokument", "struktur"],
    prompt: `Lav en mind map i tekstform (med indrykninger) over hovedtemaerne i dette dokument.`,
    safety: "Mind mappet viser Copilots læsning. Tjek, at intet vigtigt tema mangler."
  },
  // April 2026 · Personlig sparring
  {
    id: "p200",
    category: "Research & læring",
    field: "På tværs",
    type: "deep",
    title: "Forklar et komplekst koncept enkelt",
    when: "Brug den, når du er stødt på et fagbegreb som duration, IFRS 9 eller LCR og vil kunne forklare det til en kollega.",
    tags: ["fagbegreb", "forklaring", "læring", "analogi", "fire niveauer"],
    prompt: `Rolle: Du er min lærer der er virkelig god til at forklare komplekse emner i hverdagssprog.

Kontekst: Jeg arbejder i Nykredit og har stødt på begrebet [koncept – fx duration / convexity / IRBA / IFRS 9 / SREP / liquidity coverage ratio]. Jeg har en idé, men vil gerne forstå det godt nok til at kunne forklare det til en kollega.

Metode: Forklar det i fire lag:
1. ELI5 – så et barn kan forstå det (én sætning)
2. For en almindelig voksen (3 sætninger med en analogi)
3. For en bankmedarbejder (5-7 linjer med fagudtryk korrekt brugt)
4. Et eksempel på hvor det er praktisk relevant i Nykredit-kontekst

Slut med tre spørgsmål jeg kan stille mig selv for at teste om jeg har forstået det rigtigt.`,
    safety: "Kontrollér definitionen i en godkendt kilde, især hvis den skal bruges over for kunder eller i en rapport."
  },
  {
    id: "p201",
    category: "Beslutning & sparring",
    field: "På tværs",
    type: "deep",
    title: "Brainstorm – vinkler på en udfordring",
    when: "Brug den, når du er kørt fast i et problem og har brug for en sparringspartner, der udfordrer dig.",
    tags: ["brainstorm", "sparring", "antagelser", "nye vinkler", "problemløsning"],
    prompt: `Rolle: Du er min sparringspartner. Du må gerne være kritisk og udfordre mine antagelser, ikke bare bekræfte dem.

Kontekst: Jeg står med følgende udfordring i mit arbejde i Nykredit:

[BESKRIV UDFORDRING – symptomer, hvad jeg har prøvet, hvad jeg tror problemet er]

Metode: Stil mig følgende:
1. Tre spørgsmål jeg sandsynligvis ikke har stillet mig selv endnu
2. To måder mit problem kan være anderledes end jeg tror
3. Tre helt forskellige vinkler på løsninger (ikke bare variationer over samme tema)
4. Et eksempel på hvor en lignende udfordring er løst i en anden branche

Vær konkret. "Det afhænger" og "der findes flere muligheder" tæller ikke som svar.`,
    safety: "Vinklerne er idéer, ikke løsninger. Du vurderer, hvad der passer til Nykredits rammer.",
    avoid: "Beskriv udfordringen uden navne på kunder eller kolleger."
  },
  {
    id: "p202",
    category: "Beslutning & sparring",
    field: "På tværs",
    type: "deep",
    title: "Forbered et svært valg",
    when: "Brug den, når du står mellem to muligheder i dit arbejde eller din karriere og vil tænke det ordentligt igennem.",
    tags: ["valg", "beslutning", "karriere", "pro/con", "refleksion"],
    prompt: `Rolle: Du er min sparringspartner.

Kontekst: Jeg står over for et valg i mit arbejde/karriere i Nykredit:

Valg A: [beskriv]
Valg B: [beskriv]

Mine vigtigste hensyn er [indsæt – fx økonomi, læring, balance, indflydelse, relationer].

Metode: Hjælp mig med at strukturere overvejelsen:
1. En pro/con-tabel for hvert valg (3-5 punkter pr. side)
2. Hvilke af mine hensyn vægter forskelligt mellem A og B?
3. Hvad ville et "skulle-jeg-have-vidst-noget"-spørgsmål være – altså information der ville ændre billedet markant?
4. Tre spørgsmål jeg bør stille mig selv før jeg vælger
5. En modstrøm-betragtning: én grund til at det "rigtige" valg måske er forkert

Du behøver ikke konkludere for mig. Kvaliteten af spørgsmålene er vigtigere end et endeligt svar.`,
    safety: "Copilot kender ikke dit liv. Brug spørgsmålene til at tænke selv – og tal med en, du stoler på."
  },
  {
    id: "p203",
    category: "Analyse & data",
    field: "På tværs",
    type: "micro",
    title: "SWOT med antagelser markeret",
    when: "Brug den, når du vil have et hurtigt overblik over en virksomhed – og vide, hvad der er gæt.",
    tags: ["SWOT", "analyse", "antagelser", "virksomhed"],
    prompt: `Lav en SWOT-analyse på denne virksomhed og marker hvilke punkter der er antagelser jeg bør verificere.`,
    safety: "Verificér de punkter, der er markeret som antagelser, før du bruger analysen."
  },
  {
    id: "p204",
    category: "Kvalitet & sikkerhed",
    field: "På tværs",
    type: "micro",
    title: "Find logiske inkonsistenser",
    when: "Brug den, før et langt dokument går videre, og du vil fange de steder, hvor det modsiger sig selv.",
    tags: ["inkonsistens", "modsigelser", "kvalitet", "dokument", "citater"],
    prompt: `Find tre logiske inkonsistenser eller modsigelser i dette dokument og citer dem ordret.`,
    safety: "Slå citaterne op i dokumentet. Nogle modsigelser er nuancer, der skal stå."
  },
  {
    id: "p205",
    category: "Research & læring",
    field: "På tværs",
    type: "micro",
    title: "Sammenlign A og B i tabel",
    when: "Brug den, når to begreber, produkter eller løsninger ligner hinanden, og du vil se forskellen.",
    tags: ["sammenligning", "tabel", "forskel", "overblik"],
    prompt: `Forklar forskellen på disse to ting i én sammenligningstabel med 5 dimensioner.`,
    safety: "Kontrollér faktuelle forskelle i en kilde – især produktvilkår og regler."
  },
  {
    id: "p206",
    category: "Research & læring",
    field: "På tværs",
    type: "micro",
    title: "Find nye begreber og forklar",
    when: "Brug den, når du læser en tekst fra et område, du ikke kender godt.",
    tags: ["begreber", "ordliste", "læring", "fagsprog"],
    prompt: `Find alle begreber i denne tekst som måske er nye for mig, og forklar hver i én linje.`,
    safety: "Forklaringerne er korte og kan være upræcise. Slå de vigtige op i en godkendt kilde."
  },
  {
    id: "p207",
    category: "Research & læring",
    field: "På tværs",
    type: "micro",
    title: "Quiz på fem spørgsmål",
    when: "Brug den, når du har læst noget vigtigt og vil teste, om det sidder fast.",
    tags: ["quiz", "læring", "forståelse", "test dig selv"],
    prompt: `Lav en quiz på fem spørgsmål med svar bagefter, så jeg kan teste om jeg har forstået denne tekst.`,
    safety: "Tjek facit mod teksten – Copilot kan også tage fejl i sine egne svar."
  },
  {
    id: "p208",
    category: "Research & læring",
    field: "På tværs",
    type: "micro",
    title: "Fem opfølgningsspørgsmål til tekst",
    when: "Brug den, når du vil læse en tekst mere kritisk – eller forberede et møde med den, der skrev den.",
    tags: ["spørgsmål", "kritisk læsning", "interview", "forberedelse"],
    prompt: `Lav fem opfølgningsspørgsmål til denne tekst som om jeg skulle interviewe forfatteren.`,
    safety: "Spørgsmålene er et udgangspunkt. Vælg dem, der faktisk betyder noget for dig."
  },
  {
    id: "p209",
    category: "Beslutning & sparring",
    field: "På tværs",
    type: "micro",
    title: "Find huller i mit ræsonnement",
    when: "Brug den, når du er ved at overbevise dig selv og gerne vil finde svaghederne, før andre gør.",
    tags: ["ræsonnement", "kritik", "svage led", "sparring"],
    prompt: `Find fem huller eller svage led i mit ræsonnement og prioritér dem efter alvor.`,
    safety: "Kritikken er en idéliste. Du vurderer, hvilke huller der er reelle."
  }
];

window.PROMPTS = PROMPTS;
