import React, { useState } from "react";
import "./CampoDesplegable.css";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function CampoDesplegable({ values, etiqueta, columName, onSelect }) {
  const [selectedValue, setSelectedValue] = useState();
  const handleSelect = (event, newValue) => {
    setSelectedValue(newValue);
    onSelect(newValue); // Llama a la función onSelect y pasa el valor seleccionado
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth className="margin-bottom">
        <InputLabel>{etiqueta}</InputLabel>
        <Select
          className="margin-bottom"
          id="demo-simple-lselect"
          label={etiqueta}
          labelId="demo-simple-select-label"
          onChange={handleSelect}
          value={selectedValue}
        >
          {/* Mapea los elementos de listOfCuentas para generar el menú en orden alfabético */}
          {values
            .slice()
            .sort((a, b) => a.nombre.localeCompare(b.nombre))
            .map((item, index) => (
              <MenuItem key={index} value={item[columName]}>
                {item[columName]}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export { CampoDesplegable };
