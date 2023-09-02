import { useReducer, useState } from "react";

const HookUseReducer = () => {
  //1 - useReducer SIMPLES - USO APENAS DO STATE
  const [numero, dispatch] = useReducer((state, action) =>  {
    return Math.random(state)
  })
  /*
  const [numero, dispatch] = useReducer((state=4, action) =>  {
    return state+2
  })
  */

  //1.1 - useReducer COMPLEXO - USO DE STATE E ACTION
  const tarefasIniciais = [
    {id: 1, titulo: "Estudar React"},
    {id: 2, titulo: "Fazer projetos"}
  ]

  const tarefaReducer = (state, action) =>  { //é a função que altera o estado
    switch(action.type)  {
      case "ADICIONAR-TAREFA":
        const novaTarefa = {
          id: Math.random(),
          titulo: tituloTarefa
        }
        setTituloTarefa("") //para q o input fique vazio e possa adicionar nova tarefa

        return [...state, novaTarefa] //exibe todas as tarefas que já existem + a tarefa adicionada

      case "REMOVER-TAREFA":
        return state.filter((tarefa) => tarefa.id !== action.id)

      default:
        return state
    }
  }

  const [tituloTarefa, setTituloTarefa] = useState("") //para alterar o título das tarefas
  //dispatchTarefas é a função que executa tarefaReducer:
  const [tarefas, dispatchTarefas] = useReducer(tarefaReducer, tarefasIniciais) //assim é possível exibir as tarefas no componente

  const handleSubmit = (e) =>  {
    e.preventDefault()

    dispatchTarefas({type: "ADICIONAR-TAREFA"})
  }

  const removerTarefa = (id) =>  {
    dispatchTarefas({type: "REMOVER-TAREFA", id})
  }

  return (
    <div>
        <h2>2 - useReducer</h2>
        <p>Número: {numero}</p>
        <button onClick={dispatch}>Alterar número</button>
        {/*Exibir tarefas*/}
        <h3>Tarefas:</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTituloTarefa(e.target.value)} value={tituloTarefa} />
          <input type="submit" value="Enviar" />
        </form>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} onDoubleClick={() => removerTarefa(tarefa.id)}>{tarefa.titulo}</li>
        ))}
        <hr/>
    </div>
  )
}

export default HookUseReducer;