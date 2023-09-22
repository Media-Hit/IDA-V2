import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { SelectorDeFecha } from "../SelectorDeFecha/SelectorDeFecha";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./NuevoEgreso.css";

function NuevoEgreso() {
  const [listOfCuentas, setListOfCuentas] = useState([]);

  const [cuentaSeleccionada, setCuentaSeleccionada] = useState("");
  const seleccionDeCuenta = (event) => {
    setCuentaSeleccionada(event.target.value);
  };

  const [tipoDeTransaccion, setTipoDeTransaccion] = useState("");
  const handleTipoDeTransaccion = (event) => {
    setTipoDeTransaccion(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/cuentas/").then((response) => {
      const cuentasDebito = response.data.filter(
        (cuenta) => cuenta.tipo_de_cuenta === "debit"
      );
      setListOfCuentas(cuentasDebito);
    });
  }, []);

  return (
    <>
      <div className="movimientosMainContainer">
        {/* Header */}
        <div className="headerContainer">
          <h1 className="pageTittle">Nuevo Egreso</h1>
          <div className="ToolBox__Container">
            <Link to="/">
              <button className="material-symbols-outlined toolBoxIcon">
                close
              </button>
            </Link>
          </div>
        </div>

        {/* Body */}
        <div className="main-body-background">
          <div className="nuevoEgreso__bodyContainer">
            <div className="nuevoegreso_columna" id="nuevoegreso_columna1">
              <div className="info-box">
                <h2 className="box-title titulo">Cuándo</h2>
                <SelectorDeFecha />
              </div>

              <div className="info-box">
                <h2 className="box-title titulo ">Cómo</h2>
                {/* Selector de Cuenta */}
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth className="margin-bottom">
                    <InputLabel id="demo-simple-select-label">
                      Cuenta
                    </InputLabel>
                    <Select
                      className="margin-bottom"
                      id="demo-simple-select"
                      label="Cuenta"
                      labelId="demo-simple-select-label"
                      onChange={seleccionDeCuenta}
                      value={cuentaSeleccionada}
                    >
                      {/* Mapea los elementos de listOfCuentas para generar el menú en orden alfabético */}
                      {listOfCuentas
                        .slice()
                        .sort((a, b) => a.nombre.localeCompare(b.nombre))
                        .map((cuenta, index) => (
                          <MenuItem key={index} value={cuenta.nombre}>
                            {cuenta.nombre}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Box>

                {/* Selector de Proveedor */}
              </div>
            </div>
            <div className="nuevoegreso_columna">
              <div className="info-box">
                <h2 className="box-title titulo ">Por qué</h2>
              </div>
              <div className="info-box">
                <h2 className="box-title titulo ">Para Qué</h2>

                {/* Personal o Corporativo */}
                <ToggleButtonGroup
                  color="primary"
                  value={tipoDeTransaccion}
                  exclusive
                  onChange={handleTipoDeTransaccion}
                  aria-label="Tipo de Transacción"
                  className="full-width"
                >
                  <ToggleButton value="personal" aria-label="">
                    Personal
                  </ToggleButton>
                  <ToggleButton value="corporativo" aria-label="">
                    Corporativo
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
            <div className="nuevoegreso_columna">
              <div className="info-box ">
                <h2 className="box-title titulo">Impuestos</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { NuevoEgreso };
