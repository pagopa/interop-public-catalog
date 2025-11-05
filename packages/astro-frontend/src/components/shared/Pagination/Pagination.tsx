import React from "react";
import { usePagination } from "./hooks/usePagination.js";
import { getLangFromUrl } from "../../../i18n/utils.i18n.js";
import { ROUTES } from "../../../config/routes.js";
import { Pager } from "./Pager.jsx";
import { useIsMobile } from "../../../hooks/useIsMobile.jsx";
import { PagerMobile } from "./PagerMobile.jsx";

type PaginationProps = {
  totalCount: number;
  limit: number;
  idElementToScrollTo: string;
};

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  limit,
  idElementToScrollTo,
}) => {
  const isMobile = useIsMobile();

  const { paginationProps } = usePagination(
    limit,
    totalCount,
    idElementToScrollTo
  );
  const lang = getLangFromUrl(window.location.pathname);
  const { totalPages } = paginationProps;

  if (
    paginationProps.actualPage < 1 ||
    paginationProps.actualPage > totalPages
  ) {
    window.location.replace(`/${lang}${ROUTES.NOT_FOUND_ERROR[lang]}`);
    return null;
  }

  return isMobile ? (
    <PagerMobile
      totalCount={totalCount}
      limit={limit}
      idElementToScrollTo={idElementToScrollTo}
    />
  ) : (
    <Pager
      totalCount={totalCount}
      limit={limit}
      idElementToScrollTo={idElementToScrollTo}
    />
  );
};

export default Pagination;
