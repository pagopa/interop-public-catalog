import { SupportedLanguage } from '../i18n/types.i18n.js'
import { getLocalizedRoute } from './routes.js'

export const DIPARTIMENTO_PER_LA_TRASFORMAZIONE_DIGITALE_URL = 'https://innovazione.gov.it/'
export const PAGOPA_URL = 'https://www.pagopa.gov.it/'

/**
 * Navigation items for the footer and header components.
 * TODO: Links
 */
export const CATALOG_API_SECTION_NAV_ITEMS = [
  {
    i18nKey: 'nav.explore_catalog',
    getHref: (locale: SupportedLanguage) => getLocalizedRoute(locale, 'ESERVICE_CATALOG'),
  },
  {
    i18nKey: 'nav.examples',
    getHref: (locale: SupportedLanguage) => getLocalizedRoute(locale, 'USE_CASE_CATALOG'),
  },
] as const

export const RESOURCES_SECTION_NAV_ITEMS = [
  {
    i18nKey: 'nav.what_is',
    getHref: (locale: SupportedLanguage) => getLocalizedRoute(locale, 'ECOSYSTEM'),
  },
  {
    i18nKey: 'nav.faq',
    getHref: (locale: SupportedLanguage) => getLocalizedRoute(locale, 'FAQ'),
  },
] as const

export const ORGANIZATION_TYPES = [
  {
    key: 'tutti',
    imgSrc: '/img/027-pillars.svg',
  },
  {
    key: 'pac',
    imgSrc: '/img/030-city.svg',
  },
  {
    key: 'comuni',
    imgSrc: '/img/bank-1.svg',
  },
  {
    key: 'regioni',
    imgSrc: '/img/066-hospital.svg',
  },
  {
    key: 'universita',
    imgSrc: '/img/library-1.svg',
  },
  {
    key: 'altre',
    imgSrc: '/img/073-shopping-mall.svg',
  },
] as const

export type OrganizationType = (typeof ORGANIZATION_TYPES)[number]['key']
