import { useEffect, useRef } from "react";
// import type { SupportedLanguage } from "../../i18n/types.i18n";
// import { useUiTranslations } from "../../i18n/ui.i18n";
import { Chip } from "./Chip";
import type { Tooltip } from "bootstrap-italia";
import { initTooltip } from "../../config/bootstrap-italia";
import type { EServiceAccess } from "../../types/general";

export function EServiceDataAccessChip({
  isOpenData,
  strapiContent,
}: {
  isOpenData?: boolean;
  strapiContent: EServiceAccess;
}) {
  // TODO watch comments
  // const tUi = useUiTranslations(currentLocale);
  const ref = useRef(null);

  const title = isOpenData
    ? strapiContent.FreeAccessTooltipLabel /* tUi("eservice_card.open_data_tooltip") */
    : strapiContent.RestrictedAccessTooltipLabel; /* tUi("eservice_card.reserved_tooltip"); */
  const label = isOpenData
    ? strapiContent.FreeAccessLabel /* "Open Data" */
    : strapiContent.RestrictedAccessLabel; /* tUi("eservice_card.access_reserved"); */
  const iconName = isOpenData ? undefined : "it-locked";

  useEffect(() => {
    let tooltip: Tooltip | null = null;

    if (ref.current) {
      tooltip = initTooltip(ref.current, { trigger: "hover focus" });
    }
    return () => {
      tooltip?.dispose();
    };
  }, [title]);

  return (
    <Chip
      as="button"
      ref={ref}
      label={label}
      iconName={iconName}
      className="btn btn-secondary"
      type="button"
      data-bs-toggle="tooltip"
      title={title}
    />
  );
}
