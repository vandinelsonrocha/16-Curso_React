import { useState } from "react";

//RENDERIZAÇÃO CONDICIONAL:
const RenderCondicional = () => {
    const [x] = useState(true)

    const [nome] = useState("Vandy")

    return (
        <div>
            <h1>Renderização condicional if simples</h1>
            <p>Exibir mensagem (se não mostrar nada embaixo é pq a condição é falsa):</p>
            {x && <p>Msg: foca nos estudos e não desista!</p>}
            {!x && <p></p>}

            <h1>Renderização condicional if ternário</h1>
            {nome === "Vandy" ? (
                <div>
                    <p>O nome é Vandy!</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
        </div>
    )
}
export default RenderCondicional;