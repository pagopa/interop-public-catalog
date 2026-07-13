import type { TranslationsMap } from "./types.i18n.js";
import { buildUseTranslations } from "./utils.i18n.js";

const goodPracticesTranslations = {
  it: {
    "details.moreExamples": "Altri esempi pratici",
    "details.lastUpdate": "Ultimo aggiornamento:",

    "details.section.apis.heading": "API utilizzate",
    "details.section.apis.show_more_button_label": "Mostra di più",
  },
  en: {
    "details.moreExamples": "Other Use Cases",
    "details.lastUpdate": "Last updated:",

    "details.section.apis.heading": "APIs used",
    "details.section.apis.show_more_button_label": "Show more",
  },
} as const satisfies TranslationsMap;

export const useGoodPracticesTranslations = buildUseTranslations(
  goodPracticesTranslations,
);
