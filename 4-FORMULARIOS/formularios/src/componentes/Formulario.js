import './Formulario.css';

import { useState } from 'react';

const Formulario = ({usuario}) => {

    //1 - Gerenciamento de dados:
    const [nome, setNome] = useState(usuario ? usuario.nome : "")
    const [email, setEmail] = useState(usuario ? usuario.email : "")
    const [bio, setBio] = useState(usuario ? usuario.bio : "")
    const [funcao, setFuncao] = useState(usuario ? usuario.funcao : "")

    const handleNome = (e) =>  {
        setNome(e.target.value)
    }
    //Mudar o estado do input a cada vez que é digitado algo:
    console.log(nome)
    console.log(email)

    //2 - Envio de formulário
    const handleSubmit = (e) =>  {
        e.preventDefault() //evita que a página seja recarregada sempre que o usuário clicar em ENVIAR
        console.log("Formulário enviado com sucesso!")
        //Acesso aos dados:
        console.log(`Nome: ${nome}; Email: ${email}; Biografia: ${bio}; Função: ${funcao}`)

        //3 - Limpar os valores do formulário após o envio:
        setNome("")
        setEmail("")
        setBio("")
    }

  return (
    <div>
        {/*Criação do formulário*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" id="nome" placeholder="Digite o seu nome" value={nome} onChange={handleNome}/>
            </div>
            {/*Label envolvendo o input*/}
            <label>
                <span>E-mail:</span>
                {/*Simplificação do gerenciamento*/}
                <input type="email" name="email" placeholder="Digite o seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            {/*4 - Textarea*/}
            <label>
                <span>Biografia:</span>
                <textarea name="bio" placeholder="Fale um pouco sobre você..." onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/*5 - Select*/}
            <label>
                <span>Função no sistema:</span>
                <select name="funcao" onChange={(e) => setFuncao(e.target.value)} value={funcao}>
                    <option value="usuario">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
export default Formulario;