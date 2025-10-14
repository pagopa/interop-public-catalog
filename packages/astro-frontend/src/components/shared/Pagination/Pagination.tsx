import React from 'react'
import { Pager, PagerItem, PagerLink } from 'design-react-kit'
import { Page, usePagination } from './hooks/usePagination.js'
import { getLangFromUrl } from '../../../i18n/utils.i18n.js'
import { useUiTranslations } from '../../../i18n/ui.i18n.js'

type PaginationProps = {
  totalCount: number
  limit: number
}

const Pagination: React.FC<PaginationProps> = ({ totalCount, limit }) => {
  const { previousPages, nextPages, paginationProps } = usePagination(limit, totalCount)
  const t = useUiTranslations(getLangFromUrl(window.location.pathname))
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

  // TODO
  // if (currentPage < 1 || currentPage > totalPages) {
  //   return <Page404 />
  // }

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
