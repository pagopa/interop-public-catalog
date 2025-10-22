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
import React, { useEffect } from 'react'
import { EServiceCard } from '../shared/EServiceCard.jsx'
import { chunkEServiceArray } from '../../utils/utils.js'
import { getLangFromUrl } from '../../i18n/utils.i18n.js'
import { EService } from '../../../../models/src/types/eservice.js'
import Pagination from '../shared/Pagination/Pagination.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'
import { useCatalogTranslations } from '../../i18n/catalog.i18n.js'

type EServiceCatalogProps = {
  eservices: EService[]
}

type OrderKey = 'RECENT_ASC' | 'RECENT_DESC' | 'NAME_ASC' | 'NAME_DESC'

const EServiceCatalog: React.FC<EServiceCatalogProps> = ({ eservices }) => {
  // if (!eservices) return <div>Non ci sono E-Service da mostrare</div>

  const rows = chunkEServiceArray(eservices, 3)
  const [order, setOrder] = React.useState<OrderKey>('RECENT_ASC')
  const currentLanguage = getLangFromUrl(window.location.pathname)
  const t = useCatalogTranslations(currentLanguage)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const orderParam = urlParams.get('order') as OrderKey | null
    if (orderParam) setOrder(orderParam)
  }, [])

  const handleOrder = (orderKey: OrderKey) => {
    const urlParams = new URLSearchParams(window.location.search)
    setOrder(orderKey)
    urlParams.set('order', orderKey)
    window.history.pushState({}, '', `${window.location.pathname}?${urlParams}`)
  }

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <span className="">
            <b className="me-2">
              <b>11.445</b>
            </b>
            {t('resultsCount')}
          </span>
          <span className="ms-2 d-none d-lg-block border-start"></span>
          <a className="ms-2 d-none d-lg-block">
            {t('copyUrl')} <Icon icon="it-copy" size="sm" color="primary" className="ms-2" />
          </a>
        </div>
        <div>
          <Dropdown id="order-by">
            <DropdownToggle caret className="text-primary pe-0">
              {t('orderBy.label')}:{' '}
            </DropdownToggle>
            <DropdownMenu>
              <LinkList>
                <LinkListItem
                  active={order === 'RECENT_ASC'}
                  onClick={() => handleOrder('RECENT_ASC')}
                  inDropdown
                >
                  <span>{t('order.recent_asc')}</span>
                </LinkListItem>
                <LinkListItem
                  active={order === 'RECENT_DESC'}
                  onClick={() => handleOrder('RECENT_DESC')}
                  inDropdown
                >
                  <span>{t('order.recent_desc')}</span>
                </LinkListItem>
                <LinkListItem
                  active={order === 'NAME_ASC'}
                  onClick={() => handleOrder('NAME_ASC')}
                  inDropdown
                >
                  <span>{t('order.name_asc')}</span>
                </LinkListItem>
                <LinkListItem
                  active={order === 'NAME_DESC'}
                  onClick={() => handleOrder('NAME_DESC')}
                  inDropdown
                >
                  <span>{t('order.name_desc')}</span>
                </LinkListItem>
              </LinkList>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      {rows.map((rowItems, rowIndex) => (
        <Row key={rowIndex}>
          {rowItems.map((eservice, eserviceIndex) => (
            <Col xs="12" key={eserviceIndex} className="col-12 col-lg-4 mb-4">
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
      <Row className="mt-4">
        <Pagination totalCount={1200} limit={10} />
      </Row>
    </Container>
  )
}

export default EServiceCatalog
