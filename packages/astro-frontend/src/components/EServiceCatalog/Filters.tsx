import { Button, Col, Form, FormGroup, Input, Row } from 'design-react-kit'
import React, { useEffect } from 'react'
import {
  FilterAutoCompleteValue,
  MultipleAutoComplete,
} from '../MultipleAutoComplete/MultipleAutoComplete.js'
import { FiltersChips } from './FiltersChips.js'
import { addParamsWithinUrl, parseQueryStringToParams } from '../../utils/utils.js'

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

  useEffect(() => {
    const initialParams: FiltersParams = parseQueryStringToParams(window.location.search)
    setFiltersFormState(initialParams)
    setAppliedFilters(initialParams)
  }, [])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      <h5 className="mb-5">Cerca nel catalogo</h5>
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Input
                label="Cerca per parola chiave"
                id="completeValidation-name"
                type="text"
                value={filtersFormState.q ?? ''}
                validationText="Validato!"
                valid={filtersFormState.q != ''}
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
            <FormGroup>
              <MultipleAutoComplete
                label="Filtra per ente erogatore"
                options={optionAutoCompleteProvider}
                values={filtersFormState.provider as unknown as FilterAutoCompleteValue[]}
                handleValuesChange={(values) => handleValueChange('provider', values)}
              />
            </FormGroup>
          </Col>
          <Col>
            <Button
              color="primary"
              type="submit"
              size="xs"
              onClick={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}
            >
              Applica
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
              />
            </FormGroup>
            {/* <Select
              id="selectExampleClassic"
              label="Filtra per ente fruitore"
              value={filtersFormState.consumer ?? ''}
              onChange={(value: string) => handleValueChange('consumer', value)}
            >
              <option label="Opzione 1">Value 1</option>
              <option label="Opzione 2">Value 2</option>
              <option label="Opzione 3">Value 3</option>
              <option label="Opzione 4">Value 4</option>
              <option label="Opzione 5">Value 5</option>
            </Select> */}
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
