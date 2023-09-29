import React from "react";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { NuevoEgreso } from "./NuevoEgreso";
import { MovimientosProvider } from "../MovimientosPage/MovimientosContext";

function NuevoEgresoPage() {
  return (
    <div className="mainAppContainer">
      <MainMenu />
      <MovimientosProvider>
        <NuevoEgreso />
      </MovimientosProvider>
    </div>
  );
}

export { NuevoEgresoPage };
