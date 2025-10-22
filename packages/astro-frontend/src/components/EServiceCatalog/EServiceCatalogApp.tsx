import type { EService } from '../../../../models/dist/types'
import { EServiceCatalog } from './EServiceCatalog'
import { EServiceCatalogContextProvider } from './EServiceCatalogContext'

export const EServiceCatalogApp: React.FC = () => {
  return (
    <EServiceCatalogContextProvider>
      <EServiceCatalog
        initialEservices={[
          {
            name: 'eservice 1',
            description: 'eservice description 1',
            eserviceId: 'eservice1',
            descriptorId: 'descriptor1',
          } as unknown as EService,
          {
            name: 'eservice 2',
            description: 'eservice description 2',
            eserviceId: 'eservice2',
            descriptorId: 'descriptor2',
          } as unknown as EService,
          {
            name: 'eservice 3',
            description: 'eservice description 3',
            eserviceId: 'eservice3',
            descriptorId: 'descriptor3',
          } as unknown as EService,
          {
            name: 'eservice 4',
            description: 'eservice description 4',
            eserviceId: 'eservice4',
            descriptorId: 'descriptor4',
          } as unknown as EService,
          {
            name: 'eservice 5',
            description: 'eservice description 5',
            eserviceId: 'eservice5',
            descriptorId: 'descriptor5',
          } as unknown as EService,
          {
            name: 'eservice 6',
            description: 'eservice description 6',
            eserviceId: 'eservice6',
            descriptorId: 'descriptor6',
          } as unknown as EService,
          {
            name: 'eservice 7',
            description: 'eservice description 7',
            eserviceId: 'eservice7',
            descriptorId: 'descriptor7',
          } as unknown as EService,
          {
            name: 'eservice 8',
            description: 'eservice description 8',
            eserviceId: 'eservice8',
            descriptorId: 'descriptor8',
          } as unknown as EService,
          {
            name: 'eservice 9',
            description: 'eservice description 9',
            eserviceId: 'eservice9',
            descriptorId: 'descriptor9',
          } as unknown as EService,
          {
            name: 'eservice 10',
            description: 'eservice description 10',
            eserviceId: 'eservice10',
            descriptorId: 'descriptor10',
          } as unknown as EService,
          {
            name: 'eservice 11',
            description: 'eservice description 11',
            eserviceId: 'eservice11',
            descriptorId: 'descriptor11',
          } as unknown as EService,
          {
            name: 'eservice 12',
            description: 'eservice description 12',
            eserviceId: 'eservice12',
            descriptorId: 'descriptor12',
          } as unknown as EService,
        ]}
      />
    </EServiceCatalogContextProvider>
  )
}
