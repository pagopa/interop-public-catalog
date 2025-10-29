import { Button } from 'design-react-kit'
import React, { useEffect } from 'react'
import { type FilterAutoCompleteValue } from '../MultipleAutoComplete/MultipleAutoComplete.js'
import { FiltersChips } from './FiltersChips.js'
import { Popover } from 'bootstrap-italia'
import { getLangFromUrl } from '../../i18n/utils.i18n.js'
import { FiltersMobile } from './FiltersMobile.jsx'
import Filters from './Filters.jsx'
import { useIsMobile } from '../../hooks/useIsMobile.jsx'
import { useCatalogTranslations } from '../../i18n/catalog.i18n.js'
import { useEServiceCatalogContext } from './EServiceCatalogContext.jsx'
import type { CatalogFilterParams } from './types.js'

export type EServiceCatalogFiltersParams = {
  q?: string
  theme?: string
  provider?: FilterAutoCompleteValue[]
  consumer?: FilterAutoCompleteValue[]
}

export type EServiceCatalogFilterKeys = keyof EServiceCatalogFiltersParams

type EServiceCatalogFiltersProps = {
  handleSubmitRequest: () => void
}
const EServiceCatalogFilters: React.FC<EServiceCatalogFiltersProps> = ({ handleSubmitRequest }) => {
  const currentLanguage = getLangFromUrl(window.location.pathname)
  const t = useCatalogTranslations(currentLanguage)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const isMobile = useIsMobile()

  const {
    eserviceActiveFilterState,
    handleDraftFilterValueChange,
    handleActiveFilterValueChange,
    handleRemoveActiveFilterValue,
    handleRemoveAllActiveFilterValues,
  } = useEServiceCatalogContext()

  useEffect(() => {
    const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    )
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new Popover(popoverTriggerEl, {
        trigger: 'click focus',
      })
    })
  }, [])

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleSubmitRequest()
  }

  const handleRemoveFilterValue = (
    key: keyof CatalogFilterParams,
    value: string | FilterAutoCompleteValue
  ) => {
    handleRemoveActiveFilterValue(key, value)
  }

  return (
    <>
      <h5 className="mb-5 d-none d-lg-block">{t('filters.title')}</h5>
      <div className="d-block d-sm-none d-flex justify-content-between align-items-center mb-4">
        <h5>{t('filters.title')}</h5>
        <Button color="primary" outline size="sm" onClick={() => setIsModalOpen(true)}>
          {t('filters.mobile.button')}
        </Button>
      </div>

      {!isMobile ? (
        <Filters
          handleActiveFilterValueChange={handleActiveFilterValueChange}
          handleDraftFilterValueChange={handleDraftFilterValueChange}
          isMobile={false}
          onSubmit={onSubmit}
        />
      ) : (
        <FiltersMobile onSubmit={onSubmit} isOpen={isModalOpen} toggleModal={setIsModalOpen}>
          <Filters
            handleActiveFilterValueChange={handleActiveFilterValueChange}
            handleDraftFilterValueChange={handleDraftFilterValueChange}
            isMobile={true}
          />
        </FiltersMobile>
      )}

      <FiltersChips
        handleRemoveValue={handleRemoveFilterValue}
        filters={eserviceActiveFilterState}
        handleRemoveAll={handleRemoveAllActiveFilterValues}
      ></FiltersChips>
    </>
  )
}

export default EServiceCatalogFilters
