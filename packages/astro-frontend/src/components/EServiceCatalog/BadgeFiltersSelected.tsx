import { Button, Chip, ChipLabel, Icon } from 'design-react-kit'
import { FiltersParams } from './Filters.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'
import { FilterAutoCompleteValue } from '../MultipleAutoComplete/MultipleAutoComplete.js'

type BadgeFiltersSelectedProps = {
  label?: string
  filters: FiltersParams
  handleRemoveValue: (key: keyof FiltersParams, value: string | FilterAutoCompleteValue) => void
}
const WrappedChip: React.FC<{ key: string; label: string; handleRemoveValue?: () => void }> = ({
  key,
  label,
  handleRemoveValue,
}) => {
  return (
    <Chip key={key} color="primary" className="no-hover me-1 mb-1">
      <ChipLabel className="no-hover text-primary">{label}</ChipLabel>
      <Button onClick={handleRemoveValue}>
        <Icon icon="it-close" color="primary" />
      </Button>
    </Chip>
  )
}
export const BadgeFiltersSelected: React.FC<BadgeFiltersSelectedProps> = ({
  filters,
  handleRemoveValue,
}) => {
  const t = useUiTranslations(window.location.pathname)

  console.log('filters:', filters)

  if (Object.keys(filters).length === 0) return null
  return (
    <>
      {filters &&
        Object.entries(filters).map(([key, value]) =>
          Array.isArray(value) &&
          value.every(
            (v) => typeof v === 'object' && v !== null && 'label' in v && 'value' in v
          ) ? (
            (value as FilterAutoCompleteValue[]).map((v) => (
              <WrappedChip
                key={`${key}-${v.value}`}
                label={`${t(`chip.${key}`)}: ${v.label}`}
                handleRemoveValue={() => handleRemoveValue(key as keyof FiltersParams, v.value)}
              />
            ))
          ) : (
            <WrappedChip
              key={key}
              label={`${t(`chip.${key}`)}: ${value}`}
              handleRemoveValue={() =>
                handleRemoveValue(key as keyof FiltersParams, value as string)
              }
            />
          )
        )}
    </>
  )
}
