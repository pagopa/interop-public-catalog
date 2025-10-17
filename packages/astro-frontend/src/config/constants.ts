import { SupportedLanguage } from '../i18n/types.i18n.js'
import { ROUTES } from './routes.js'

export const DIPARTIMENTO_PER_LA_TRASFORMAZIONE_DIGITALE_URL = 'https://innovazione.gov.it/'
export const PAGOPA_URL = 'https://www.pagopa.gov.it/'

/**
 * Navigation items for the footer and header components.
 * TODO: Links
 */
export const CATALOG_API_SECTION_NAV_ITEMS = [
  {
    i18nKey: 'nav.explore_catalog',
    getHref: (locale: SupportedLanguage) => ROUTES.getEServiceCatalogUrl(locale),
  },
  {
    i18nKey: 'nav.examples',
    getHref: (locale: SupportedLanguage) => ROUTES.getEServiceCatalogUrl(locale),
  },
] as const

export const RESOURCES_SECTION_NAV_ITEMS = [
  {
    i18nKey: 'nav.what_is',
    getHref: (locale: SupportedLanguage) => ROUTES.getEServiceCatalogUrl(locale),
  },
  {
    i18nKey: 'nav.faq',
    getHref: (locale: SupportedLanguage) => ROUTES.getEServiceCatalogUrl(locale),
  },
] as const
