export type StrapiHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
export type StrapiListFormat = 'ordered' | 'unordered'

export type StrapiTextNode = {
  type: 'text'
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
}

export type StrapiLinkNode = {
  type: 'link'
  url: string
  children?: StrapiNode[]
}

export type StrapiParagraphNode = {
  type: 'paragraph'
  children?: StrapiNode[]
}

export type StrapiHeadingNode = {
  type: 'heading'
  level?: StrapiHeadingLevel
  children?: StrapiNode[]
}

export type StrapiListItemNode = {
  type: 'listItem'
  children?: StrapiNode[]
}

export type StrapiListNode = {
  type: 'list'
  format?: StrapiListFormat
  children?: StrapiListItemNode[]
}

export type StrapiNode =
  | StrapiParagraphNode
  | StrapiHeadingNode
  | StrapiListNode
  | StrapiListItemNode
  | StrapiLinkNode
  | StrapiTextNode

type StrapiImageFormat = {
  name: string
  hash: string
  ext: string
  mime: string
  path: string | null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export type StrapiImage = {
  id: number
  documentId: string
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: {
    thumbnail?: StrapiImageFormat
    small?: StrapiImageFormat
    medium?: StrapiImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type StrapiResponse<T> = {
  data: T
  meta: Record<string, unknown>
}
