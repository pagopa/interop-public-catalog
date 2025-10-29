import React from 'react'
import { BootstrapItaliaIcon } from './BootstrapItaliaIcon.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { getLocalizedRoute } from '../../i18n/utils.i18n.js'
import type { GoodPractice } from 'pagopa-interop-public-models'

interface GoodPracticeCardProps {
  currentLocale: SupportedLanguage
  goodPractice: GoodPractice
}

const CARD_MAX_WIDTH = 636
const CARD_HEIGHT = 303
const CARD_PADDING = 40

export const GoodPracticeCard: React.FC<GoodPracticeCardProps> = ({
  currentLocale,
  goodPractice,
}) => {
  const tUi = useUiTranslations(currentLocale)
  const macrocategories = goodPractice.tenantMacrocategories

  const route = getLocalizedRoute(currentLocale, 'GOOD_PRACTICES_DETAILS', {
    params: { slug: goodPractice.slug },
  })

  return (
    <article
      style={{ padding: CARD_PADDING, maxWidth: CARD_MAX_WIDTH, height: CARD_HEIGHT }}
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
      <header className="d-flex justify-content-end align-items-center">
        <small style={{ lineHeight: '1rem', color: '#2F475E' }} className="fw-semibold">
          {goodPractice.category}
        </small>
      </header>

      {/* Title */}
      <h3 style={{ maxWidth: '90%', marginTop: 40 }} className="text-primary h4 line-clamp-3 mb-0">
        <a aria-label={tUi('actions.learnMore') + ' ' + goodPractice.title} href={route}>
          {goodPractice.title}
        </a>
      </h3>

      {/* Intended targets */}
      <footer
        className="d-md-flex justify-content-between align-items-end"
        style={{ gap: 42, marginTop: 'auto' }}
      >
        <div className="d-md-inline-block text-truncate mb-1 mb-md-0">
          <strong>{tUi('label.for')}: </strong>
          {macrocategories.length === 0
            ? tUi('tenant_macrocategory_.tutti_short')
            : macrocategories.map((m) => m.label).join(', ')}
        </div>
        <a
          href={route}
          className="it-card-link text-primary flex-shrink-0"
          aria-label={tUi('actions.learnMore') + ' ' + goodPractice.title}
        >
          {tUi('actions.learnMore')}
          <BootstrapItaliaIcon
            className="ms-2"
            aria-hidden="true"
            name="it-arrow-right"
            size="sm"
            color="primary"
          />
        </a>
      </footer>
    </article>
  )
}

export const GoodPracticeCardSkeleton: React.FC = () => {
  return (
    <>
      <article
        style={{ padding: CARD_PADDING, maxWidth: CARD_MAX_WIDTH, height: CARD_HEIGHT }}
        className="it-card shadow border-bottom border-5 border-primary position-relative placeholder-glow"
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
            <path
              d="M32 55.2267L16 39.2267L0 55.2267V0H32V55.2267Z"
              fill="var(--bs-primary)"
            ></path>
          </svg>
        </div>

        {/* Category Header */}
        <header className="d-flex justify-content-end align-items-center">
          <small style={{ lineHeight: '1rem', color: '#2F475E' }} className="fw-semibold">
            <span style={{ width: 120 }} className="placeholder"></span>
          </small>
        </header>

        {/* Title */}
        <h3
          style={{ maxWidth: '90%', marginTop: 40 }}
          className="text-primary h4 line-clamp-3 mb-0"
        >
          <span style={{ width: '100%' }} className="placeholder" />
          <span style={{ width: '40%' }} className="placeholder" />
        </h3>

        {/* Intended targets */}
        <footer
          className="d-md-flex justify-content-between align-items-end"
          style={{ gap: 42, marginTop: 'auto' }}
        >
          <div className="d-md-inline-block text-truncate mb-1 mb-md-0">
            <span style={{ width: 200 }} className="placeholder"></span>
          </div>
          <a className="it-card-link text-primary flex-shrink-0">
            <span style={{ width: 110 }} className="placeholder me-2"></span>
          </a>
        </footer>
      </article>
    </>
  )
}
