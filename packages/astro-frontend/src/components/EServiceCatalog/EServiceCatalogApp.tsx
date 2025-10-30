import type { SupportedLanguage } from '../../i18n/types.i18n'
import { EServiceCatalog } from './EServiceCatalog'
import { EServiceCatalogContextProvider } from './EServiceCatalogContext'

export const EServiceCatalogApp: React.FC<{ currentLocale: SupportedLanguage }> = ({
  currentLocale,
}) => {
  return (
    <EServiceCatalogContextProvider>
      <EServiceCatalog currentLocale={currentLocale} />
    </EServiceCatalogContextProvider>
  )
}
