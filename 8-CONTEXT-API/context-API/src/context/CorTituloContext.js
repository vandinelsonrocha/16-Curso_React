//5-CONTEXTO MAIS COMPLEXO
import { createContext, useReducer } from "react";

export const CorTituloContext = createContext()

export const corTituloReducer = (state, action) =>  {
    //switch que vai dar os valores do contexto
    switch (action.type)  {
        case "LARANJA":
            return {...state, color: "orange"}
        case "VERDE":
            return {...state, color: "green"}
        default: 
            return state  //color: "blue"
    }
}

export const CorTituloContextProvider = ({children}) =>  {
    /*corTituloReducer = quem altera o estado
    color: blue = é o estado inicial*/
    const [state, dispatch] = useReducer(corTituloReducer, {color: "blue"}) //color: blue - valor padrão do contexto

    console.log("Cor do título do contexto: ", state)

    return (
        <CorTituloContext.Provider value = {{...state, dispatch}}> {/*state-é o que vai ser consumido na aplicação*/}
            {children}
        </CorTituloContext.Provider>
    )
}