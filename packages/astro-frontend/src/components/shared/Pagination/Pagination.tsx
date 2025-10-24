import React from 'react'
import { type Page, usePagination } from './hooks/usePagination.js'
import { getLangFromUrl } from '../../../i18n/utils.i18n.js'
import { ROUTES } from '../../../config/routes.js'
import { Pager } from './Pager.jsx'
import { useIsMobile } from '../../../hooks/useIsMobile.jsx'
import { PagerMobile } from './PagerMobile.jsx'

type PaginationProps = {
  totalCount: number
  limit: number
}

const Pagination: React.FC<PaginationProps> = ({ totalCount, limit }) => {
  const isMobile = useIsMobile()
  const { paginationProps } = usePagination(limit, totalCount)
  const lang = getLangFromUrl(window.location.pathname)
  const { totalPages } = paginationProps

  const mapPagesToPagerElements = (pages: Page[]): React.ReactNode =>
    pages.map((page, index) => (
      <li className="page-item">
        {page.isSpan ? (
          <span className="page-link">{page.value}</span>
        ) : (
          <a
            className="page-link"
            onClick={() => paginationProps.onPageChange(parseInt(page.value, 10))}
            role="button"
          >
            {page.value}
          </a>
        )}
      </li>
    ))

  if (paginationProps.actualPage < 1 || paginationProps.actualPage > totalPages) {
    window.location.replace(`/${lang}${ROUTES.NOT_FOUND[lang]}`)
    return null
  }

  return isMobile ? (
    <PagerMobile totalCount={totalCount} limit={limit} />
  ) : (
    <Pager totalCount={totalCount} limit={limit} />
  )
}

export default Pagination
