import React from 'react'
import { Pager, PagerItem, PagerLink } from 'design-react-kit'
import { type Page, usePagination } from './hooks/usePagination.js'
import { getLangFromUrl } from '../../../i18n/utils.i18n.js'
import { useUiTranslations } from '../../../i18n/ui.i18n.js'
import { ROUTES } from '../../../config/routes.js'

type PaginationProps = {
  totalCount: number
  limit: number
}

const Pagination: React.FC<PaginationProps> = ({ totalCount, limit }) => {
  const { previousPages, nextPages, paginationProps } = usePagination(limit, totalCount)
  const lang = getLangFromUrl(window.location.pathname)
  const t = useUiTranslations(lang)
  const { totalPages } = paginationProps

  const mapPagesToPagerElements = (pages: Page[]): React.ReactNode =>
    pages.map((page, index) => (
      <PagerItem className="d-none d-sm-block" key={index}>
        {page.isSpan ? (
          <PagerLink tag="span">{page.value}</PagerLink>
        ) : (
          <PagerLink onClick={() => paginationProps.onPageChange(parseInt(page.value, 10))}>
            {page.value}
          </PagerLink>
        )}
      </PagerItem>
    ))

  if (paginationProps.actualPage < 1 || paginationProps.actualPage > totalPages) {
    window.location.replace(`/${lang}${ROUTES.NOT_FOUND[lang]}`)
    return null
  }

  return (
    <Pager aria-label="pager" className="mb-3 justify-content-center">
      {previousPages.length > 0 && (
        <PagerItem>
          <PagerLink
            onClick={() => paginationProps.onPageChange(paginationProps.actualPage - 1)}
            className="text"
            previous
          >
            {t('pagination.previous')}
          </PagerLink>
        </PagerItem>
      )}

      {mapPagesToPagerElements(previousPages)}

      {totalPages !== 1 && (
        <PagerItem>
          <PagerLink aria-current="page">{paginationProps.actualPage}</PagerLink>
        </PagerItem>
      )}

      {mapPagesToPagerElements(nextPages)}

      {nextPages.length > 0 && (
        <PagerItem>
          <PagerLink
            className="text"
            onClick={() => paginationProps.onPageChange(paginationProps.actualPage + 1)}
            next
          >
            {t('pagination.next')}
          </PagerLink>
        </PagerItem>
      )}
    </Pager>
  )
}

export default Pagination
