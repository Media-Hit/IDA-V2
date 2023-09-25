import React from "react";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { NuevoEgreso } from "./NuevoEgreso";

function NuevoEgresoPage() {
  return (
    <div className="mainAppContainer">
      <MainMenu />
      <NuevoEgreso />
    </div>
  );
}

export { NuevoEgresoPage };
