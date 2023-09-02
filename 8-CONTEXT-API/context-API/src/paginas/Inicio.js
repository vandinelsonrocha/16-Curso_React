import "./Inicio.css";

//1.1-IMPORTAR O CONTEXTO PARA USO
//import { useContext } from "react";
//import { ContadorContext } from "../context/ContadorContext";
import AlterarContador from "../componentes/AlterarContador";

//4.1-CONTEXT COM HOOK
import { useContadorContext } from "../hooks/useContadorContext";

//5-CONTEXTO MAIS COMPLEXO
import { useCorTituloContext } from "../hooks/useCorTituloContext";

const Inicio = () => {
  //1.2-USO DO CONTEXTO - consumindo o valor do contexto compartilhado de ContadorContexto via Provider (contador)
  //const {contador} = useContext(ContadorContext)

  //4.1
  const {contador} = useContadorContext()

  //5-CONTEXTO MAIS COMPLEXO
  const {color, dispatch} = useCorTituloContext() //color que vem do ...state e assim color pode ser acedido em algum lugar

  //6-ALTERANDO CONTEXTO COMPLEXO
  const setCorTitulo = (color) =>  {
    dispatch({type: color})
  }

  return (
    <div>
        <h1 style={{color: color}}>Início</h1>
        <p>Valor do contador: {contador}</p>
        {/*3.1-ALTERAR O VALOR DO CONTEXTO*/}
        <AlterarContador />
        {/*6-ALTERANDO CONTEXTO COMPLEXO*/}
        <div className="cor-botoes">
          <button onClick={() => setCorTitulo("LARANJA")}>Laranja</button>
          <button onClick={() => setCorTitulo("VERDE")}>Verde</button>
        </div>
    </div>
  )
}
export default Inicio;