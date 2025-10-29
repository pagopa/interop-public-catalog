import React from 'react'
import { BootstrapItaliaIcon } from './BootstrapItaliaIcon.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { getLocalizedRoute } from '../../i18n/utils.i18n.js'
import type { GoodPractice } from '../../types/good-practice.types.js'

interface GoodPracticeCardProps {
  currentLocale: SupportedLanguage
  goodPractice: GoodPractice
}

const CARD_MAX_WIDTH = 636

export const GoodPracticeCard: React.FC<GoodPracticeCardProps> = ({
  currentLocale,
  goodPractice,
}) => {
  const tUi = useUiTranslations(currentLocale)

  return (
    <article
      style={{ padding: 30, maxWidth: CARD_MAX_WIDTH }}
      className="it-card shadow border-bottom border-5 border-primary position-relative"
    >
      {/* Bookmark Icon */}
      <div className="position-absolute top-0">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="56"
          viewBox="0 0 32 56"
          fill="none"
        >
          <path d="M32 55.2267L16 39.2267L0 55.2267V0H32V55.2267Z" fill="var(--bs-primary)"></path>
        </svg>
      </div>

      {/* Category Header */}
      <header className="d-flex justify-content-end align-items-center mb-4 py-4">
        <small className="text-secondary fw-semibold">{goodPractice.category}</small>
      </header>

      {/* Title */}
      <h3 style={{ maxWidth: '90%' }} className="text-primary h4">
        {goodPractice.title}
      </h3>

      {/* Intended targets */}
      <footer
        className="d-flex justify-content-between align-items-center mt-4 py-2"
        style={{ gap: 42 }}
      >
        <div className="d-inline-block text-truncate flex-shrink-1">
          <strong>{tUi('label.for')}: </strong>
          {/* {intendedTargets.map((type) => tUi(`tenant_macrocategory_.${type}_short`)).join(', ')} */}
        </div>
        <a
          href={getLocalizedRoute(currentLocale, 'GOOD_PRACTICES_DETAILS', {
            params: { slug: goodPractice.slug },
          })}
          className="it-card-link text-primary flex-shrink-0"
          aria-label={tUi('actions.learnMore') + ' ' + goodPractice.title}
        >
          {tUi('actions.learnMore')}
          <BootstrapItaliaIcon
            aria-hidden="true"
            name="it-arrow-right"
            size="sm"
            color="primary"
            padded
          />
        </a>
      </footer>
    </article>
  )
}
