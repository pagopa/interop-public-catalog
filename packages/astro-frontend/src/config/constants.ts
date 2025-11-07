import type { RouteKey } from "./routes.js";

// This check sucks, we should have this info from env vars
export const isDevEnvironment = (href: string) =>
  import.meta.env.DEV || href.includes(".dev.interop");

export const links = {
  dtdLink: "http://innovazione.gov.it/",
  pagoPaLink: "https://www.pagopa.it/it/",
  selfcareLink: "https://selfcare.pagopa.it",
  schemaSemanticLink: "https://schema.gov.it/",
  openDataLink: "https://www.dati.gov.it/",
  interopPlatformLink: "https://www.interop.pagopa.it/",
  interopManualLink:
    "https://developer.pagopa.it/pdnd-interoperabilita/guides/manuale-operativo-pdnd-interoperabilita",
  interopNumbersLink: "https://www.interop.pagopa.it/numeri",
  interopDevelopersLink: "https://developers.italia.it/it/interoperabilita",
  ueCommissionLink: "https://commission.europa.eu/index_it",
  dtdLogoLink: "https://innovazione.gov.it/dipartimento/",
  membersListLink:
    "https://www.dati.gov.it/view-dataset/dataset?id=b6e909a0-53cd-417d-a37f-04c11fed8939",
  apiListLink:
    "https://www.dati.gov.it/view-dataset/dataset?id=0dfbeb46-736d-4af3-841c-9593d8f6c434",
  euInteroperabilityFrameworkLink:
    "https://interoperable-europe.ec.europa.eu/collection/iopeu-monitoring/european-interoperability-framework-detail",
  accessibilityStatementLink:
    "https://form.agid.gov.it/view/c8912450-b5a2-11f0-81d4-97119d1a7eb7",
} as const;

/**
 * Navigation items for the footer and header components.
 * TODO: Links
 */
export const CATALOG_API_SECTION_NAV_ITEMS = [
  {
    i18nKey: "nav.explore_catalog",
    routeKey: "ESERVICE_CATALOG",
  },
  {
    i18nKey: "nav.examples",
    routeKey: "GOOD_PRACTICES_CATALOG",
  },
] as const satisfies Array<{ i18nKey: string; routeKey: RouteKey }>;

export const RESOURCES_SECTION_NAV_ITEMS = [
  {
    i18nKey: "nav.what_is",
    routeKey: "ECOSYSTEM",
  },
  {
    i18nKey: "nav.faq",
    routeKey: "FAQ",
  },
] as const satisfies Array<{ i18nKey: string; routeKey: RouteKey }>;

export const TENANT_MACROCATEGORIES = [
  {
    key: "tutti",
    id: null,
    imgSrc: "/img/027-pillars.svg",
  },
  {
    key: "pac",
    id: 1,
    imgSrc: "/img/030-city.svg",
  },
  {
    key: "comuni",
    id: 2,
    imgSrc: "/img/bank-1.svg",
  },
  {
    key: "regioni",
    id: 3,
    imgSrc: "/img/066-hospital.svg",
  },
  // {
  //   key: 'universita',
  //   id: 4,
  //   imgSrc: '/img/library-1.svg',
  // },
  {
    key: "altre",
    id: 5,
    imgSrc: "/img/073-shopping-mall.svg",
  },
] as const;

export type OrganizationType = (typeof TENANT_MACROCATEGORIES)[number]["key"];
