import { useEffect, useState } from "react";

const HookUseEffect = () =>  {
    //1 - useEffect SEM ARRAY DE DEPENDÊNCIAS
    useEffect(() =>  {
        console.log("Executando useEffect sem array de dependências!")
    })

    const [numero, setNumero] = useState(1)
    const alterarNumero = () =>  {
        setNumero(numero+1)
    }

    //1.1- useEffect COM ARRAY DE DEPENDÊNCIAS VAZIO
    useEffect(() =>  {
        console.log("useEffect com array de dependências vazio, executado apenas uma vez!")
    }, [])

    //1.2 - useEffect PREENCHIDO / ITEM(S) NO ARRAY DE DEPENDÊNCIAS
    const [outroNumero, setOutroNumero] = useState(0)

    useEffect(() =>  {
        if(outroNumero > 0)  { //uma forma de evitar que seja executado logo q carrega a página pela 1ªvez
            console.log('useEffect com array de dependências preenchido, executado apenas qd "outroNumero" muda!')
        }
    }, [outroNumero])

    //2- CLEANUP/LIMPEZA DO useEffect((
    /*
    useEffect(() =>  {
        const temporizador = setTimeout(() =>  {
            console.log("Limpeza do useEffect!")

            setOutroNumero(outroNumero+1) //isto pode gerar um problema se não tiver o return

        }, 2000)

        return () => clearTimeout(temporizador) //Limpeza-evita a execução do hook ao mudar de página

    }, [outroNumero])
    */

    return (
        <div>
            <h2>3 - useEffect</h2>
            <p>Número: {numero}</p>
            <button onClick={alterarNumero}>Adicionar número</button>
            <p>Outro número: {outroNumero}</p>
            <button onClick={() => setOutroNumero(outroNumero+1)}>Adicionar outro número</button>
            <hr/>
        </div>
    )
}

export default HookUseEffect;