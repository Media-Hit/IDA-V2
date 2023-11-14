import React, { useState, useEffect } from "react";
import "./CostoTransferencia.css";

import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { CampoDinero } from "../../components/CampoDinero/CampoDinero";

const label = { inputProps: { "aria-label": "Switch demo" } };

function CostoTransferencia(props) {
  //Activar y Desactivar Switch (estilos)
  const [switchTransferenciaActive, setSwitchTransferenciaActive] =
    useState(false);

  const handleSwitchChange = () => {
    setSwitchTransferenciaActive(!switchTransferenciaActive);
    setMontoInsertado(0);
  };

  const fila1ClassName = switchTransferenciaActive
    ? "transferencia__fila1 transferencia__fila1--active"
    : "transferencia__fila1";

  const fila2ClassName = switchTransferenciaActive
    ? "transferencia__fila2--active"
    : "transferencia__fila2--inactive";

  //Radio Group del IVA
  const [modalidadIvaTransferencia, setModalidadIvaTransferencia] =
    useState("noiva");

  const handleIvaChange = (event) => {
    setModalidadIvaTransferencia(event.target.value);
  };

  //Calcular Transacción
  const [montoInsertado, setMontoInsertado] = useState(0);
  const [subtotalTransaccion, setSubtotalTransaccion] = useState(0);
  const [ivaTransaccion, setIvaTransaccion] = useState(0);
  const [totalTransaccion, setTotalTransaccion] = useState(0);

  const handleTransaccionChange = (valor) => {
    const monto = parseFloat(valor);
    if (!isNaN(monto)) {
      setMontoInsertado(monto);
    } else {
      setMontoInsertado(0);
    }
  };

  useEffect(() => {
    const iva = Math.round(montoInsertado * 0.19);

    if (modalidadIvaTransferencia === "masiva") {
      setSubtotalTransaccion(montoInsertado);
      setIvaTransaccion(iva);
      setTotalTransaccion(montoInsertado + iva);
    } else if (modalidadIvaTransferencia === "coniva") {
      const subtotal = Math.round(montoInsertado / (1 + 0.19));
      setSubtotalTransaccion(subtotal);

      const ivaIncluido = Math.round(subtotal * 0.19);
      setIvaTransaccion(ivaIncluido);

      setTotalTransaccion(subtotal + ivaIncluido);
    } else if (modalidadIvaTransferencia === "noiva") {
      setSubtotalTransaccion(montoInsertado);
      setIvaTransaccion(0);
      setTotalTransaccion(montoInsertado);
    } else {
      setSubtotalTransaccion(0);
      setIvaTransaccion(0);
      setTotalTransaccion(0);
    }
  }, [montoInsertado, modalidadIvaTransferencia]);

  useEffect(() => {
    props.onTotalTransaccionChange(totalTransaccion);
  }, [totalTransaccion]);

  return (
    <div className="transferenciaContainer box-border margin-bottom">
      <div className={fila1ClassName}>
        {switchTransferenciaActive ? (
          <CampoDinero
            etiqueta={"Costo Transacción"}
            onChange={handleTransaccionChange}
            variante="standard"
            autofocus={true}
            disableBottomLine={false}
          />
        ) : (
          <div className="transferencia_label inactiveFieldText">
            Transacción
          </div>
        )}
        <Switch
          {...label}
          onChange={handleSwitchChange}
          checked={switchTransferenciaActive}
        />
      </div>

      <div className={fila2ClassName}>
        <div className="transferencia__fila2__columna1">
          <FormControl>
            <FormLabel sx={{ fontSize: 14, fontWeight: "medium" }}>
              IVA:
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="noiva"
              name="radio-buttons-group"
              onChange={handleIvaChange}
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
          <span className="subtittle-box">Resumen:</span>
          <span className="resumen-transaccion-body">
            Subtotal: $
            {Math.round(subtotalTransaccion).toLocaleString("en-US", {
              minimumFractionDigits: 0,
            })}
          </span>
          <span className="resumen-transaccion-body">
            IVA: $
            {Math.round(ivaTransaccion).toLocaleString("en-US", {
              minimumFractionDigits: 0,
            })}
          </span>
          <span className="resumen-transaccion-body">
            Total: $
            {totalTransaccion.toLocaleString("en-US", {
              minimumFractionDigits: 0,
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export { CostoTransferencia };
