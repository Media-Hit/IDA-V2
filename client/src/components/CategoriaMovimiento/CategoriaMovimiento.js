import React from "react";
import { Link } from "react-router-dom";
import "./CategoriaMovimiento.css";

function CategoriaMovimiento({ linkTo, icono, label }) {
  return (
    <Link to={linkTo}>
      <div className="categoriaMovimiento__boton box-shadow">
        <span className="material-symbols-outlined categoriaMovimiento__icono">
          {icono}
        </span>
        <p className="categoriaMovimiento__label">{label}</p>
      </div>
    </Link>
  );
}

export { CategoriaMovimiento };
