import React, { useState } from "react";
import "./PersonalCorporativo.css";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function PersonalCorporativo({ setValue }) {
  const [tipoDeTransaccion, setTipoDeTransaccion] = useState("");

  const handleOnChange = (event) => {
    setTipoDeTransaccion(event.target.value);
    setValue(event);
  };

  return (
    <div className="margin-bottom">
      <ToggleButtonGroup
        color="primary"
        value={tipoDeTransaccion}
        exclusive
        onChange={handleOnChange}
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
    </div>
  );
}

export { PersonalCorporativo };
