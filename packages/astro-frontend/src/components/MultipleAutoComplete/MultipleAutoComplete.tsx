import Autocomplete from "@mui/material/Autocomplete";
import { FormGroup, Icon, Input } from "design-react-kit";
import "./MultiSelectChips.css";
import React from "react";
import { useCatalogTranslations } from "../../i18n/catalog.i18n.js";
import { useUiTranslations } from "../../i18n/ui.i18n.js";
import type { SupportedLanguage } from "../../i18n/types.i18n.js";

export type FilterAutoCompleteValue = {
  label: string;
  value: string;
};
type MultipleAutoCompleteProps = {
  label: string;
  options: FilterAutoCompleteValue[];
  values: FilterAutoCompleteValue[];
  tooltipIconRender?: React.ReactNode;
  handleValuesChange: (values: FilterAutoCompleteValue[]) => void;
  onTextInputChange: (text: string) => void;
  currentLocale: SupportedLanguage;
};

export const MultipleAutoComplete: React.FC<MultipleAutoCompleteProps> = ({
  label,
  options,
  handleValuesChange,
  values,
  tooltipIconRender,
  onTextInputChange,
  currentLocale,
}) => {
  const t = useCatalogTranslations(currentLocale);
  const tUi = useUiTranslations(currentLocale);

  const handleChange = (
    _event: React.SyntheticEvent,
    values: FilterAutoCompleteValue[]
  ) => {
    handleValuesChange(values);
  };

  const getSelectedElementLabel = () => {
    if (!values || values.length === 0) return t("autocomplete.placeholder");

    return values.length === 1
      ? ` ${values.length} ${t("autocomplete.selectedElement")}`
      : ` ${values.length} ${t("autocomplete.selectedElements")}`;
  };

  return (
    <>
      <div className="d-flex input-filter-key">
        <label>{label}</label>
        {tooltipIconRender}
      </div>
      <FormGroup className="form-group">
        <Autocomplete
          disableCloseOnSelect
          multiple
          noOptionsText={tUi("autocomplete.noOptions")}
          className="mt-1"
          getOptionLabel={(option) => option.label}
          slotProps={{
            listbox: {
              sx: {
                '& .MuiAutocomplete-option[aria-selected="true"]': {
                  backgroundColor: "transparent",
                },
                '& .MuiAutocomplete-option[aria-selected="true"] label': {
                  fontWeight: "600 !important",
                },
              },
            },
          }}
          fullWidth
          sx={() => ({
            display: "inline-block",
            "& input": {
              minHeight: "2.5rem",
            },
          })}
          value={values || []}
          onChange={handleChange}
          onInputChange={(_event, value) => {
            onTextInputChange(value);
          }}
          options={options}
          isOptionEqualToValue={(option, { value }) => {
            return option.value === value;
          }}
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;

            return (
              <FormGroup check>
                <li className="autocomplete-wrapper" key={key} {...optionProps}>
                  <Input
                    id={`checkbox-${key}`}
                    type="checkbox"
                    checked={selected}
                  />
                  <label
                    style={{
                      fontFamily: "Titillium Web",
                      fontWeight: "normal",
                    }}
                  >
                    {option.label}
                  </label>
                </li>
              </FormGroup>
            );
          }}
          renderInput={(params) => {
            const isOpen = params.inputProps["aria-expanded"];
            const icon = isOpen ? "it-chevron-left" : "it-chevron-right";
            return (
              <div ref={params.InputProps.ref} className="select-wrapper">
                <input
                  type="text"
                  style={{ width: "100%" }}
                  {...params.inputProps}
                  placeholder={getSelectedElementLabel()}
                ></input>
                <span
                  style={{
                    position: "absolute",
                    right: "14px",
                    top: "10%",
                    pointerEvents: "none",
                    transform: "rotate(90deg)",
                  }}
                >
                  <Icon
                    className="icon icon-secondary"
                    color="primary"
                    icon={icon}
                  />
                </span>
              </div>
            );
          }}
        />
        <div></div>
      </FormGroup>
    </>
  );
};
