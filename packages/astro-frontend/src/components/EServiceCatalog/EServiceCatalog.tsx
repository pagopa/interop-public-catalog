import { Container } from 'design-react-kit'
import EServiceCatalogFilters from './EServiceCatalogFilters'
import EServiceCatalogItems from './EServiceCatalogItems'
import React from 'react'
import { useEServiceCatalogContext } from './EServiceCatalogContext'
import { getEServices } from '../../services/catalog.services'
import type { EService } from 'pagopa-interop-public-models'
import { BootstrapItaliaIcon } from '../shared/BootstrapItaliaIcon'
import { getLangFromUrl } from '../../i18n/utils.i18n'
import { useCatalogTranslations } from '../../i18n/catalog.i18n'
import { links } from '../../config/constants'

export const EServiceCatalog: React.FC = () => {
  const currentLocale = getLangFromUrl(window.location.href)
  const t = useCatalogTranslations(currentLocale)

  const [eservices, setEservices] = React.useState<EService[]>([])
  const [totalCount, setTotalCount] = React.useState<number>(0)
  const { eserviceActiveFilterState, applyFilters } = useEServiceCatalogContext()

  const onFiltersApply = async () => {
    applyFilters()
  }

  const fetchEservices = async () => {
    const eserviceResponse = await getEServices({
      offset: eserviceActiveFilterState.offset,
      orderBy: eserviceActiveFilterState.orderBy,
      q: eserviceActiveFilterState.q,
      producerIds: eserviceActiveFilterState.provider.map((p) => p.value).join(','),
      categories: eserviceActiveFilterState.consumer.map((c) => c.label).join(','),
    })

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
      <Container className="p-3">
        <div className="primary-bg-c1 pt-3 px-sm-3">
          <h3 className="p-3">{t('finder.title')}</h3>
          <div className="p-3">
            <a
              href={links.apiListLink}
              target="_blank"
              className="btn btn-outline-primary btn-icon me-1"
              rel="noreferrer"
            >
              {t('finder.api.label')}
              {<BootstrapItaliaIcon className="ms-2" name="it-external-link" color="primary" />}
            </a>
            <a
              href={links.membersListLink}
              target="_blank"
              className="btn btn-outline-primary btn-icon mt-1 mt-sm-0"
              rel="noreferrer"
            >
              {t('finder.provider.label')}
              {<BootstrapItaliaIcon className="ms-2" name="it-external-link" color="primary" />}
            </a>
          </div>
        </div>
      </Container>
    </>
  )
}
