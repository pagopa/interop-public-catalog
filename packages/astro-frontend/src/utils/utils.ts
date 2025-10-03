import { EService } from '../components/EServiceCatalog/EServiceCatalog.js'

const chunkEServiceArray = (eservices: EService[], eservicesPerRow: number): EService[][] => {
  const chunkedArray: EService[][] = []
  for (let i = 0; i < (eservices.length <= 12 ? eservices.length : 12); i += eservicesPerRow) {
    chunkedArray.push(eservices.slice(i, i + eservicesPerRow))
  }
  return chunkedArray
}

export { chunkEServiceArray }
