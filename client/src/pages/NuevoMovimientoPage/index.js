import React from "react";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { NuevoMovimiento } from "../../components/NuevoMovimiento/NuevoMovimiento";

function NuevoMovimientoPage() {
  return (
    <div className="mainAppContainer">
      <MainMenu />
      <NuevoMovimiento />
    </div>
  );
}

export { NuevoMovimientoPage };
