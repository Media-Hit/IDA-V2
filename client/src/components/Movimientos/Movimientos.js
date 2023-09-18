import React from "react";
import { useState } from "react";
import { CalMovimientos } from "../CalMovimientos/CalMovimientos";
import { ListMovimientos } from "../ListMovimientos/ListMovimientos";

import "./Movimientos.css";

function Movimientos() {
  const [selectedDate, setSelectedDate] = useState(null); // Estado compartido para la fecha seleccionada

  return (
    <>
      <div className="movimientosMainContainer">
        <div className="headerContainer">
          <h1 className="pageTittle">Movimientos</h1>
        </div>
        <div className="bodyContainer">
          <div className="leftSideContainer">
            <CalMovimientos setSelectedDate={setSelectedDate} />
          </div>
          <div className="rightSideContainer">
            <div>
              <h2 className="titulo-movimiento">Personal</h2>
              <ListMovimientos selectedDate={selectedDate} />
            </div>
            <div>
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
