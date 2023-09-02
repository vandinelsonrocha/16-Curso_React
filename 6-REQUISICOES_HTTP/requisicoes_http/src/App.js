//CSS
import './App.css';

//Componentes

//Hooks
import { useState, useEffect } from 'react';
//4.1 - Importar o custom hook:
import { useFetch } from './hooks/useFetch';


//url base da API/servidor:
const url = "http://localhost:3000/produtos"

function App() {
  //1 - GUARDAR OS DADOS:
  const [produtos, setProdutos] = useState([])

  //4.2 - Usar os dados do custom hook:
  const { dados: itens, httpConfig, carregar, erro } = useFetch(url) //permite ter acesso aos dados do custom hook

  //2
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")

  //1.1 - RESGATAR OS DADOS:
  /*
  useEffect(() =>  {
    async function fetchData()  {
      const res = await fetch(url)

      //Transformar os dados que estão em texto puro/json para objeto:
      const dados = await res.json()

      setProdutos(dados)
    }
    fetchData()
  }, [])
  */

  //2 - ADIÇÃO DE DADOS/PRODUTOS:
  const handleSubmit = async (e) =>  {
    e.preventDefault()
    //2.2 - REQUISIÇÃO DE POST:
    const produto = {
      nome,
      preco,
    }
    //console.log(produto)
    /*
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(produto)
    })

    //3 - CARREGAMENTO DINÂMICO DE DADOS/SEM NECESSIDADE DE ESTAR RECARREGANDO A PÁGINA:
    //Primeiramente é preciso transformar o res num objeto:
    const prodAdicionado = await res.json()
    
    setProdutos((prevProdutos) => [...prevProdutos, prodAdicionado])
    */

    //5.2
    httpConfig(produto, "POST")

    //3.1 - LIMPAR OS SET DO useState:
    setNome("")
    setPreco("")
  }

  return (
    <div className="App">
      <h1>Requisições HTTP</h1>
      {/*1.2 - MOSTRAR OS DADOS NA TELA*/}
      {/*6.2*/}
      {carregar && <p>Carregando dados...</p>} {/*msg a ser exibida enquanto os dados são carregados*/}
      {/*7.1 - Exibir o erro caso houver*/}
      {erro && <p>{erro}</p>}
      {!carregar && (  //Qd carregar, mostra a lista de produtos
        <ul>
          {/*4.3 - Receber os dados só qd existirem/for diferente de null*/}
          {itens && itens.map((produto) => (
            <li key={produto.id}>
              {produto.nome} - R$: {produto.preco}
            </li>
          ))}
        </ul>
      )}
      {/*2.1*/}
      <div className="add-produto">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" name="preco" value={preco} onChange={(e) => setPreco(e.target.value)} />
          </label>
          {/*7 - carregamento de dados no post*/}
          {carregar && <input type="submit" value="Aguarde" disabled />} {/*O usuário só poderá criar um novo produto qd o produto que criou anterirmente estiver completamente adicionado*/}
          {!carregar && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
