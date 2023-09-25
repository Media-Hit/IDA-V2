import React from "react";
import "./Movimientos.css";

import { useState } from "react";
import { CalMovimientos } from "./CalMovimientos";
import { ListMovimientos } from "./ListMovimientos";
import { Link } from "react-router-dom";

function Movimientos() {
  const [selectedDate, setSelectedDate] = useState(null); // Estado compartido para la fecha seleccionada

  const handleClearFilter = () => {
    setSelectedDate(null);
  };

  const handleAddButtonClick = () => {
    // Guardar la fecha seleccionada en localStorage
    if (selectedDate) {
      localStorage.setItem("selectedDate", selectedDate);
    }
  };

  // Función para borrar selectedDate del localStorage
  const clearLocalStorage = () => {
    localStorage.removeItem("selectedDate");
  };
  clearLocalStorage();

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
            <Link to="/nuevo-movimiento" onClick={handleAddButtonClick}>
              <button className="material-symbols-outlined toolBoxIcon">
                add
              </button>
            </Link>
          </div>
        </div>
        <div className="movimientos__bodyContainer main-body-background">
          <div className="movimientos__leftSideContainer">
            <CalMovimientos
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <div className="movimientos__rightSideContainer">
            <div className="list__container">
              <h2 className="titulo interlineado_inferior">Personal</h2>
              <ListMovimientos selectedDate={selectedDate} />
            </div>
            <div className="list__container">
              <h2 className="titulo interlineado_inferior">Corporativo</h2>
              <ListMovimientos selectedDate={selectedDate} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Movimientos };
