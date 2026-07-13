import type { TranslationsMap } from "./types.i18n.js";
import { buildUseTranslations } from "./utils.i18n.js";

export const eserviceDetails = {
  it: {
    "api_details_section.risk_analysis_template_label":
      "Compilazione agevolata dell’analisi del rischio",
    "api_details_section.risk_analysis_template_tooltip.title":
      "Compilazione agevolata",
    "api_details_section.risk_analysis_template_tooltip.content":
      "Se disponibile, puoi compilare l’analisi del rischio utilizzando un modello precompilato.",

    "attributes_section.title_requirements": "requisiti",

    "attributes_section.group.or": "oppure",
  },
  en: {
    "api_details_section.risk_analysis_template_label":
      "Assisted completion of risk analysis",
    "api_details_section.risk_analysis_template_tooltip.title":
      "Assisted completion",
    "api_details_section.risk_analysis_template_tooltip.content":
      "If available, you can complete the risk analysis using a pre-filled template.",

    "attributes_section.title_requirements": "requirements",

    "attributes_section.group.or": "or",
  },
} as const satisfies TranslationsMap;

export const useEServiceDetailsTranslations =
  buildUseTranslations(eserviceDetails);
