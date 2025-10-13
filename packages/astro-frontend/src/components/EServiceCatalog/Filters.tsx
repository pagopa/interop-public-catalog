import {
  Button,
  Chip,
  ChipLabel,
  Col,
  Form,
  FormGroup,
  Icon,
  Input,
  Row,
  Select,
} from 'design-react-kit'
import React, { useEffect } from 'react'
import {
  FilterAutoCompleteValue,
  MultipleAutoComplete,
} from '../MultipleAutoComplete/MultipleAutoComplete.js'
import { BadgeFiltersSelected } from './BadgeFiltersSelected.js'
import { parseQueryStringToObject } from '../../utils/utils.js'

type FiltersProps = unknown

const optionAutoComplete: FilterAutoCompleteValue[] = [
  { label: 'Opzione 1', value: 'value-1' },
  { label: 'Opzione 2', value: 'value-2' },
  { label: 'Opzione 3', value: 'value-3' },
  { label: 'Opzione 4', value: 'value-4' },
  { label: 'Opzione 5', value: 'value-5' },
]
export type FiltersParams = {
  q?: string
  theme?: string
  provider?: FilterAutoCompleteValue[]
  consumer?: string
  [key: string]: string | undefined | string[] | FilterAutoCompleteValue[]
}
const Filters: React.FC<FiltersProps> = () => {
  const [filtersFormState, setFiltersFormState] = React.useState<FiltersParams>({
    provider: [],
  })
  const [appliedFilters, setAppliedFilters] = React.useState<FiltersParams>({})

  useEffect(() => {
    const initialParams = parseQueryStringToObject(window.location.search)

    setFiltersFormState(initialParams as FiltersParams)
    setAppliedFilters(initialParams as FiltersParams)
  }, [])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addParamsOnUrl(filtersFormState)
    setAppliedFilters(filtersFormState)
    // Fetch API!
  }

  const addParamsOnUrl = (filtersParams: FiltersParams) => {
    const urlSearchParams = new URLSearchParams()

    Object.keys(filtersParams).forEach((key: string) => {
      if (filtersParams[key]) {
        if (key === 'provider') {
          const filter = JSON.stringify(filtersParams[key].map((item) => [item.label, item.value]))
          urlSearchParams.append(key, filter)
        } else urlSearchParams.append(key, JSON.stringify(filtersParams[key]))
      }
    })

    const queryString = urlSearchParams.toString()
    const newUrl = `${window.location.pathname}?${queryString}`
    window.history.pushState({ path: newUrl }, '', newUrl)
  }

  const handleValueChange = (
    key: keyof FiltersParams,
    value: string | string[] | FilterAutoCompleteValue[]
  ) => {
    setFiltersFormState((prev) => ({
      ...prev,
      [key]: value,
    }))
  }
  const handleRemoveValue = (
    key: keyof FiltersParams,
    value: string | string[] | FilterAutoCompleteValue
  ) => {
    const { [key]: _, ...newState } = filtersFormState

    if (key === 'provider') {
      const newProviders = (filtersFormState.provider as FilterAutoCompleteValue[]).filter(
        (v) => v.value !== value
      )

      setFiltersFormState((prev) => ({
        ...prev,
        provider: newProviders,
      }))
      setAppliedFilters((prev) => ({
        ...prev,
        provider: newProviders,
      }))
      addParamsOnUrl({ ...filtersFormState, provider: newProviders })
      return
    }

    setFiltersFormState(newState)
    setAppliedFilters(newState)
    addParamsOnUrl(newState)
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
                options={optionAutoComplete}
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
            <Select
              id="selectExampleClassic"
              label="Filtra per ente fruitore"
              onChange={(value: string) => handleValueChange('consumer', value)}
            >
              <option label="Opzione 1">Value 1</option>
              <option label="Opzione 2">Value 2</option>
              <option label="Opzione 3">Value 3</option>
              <option label="Opzione 4">Value 4</option>
              <option label="Opzione 5">Value 5</option>
            </Select>
          </FormGroup>
        </Col>
      </Row>
      {/* </Form> */}

      <BadgeFiltersSelected
        handleRemoveValue={handleRemoveValue}
        filters={appliedFilters}
      ></BadgeFiltersSelected>
    </>
  )
}

export default Filters
