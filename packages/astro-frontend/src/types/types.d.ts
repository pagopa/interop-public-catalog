import type { z } from 'zod'
import type { ClientEnvConfig } from '../config/config'

declare module 'accessible-autocomplete/react' {
  interface AutocompleteProps {
    id: string
    source: string[] | ((query: string, populateResults: (results: string[]) => void) => void)

    // Altre opzioni
    autoselect?: boolean
    confirmOnBlur?: boolean
    cssNamespace?: string
    defaultValue?: string
    displayMenu?: 'inline' | 'overlay'
    minLength?: number
    name?: string
    onConfirm?: (confirmed: string) => void
    placeholder?: string
    required?: boolean
    showAllValues?: boolean
    showNoOptionsFound?: boolean
    inputClasses?: string
    hintClasses?: string
    menuAttributes?: Record<string, any>
    menuClasses?: string

    templates?: {
      inputValue?: (selectedSuggestion: string) => string
      suggestion?: (suggestion: string) => string
    }
    dropdownArrow?: (props: { className: string }) => string | React.ReactElement

    // Internazionalizzazione (i18n)
    tNoResults?: () => string
    tStatusQueryTooShort?: (minQueryLength: number) => string
    tStatusNoResults?: () => string
    tStatusSelectedOption?: (selectedOption: string, length: number, index: number) => string
    tStatusResults?: (
      length: number,
      contentSelectedOption: React.ReactElement
    ) => React.ReactElement
    tAssistiveHint?: () => string
  }
  // 3. Dichiariamo che questo modulo ha una funzione chiamata 'AutoComplete'
  // che accetta un oggetto di opzioni del tipo 'AutocompleteProps'
  const AutoComplete: (options: AutocompleteProps) => React.JSX.Element

  // 4. Dichiariamo che questa funzione è l'esportazione di default del modulo
  export default AutoComplete
}

declare global {
  interface Window {
    env: ClientEnvConfig
  }
}
