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
  orderBy: 'recent_desc',
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
      orderBy: z.enum(['recent_asc', 'recent_desc', 'name_asc', 'name_desc']).optional(),
      provider: z.string().optional(),
      consumer: z.string().optional(),
    })
  )

  const searchParamsProvider: Array<string> = JSON.parse(searchParams.provider || '[]')
  const searchParamsConsumer: Array<string> = JSON.parse(searchParams.consumer || '[]')

  const initialCatalogFilterParams: CatalogFilterParams = {
    q: searchParams.q ?? '',
    offset: searchParams.offset ? parseInt(searchParams.offset, 10) : 0,
    orderBy: searchParams.orderBy ?? 'recent_desc',
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
    const offset = key !== 'offset' ? 0 : eserviceActiveFilterState.offset

    setEserviceFiltersState((prev) => ({ ...prev, offset, [key]: value }))
    setEserviceActiveFilterState((prev) => ({ ...prev, offset, [key]: value }))
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
    setEserviceActiveFilterState({ ...eserviceFiltersState, offset: 0 })
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
  }, [
    eserviceFiltersState,
    eserviceActiveFilterState,
    handleActiveFilterValueChange,
    handleDraftFilterValueChange,
    applyFilters,
    handleRemoveActiveFilterValue,
    handleRemoveAllActiveFilterValues,
  ])

  return (
    <EServiceCatalogContext.Provider value={providerValue}>
      {children}
    </EServiceCatalogContext.Provider>
  )
}

export { useEServiceCatalogContext, EServiceCatalogContextProvider }
