import './App.css';
import axios from "axios";
import {useEffect, useState} from "react"
import { MainMenu } from './modules/MainMenu/MainMenu';
function App() {
  
  //App
  return (
    <div className="App">
    <MainMenu />
    </div>
  );
}

export default App;
