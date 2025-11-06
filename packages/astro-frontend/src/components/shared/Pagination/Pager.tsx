import React from "react";
import { usePagination, type Page } from "./hooks/usePagination";
import { getLangFromUrl } from "../../../i18n/utils.i18n";
import { useUiTranslations } from "../../../i18n/ui.i18n";

type PagerProps = {
  totalCount: number;
  limit: number;
  idElementToScrollTo: string;
};

export const Pager: React.FC<PagerProps> = ({
  totalCount,
  limit,
  idElementToScrollTo,
}) => {
  const { previousPages, nextPages, paginationProps } = usePagination(
    limit,
    totalCount,
    idElementToScrollTo,
  );
  const lang = getLangFromUrl(window.location.pathname);
  const t = useUiTranslations(lang);
  const { totalPages } = paginationProps;

  const mapPagesToPagerElements = (pages: Page[]): React.ReactNode =>
    pages.map((page, index) => (
      <li className="page-item" key={index}>
        {page.isSpan ? (
          <span className="page-link">{page.value}</span>
        ) : (
          <a
            className="page-link"
            onClick={() =>
              paginationProps.onPageChange(parseInt(page.value, 10))
            }
            role="button"
          >
            {page.value}
          </a>
        )}
      </li>
    ));

  return (
    <nav className="pagination-wrapper justify-content-center">
      <ul className="pagination">
        {previousPages.length > 0 && (
          <li className="page-item">
            <a
              className="page-link text"
              onClick={() =>
                paginationProps.onPageChange(paginationProps.actualPage - 1)
              }
              role="button"
            >
              {t("pagination.previous")}
            </a>
          </li>
        )}

        {mapPagesToPagerElements(previousPages)}

        {totalPages !== 1 && (
          <li className="page-item">
            <a
              className="page-link"
              onClick={() =>
                paginationProps.onPageChange(paginationProps.actualPage - 1)
              }
              role="button"
              aria-current="page"
            >
              {paginationProps.actualPage}
            </a>
          </li>
        )}

        {mapPagesToPagerElements(nextPages)}

        {nextPages.length > 0 && (
          <li className="page-item">
            <a
              className="page-link text"
              onClick={() =>
                paginationProps.onPageChange(paginationProps.actualPage + 1)
              }
              role="button"
            >
              {t("pagination.next")}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
