import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";  //para pegar os dados

const Busca = () => {
  const [searchParams] = useSearchParams() //pegar o que está no searchParams
  const url = "http://localhost:3000/produtos?" + searchParams //url que será enviada para a API
  const {dados: itens} = useFetch(url)

  return (
    <div>
        <h1>Resultados disponíveis:</h1>
        <ul className="produtos">
            {itens &&
                itens.map((item) => (
                    <li key={item.id}>
                        <h2>{item.nome}</h2>
                        <p>R$: {item.preco}</p>
                        <Link to={`/produtos/${item.id}`}>Detalhes</Link>
                    </li>
            ))}
        </ul>
    </div>
  )
}

export default Busca;