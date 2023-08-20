import './App.css';
import axios from "axios";
import {useEffect, useState} from "react"

function App() {
  
  //App
  return (
    <div className="App">
      <MainMenu />
      <Movimientos />
    </div>
  );
}

export default App;
