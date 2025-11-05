import React, { useEffect, useId } from "react";
import { useUiTranslations } from "../../i18n/ui.i18n";
import { BootstrapItaliaIcon } from "./BootstrapItaliaIcon";
import type { SupportedLanguage } from "../../i18n/types.i18n";
import { initTooltip } from "../../config/bootstrap-italia";

interface CopyUrlButtonProps {
  currentLocale: SupportedLanguage;
  className?: string;
}

export const CopyUrlButton: React.FC<CopyUrlButtonProps> = ({
  currentLocale,
  className = "",
}) => {
  const tUi = useUiTranslations(currentLocale);
  const id = useId();
  const ref = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let tooltip = null;
    if (ref.current) {
      tooltip = initTooltip(ref.current);
    }

    return () => {
      if (tooltip) {
        tooltip.dispose();
      }
    };
  }, []);

  return (
    <>
      <button
        ref={ref}
        id={id}
        data-bs-toggle="tooltip"
        data-bs-trigger="toggle"
        title={tUi("actions.copied")}
        className={`btn btn-sm btn-link fw-semibold text-decoration-none ${className}`}
      >
        <span>{tUi("actions.copyUrl")}</span>
        <BootstrapItaliaIcon name="it-copy" className="ms-2" color="primary" />
      </button>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const btn = document.getElementById('${id}')
              if (btn) {
                btn.addEventListener('click', () => {
                  const url = window.location.href
                  navigator.clipboard.writeText(url).catch(console.error)
                })
              }
            })()
          `,
        }}
      />
    </>
  );
};
