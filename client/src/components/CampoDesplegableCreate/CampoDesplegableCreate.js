import React from "react";
import "./CampoDesplegableCreate.css";

function CampoDesplegableCreate({ values }) {
  return (
    <>
      {values.map((item, index) => (
        <span key={index}>{item.nombre}</span>
      ))}
    </>
  );
}

export { CampoDesplegableCreate };
