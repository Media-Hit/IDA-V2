import React, { useState } from "react";
import "./PersonalCorporativo.css";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function PersonalCorporativo({ setMostrarProyectos }) {
  const [tipoDeTransaccion, setTipoDeTransaccion] = useState("");
  const handleTipoDeTransaccion = (event) => {
    setTipoDeTransaccion(event.target.value);
    setMostrarProyectos(event.target.value === "corporativo");
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={tipoDeTransaccion}
      exclusive
      onChange={handleTipoDeTransaccion}
      aria-label="Tipo de Transacción"
      className="full-width"
    >
      <ToggleButton value="personal" aria-label="">
        Personal
      </ToggleButton>
      <ToggleButton value="corporativo" aria-label="">
        Corporativo
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export { PersonalCorporativo };
