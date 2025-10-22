import { Button } from 'design-react-kit'
import React, { useEffect } from 'react'
import { type FilterAutoCompleteValue } from '../MultipleAutoComplete/MultipleAutoComplete.js'
import { FiltersChips } from './FiltersChips.js'
import {
  addParamsWithinUrl,
  parseQueryStringToParams,
  removeParamsFromUrl,
  removeParamsFromUrlByKey,
} from '../../utils/utils.js'
import { TooltipIcon } from '../shared/TooltipIcon.js'
import { Popover } from 'bootstrap-italia'
import { getLangFromUrl } from '../../i18n/utils.i18n.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'
import { FiltersMobile } from './FiltersMobile.jsx'
import Filters from './Filters.jsx'
import { useIsMobile } from '../../hooks/useIsMobile.jsx'
import { useCatalogTranslations } from '../../i18n/catalog.i18n.js'

export type EServiceCatalogFiltersParams = {
  q?: string
  theme?: string
  provider?: FilterAutoCompleteValue[]
  consumer?: FilterAutoCompleteValue[]
}

export type EServiceCatalogFilterKeys = keyof EServiceCatalogFiltersParams

type EServiceCatalogFiltersProps = {
  handleSubmitRequest: (filters: EServiceCatalogFiltersParams) => void
}
const EServiceCatalogFilters: React.FC<EServiceCatalogFiltersProps> = ({ handleSubmitRequest }) => {
  const [filtersFormState, setFiltersFormState] = React.useState<EServiceCatalogFiltersParams>({
    provider: [],
    consumer: [],
  })
  const [appliedFilters, setAppliedFilters] = React.useState<EServiceCatalogFiltersParams>({})
  const currentLanguage = getLangFromUrl(window.location.pathname)
  const t = useCatalogTranslations(currentLanguage)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const isMobile = useIsMobile()

  useEffect(() => {
    const initialParams: EServiceCatalogFiltersParams = parseQueryStringToParams(
      window.location.search
    )
    setFiltersFormState(initialParams)
    setAppliedFilters(initialParams)

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new Popover(popoverTriggerEl, {
        trigger: 'focus',
      })
    })
  }, [])

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log('Call API!')
    e.preventDefault()
    addParamsWithinUrl(filtersFormState)
    setAppliedFilters(filtersFormState)

    handleSubmitRequest(filtersFormState)
    // Fetch API!
  }

  const handleValueChange = (
    key: keyof EServiceCatalogFiltersParams,
    value: string | FilterAutoCompleteValue[]
  ) => {
    setFiltersFormState((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleConsumerChange = (values: FilterAutoCompleteValue[]) => {
    const previousFilterState = {
      ...filtersFormState,
      consumer: values,
    }
    setFiltersFormState(previousFilterState)
    setAppliedFilters(previousFilterState)

    addParamsWithinUrl(previousFilterState)
  }

  const handleRemoveValue = (
    key: keyof EServiceCatalogFiltersParams,
    value: string | FilterAutoCompleteValue
  ) => {
    const getUpdatedState = (): EServiceCatalogFiltersParams => {
      if (key === 'provider' || key === 'consumer') {
        const newValues = filtersFormState[key]!.filter((v) => v.value !== value)
        return { ...filtersFormState, [key]: newValues }
      }

      const { [key]: _, ...newState } = filtersFormState

      return newState
    }
    const updatedState = getUpdatedState()
    setFiltersFormState(updatedState)
    setAppliedFilters(updatedState)

    removeParamsFromUrl(key, value)
  }

  const handleRemoveAll = () => {
    setFiltersFormState({})
    setAppliedFilters({})

    const keys = ['q', 'provider', 'consumer']
    keys.forEach((key) => {
      removeParamsFromUrlByKey(key)
    })
  }

  return (
    <>
      <h5 className="mb-5 d-none d-lg-block">{t('filters.title')}</h5>
      <div className="d-block d-sm-none d-flex justify-content-between align-items-center mb-4">
        <h5>{t('filters.mobile.button')}</h5>
        <Button color="primary" outline size="sm" onClick={() => setIsModalOpen(true)}>
          Filtri
        </Button>
      </div>

      {!isMobile ? (
        <Filters
          filtersFormState={filtersFormState}
          handleConsumerChange={handleConsumerChange}
          handleValueChange={handleValueChange}
          isMobile={false}
          onSubmit={onSubmit}
        />
      ) : (
        <FiltersMobile onSubmit={onSubmit} isOpen={isModalOpen} toggleModal={setIsModalOpen}>
          <Filters
            filtersFormState={filtersFormState}
            handleConsumerChange={handleConsumerChange}
            handleValueChange={handleValueChange}
            isMobile={true}
          />
        </FiltersMobile>
      )}

      <FiltersChips
        handleRemoveValue={handleRemoveValue}
        filters={appliedFilters}
        handleRemoveAll={handleRemoveAll}
      ></FiltersChips>
    </>
  )
}

export default EServiceCatalogFilters
