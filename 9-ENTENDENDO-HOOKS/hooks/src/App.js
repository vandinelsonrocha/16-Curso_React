//CSS
import './App.css';

//Componentes

//React router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//Páginas
import Inicio from './paginas/Inicio';
import Sobre from './paginas/Sobre';

//Hooks

function App() {
  return (
    <div className="App">
      <h1>Os Hooks do React</h1>
      <BrowserRouter>
        <ul>
          {/*Barra de navegação*/}
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
        {/*Roteamento*/}
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/sobre" element={<Sobre/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
