const Eventos = () =>  {

    const handleEventoClick = () =>  {
        console.log("Clicou no botão!");
    };

    //Renderização:
    const renderX = (x) =>  {
        if(x)  {
            return <h1>Renderizando isto!</h1>;
        }
        else  {
            <h1>Também pode-se renderizar isto!</h1>;
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleEventoClick}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou noutro botão!")}>Clique aqui também</button>
            </div>
            <div>
                {renderX(true)}
                {renderX(false)}
            </div>
        </div>
    );
}
export default Eventos;