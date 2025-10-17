import { ORGANIZATION_TYPES, OrganizationType } from '../../config/constants.js'
import { SupportedLanguage } from '../../i18n/types.i18n.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'

type OrganizationTypeFilterProps = {
  currentLocale: SupportedLanguage
  onSelectedOrganizationTypeChange: (organizationType: OrganizationType) => void
  selectedOrganizationType: OrganizationType
}

const MAX_WIDTH = 305

export const OrganizationTypeFilter: React.FC<OrganizationTypeFilterProps> = ({
  currentLocale,
  selectedOrganizationType,
  onSelectedOrganizationTypeChange,
}) => {
  const tUi = useUiTranslations(currentLocale)

  return (
    <div style={{ maxWidth: MAX_WIDTH }} className="it-list-wrapper">
      <ul id="category-filters-list" className="it-list border-start">
        {ORGANIZATION_TYPES.map((organizationType) => {
          const isActive = organizationType.key === selectedOrganizationType
          return (
            <li>
              <a
                onClick={onSelectedOrganizationTypeChange.bind(null, organizationType.key)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onSelectedOrganizationTypeChange(organizationType.key)
                  }
                }}
                role="button"
                tabIndex={0}
                className={
                  'list-item border-bottom-0 ps-2 py-2' +
                  (isActive
                    ? ' border-start border-2 border-primary bg-primary-c0 text-primary active'
                    : ' text-secondary')
                }
              >
                <div className="it-thumb">
                  <img
                    role="presentation"
                    alt=""
                    src={organizationType.imgSrc}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="it-right-zone text-decoration-none">
                  <span className="text text-decoration-none">
                    {tUi(`organization_types.${organizationType.key}_long`)}
                  </span>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
