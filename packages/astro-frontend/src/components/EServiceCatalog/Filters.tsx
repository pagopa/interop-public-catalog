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

const Filters = () => {
  const [filtersFormState, setFiltersFormState] = React.useState<FiltersParams>({
    provider: [],
    consumer: [],
  })
  const [appliedFilters, setAppliedFilters] = React.useState<FiltersParams>({})
  const currentLanguage = getLangFromUrl(window.location.pathname)
  const t = useUiTranslations(currentLanguage)

  useEffect(() => {
    const initialParams: FiltersParams = parseQueryStringToParams(window.location.search)
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
    key: keyof FiltersParams,
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

  const handleRemoveValue = (key: keyof FiltersParams, value: string | FilterAutoCompleteValue) => {
    const getUpdatedState = (): FiltersParams => {
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
      <h5 className="mb-5">{t('filter.find')}</h5>
      <Form>
        <Row>
          <Col>
            <FormGroup className="input-filter-key">
              <Input
                hasIconLeft
                iconLeft={<Icon aria-hidden icon="it-search" size="sm" className="icon-search" />}
                label={t('filter.q.label')}
                id="completeValidation-name"
                type="text"
                className="mt-4"
                placeholder={t('filter.q.placeholder')}
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
          <Col>
            <MultipleAutoComplete
              label={t('filter.providrer.label')}
              options={optionAutoCompleteProvider}
              values={filtersFormState.provider as unknown as FilterAutoCompleteValue[]}
              handleValuesChange={(values) => handleValueChange('provider', values)}
            />
          </Col>
          <Col className="mt-4">
            <Button color="primary" type="submit" size="xs" onClick={(e) => onSubmit(e)}>
              {t('filter.apply')}
            </Button>
          </Col>
        </Row>
      </Form>
      {/* <Form> */}
      <Row>
        <Col lg="3">
          <FormGroup>
            <FormGroup>
              <MultipleAutoComplete
                label="Filtra per ente fruitore"
                options={optionAutoCompleteConsumer}
                values={filtersFormState.consumer as unknown as FilterAutoCompleteValue[]}
                handleValuesChange={handleConsumerChange}
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
          </FormGroup>
        </Col>
      </Row>
      {/* </Form> */}

      <FiltersChips
        handleRemoveValue={handleRemoveValue}
        filters={appliedFilters}
        handleRemoveAll={handleRemoveAll}
      ></FiltersChips>
    </>
  )
}

export default Filters
