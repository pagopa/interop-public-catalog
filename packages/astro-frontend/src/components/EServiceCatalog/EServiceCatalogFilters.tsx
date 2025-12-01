import { Button } from "design-react-kit";
import React from "react";
import { type FilterAutoCompleteValue } from "../MultipleAutoComplete/MultipleAutoComplete.js";
import { FiltersChips } from "./FiltersChips.js";
import { FiltersMobile } from "./FiltersMobile.jsx";
import Filters from "./Filters.jsx";
import { useIsMobile } from "../../hooks/useIsMobile.jsx";
import { useCatalogTranslations } from "../../i18n/catalog.i18n.js";
import { useEServiceCatalogContext } from "./EServiceCatalogContext.jsx";
import type { EServiceCatalogSearchParams } from "../../hooks/useEServiceCatalogSearchParams.js";

export type EServiceCatalogFiltersParams = {
  q?: string;
  theme?: string;
  provider?: FilterAutoCompleteValue[];
  consumer?: FilterAutoCompleteValue[];
};

export type EServiceCatalogFilterKeys = keyof EServiceCatalogFiltersParams;

type EServiceCatalogFiltersProps = {
  handleSubmitRequest: () => void;
};
const EServiceCatalogFilters: React.FC<EServiceCatalogFiltersProps> = ({
  handleSubmitRequest,
}) => {
  const {
    eserviceActiveFilterState,
    currentLocale,
    handleDraftFilterValueChange,
    handleActiveFilterValueChange,
    handleRemoveActiveFilterValue,
    handleRemoveAllActiveFilterValues,
  } = useEServiceCatalogContext();

  const t = useCatalogTranslations(currentLocale);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmitRequest();
  };

  const handleRemoveFilterValue = (
    key: keyof EServiceCatalogSearchParams,
    value: string | FilterAutoCompleteValue,
  ) => {
    handleRemoveActiveFilterValue(key, value);
  };

  return (
    <>
      {!isMobile ? (
        <>
          <h5 className="mb-4">{t("filters.title")}</h5>
          <Filters
            handleActiveFilterValueChange={handleActiveFilterValueChange}
            handleDraftFilterValueChange={handleDraftFilterValueChange}
            isMobile={false}
            onSubmit={onSubmit}
            currentLocale={currentLocale}
          />
        </>
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4">
            <Button
              color="primary"
              outline
              size="sm"
              onClick={() => setIsModalOpen(true)}
            >
              {t("filters.mobile.button")}
            </Button>
          </div>
          <FiltersMobile
            onSubmit={onSubmit}
            isOpen={isModalOpen}
            toggleModal={setIsModalOpen}
          >
            <Filters
              handleActiveFilterValueChange={handleActiveFilterValueChange}
              handleDraftFilterValueChange={handleDraftFilterValueChange}
              isMobile={true}
              currentLocale={currentLocale}
            />
          </FiltersMobile>
        </>
      )}

      <FiltersChips
        handleRemoveValue={handleRemoveFilterValue}
        filters={eserviceActiveFilterState}
        handleRemoveAll={handleRemoveAllActiveFilterValues}
        currentLocale={currentLocale}
      ></FiltersChips>
    </>
  );
};

export default EServiceCatalogFilters;
