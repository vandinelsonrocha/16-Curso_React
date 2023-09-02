const DesestruturandoProps = ({marca, kilometragem, cor, carroNovo}) =>  {
    return (
        <div>
            <h3>Detalhes do carro:</h3>
            <ul>
                <li>Marca: {marca}</li>
                <li>Kilometragem: {kilometragem}Km/h</li>
                <li>Cor: {cor}</li>
            </ul>
            {carroNovo && <p>O carro é novo</p>}
            {!carroNovo && <p>O carro não é novo</p>}
        </div>
    )
}
export default DesestruturandoProps;