import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  //variables que gestionan valores para el historial
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const nombreCompleto = nombre + " " + apellido;
  let puntos = 0;
  let respuestas = [];

  //variables que gestionan los datos de la base de datos
  const [historialList, setHistorial] = useState([]);
  const [preguntasList, setPreguntas] = useState([]);
  let preguntas = [];
  
  
  //funcion que agrega el historial a la base de datos
  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombreCompleto: nombreCompleto,
      puntos: puntos,
      res1: respuestas[0],
      res2: respuestas[1],
      res3: respuestas[2],
      res4: respuestas[3],
      res5: respuestas[4],
      res6: respuestas[5],
      res7: respuestas[6],
      res8: respuestas[7],
      res9: respuestas[8],
      res10: respuestas[9],
      }).then(() => {
        console.log("historial guardado");
      });
  }

  //funcion que inicializa el juego
  const init = () => {
    //obtener preguntas de la base de datos
    Axios.get("http://localhost:3001/preguntas").then((response) => {
        setPreguntas(response.data);        
    });
    document.querySelector(".inicio").style.display = "none";
    document.querySelector(".juego").style.display = "block";
  }
    
  const empezar = () => {
    document.querySelector(".empezar").style.display = "none";
    document.querySelector(".preguntas").style.display = "block";
    document.querySelector(".preg").innerHTML = preguntas[i][0];
    document.querySelector(".op1").innerHTML = preguntas[i][1];
    document.querySelector(".op2").innerHTML = preguntas[i][2];
    document.querySelector(".op3").innerHTML = preguntas[i][3];
  }

  /**
   * funcion que detecta el boton presionado y valida si la respuesta es correcta o no
   * @param {*} event el evento que se genera al presionar un boton
   */
  let i = 0;
  async function validar (event) {
    try{
      //guardar respuesta en el array de respuestas
      respuestas[i] = event.target.innerHTML;
    
      //respuesta correcta: suma 1 punto y cambia el color del boton a verde
      if(preguntas[i][4] === event.target.innerHTML){
        puntos++;
        event.target.style.backgroundColor = "#4CAF50";
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }else{
        //respuesta incorrecta: cambia el color de botones a rojo y el de la respuesta correcta a naranja
        for(const element of document.querySelectorAll(".op1, .op2, .op3")){
          if(element.innerHTML === preguntas[i][4]){
            element.style.backgroundColor = "#d9630f";
          }else{
            element.style.backgroundColor = "red";
          }
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
      //cambiar color de los botones a azul
      for(const element of document.querySelectorAll(".op1, .op2, .op3")){
        element.style.backgroundColor = "#005d92";
      }  
      
      i++;
      document.querySelector(".preg").innerHTML = preguntas[i][0];
      document.querySelector(".op1").innerHTML = preguntas[i][1];
      document.querySelector(".op2").innerHTML = preguntas[i][2];
      document.querySelector(".op3").innerHTML = preguntas[i][3];
    }catch(error){
      console.log(error);
      document.querySelector(".preguntas").innerHTML = "Fin del juego, puntuacion: "+puntos;
      add();
    }
  }    
  
  //funcion que muestra el historial de la base de datos
  const getHistorial = () => {
    Axios.get("http://localhost:3001/historial").then((response) => {
        setHistorial(response.data);        
        document.querySelector(".inicio").style.display = "none";
        document.querySelector(".historial").style.display = "block";
    });
  }

  const volver = () => {
    document.querySelector(".inicio").style.display = "block";
    document.querySelector(".historial").style.display = "none";
  }

  return (
    <div className="App">
      <div className = "inicio">
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
        <button className='boton' onClick={init}>Iniciar juego</button><br />
        <button className = "mostrarUsuarios boton" onClick={getHistorial}>Mostrar historial</button>
      </div>
      
      <div className="historial">
        <h1>Historial de jugadores</h1>
        <button className = "volver" onClick={volver}>Volver a inicio</button>
      { 
          historialList.map((val, key) => {
            return (
              <div className="histUsuario">
                <h3>Nombre: {val.nombreCompleto} {val.fecha}</h3>
                <hr />
              </div>
            )
          })
        }
      </div>

      <div className="juego">
        <h1>¡Hora de jugar PREGUNTADOS!</h1>
        <h3>Jugador: {nombre} {apellido}</h3>
        {
          preguntasList.map((val, keys) => {
            preguntas.push([val.pregunta, val.op1, val.op2, val.op3, val.respuesta]);
            console.log(preguntas)
            return(null);
          })
        }
        <button className = "empezar boton" onClick={empezar}>Play time!</button>
        <div className="preguntas">
          <h3 className='preg'>a</h3>
          <button className = "op1" onClick = {validar}></button><br />
          <button className = "op2" onClick = {validar}></button><br />
          <button className = "op3" onClick = {validar}></button><br />
        </div>
      </div>
    </div>
    
  );
}

export default App;
