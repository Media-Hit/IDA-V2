import React from "react";
import { MainMenu } from "../components/MainMenu/MainMenu";
import { NuevoEgreso } from "../components/NuevoEgreso/NuevoEgreso";

function NuevoEgresoPage() {
  return (
    <div className="mainAppContainer">
      <MainMenu />
      <NuevoEgreso />
    </div>
  );
}

export { NuevoEgresoPage };
