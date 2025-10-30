import { TENANT_MACROCATEGORIES } from '../../config/constants.js'
import type { SupportedLanguage } from '../../i18n/types.i18n.js'
import { useUiTranslations } from '../../i18n/ui.i18n.js'

type MacroCategoryIdFilterProps = {
  currentLocale: SupportedLanguage
  onSelectedMacroCategoryIdChange: (macroCategoryId: number | null) => void
  selectedMacroCategoryId: number | null
}

const MAX_WIDTH = 305

export const MacroCategoryIdFilter: React.FC<MacroCategoryIdFilterProps> = ({
  currentLocale,
  selectedMacroCategoryId,
  onSelectedMacroCategoryIdChange,
}) => {
  const tUi = useUiTranslations(currentLocale)

  return (
    <div style={{ maxWidth: MAX_WIDTH }} className="it-list-wrapper">
      <ul id="category-filters-list" className="it-list border-start">
        {TENANT_MACROCATEGORIES.map((macrocategory) => {
          const isActive = macrocategory.id === selectedMacroCategoryId
          return (
            <li key={macrocategory.id}>
              <a
                onClick={onSelectedMacroCategoryIdChange.bind(null, macrocategory.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onSelectedMacroCategoryIdChange(macrocategory.id)
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
                    src={macrocategory.imgSrc}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="it-right-zone text-decoration-none">
                  <span className="text text-decoration-none">
                    {tUi(`tenant_macrocategory_.${macrocategory.key}_long`)}
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
