import React, { useState } from "react";
import "./CampoAutocomplete.css";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function CampoAutocomplete({ etiqueta, values, columName, onSelect }) {
  const hint = React.useRef("");
  const [inputValue, setInputValue] = React.useState("");

  const [selectedValue, setSelectedValue] = useState(null);
  const handleSelect = (event, newValue) => {
    setSelectedValue(newValue);
    onSelect(newValue); // Llama a la función onSelect y pasa el valor seleccionado
    console.log(newValue);
  };

  const sortedValues = [...values].sort((a, b) =>
    a[columName].localeCompare(b[columName])
  );

  return (
    <Autocomplete
      disablePortal
      options={sortedValues}
      fullWidth
      getOptionLabel={(option) => option[columName]}
      renderInput={(params) => <TextField {...params} label={etiqueta} />}
      value={selectedValue}
      onChange={handleSelect}
    />
  );
}

export { CampoAutocomplete };
