//1-CRIAR CONTEXTO
import {createContext, useState} from 'react';

export const ContadorContext = createContext() //assim é possível pegar o contexto em qq lugar

//2-CRIAR O PROVIDER
export const ContadorContextProvider = ({children}) =>  {
    const [contador, setContador] = useState(5)

    return (
        //value = valores que serão enviados
        <ContadorContext.Provider value = {{contador, setContador}}>
            {children}
        </ContadorContext.Provider>
    )
}  