export type StrapiArticle = {
  id: number
  documentId: string
  title: string
  description: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

export type StrapiListMeta = {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export type StrapiEntityList<T> = {
  data: T[]
  meta: StrapiListMeta
}
