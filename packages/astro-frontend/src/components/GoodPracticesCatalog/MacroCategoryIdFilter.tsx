import type { MacroCategory } from "../../types/collectionTypes.js";

type MacroCategoryIdFilterProps = {
  onSelectedMacroCategoryIdChange: (macroCategoryId: string | null) => void;
  selectedMacroCategoryId: string | null;
  tenantMacrocategories: MacroCategory[];
};

const MAX_WIDTH = 305;

export const MacroCategoryIdFilter: React.FC<MacroCategoryIdFilterProps> = ({
  selectedMacroCategoryId,
  onSelectedMacroCategoryIdChange,
  tenantMacrocategories,
}) => {
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
                    alt={
                      macrocategory.MacrocategoryIllustration.alternativeText
                    }
                    src={macrocategory.MacrocategoryIllustration.url}
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
