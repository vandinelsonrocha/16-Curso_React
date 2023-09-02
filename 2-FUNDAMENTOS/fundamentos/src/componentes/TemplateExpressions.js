import ComponenteReaproveitado from "./CompReaproveitado";

const TemplateExpressions = () =>  {
    const nome = "Vandinelson";
    const idade = 22;
    const tecnologia = "React";

    return (
        <div>
            <p>Meu nome é {nome}, tenho {idade} anos e estou estudando {tecnologia}.</p>
            <ComponenteReaproveitado/>
        </div>
    );
}
export default TemplateExpressions;