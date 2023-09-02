//Componentes
import UsandoCSSnoComponente from './componentes/UsandoCSSnoComponente';
import CssModules from './componentes/CssModules';

//Hooks
import { useState } from "react";

//CSS
import './App.css';

function App() {

  const n = 17
  const [nome] = useState("Vandy")
  const titulo = false

  return (
    <div className="App">
      {/*CSS global*/}
      <h1>React com CSS</h1>

      {/*CSS de componentes*/}
      <UsandoCSSnoComponente/>
      <p>Este parágrafo é do App.js</p>

      {/*CSS inline*/}
      <h4 style={
        {color: "gold", 
        borderTop: "2px solid green", 
        padding: "1.5rem", 
        backgroundColor: "gray"}}>
        Estudando CSS no React
      </h4>

      {/*CSS inline dinâmico*/}
      <h4 style={n > 10 ? {backgroundColor: "blue"} : {backgroundColor: "magenta"}}>CSS inline dinâmico com if ternário normal</h4>

      <h4 style={nome === "Vandy" ? {backgroundColor: "orange"} : null}>CSS inline dinâmico com if ternário e usando um Hook</h4>

      {/*Classes dinâmicas*/}
      <h4 className={titulo ? "titulo-azul" : "titulo-rosa"}>
        Classes dinâmicas
      </h4>

      {/*CSS modules*/}
      <CssModules/>
      <h1 className="modules">CSS Modules 2</h1>
    </div>
  );
}

export default App;
