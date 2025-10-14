import { EServiceAttribute, EServiceAttributes } from '../../../models/src/types/eservice.js'
import { EService } from '../components/EServiceCatalog/EServiceCatalog.js'

const chunkEServiceArray = (eservices: EService[], eservicesPerRow: number): EService[][] => {
  const chunkedArray: EService[][] = []
  for (let i = 0; i < (eservices.length <= 12 ? eservices.length : 12); i += eservicesPerRow) {
    chunkedArray.push(eservices.slice(i, i + eservicesPerRow))
  }
  return chunkedArray
}

type Group = {
  attributeType: keyof EServiceAttributes
  attributesGroup: Array<EServiceAttribute>
}

type Groups = Array<Group>

/**
 * Mappa un oggetto EServiceAttributes in un array Groups.
 * L'ordine dei gruppi nell'array risultante è: certified, verified, declared.
 *
 * @param attributes L'oggetto EServiceAttributes da mappare.
 * @returns Un array Groups mappato.
 */
function mapEServiceAttributesToGroups(attributes: EServiceAttributes): Groups {
  // Definiamo l'ordine desiderato delle chiavi
  const keys: Array<keyof EServiceAttributes> = ['certified', 'verified', 'declared']

  const groups: Groups = []

  // Iteriamo sull'ordine delle chiavi
  for (const key of keys) {
    const attributeGroups = attributes[key] // Questo è Array<Array<AttributeItem>>

    // Iteriamo su ciascun array interno (il "gruppo" di attributi)
    // e lo mappiamo nel formato Group
    for (const group of attributeGroups) {
      groups.push({
        type: key, // La chiave corrente (e.g., 'certified')
        group: group, // L'array interno (e.g., Array<{id: string; name: string}>)
      })
    }
  }

  return groups
}

export { chunkEServiceArray, mapEServiceAttributesToGroups }
