//CSS
import './App.css';

//Componentes
import Navbar from './componentes/Navbar';
import FormularioDeBusca from './componentes/FormularioDeBusca';

//React router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Páginas
import Inicio from './paginas/Inicio';
import Sobre from './paginas/Sobre';
import Produto  from './paginas/Produto';
import Informacoes from './paginas/Informacoes';
import NaoEncontrada from './paginas/NaoEncontrada';
import Busca from './paginas/Busca';

//Hooks

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
        <Navbar/>
        {/*Busca*/}
        <FormularioDeBusca/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          {/*Rota dinâmica*/}
          <Route path="/produtos/:id" element={<Produto/>}/>
          {/*Nested routes*/}
          <Route path="/produtos/:id/informações" element={<Informacoes/>}/>
          {/*Busca*/}
          <Route path="/buscar" element={<Busca/>}/>
          {/*Redirecionamento de página*/}
          <Route path="/company" element={<Navigate to="/sobre"/>}/>
          {/*Página não encontrada*/}
          <Route path="*" element={<NaoEncontrada/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
