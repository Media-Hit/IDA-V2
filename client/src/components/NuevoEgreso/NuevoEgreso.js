import React, { useState, useEffect } from "react";
import "./NuevoEgreso.css";

import { Link } from "react-router-dom";
import axios from "axios";

import { SelectorDeFecha } from "../SelectorDeFecha/SelectorDeFecha";
import { CampoDesplegable } from "../CampoDesplegable/CampoDesplegable";
import { PersonalCorporativo } from "../PersonalCorporativo/PersonalCorporativo";
import { CampoDesplegableCreate } from "../CampoDesplegableCreate/CampoDesplegableCreate";

function NuevoEgreso() {
  const [listOfCuentas, setListOfCuentas] = useState([]);
  const [listOfProveedores, setListOfProveedores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/cuentas").then((response) => {
      const cuentasDebito = response.data.filter(
        (cuenta) => cuenta.tipo_de_cuenta === "debit"
      );
      setListOfCuentas(cuentasDebito);
    });

    axios.get("http://localhost:3001/proveedores/listado").then((response) => {
      setListOfProveedores(response.data);
      console.log("prueba");
      console.log(listOfProveedores);
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
                <CampoDesplegable values={listOfCuentas} label="Cuenta" />
                <CampoDesplegableCreate values={listOfProveedores} />
              </div>
            </div>
            <div className="nuevoegreso_columna">
              <div className="info-box">
                <h2 className="box-title titulo ">Por qué</h2>
              </div>
              <div className="info-box">
                <h2 className="box-title titulo ">Para Qué</h2>
                <PersonalCorporativo />
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
