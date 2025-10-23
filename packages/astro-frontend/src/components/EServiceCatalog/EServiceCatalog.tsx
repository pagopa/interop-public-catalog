import { Container } from 'design-react-kit'
import EServiceCatalogFilters from './EServiceCatalogFilters'
import { EService } from '../../../../models/dist/types'
import EServiceCatalogItems from './EServiceCatalogItems'
import React from 'react'
import { useEServiceCatalogContext } from './EServiceCatalogContext'

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
    const catalogUrl = new URL('/api/catalog', window.location.origin)

    const q = eserviceActiveFilterState.q
    const offset = eserviceActiveFilterState.offset
    const producerIds = eserviceActiveFilterState.provider.map((p) => p.value).join(',')

    catalogUrl.searchParams.set('q', q)
    catalogUrl.searchParams.set('offset', offset.toString())
    catalogUrl.searchParams.set('producerIds', producerIds)

    const response = await fetch(catalogUrl)
    const eservices = await response.json()

    setEservices(eservices.items)
    setTotalCount(eservices.total)
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
