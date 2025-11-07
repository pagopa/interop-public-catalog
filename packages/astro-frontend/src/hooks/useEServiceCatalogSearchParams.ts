import { useCallback, useEffect, useState } from "react";
import {
  createLoader,
  createParser,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
  useQueryStates,
  type inferParserType,
} from "nuqs";
import z from "zod";
import type { EServiceOrderBy } from "../server/models/api";
import type { FilterAutoCompleteValue } from "../components/MultipleAutoComplete/MultipleAutoComplete";
import { mixpanelService } from "../services/mixpanel.services";

export const autocompleteSearchParamParser = createParser({
  parse(query) {
    try {
      const raw = JSON.parse(query);
      return z
        .array(z.tuple([z.string(), z.string()]))
        .parse(raw)
        .map(([label, value]) => ({ label, value }));
    } catch {
      return [];
    }
  },
  serialize(values) {
    return JSON.stringify(values.map((v) => [v.label, v.value]));
  },
  eq(a, b) {
    return a.length === b.length && a.every((av, i) => av.value === b[i].value);
  },
}).withDefault([]);

export const eserviceCatalogSearchParamsParser = {
  q: parseAsString.withDefault(""),
  offset: parseAsInteger.withDefault(0),
  orderBy: parseAsStringLiteral([
    "recent_asc",
    "recent_desc",
    "name_asc",
    "name_desc",
  ] satisfies Array<EServiceOrderBy>).withDefault("recent_desc"),
  provider: autocompleteSearchParamParser,
  consumer: autocompleteSearchParamParser,
};

export type EServiceCatalogSearchParams = inferParserType<
  typeof eserviceCatalogSearchParamsParser
>;

export const loadEServiceCatalogSearchParams = createLoader(
  eserviceCatalogSearchParamsParser,
);

export function useEServiceCatalogSearchParams(
  ssrInitial: EServiceCatalogSearchParams,
) {
  const [__searchParams, setSearchParams] = useQueryStates(
    eserviceCatalogSearchParamsParser,
    {
      history: "push",
    },
  );

  const searchParams =
    typeof window === "undefined" ? ssrInitial : __searchParams;

  const [eserviceFiltersState, setEserviceFiltersState] =
    useState<EServiceCatalogSearchParams>(searchParams);

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
      setSearchParams((prev) => ({ ...prev, offset, [key]: value }));
    },
    [searchParams.offset, setSearchParams],
  );

  const handleRemoveActiveFilterValue = useCallback(
    (
      key: keyof EServiceCatalogSearchParams,
      value: string | FilterAutoCompleteValue,
    ) => {
      const compute = (prev: EServiceCatalogSearchParams) => {
        const current = prev[key];
        if (Array.isArray(current)) {
          const filtered = current.filter((item) => item.value !== value);
          return { ...prev, [key]: filtered };
        }
        return { ...prev, [key]: null };
      };
      setSearchParams(compute);
      setEserviceFiltersState(compute);
    },
    [setSearchParams],
  );

  const handleRemoveAllActiveFilterValues = useCallback(async () => {
    const newSearchParams = await setSearchParams((prev) => ({
      q: null,
      consumer: null,
      provider: null,
      offset: prev.offset,
      orderBy: prev.orderBy,
    }));
    setEserviceFiltersState(loadEServiceCatalogSearchParams(newSearchParams));
  }, [setSearchParams]);

  const applyFilters = useCallback(() => {
    const applied = { ...eserviceFiltersState, offset: 0 };
    setSearchParams(applied);
    mixpanelService.trackCatalogFiltersApplyEvent(applied);
  }, [eserviceFiltersState, setSearchParams]);

  return {
    eserviceFiltersState,
    eserviceActiveFilterState: searchParams,
    handleDraftFilterValueChange,
    handleActiveFilterValueChange,
    handleRemoveActiveFilterValue,
    handleRemoveAllActiveFilterValues,
    applyFilters,
  };
}
