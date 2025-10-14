import { getRelativeLocaleUrl } from 'astro:i18n'
import { SupportedLanguage } from '../i18n/types.i18n.js'

type Routes =
  | `/`
  | `/useCases`
  | `/useCases/${string}`
  | `/catalogo`
  | `/catalogo/eservice-details`
  | `/ecosystem`
  | `/FAQ`

export type LocalizedRoute = `/${SupportedLanguage}${Routes}`

function typedGetRelativeLocaleUrl(locale: SupportedLanguage, route: Routes): LocalizedRoute {
  return getRelativeLocaleUrl(locale, route) as LocalizedRoute
}

export const ROUTES = {
  getHomepageUrl: (locale: SupportedLanguage) => typedGetRelativeLocaleUrl(locale, '/'),
  getUseCasesCatalogUrl: (locale: SupportedLanguage) =>
    typedGetRelativeLocaleUrl(locale, '/useCases'),
  getUseCasesDetailsUrl: (locale: SupportedLanguage, id: string) =>
    typedGetRelativeLocaleUrl(locale, `/useCases/${id}`),
  getEServiceCatalogUrl: (locale: SupportedLanguage) =>
    typedGetRelativeLocaleUrl(locale, '/catalogo'),
  getEServiceDetailsUrl: (locale: SupportedLanguage) =>
    typedGetRelativeLocaleUrl(locale, `/catalogo/eservice-details`),
  getEcosystemUrl: (locale: SupportedLanguage) => typedGetRelativeLocaleUrl(locale, '/ecosystem'),
  getFAQUrl: (locale: SupportedLanguage) => typedGetRelativeLocaleUrl(locale, '/FAQ'),
} as const
