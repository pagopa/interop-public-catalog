import { Badge, Button, Chip, ChipLabel, Icon } from 'design-react-kit'
import { FiltersParams } from './Filters.js'

type BadgeFiltersSelectedProps = {
  label?: string
  filters: FiltersParams
}
export const BadgeFiltersSelected: React.FC<BadgeFiltersSelectedProps> = ({ label, filters }) => {
  console.log('filtri selezionati', filters)
  if (Object.keys(filters).length === 0) return null
  return (
    <>
      {filters &&
        Object.entries(filters).map(([key, value]) => (
          <Chip key={key} color="primary" className="no-hover">
            <ChipLabel className="no-hover text-primary">{value}</ChipLabel>
            <Button>
              <Icon icon="it-close" color="primary" />
            </Button>
          </Chip>
        ))}
    </>
  )
}
