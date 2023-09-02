import { useState, useEffect } from "react";

//4 - Custom hook
export const useFetch = (url) =>  {
    //Dados que são recebidos da API:
    const [dados, setDados] = useState(null)

    //5 - Refatorando o POST:
    const [config, setConfig] = useState(null) //Configurar o método a ser utilizado, os cabeçalhos
    const [metodo, setMetodo] = useState(null) //Método a ser utilizado (GET ou POST)
    const [callFetch, setCallFetch] = useState(false) //Responsável por trazer os dados atualizados

    //6 - carregamento de dados
    const [carregar, setCarregar] = useState(false) //false pq inicialmente não ha nada p/ carregar no sistema

    //7 - tratamento de erros
    const [erro, setErro] = useState(null)

    //Função de configuração:
    const httpConfig = (dados, metodo) =>  {
        if(metodo === "POST")  {
            setConfig({
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(dados),  //enviar os dados
            })
            setMetodo(metodo)
        }
    }

    //Request - é executado apenas uma vez, se a url mudar, o hook é novamente executado:
    useEffect(() =>  {
        const fetchDados = async () =>  {

            //6
            setCarregar(true) //Inicia o carregamento

            try  {
                //Carrega os dados:
                const res = await fetch(url)

                const dadosJson = await res.json()

                setDados(dadosJson)

            } catch (erro)  {
                //Se houver algum erro no carregamento dos dados:
                console.log(erro.message)
                setErro("Houve um erro ao carregar os dados!")
            }

            setCarregar(false) //fim do carregamento
        }
        fetchDados()
    }, [url, callFetch])

    //5.1
    useEffect(() =>  {
        const requisicaoHTTP = async () =>  {
            if(metodo === "POST")  {
                let fetchOpcoes = [url, config]
                const res = await fetch(...fetchOpcoes)
                const json = await res.json()
                setCallFetch(json)  //executa uma requisição GET qd o POST é concluído
            }
        }
        requisicaoHTTP()
    }, [config, metodo, url])

    return {dados, httpConfig, carregar, erro}
}