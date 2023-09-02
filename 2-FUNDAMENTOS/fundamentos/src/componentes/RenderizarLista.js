import { useState } from "react";
//RENDERIZAÇÃO DE LISTA:
const RenderizarLista = () =>  {
    const [lista] = useState(["Vandy", "Ana", "Carmen", "Dénis"]);

    const [usuarios, setUsuarios] = useState([
        {id: 1, nome: "Vandy", idade: 22},
        {id: 2, nome: "Maribel", idade: 19},
        {id: 3, nome: "Cristiano", idade: 38},
    ])

    //PREVIOUS STATE:
    const remocaoAleatoria = () =>  {
        const numeroAleatorio = Math.floor(Math.random() * 4) //baseado no tamanho da lista de usuarios
        //Remover usuário aleatoriamente:
        setUsuarios((prevUsuarios) => {
            console.log(prevUsuarios)
            return prevUsuarios.filter((usuario) => numeroAleatorio !== usuario.id)
        })
    }

    return (
        <div>
            {/*Renderização das listas:*/}
            <ul>
                {lista.map((item, i) => (
                    //Imprimir a lista no navegador:
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.nome} - {usuario.idade} anos</li>
                ))}
            </ul>

            {/*Função de remover um usuário aleatoriamente com PREVIOUS STATE:*/}
            <button onClick={remocaoAleatoria}>Remover usuário aleatoriamente</button>
        </div>
    );
}
export default RenderizarLista;