import React from "react";
import { useState } from "react";
import { CalMovimientos } from "../CalMovimientos/CalMovimientos";
import { ListMovimientos } from "../ListMovimientos/ListMovimientos";

import "./Movimientos.css";

function Movimientos() {
  const [selectedDate, setSelectedDate] = useState(null); // Estado compartido para la fecha seleccionada

  const handleClearFilter = () => {
    setSelectedDate(null);
  };

  return (
    <>
      <div className="movimientosMainContainer">
        <div className="headerContainer">
          <h1 className="pageTittle">Movimientos</h1>
          <div className="ToolBox__Container">
            {selectedDate !== null && (
              <button
                className="material-symbols-outlined toolBoxIcon"
                onClick={handleClearFilter}
              >
                filter_list_off
              </button>
            )}
            <button className="material-symbols-outlined toolBoxIcon">
              add
            </button>
          </div>
        </div>
        <div className="bodyContainer">
          <div className="leftSideContainer">
            <CalMovimientos
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <div className="rightSideContainer">
            <div className="list__container">
              <h2 className="titulo-movimiento">Personal</h2>
              <ListMovimientos selectedDate={selectedDate} />
            </div>
            <div className="list__container">
              <h2 className="titulo-movimiento">Corporativo</h2>
              <ListMovimientos selectedDate={selectedDate} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Movimientos };
