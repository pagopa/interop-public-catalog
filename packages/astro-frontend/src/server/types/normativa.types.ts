import type { StrapiNode } from "pagopa-interop-public-models";

type NormativeSectionTitleComponent = {
  __component: "shared.section-title";
  id: number;
  sectionTitle: string;
  slug: string;
};

type NormativeBodyComponent = {
  __component: "shared.body";
  id: number;
  text: StrapiNode[];
};

type NormativeUrlComponent = {
  __component: "shared.url";
  id: number;
  externalLink: string;
};

type NormativeReferencesBodyComponent =
  | NormativeSectionTitleComponent
  | NormativeBodyComponent
  | NormativeUrlComponent;

export type NormativaReferenceContent = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  publishedDate: string;
  body: NormativeReferencesBodyComponent[];
};
