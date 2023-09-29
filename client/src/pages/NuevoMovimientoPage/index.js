import React from "react";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { NuevoMovimiento } from "../../components/NuevoMovimiento/NuevoMovimiento";
import { MovimientosProvider } from "../MovimientosPage/MovimientosContext";

function NuevoMovimientoPage() {
  return (
    <div className="mainAppContainer">
      <MainMenu />
      <MovimientosProvider>
        <NuevoMovimiento />
      </MovimientosProvider>
    </div>
  );
}

export { NuevoMovimientoPage };
