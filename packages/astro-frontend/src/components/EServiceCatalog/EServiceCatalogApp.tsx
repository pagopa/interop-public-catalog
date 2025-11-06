import type { SupportedLanguage } from "../../i18n/types.i18n";
import { EServiceCatalog } from "./EServiceCatalog";
import { EServiceCatalogContextProvider } from "./EServiceCatalogContext";
import { NuqsAdapter } from "nuqs/adapters/react";
import type { EServiceCatalogSearchParams } from "./utils";

export const EServiceCatalogApp: React.FC<{
  currentLocale: SupportedLanguage;
  eserviceFilterInitialState: EServiceCatalogSearchParams;
}> = ({ currentLocale, eserviceFilterInitialState }) => {
  return (
    <NuqsAdapter>
      <EServiceCatalogContextProvider
        eserviceFilterInitialState={eserviceFilterInitialState}
      >
        <EServiceCatalog currentLocale={currentLocale} />
      </EServiceCatalogContextProvider>
    </NuqsAdapter>
  );
};
