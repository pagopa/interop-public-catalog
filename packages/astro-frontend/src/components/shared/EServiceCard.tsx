import { BootstrapItaliaIcon } from './BootstrapItaliaIcon.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { EServiceDataAccessChip } from './EServiceDataAccessChip.jsx'

interface EServiceCardProps {
  currentLocale: SupportedLanguage
  name: string
  description: string
  producerName: string
  isOpenData?: boolean
}

const CARD_HEIGHT = 296

export const EServiceCard: React.FC<EServiceCardProps> = ({
  currentLocale,
  name,
  description,
  producerName,
  isOpenData,
}) => {
  const tUi = useUiTranslations(currentLocale)

  return (
    <article
      style={{ height: CARD_HEIGHT }}
      className="it-card rounded shadow d-flex flex-column px-2"
    >
      <header className="px-3 pt-4 d-flex justify-content-between align-items-center">
        <small className="mb-0 text-truncate pe-4">{producerName}</small>
        <div className="shrink-0">
          <EServiceDataAccessChip isOpenData={isOpenData} currentLocale={currentLocale} />
        </div>
      </header>
      <h3 className="it-card-title h5 text-primary line-clamp-2">{name}</h3>
      <div className="it-card-body flex-grow-1 d-flex flex-column">
        <p className="it-card-text line-clamp-3">{description}</p>
      </div>
      <footer className="it-card-related it-card-footer">
        <small className="it-card-taxonomy">
          <a
            href="#" // TODO
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
