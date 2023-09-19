import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NuevoMovimiento.css";
import { CategoriaMovimiento } from "../CategoriaMovimiento/CategoriaMovimiento";

function NuevoMovimiento() {
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
        <div className="nuevoMovimiento__bodyContainer">
          <p className="nuevoMovimiento__subtitulo">Paso 1</p>
          <h2 className="nuevoMovimiento__titulo">
            ¿Qué Movimiento te Gustaría Hacer?
          </h2>
          <div className="nuevoMovimiento__categoriasBox">
            <CategoriaMovimiento
              linkTo="/nuevo-egreso"
              label="Egreso"
              icono="logout"
            />
            <CategoriaMovimiento
              linkTo="/nuevo-ingreso"
              label="Ingreso"
              icono="exit_to_app"
            />
            <CategoriaMovimiento
              linkTo="/nueva-transferencia"
              label="Transferencia"
              icono="sync_alt"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export { NuevoMovimiento };
