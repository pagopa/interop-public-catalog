import type { TranslationsMap } from "./types.i18n.js";
import { buildUseTranslations } from "./utils.i18n.js";

const goodPracticesTranslations = {
  it: {
    "catalog.title": "Esempi pratici di utilizzo delle API per il tuo ente",
    "catalog.subtitle":
      "Lasciati ispirare da una raccolta di esempi significativi e semplici di come integrare servizi per il tuo ente e i cittadini",

    "details.moreExamples": "Altre buone pratiche",
    "details.lastUpdate": "Ultimo aggiornamento:",

    "details.section.apis.heading": "API utilizzate",
    "details.section.apis.description": "Descrizione",
    "details.section.apis.example": "Un esempio dal territorio",
    "details.section.apis.technical_notes": "Note tecniche",
    "details.section.apis.show_more_button_label": "Mostra di più",
  },
  en: {
    "catalog.title": "Use cases for your organization",
    "catalog.subtitle":
      "Discover how to integrate APIs into your organization’s processes and get inspired by meaningful, easy-to-replicate use cases featured in this ever-evolving collection.",

    "details.moreExamples": "Other Use Cases",
    "details.lastUpdate": "Last updated:",

    "details.section.apis.heading": "APIs used",
    "details.section.apis.description": "Description",
    "details.section.apis.example": "An example from the territory",
    "details.section.apis.technical_notes": "Technical notes",
    "details.section.apis.show_more_button_label": "Show more",
  },
} as const satisfies TranslationsMap;

export const useGoodPracticesTranslations = buildUseTranslations(
  goodPracticesTranslations,
);
