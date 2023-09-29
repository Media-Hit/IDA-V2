import React from "react";
import "./CostoTransferencia.css";

import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function CostoTransferencia() {
  return (
    <div className="transferenciaContainer box-border margin-bottom">
      <div className="transferencia__fila1">
        <div className="transferencia_label inactiveFieldText">Transacción</div>
        <Switch {...label} />
      </div>

      <div className="transferencia__fila2">
        <div className="trasnferencia__fila2__columna1">
          <li>
            <ul>Más IVA</ul>
            <ul>Con IVA</ul>
            <ul>No IVA</ul>
          </li>
        </div>
        <div className="transferencia__fila2__columna2">
          <span>Transferencia: $1000</span>
          <span>IVA: $190</span>
          <span>Total: $1000</span>
        </div>
      </div>
    </div>
  );
}

export { CostoTransferencia };
