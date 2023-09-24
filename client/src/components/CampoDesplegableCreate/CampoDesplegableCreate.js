import React, { useState } from "react";
import "./CampoDesplegableCreate.css";

import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filter = createFilterOptions();

function CampoDesplegableCreate({ values, etiqueta, columName }) {
  const [value, setValue] = useState(null);

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              [columName]: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              [columName]: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option[columName]
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              [columName]: `Añadir "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={values}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option[columName];
        }}
        renderOption={(props, option) => (
          <li {...props}>{option[columName]}</li>
        )}
        fullWidth
        autoHighlight
        freeSolo
        renderInput={(params) => <TextField {...params} label={etiqueta} />}
      />
    </>
  );
}

export { CampoDesplegableCreate };
