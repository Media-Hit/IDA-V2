import React, { useState, useEffect } from "react";
import "./SwitchConCifra.css";

import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function SwitchConCifra(cifraCalculada) {
  const [switchState, setSwitchState] = useState(false);

  const toggleSwitch = () => {
    setSwitchState(!switchState);
  };

  useEffect(() => {
    // Update the switchState when cifraCalculada changes
    setSwitchState(cifraCalculada !== 0);
  }, [cifraCalculada]);

  return (
    <div className="switchContainer">
      <div className="switchBox">
        <div className="switch__leftColumn">
          {switchState && (
            <p className="cifraSwitch">${cifraCalculada.cifraCalculada}</p>
          )}

          {switchState ? (
            <p className="descripcionSwitch parentheses">4x1000</p>
          ) : (
            <>
              <p className="descripcionSwitchInactive ">4x1000</p>
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
