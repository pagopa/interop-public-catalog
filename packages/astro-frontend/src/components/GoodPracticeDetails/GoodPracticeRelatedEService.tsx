import useSWRImmutable from 'swr/immutable'
import type { SupportedLanguage } from '../../i18n/types.i18n'
import { EServiceCard, EServiceCardSkeleton } from '../shared/EServiceCard'
import { apiService } from '../../services/api.services'
import { useState } from 'react'
import { useGoodPracticesTranslations } from '../../i18n/good-practices.i18n'
import type { EService } from 'pagopa-interop-public-models'

export const GoodPracticeRelatedEService: React.FC<{
  currentLocale: SupportedLanguage
  eserviceIds: string[]
}> = ({ currentLocale, eserviceIds }) => {
  const [showAll, setShowAll] = useState(false)

  const { data: eservices } = useSWRImmutable(
    ['good-practice-related-eservices', eserviceIds],
    async ([_, ids]) => {
      const results = await Promise.allSettled(ids.map((id) => apiService.getEServiceById(id)))
      return results
        .filter(
          (result): result is PromiseFulfilledResult<EService> =>
            result.status === 'fulfilled' && result.value != null
        )
        .map((result) => result.value)
    }
  )

  const t = useGoodPracticesTranslations(currentLocale)

  if (!eservices) {
    return <GoodPracticeRelatedEServiceSkeleton />
  }

  const displayedEServices = showAll ? eservices : eservices.slice(0, 3)

  return (
    <div className="row g-4">
      {displayedEServices.map((eservice) => (
        <div key={eservice.id} className="col-12 col-md-6">
          <EServiceCard
            currentLocale={currentLocale}
            name={eservice.name}
            description={eservice.description}
            producerName={eservice.tenant_name}
            eserviceId={eservice.id}
            isOpenData={false}
          />
        </div>
      ))}
      {!showAll && eservices.length > 3 && (
        <div className="col-12 text-center">
          <button className="btn btn-outline-primary" onClick={() => setShowAll(true)}>
            {t('details.section.apis.show_more_button_label')}
          </button>
        </div>
      )}
    </div>
  )
}

export const GoodPracticeRelatedEServiceSkeleton: React.FC = () => {
  return (
    <div className="row g-4">
      <div className="col-12 col-md-6">
        <EServiceCardSkeleton />
      </div>
      <div className="col-12 col-md-6">
        <EServiceCardSkeleton />
      </div>
      <div className="col-12 col-md-6">
        <EServiceCardSkeleton />
      </div>
      <div className="col-12 col-md-6">
        <EServiceCardSkeleton />
      </div>
    </div>
  )
}
