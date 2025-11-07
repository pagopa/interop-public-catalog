import React from "react";
import { createContext } from "react";
import type { FilterAutoCompleteValue } from "../MultipleAutoComplete/MultipleAutoComplete";
import type { SupportedLanguage } from "../../i18n/types.i18n";
import { DEFAULT_LANG } from "../../i18n/config.i18n";
import {
  loadEServiceCatalogSearchParams,
  useEServiceCatalogSearchParams,
  type EServiceCatalogSearchParams,
} from "../../hooks/useEServiceCatalogSearchParams";

type EServiceCatalogCreateContextType = {
  eserviceFiltersState: EServiceCatalogSearchParams;
  eserviceActiveFilterState: EServiceCatalogSearchParams;
  currentLocale: SupportedLanguage;
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
  currentLocale: SupportedLanguage;
};

const eserviceFilterInitialState = loadEServiceCatalogSearchParams("");

const EServiceCatalogContext = createContext<EServiceCatalogCreateContextType>({
  eserviceFiltersState: eserviceFilterInitialState,
  eserviceActiveFilterState: eserviceFilterInitialState,
  currentLocale: DEFAULT_LANG,
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
> = ({ children, eserviceFilterInitialState, currentLocale }) => {
  const {
    eserviceFiltersState,
    eserviceActiveFilterState,
    handleDraftFilterValueChange,
    handleActiveFilterValueChange,
    handleRemoveActiveFilterValue,
    handleRemoveAllActiveFilterValues,
    applyFilters,
  } = useEServiceCatalogSearchParams(eserviceFilterInitialState);

  const providerValue = React.useMemo(() => {
    return {
      eserviceFiltersState,
      eserviceActiveFilterState,
      currentLocale,
      handleActiveFilterValueChange,
      handleDraftFilterValueChange,
      applyFilters,
      handleRemoveActiveFilterValue,
      handleRemoveAllActiveFilterValues,
    };
  }, [
    eserviceFiltersState,
    eserviceActiveFilterState,
    currentLocale,
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
