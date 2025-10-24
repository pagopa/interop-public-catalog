import React from 'react'
import { debounce } from '../utils/utils'

export function useAutocompleteTextInput(
  initialState = ''
): readonly [string, (value: string) => void] {
  const [autocompleteInput, setAutocompleteInput] = React.useState(initialState)

  /**
   * A memoized debounce function that sets the autocomplete input value if the input length is
   * greater than or equal to 3, and clears the input otherwise.
   */
  const setDebouncedAutocompleteInput = React.useMemo(
    () =>
      debounce((value: string) => {
        if (value.length >= 3) {
          setAutocompleteInput(value)
          return
        }
        setAutocompleteInput('')
      }, 300),
    []
  )

  return [autocompleteInput, setDebouncedAutocompleteInput] as const
}
