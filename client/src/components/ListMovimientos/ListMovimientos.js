import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import iconMapper from "../iconMapper";
import { format } from "date-fns";

// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import "./ListMovimientos.css";

function ListMovimientos({ selectedDate }) {
  const [listOfEgresos, setListOfEgresos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/egresos/egresos").then((response) => {
      setListOfEgresos(response.data);
    });
  }, []);

  const formatPickerDate = (dateString) => {
    const parsedDate = new Date(dateString); // Convertir a objeto Date
    return format(parsedDate, "yyyy-MM-dd"); // Formatear en el formato deseado
  };

  const formatDataBaseDate = (date) => {
    const parsedDate = new Date(date); // Convertir a objeto Date
    return format(parsedDate, "yyyy-MM-dd"); // Formatear en el formato deseado  };
  };

  // Filtrar Egresos a la selección del calendario
  const filteredEgresos = selectedDate
    ? listOfEgresos.filter(
        (item) =>
          formatDataBaseDate(item.fecha) === formatPickerDate(selectedDate)
      )
    : listOfEgresos;

  // Ordenar la lista de egresos por fecha en orden descendente
  const sortedEgresos = [...filteredEgresos].sort(
    (a, b) => new Date(b.fecha) - new Date(a.fecha)
  );

  return (
    <>
      {sortedEgresos.map((item, index) => (
        <div key={index} className="listMov__item-box">
          <span className="listMov__icon material-symbols-outlined">
            {iconMapper[item.categoria]}
          </span>

          <div className="listMov__column2">
            <p className="listMov__column2__agente">{item.proveedor}</p>
            <p className="listMov__column2__descripcion">{item.descripcion}</p>
          </div>

          <div className="listMov__column3">
            <p className="listMov__column3__price">
              {item.subtotal.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
              })}
            </p>
            <p className="listMov__column3__date">
              {format(new Date(item.fecha), "MMMM dd")}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export { ListMovimientos };
