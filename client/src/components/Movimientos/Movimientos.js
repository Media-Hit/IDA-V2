import React from "react";
import { useState } from "react";
import { CalMovimientos } from "../CalMovimientos/CalMovimientos";
import { ListMovimientos } from "../ListMovimientos/ListMovimientos";
import { Link } from "react-router-dom";

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
            <Link to="/nuevo-movimiento">
              <button className="material-symbols-outlined toolBoxIcon">
                add
              </button>
            </Link>
          </div>
        </div>
        <div className="movimientos__bodyContainer">
          <div className="movimientos__leftSideContainer">
            <CalMovimientos
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <div className="movimientos__rightSideContainer">
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
