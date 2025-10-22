import { Container } from 'design-react-kit'
import EServiceCatalogFilters from './EServiceCatalogFilters'
import { EService } from '../../../../models/dist/types'
import EServiceCatalogItems from './EServiceCatalogItems'
import React from 'react'
import { EServiceCatalogContextProvider, useEServiceCatalogContext } from './EServiceCatalogContext'

type EServiceCatalogProps = {
  initialEservices: EService[]
}

export const EServiceCatalog: React.FC<EServiceCatalogProps> = ({ initialEservices }) => {
  const [eservices, setEservices] = React.useState<EService[]>(initialEservices)
  const { eserviceActiveFilterState, eserviceFiltersState, applyFilters } =
    useEServiceCatalogContext()

  const onFiltersApply = () => {
    applyFilters()
  }

  React.useEffect(() => {
    console.log('Active filters changed, call api and update chip (?)', eserviceActiveFilterState)
  }, [eserviceActiveFilterState])

  return (
    <>
      <Container className="p-3">
        <EServiceCatalogFilters handleSubmitRequest={onFiltersApply} />
      </Container>
      <EServiceCatalogItems eservices={eservices} />
    </>
  )
}
