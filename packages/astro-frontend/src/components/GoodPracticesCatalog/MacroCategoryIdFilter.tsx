// import { TENANT_MACROCATEGORIES } from "../../config/constants.js";
// import type { SupportedLanguage } from "../../i18n/types.i18n.js";
// import { useUiTranslations } from "../../i18n/ui.i18n.js";
import type { MacroCategory } from "../../types/collectionTypes.js";

type MacroCategoryIdFilterProps = {
  // currentLocale: SupportedLanguage;
  onSelectedMacroCategoryIdChange: (macroCategoryId: string | null) => void;
  selectedMacroCategoryId: string | null;
  tenantMacrocategories: MacroCategory[];
};

const MAX_WIDTH = 305;

// TODO remove comments and strings
// TODO watch for macrocategory id what to use
// tUi(`tenant_macrocategory_.${macrocategory.key}_long`)

export const MacroCategoryIdFilter: React.FC<MacroCategoryIdFilterProps> = ({
  // currentLocale,
  selectedMacroCategoryId,
  onSelectedMacroCategoryIdChange,
  tenantMacrocategories,
}) => {
  // const tUi = useUiTranslations(currentLocale);

  return (
    <div style={{ maxWidth: MAX_WIDTH }} className="it-list-wrapper">
      <ul id="category-filters-list" className="it-list border-start">
        {tenantMacrocategories.map((macrocategory) => {
          const isActive =
            macrocategory.MacroCategoryId === selectedMacroCategoryId;
          return (
            <li key={macrocategory.MacroCategoryId}>
              <a
                onClick={onSelectedMacroCategoryIdChange.bind(
                  null,
                  macrocategory.MacroCategoryId,
                )}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectedMacroCategoryIdChange(
                      macrocategory.MacroCategoryId,
                    );
                  }
                }}
                role="button"
                tabIndex={0}
                className={
                  "list-item border-bottom-0 ps-2 py-2" +
                  (isActive
                    ? " border-start border-2 border-primary bg-primary-c0 text-primary active"
                    : " text-secondary")
                }
              >
                <div className="it-thumb">
                  <img
                    role="presentation"
                    alt={macrocategory.Illustration.alternativeText}
                    src={macrocategory.Illustration.url}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="it-right-zone text-decoration-none">
                  <span className="text text-decoration-none">
                    {macrocategory.MacroCategoryLabel}
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
