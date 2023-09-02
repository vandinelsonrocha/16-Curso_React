import { useParams } from 'react-router-dom'; //para pegar a informação/o id que vem da rota

const Informacoes = () => {
  //Nested routes:
  const {id} = useParams()

  return (
    <div>
        <h1>Mais informações sobre o produto: {id}</h1>
    </div>
  )
}

export default Informacoes;