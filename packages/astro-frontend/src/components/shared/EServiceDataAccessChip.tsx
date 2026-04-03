import { useEffect, useRef } from "react";
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
  const ref = useRef(null);

  const title = isOpenData
    ? strapiContent.FreeAccessTooltipLabel
    : strapiContent.RestrictedAccessTooltipLabel;
  const label = isOpenData
    ? strapiContent.FreeAccessLabel
    : strapiContent.RestrictedAccessLabel;
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
