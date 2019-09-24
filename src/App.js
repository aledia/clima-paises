import React, {useState} from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {

  // state 
  // ciudad = state, guardarCiudad = this.setState()

  const [ ciudad, guardarCiudad ] = useState ('');
  const [ pais, guardarPais ] = useState('');
  const [ error, guardarError ] = useState(false);

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
