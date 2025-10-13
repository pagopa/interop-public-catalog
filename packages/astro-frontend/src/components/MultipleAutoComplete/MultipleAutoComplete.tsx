import Autocomplete from '@mui/material/Autocomplete'
import { FormGroup, Icon, Input } from 'design-react-kit'
import './MultiSelectChips.css'
import React from 'react'

export type FilterAutoCompleteValue = {
  label: string
  value: string
}
type MultipleAutoCompleteProps = {
  label: string
  options: FilterAutoCompleteValue[]
  values: FilterAutoCompleteValue[]

  handleValuesChange: (values: FilterAutoCompleteValue[]) => void
}

export const MultipleAutoComplete: React.FC<MultipleAutoCompleteProps> = ({
  label,
  options,
  handleValuesChange,
  values,
}) => {
  const handleChange = (_event: React.SyntheticEvent, values: FilterAutoCompleteValue[]) => {
    handleValuesChange(values)
  }
  const selectedElementLabel =
    values && values.length > 0 ? `${values.length} elementi selezionati` : ''

  return (
    <FormGroup className="select-wrapper">
      <label>{label}</label>
      <Autocomplete
        disableCloseOnSelect
        multiple
        className="mt-1"
        getOptionLabel={(option) => option.label}
        sx={() => ({
          display: 'inline-block',
          '& input': {
            width: 400,
          },
        })}
        value={values || []}
        onChange={handleChange}
        options={options}
        isOptionEqualToValue={(option, { value }) => option.value === value}
        renderOption={(props, option, { selected }) => {
          const { key, ...optionProps } = props

          return (
            <FormGroup check>
              <li key={key} {...optionProps}>
                <Input id={`checkbox-${key}`} type="checkbox" checked={selected} />
                <label className="label" style={{ fontFamily: 'Titillium Web' }}>
                  {option.label}
                </label>
              </li>
            </FormGroup>
          )
        }}
        renderInput={(params) => {
          const isOpen = params.inputProps['aria-expanded']
          const icon = isOpen ? 'it-chevron-left' : 'it-chevron-right'
          return (
            <div ref={params.InputProps.ref} className="select-wrapper">
              <input type="text" {...params.inputProps} placeholder={selectedElementLabel}></input>
              <span
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '10%',
                  pointerEvents: 'none',
                  transform: 'rotate(90deg)',
                }}
              >
                <Icon className="icon icon-secondary" color="primary" icon={icon} />
              </span>
            </div>
          )
        }}
      />
      <div></div>
    </FormGroup>
  )
}
