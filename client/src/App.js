import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./assets/uicons-bold-rounded/css/uicons-bold-rounded.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovimientosPage } from "./pages/MovimientosPage";
import { BalancePage } from "./pages/BalancePage";
import { NuevoMovimientoPage } from "./pages/NuevoMovimientoPage";
import { NuevoEgresoPage } from "./pages/NuevoEgresoPage/";

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
