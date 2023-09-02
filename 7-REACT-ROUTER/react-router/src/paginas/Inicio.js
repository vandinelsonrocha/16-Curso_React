import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Inicio.css";

const Inicio = () =>  {
    //Carregamento de dados:
    const url = "http://localhost:3000/produtos"
    const {dados: itens, erro} = useFetch(url)
    return  (
        <div>
            <h1>Produtos</h1>
            {/*Mostrar um erro*/}
            {erro && <p>{erro}</p>}
            <ul className="produtos">
                {/*Se não houver erro, imprimir dados/produtos*/}
                {itens &&
                    itens.map((item) => (
                        <li key={item.id}>
                            <h2>{item.nome}</h2>
                            <p>R$: {item.preco}</p>
                            {/*Rota dinâmica*/}
                            <Link to={`/produtos/${item.id}`}>Detalhes</Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}
export default Inicio;