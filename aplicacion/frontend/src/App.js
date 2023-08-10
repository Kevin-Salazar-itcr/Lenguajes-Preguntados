import './App.css';
import { useState } from 'react';
import Axios from 'axios';


function App() {
  //variables que gestionan valores de los inputs
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      apellido: apellido,
      }).then(() => {
        alert("Bienvenido al juego de preguntados");
      });
    
    //esconder div class app
    //document.querySelector(".App").style.display = "none";
  }

  return (
    <div className="App">
      <h1>Bienvenido al juego de preguntados</h1>
      <div className="datosJugador">
        <label className="datos">Nombre: <input onChange={(event)=>{
          setNombre(event.target.value);
        }} type="text" placeholder="Ingrese su nombre" />
        </label>
        
        <label className="datos">Apellido: <input onChange={(event)=>{
          setApellido(event.target.value);
        }} type="text" placeholder="Ingrese su apellido" /></label>
      </div>  
      <button onClick={add}>Iniciar juego</button>
    </div>
  );
}

export default App;
