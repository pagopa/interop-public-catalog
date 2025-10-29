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
import { type EService } from '../../../../models/src/types/eservice.js'
import Pagination from '../shared/Pagination/Pagination.jsx'
import { useCatalogTranslations } from '../../i18n/catalog.i18n.js'
import { useEServiceCatalogContext } from './EServiceCatalogContext.jsx'
import { EServiceNoItems } from './EServiceNoItems.jsx'

type EServiceCatalogItemsProps = {
  eservices: EService[]
  totalCount: number
}

const EServiceCatalogItems: React.FC<EServiceCatalogItemsProps> = ({ eservices, totalCount }) => {
  const { eserviceActiveFilterState, handleActiveFilterValueChange } = useEServiceCatalogContext()
  const { orderBy: order } = eserviceActiveFilterState

  const rows = chunkEServiceArray(eservices, 3)
  const currentLanguage = getLangFromUrl(window.location.pathname)
  const t = useCatalogTranslations(currentLanguage)

  const handleCopyUrl = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
  }

  if (eservices.length <= 0) return <EServiceNoItems />

  return (
    <Container className="py-4 px-sm-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          {totalCount > 0 && (
            <span className="">
              <b className="me-2">
                <b>{totalCount}</b>
              </b>
              {t('resultsCount')}
            </span>
          )}
          <span className={`ms-2 d-none d-lg-block ${totalCount > 0 ? 'border-start' : ''}`}></span>
          <a className="ms-2 d-none d-lg-block" onClick={handleCopyUrl} role="button">
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
                  active={order === 'recent_asc'}
                  onClick={() => handleActiveFilterValueChange('orderBy', 'recent_asc')}
                  inDropdown
                >
                  <span>{t('order.recent_asc')}</span>
                </LinkListItem>
                <LinkListItem
                  active={order === 'recent_desc'}
                  onClick={() => handleActiveFilterValueChange('orderBy', 'recent_desc')}
                  inDropdown
                >
                  <span>{t('order.recent_desc')}</span>
                </LinkListItem>
                <LinkListItem
                  active={order === 'name_asc'}
                  onClick={() => handleActiveFilterValueChange('orderBy', 'name_asc')}
                  inDropdown
                >
                  <span>{t('order.name_asc')}</span>
                </LinkListItem>
                <LinkListItem
                  active={order === 'name_desc'}
                  onClick={() => handleActiveFilterValueChange('orderBy', 'name_desc')}
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
                eserviceId={eservice.id}
                currentLocale={getLangFromUrl(window.location.pathname)}
                name={eservice.name}
                producerName={eservice.tenant_name}
                description={eservice.description}
              />
            </Col>
          ))}
        </Row>
      ))}
      {totalCount > 0 && (
        <Row className="mt-4">
          <Pagination totalCount={totalCount} limit={10} idElementToScrollTo="eservice-filters" />
        </Row>
      )}
    </Container>
  )
}

export default EServiceCatalogItems
