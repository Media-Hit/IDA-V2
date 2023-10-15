import React from "react";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { Movimientos } from "./Movimientos";
import { MovimientosProvider } from "./MovimientosContext";

function MovimientosPage() {
  return (
    <div className="mainAppContainer">
      <MainMenu />
      <MovimientosProvider>
        <Movimientos />
      </MovimientosProvider>
    </div>
  );
}

export { MovimientosPage };
