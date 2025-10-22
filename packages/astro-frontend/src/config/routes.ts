import type { SupportedLanguage } from '../i18n/types.i18n.js'

export const ROUTES = {
  HOME: { it: '/', en: '/' },
  GOOD_PRACTICES_CATALOG: { it: '/buone-pratiche', en: '/good-practices' },
  GOOD_PRACTICES_DETAILS: { it: '/buone-pratiche/:slug', en: '/good-practices/:slug' },
  ESERVICE_CATALOG: { it: '/catalogo', en: '/catalog' },
  ESERVICE_DETAILS: { it: '/catalogo/:id', en: '/catalog/:id' },
  ECOSYSTEM: { it: '/ecosistema', en: '/ecosystem' },
  FAQ: { it: '/FAQ', en: '/FAQ' },
  LEGISLATION: { it: '/normativa', en: '/legislation' },
  PRIVACY_POLICY: { it: '/privacy-policy', en: '/privacy-policy' },
} as const satisfies Record<string, Record<SupportedLanguage, string>>

export type RouteKey = keyof typeof ROUTES
export type Route = (typeof ROUTES)[RouteKey]
