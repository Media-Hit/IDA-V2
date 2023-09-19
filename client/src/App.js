import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovimientosPage from "./pages/movimientos-page";
import { BalancePage } from "./pages/balance-page";
import { NuevoMovimientoPage } from "./pages/nuevoMovimiento-page";
import { NuevoEgresoPage } from "./pages/nuevoEgreso-page";

import "./App.css";
import "./assets/uicons-bold-rounded/css/uicons-bold-rounded.css";

// import {useEffect, useState} from "react"

function App() {
  //App
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MovimientosPage />} />
          <Route path="/balance" element={<BalancePage />} />
          <Route path="/nuevo-movimiento" element={<NuevoMovimientoPage />} />
          <Route path="/nuevo-egreso" element={<NuevoEgresoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
