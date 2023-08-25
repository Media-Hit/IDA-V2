import './App.css';
import './assets/uicons-bold-rounded/css/uicons-bold-rounded.css';
import axios from "axios";
import {useEffect, useState} from "react"
import { MainMenu } from './components/MainMenu/MainMenu';
import { Movimientos } from './components/Movimientos/Movimientos';


function App() {
  
  //App
  return (
    <div className="App">
      <div className='mainAppContainer'>
        <MainMenu />
        <Movimientos />     
      </div>
    </div>
  );
}

export default App;
