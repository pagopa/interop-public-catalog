import type { SupportedLanguage } from "../i18n/types.i18n.js";

export const ROUTES = {
  HOME: { it: "/", en: "/" },
  GOOD_PRACTICES_CATALOG: { it: "/esempi-pratici", en: "/use-cases" },
  GOOD_PRACTICES_DETAILS: {
    it: "/esempi-pratici/[slug]",
    en: "/use-cases/[slug]",
  },
  ESERVICE_CATALOG: { it: "/catalogo", en: "/catalogue" },
  ESERVICE_DETAILS: { it: "/catalogo/[id]", en: "/catalogue/[id]" },
  ECOSYSTEM: {
    it: "/cos-e-l-interoperabilita",
    en: "/what-is-interoperability",
  },
  FAQ: { it: "/FAQ", en: "/FAQ" },
  LEGISLATION: { it: "/normativa", en: "/legislation" },
  PRIVACY_POLICY: { it: "/privacy-policy", en: "/privacy-policy" },
  LEGAL_NOTES: { it: "/note-legali", en: "/legal-notes" },
  NOT_FOUND_ERROR: { it: "/404", en: "/404" },
  SERVER_ERROR: { it: "/500", en: "/500" },
} as const satisfies Record<string, Record<SupportedLanguage, string>>;

export type RouteKey = keyof typeof ROUTES;
export type Route = (typeof ROUTES)[RouteKey];
