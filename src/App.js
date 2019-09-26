import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Error from "./Error";


function App() {

  // state 
  // ciudad = state, guardarCiudad = this.setState()

  const [ ciudad, guardarCiudad ] = useState ('');
  const [ pais, guardarPais ] = useState('');
  const [ error, guardarError ] = useState(false);
  const [ resultado, guardarResultado ] = useState({})
  
  useEffect(() => {
   
    // prevenir ejecucion
    if(ciudad ==='') return;
    const consultarAPI = async () => {
    
   
      const appId = '27f11d4f920dfb17807a15ef5f15e40b';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
      
      //  consultar url
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarResultado(resultado);
    }
    consultarAPI();
  },[ ciudad, pais ]); 
  

  const datosConsulta = datos =>{
    // validar que esten los dos datos
      if (datos.ciudad === '' || datos.pais === ''){
        guardarError(true);
        return;
      }
      // si ciudad y país existen, agregarlos al state
      guardarCiudad(datos.ciudad);
      guardarPais(datos.pais);
      guardarError(false);

  }

       // cargar componente condicionalmente
       let componente;
       if (error){
          // hay un error mostrarlo
          componente = <Error mensaje='Ambos campos son obligatorios'/>
       }
      //  si no hay error mostrar el clima
      else{
          componente = null;
      }



  return (
    <div className="App">
      <Header titulo="React Clima App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario
                datosConsulta={datosConsulta}
              />
            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
