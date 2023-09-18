import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovimientosPage from './pages/movimientos-page';

import './App.css';
import './assets/uicons-bold-rounded/css/uicons-bold-rounded.css';

// import axios from "axios";
// import {useEffect, useState} from "react"

function App() {
  
  //App
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MovimientosPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
