//5-CONTEXTO MAIS COMPLEXO
import { useContext } from "react";
import { CorTituloContext } from "../context/CorTituloContext";

export const useCorTituloContext = () =>  {
    const context = useContext(CorTituloContext)

    if(!context)  {
        console.log("Houve algum problema com o contexto!")
    }

    return context;
}