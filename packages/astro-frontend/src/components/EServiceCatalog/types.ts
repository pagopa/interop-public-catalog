import type { FilterAutoCompleteValue } from '../MultipleAutoComplete/MultipleAutoComplete'

export type CatalogFilterParams = {
  q: string
  offset: number
  limit: number
  orderBy: 'recent_asc' | 'recent_desc' | 'name_asc' | 'name_desc'
  provider: FilterAutoCompleteValue[]
  consumer: FilterAutoCompleteValue[]
}
