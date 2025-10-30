import { Button, Col, Form, FormGroup, Icon, Input, Row } from 'design-react-kit'
import React from 'react'
import {
  type FilterAutoCompleteValue,
  MultipleAutoComplete,
} from '../MultipleAutoComplete/MultipleAutoComplete.js'
import { TooltipIcon } from '../shared/TooltipIcon.js'
import { useCatalogTranslations } from '../../i18n/catalog.i18n.js'
import { useEServiceCatalogContext } from './EServiceCatalogContext.jsx'
import type { CatalogFilterParams } from './types.js'
import { useAutocompleteTextInput } from '../../hooks/useAutoCompleteTextInput.jsx'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import useSWRImmutable from 'swr/immutable'
import { apiService } from '../../services/api.services.js'
import { categoriesMap } from '../../server/config/categories.js'

export type FiltersParams = {
  q?: string
  theme?: string
  provider?: FilterAutoCompleteValue[]
  consumer?: FilterAutoCompleteValue[]
}

export type FilterParamsKeys = keyof FiltersParams

const TENANT_MACROCATEGORIES_OPTIONS = Object.keys(categoriesMap).map((categoryName) => {
  return {
    value: categoryName,
    label: categoryName,
  }
})

type FiltersProps = {
  handleDraftFilterValueChange: (
    key: keyof CatalogFilterParams,
    value: string | FilterAutoCompleteValue[]
  ) => void
  onSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void
  handleActiveFilterValueChange: (
    key: keyof CatalogFilterParams,
    value: string | number | FilterAutoCompleteValue[]
  ) => void
  isMobile: boolean
  currentLocale: SupportedLanguage
}
const Filters: React.FC<FiltersProps> = ({
  handleDraftFilterValueChange,
  onSubmit,
  isMobile,
  handleActiveFilterValueChange,
  currentLocale,
}) => {
  const t = useCatalogTranslations(currentLocale)

  const { eserviceFiltersState } = useEServiceCatalogContext()

  const [autoCompleteProviderInput, setAutoCompleteProviderInput] = useAutocompleteTextInput('')

  const { data: producerList = [] } = useSWRImmutable(
    ['producers', autoCompleteProviderInput],
    async ([_, q]) =>
      apiService
        .getTenants(q)
        .then((res) => res.results.map((r) => ({ value: r.producer_id, label: r.name })))
  )

  return (
    <Form>
      <Row id="eservice-filters">
        <Col className="pe-1" lg="3">
          <FormGroup className="input-filter-key">
            <Input
              hasIconLeft
              iconLeft={<Icon aria-hidden icon="it-search" size="sm" className="icon-search" />}
              label={t('filters.q.label')}
              id="completeValidation-name"
              type="text"
              maxLength={100}
              className="mt-4"
              placeholder={t('filters.q.placeholder')}
              value={eserviceFiltersState.q ?? ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.preventDefault()
                handleDraftFilterValueChange('q', e.target.value)
              }}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                }
              }}
            />
          </FormGroup>
        </Col>
        <Col lg="3" className="pe-1">
          <MultipleAutoComplete
            label={t('filters.provider.label')}
            options={producerList}
            values={eserviceFiltersState.provider as unknown as FilterAutoCompleteValue[]}
            onTextInputChange={setAutoCompleteProviderInput}
            handleValuesChange={(values) => handleDraftFilterValueChange('provider', values)}
            currentLocale={currentLocale}
          />
        </Col>
        {!isMobile && (
          <Col className="mt-4">
            <Button
              color="primary"
              type="submit"
              size="xs"
              onClick={(e) => onSubmit && onSubmit(e)}
            >
              {t('filters.submit')}
            </Button>
          </Col>
        )}
      </Row>
      <Row>
        <Col lg="3" className="pe-1">
          <FormGroup>
            <MultipleAutoComplete
              label={t('filters.consumer.label')}
              options={TENANT_MACROCATEGORIES_OPTIONS}
              values={eserviceFiltersState.consumer as unknown as FilterAutoCompleteValue[]}
              onTextInputChange={() => {}}
              handleValuesChange={
                isMobile
                  ? (values) => handleDraftFilterValueChange('consumer', values)
                  : (values) => handleActiveFilterValueChange('consumer', values)
              }
              tooltipIconRender={
                <div>
                  {' '}
                  <TooltipIcon
                    title={t('filter.popover.consumer.title')}
                    content={t('filter.popover.consumer.content')}
                    iconName="it-info-circle"
                    iconColor="primary"
                    iconSize="sm"
                  />
                </div>
              }
              currentLocale={currentLocale}
            />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default Filters
