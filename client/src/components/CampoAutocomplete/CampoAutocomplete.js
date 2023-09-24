import React from "react";
import "./CampoAutocomplete.css";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function CampoAutocomplete({ etiqueta, values, columName }) {
  const hint = React.useRef("");
  const [inputValue, setInputValue] = React.useState("");

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
    />
  );
}

export { CampoAutocomplete };
