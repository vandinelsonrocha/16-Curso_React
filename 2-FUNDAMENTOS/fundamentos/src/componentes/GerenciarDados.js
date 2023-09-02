//Hook - useState
import {useState} from 'react';

const GerenciarDados = () => {
    let algumDado = 10;
    const [numero, setNumero] = useState(15);

    return (
        <div>
            <p>Valor: {algumDado}</p>
            <button onClick={() => (algumDado = 15)}>Mudar valor</button>

            <p>Valor: {numero}</p>
            <button onClick={() => setNumero(25)}>
                Mudar o state
            </button>
        </div>
    )
}

export default GerenciarDados;