const PropsMostrarNomeUsuario = (props) =>  {
    return (
        <div>
            <p>O meu nome é {props.nome} e tenho {props.idade} anos. Sou {props.nacionalidade}.</p>
        </div>
    )
}
export default PropsMostrarNomeUsuario;