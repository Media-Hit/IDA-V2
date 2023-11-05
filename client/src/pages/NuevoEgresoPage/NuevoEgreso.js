import React, { useState, useEffect } from "react";
import "./NuevoEgreso.css";

import { Link } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { SelectorDeFecha } from "../../components/SelectorDeFecha/SelectorDeFecha";
import { CampoDesplegable } from "../../components/CampoDesplegable";
import { PersonalCorporativo } from "../../components/PersonalCorporativo/PersonalCorporativo";
import { CampoDesplegableCreate } from "../../components/CampoDesplegableCreate/CampoDesplegableCreate";
import { CampoAutocomplete } from "../../components/CampoAutocomplete/CampoAutocomplete";
import { CampoDinero } from "../../components/CampoDinero/CampoDinero";
import { SwitchConCifra } from "../../components/SwitchConCifra/SwitchConCifra";
import { CostoTransferencia } from "./CostoTransferencia";
import { MovimientosContext } from "../MovimientosPage/MovimientosContext";
import { format, parse } from "date-fns";

function NuevoEgreso() {
  const [formValues, setFormValues] = useState({
    fecha: "",
    cuenta: "TestCuenta",
  });

  const handleSave = () => {
    console.log(`Fecha: ${formValues.fecha}`);
    console.log(`Cuenta: ${formValues.cuenta}`);
  };

  const [listOfCuentas, setListOfCuentas] = useState([]);
  const [loadingCuentas, setLoadingCuentas] = useState(true);
  const [selectedOutcomeDate, setSelectedOutcomeDate] = useState(null);

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
  const [montoDelIva, setMontoDelIva] = useState(0);
  const [calculo4x1000, setCalculo4x1000] = useState(0);
  const [costoTransferencia, setCostoTransferencia] = useState(0);
  const [consolidadoDeEgresos, setConsolidadoDeEgresos] = useState(0);

  const [cuatroPorMilActivo, setcuatroPorMilActivo] = useState(false);

  //Datos formulario
  const [selectedAccount, setSelectedAccount] = useState();
  const handleAccountSelect = (cuenta) => {
    setSelectedAccount(cuenta);
  };

  //Se activa cuando se escoge un categoria
  const handleSave = () => {
    console.log("Guardando");
  };

  const handleCategoriaSelect = (categoria) => {
    setSelectedCategoria(categoria);

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

  const handleMontoDelIVAChange = (valor) => {
    const monto = parseFloat(valor);
    if (!isNaN(monto)) {
      setMontoDelIva(monto);
    } else {
      setMontoDelIva(0);
    }
  };

  function handleTotalTransaccionChange(total) {
    setCostoTransferencia(total);
  }

  useEffect(() => {
    let cuatroxmil = 0;
    if (cuatroPorMilActivo) {
      cuatroxmil = Math.round((montoPagado + costoTransferencia) * 0.004);
    }

    setCalculo4x1000(cuatroxmil);
    setConsolidadoDeEgresos(montoPagado + costoTransferencia + cuatroxmil);
  }, [montoPagado, costoTransferencia, cuatroPorMilActivo]);

  //Axios
  useEffect(() => {
    axios
      .get("http://localhost:3001/cuentas")
      .then((response) => {
        const cuentasDebito = response.data.filter(
          (cuenta) => cuenta.tipo_de_cuenta === "debit"
        );
        setListOfCuentas(cuentasDebito);
        setLoadingCuentas(false);
        console.log(cuentasDebito);
      })
      .catch((error) => {
        console.error("Error al obtener datos de cuentas:", error);
        setLoadingProveedores(false);
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
        console.error("Error al obtener datos de gresos:", error);
        setLoadingCategorias(false);
      });

    axios
      .get("http://localhost:3001/proyectos/listado")
      .then((response) => {
        setListOfProyectos(response.data);
        //  setLoadingProveedores(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos de proyectos:", error);
        //  setLoadingProveedores(false);
      });
  }, []);

  return (
    <>
      <form>
        <div className="movimientosMainContainer">
          {/* Header */}
          <div className="headerContainer">
            <h1 className="pageTittle">Nuevo Egreso</h1>

            <div className="toolBox__Container">
              <div className="toolBoxButtom__container" onClick={handleSave}>
                <span className="material-symbols-outlined toolBox__ButtomIcon">
                  <span class="material-symbols-outlined">done</span>
                </span>
                <span className="toolBox__ButtomText">Guardar</span>
              </div>

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
                      onSelect={handleAccountSelect}
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
                    variante="outlined"
                    autofocus={false}
                    disableBottomLine={false}
                  />

                  <CampoDinero
                    etiqueta={"IVA"}
                    onChange={handleMontoDelIVAChange}
                    variante="outlined"
                    autofocus={false}
                    disableBottomLine={false}
                  />

                  <CostoTransferencia
                    onTotalTransaccionChange={handleTotalTransaccionChange}
                  />

                  <SwitchConCifra
                    etiqueta="4x1000"
                    cifraCalculada={calculo4x1000}
                    onOrOff={setcuatroPorMilActivo}
                  />
                  <div className="totalResumeBox">
                    <p className="inner-single-text">
                      <span className="bold-text">Pagado: </span>
                      <span className="light-text">
                        {montoPagado.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0, // Evita los decimales
                          maximumFractionDigits: 0, // Evita los decimales
                        })}
                      </span>
                    </p>
                    <p className="inner-single-text">
                      <span className="bold-text">Transacción: </span>
                      <span className="light-text">
                        {costoTransferencia.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0, // Evita los decimales
                          maximumFractionDigits: 0, // Evita los decimales
                        })}
                      </span>
                    </p>
                    <p className="inner-single-text">
                      <span className="bold-text">4x1000: </span>
                      <span className="light-text">
                        {calculo4x1000.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0, // Evita los decimales
                          maximumFractionDigits: 0, // Evita los decimales
                        })}
                      </span>
                    </p>
                    <p
                      className="inner-single-text bold-text"
                      id="total-egreso"
                    >
                      <span className="">
                        Total:{" "}
                        {consolidadoDeEgresos.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0, // Evita los decimales
                          maximumFractionDigits: 0, // Evita los decimales
                        })}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export { NuevoEgreso };
