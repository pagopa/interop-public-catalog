import type { FC } from 'react'
import type { SupportedLanguage } from '../../i18n/types.i18n'
import { Section } from '../shared/Section'
import { useEServiceDetailsTranslations } from '../../i18n/eservice-details.i18n'
import { getLocalizedRoute } from '../../i18n/utils.i18n'
import useSWRImmutable from 'swr/immutable'
import { apiService } from '../../services/api.services'
import { EServiceCard, EServiceCardSkeleton } from '../shared/EServiceCard'

const MAX_ESERVICES_DISPLAYED = 3

export const OtherProducerEServices: FC<{
  currentLocale: SupportedLanguage
  currentEServiceId: string
  producerId: string
  producerName: string
}> = ({ currentLocale, currentEServiceId, producerId, producerName }) => {
  const t = useEServiceDetailsTranslations(currentLocale)

  const { data: eservices } = useSWRImmutable(
    ['producer-id-eservices', producerId],
    async ([_, producerId]) =>
      apiService.getEServices({
        orderBy: ['recent_desc'],
        producerIds: [producerId],
        limit: MAX_ESERVICES_DISPLAYED + 1,
        offset: 0,
      })
  )

  const displayedEServices = eservices?.results
    .filter((eservice) => eservice.id !== currentEServiceId)
    .slice(0, MAX_ESERVICES_DISPLAYED)

  const catalogLocalizedUrl = getLocalizedRoute(currentLocale, 'ESERVICE_CATALOG')
  const catalogUrl = `${catalogLocalizedUrl}?${new URLSearchParams({
    provider: JSON.stringify([[producerName, producerId]]),
  }).toString()}`

  return (
    <Section
      title={t('featured_api.title')}
      sectionLink={{
        text: t('featured_api.explore_catalog'),
        href: catalogUrl,
      }}
    >
      <div className="px-0">
        <div className="row">
          {!displayedEServices &&
            Array.from({ length: MAX_ESERVICES_DISPLAYED }).map((_, index) => (
              <div key={index} className="col-12 col-lg-4 mb-4">
                <EServiceCardSkeleton />
              </div>
            ))}

          {displayedEServices?.map(({ name, description, tenant_name, id }) => (
            <div key={id} className="col-12 col-lg-4 mb-4">
              <EServiceCard
                eserviceId={id}
                currentLocale={currentLocale}
                name={name}
                description={description}
                producerName={tenant_name}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
