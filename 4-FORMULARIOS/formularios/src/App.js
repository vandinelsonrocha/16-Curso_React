//Componentes
import Formulario from './componentes/Formulario';

//CSS
import './App.css';

//Hooks

function App() {
  return (
    <div className="App">
      <h1 className="form-titulo">Formulário</h1>
      <Formulario usuario={{nome: "Vandinelson", email: "vgomes@uta.cv", bio: "Sou um desenvolvedor web Frontend", funcao: "admin"}}/>
    </div>
  );
}

export default App;
