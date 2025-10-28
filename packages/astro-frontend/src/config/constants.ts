import type { SupportedLanguage } from '../i18n/types.i18n.js'
import { getLocalizedRoute } from '../i18n/utils.i18n.js'

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
    getHref: (locale: SupportedLanguage) => getLocalizedRoute(locale, 'GOOD_PRACTICES_CATALOG'),
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

export const TENANT_MACROCATEGORIES = [
  {
    key: 'tutti',
    strapiId: null,
    imgSrc: '/img/027-pillars.svg',
  },
  {
    key: 'pac',
    strapiId: 1,
    imgSrc: '/img/030-city.svg',
  },
  {
    key: 'comuni',
    strapiId: 2,
    imgSrc: '/img/bank-1.svg',
  },
  {
    key: 'regioni',
    strapiId: 3,
    imgSrc: '/img/066-hospital.svg',
  },
  {
    key: 'universita',
    strapiId: 4,
    imgSrc: '/img/library-1.svg',
  },
  {
    key: 'altre',
    strapiId: 5,
    imgSrc: '/img/073-shopping-mall.svg',
  },
] as const

export type OrganizationType = (typeof TENANT_MACROCATEGORIES)[number]['key']
