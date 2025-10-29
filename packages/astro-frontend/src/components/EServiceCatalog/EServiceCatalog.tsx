import { Container } from 'design-react-kit'
import EServiceCatalogFilters from './EServiceCatalogFilters'
import EServiceCatalogItems from './EServiceCatalogItems'
import React from 'react'
import { useEServiceCatalogContext } from './EServiceCatalogContext'
import { getEServices } from '../../services/catalog.services'
import type { EService } from 'pagopa-interop-public-models'
import { BootstrapItaliaIcon } from '../shared/BootstrapItaliaIcon'
import { useCatalogTranslations } from '../../i18n/catalog.i18n'
import { links } from '../../config/constants'
import { Spinner } from '../Spinner/Spinner'
import { useUiTranslations } from '../../i18n/ui.i18n'
import { getLangFromUrl } from '../../i18n/utils.i18n'

export const EServiceCatalog: React.FC = () => {
  const currentLocale = getLangFromUrl(window.location.href)
  const t = useCatalogTranslations(currentLocale)

  const [eservices, setEservices] = React.useState<EService[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [totalCount, setTotalCount] = React.useState<number>(0)
  const { eserviceActiveFilterState, applyFilters } = useEServiceCatalogContext()

  const currentLanguage = getLangFromUrl(window.location.pathname)
  const tUi = useUiTranslations(currentLanguage)

  const onFiltersApply = async () => {
    applyFilters()
  }

  const fetchEservices = async () => {
    setIsLoading(true)
    const eserviceResponse = await getEServices({
      offset: eserviceActiveFilterState.offset,
      orderBy: eserviceActiveFilterState.orderBy,
      q: eserviceActiveFilterState.q,
      producerIds: eserviceActiveFilterState.provider.map((p) => p.value).join(','),
      categories: eserviceActiveFilterState.consumer.map((c) => c.label).join(','),
    })

    setEservices(eserviceResponse.results)
    setTotalCount(eserviceResponse.pagination.totalCount)
    setIsLoading(false)
  }

  React.useEffect(() => {
    fetchEservices()
  }, [eserviceActiveFilterState])

  return (
    <>
      <Container className="p-3">
        <EServiceCatalogFilters handleSubmitRequest={onFiltersApply} />
      </Container>

      {!isLoading ? (
        <EServiceCatalogItems eservices={eservices} totalCount={totalCount} />
      ) : (
        <div className="p-9">
          <Spinner label={tUi('spinner.loading')} />
        </div>
      )}
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
