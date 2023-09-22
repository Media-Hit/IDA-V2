import React, { useState } from "react";
import "./CampoDesplegable.css";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function CampoDesplegable({ values, label }) {
  const [cuentaSeleccionada, setCuentaSeleccionada] = useState("");
  const seleccionDeCuenta = (event) => {
    setCuentaSeleccionada(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth className="margin-bottom">
        <InputLabel id="demo-simple-select-label">Cuenta</InputLabel>
        <Select
          className="margin-bottom"
          id="demo-simple-lselect"
          label={label}
          labelId="demo-simple-select-label"
          onChange={seleccionDeCuenta}
          value={cuentaSeleccionada}
        >
          {/* Mapea los elementos de listOfCuentas para generar el menú en orden alfabético */}
          {values
            .slice()
            .sort((a, b) => a.nombre.localeCompare(b.nombre))
            .map((cuenta, index) => (
              <MenuItem key={index} value={cuenta.nombre}>
                {cuenta.nombre}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export { CampoDesplegable };
