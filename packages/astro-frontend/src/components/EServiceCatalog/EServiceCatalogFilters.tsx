import { Button, Col, Form, FormGroup, Icon, Input, Row } from 'design-react-kit'
import React, { useEffect } from 'react'
import {
  type FilterAutoCompleteValue,
  MultipleAutoComplete,
} from '../MultipleAutoComplete/MultipleAutoComplete.js'
import { FiltersChips } from './FiltersChips.js'
import { addParamsWithinUrl, parseQueryStringToParams } from '../../utils/utils.js'
import { TooltipIcon } from '../shared/TooltipIcon.js'
import { Popover } from 'bootstrap-italia'
import { getLangFromUrl } from '../../i18n/utils.i18n.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'
import { FiltersMobile } from './FiltersMobile.jsx'
import Filters from './Filters.jsx'
import { useIsMobile } from '../../hooks/useIsMobile.jsx'

const optionAutoCompleteProvider: FilterAutoCompleteValue[] = [
  { label: 'Opzione 1', value: 'value-1' },
  { label: 'Opzione 2', value: 'value-2' },
  { label: 'Opzione 3', value: 'value-3' },
  { label: 'Opzione 4', value: 'value-4' },
  { label: 'Opzione 5', value: 'value-5' },
]

const optionAutoCompleteConsumer: FilterAutoCompleteValue[] = [
  { label: 'Opzione A', value: 'value-A' },
  { label: 'Opzione B', value: 'value-B' },
  { label: 'Opzione C', value: 'value-C' },
  { label: 'Opzione D', value: 'value-D' },
  { label: 'Opzione E', value: 'value-E' },
]

export type EServiceCatalogFiltersParams = {
  q?: string
  theme?: string
  provider?: FilterAutoCompleteValue[]
  consumer?: FilterAutoCompleteValue[]
}

export type EServiceCatalogFilterKeys = keyof EServiceCatalogFiltersParams

const EServiceCatalogFilters = () => {
  const [filtersFormState, setFiltersFormState] = React.useState<EServiceCatalogFiltersParams>({
    provider: [],
    consumer: [],
  })
  const [appliedFilters, setAppliedFilters] = React.useState<EServiceCatalogFiltersParams>({})
  const currentLanguage = getLangFromUrl(window.location.pathname)
  const t = useUiTranslations(currentLanguage)
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
    e.preventDefault()
    addParamsWithinUrl(filtersFormState)
    setAppliedFilters(filtersFormState)
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
    addParamsWithinUrl(updatedState)
  }

  const handleRemoveAll = () => {
    setFiltersFormState({})
    setAppliedFilters({})
    addParamsWithinUrl({})
  }

  return (
    <>
      <h5 className="mb-5 d-none d-lg-block">{t('filter.find')}</h5>
      <div className="d-block d-sm-none d-flex justify-content-between align-items-center mb-4">
        <h5>{t('filter.find')}</h5>
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
        <FiltersMobile isOpen={isModalOpen} toggleModal={setIsModalOpen}>
          <Filters
            filtersFormState={filtersFormState}
            handleConsumerChange={handleConsumerChange}
            handleValueChange={handleValueChange}
            isMobile={true}
            onSubmit={onSubmit}
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
