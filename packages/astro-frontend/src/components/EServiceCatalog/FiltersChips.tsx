import { Button, Chip as DRKChip, ChipLabel, Icon } from 'design-react-kit'
import type { FiltersParams } from './Filters.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'
import type { FilterAutoCompleteValue } from '../MultipleAutoComplete/MultipleAutoComplete.js'
import { getLangFromUrl } from '../../i18n/utils.i18n.js'

type FiltersChipsProps = {
  label?: string
  filters: FiltersParams
  handleRemoveValue: (key: keyof FiltersParams, value: string | FilterAutoCompleteValue) => void
  handleRemoveAll: () => void
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
export const FiltersChips: React.FC<FiltersChipsProps> = ({
  filters,
  handleRemoveValue,
  handleRemoveAll,
}) => {
  const currentLanguage = getLangFromUrl(window.location.pathname)
  const t = useUiTranslations(currentLanguage)

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
      <Button className="btn-link ms-3 p-0" onClick={handleRemoveAll}>
        {t('chip.remove_all')}
      </Button>
    </>
  )
}
