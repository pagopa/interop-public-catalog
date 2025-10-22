import { Container } from 'design-react-kit'
import EServiceCatalogFilters, { type EServiceCatalogFiltersParams } from './EServiceCatalogFilters'
import type { EService } from '../../../../models/dist/types'
import EServiceCatalogItems from './EServiceCatalogItems'
import React from 'react'

type EServiceCatalogProps = {
  initialEservices: EService[]
}

export const EServiceCatalog: React.FC<EServiceCatalogProps> = ({ initialEservices }) => {
  const [eservices, setEservices] = React.useState<EService[]>(initialEservices)

  const onFiltersChange = (filters: EServiceCatalogFiltersParams) => {
    console.log('Call API here', filters)
    alert('API')
  }
  return (
    <>
      <Container className="p-3">
        <EServiceCatalogFilters handleSubmitRequest={onFiltersChange} />
      </Container>
      <EServiceCatalogItems eservices={eservices} />
    </>
  )
}
