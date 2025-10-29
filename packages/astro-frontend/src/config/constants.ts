import type { SupportedLanguage } from '../i18n/types.i18n.js'
import { getLocalizedRoute } from '../i18n/utils.i18n.js'

export const links = {
  dtdLink: 'http://innovazione.gov.it/',
  pagoPaLink: 'https://www.pagopa.it/it/',
  schemaSemanticLink: 'https://schema.gov.it/',
  openDataLink: 'https://www.dati.gov.it/',
  interopPlatformLink: 'https://www.interop.pagopa.it/',
  interopManualLink:
    'https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita',
  interopNumbersLink: 'https://www.interop.pagopa.it/numeri',
  interopDevelopersLink: 'https://developers.italia.it/it/interoperabilita',
  ueCommissionLink: 'https://commission.europa.eu/index_it',
  dtdLogoLink: 'https://innovazione.gov.it/dipartimento/',
  membersListLink:
    'https://www.dati.gov.it/view-dataset/dataset?id=b6e909a0-53cd-417d-a37f-04c11fed8939',
  apiListLink:
    'https://www.dati.gov.it/view-dataset/dataset?id=0dfbeb46-736d-4af3-841c-9593d8f6c434',
} as const

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
