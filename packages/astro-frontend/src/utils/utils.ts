import type { FilterParamsKeys, FiltersParams } from '../components/EServiceCatalog/Filters.js'
import {
  EService,
  EServiceAttribute,
  EServiceAttributes,
} from '../../../models/src/types/eservice.js'
import type { FilterAutoCompleteValue } from '../components/MultipleAutoComplete/MultipleAutoComplete.jsx'

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
    if (key === 'offset' || key === 'order') continue
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
  const urlSearchParams = new URLSearchParams(window.location.search)

  Object.keys(filtersParams).forEach((k) => {
    const key = k as FilterParamsKeys

    if (filtersParams[key]) {
      if (key === 'provider' || key === 'consumer') {
        const filter = filtersParams[key]?.map((item) => [item.label, item.value])
        urlSearchParams.set(key, JSON.stringify(filter))
      } else urlSearchParams.set(key, filtersParams[key])
    }
  })

  const queryString = urlSearchParams.toString()
  window.history.pushState({}, '', `${window.location.pathname}?${queryString}`)
}

export function removeParamsFromUrl(key: string, value: string | FilterAutoCompleteValue) {
  const url = new URLSearchParams(window.location.search)
  const urlParams = url.get(key)

  if (urlParams && (key === 'provider' || key === 'consumer')) {
    const parsedValues = JSON.parse(urlParams)
    const filteredValues = parsedValues.filter((item: string[]) => {
      return item[1] !== value
    })
    if (filteredValues.length > 0) {
      url.set(key, JSON.stringify(filteredValues))
    } else {
      url.delete(key)
    }
  } else {
    url.delete(key)
  }

  window.history.pushState({}, '', `${window.location.pathname}?${url}`)
}

export function removeParamsFromUrlByKey(key: string) {
  const url = new URLSearchParams(window.location.search)
  url.delete(key)
  window.history.pushState({}, '', `${window.location.pathname}?${url}`)
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
