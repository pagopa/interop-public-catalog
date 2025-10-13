import { EService } from '../components/EServiceCatalog/EServiceCatalog.js'
import { FiltersParams } from '../components/EServiceCatalog/Filters.js'
import { FilterAutoCompleteValue } from '../components/MultipleAutoComplete/MultipleAutoComplete.js'

const chunkEServiceArray = (eservices: EService[], eservicesPerRow: number): EService[][] => {
  const chunkedArray: EService[][] = []
  for (let i = 0; i < (eservices.length <= 12 ? eservices.length : 12); i += eservicesPerRow) {
    chunkedArray.push(eservices.slice(i, i + eservicesPerRow))
  }
  return chunkedArray
}

function parseQueryStringToObject(queryString: string): {
  [key: keyof FiltersParams]: string | string[] | FilterAutoCompleteValue[]
} {
  const cleanQueryString = queryString.startsWith('?') ? queryString.slice(1) : queryString

  const params = new URLSearchParams(cleanQueryString)
  const result: { [key: string]: string | string[] } = {}

  for (const [key, value] of params.entries()) {
    if (key === 'provider') {
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

export { chunkEServiceArray, parseQueryStringToObject }
