import React, { useCallback, useEffect } from "react";
import { createContext } from "react";
import type { FilterAutoCompleteValue } from "../MultipleAutoComplete/MultipleAutoComplete";
import {
  eserviceCatalogSearchParamsParser,
  loadEServiceCatalogSearchParams,
  type EServiceCatalogSearchParams,
} from "./utils";
import { mixpanelService } from "../../services/mixpanel.services";
import { useQueryStates } from "nuqs";

type EServiceCatalogCreateContextType = {
  eserviceFiltersState: EServiceCatalogSearchParams;
  eserviceActiveFilterState: EServiceCatalogSearchParams;
  handleDraftFilterValueChange: (
    key: keyof EServiceCatalogSearchParams,
    value: string | number | FilterAutoCompleteValue[],
  ) => void;
  handleActiveFilterValueChange: (
    key: keyof EServiceCatalogSearchParams,
    value: string | number | FilterAutoCompleteValue[],
  ) => void;
  handleRemoveActiveFilterValue: (
    key: keyof EServiceCatalogSearchParams,
    value: string | FilterAutoCompleteValue,
  ) => void;
  handleRemoveAllActiveFilterValues: () => void;

  applyFilters: () => void;
};

type EServiceCatalogContextProviderProps = {
  children: React.ReactNode;
  eserviceFilterInitialState: EServiceCatalogSearchParams;
};

const eserviceFilterInitialState = loadEServiceCatalogSearchParams("");

const EServiceCatalogContext = createContext<EServiceCatalogCreateContextType>({
  eserviceFiltersState: eserviceFilterInitialState,
  eserviceActiveFilterState: eserviceFilterInitialState,
  handleDraftFilterValueChange: () => {},
  handleActiveFilterValueChange: () => {},
  handleRemoveActiveFilterValue: () => {},
  handleRemoveAllActiveFilterValues: () => {},
  applyFilters: () => {},
});

const useEServiceCatalogContext = () =>
  React.useContext(EServiceCatalogContext);

const EServiceCatalogContextProvider: React.FC<
  EServiceCatalogContextProviderProps
> = ({ children, eserviceFilterInitialState }) => {
  const [__searchParams, setSearchParams] = useQueryStates(
    eserviceCatalogSearchParamsParser,
  );

  const searchParams =
    typeof window === "undefined" ? eserviceFilterInitialState : __searchParams;

  const [eserviceFiltersState, setEserviceFiltersState] =
    React.useState<EServiceCatalogSearchParams>(searchParams);

  // Keep draft in sync if URL changes externally
  useEffect(() => {
    setEserviceFiltersState(searchParams);
  }, [searchParams]);

  const handleDraftFilterValueChange = useCallback(
    (
      key: keyof EServiceCatalogSearchParams,
      value: string | number | FilterAutoCompleteValue[],
    ) => {
      setEserviceFiltersState((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const handleActiveFilterValueChange = useCallback(
    (
      key: keyof EServiceCatalogSearchParams,
      value: string | number | FilterAutoCompleteValue[],
    ) => {
      const offset = key !== "offset" ? 0 : searchParams.offset;

      setEserviceFiltersState((prev) => ({ ...prev, offset, [key]: value }));
      setSearchParams((prev) => ({
        ...prev,
        offset,
        [key]: value,
      }));
    },
    [searchParams.offset, setSearchParams],
  );

  const handleRemoveActiveFilterValue = useCallback(
    (
      key: keyof EServiceCatalogSearchParams,
      value: string | FilterAutoCompleteValue,
    ) => {
      const getCurrentState = (prev: EServiceCatalogSearchParams) => {
        const currentValues = prev[key];
        if (Array.isArray(currentValues)) {
          const newValues = currentValues.filter((item) => {
            return item.value !== value;
          });

          return {
            ...prev,
            [key]: newValues,
          };
        }
        return {
          ...prev,
          [key]: "",
        };
      };

      setSearchParams(getCurrentState);
      setEserviceFiltersState(getCurrentState);
    },
    [setSearchParams],
  );

  const handleRemoveAllActiveFilterValues = useCallback(() => {
    setSearchParams({
      ...eserviceFilterInitialState,
      offset: searchParams.offset,
      orderBy: searchParams.orderBy,
    });
    setEserviceFiltersState({
      ...eserviceFilterInitialState,
      offset: searchParams.offset,
      orderBy: searchParams.orderBy,
    });
  }, [
    searchParams.offset,
    searchParams.orderBy,
    setSearchParams,
    eserviceFilterInitialState,
  ]);

  const applyFilters = useCallback(() => {
    const appliedFilters = { ...eserviceFiltersState, offset: 0 };
    setSearchParams(appliedFilters);
    mixpanelService.trackCatalogFiltersApplyEvent(appliedFilters);
  }, [eserviceFiltersState, setSearchParams]);

  const providerValue = React.useMemo(() => {
    return {
      eserviceFiltersState,
      eserviceActiveFilterState: searchParams,
      handleActiveFilterValueChange,
      handleDraftFilterValueChange,
      applyFilters,
      handleRemoveActiveFilterValue,
      handleRemoveAllActiveFilterValues,
    };
  }, [
    eserviceFiltersState,
    searchParams,
    handleActiveFilterValueChange,
    handleDraftFilterValueChange,
    applyFilters,
    handleRemoveActiveFilterValue,
    handleRemoveAllActiveFilterValues,
  ]);

  return (
    <EServiceCatalogContext.Provider value={providerValue}>
      {children}
    </EServiceCatalogContext.Provider>
  );
};

export { useEServiceCatalogContext, EServiceCatalogContextProvider };
