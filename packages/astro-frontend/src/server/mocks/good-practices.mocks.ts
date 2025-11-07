import { match } from "ts-pattern";
import type { SupportedLanguage } from "../../i18n/types.i18n";
import type { GoodPractice, StrapiEntity } from "pagopa-interop-public-models";

const goodPracticesDataMockIt: StrapiEntity<GoodPractice>[] = [
  {
    data: {
      id: 12,
      documentId: "zflr58yvojfzixgi4ob4jxfq",
      title: "Mobilità senza barriere con il CUDE interoperabile",
      slug: "mobilita-senza-barriere-con-il-cude-interoperabile",
      publishedDate: "2025-10-17",
      createdAt: "2025-10-16T08:10:56.095Z",
      updatedAt: "2025-10-17T12:40:30.370Z",
      publishedAt: "2025-10-17T12:40:30.381Z",
      locale: "it",
      isFeaturedInHomepage: true,
      eserviceId: [
        {
          eserviceId: "36bc868c-ab79-4e4c-b205-f399a5e504bb",
        },
        {
          eserviceId: "2442f21e-e0dd-4a5c-ad6f-3ace65f6d315",
        },
        {
          eserviceId: "641285c2-eb00-48a5-b20e-0c109295063b",
        },
        {
          eserviceId: "d15eda8d-d3e6-4c8c-91a7-68acd62be5a8",
        },
      ],
      tenantMacrocategories: [
        {
          id: 2,
          label: "Comuni",
        },
      ],
      category: "Mobilità e Trasporti",
      body: [
        {
          __component: "buona-pratica.description",
          id: 1,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Il ",
                },
                {
                  type: "text",
                  text: "CUDE",
                  bold: true,
                },
                {
                  type: "text",
                  text: " (Contrassegno Unificato Disabili Europeo) è il documento che permette alle persone con disabilità di accedere alle ZTL e parcheggiare negli stalli riservati. Con la digitalizzazione e centralizzazione della ",
                },
                {
                  type: "link",
                  url: "https://www.ilportaledellautomobilista.it/web/portale-automobilista/piattaforma-cude",
                  children: [
                    {
                      type: "text",
                      text: "banca dati dei CUDE",
                    },
                  ],
                },
                {
                  type: "text",
                  text: " e la sua erogazione tramite la Piattaforma Digitale Nazionale Dati (PDND), i comuni possono consultare in tempo reale i dati dei contrassegni rilasciati da altri enti, riconoscere automaticamente i diritti di accesso e di sosta delle persone con disabilità su tutto il territorio nazionale, eliminando la necessità di registrazioni manuali delle targhe. L’obiettivo è che tutti i Comuni alimentino la banca dati centrale, così da garantire che le persone aventi diritto, possano circolare nelle ZTL o parcheggiare negli stalli riservati su tutto il territorio nazionale, senza dover fare nuove richieste ogni volta.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.image",
          id: 19,
          caption:
            "Schema del flusso d’interoperabilità: utilizzo dell’API del CUDE (Contrassegno Unico Disabili Europeo)",
          image: {
            id: 9,
            documentId: "xzdko1cg6j66un763ziw4jrk",
            name: "what-s-inside-a-black-hole",
            alternativeText:
              "Schema del flusso di utilizzo dell’API CUDE che evidenzia l’integrazione dei comuni con la piattaforma PDND.",
            caption:
              "Schema del flusso d’interoperabilità: utilizzo dell’API del CUDE (Contrassegno Unico Disabili Europeo)",
            width: 800,
            height: 466,
            hash: "what_s_inside_a_black_hole_b1560bb7f4",
            ext: ".jpeg",
            mime: "image/jpeg",
            size: 7.5,
            url: "https://api-gov.dev.interop.pagopa.it/static/01_cude.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2025-10-14T14:20:42.069Z",
            updatedAt: "2025-10-17T12:40:17.717Z",
            publishedAt: "2025-10-14T14:20:42.069Z",
          },
        },
        {
          __component: "buona-pratica.title",
          id: 4,
          Text: "Cosa cambia con la PDND",
        },
        {
          __component: "buona-pratica.description",
          id: 9,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "In precedenza, se il cittadino titolare del CUDE si fosse recato in un comune non aderente alla banca dati nazionale, avrebbe dovuto seguire l’iter precedente: comunicare preventivamente la targa al Comune, seguire procedure diverse per ogni amministrazione ed esporre sempre il contrassegno cartaceo per evitare sanzioni. Ora, grazie a questo sistema che permette di accedere in tempo reale ai dati aggiornati, i cittadini con contrassegno valido possono circolare e parcheggiare in tutti i comuni che hanno aderito alla banca dati nazionale CUDE (un numero sempre crescente e destinato ad aumentare), senza dover presentare nuove richieste a ogni spostamento. Con l’integrazione delle API disponibili su PDND, inoltre, i varchi elettronici riconoscono automaticamente il veicolo associato al CUDE, permettendo l’accesso alle ZTL e la sosta negli stalli riservati su tutto il territorio nazionale. ",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 5,
          Text: "Vantaggi per la Pubblica Amministrazione",
        },
        {
          __component: "buona-pratica.description",
          id: 10,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Riduzione della burocrazia",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " con meno modulistica e meno pratiche da gestire manualmente con conseguente risparmio economico per l’ente",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Dati certi e sempre aggiornati",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", senza duplicare archivi locali e grazie al collegamento diretto con le fonti ufficiali",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Maggiore efficienza",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " dei varchi elettronici, grazie al riconoscimento automatico dei veicoli con autorizzazione",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Contrasto all’uso improprio",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " di CUDE falsi o scaduti",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 6,
          Text: "Vantaggi per il cittadino",
        },
        {
          __component: "buona-pratica.description",
          id: 11,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Nessun adempimento aggiuntivo",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " per il riconoscimento dei diritti associati al CUDE",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Semplificazione",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " negli spostamenti da un Comune all’altro per lavoro, turismo e salute.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.esempio-concreto",
          id: 8,
          example: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Il comune di Mortara ha integrato con successo la fruizione delle api per l’accesso alla banca dati del CUDE nei suoi sistemi gestionali e grazie a questo lavoro oggi la Polizia locale può accedere direttamente, tramite i palmari in dotazione, ai dati ed effettuare i controlli sui mezzi che usufruiscono dei diritti legati al contrassegno. Questo permette a chi parcheggia negli stalli preposti avendone diritto, per esempio anche a chi non lo ha esposto in modo visibile, di evitare sanzioni, aiuta inoltre ad individuare un uso fraudolento dei CUDE.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    data: {
      id: 12,
      documentId: "zflr58yvojfzixgi4ob4jxfq",
      title:
        "Verifica automatica della frequenza: accesso più rapido alle borse di studio",
      slug: "verifica-automatica-della-frequenza-accesso-piu-rapido-alle-borse-di-studio",
      publishedDate: "2025-10-17",
      createdAt: "2025-10-16T08:10:56.095Z",
      updatedAt: "2025-10-17T12:40:30.370Z",
      publishedAt: "2025-10-17T12:40:30.381Z",
      locale: "it",
      isFeaturedInHomepage: true,
      eserviceId: [
        {
          eserviceId: "463cf9fe-9d72-463e-922d-e200ba45fdae",
        },
      ],
      tenantMacrocategories: [
        {
          id: 3,
          label: "Regioni e Province Autonome",
        },
        {
          id: 5,
          label: "Province e Città metropolitane",
        },
        {
          id: 1,
          label: "PA centrali",
        },
        {
          id: 2,
          label: "Comuni",
        },
      ],
      category: "Istruzione",
      body: [
        {
          __component: "buona-pratica.description",
          id: 1,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Nell’ambito delle politiche per il diritto allo studio, le Regioni e altri enti erogano borse di studio a favore degli studenti delle scuole secondarie di secondo grado, al fine di sostenere l’acquisto di libri di testo, strumenti e servizi utili alla crescita culturale e formativa.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.description",
          id: 1,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Per garantire la corretta attribuzione dei benefici, le strutture competenti possono avvalersi delle API dell’",
                },
                {
                  type: "link",
                  url: "https://anist.istruzione.gov.it/",
                  children: [
                    {
                      type: "text",
                      text: "Anagrafe Nazionale dell’Istruzione (ANIST)",
                    },
                  ],
                },
                {
                  type: "text",
                  text: " messe a disposizione su PDND dal Ministero dell’istruzione e del merito (MIM), che consentono l’accertamento automatico della frequenza scolastica.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.image",
          id: 19,
          caption:
            "Schema del flusso d’interoperabilità: utilizzo dell’API di PDND per l’accesso alle borse di studio",
          image: {
            id: 9,
            documentId: "xzdko1cg6j66un763ziw4jrk",
            name: "what-s-inside-a-black-hole",
            alternativeText:
              "Schema del flusso di utilizzo dell’API di verifica della frequenza scolastica che evidenzia l’integrazione con la piattaforma PDND.",
            caption:
              "Schema del flusso d’interoperabilità: utilizzo dell’API di PDND per l’accesso alle borse di studio",
            width: 800,
            height: 466,
            hash: "what_s_inside_a_black_hole_b1560bb7f4",
            ext: ".jpeg",
            mime: "image/jpeg",
            size: 7.5,
            url: "https://api-gov.dev.interop.pagopa.it/static/02_borse_studio.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2025-10-14T14:20:42.069Z",
            updatedAt: "2025-10-17T12:40:17.717Z",
            publishedAt: "2025-10-14T14:20:42.069Z",
          },
        },
        {
          __component: "buona-pratica.title",
          id: 4,
          Text: "Cosa cambia con la PDND",
        },
        {
          __component: "buona-pratica.description",
          id: 9,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "In assenza di integrazione del processo di verifica tramite PDND, le famiglie devono presentare certificati o autodichiarazioni per attestare la frequenza scolastica, con procedure diverse e tempi lunghi.Con la PDND e le API di ANIST, gli enti possono accertare automaticamente la frequenza consultando i dati ufficiali del Ministero, rendendo i controlli più rapidi, standardizzati e sicuri, e accelerando l’erogazione dei contributi.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 5,
          Text: "Vantaggi per la Pubblica Amministrazione",
        },
        {
          __component: "buona-pratica.description",
          id: 10,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Riduzione della burocrazia",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " eliminando la necessità di raccogliere e gestire certificati o autodichiarazioni da parte delle famiglie, con conseguente risparmio economico e amministrativo",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Dati certi, aggiornati e affidabili",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", grazie all’accesso automatico e standardizzato via API ai dati dell’Anagrafe Nazionale dell’Istruzione",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Maggiore efficienza dei processi",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", con controlli più rapidi, uniformi e sicuri per accelerare l’erogazione dei benefici",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 6,
          Text: "Vantaggi per il cittadino",
        },
        {
          __component: "buona-pratica.description",
          id: 11,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Semplificazione",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " nell’accesso alle borse di studio, con procedure più rapide e uniformi su tutto il territorio",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Nessun adempimento aggiuntivo",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " per reperire o presentare certificati di frequenza scolastica, grazie all’accertamento automatico da parte delle amministrazioni",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.esempio-concreto",
          id: 8,
          example: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Per l’anno scolastico 2024/2025, quasi 30.000 studenti campani, a fronte di oltre 60000 domande pervenute, hanno ricevuto un sostegno economico per la crescita culturale a supporto della loro formazione grazie al bando #IoStudio della Regione Campania. In passato le famiglie erano tenute a presentare certificati o autodichiarazioni per attestare la frequenza scolastica, con tempi lunghi e procedure diverse da scuola a scuola. Con l’integrazione tra i sistemi regionali e la PDND, invece, la Regione Campania ha potuto accertare la frequenza scolastica direttamente dai dati del Ministero dell’istruzione e del merito tramite gli e-service esposti a catalogo, in modo automatico e senza passaggi aggiuntivi per i cittadini. L’assegnazione delle borse di studio è così diventata più rapida, trasparente e mirata, garantendo che i fondi arrivassero tempestivamente a chi ne avesse davvero diritto.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    data: {
      id: 12,
      documentId: "zflr58yvojfzixgi4ob4jxfq",
      title: "Erogare bonus ai cittadini in modo equo ed efficiente",
      slug: "erogare-bonus-ai-cittadini-in-modo-equo-ed-efficiente",
      publishedDate: "2025-10-17",
      createdAt: "2025-10-16T08:10:56.095Z",
      updatedAt: "2025-10-17T12:40:30.370Z",
      publishedAt: "2025-10-17T12:40:30.381Z",
      locale: "it",
      isFeaturedInHomepage: true,
      eserviceId: [
        {
          eserviceId: "843ac013-941a-4afe-8243-e668142e73e6",
        },
        {
          eserviceId: "8ffc6245-0ab1-4e2e-8423-6e1a855c320a",
        },
        {
          eserviceId: "198ac93e-9b84-4f88-a663-b343025cebfe",
        },
        {
          eserviceId: "f7546884-e49d-4f42-bdc7-71724be9cfb4",
        },
        {
          eserviceId: "9d9fc812-0410-4ceb-a062-a987e3eb79fa",
        },
        {
          eserviceId: "2303d392-6b30-462b-a9e6-6fe99498cc53",
        },
        {
          eserviceId: "8fe27f7f-b559-4c51-90b6-a4d6eae4ae01",
        },
        {
          eserviceId: "3ec6f973-36ab-4816-8e96-22ffb512648c",
        },
      ],
      tenantMacrocategories: [
        {
          id: 3,
          label: "Regioni e Province Autonome",
        },
        {
          id: 1,
          label: "PA centrali",
        },
        {
          id: 2,
          label: "Comuni",
        },
      ],
      category: "Welfare",
      body: [
        {
          __component: "buona-pratica.description",
          id: 1,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "I bonus economici prevedono la presentazione di documenti e autodichiarazioni per verificare la legittimità della richiesta, con procedure diverse tra enti e tempi lunghi per i controlli. Attraverso le API disponibili su PDND gli enti possono verificare automaticamente i requisiti dei cittadini recuperando dati, come ISEE e stato di famiglia, direttamente alla fonte, durante la presentazione dell’istanza da parte del cittadino, senza che quest’ultimo debba fornirli con certificati o autodichiarazioni, attuando così il principio del ",
                },
                {
                  type: "text",
                  text: "once only",
                  italic: true,
                },
                {
                  type: "text",
                  text: ", per cui una persona non deve fornire alla Pubblica Amministrazione i dati già in suo possesso. ",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.image",
          id: 19,
          caption:
            "Schema del flusso d’interoperabilità: utilizzo delle API di PDND per l’accesso ai bonus",
          image: {
            id: 9,
            documentId: "xzdko1cg6j66un763ziw4jrk",
            name: "what-s-inside-a-black-hole",
            alternativeText:
              "Schema del flusso di utilizzo delle API di ISEE e stato di famiglia che evidenzia l’integrazione con la PDND",
            caption:
              "Schema del flusso d’interoperabilità: utilizzo delle API di PDND per l’accesso ai bonus",
            width: 800,
            height: 466,
            hash: "what_s_inside_a_black_hole_b1560bb7f4",
            ext: ".jpeg",
            mime: "image/jpeg",
            size: 7.5,
            url: "https://api-gov.dev.interop.pagopa.it/static/03_bonus_cittadini.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2025-10-14T14:20:42.069Z",
            updatedAt: "2025-10-17T12:40:17.717Z",
            publishedAt: "2025-10-14T14:20:42.069Z",
          },
        },
        {
          __component: "buona-pratica.title",
          id: 4,
          Text: "Cosa cambia con la PDND",
        },
        {
          __component: "buona-pratica.description",
          id: 9,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "In passato, i cittadini dovevano raccogliere e presentare certificati o autodichiarazioni per dimostrare il possesso di determinati requisiti (es. ISEE, stato di famiglia). Gli enti li controllavano successivamente con istruttorie manuali, allungando i tempi e aumentando il rischio di errori. Oggi l’ente può accedere direttamente alle banche dati ufficiali esposte sulla PDND per la verifica di requisiti, semplificando notevolmente la procedura, riducendo i tempi per l’erogazione e i possibili errori.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 5,
          Text: "Vantaggi per la Pubblica Amministrazione",
        },
        {
          __component: "buona-pratica.description",
          id: 10,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Riduzione della burocrazia",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " grazie all’eliminazione delle istruttorie manuali per la verifica dei requisiti e la digitalizzazione del processo con risparmio di tempo e risorse per l’ente",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Dati certi",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", aggiornati e affidabili, recuperati direttamente dalle banche dati ufficiali (es. INPS, ANPR) in tempo reale",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Maggiore efficienza dei processi",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", con controlli automatizzati e tracciabilità completa delle operazioni",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 6,
          Text: "Vantaggi per il cittadino",
        },
        {
          __component: "buona-pratica.description",
          id: 11,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Semplificazione",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " nella presentazione delle domande e nella verifica dei requisiti per accedere ai bonus",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Nessun adempimento aggiuntivo",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " per fornire dati o documenti già in possesso della Pubblica Amministrazione, grazie al recupero automatico dalle fonti ufficiali",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.nota-tecnica",
          id: 8,
          example: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "L'e-service di consultazione dell’attestazione o dell’indicatore ISEE viene erogato in 3 varianti pensate per target e utilizzi diversi:",
                },
              ],
            },
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Consultazione Attestazione/Indicatore ISEE",
                      underline: true,
                    },
                    {
                      type: "text",
                      text: ": è consentita la consultazione di tutti i cittadini ed è richiesto lo scambio di certificati digitali tra enti, al fine di abilitare meccanismi di autenticazione reciproca ",
                    },
                    {
                      type: "text",
                      text: "Indicato per grandi comuni e PA centrali",
                      bold: true,
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Consultazione Attestazione/Indicatore ISEE Operatori",
                      underline: true,
                    },
                    {
                      type: "text",
                      text: ": è consentita la consultazione di tutti i cittadini ed è richiesto l’invio ad INPS dei dati relativi all’operatore che effettua l’operazione e che si è autenticato tramite SPID o CIE ",
                    },
                    {
                      type: "text",
                      text: "Indicato per i piccoli comuni",
                      bold: true,
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Consultazione Attestazione/Indicatore Residenti ISEE",
                      underline: true,
                    },
                    {
                      type: "text",
                      text: ": è consentita ai comuni la sola consultazione dei cittadini residenti all’interno del proprio territorio ",
                    },
                    {
                      type: "text",
                      text: "Solo per i comuni",
                      bold: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.esempio-concreto",
          id: 8,
          example: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "In occasione dell’attivazione Bonus bici, la regione Emilia-Romagna ha registrato un’elevata partecipazione da parte dei cittadini, con migliaia di domande presentate in tempi brevi. In passato, ogni richiesta avrebbe comportato la raccolta manuale dei documenti, l’invio di autocertificazioni e controlli successivi su ogni pratica da parte degli uffici competenti, con il rischio di impattare significativamente sui tempi di erogazione dei fondi. Integrando la PDND nei propri sistemi, la Regione ha potuto verificare in automatico la residenza di tutti i richiedenti tramite i dati dell’ANPR. L’istruttoria è così diventata molto più veloce e trasparente, permettendo di destinare i contributi in modo puntuale e senza chiedere documentazione aggiuntiva ai cittadini.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    data: {
      id: 12,
      documentId: "zflr58yvojfzixgi4ob4jxfq",
      title: "Dati anagrafici precompilati per servizi più efficienti",
      slug: "dati-anagrafici-precompilati-per-servizi-piu-efficienti",
      publishedDate: "2025-10-17",
      createdAt: "2025-10-16T08:10:56.095Z",
      updatedAt: "2025-10-17T12:40:30.370Z",
      publishedAt: "2025-10-17T12:40:30.381Z",
      locale: "it",
      isFeaturedInHomepage: true,
      eserviceId: [
        {
          eserviceId: "bfc9fb06-8886-45a4-9ce9-bc93264958ce",
        },
        {
          eserviceId: "8fe27f7f-b559-4c51-90b6-a4d6eae4ae01",
        },
        {
          eserviceId: "3ec6f973-36ab-4816-8e96-22ffb512648c",
        },
        {
          eserviceId: "f978f8b9-de00-45ba-801b-1b4a60b547d9",
        },
        {
          eserviceId: "a152b46b-f330-494d-9845-82c460bc9fcf",
        },
        {
          eserviceId: "5e023f06-e5d4-4f8a-b7b8-299b97d2abee",
        },
      ],
      tenantMacrocategories: [],
      category: 'Servizi al cittadino',
      body: [
        {
          __component: "buona-pratica.description",
          id: 1,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Il principio del ",
                },
                {
                  type: "text",
                  text: "once only",
                  italic: true,
                },
                {
                  type: "text",
                  text: " prevede che il cittadino fornisca i propri dati una sola volta alla Pubblica Amministrazione, senza doverli reinserire a ogni nuova richiesta di servizio.Grazie alla PDND, gli enti possono accedere in modo sicuro e automatico ai dati già disponibili presso altre amministrazioni e precompilare i campi dei moduli online durante la presentazione delle istanze. Questo permette di velocizzare le procedure per il cittadino che non deve autocertificare dati, ridurre la burocrazia e migliorare la qualità e la coerenza dei dati condivisi tra enti.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.image",
          id: 19,
          caption:
            " Schema del flusso d’interoperabilità: utilizzo delle API di PDND per la precompilazione di dati anagrafici",
          image: {
            id: 9,
            documentId: "xzdko1cg6j66un763ziw4jrk",
            name: "what-s-inside-a-black-hole",
            alternativeText:
              "Schema del flusso di utilizzo delle API di ANPR per offrire servizi al cittadino che evidenzia l’integrazione con la PDND",
            caption:
              " Schema del flusso d’interoperabilità: utilizzo delle API di PDND per la precompilazione di dati anagrafici",
            width: 800,
            height: 466,
            hash: "what_s_inside_a_black_hole_b1560bb7f4",
            ext: ".jpeg",
            mime: "image/jpeg",
            size: 7.5,
            url: "https://api-gov.dev.interop.pagopa.it/static/04_dati_anagrafici.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2025-10-14T14:20:42.069Z",
            updatedAt: "2025-10-17T12:40:17.717Z",
            publishedAt: "2025-10-14T14:20:42.069Z",
          },
        },
        {
          __component: "buona-pratica.title",
          id: 4,
          Text: "Cosa cambia con la PDND",
        },
        {
          __component: "buona-pratica.description",
          id: 9,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Prima, per ogni nuova richiesta di servizio, ogni cittadino era tenuto a inserire manualmente i propri dati, anche se li aveva già forniti in precedenza alla Pubblica Amministrazione. Questa modalità comportava una duplicazione delle informazioni, un aumento del rischio di errori e la necessità di controlli successivi da parte degli enti, con conseguenti rallentamenti nei processi. Grazie alla Piattaforma Digitale Nazionale Dati, l’ente può ora attingere al dato direttamente alla fonte ufficiale nel momento in cui il cittadino utilizza un servizio digitale.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 5,
          Text: "Vantaggi per la Pubblica Amministrazione",
        },
        {
          __component: "buona-pratica.description",
          id: 10,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Riduzione della burocrazia",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " grazie all’eliminazione dell’inserimento manuale dei dati e dei controlli ex post sulle dichiarazioni dei cittadini",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Dati certi, aggiornati e affidabili",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", recuperati automaticamente dalle fonti ufficiali (es. ANPR) senza duplicare archivi locali",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Maggiore efficienza dei processi",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", con procedure più snelle, riduzione degli errori e risparmio di tempo e risorse nella gestione dei servizi",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 6,
          Text: "Vantaggi per il cittadino",
        },
        {
          __component: "buona-pratica.description",
          id: 11,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Semplificazione",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " nella compilazione delle richieste online, grazie alla precompilazione automatica dei dati già in possesso della Pubblica Amministrazione",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Nessun adempimento aggiuntivo",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " per reinserire dati o fornire informazioni già dichiarate in precedenza, nel rispetto del principio del ",
                    },
                    {
                      type: "text",
                      text: "once only",
                      italic: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.esempio-concreto",
          id: 8,
          example: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Nel Comune di Bordighera, le famiglie che necessitano del servizio di trasporto scolastico per accompagnare i propri figli possono iscriversi online sul sito del comune. In passato, la procedura prevedeva la compilazione di tutti i dati anagrafici e familiari, l’allegazione di documenti e attendere i successivi controlli da parte degli uffici comunali. Oggi, grazie all’integrazione delle API dell’",
                },
                {
                  type: "link",
                  url: "https://www.anagrafenazionale.interno.it/",
                  children: [
                    {
                      type: "text",
                      text: "Anagrafe Nazionale della Popolazione Residente",
                    },
                  ],
                },
                {
                  type: "text",
                  text: " (ANPR) con i servizi digitali del comune, la compilazione è automatica: al momento dell’iscrizione, il sistema recupera in tempo reale le informazioni su residenza e stato di famiglia. In questo modo è necessario solo confermare i dati, e la pratica è immediatamente pronta per essere gestita dagli uffici, senza passaggi aggiuntivi o errori di trascrizione.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.nota-tecnica",
          id: 8,
          example: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Alcune API del Ministero dell’Interno sono erogate in due varianti: con approvazione automatica o manuale. Importante: prima di richiedere la fruizione controlla i requisiti di accesso nella scheda API per verificare se il tuo Ente può accedere a quelle con approvazione automatica.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

const goodPracticesDataMockEn: StrapiEntity<GoodPractice>[] = [
  {
    data: {
      id: 12,
      documentId: "zflr58yvojfzixgi4ob4jxfq",
      title: "Barrier-free mobility with the interoperable CUDE",
      slug: "mobilita-senza-barriere-con-il-cude-interoperabile",
      publishedDate: "2025-10-17",
      createdAt: "2025-10-16T08:10:56.095Z",
      updatedAt: "2025-10-17T12:40:30.370Z",
      publishedAt: "2025-10-17T12:40:30.381Z",
      locale: "en",
      isFeaturedInHomepage: true,
      eserviceId: [
        {
          eserviceId: "36bc868c-ab79-4e4c-b205-f399a5e504bb",
        },
        {
          eserviceId: "2442f21e-e0dd-4a5c-ad6f-3ace65f6d315",
        },
        {
          eserviceId: "641285c2-eb00-48a5-b20e-0c109295063b",
        },
        {
          eserviceId: "d15eda8d-d3e6-4c8c-91a7-68acd62be5a8",
        },
      ],
      tenantMacrocategories: [
        {
          id: 2,
          label: "Municipalities",
        },
      ],
      category: "Mobility and Transport",
      body: [
        {
          __component: "buona-pratica.description",
          id: 1,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "The ",
                },
                {
                  type: "text",
                  text: "CUDE",
                  bold: true,
                },
                {
                  type: "text",
                  text: " (European Unified Disabled Parking Permit) is the document that allows people with disabilities to access restricted traffic zones (ZTL) and park in designated spaces. Through the digitalisation and centralisation of the ",
                },
                {
                  type: "link",
                  url: "https://www.ilportaledellautomobilista.it/web/portale-automobilista/piattaforma-cude",
                  children: [
                    {
                      type: "text",
                      text: "CUDE database",
                    },
                  ],
                },
                {
                  type: "text",
                  text: ", and its distribution via the National Data Platform (PDND), municipalities can now consult, in real time, the permits issued by other public administrations. This enables them to automatically recognise parking and access rights for people with disabilities across the entire national territory, eliminating the need for manual vehicle registration. The goal is for all municipalities to contribute to the central database, ensuring that eligible citizens can circulate within restricted traffic zones or park in designated spaces anywhere in Italy, without having to submit new requests each time.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.image",
          id: 19,
          caption:
            "Interoperability flow diagram: use of CUDE API (European Unified Disability Badge)",
          image: {
            id: 9,
            documentId: "xzdko1cg6j66un763ziw4jrk",
            name: "what-s-inside-a-black-hole",
            alternativeText:
              "CUDE API usage flow diagram highlighting the integration of municipalities with the PDND platform.",
            caption:
              "Interoperability flow diagram: use of CUDE API (European Unified Disability Badge)",
            width: 800,
            height: 466,
            hash: "what_s_inside_a_black_hole_b1560bb7f4",
            ext: ".jpeg",
            mime: "image/jpeg",
            size: 7.5,
            url: "https://api-gov.dev.interop.pagopa.it/static/01_cude.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2025-10-14T14:20:42.069Z",
            updatedAt: "2025-10-17T12:40:17.717Z",
            publishedAt: "2025-10-14T14:20:42.069Z",
          },
        },
        {
          __component: "buona-pratica.title",
          id: 4,
          Text: "What’s new with PDND",
        },
        {
          __component: "buona-pratica.description",
          id: 9,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Previously, if a CUDE holder travelled to a municipality not connected to the national database, they had to follow the old procedure: manually communicate their license plate to the local administration, comply with varying procedures for each municipality, and always display the paper permit to avoid fines. Now, thanks to real-time access to up-to-date data, citizens with a valid CUDE can drive and park in all municipalities connected to the national CUDE database (a number that is steadily increasing) without having to submit new requests every time they move. Through the integration of APIs available on PDND, electronic gates automatically recognise vehicles associated with a valid CUDE, granting access to restricted traffic zones (ZTL) and parking areas reserved for people with disabilities across the country.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 5,
          Text: "Benefits for Public Bodies",
        },
        {
          __component: "buona-pratica.description",
          id: 10,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Reduced bureaucracy",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " thanks to less paperwork and fewer manual processes, resulting in cost savings for the administration",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Reliable and always up-to-date data",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " through direct connection to official sources, avoiding duplication of local databases",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Greater efficiency",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " of electronic access gates through automatic vehicle recognition",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Prevention of misuse",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " and fraud involving expired or counterfeit CUDE permits",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 6,
          Text: "Benefits for People",
        },
        {
          __component: "buona-pratica.description",
          id: 11,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "No additional actions required",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " to validate CUDE-related rights",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Simplified travel",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " between municipalities for work, tourism and healthcare",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.esempio-concreto",
          id: 8,
          example: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "The Municipality of Mortara has successfully integrated the APIs for accessing the CUDE database into its management systems. Thanks to this work, local police officers can now directly access the data from their handheld devices to verify vehicles that benefit from CUDE-related rights. This allows eligible drivers who park in reserved spaces, even when the physical permit is not visibly displayed, to avoid fines, while also helping authorities identify fraudulent use of CUDE permits.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    data: {
      id: 12,
      documentId: "zflr58yvojfzixgi4ob4jxfq",
      title:
        "Automatic attendance verification: faster access to student grants",
      slug: "verifica-automatica-della-frequenza-accesso-piu-rapido-alle-borse-di-studio",
      publishedDate: "2025-10-17",
      createdAt: "2025-10-16T08:10:56.095Z",
      updatedAt: "2025-10-17T12:40:30.370Z",
      publishedAt: "2025-10-17T12:40:30.381Z",
      locale: "en",
      isFeaturedInHomepage: true,
      eserviceId: [
        {
          eserviceId: "463cf9fe-9d72-463e-922d-e200ba45fdae",
        },
      ],
      tenantMacrocategories: [
        {
          id: 3,
          label: "Regions and Autonomous Provinces",
        },
        {
          id: 5,
          label: "Provinces and Metropolitan Cities",
        },
        {
          id: 1,
          label: "Central Public Administrations",
        },
        {
          id: 2,
          label: "Municipalities",
        },
      ],
      category: "Education",
      body: [
        {
          __component: "buona-pratica.description",
          id: 1,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "As part of education support policies, Regions and other public bodies provide scholarships to students in upper secondary schools to help cover the cost of textbooks, learning materials, and services that support their educational growth.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "To ensure the correct allocation of benefits, the competent authorities can use the APIs of the ",
                },
                {
                  type: "link",
                  url: "https://anist.istruzione.gov.it/",
                  children: [
                    {
                      type: "text",
                      text: "National Education Register (ANIST)",
                    },
                  ],
                },
                {
                  type: "text",
                  text: ",  made available on PDND by the Ministry of Education and Merit (MIM). These APIs enable the automatic verification of school attendance.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.image",
          id: 19,
          caption:
            "Interoperability flow diagram: use of PDND API for accessing scholarships",
          image: {
            id: 9,
            documentId: "xzdko1cg6j66un763ziw4jrk",
            name: "what-s-inside-a-black-hole",
            alternativeText:
              "School attendance verification API usage flow diagram highlighting integration with the PDND platform.",
            caption:
              "Interoperability flow diagram: use of PDND API for accessing scholarships",
            width: 800,
            height: 466,
            hash: "what_s_inside_a_black_hole_b1560bb7f4",
            ext: ".jpeg",
            mime: "image/jpeg",
            size: 7.5,
            url: "https://api-gov.dev.interop.pagopa.it/static/02_borse_studio.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2025-10-14T14:20:42.069Z",
            updatedAt: "2025-10-17T12:40:17.717Z",
            publishedAt: "2025-10-14T14:20:42.069Z",
          },
        },
        {
          __component: "buona-pratica.title",
          id: 4,
          Text: "What’s new with PDND",
        },
        {
          __component: "buona-pratica.description",
          id: 9,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Without PDND integration, families are required to submit certificates or self declarations to prove school attendance, a process that varies by institution and often involves long waiting times. With PDND and the ANIST APIs, public bodies can automatically verify attendance by consulting official data from the Ministry of Education. This makes verification processes faster, standardised, and more secure, and speeds up the distribution of financial support.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 5,
          Text: "Benefits for Public Bodies",
        },
        {
          __component: "buona-pratica.description",
          id: 10,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: " Reduction of bureaucracy",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", eliminating the need to collect and process certificates or self-declarations from families, resulting in administrative and financial savings",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Reliable and up-to-date data",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", thanks to automatic and standardised access via APIs to the National Education Register",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Greater process efficiency",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", with faster, consistent, and more secure checks that accelerate the allocation of benefits",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 6,
          Text: "Benefits for people",
        },
        {
          __component: "buona-pratica.description",
          id: 11,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Simplified access",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " to scholarships, with faster and more uniform procedures nationwide",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "No additional requirements",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: " to obtain or submit school attendance certificates, thanks to automatic verification by public administrations",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.esempio-concreto",
          id: 8,
          example: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "For the 2024/2025 school year, nearly 30,000 students in the Campania Region, out of more than 60,000 applicants, received financial support for their educational and cultural development through the #IoStudio programme. In the past, families had to provide certificates or self-declarations to prove school attendance, facing lengthy and inconsistent procedures from one school to another. Thanks to the integration between the regional systems and PDND, the Campania Region can now verify attendance directly from the Ministry of Education and Merit’s official data, using the available e-services automatically and without additional steps for citizens. This has made the scholarship allocation process faster, more transparent, and better targeted, ensuring that funds are delivered promptly to those who are truly entitled to them.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    data: {
      id: 12,
      documentId: "zflr58yvojfzixgi4ob4jxfq",
      title: "Delivering financial bonuses to citizens fairly and efficiently",
      slug: "erogare-bonus-ai-cittadini-in-modo-equo-ed-efficiente",
      publishedDate: "2025-10-17",
      createdAt: "2025-10-16T08:10:56.095Z",
      updatedAt: "2025-10-17T12:40:30.370Z",
      publishedAt: "2025-10-17T12:40:30.381Z",
      locale: "en",
      isFeaturedInHomepage: true,
      eserviceId: [
        {
          eserviceId: "843ac013-941a-4afe-8243-e668142e73e6",
        },
        {
          eserviceId: "8ffc6245-0ab1-4e2e-8423-6e1a855c320a",
        },
        {
          eserviceId: "198ac93e-9b84-4f88-a663-b343025cebfe",
        },
        {
          eserviceId: "f7546884-e49d-4f42-bdc7-71724be9cfb4",
        },
        {
          eserviceId: "9d9fc812-0410-4ceb-a062-a987e3eb79fa",
        },
        {
          eserviceId: "2303d392-6b30-462b-a9e6-6fe99498cc53",
        },
        {
          eserviceId: "8fe27f7f-b559-4c51-90b6-a4d6eae4ae01",
        },
        {
          eserviceId: "3ec6f973-36ab-4816-8e96-22ffb512648c",
        },
      ],
      tenantMacrocategories: [
        {
          id: 3,
          label: "Regions and Autonomous Provinces",
        },
        {
          id: 1,
          label: "Central Public Administrations",
        },
        {
          id: 2,
          label: "Municipalities",
        },
      ],
      category: "Welfare",
      body: [
        {
          __component: "buona-pratica.description",
          id: 1,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Financial aid programmes often require the submission of documents and self declarations to verify eligibility, with different procedures across public bodies and lengthy verification times. Through the APIs available on PDND, public bodies can automatically verify citizens’ eligibility by retrieving data such as ISEE (Equivalent Economic Situation Indicator) and family status directly from the source, during the submission of the application. This allows the application of the ",
                },
                {
                  type: "text",
                  text: "once only",
                  italic: true,
                },
                {
                  type: "text",
                  text: " principle, whereby citizens are not required to provide public administrations with data that they already possess.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.image",
          id: 19,
          caption:
            "Interoperability flow diagram: use of PDND APIs for accessing bonuses",
          image: {
            id: 9,
            documentId: "xzdko1cg6j66un763ziw4jrk",
            name: "what-s-inside-a-black-hole",
            alternativeText:
              "Flow diagram for using ISEE and family status APIs highlighting integration with PDND",
            caption:
              "Interoperability flow diagram: use of PDND APIs for accessing bonuses",
            width: 800,
            height: 466,
            hash: "what_s_inside_a_black_hole_b1560bb7f4",
            ext: ".jpeg",
            mime: "image/jpeg",
            size: 7.5,
            url: "https://api-gov.dev.interop.pagopa.it/static/03_bonus_cittadini.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2025-10-14T14:20:42.069Z",
            updatedAt: "2025-10-17T12:40:17.717Z",
            publishedAt: "2025-10-14T14:20:42.069Z",
          },
        },
        {
          __component: "buona-pratica.title",
          id: 4,
          Text: "What’s new with PDND",
        },
        {
          __component: "buona-pratica.description",
          id: 9,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "In the past, citizens had to collect and submit certificates or self-declarations to prove that they met certain requirements (e.g. ISEE, family status). Public bodies then carried out manual verifications, which slowed down processing times and increased the risk of errors. Today, thanks to PDND, institutions can directly access official databases published on the platform to verify eligibility, greatly simplifying the procedure, reducing processing times, and minimising potential errors.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 5,
          Text: "Benefits for Public Bodies",
        },
        {
          __component: "buona-pratica.description",
          id: 10,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Reduction of bureaucracy",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", through the elimination of manual eligibility checks and the digitalisation of processes, saving time and resources",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Reliable, up-to-date and verified data",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", retrieved in real time directly from official databases (e.g. INPS, ANPR)",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Greater process efficiency",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", with automated checks and full traceability of operations",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 6,
          Text: "Benefits for people",
        },
        {
          __component: "buona-pratica.description",
          id: 11,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Simplified access",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", with faster and more consistent procedures for submitting applications and verifying eligibility for financial bonuses",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "No additional requirements",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", since data and documents already held by public administrations are automatically retrieved from official sources",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.nota-tecnica",
          id: 8,
          example: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "The e-service for consulting the ISEE certificate or indicator is provided in three variants, designed for different contexts and operational needs:",
                },
              ],
            },
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "ISEE Certificate/Indicator Consultation",
                      underline: true,
                    },
                    {
                      type: "text",
                      text: ": allows consultation for all citizens and requires the exchange of digital certificates between public bodies to enable mutual authentication ",
                    },
                    {
                      type: "text",
                      text: "Recommended for large municipalities and central public bodies",
                      bold: true,
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "ISEE Certificate/Indicator Consultation for Operators",
                      underline: true,
                    },
                    {
                      type: "text",
                      text: ": allows consultation for all citizens and requires sending operator identification data to INPS; the operator must authenticate via SPID or CIE ",
                    },
                    {
                      type: "text",
                      text: "Recommended for small municipalities",
                      bold: true,
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "ISEE Certificate/Indicator Consultation for Residents",
                      underline: true,
                    },
                    {
                      type: "text",
                      text: ": allows municipalities to consult ISEE data only for residents within their territory ",
                    },
                    {
                      type: "text",
                      text: "For municipalities only",
                      bold: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.esempio-concreto",
          id: 8,
          example: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "During the Bike Bonus initiative, the Emilia-Romagna Region recorded high citizen participation, with thousands of applications submitted in a short period. In the past, each application required manual document collection, self-declarations, and individual checks by administrative offices, significantly delaying the disbursement of funds. By integrating PDND into its systems, the Region was able to automatically verify the residence of all applicants using data from the National Population Register (ANPR). The verification process thus became much faster and more transparent, enabling the targeted allocation of funds without requiring citizens to provide additional documentation.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    data: {
      id: 12,
      documentId: "zflr58yvojfzixgi4ob4jxfq",
      title: "Pre-filled personal data for more efficient digital services",
      slug: "dati-anagrafici-precompilati-per-servizi-piu-efficienti",
      publishedDate: "2025-10-17",
      createdAt: "2025-10-16T08:10:56.095Z",
      updatedAt: "2025-10-17T12:40:30.370Z",
      publishedAt: "2025-10-17T12:40:30.381Z",
      locale: "en",
      isFeaturedInHomepage: true,
      eserviceId: [
        {
          eserviceId: "bfc9fb06-8886-45a4-9ce9-bc93264958ce",
        },
        {
          eserviceId: "8fe27f7f-b559-4c51-90b6-a4d6eae4ae01",
        },
        {
          eserviceId: "3ec6f973-36ab-4816-8e96-22ffb512648c",
        },
        {
          eserviceId: "f978f8b9-de00-45ba-801b-1b4a60b547d9",
        },
        {
          eserviceId: "a152b46b-f330-494d-9845-82c460bc9fcf",
        },
        {
          eserviceId: "5e023f06-e5d4-4f8a-b7b8-299b97d2abee",
        },
      ],
      tenantMacrocategories: [],
      category: 'Citizen Services',
      body: [
        {
          __component: "buona-pratica.description",
          id: 1,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "The ",
                },
                {
                  type: "text",
                  text: "once only",
                  italic: true,
                },
                {
                  type: "text",
                  text: " principle states that citizens should provide their personal data to public administrations only once, without having to re-enter the same information for each new service request. Thanks to PDND, public bodies can securely and automatically access data already held by other administrations and pre-fill online forms when citizens submit applications. This streamlines procedures, removes the need for self-declarations, reduces bureaucracy, and improves the quality and consistency of data shared between public entities.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.image",
          id: 19,
          caption:
            "Interoperability flow diagram: use of PDND APIs for pre-filling personal data",
          image: {
            id: 9,
            documentId: "xzdko1cg6j66un763ziw4jrk",
            name: "what-s-inside-a-black-hole",
            alternativeText:
              "Flow diagram for using ANPR APIs to provide citizen services highlighting integration with PDND",
            caption:
              "Interoperability flow diagram: use of PDND APIs for pre-filling personal data",
            width: 800,
            height: 466,
            hash: "what_s_inside_a_black_hole_b1560bb7f4",
            ext: ".jpeg",
            mime: "image/jpeg",
            size: 7.5,
            url: "https://api-gov.dev.interop.pagopa.it/static/04_dati_anagrafici.webp",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2025-10-14T14:20:42.069Z",
            updatedAt: "2025-10-17T12:40:17.717Z",
            publishedAt: "2025-10-14T14:20:42.069Z",
          },
        },
        {
          __component: "buona-pratica.title",
          id: 4,
          Text: "What’s new with PDND",
        },
        {
          __component: "buona-pratica.description",
          id: 9,
          Text: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Previously, for every new service request, citizens were required to manually enter their personal data, even when the same information had already been provided to another public administration. This led to data duplication, an increased risk of errors, and the need for subsequent checks by public bodies, resulting in slower processing. With the National Data Platform (PDND), public bodies can now retrieve data directly from official sources at the time a citizen accesses a digital service, ensuring accuracy, consistency, and faster delivery.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 5,
          Text: "Benefits for Public Bodies",
        },
        {
          __component: "buona-pratica.description",
          id: 10,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Reduction of bureaucracy",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", through the elimination of manual data entry and post-verification of citizen declarations",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Reliable, up-to-date and verified data",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", automatically retrieved from official sources (e.g. ANPR) without duplicating local databases",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Greater process efficiency",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", with streamlined procedures, fewer errors, and time and resource savings in service management",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.title",
          id: 6,
          Text: "Benefits for people",
        },
        {
          __component: "buona-pratica.description",
          id: 11,
          Text: [
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Simplified access",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", thanks to the automatic pre-filling of personal data already held by public administrations during online service applications",
                    },
                  ],
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "No additional requirements",
                      bold: true,
                    },
                    {
                      type: "text",
                      text: ", as citizens are no longer asked to re-enter or resubmit information already provided, in compliance with the ",
                    },
                    {
                      type: "text",
                      text: "once only",
                      italic: true,
                    },
                    {
                      type: "text",
                      text: " principle",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.esempio-concreto",
          id: 8,
          example: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "In the Municipality of Bordighera, families who need school transport services for their children can now register online directly through the municipal website. In the past, the procedure required citizens to manually fill in all personal and family data, attach documents, and wait for the subsequent verification by municipal offices. Today, thanks to the integration of the",
                },
                {
                  type: "link",
                  url: "https://www.anagrafenazionale.interno.it/",
                  children: [
                    {
                      type: "text",
                      text: "National Population Register",
                    },
                  ],
                },
                {
                  type: "text",
                  text: " (ANPR) APIs with the municipality’s digital services, the process is automatic: when submitting the request, the system retrieves residence and family status data in real time. Citizens simply confirm the information, and the application is immediately ready to be processed by the offices, with no additional steps or transcription errors.",
                },
              ],
            },
          ],
        },
        {
          __component: "buona-pratica.nota-tecnica",
          id: 8,
          example: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Some APIs provided by the Ministry of the Interior are available in two variants: with automatic or manual approval. Important: before requesting access, check the API information sheet to verify the eligibility requirements for your organization and whether it can access the versions with automatic approval.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

export function getGoodPracticesDataMockByLocale(
  locale: SupportedLanguage,
): StrapiEntity<GoodPractice>[] {
  return match(locale)
    .with("en", () => goodPracticesDataMockEn)
    .with("it", () => goodPracticesDataMockIt)
    .exhaustive();
}
