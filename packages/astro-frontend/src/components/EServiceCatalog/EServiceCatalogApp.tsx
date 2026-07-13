import type { EServiceCatalogSearchParams } from "../../hooks/useEServiceCatalogSearchParams";
import type { SupportedLanguage } from "../../i18n/types.i18n";
import type { General } from "../../types/general";
import type { Catalog } from "../../types/pages";
import { EServiceCatalog } from "./EServiceCatalog";
import { EServiceCatalogContextProvider } from "./EServiceCatalogContext";
import { NuqsAdapter } from "nuqs/adapters/react";

export const EServiceCatalogApp: React.FC<{
  currentLocale: SupportedLanguage;
  eserviceFilterInitialState: EServiceCatalogSearchParams;
  strapiContent: {
    general: General;
    catalog: Catalog;
  };
}> = ({ currentLocale, eserviceFilterInitialState, strapiContent }) => {
  return (
    <NuqsAdapter>
      <EServiceCatalogContextProvider
        eserviceFilterInitialState={eserviceFilterInitialState}
        currentLocale={currentLocale}
      >
        <EServiceCatalog
          strapiGeneralContent={strapiContent.general}
          strapiCatalogContent={strapiContent.catalog}
        />
      </EServiceCatalogContextProvider>
    </NuqsAdapter>
  );
};
