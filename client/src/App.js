import './App.css';
import axios from "axios";
import {useEffect, useState} from "react"

function App() {

  const [listOfMovements, setListOfMovements] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/egresos/movimientos").then((response) => {
      setListOfMovements(response.data);
    })
  }, [])

  
  //App
  return (
    <div className="App">
      
      <div className="main-menu"></div>


      {listOfMovements.map((value, key) => {
        return <div>{value.proveedor}  ${value.subtotal}</div>
      })}
    </div>
  );
}

export default App;
