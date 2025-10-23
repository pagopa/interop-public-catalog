import type { FilterAutoCompleteValue } from '../MultipleAutoComplete/MultipleAutoComplete'

export type CatalogFilterParams = {
  q: string
  offset: number
  limit: number
  orderBy: 'RECENT_ASC' | 'RECENT_DESC' | 'NAME_ASC' | 'NAME_DESC'
  provider: FilterAutoCompleteValue[]
  consumer: FilterAutoCompleteValue[]
}
