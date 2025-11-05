import { BootstrapItaliaIcon } from './BootstrapItaliaIcon.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { EServiceDataAccessChip } from './EServiceDataAccessChip.jsx'
import { getLocalizedRoute } from '../../i18n/utils.i18n.js'

interface EServiceCardProps {
  eserviceId: string
  currentLocale: SupportedLanguage
  name: string
  description: string
  producerName: string
  isOpenData?: boolean
}

const CARD_HEIGHT = 296
const MIN_HEIGHT_TITLE = 64
const MIN_HEIGHT_PRODUCER_NAME = 42

export const EServiceCard: React.FC<EServiceCardProps> = ({
  currentLocale,
  name,
  description,
  producerName,
  isOpenData,
  eserviceId,
}) => {
  const tUi = useUiTranslations(currentLocale)

  const url = getLocalizedRoute(currentLocale, 'ESERVICE_DETAILS', { params: { id: eserviceId } })
  return (
    <article
      style={{ height: CARD_HEIGHT }}
      className="it-card rounded shadow d-flex flex-column p-4"
    >
      <header
        style={{ height: MIN_HEIGHT_PRODUCER_NAME }}
        className="d-flex justify-content-between align-items-center pb-3"
      >
        <small className="mb-0 line-clamp-2 pe-4">{producerName}</small>
        <div className="shrink-0">
          <EServiceDataAccessChip isOpenData={isOpenData} currentLocale={currentLocale} />
        </div>
      </header>
      <a
        href={url}
        style={{ height: MIN_HEIGHT_TITLE }}
        className="it-card-title h5 text-primary line-clamp-2 my-0 px-0 pb-2"
      >
        {name}
      </a>
      <div className="it-card-body flex-grow-1 p-0">
        <p className="it-card-text line-clamp-3">{description}</p>
      </div>
      <footer className="it-card-related it-card-footer mx-0 pb-0 pt-4">
        <small className="it-card-taxonomy">
          <a
            href={url}
            className="it-card-link text-primary text-uppercase fw-semibold"
            aria-label={tUi('eservice_card.read_more') + ' ' + name}
          >
            {tUi('eservice_card.read_more')}
            <BootstrapItaliaIcon
              aria-hidden="true"
              name="it-arrow-right"
              size="sm"
              color="primary"
              padded
            />
          </a>
        </small>
      </footer>
    </article>
  )
}

export const EServiceCardSkeleton: React.FC = () => {
  return (
    <article
      style={{ height: CARD_HEIGHT }}
      className="it-card rounded shadow d-flex flex-column p-4"
    >
      <header
        style={{ height: MIN_HEIGHT_PRODUCER_NAME }}
        className="d-flex justify-content-between align-items-center pb-3"
      >
        <small className="mb-0 line-clamp-2 pe-4 placeholder-glow">
          <span style={{ width: 120 }} className="placeholder rounded-2" />
        </small>
        <div className="shrink-0 placeholder-glow">
          <span
            style={{ width: 155, height: 24 }}
            className="placeholder d-inline-block rounded-pill"
          />
        </div>
      </header>
      <a
        // style={{ height: MIN_HEIGHT_TITLE }}
        className="it-card-title h5 text-primary line-clamp-2 placeholder-glow my-0 px-0 pb-2"
      >
        <span style={{ width: '100%' }} className="placeholder placeholder-sm rounded-2" />
        <span style={{ width: '40%' }} className="placeholder placeholder-sm rounded-2" />
      </a>
      <div className="it-card-body flex-grow-1 p-0">
        <p className="it-card-text line-clamp-3 placeholder-glow mt-1">
          <span
            style={{ width: '100%' }}
            className="placeholder placeholder-sm d-block rounded-2  mb-2"
          />
          <span
            style={{ width: '90%' }}
            className="placeholder placeholder-sm d-block rounded-2 mb-2"
          />
          <span style={{ width: '80%' }} className="placeholder placeholder-sm d-block rounded-2" />
        </p>
      </div>
      <footer className="it-card-related it-card-footer mx-0 pb-0 pt-4">
        <small className="it-card-taxonomy">
          <a className="it-card-link text-primary text-uppercase fw-semibold placeholder-glow">
            <span
              style={{ width: 110 }}
              className="placeholder placeholder-sm d-block rounded-2 mb-2"
            />
          </a>
        </small>
      </footer>
    </article>
  )
}
