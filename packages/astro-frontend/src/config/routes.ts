import { getRelativeLocaleUrl } from 'astro:i18n'
import { SupportedLanguage } from '../i18n/types.i18n.js'

type ExtractRouteParams<T> = string extends T
  ? Record<string, string>
  : T extends `${infer _Start}:${infer Param}/${infer Rest}`
    ? { [k in Param | keyof ExtractRouteParams<Rest>]: string }
    : T extends `${infer _Start}:${infer Param}`
      ? { [k in Param]: string }
      : undefined

const ROUTES = {
  HOME: '/',
  USE_CASE_CATALOG: '/useCases',
  USE_CASE_DETAILS: '/useCases/:useCaseId',
  ESERVICE_CATALOG: '/catalogo',
  ESERVICE_DETAILS: '/catalogo/eservice-details',
  ECOSYSTEM: '/ecosystem',
  FAQ: '/FAQ',
} as const

export type RouteKey = keyof typeof ROUTES
export type Route = (typeof ROUTES)[RouteKey]
export type LocalizedRoute = `/${SupportedLanguage}${Route}`

export function getLocalizedRoute<
  TRouteKey extends RouteKey,
  Path extends (typeof ROUTES)[TRouteKey] = (typeof ROUTES)[TRouteKey],
  RouteParams extends ExtractRouteParams<Path> = ExtractRouteParams<Path>,
>(
  currentLocale: SupportedLanguage,
  routeKey: TRouteKey,
  ...config: RouteParams extends undefined ? [] : [{ params: RouteParams }]
): string {
  let route: string = ROUTES[routeKey]

  if (config[0]?.params) {
    for (const [key, value] of Object.entries(config[0].params)) {
      route = route.replace(`:${key}`, value)
    }
  }

  return getRelativeLocaleUrl(currentLocale, route)
}
