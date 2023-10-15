import React, { useState, useEffect } from "react";
import "./SwitchConCifra.css";

import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function SwitchConCifra({ etiqueta, cifraCalculada, onOrOff }) {
  const [switchState, setSwitchState] = useState(false);

  const toggleSwitch = () => {
    const newSwitchState = !switchState;
    setSwitchState(newSwitchState);
    onOrOff(newSwitchState);
  };

  // Formatear cifraCalculada como número con separador de miles y símbolo "$"
  const formattedCifraCalculada = cifraCalculada.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, // Evita los decimales
    maximumFractionDigits: 0, // Evita los decimales
  });

  return (
    <div className="switchContainer box-border margin-bottom">
      <div className="switchBox">
        <div className="switch__leftColumn">
          {switchState && (
            <p className="cifraSwitch">{formattedCifraCalculada}</p>
          )}

          {switchState ? (
            <p className="descripcionSwitch parentheses">{etiqueta}</p>
          ) : (
            <>
              <p className="inactiveFieldText ">{etiqueta}</p>
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
