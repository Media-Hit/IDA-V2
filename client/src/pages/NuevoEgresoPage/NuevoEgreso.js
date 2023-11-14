import React, { useState, useEffect } from "react";
import "./NuevoEgreso.css";

import { Link } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { SelectorDeFecha } from "../../components/SelectorDeFecha/SelectorDeFecha";
import { CampoDesplegable } from "../../components/CampoDesplegable/CampoDesplegable";
import { PersonalCorporativo } from "../../components/PersonalCorporativo/PersonalCorporativo";
import { CampoDesplegableCreate } from "../../components/CampoDesplegableCreate/CampoDesplegableCreate";
import { CampoAutocomplete } from "../../components/CampoAutocomplete/CampoAutocomplete";
import { CampoDinero } from "../../components/CampoDinero/CampoDinero";
import { SwitchConCifra } from "../../components/SwitchConCifra/SwitchConCifra";
import { CostoTransferencia } from "./CostoTransferencia";
import { MovimientosContext } from "../MovimientosPage/MovimientosContext";

function NuevoEgreso() {
  const [formValues, setFormValues] = useState({
    fecha: null,
    cuenta: null,
    proveedor: null,
    indole: null,
    categoria: null,
    subcategoria: null,
    proyecto: null,
    descripcion: null,
  });

  const handleSave = () => {
    console.log(`Fecha: ${formValues.fecha}`);
    console.log(`Cuenta: ${formValues.cuenta}`);
    console.log(`Proveedor: ${formValues.proveedor}`);
    console.log(`Indole: ${formValues.indole}`);
    console.log(`Categoria: ${formValues.categoria}`);
    console.log(`Subcategoria: ${formValues.subcategoria}`);
    console.log(`Proyecto: ${formValues.proyecto}`);
  };

  // Recuperar la fecha seleccionada
  useEffect(() => {
    const storedDate = localStorage.getItem("selectedDate");

    if (storedDate) {
      setFormValues({
        ...formValues,
        fecha: new Date(),
      });
    } else {
      // Si no hay fecha en localStorage, establece la fecha por defecto como hoy
      setFormValues({
        ...formValues,
        fecha: new Date(),
      });
    }
  }, []);

  const [listOfCuentas, setListOfCuentas] = useState([]);
  const [loadingCuentas, setLoadingCuentas] = useState(true);
  const [listOfProveedores, setListOfProveedores] = useState([]);
  const [loadingProveedores, setLoadingProveedores] = useState(true);

  const [allCategorias, setAllCategorias] = useState([]);
  const [listOfCategorias, setListOfCategorias] = useState([]);
  const [loadingCategorias, setLoadingCategorias] = useState(true);
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
  const [selectedDate, setSelectedDate] = useState(null);

  const handleCategoriaSelect = (selection) => {
    if (selection) {
      setFormValues({
        ...formValues,
        categoria: selection,
        subcategoria: null,
      });

      const categoriaSeleccionada = allCategorias.find(
        (item) => item.categoria === selection
      );

      if (categoriaSeleccionada.son_varios) {
        const subcategoriasFiltradas = allCategorias
          .filter((item) => item.categoria === selection)
          .map((item) => item.subcategoria);

        setSubCategorias(subcategoriasFiltradas);
        setSubCategoriaExiste(true);
      } else {
        setSubCategorias([]);
        setSubCategoriaExiste(false);
      }
    } else {
      setSubCategorias([]);
      setSubCategoriaExiste(false);
      setFormValues({
        ...formValues,
        categoria: null,
        subcategoria: null,
      });
    }
  };

  const handleSubcategoriaSelect = (selection) => {
    if (selection) {
      setFormValues({
        ...formValues,
        subcategoria: selection,
      });
    } else {
      setFormValues({
        ...formValues,
        subcategoria: null,
      });
    }
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

  //Calculo del 4x1000
  useEffect(() => {
    let cuatroxmil = 0;
    if (cuatroPorMilActivo) {
      cuatroxmil = Math.round((montoPagado + costoTransferencia) * 0.004);
    }

    setCalculo4x1000(cuatroxmil);
    setConsolidadoDeEgresos(montoPagado + costoTransferencia + cuatroxmil);
  }, [montoPagado, costoTransferencia, cuatroPorMilActivo]);

  //Proveedores
  const obtenerDatosProveedores = () => {
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
  };

  const handleNuevoProveedor = async (newValue) => {
    const inputValue = newValue.inputValue;
    try {
      const response = await axios.post(
        "http://localhost:3001/proveedores/nuevo",
        {
          nombre: inputValue,
        }
      );
      obtenerDatosProveedores();
      setFormValues({
        ...formValues,
        proveedor: inputValue,
      });
    } catch (error) {
      console.error("Error al agregar el nuevo proveedor:", error);
    }
  };

  //Proyectos
  const obtenerDatosProyectos = () => {
    axios
      .get("http://localhost:3001/proyectos/list")
      .then((response) => {
        const proyectos = response.data;

        proyectos.sort((a, b) => {
          return a.nombre.localeCompare(b.nombre);
        });

        setListOfProyectos(proyectos);
      })
      .catch((error) => {
        console.error("Error al obtener datos de proyectos:", error);
      });
  };

  const handleNuevoProyecto = async (newValue) => {
    const inputValue = newValue.inputValue;
    try {
      const response = await axios.post(
        "http://localhost:3001/proyectos/nuevo",
        {
          nombre: inputValue,
          activo: true,
        }
      );
      obtenerDatosProyectos();
      setFormValues({
        ...formValues,
        proyecto: inputValue,
      });
    } catch (error) {
      console.error("Error al agregar el nuevo proyecto:", error);
    }
  };

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
      })
      .catch((error) => {
        console.error("Error al obtener datos de cuentas:", error);
        setLoadingProveedores(false);
      });

    axios
      .get("http://localhost:3001/categoriasegresos")
      .then((response) => {
        setAllCategorias(response.data);

        const categorias = [
          ...new Set(response.data.map((item) => item.categoria)),
        ];
        setListOfCategorias(categorias);

        setLoadingCategorias(false);

        console.log(categorias);
      })
      .catch((error) => {
        console.error("Error al obtener datos de gresos:", error);
        setLoadingCategorias(false);
      });

    obtenerDatosProveedores();
    obtenerDatosProyectos();
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
                  {/* Selector de Fecha */}
                  <SelectorDeFecha
                    fieldValue={formValues.fecha}
                    fieldName="fecha"
                    onSelect={(date) => {
                      setFormValues({
                        ...formValues,
                        fecha: date, // Actualiza la fecha en formValues
                      });
                    }}
                  />
                </div>

                <div className="info-box">
                  <h2 className="box-title titulo ">Cómo</h2>

                  {/* Selector de Cuenta */}
                  {!loadingCuentas && (
                    <CampoDesplegable
                      fieldName="cuenta"
                      etiqueta="Cuenta"
                      values={listOfCuentas}
                      columName="nombre"
                      onSelect={(data) => {
                        setFormValues({
                          ...formValues,
                          cuenta: data.props.value, // Actualiza la fecha en formValues
                        });
                      }}
                    />
                  )}

                  {/* Selector de Proveedor */}
                  {!loadingProveedores && (
                    <CampoDesplegableCreate
                      fieldName="proveedor"
                      etiqueta="Proveedor"
                      values={listOfProveedores}
                      columName="nombre"
                      handleAddValue={handleNuevoProveedor}
                      handleChangeValue={(newValue) => {
                        setFormValues({
                          ...formValues,
                          proveedor: newValue.nombre,
                        });
                      }}
                    />
                  )}
                </div>

                <div className="info-box">
                  <h2 className="box-title titulo ">Para Qué</h2>

                  {/* Indole Personal o Corporataivo */}
                  <PersonalCorporativo
                    setValue={(event) => {
                      setFormValues({
                        ...formValues,
                        indole: event.target.value,
                      });
                      setMostrarProyectos(event.target.value === "corporativo");
                    }}
                  />

                  {/* Categoría */}
                  {!loadingCategorias && (
                    <CampoAutocomplete
                      etiqueta="Categoría"
                      values={listOfCategorias}
                      onSelect={handleCategoriaSelect}
                    />
                  )}
                  {/* Subcategorúa */}
                  {subCategoriaExiste && (
                    <CampoAutocomplete
                      etiqueta="Sub Categoría"
                      values={subCategorias}
                      columName="nombre"
                      onSelect={handleSubcategoriaSelect}
                    />
                  )}

                  {/* Proyectos */}
                  {mostrarProyectos && (
                    <CampoDesplegableCreate
                      fieldName={"proyecto"}
                      etiqueta="Proyecto"
                      values={listOfProyectos}
                      columName="nombre"
                      handleAddValue={handleNuevoProyecto}
                      handleChangeValue={(newValue) => {
                        setFormValues({
                          ...formValues,
                          proyecto: newValue.nombre,
                        });
                      }}
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
