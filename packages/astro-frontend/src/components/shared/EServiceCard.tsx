import React from 'react'
import { BootstrapItaliaIcon } from './BootstrapItaliaIcon.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { Chip } from './Chip.js'

interface EServiceCardProps {
  currentLocale: SupportedLanguage
  name: string
  description: string
  producerName: string
  isOpenData?: boolean
}

const CARD_MIN_HEIGHT = 296

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
      style={{ minHeight: CARD_MIN_HEIGHT }}
      className="it-card rounded shadow d-flex flex-column px-2"
    >
      <header className="px-3 pt-4 d-flex justify-content-between align-items-center">
        <p>{producerName}</p>
        <div className="shrink-0">
          {isOpenData ? (
            <Chip label="Open Data" />
          ) : (
            <Chip label={tUi('eservice_card.access_reserved')} iconName="it-locked" />
          )}
        </div>
      </header>
      <h3 className="it-card-title h5 text-primary line-clamp-2">{name}</h3>
      <div className="it-card-body flex-grow-1 d-flex flex-column justify-content-end">
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
