import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Produto = () =>  {
    //Rota dinâmica/exibir o id de cada produto acessado:
    const { id } = useParams() //È um objeto com todos os parâmetros da URL

    //Carregamento dado individual:
    const url = "http://localhost:3000/produtos/" + id
    const { dados: produto, carregar, erro } = useFetch(url)
    console.log(produto)

    return (
        <>
            {/*Rota dinâmica*/}
            <p>ID do produto: {id}</p>
            {/*Carregamento individual-ao clicar no link 'Detalhes' será impresso um único produto com o nome e preço*/}
            {erro && <p>Ocorreu um erro...</p>}
            {carregar && <p>Carregando...</p>}
            {produto && (
                <div>
                    <h1>{produto.nome}</h1>
                    <p>R$: {produto.preco}</p>
                    {/*Nested routes*/}
                    <Link to={`/produtos/${produto.id}/informações`}>Mais informações</Link>
                </div>
            )}
        </>
    )
}
export default Produto;