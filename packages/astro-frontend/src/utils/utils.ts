import { EService } from '../components/EServiceCatalog/EServiceCatalog.js'
import { FilterParamsKeys, FiltersParams } from '../components/EServiceCatalog/Filters.js'

const chunkEServiceArray = (eservices: EService[], eservicesPerRow: number): EService[][] => {
  const chunkedArray: EService[][] = []
  for (let i = 0; i < (eservices.length <= 12 ? eservices.length : 12); i += eservicesPerRow) {
    chunkedArray.push(eservices.slice(i, i + eservicesPerRow))
  }
  return chunkedArray
}

function parseQueryStringToParams(queryString: string) {
  const cleanQueryString = queryString.startsWith('?') ? queryString.slice(1) : queryString

  const params = new URLSearchParams(cleanQueryString)
  const result: { [key: string]: string | string[] } = {}

  for (const [key, value] of params.entries()) {
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

function addParamsWithinUrl(filtersParams: FiltersParams) {
  const urlSearchParams = new URLSearchParams()

  Object.keys(filtersParams).forEach((k) => {
    const key = k as FilterParamsKeys
    if (filtersParams[key]) {
      if (key === 'provider' || key === 'consumer') {
        const filter = JSON.stringify(filtersParams[key].map((item) => [item.label, item.value]))
        urlSearchParams.append(key, filter)
      } else urlSearchParams.append(key, JSON.stringify(filtersParams[key]))
    }
  })

  const queryString = urlSearchParams.toString()
  const newUrl = `${window.location.pathname}?${queryString}`
  window.history.pushState({ path: newUrl }, '', newUrl)
}

export { chunkEServiceArray, parseQueryStringToParams, addParamsWithinUrl }
