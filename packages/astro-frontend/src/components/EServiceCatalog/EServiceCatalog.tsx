import { Container } from "design-react-kit";
import EServiceCatalogFilters from "./EServiceCatalogFilters";
import EServiceCatalogItems from "./EServiceCatalogItems";
import React from "react";
import { useEServiceCatalogContext } from "./EServiceCatalogContext";
import { BootstrapItaliaIcon } from "../shared/BootstrapItaliaIcon";
import { useCatalogTranslations } from "../../i18n/catalog.i18n";
import { links } from "../../config/constants";
import { EServiceCardSkeleton } from "../shared/EServiceCard";
import type { SupportedLanguage } from "../../i18n/types.i18n";
import { apiService } from "../../services/api.services";
import useSWRImmutable from "swr/immutable";
import type { categoriesMap } from "../../server/config/categories";
import type { RouteKey } from "../../config/routes";

export const EServiceCatalog: React.FC<{
  currentLocale: SupportedLanguage;
}> = ({ currentLocale }) => {
  const t = useCatalogTranslations(currentLocale);

  const { eserviceActiveFilterState, applyFilters } =
    useEServiceCatalogContext();

  const onFiltersApply = async () => {
    applyFilters();
  };

  const { data, isLoading } = useSWRImmutable(
    [
      "eservice-catalog",
      {
        offset: eserviceActiveFilterState.offset,
        limit: 12,
        orderBy: [eserviceActiveFilterState.orderBy],
        q: eserviceActiveFilterState.q,
        producerIds: eserviceActiveFilterState.provider.map((p) => p.value),
        categories: eserviceActiveFilterState.consumer.map(
          (c) => c.label as keyof typeof categoriesMap,
        ),
      },
    ],
    async ([_, filters]) => apiService.getEServices(filters),
  );

  const totalCount = data?.pagination.totalCount ?? 0;
  const eservices = data?.results ?? [];

  const routeKey: RouteKey = "ESERVICE_CATALOG";

  return (
    <>
      <Container className="p-3">
        <EServiceCatalogFilters
          currentLocale={currentLocale}
          handleSubmitRequest={onFiltersApply}
        />
      </Container>

      {!isLoading ? (
        <EServiceCatalogItems eservices={eservices} totalCount={totalCount} />
      ) : (
        <EServiceItemsSkeleton />
      )}
      <Container className="p-3">
        <div className="primary-bg-c1 pt-3 px-sm-3">
          <h4 className="p-3">{t("finder.title")}</h4>
          <div className="p-3">
            <a
              data-mp-external-link-id={`${routeKey}_finder_apiListLink`}
              data-mp-external-link-description="TODO"
              href={links.apiListLink}
              target="_blank"
              className="btn btn-outline-primary btn-icon me-1"
              rel="noreferrer"
            >
              {t("finder.api.label")}
              {
                <BootstrapItaliaIcon
                  className="ms-2"
                  name="it-external-link"
                  color="primary"
                />
              }
            </a>
            <a
              data-mp-external-link-id={`${routeKey}_finder_providerListLink`}
              data-mp-external-link-description="TODO"
              href={links.membersListLink}
              target="_blank"
              className="btn btn-outline-primary btn-icon mt-1 mt-sm-0"
              rel="noreferrer"
            >
              {t("finder.provider.label")}
              {
                <BootstrapItaliaIcon
                  className="ms-2"
                  name="it-external-link"
                  color="primary"
                />
              }
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export const EServiceItemsSkeleton: React.FC = () => {
  return (
    <Container className="py-4 px-sm-3">
      <div className="row">
        <div className="col-12 col-lg-4 mb-4">
          <EServiceCardSkeleton />
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <EServiceCardSkeleton />
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <EServiceCardSkeleton />
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <EServiceCardSkeleton />
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <EServiceCardSkeleton />
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <EServiceCardSkeleton />
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <EServiceCardSkeleton />
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <EServiceCardSkeleton />
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <EServiceCardSkeleton />
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <EServiceCardSkeleton />
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <EServiceCardSkeleton />
        </div>
        <div className="col-12 col-lg-4 mb-4">
          <EServiceCardSkeleton />
        </div>
      </div>
    </Container>
  );
};
