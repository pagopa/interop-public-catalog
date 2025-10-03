export type Page = {
  value: string
  href: string
  isSpan: boolean
}

export function usePagination(
  currentPageValue: number,
  totalPages: number
): { previousPages: Page[]; nextPages: Page[]; currentPage: Page } {
  const previousPages: Page[] = []
  const nextPages: Page[] = []
  const currentPage: Page = {
    value: currentPageValue.toString(),
    href: '#',
    isSpan: false,
  }

  if (currentPageValue < 1 || currentPageValue > totalPages) {
    throw new Error('Current page value must be between 1 and total pages')
  }

  if (totalPages === 1) {
    return {
      previousPages,
      nextPages,
      currentPage,
    }
  }

  for (let i = 1; i <= totalPages; i++) {
    const page: Page = {
      value: i.toString(),
      href: '#',
      isSpan: false,
    }

    if (i !== currentPageValue) {
      if (i === 1) {
        previousPages.push(page)
      }

      if (
        i >= 2 &&
        i < currentPageValue - 2 &&
        !previousPages.some((page) => page.value === '...')
      ) {
        page.value = '...'
        page.isSpan = true
        previousPages.push(page)
      }

      if (i !== 1 && i < currentPageValue && i >= currentPageValue - 2) {
        previousPages.push(page)
      }

      if (i === totalPages) {
        nextPages.push(page)
      }

      if (
        i < totalPages &&
        i > currentPageValue + 2 &&
        !nextPages.some((page) => page.value === '...')
      ) {
        page.value = '...'
        page.isSpan = true
        nextPages.push(page)
      }

      if (i !== totalPages && i > currentPageValue && i <= currentPageValue + 2) {
        nextPages.push(page)
      }
    }
  }

  return {
    previousPages,
    nextPages,
    currentPage,
  }
}
