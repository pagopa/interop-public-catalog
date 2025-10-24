import { Button, Col, Form, FormGroup, Icon, Input, Popover, Row } from 'design-react-kit'
import React, { useEffect, useState } from 'react'
import {
  type FilterAutoCompleteValue,
  MultipleAutoComplete,
} from '../MultipleAutoComplete/MultipleAutoComplete.js'
import { TooltipIcon } from '../shared/TooltipIcon.js'
import { getLangFromUrl } from '../../i18n/utils.i18n.js'
import { useCatalogTranslations } from '../../i18n/catalog.i18n.js'
import { useEServiceCatalogContext } from './EServiceCatalogContext.jsx'
import type { CatalogFilterParams } from './types.js'
import { useAutocompleteTextInput } from '../../hooks/useAutoCompleteTextInput.jsx'
import { getConsumer, getProducer } from '../../services/catalog.services.js'

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
}
const Filters: React.FC<FiltersProps> = ({
  handleDraftFilterValueChange,
  onSubmit,
  isMobile,
  handleActiveFilterValueChange,
}) => {
  const currentLanguage = getLangFromUrl(window.location.pathname)
  const t = useCatalogTranslations(currentLanguage)

  const { eserviceFiltersState } = useEServiceCatalogContext()

  const [producerList, setProducerList] = React.useState([])
  const [consumerList, setConsumerList] = React.useState([])
  const [autoCompleteProviderInput, setAutoCompleteProviderInput] = useAutocompleteTextInput('')
  const [autoCompleteConsumerInput, setAutoCompleteConsumerInput] = useAutocompleteTextInput('')

  useEffect(() => {
    fetchTenants()
  }, [autoCompleteProviderInput])

  useEffect(() => {
    fetchConsumers()
  }, [autoCompleteConsumerInput])

  const fetchTenants = async () => {
    const producers = await getProducer(autoCompleteProviderInput)
    setProducerList(producers)
  }

  const fetchConsumers = async () => {
    const consumers = await getConsumer(autoCompleteConsumerInput)
    setConsumerList(consumers)
  }

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
        <Col lg="3">
          <MultipleAutoComplete
            label={t('filters.provider.label')}
            options={producerList}
            values={eserviceFiltersState.provider as unknown as FilterAutoCompleteValue[]}
            onTextInputChange={setAutoCompleteProviderInput}
            handleValuesChange={(values) => handleDraftFilterValueChange('provider', values)}
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
              options={consumerList}
              values={eserviceFiltersState.consumer as unknown as FilterAutoCompleteValue[]}
              onTextInputChange={setAutoCompleteConsumerInput}
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
            />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default Filters
