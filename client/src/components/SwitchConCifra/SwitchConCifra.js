import React, { useState } from "react";
import "./SwitchConCifra.css";

import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function SwitchConCifra() {
  const [switchState, setSwitchState] = useState(false);

  const toggleSwitch = () => {
    setSwitchState(!switchState);
  };

  return (
    <div className="switchContainer">
      <div className="switchBox">
        <div className="switch__leftColumn">
          {switchState && <p className="cifraSwitch">$5.000</p>}

          {switchState ? (
            <p className="descripcionSwitch parentheses">4x1000</p>
          ) : (
            <>
              <p className="descripcionSwitchInactive ">4x1000</p>
              {/* Agregar aquí lo que quieras hacer cuando switchState es falso */}
            </>
          )}
        </div>
        <div className="switch__rightColumn">
          <div>
            <Switch {...label} checked={switchState} onChange={toggleSwitch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { SwitchConCifra };
