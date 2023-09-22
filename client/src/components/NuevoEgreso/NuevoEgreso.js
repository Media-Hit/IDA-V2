import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";

import "./NuevoEgreso.css";

function NuevoEgreso() {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Recuperar la fecha seleccionada desde localStorage
    const storedDate = localStorage.getItem("selectedDate");

    if (storedDate) {
      setSelectedDate(new Date(storedDate));
    } else {
      // Si no hay fecha en localStorage, establece la fecha por defecto como hoy
      setSelectedDate(new Date());
    }
  }, []);

  console.log(selectedDate); // Agrega esta línea para comprobar el valor de selectedDate

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
        <div className="nuevoEgreso__bodyContainer main-body-background">
          <div className="nuevoegreso_columna1">
            <div className="info-box">
              <h2 className="box-title titulo">Cuándo</h2>

              {/* Selector de Fecha */}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Fecha"
                    renderInput={(params) => <TextField {...params} />}
                    value={selectedDate} // Establece el valor de selectedDate como valor por defecto
                    onChange={(date) => {
                      console.log(format(date, "dd/MM/yyyy"));
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="info-box">
              <h2 className="box-title titulo ">Cómo</h2>
            </div>
          </div>
          <div className="nuevoegreso_columna2">
            <div className="info-box">
              <h2 className="box-title titulo ">Por qué</h2>
            </div>
            <div className="info-box">
              <h2 className="box-title titulo ">Para Qué</h2>
            </div>
          </div>
          <div className="nuevoegreso_columna3">
            <div className="info-box ">
              <h2 className="box-title titulo">Impuestos</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { NuevoEgreso };
