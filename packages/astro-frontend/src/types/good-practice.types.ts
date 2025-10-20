import type { StrapiImage, StrapiNode, StrapiResponse } from './strapi.types'

type SharedMediaComponent = {
  __component: 'shared.media'
  id: number
  caption: string
  image: StrapiImage
}

type SharedSectionTitleComponent = {
  __component: 'shared.section-title'
  id: number
  sectionTitle: string
  slug: string
}

type SharedRichTextComponent = {
  __component: 'shared.rich-text'
  id: number
  text: string
}

type SharedEsempioConcretoComponent = {
  __component: 'shared.esempio-concreto'
  id: number
  example: StrapiNode[]
}

type SharedNoteTecnicheComponent = {
  __component: 'shared.note-tecniche'
  id: number
  title?: string
  content: StrapiNode[]
}

type StrapiBodyComponent =
  | SharedMediaComponent
  | SharedSectionTitleComponent
  | SharedRichTextComponent
  | SharedEsempioConcretoComponent
  | SharedNoteTecnicheComponent

export type GoodPractice = {
  id: number
  documentId: string
  title: string
  slug: string
  publishedDate: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  isFeaturedInHomepage: boolean
  tenantMacrocategory: {
    id: number
    label: string
  }
  category: string
  subtheme: string
  body: StrapiBodyComponent[]
}

export type GoodPracticeStrapiResponse = StrapiResponse<GoodPractice>
