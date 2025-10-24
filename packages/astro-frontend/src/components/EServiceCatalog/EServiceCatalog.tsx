import { Container } from 'design-react-kit'
import EServiceCatalogFilters from './EServiceCatalogFilters'
import { EService } from '../../../../models/dist/types'
import EServiceCatalogItems from './EServiceCatalogItems'
import React from 'react'
import { useEServiceCatalogContext } from './EServiceCatalogContext'
import { getEServices } from '../../services/catalog.services'

type EServiceCatalogProps = {
  initialEservices: EService[]
  totalCount: number
}

export const EServiceCatalog: React.FC<EServiceCatalogProps> = ({
  initialEservices,
  totalCount: totalCountEservices,
}) => {
  const [eservices, setEservices] = React.useState<EService[]>(initialEservices)
  const [totalCount, setTotalCount] = React.useState<number>(totalCountEservices)
  const { eserviceActiveFilterState, applyFilters } = useEServiceCatalogContext()

  const onFiltersApply = async () => {
    applyFilters()
  }

  const fetchEservices = async () => {
    const eserviceResponse = await getEServices(eserviceActiveFilterState)

    setEservices(eserviceResponse.items)
    setTotalCount(eserviceResponse.total)
  }

  React.useEffect(() => {
    fetchEservices()
  }, [eserviceActiveFilterState])

  return (
    <>
      <Container className="p-3">
        <EServiceCatalogFilters handleSubmitRequest={onFiltersApply} />
      </Container>
      <EServiceCatalogItems eservices={eservices} totalCount={totalCount} />
    </>
  )
}
