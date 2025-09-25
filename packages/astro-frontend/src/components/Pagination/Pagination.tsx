import React from 'react'
import { Pager, PagerItem, PagerLink } from 'design-react-kit'
import { Page, usePagination } from './hooks/usePagination.js'

type PaginationProps = {
  totalPages: number
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const { previousPages, nextPages } = usePagination(currentPage, totalPages)

  const mapPagesToPagerElements = (pages: Page[]): React.ReactNode =>
    pages.map((page) => (
      <PagerItem className="d-none d-sm-block">
        {page.isSpan ? (
          <PagerLink tag="span">{page.value}</PagerLink>
        ) : (
          <PagerLink href={page.href}>{page.value}</PagerLink>
        )}
      </PagerItem>
    ))

  // TODO
  // if (currentPage < 1 || currentPage > totalPages) {
  //   return <Page404 />
  // }

  return (
    <Pager aria-label="Esempio di paginazione" className="mb-3 justify-content-center">
      {previousPages.length > 0 && (
        <PagerItem>
          <PagerLink className="text" href="#" previous>
            Precedente
          </PagerLink>
        </PagerItem>
      )}

      {mapPagesToPagerElements(previousPages)}

      <PagerItem>
        <PagerLink aria-current="page" href="#">
          {currentPage}
        </PagerLink>
      </PagerItem>

      {mapPagesToPagerElements(nextPages)}

      {nextPages.length > 0 && (
        <PagerItem>
          <PagerLink className="text" href="#" next>
            Successiva
          </PagerLink>
        </PagerItem>
      )}
    </Pager>
  )
}

export default Pagination
