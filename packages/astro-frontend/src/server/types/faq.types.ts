import type { StrapiNode } from "pagopa-interop-public-models";

export type FaqContent = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  title: string;
  description: string;
  faqSection: {
    id: number;
    sectionTitle: string;
    faqList: {
      id: number;
      question: string;
      answer: StrapiNode[];
    }[];
  }[];
};
