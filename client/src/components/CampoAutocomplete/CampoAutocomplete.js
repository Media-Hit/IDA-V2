import React, { useState } from "react";
import "./CampoAutocomplete.css";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function CampoAutocomplete({ etiqueta, values, columName, onSelect }) {
  const hint = React.useRef("");

  const [selectedValue, setSelectedValue] = useState();
  const handleSelect = (event, newValue) => {
    setSelectedValue(newValue);
    onSelect(newValue); // Llama a la función onSelect y pasa el valor seleccionado
  };

  const sortedValues = [...values].sort((a, b) =>
    a[columName].localeCompare(b[columName])
  );

  return (
    <div className="margin-bottom">
      <Autocomplete
        disablePortal
        options={values}
        fullWidth
        getOptionLabel={(option) => option[columName]}
        renderInput={(params) => <TextField {...params} label={etiqueta} />}
        value={selectedValue}
        onChange={handleSelect}
      />
    </div>
  );
}

export { CampoAutocomplete };
