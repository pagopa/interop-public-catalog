import React from 'react'
import { createContext } from 'react'
import type { FilterAutoCompleteValue } from '../MultipleAutoComplete/MultipleAutoComplete'
import type { CatalogFilterParams } from './types'
import { useSearchParams } from '../../hooks/useSearchParams'
import { z } from 'zod'

type EServiceCatalogCreateContextType = {
  eserviceFiltersState: CatalogFilterParams
  eserviceActiveFilterState: CatalogFilterParams
  handleDraftFilterValueChange: (
    key: keyof CatalogFilterParams,
    value: string | number | FilterAutoCompleteValue[]
  ) => void
  handleActiveFilterValueChange: (
    key: keyof CatalogFilterParams,
    value: string | number | FilterAutoCompleteValue[]
  ) => void
  handleRemoveActiveFilterValue: (
    key: keyof CatalogFilterParams,
    value: string | FilterAutoCompleteValue
  ) => void
  handleRemoveAllActiveFilterValues: () => void

  applyFilters: () => void
}

type EServiceCatalogContextProviderProps = {
  children: React.ReactNode
}

const eserviceFilterInitialState: CatalogFilterParams = {
  q: '',
  offset: 0,
  orderBy: 'RECENT_DESC',
  provider: [],
  consumer: [],
}
const EServiceCatalogContext = createContext<EServiceCatalogCreateContextType>({
  eserviceFiltersState: eserviceFilterInitialState,
  eserviceActiveFilterState: eserviceFilterInitialState,
  handleDraftFilterValueChange: () => {},
  handleActiveFilterValueChange: () => {},
  handleRemoveActiveFilterValue: () => {},
  handleRemoveAllActiveFilterValues: () => {},
  applyFilters: () => {},
})
const useEServiceCatalogContext = () => React.useContext(EServiceCatalogContext)

const EServiceCatalogContextProvider: React.FC<EServiceCatalogContextProviderProps> = ({
  children,
}) => {
  const [searchParams, _setSearchParams, replaceSetParams] = useSearchParams(
    z.object({
      q: z.string().optional(),
      limit: z.string().optional(),
      offset: z.string().optional(),
      orderBy: z.enum(['RECENT_ASC', 'RECENT_DESC', 'NAME_ASC', 'NAME_DESC']).optional(),
      provider: z.string().optional(),
      consumer: z.string().optional(),
    })
  )

  const searchParamsProvider: Array<string> = JSON.parse(searchParams.provider || '[]')
  const searchParamsConsumer: Array<string> = JSON.parse(searchParams.consumer || '[]')

  const initialCatalogFilterParams: CatalogFilterParams = {
    q: searchParams.q ?? '',
    offset: searchParams.offset ? parseInt(searchParams.offset, 10) : 0,
    orderBy: searchParams.orderBy ?? 'RECENT_DESC',
    provider: searchParamsProvider.map((it) => {
      return {
        label: it[0],
        value: it[1],
      } as unknown as FilterAutoCompleteValue
    }),
    consumer: searchParamsConsumer.map((it) => {
      return {
        label: it[0],
        value: it[1],
      } as unknown as FilterAutoCompleteValue
    }),
  }

  const [eserviceFiltersState, setEserviceFiltersState] = React.useState<CatalogFilterParams>(
    initialCatalogFilterParams
  )

  const [eserviceActiveFilterState, setEserviceActiveFilterState] =
    React.useState<CatalogFilterParams>(initialCatalogFilterParams)

  const handleDraftFilterValueChange = (
    key: keyof CatalogFilterParams,
    value: string | number | FilterAutoCompleteValue[]
  ) => {
    setEserviceFiltersState((prev) => ({ ...prev, [key]: value }))
  }

  const handleActiveFilterValueChange = (
    key: keyof CatalogFilterParams,
    value: string | number | FilterAutoCompleteValue[]
  ) => {
    setEserviceFiltersState((prev) => ({ ...prev, [key]: value }))
    setEserviceActiveFilterState((prev) => ({ ...prev, [key]: value }))
  }

  const handleRemoveActiveFilterValue = (
    key: keyof CatalogFilterParams,
    value: string | FilterAutoCompleteValue
  ) => {
    const previousState = eserviceActiveFilterState

    const getCurrentState = () => {
      const currentValues = previousState[key]
      if (Array.isArray(currentValues)) {
        const newValues = currentValues.filter((item) => {
          return item.value !== value
        })

        return {
          ...previousState,
          [key]: newValues,
        }
      }
      return {
        ...previousState,
        [key]: '',
      }
    }

    setEserviceActiveFilterState(getCurrentState())
    setEserviceFiltersState(getCurrentState())
  }

  const handleRemoveAllActiveFilterValues = () => {
    setEserviceActiveFilterState({
      ...eserviceFilterInitialState,
      offset: eserviceActiveFilterState.offset,
      orderBy: eserviceActiveFilterState.orderBy,
    })
    setEserviceFiltersState({
      ...eserviceFilterInitialState,
      offset: eserviceActiveFilterState.offset,
      orderBy: eserviceActiveFilterState.orderBy,
    })
  }

  const setUrlFilterParams = (filterState: CatalogFilterParams) => {
    const filterStateParams = Object.entries(filterState).reduce(
      (acc, [key, value]) => {
        if (Array.isArray(value) && value.length > 0) {
          acc[key] = JSON.stringify(value.map((v) => [v.label, v.value]))
        } else if (value === '') {
          delete acc[key]
        } else if (!Array.isArray(value) && value !== '' && value !== undefined) {
          acc[key] = value.toString()
        }
        return acc
      },
      {} as Record<string, string>
    )

    replaceSetParams(filterStateParams)
  }

  const applyFilters = () => {
    setEserviceActiveFilterState(eserviceFiltersState)
  }

  React.useEffect(() => {
    setUrlFilterParams(eserviceActiveFilterState)
  }, [eserviceActiveFilterState])

  const providerValue = React.useMemo(() => {
    return {
      eserviceFiltersState,
      eserviceActiveFilterState,
      handleActiveFilterValueChange,
      handleDraftFilterValueChange,
      applyFilters,
      handleRemoveActiveFilterValue,
      handleRemoveAllActiveFilterValues,
    }
  }, [eserviceFiltersState, eserviceActiveFilterState])

  return (
    <EServiceCatalogContext.Provider value={providerValue}>
      {children}
    </EServiceCatalogContext.Provider>
  )
}

export { useEServiceCatalogContext, EServiceCatalogContextProvider }
