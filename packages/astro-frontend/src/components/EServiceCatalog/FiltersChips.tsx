import { Button, Chip as DRKChip, ChipLabel, Icon } from 'design-react-kit'
import { FiltersParams } from './Filters.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'
import { FilterAutoCompleteValue } from '../MultipleAutoComplete/MultipleAutoComplete.js'

type FiltersChipsProps = {
  label?: string
  filters: FiltersParams
  handleRemoveValue: (key: keyof FiltersParams, value: string | FilterAutoCompleteValue) => void
}

const Chip: React.FC<{ key: string; label: string; handleRemoveValue?: () => void }> = ({
  key,
  label,
  handleRemoveValue,
}) => {
  return (
    <DRKChip key={key} color="primary" className="no-hover me-1 mb-1">
      <ChipLabel className="no-hover text-primary">{label}</ChipLabel>
      <Button onClick={handleRemoveValue}>
        <Icon icon="it-close" color="primary" />
      </Button>
    </DRKChip>
  )
}
export const FiltersChips: React.FC<FiltersChipsProps> = ({ filters, handleRemoveValue }) => {
  const t = useUiTranslations(window.location.pathname)

  if (Object.keys(filters).length === 0) return null
  return (
    <>
      {filters &&
        Object.entries(filters).map(([key, value]) => {
          console.log('key', key)
          if ((key === 'provider' || key === 'consumer') && Array.isArray(value)) {
            return value?.map((v) => (
              <Chip
                key={`${key}-${v.value}`}
                label={`${t(`chip.${key}`)}: ${v.label}`}
                handleRemoveValue={() => handleRemoveValue(key as keyof FiltersParams, v.value)}
              />
            ))
          } else {
            return (
              <Chip
                key={key}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                label={`${t(`chip.${key}`)}: ${value}`}
                handleRemoveValue={() =>
                  handleRemoveValue(key as keyof FiltersParams, value as string)
                }
              />
            )
          }
        })}
    </>
  )
}
