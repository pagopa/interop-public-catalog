import React from "react";
import { usePagination } from "./hooks/usePagination";
import { BootstrapItaliaIcon } from "../BootstrapItaliaIcon";

type PagerMobileProps = {
  totalCount: number;
  limit: number;
  idElementToScrollTo: string;
};

export const PagerMobile: React.FC<PagerMobileProps> = ({
  totalCount,
  limit,
  idElementToScrollTo,
}) => {
  const { paginationProps } = usePagination(
    limit,
    totalCount,
    idElementToScrollTo,
  );
  const { actualPage, totalPages } = paginationProps;

  return (
    <nav className="pagination-wrapper justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <a
            className={`page-link ${actualPage === 1 ? "disabled" : ""}`}
            onClick={() =>
              paginationProps.onPageChange(paginationProps.actualPage - 1)
            }
            role="button"
            tabIndex={actualPage === 1 ? -1 : 0}
            aria-hidden="true"
          >
            <BootstrapItaliaIcon
              name="it-chevron-left"
              color={`${actualPage === 1 ? "secondary" : "primary"}`}
            />
          </a>
        </li>
        <li className="page-item">
          <span className="page-link" aria-current="page">
            {actualPage}
          </span>
        </li>
        <li className="page-item">
          <span className="page-link">/</span>
        </li>
        <li className="page-item">
          <span className="page-link">{totalPages}</span>
        </li>
        <li className="page-item">
          <a
            className={`page-link ${actualPage === totalPages ? "disabled" : ""}`}
            onClick={() =>
              paginationProps.onPageChange(paginationProps.actualPage + 1)
            }
            role="button"
            tabIndex={actualPage === totalPages ? -1 : 0}
          >
            <BootstrapItaliaIcon
              name="it-chevron-right"
              color={`${actualPage === totalPages ? "secondary" : "primary"}`}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};
