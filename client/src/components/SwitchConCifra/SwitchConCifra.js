import React, { useState, useEffect } from "react";
import "./SwitchConCifra.css";

import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function SwitchConCifra({ etiqueta, cifraCalculada }) {
  const [switchState, setSwitchState] = useState(false);

  const toggleSwitch = () => {
    setSwitchState(!switchState);
  };

  // Formatear cifraCalculada como número con separador de miles y símbolo "$"
  const formattedCifraCalculada = cifraCalculada.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0, // Evita los decimales
    maximumFractionDigits: 0, // Evita los decimales
  });

  useEffect(() => {
    // Update the switchState when cifraCalculada changes
    setSwitchState(cifraCalculada == 0);
  }, [cifraCalculada]);

  return (
    <div className="switchContainer margin-bottom">
      <div className="switchBox">
        <div className="switch__leftColumn">
          {switchState && (
            <p className="cifraSwitch">{formattedCifraCalculada}</p>
          )}

          {switchState ? (
            <p className="descripcionSwitch parentheses">{etiqueta}</p>
          ) : (
            <>
              <p className="descripcionSwitchInactive ">{etiqueta}</p>
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
