import { useNavigate } from "react-router-dom"; //para redirecionar o usuário dentro do código do componente-pegar a busca do usuário e direcionar para a pág. de busca
import { useState } from "react"; //pegar o estado do input

const FormularioDeBusca = () => {
  const navigate = useNavigate()
  const [buscar, setBuscar] = useState() //manipular o estado, manipular o valor para pegar a busca

  const handleSubmit = (e) =>  {
    e.preventDefault()

    navigate("/buscar?q=" + buscar) //buscar = ao que o usuário digitar para buscar
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setBuscar(e.target.value)} />
        <input type="submit" value="Buscar" />
    </form>
  )
}

export default FormularioDeBusca;