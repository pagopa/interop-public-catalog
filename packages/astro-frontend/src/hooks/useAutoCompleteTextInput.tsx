import React from "react";
import { debounce } from "../utils/utils";

export function useAutocompleteTextInput(
  initialState = ""
): readonly [string, (value: string) => void] {
  const [autocompleteInput, setAutocompleteInput] =
    React.useState(initialState);

  const setDebouncedAutocompleteInput = React.useMemo(
    () =>
      debounce((value: string) => {
        if (value.length >= 3) {
          setAutocompleteInput(value);
          return;
        }
        setAutocompleteInput("");
      }, 300),
    []
  );

  return [autocompleteInput, setDebouncedAutocompleteInput] as const;
}
