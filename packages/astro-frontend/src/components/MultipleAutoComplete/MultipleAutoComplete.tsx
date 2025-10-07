import Autocomplete from '@mui/material/Autocomplete'
import Checkbox from '@mui/material/Checkbox'
import { FormGroup } from 'design-react-kit'
import './MultiSelectChips.css'
import TextField from '@mui/material/TextField'
import React from 'react'

const options = ['Option 1', 'Option 2 ', 'Option 3', 'Option 4', 'Option 5']

type MultipleAutoCompleteProps = {
  label: string
}

export const MultipleAutoComplete: React.FC<MultipleAutoCompleteProps> = ({ label }) => {
  const [valuesIds, setValuesIds] = React.useState<string[]>([])

  const handleChange = (_event: React.SyntheticEvent, values: string[]) => {
    setValuesIds(values)
  }

  const selectedElementLabel =
    valuesIds.length > 0 ? `${valuesIds.length} elementi selezionati` : ''

  return (
    <FormGroup className="select-wrapper">
      <label>{label}</label>
      <Autocomplete
        disableCloseOnSelect
        multiple
        sx={(theme) => ({
          display: 'inline-block',
          '& input': {
            width: 200,
          },
        })}
        onChange={handleChange}
        options={options}
        renderOption={(props, option, { selected }) => {
          const { key, ...optionProps } = props
          return (
            <li key={key} {...optionProps}>
              <Checkbox style={{ marginRight: 8 }} checked={selected} />
              <label>{option}</label>
            </li>
          )
        }}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} placeholder={selectedElementLabel}></input>
          </div>
        )}
      />
    </FormGroup>
  )
}
