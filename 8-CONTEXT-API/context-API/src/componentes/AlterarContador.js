//3-ALTERAR O CONTEXTO
import { useContext } from "react";
import { ContadorContext } from "../context/ContadorContext"; //permite alterar o contexto

const AlterarContador = () =>  {
    const {contador, setContador} = useContext(ContadorContext)

    return (
        <div>
            <button onClick={() => setContador(contador + 1)}>Adicionar valor ao contador</button>
        </div>
    )
}

export default AlterarContador;