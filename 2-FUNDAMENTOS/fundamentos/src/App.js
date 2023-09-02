/*COMPONENTES*/
import PrimeiroComponente from "./componentes/PrimComponente";
import Apresentacao from "./componentes/Apresentacao";
import TemplateExpressions from "./componentes/TemplateExpressions";
import Eventos from "./componentes/Eventos";
import GerenciarDados from "./componentes/GerenciarDados";
import RenderizarLista from "./componentes/RenderizarLista";
import RenderCondicional from "./componentes/RenderCondicional";
import PropsMostrarNomeUsuario from "./componentes/PropsMostrarNomeUsuario";
import DesestruturandoProps from "./componentes/DesestruturandoProps";
import Fragment from "./componentes/Fragment";
import ContainerChildrenProp from "./componentes/ContainerChildrenProp";
import FuncaoProps from "./componentes/FuncaoProps";
import ElevacaoDeStateMensagem from "./componentes/ElevacaoDeStateMensagem";
import AlterarStateMensagem from "./componentes/AlterarStateMensagem";

//Hooks
import { useState } from "react";

//Imagens
import LogoCSS from "./assets/logo-css.png";

/*CSS*/
import './App.css';

function App() {

  const idade = 22
  const [nacionalidade] = useState("Caboverdiano")

  const carros = [
    {id: 1, marca: "Ferrari", cor: "branca", kilometragem: 0, carroNovo: true},
    {id: 2, marca: "KIA", cor: "amarela", kilometragem: 34343, carroNovo: false},
    {id: 3, marca: "Renault", cor: "castanho", kilometragem: 234, carroNovo: false},
  ]

  function mostrarMensagem()  {
    console.log("Evento do componente pai!")
  }

  //ELEVAÇÃO DE STATE:
  const [mensagem, setMensagem] = useState("")
  //Função para alterar o estado da mensagem:
  const lidarComMensagem = (msg) =>  {
    setMensagem(msg)
  }

  return (
    <div className="App">
      <h1>React</h1>
      <PrimeiroComponente/>
      <Apresentacao/>
      <TemplateExpressions/>
      <p>{console.log("Desenvolvedor Frontend")}</p>
      <Eventos />

      <GerenciarDados/>
      <RenderizarLista/>

      <RenderCondicional/>

      {/*Props*/}
      <PropsMostrarNomeUsuario nome="Vandinelson" idade={idade} nacionalidade={nacionalidade}/>

      {/*Desestruturando props e reutilização de componente*/}
      <h2>Imprimindo os detalhes dos carros através de reutilização de componente</h2>
      <DesestruturandoProps marca="Toyota" kilometragem={220} cor="azul" carroNovo={false}/>
      <DesestruturandoProps marca="Fiat" kilometragem={0} cor="preto" carroNovo={true}/>
      <DesestruturandoProps marca="Ford" kilometragem={4500} cor="branco" carroNovo={false}/>

      {/*Imprimindo os detalhes dos carros através de um loop, em vez de reutilizar o componente vária vezes*/}
      <h2>Imprimindo os detalhes dos carros através de um loop (map)</h2>
      {carros.map((carro) => (
        <DesestruturandoProps
          key={carro.id} //Cada elemento que leva um loop precisa ter o objeto key, senão é exibido um erro ao inspecionar a página
          marca={carro.marca}
          kilometragem={carro.kilometragem}
          cor={carro.cor}
          carroNovo={carro.carroNovo}
        />
      ))}

      {/*Fragment*/}
      <Fragment/>

      {/*Children prop*/}
      <ContainerChildrenProp minhaNota={17}>
        <p>Vandy</p>
        <p>Bruno</p>
      </ContainerChildrenProp>

      {/*Função em props*/}
      <FuncaoProps minhaFuncao={mostrarMensagem}/>

      {/*Elevação de state*/}
      <ElevacaoDeStateMensagem msg={mensagem}/>
      <AlterarStateMensagem lidar={lidarComMensagem}/>

      {/*Uso de imagens*/}
      <img src="/logo-html.png" alt="logo do HTML" />
      <img src={LogoCSS} alt="logo do CSS" />
    </div>
  );
}

export default App;
