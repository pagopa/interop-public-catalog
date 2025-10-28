import { Container } from 'design-react-kit'
import EServiceCatalogFilters from './EServiceCatalogFilters'
import EServiceCatalogItems from './EServiceCatalogItems'
import React from 'react'
import { useEServiceCatalogContext } from './EServiceCatalogContext'
import { getEServices } from '../../services/catalog.services'
import type { EService } from 'pagopa-interop-public-models'
import { Spinner } from '../Spinner/Spinner'
import { useUiTranslations } from '../../i18n/ui.i18n'
import { getLangFromUrl } from '../../i18n/utils.i18n'

export const EServiceCatalog: React.FC = () => {
  const [eservices, setEservices] = React.useState<EService[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [totalCount, setTotalCount] = React.useState<number>(0)
  const { eserviceActiveFilterState, applyFilters } = useEServiceCatalogContext()

  const currentLanguage = getLangFromUrl(window.location.pathname)
  const t = useUiTranslations(currentLanguage)

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

    setEservices(eserviceResponse.items)
    setTotalCount(eserviceResponse.total)
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
          <Spinner label={t('spinner.loading')} />
        </div>
      )}
    </>
  )
}
