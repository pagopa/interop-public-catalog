import { EServiceCatalog } from './EServiceCatalog'
import { EServiceCatalogContextProvider } from './EServiceCatalogContext'

export const EServiceCatalogApp: React.FC = () => {
  return (
    <EServiceCatalogContextProvider>
      <EServiceCatalog />
    </EServiceCatalogContextProvider>
  )
}
