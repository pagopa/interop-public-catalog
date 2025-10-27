import React from 'react'
import { useEServiceCatalogContext } from '../../../EServiceCatalog/EServiceCatalogContext'

export type Page = {
  value: string
  isSpan: boolean
}

export function usePagination(
  limit: number,
  totalCount: number
): {
  previousPages: Page[]
  nextPages: Page[]
  currentPage: Page
  paginationProps: {
    actualPage: number
    onPageChange: (newPage: number) => void
    totalPages: number
  }
} {
  const { handleActiveFilterValueChange, eserviceActiveFilterState } = useEServiceCatalogContext()

  const totalPages = Math.ceil((totalCount ?? 0) / limit)

  const actualPage = Math.ceil(eserviceActiveFilterState.offset / limit) + 1

  const previousPages: Page[] = []
  const nextPages: Page[] = []

  const currentPage: Page = {
    value: actualPage.toString(),
    isSpan: false,
  }

  const handlePageChange = React.useCallback(
    (newPage: number) => {
      const urlParams = new URLSearchParams(window.location.search)

      if (newPage < 1) throw new Error('new page must be greater than 0')
      const newOffset = (newPage - 1) * limit

      if (newOffset > 0) {
        urlParams.set('offset', newOffset.toString())
      } else {
        urlParams.delete('offset')
      }
      window.history.pushState({}, '', `${window.location.pathname}?${urlParams}`)
      handleActiveFilterValueChange('offset', newOffset)
    },
    [handleActiveFilterValueChange, limit]
  )

  const paginationProps = {
    actualPage,
    totalPages,
    onPageChange: handlePageChange,
  }

  if (actualPage < 1 || actualPage > totalPages) {
    throw new Error('Current page value must be between 1 and total pages')
  }

  if (totalPages === 1) {
    return {
      paginationProps,
      previousPages,
      nextPages,
      currentPage,
    }
  }

  for (let i = 1; i <= totalPages; i++) {
    const page: Page = {
      value: i.toString(),
      isSpan: false,
    }

    if (i !== actualPage) {
      if (i === 1) {
        previousPages.push(page)
      }

      if (i >= 2 && i < actualPage - 2 && !previousPages.some((page) => page.value === '...')) {
        page.value = '...'
        page.isSpan = true
        previousPages.push(page)
      }

      if (i !== 1 && i < actualPage && i >= actualPage - 2) {
        previousPages.push(page)
      }

      if (i === totalPages) {
        nextPages.push(page)
      }

      if (i < totalPages && i > actualPage + 2 && !nextPages.some((page) => page.value === '...')) {
        page.value = '...'
        page.isSpan = true
        nextPages.push(page)
      }

      if (i !== totalPages && i > actualPage && i <= actualPage + 2) {
        nextPages.push(page)
      }
    }
  }

  return {
    paginationProps,
    previousPages,
    nextPages,
    currentPage,
  }
}
