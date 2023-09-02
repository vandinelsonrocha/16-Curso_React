import { useState } from "react";

const HookUseState = () => {
  //1-useState
  let nome1 = "Vandy"

  const [nome2, setNome2] = useState("Dani")

  const alterarNome = () =>  {
    nome1 = "Vandy Gomes"
    setNome2("Dani Cruz")
  }

  //1.1-useState e input
  const [nome, setNome] = useState("Bruno Rocha")
  const [idade, setIdade] = useState(22)


  const handleSubmit = (e) =>  {
    e.preventDefault()
    alert(nome)
    alert(idade)
  }

  return (
    <div>
        {/*1-useState*/}
        <h2>1 - useState</h2>
        <p>Variável: {nome1}</p>
        <p>useState: {nome2}</p>
        <button onClick={alterarNome}>Alterar nomes</button>
        {/*1.1-useState e input*/}
        <form onSubmit={handleSubmit}>
            <p>Digite o seu nome:</p>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            <p>Digite a sua idade:</p>
            <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
            <input type="submit" value="Enviar" />
        </form>
        <p>O seu nome é {nome}</p>
        <p>Você tem {idade} anos.</p>
        <hr/>
    </div>
  )
}

export default HookUseState;