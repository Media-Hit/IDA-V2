import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import { format } from "date-fns";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./NuevoEgreso.css";

function NuevoEgreso() {
  const [selectedDate, setSelectedDate] = useState(null);
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
    // Recuperar la fecha seleccionada desde localStorage
    const storedDate = localStorage.getItem("selectedDate");

    if (storedDate) {
      setSelectedDate(new Date(storedDate));
    } else {
      // Si no hay fecha en localStorage, establece la fecha por defecto como hoy
      setSelectedDate(new Date());
    }

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
        <div className="main-body-background">
          <div className="nuevoEgreso__bodyContainer">
            <div className="nuevoegreso_columna" id="nuevoegreso_columna1">
              <div className="info-box">
                <h2 className="box-title titulo">Cuándo</h2>
                {/* Selector de Fecha */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      label="Fecha"
                      renderInput={(params) => <TextField {...params} />}
                      value={selectedDate}
                      onChange={(date) => {
                        console.log(format(date, "dd/MM/yyyy"));
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
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
