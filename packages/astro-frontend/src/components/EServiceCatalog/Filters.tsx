import { Button, Col, Form, FormGroup, Icon, Input, Row } from 'design-react-kit'
import React, { useEffect } from 'react'
import {
  type FilterAutoCompleteValue,
  MultipleAutoComplete,
} from '../MultipleAutoComplete/MultipleAutoComplete.js'
import { TooltipIcon } from '../shared/TooltipIcon.js'
import { getLangFromUrl } from '../../i18n/utils.i18n.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'
import type { EServiceCatalogFiltersParams } from './EServiceCatalogFilters.jsx'
import { useCatalogTranslations } from '../../i18n/catalog.i18n.js'

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

export type FiltersParams = {
  q?: string
  theme?: string
  provider?: FilterAutoCompleteValue[]
  consumer?: FilterAutoCompleteValue[]
}

export type FilterParamsKeys = keyof FiltersParams

type FiltersProps = {
  filtersFormState: EServiceCatalogFiltersParams
  handleValueChange: (key: FilterParamsKeys, value: string | FilterAutoCompleteValue[]) => void
  onSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void
  handleConsumerChange: (values: FilterAutoCompleteValue[]) => void
  isMobile: boolean
}
const Filters: React.FC<FiltersProps> = ({
  filtersFormState,
  handleValueChange,
  onSubmit,
  isMobile,
  handleConsumerChange,
}) => {
  const currentLanguage = getLangFromUrl(window.location.pathname)
  const t = useCatalogTranslations(currentLanguage)

  return (
    <Form>
      <Row>
        <Col lg="3">
          <FormGroup className="input-filter-key">
            <Input
              hasIconLeft
              iconLeft={<Icon aria-hidden icon="it-search" size="sm" className="icon-search" />}
              label={t('filters.q.label')}
              id="completeValidation-name"
              type="text"
              className="mt-4"
              placeholder={t('filters.q.placeholder')}
              value={filtersFormState.q ?? ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.preventDefault()
                handleValueChange('q', e.target.value)
              }}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                }
              }}
            />
          </FormGroup>
        </Col>
        <Col lg="3">
          <MultipleAutoComplete
            label={t('filters.provider.label')}
            options={optionAutoCompleteProvider}
            values={filtersFormState.provider as unknown as FilterAutoCompleteValue[]}
            handleValuesChange={(values) => handleValueChange('provider', values)}
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
        <Col lg="3">
          <FormGroup>
            <MultipleAutoComplete
              label={t('filters.consumer.label')}
              options={optionAutoCompleteConsumer}
              values={filtersFormState.consumer as unknown as FilterAutoCompleteValue[]}
              handleValuesChange={
                isMobile ? (values) => handleValueChange('consumer', values) : handleConsumerChange
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
            />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default Filters
