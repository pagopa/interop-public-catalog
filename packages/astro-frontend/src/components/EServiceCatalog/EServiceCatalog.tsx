import {
  Container,
  Row,
  Col,
  Icon,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem,
} from 'design-react-kit'
import React from 'react'
import { EServiceCard } from '../shared/EServiceCard.jsx'
import { chunkEServiceArray } from '../../utils/utils.js'
import { getLangFromUrl } from '../../i18n/utils.i18n.js'
import Pagination from '../shared/Pagination/Pagination.js'

export type EService = {
  name: string
  description: string
  eserviceId: string
  descriptorId: string
}

type EServiceCatalogProps = {
  eservices: EService[]
}

const EServiceCatalog: React.FC<EServiceCatalogProps> = ({ eservices }) => {
  // if (!eservices) return <div>Non ci sono E-Service da mostrare</div>

  const rows = chunkEServiceArray(eservices, 3)

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <span className="pe-3 border-end">totale risultati</span>
          <a className="ms-3">
            Copia URL dei risultati <Icon icon="it-copy" size="sm" className="ms-2" />
          </a>
        </div>
        <div>
          <Dropdown>
            <DropdownToggle caret className="text-primary">
              Ordina per
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size="12">
                  <LinkList>
                    <LinkListItem inDropdown href="#">
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem inDropdown href="#">
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      {rows.map((rowItems, rowIndex) => (
        <Row key={rowIndex}>
          {rowItems.map((eservice, eserviceIndex) => (
            <Col xs="4" key={eserviceIndex}>
              <EServiceCard
                currentLocale={getLangFromUrl(window.location.pathname)}
                name={eservice.name}
                producerName="Test"
                description={eservice.description}
              />
            </Col>
          ))}
        </Row>
      ))}
      <Pagination currentPage={3} totalPages={7}></Pagination>
    </Container>
  )
}

export default EServiceCatalog
