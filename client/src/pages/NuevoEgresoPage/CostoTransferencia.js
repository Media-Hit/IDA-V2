import React from "react";
import "./CostoTransferencia.css";

import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const label = { inputProps: { "aria-label": "Switch demo" } };

const ivaSelectStyle = {
  fontSize: 30,
  fontWeight: "medium",
};

function CostoTransferencia() {
  return (
    <div className="transferenciaContainer box-border margin-bottom">
      <div className="transferencia__fila1 transferencia__fila1--active">
        <div className="transferencia_label inactiveFieldText">Transacción</div>
        <Switch {...label} />
      </div>

      <div className="transferencia__fila2">
        <div className="trasnferencia__fila2__columna1">
          <FormControl>
            <FormLabel sx={{ fontSize: 14, fontWeight: "medium" }}>
              IVA:
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="masiva"
              name="radio-buttons-group"
            >
              <FormControlLabel
                className="iva-selector"
                value="masiva"
                control={<Radio />}
                label="Más IVA"
              />
              <FormControlLabel
                className="iva-selector"
                value="coniva"
                control={<Radio />}
                label="Con IVA"
              />
              <FormControlLabel
                className="iva-selector"
                value="noiva"
                control={<Radio />}
                label="No IVA"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="transferencia__fila2__columna2">
          <span>Subtotal: $1000</span>
          <span>IVA: $190</span>
          <span>Total: $1000</span>
        </div>
      </div>
    </div>
  );
}

export { CostoTransferencia };
