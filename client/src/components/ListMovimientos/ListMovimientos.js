import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import iconMapper from "../iconMapper";
import { format } from "date-fns";

// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import "./ListMovimientos.css";

function ListMovimientos({ items }) {
  const [listOfEgresos, setListOfEgresos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/egresos/egresos").then((response) => {
      setListOfEgresos(response.data);
    });
  }, []);

  return (
    <>
      {listOfEgresos.map((item, index) => (
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
