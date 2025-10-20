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
  NOT_FOUND: { it: '/404', en: '/404' },
} as const satisfies Record<string, Record<SupportedLanguage, string>>

export type RouteKey = keyof typeof ROUTES
export type Route = (typeof ROUTES)[RouteKey]

type ExtractRouteParams<T> = string extends T
  ? Record<string, string>
  : T extends `${infer _Start}:${infer Param}/${infer Rest}`
    ? { [k in Param | keyof ExtractRouteParams<Rest>]: string }
    : T extends `${infer _Start}:${infer Param}`
      ? { [k in Param]: string }
      : undefined

export function getLocalizedRoute<
  TLang extends SupportedLanguage,
  TRouteKey extends RouteKey,
  Path extends (typeof ROUTES)[TRouteKey][TLang] = (typeof ROUTES)[TRouteKey][TLang],
  RouteParams extends ExtractRouteParams<Path> = ExtractRouteParams<Path>,
>(
  currentLocale: TLang,
  routeKey: TRouteKey,
  ...config: RouteParams extends undefined ? [] : [{ params: RouteParams }]
): string {
  let route: string = ROUTES[routeKey][currentLocale]

  if (config[0]?.params) {
    for (const [key, value] of Object.entries(config[0].params)) {
      route = route.replace(`:${key}`, value)
    }
  }

  return `/${currentLocale}${route}`
}
