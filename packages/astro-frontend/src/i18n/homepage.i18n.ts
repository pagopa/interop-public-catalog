import type { TranslationsMap } from "./types.i18n.js";
import { buildUseTranslations } from "./utils.i18n.js";

export const homepage = {
  it: {
    "good_practices.footer_cta": "Esplora tutti gli esempi",
  },
  en: {
    "good_practices.footer_cta": "View all use cases",
  },
} as const satisfies TranslationsMap;

export const useHomepageTranslations = buildUseTranslations(homepage);
