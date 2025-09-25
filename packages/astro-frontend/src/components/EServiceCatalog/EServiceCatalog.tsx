import { Container, Row, Col } from 'design-react-kit'
import React from 'react'
import EServiceCard from '../EServiceCard.js'

type EService = {
  name: string
  description: string
  eserviceId: string
  descriptorId: string
}

type EServiceCatalogProps = {
  eservices: Array<EService>
}

const EServiceCatalog: React.FC<EServiceCatalogProps> = ({ eservices }) => {
  // if (!eservices) return <div>Non ci sono E-Service da mostrare</div>
  const chunkArray = (eservices: EService[], eservicesPerRow: number): EService[][] => {
    const chunkedArray: EService[][] = []
    for (let i = 0; i < (eservices.length <= 12 ? eservices.length : 12); i += eservicesPerRow) {
      chunkedArray.push(eservices.slice(i, i + eservicesPerRow))
    }
    return chunkedArray
  }

  const rows = chunkArray(eservices, 3)

  return (
    <Container className="py-5">
      {rows.map((rowItems) => (
        <Row>
          {rowItems.map((eservice) => (
            <Col xs="4">
              <EServiceCard title={eservice.name} description={eservice.description} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  )
}

export default EServiceCatalog
