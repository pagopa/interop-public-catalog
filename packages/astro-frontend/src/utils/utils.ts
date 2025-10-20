import type { FilterParamsKeys, FiltersParams } from '../components/EServiceCatalog/Filters.js'
import {
  EService,
  EServiceAttribute,
  EServiceAttributes,
} from '../../../models/src/types/eservice.js'

export const chunkEServiceArray = (
  eservices: EService[],
  eservicesPerRow: number
): EService[][] => {
  const chunkedArray: EService[][] = []
  for (let i = 0; i < (eservices.length <= 12 ? eservices.length : 12); i += eservicesPerRow) {
    chunkedArray.push(eservices.slice(i, i + eservicesPerRow))
  }
  return chunkedArray
}

export function parseQueryStringToParams(queryString: string) {
  const cleanQueryString = queryString.startsWith('?') ? queryString.slice(1) : queryString

  const params = new URLSearchParams(cleanQueryString)
  const result: { [key: string]: string | string[] } = {}

  for (const [key, value] of params.entries()) {
    if (key === 'offset') continue
    if (key === 'provider' || key === 'consumer') {
      const parsedValue = JSON.parse(value)

      result[key] = parsedValue.map((item: string[][]) => {
        return { label: item[0], value: item[1] }
      })
    } else {
      result[key] = value
    }
  }

  return result
}

export function addParamsWithinUrl(filtersParams: FiltersParams) {
  const urlSearchParams = new URLSearchParams()

  Object.keys(filtersParams).forEach((k) => {
    const key = k as FilterParamsKeys
    if (filtersParams[key]) {
      if (key === 'provider' || key === 'consumer') {
        const filter = JSON.stringify(filtersParams[key]?.map((item) => [item.label, item.value]))
        urlSearchParams.append(key, filter)
      } else urlSearchParams.append(key, JSON.stringify(filtersParams[key]))
    }
  })

  const queryString = urlSearchParams.toString()
  const newUrl = `${window.location.pathname}?${queryString}`
  window.history.pushState({ path: newUrl }, '', newUrl)
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
export function mapEServiceAttributesToGroups(attributes: EServiceAttributes): Groups {
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
        attributeType: key, // La chiave corrente (e.g., 'certified')
        attributesGroup: group, // L'array interno (e.g., Array<{id: string; name: string}>)
      })
    }
  }

  return groups
}
