import qs from "qs";

export function serializeQueryString(params: unknown): string {
  return qs.stringify(params, {
    arrayFormat: "comma",
    skipNulls: true,
    encode: true,
    filter: (_, value) => (value !== undefined ? value : undefined),
  });
}

export function parseQueryString(queryString: string): unknown {
  const cleanQuery = queryString.startsWith("?")
    ? queryString.slice(1)
    : queryString;

  return qs.parse(cleanQuery, {
    comma: true,
  });
}
