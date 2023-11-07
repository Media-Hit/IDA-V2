import React, { useState } from "react";
import "./CampoDesplegableCreate.css";

import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import axios from "axios";

const filter = createFilterOptions();

function CampoDesplegableCreate({ values, etiqueta, columName, fieldName }) {
  const [value, setValue] = useState(null);

  const handleAddValue = async (newValue) => {
    const inputValue = newValue.inputValue;
    try {
      const response = await axios.post(
        "http://localhost:3001/proveedores/listado",
        {
          nombre: inputValue,
        }
      );
      console.log(response.data);
      setValue(null);
    } catch (error) {
      console.error("Error al agregar el nuevo proveedor:", error);
    }
  };

  return (
    <div className="margin-bottom">
      <Autocomplete
        name={fieldName}
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValue({
              [columName]: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Si se selecciona "Añadir", llama a la función para agregar el valor
            handleAddValue(newValue);
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
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
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
    </div>
  );
}

export { CampoDesplegableCreate };
