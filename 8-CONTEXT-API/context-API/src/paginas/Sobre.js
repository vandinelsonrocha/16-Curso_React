import { useContext } from "react";
import { ContadorContext } from "../context/ContadorContext";

const Sobre = () => {
  const {contador} = useContext(ContadorContext)

  return (
    <div>
      <h1>Sobre</h1>
      <p>Valor do contador: {contador}</p>
    </div>
  )
}
export default Sobre;