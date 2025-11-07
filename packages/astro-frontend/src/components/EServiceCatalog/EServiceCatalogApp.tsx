import type { EServiceCatalogSearchParams } from "../../hooks/useEServiceCatalogSearchParams";
import type { SupportedLanguage } from "../../i18n/types.i18n";
import { EServiceCatalog } from "./EServiceCatalog";
import { EServiceCatalogContextProvider } from "./EServiceCatalogContext";
import { NuqsAdapter } from "nuqs/adapters/react";

export const EServiceCatalogApp: React.FC<{
  currentLocale: SupportedLanguage;
  eserviceFilterInitialState: EServiceCatalogSearchParams;
}> = ({ currentLocale, eserviceFilterInitialState }) => {
  return (
    <NuqsAdapter>
      <EServiceCatalogContextProvider
        eserviceFilterInitialState={eserviceFilterInitialState}
        currentLocale={currentLocale}
      >
        <EServiceCatalog />
      </EServiceCatalogContextProvider>
    </NuqsAdapter>
  );
};
