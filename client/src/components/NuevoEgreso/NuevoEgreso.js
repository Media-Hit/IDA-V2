import React, { useState, useEffect } from "react";
import "./NuevoEgreso.css";

import { Link } from "react-router-dom";
import axios from "axios";

import { SelectorDeFecha } from "../SelectorDeFecha/SelectorDeFecha";
import { CampoDesplegable } from "../CampoDesplegable/CampoDesplegable";
import { PersonalCorporativo } from "../PersonalCorporativo/PersonalCorporativo";
import { CampoDesplegableCreate } from "../CampoDesplegableCreate/CampoDesplegableCreate";
import { CampoAutocomplete } from "../CampoAutocomplete/CampoAutocomplete";

function NuevoEgreso() {
  const [listOfCuentas, setListOfCuentas] = useState([]);
  const [listOfProveedores, setListOfProveedores] = useState([]);
  const [loadingProveedores, setLoadingProveedores] = useState(true);
  const [listOfCategorias, setListOfCategorias] = useState([]);
  const [loadingCategorias, setLoadingCategorias] = useState(true);

  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const handleCategoriaSelect = (categoria) => {
    setSelectedCategoria(categoria);
    console.log("Categoria seleccionada:", categoria);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/cuentas").then((response) => {
      const cuentasDebito = response.data.filter(
        (cuenta) => cuenta.tipo_de_cuenta === "debit"
      );
      setListOfCuentas(cuentasDebito);
    });

    axios
      .get("http://localhost:3001/proveedores/listado")
      .then((response) => {
        setListOfProveedores(response.data);
        setLoadingProveedores(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos de proveedores:", error);
        setLoadingProveedores(false);
      });

    axios
      .get("http://localhost:3001/categoriasEgresos")
      .then((response) => {
        const categoriasFiltradas = response.data.filter((categoria) => {
          return (
            categoria.es_padre === true ||
            (categoria.es_padre === false && categoria.es_hijo === false)
          );
        });
        setListOfCategorias(categoriasFiltradas);
        setLoadingCategorias(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos de proveedores:", error);
        setLoadingCategorias(false);
      });
  }, []);

  const pruebatecnica = [
    { nombre: "Carulla" },
    { nombre: "Nicolás Benavides" },
    { nombre: "Google" },
    { nombre: "Alkosto" },
  ];

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
                <CampoDesplegable
                  etiqueta="Cuenta"
                  values={listOfCuentas}
                  columName="nombre"
                />

                {!loadingProveedores && (
                  <CampoDesplegableCreate
                    etiqueta="Proveedor"
                    values={listOfProveedores}
                    columName="nombre"
                  />
                )}
              </div>
              <div className="info-box">
                <h2 className="box-title titulo ">Para Qué</h2>
                <div className="margin-bottom">
                  <PersonalCorporativo />
                </div>

                {!loadingCategorias && (
                  <CampoAutocomplete
                    etiqueta="Categoría"
                    values={listOfCategorias}
                    columName="nombre"
                    onSelect={handleCategoriaSelect}
                  />
                )}
              </div>
            </div>
            <div className="nuevoegreso_columna">
              <div className="info-box">
                <h2 className="box-title titulo ">Por qué</h2>
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
