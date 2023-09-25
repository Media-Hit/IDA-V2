import React from "react";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { Balance } from "./Balance";

function BalancePage() {
  return (
    <div className="mainAppContainer">
      <MainMenu />
      <Balance />
    </div>
  );
}

export { BalancePage };
