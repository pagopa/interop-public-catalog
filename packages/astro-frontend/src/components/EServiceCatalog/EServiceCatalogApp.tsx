import type { EService } from '../../../../models/dist/types'
import { EServiceCatalog } from './EServiceCatalog'
import { EServiceCatalogContextProvider } from './EServiceCatalogContext'

type EServiceCatalogAppProps = {
  initialEservices: EService[]
  totalCount: number
}

export const EServiceCatalogApp: React.FC<EServiceCatalogAppProps> = ({
  initialEservices,
  totalCount,
}) => {
  console.log('totalCount in App:', totalCount)
  return (
    <EServiceCatalogContextProvider>
      <EServiceCatalog initialEservices={initialEservices} totalCount={totalCount} />
    </EServiceCatalogContextProvider>
  )
}
