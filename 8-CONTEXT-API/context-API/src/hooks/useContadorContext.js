//4-CONTEXT COM HOOK
import { useContext } from 'react';
import { ContadorContext } from '../context/ContadorContext';

export const useContadorContext = () =>  {
    const context = useContext(ContadorContext)

    //Se não existir contexto (código do contexto errado, erro na criação do contexto):
    if(!context)  {
        console.log("Houve algum problema com o contexto!")
    }

    return context;
}