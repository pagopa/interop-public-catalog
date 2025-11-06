import {
  createParser,
  parseAsString,
  parseAsInteger,
  parseAsStringLiteral,
  type inferParserType,
  createLoader,
} from "nuqs";
import z from "zod";

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
  ]).withDefault("recent_desc"),
  provider: autocompleteSearchParamParser,
  consumer: autocompleteSearchParamParser,
};

export type EServiceCatalogSearchParams = inferParserType<
  typeof eserviceCatalogSearchParamsParser
>;

export const loadEServiceCatalogSearchParams = createLoader(
  eserviceCatalogSearchParamsParser,
);
