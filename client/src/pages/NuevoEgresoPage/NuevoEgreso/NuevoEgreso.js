import React, { useState, useEffect } from "react";
import "./NuevoEgreso.css";

import { Link } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { SelectorDeFecha } from "../../../components/SelectorDeFecha/SelectorDeFecha";
import { CampoDesplegable } from "../../../components/CampoDesplegable";
import { PersonalCorporativo } from "../../../components/PersonalCorporativo/PersonalCorporativo";
import { CampoDesplegableCreate } from "../../../components/CampoDesplegableCreate/CampoDesplegableCreate";
import { CampoAutocomplete } from "../../../components/CampoAutocomplete/CampoAutocomplete";
import { CampoDinero } from "../../../components/CampoDinero/CampoDinero";
import { SwitchConCifra } from "../../../components/SwitchConCifra/SwitchConCifra";

function NuevoEgreso() {
  const [listOfCuentas, setListOfCuentas] = useState([]);
  const [loadingCuentas, setLoadingCuentas] = useState(true);

  const [listOfProveedores, setListOfProveedores] = useState([]);
  const [loadingProveedores, setLoadingProveedores] = useState(true);
  const [listOfAllCategorias, setListOfAllCategorias] = useState([]);
  const [listOfCategorias, setListOfCategorias] = useState([]);
  const [loadingCategorias, setLoadingCategorias] = useState(true);
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const [subCategoriaExiste, setSubCategoriaExiste] = useState(false);
  const [subCategorias, setSubCategorias] = useState([]);
  const [listOfProyectos, setListOfProyectos] = useState([]);
  const [mostrarProyectos, setMostrarProyectos] = useState(false);

  const [montoPagado, setMontoPagado] = useState(0);
  const [calculo4x1000, setcalculo4x1000] = useState(0);
  const [costoTransferencia, setCostoTransferencia] = useState(1000);
  const [consolidadoDeEgresos, setConsolidadoDeEgresos] = useState(0);

  //Se activa cuando se escoge un categoria
  const handleCategoriaSelect = (categoria) => {
    setSelectedCategoria(categoria);
    console.log("Categoria seleccionada:", selectedCategoria);

    if (categoria === null || !categoria.es_padre) {
      setSubCategoriaExiste(false);
      setSubCategorias([]);
    } else {
      const subCategoriasFiltradas = listOfAllCategorias.filter(
        (subCategoria) => subCategoria.padre === categoria.nombre
      );
      setSubCategorias(subCategoriasFiltradas);
      setSubCategoriaExiste(true);
    }
  };

  const handleSubcategoriaSelect = (subcategoria) => {
    console.log("SubcategoriaEscogida");
    console.log(subcategoria);
  };

  const handleMontoPagadoChange = (valor) => {
    const monto = parseFloat(valor);
    if (!isNaN(monto)) {
      setMontoPagado(monto);
    } else {
      setMontoPagado(0);
    }
  };
  useEffect(() => {
    setConsolidadoDeEgresos(montoPagado + costoTransferencia);
    setcalculo4x1000((montoPagado + costoTransferencia) * 0.004);
  }, [montoPagado, costoTransferencia]);

  useEffect(() => {
    axios.get("http://localhost:3001/cuentas").then((response) => {
      const cuentasDebito = response.data.filter(
        (cuenta) => cuenta.tipo_de_cuenta === "debit"
      );
      setListOfCuentas(cuentasDebito);
      setLoadingCuentas(false);
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
        const allCategorias = response.data;
        setListOfAllCategorias(allCategorias);

        const categoriasPrincipales = response.data.filter((categoria) => {
          return (
            categoria.es_padre === true ||
            (categoria.es_padre === false && categoria.es_hijo === false)
          );
        });
        setListOfCategorias(categoriasPrincipales);
        setLoadingCategorias(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos de proveedores:", error);
        setLoadingCategorias(false);
      });

    axios
      .get("http://localhost:3001/proyectos/listado")
      .then((response) => {
        setListOfProyectos(response.data);
        //  setLoadingProveedores(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos de proveedores:", error);
        //  setLoadingProveedores(false);
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
                {!loadingCuentas && (
                  <CampoDesplegable
                    etiqueta="Cuenta"
                    values={listOfCuentas}
                    columName="nombre"
                  />
                )}

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
                <PersonalCorporativo
                  setMostrarProyectos={setMostrarProyectos}
                />

                {!loadingCategorias && (
                  <CampoAutocomplete
                    etiqueta="Categoría"
                    values={listOfCategorias}
                    columName="nombre"
                    onSelect={handleCategoriaSelect}
                  />
                )}

                {subCategoriaExiste && (
                  <CampoAutocomplete
                    etiqueta="Sub Categoría"
                    values={subCategorias}
                    columName="nombre"
                    onSelect={handleSubcategoriaSelect}
                  />
                )}

                {mostrarProyectos && (
                  <CampoDesplegableCreate
                    etiqueta="Proyecto"
                    values={listOfProyectos}
                    columName="nombre"
                  />
                )}

                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    label="Descripción"
                    variant="outlined"
                    multiline
                    fullWidth
                    maxRows={4}
                  />
                </Box>
              </div>
            </div>
            <div className="nuevoegreso_columna">
              <div className="info-box">
                <h2 className="box-title titulo ">Cuánto</h2>
                <CampoDinero
                  etiqueta={"Monto Pagado"}
                  onChange={handleMontoPagadoChange}
                />

                <p>Módulo Aporta a cuentas por pagar Switch</p>
                <br />

                <SwitchConCifra
                  etiqueta="4x1000"
                  cifraCalculada={calculo4x1000}
                />

                <p>Módulo Total Egresado: $$$$$ </p>
                <br />

                <p>Variables Útiles (NO UX)</p>
                <p>Monto Pagado: {montoPagado}</p>
                <p>Costo Transferencia: {costoTransferencia}</p>
                <p>Total: {consolidadoDeEgresos}</p>
                <p>Monto 4x1000: {calculo4x1000}</p>
              </div>
            </div>
            <div className="nuevoegreso_columna">
              <div className="info-box ">
                <h2 className="box-title titulo">Columna 3</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { NuevoEgreso };
