import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NuevoEgreso.css";

function NuevoEgreso() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <div className="movimientosMainContainer">
        <div className="headerContainer">
          <h1 className="pageTittle">Movimientos</h1>
          <div className="ToolBox__Container">
            <Link to="/">
              <button className="material-symbols-outlined toolBoxIcon">
                close
              </button>
            </Link>
          </div>
        </div>
        <div className="nuevoEgreso__bodyContainer"></div>
      </div>
    </>
  );
}

export { NuevoEgreso };
