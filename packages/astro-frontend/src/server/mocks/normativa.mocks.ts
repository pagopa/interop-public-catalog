import type { StrapiEntity } from "pagopa-interop-public-models";
import type { NormativaReferenceContent } from "../types/normativa.types";
import type { SupportedLanguage } from "../../i18n/types.i18n";
import { match } from "ts-pattern";

const normativaDataMockIt: StrapiEntity<NormativaReferenceContent> = {
  data: {
    id: 2,
    documentId: "px26c1zbp6dw01w8mr67xn43",
    title: "Riferimenti normativi",
    description:
      "Questi sono i principali riferimenti che definiscono il quadro giuridico e operativo della PDND.",
    createdAt: "2025-10-20T12:21:22.117Z",
    updatedAt: "2025-10-20T12:21:22.117Z",
    publishedAt: "2025-10-20T12:21:22.127Z",
    locale: "it",
    publishedDate: "2025-10-29",
    body: [
      {
        __component: "shared.section-title",
        id: 33,
        sectionTitle: "Principali riferimenti normativi",
        slug: "principali-riferimenti",
      },
      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "Decreto Legislativo n. 82/2005 - Codice dell’amministrazione digitale (CAD)",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "L’articolo 50-",
              },
              {
                type: "text",
                text: "ter",
                italic: true,
              },
              {
                type: "text",
                text: " del CAD disciplina lo ",
              },
              {
                type: "text",
                text: "sviluppo e la realizzazione della Piattaforma Digitale Nazionale Dati (PDND)",
                bold: true,
              },
              {
                type: "text",
                text: ", finalizzata alla condivisione dei dati tra i soggetti autorizzati e alla semplificazione degli adempimenti amministrativi per cittadini e imprese.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink:
          "https://www.normattiva.it/atto/caricaDettaglioAtto?atto.dataPubblicazioneGazzetta=2005-05-16&atto.codiceRedazionale=005G0104&atto.articolo.numero=0&atto.articolo.sottoArticolo=1&atto.articolo.sottoArticolo1=10&qId=5614860b-4769-478e-bf22-a8a76a04159a&tabID=0.5538263478162919&title=lbl.dettaglioAtto",
      },

      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "Decreto del Ministro per l’Innovazione Tecnologica e la Transizione Digitale del 22 settembre 2022",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Il decreto dà attuazione all’articolo 50-",
              },
              {
                type: "text",
                text: "ter",
                italic: true,
              },
              {
                type: "text",
                text: " del CAD, definendo ",
              },
              {
                type: "text",
                text: "termini e modalità di accreditamento alla PDND",
                bold: true,
              },
              {
                type: "text",
                text: " e stabilendo l’obbligatorietà dell’accreditamento, anche per i soggetti che continuano a utilizzare sistemi di interoperabilità preesistenti.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink:
          "https://www.gazzettaufficiale.it/eli/id/2022/11/22/22A06623/sg",
      },

      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "Direttiva del Sottosegretario di Stato con delega alla Trasformazione Digitale del 5 dicembre 2023",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "La direttiva fornisce gli ",
              },
              {
                type: "text",
                text: "indirizzi operativi per l’utilizzo della PDND",
                bold: true,
              },
              {
                type: "text",
                text: ", stabilendo la creazione di strutture di coordinamento per la gestione dell’adesione e dell’operatività sulla piattaforma. Inoltre, ",
              },
              {
                type: "text",
                text: "impone lo sviluppo e il coordinamento delle API",
                bold: true,
              },
              {
                type: "text",
                text: ", promuove la ",
              },
              {
                type: "text",
                text: "valorizzazione dell’interoperabilità",
                bold: true,
              },
              {
                type: "text",
                text: " e la ",
              },
              {
                type: "text",
                text: "condivisione del patrimonio informativo",
                bold: true,
              },
              {
                type: "text",
                text: " della Pubblica Amministrazione; rafforza ",
              },
              {
                type: "text",
                text: "il ruolo della PDND come strumento abilitante",
                bold: true,
              },
              {
                type: "text",
                text: " per la digitalizzazione, prevedendo misure di formazione, sensibilizzazione e allineamento delle basi di dati.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink:
          "https://www.governo.it/it/articolo/direttiva-recante-gli-indirizzi-operativi-l-utilizzo-della-piattaforma-digitale-nazionale",
      },

      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "Modello di Interoperabilità della Pubblica Amministrazione (ModI)",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Atto di riferimento del ",
              },
              {
                type: "text",
                text: "Piano Triennale per l’Informatica nella Pubblica Amministrazione",
                bold: true,
              },
              {
                type: "text",
                text: ", individua le tecnologie e gli standard che le amministrazioni devono adottare per la realizzazione dei propri sistemi informatici.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink:
          "https://www.agid.gov.it/index.php/it/infrastrutture/sistema-pubblico-connettivita/il-nuovo-modello-interoperabilita",
      },

      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "Linee guida sull’interoperabilità tecnica delle Pubbliche Amministrazioni e Linee Guida sull’infrastruttura tecnologica della PDND per l’interoperabilità dei sistemi informativi e delle basi di dati",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Questo ",
              },
              {
                type: "text",
                text: "insieme di Linee guida definisce e stabilisce le tecnologie, le regole e gli standard",
                bold: true,
              },
              {
                type: "text",
                text: " che ",
              },
              {
                type: "text",
                text: "abilitano l’interoperabilità",
                bold: true,
              },
              {
                type: "text",
                text: " tra i sistemi informativi e le basi di dati delle pubbliche amministrazioni.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink: "https://www.agid.gov.it/it/linee-guida",
      },

      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "Regolamento (UE) 2016/679 – General Data Protection Regulation (GDPR)",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "È la normativa europea che disciplina la ",
              },
              {
                type: "text",
                text: "protezione dei dati personali delle persone fisiche",
                bold: true,
              },
              {
                type: "text",
                text: ", applicabile anche allo scambio di dati tra amministrazioni tramite la PDND.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink: "https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=it",
      },

      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "Quadro europeo di interoperabilità – European Interoperability Framework (EIF)",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Definisce i ",
              },
              {
                type: "text",
                text: "principi e i livelli fondamentali dell’interoperabilità a livello europeo",
                bold: true,
              },
              {
                type: "text",
                text: ", introducendo i quattro livelli di interoperabilità (tecnica, semantica, legale e organizzativa). È ",
              },
              {
                type: "text",
                text: "ripreso dal ModI e dal Piano Triennale per l’Informatica nella Pubblica Amministrazione",
                bold: true,
              },
              {
                type: "text",
                text: " come riferimento per l’interoperabilità nazionale.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink:
          "https://interoperable-europe.ec.europa.eu/collection/iopeu-monitoring/european-interoperability-framework",
      },
    ],
  },
};

const normativaDataMockEn: StrapiEntity<NormativaReferenceContent> = {
  data: {
    id: 2,
    documentId: "px26c1zbp6dw01w8mr67xn43",
    title: "Legal and Regulatory Framework",
    description:
      "These are the main references that define the legal and operational framework of the National Data Platform (PDND).",
    createdAt: "2025-10-20T12:21:22.117Z",
    updatedAt: "2025-10-20T12:21:22.117Z",
    publishedAt: "2025-10-20T12:21:22.127Z",
    locale: "en",
    publishedDate: "2025-10-29",
    body: [
      {
        __component: "shared.section-title",
        id: 33,
        sectionTitle: "Key regulatory references",
        slug: "key-regulatory-references",
      },
      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "Legislative Decree No. 82/2005 – Digital Administration Code (CAD)",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Article 50-ter of the CAD regulates the development and implementation of the National Data Platform (PDND), aimed at enabling data sharing among authorized entities and simplifying administrative procedures for citizens and businesses.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink:
          "https://www.normattiva.it/atto/caricaDettaglioAtto?atto.dataPubblicazioneGazzetta=2005-05-16&atto.codiceRedazionale=005G0104&atto.articolo.numero=0&atto.articolo.sottoArticolo=1&atto.articolo.sottoArticolo1=10&qId=5614860b-4769-478e-bf22-a8a76a04159a&tabID=0.5538263478162919&title=lbl.dettaglioAtto",
      },

      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "Decree of the Minister for Technological Innovation and Digital Transition of September 22, 2022",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "This decree implements Article 50-ter of the CAD, defining the terms and procedures for accreditation to PDND and establishing the mandatory participation requirement, including for entities that continue to use pre-existing interoperability systems.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink:
          "https://www.gazzettaufficiale.it/eli/id/2022/11/22/22A06623/sg",
      },

      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "Directive of the Undersecretary of State for Digital Transformation, issued on December 5, 2023",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "The directive provides operational guidelines for the use of PDND, establishing the creation of coordination structures to manage membership and operations on the platform. It also requires the development and coordination of APIs, promotes the enhancement of interoperability and the sharing of public sector information assets, and strengthens PDND’s role as an enabler for digital transformation through measures for training, awareness, and data alignment.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink:
          "https://www.governo.it/it/articolo/direttiva-recante-gli-indirizzi-operativi-l-utilizzo-della-piattaforma-digitale-nazionale",
      },

      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "Interoperability Model of Public Administrations (ModI)",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "A reference document within the Three-Year Plan for ICT in Public Administration, it identifies the technologies and standards that public administrations must adopt for the design and implementation of their information systems.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink:
          "https://www.agid.gov.it/index.php/it/infrastrutture/sistema-pubblico-connettivita/il-nuovo-modello-interoperabilita",
      },

      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "Guidelines on Technical Interoperability of Public Administrations and Guidelines on the PDND Technological Infrastructure for the Interoperability of Information Systems and Databases",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "This set of Guidelines defines and establishes the technologies, rules, and standards that enable interoperability between information systems and databases of public administrations.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink: "https://www.agid.gov.it/it/linee-guida",
      },

      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "Regulation (EU) 2016/679 – General Data Protection Regulation (GDPR)",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "The European regulation governing the protection of personal data of natural persons, also applicable to data exchanges between public administrations through PDND.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink: "https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=it",
      },

      {
        __component: "shared.body",
        id: 4,
        text: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                text: "European Interoperability Framework (EIF)",
              },
            ],
            level: 6,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Defines the core principles and levels of interoperability at the European level, introducing the four dimensions of interoperability: technical, semantic, legal, and organizational. It is referenced by the ModI and by the Three-Year Plan for ICT in Public Administration as a key framework for national interoperability.",
              },
            ],
          },
        ],
      },
      {
        __component: "shared.url",
        id: 2,
        externalLink:
          "https://interoperable-europe.ec.europa.eu/collection/iopeu-monitoring/european-interoperability-framework",
      },
    ],
  },
};

export function getNormativaDataMockByLocale(
  locale: SupportedLanguage,
): StrapiEntity<NormativaReferenceContent> {
  return match(locale)
    .with("en", () => normativaDataMockEn)
    .with("it", () => normativaDataMockIt)
    .exhaustive();
}
