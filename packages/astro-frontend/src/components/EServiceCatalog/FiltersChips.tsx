import { Button, Chip as DRKChip, ChipLabel, Icon } from 'design-react-kit'
import type { FilterAutoCompleteValue } from '../MultipleAutoComplete/MultipleAutoComplete.js'
import { useCatalogTranslations } from '../../i18n/catalog.i18n.js'
import type { CatalogFilterParams } from './types.js'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'

type FiltersChipsProps = {
  label?: string
  filters: CatalogFilterParams
  handleRemoveValue: (
    key: keyof CatalogFilterParams,
    value: string | FilterAutoCompleteValue
  ) => void
  handleRemoveAll: () => void
  currentLocale: SupportedLanguage
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
  currentLocale,
}) => {
  const t = useCatalogTranslations(currentLocale)

  // Todo to improve this condition
  if (filters.consumer.length <= 0 && filters.provider.length <= 0 && filters.q === '') return null

  return (
    <>
      {filters &&
        Object.entries(filters).map(([key, value]) => {
          if (key === 'limit' || key === 'offset' || key === 'orderBy') return null
          if ((key === 'provider' || key === 'consumer') && Array.isArray(value)) {
            return value.map((v) => (
              <Chip
                key={`${key}-${v.value}`}
                label={`${t(`chip.${key}`)}: ${v.label}`}
                handleRemoveValue={() =>
                  handleRemoveValue(key as keyof CatalogFilterParams, v.value)
                }
              />
            ))
          } else {
            return (
              value && (
                <Chip
                  key={key}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  label={`${t(`chip.${key}`)}: ${value}`}
                  handleRemoveValue={() =>
                    handleRemoveValue(key as keyof CatalogFilterParams, value as string)
                  }
                />
              )
            )
          }
        })}

      <Button className="btn-link ms-3 p-0" onClick={handleRemoveAll}>
        {t('chip.remove_all')}
      </Button>
    </>
  )
}
